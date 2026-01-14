import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { getDatabase } from '../db/init.js';

const router = Router();

/**
 * GET /api/activities - List activities with filters
 */
router.get('/', (req, res) => {
  const db = getDatabase();
  try {
    const { account_id, deal_id, activity_type, source, limit = 50, offset = 0 } = req.query;
    
    let whereClause = '1=1';
    const params = [];
    
    if (account_id) { whereClause += ' AND a.account_id = ?'; params.push(account_id); }
    if (deal_id) { whereClause += ' AND a.deal_id = ?'; params.push(deal_id); }
    if (activity_type) { whereClause += ' AND a.activity_type = ?'; params.push(activity_type); }
    if (source) { whereClause += ' AND a.source = ?'; params.push(source); }

    params.push(parseInt(limit), parseInt(offset));

    const activities = db.prepare(`
      SELECT 
        a.*,
        acc.name as account_name,
        acc.domain as account_domain,
        sr.name as rep_name
      FROM activities a
      LEFT JOIN accounts acc ON acc.id = a.account_id
      LEFT JOIN sales_reps sr ON sr.id = a.rep_id
      WHERE ${whereClause}
      ORDER BY a.activity_date DESC
      LIMIT ? OFFSET ?
    `).all(...params);

    res.json(activities.map(a => ({
      ...a,
      pain_points: a.pain_points ? JSON.parse(a.pain_points) : [],
      next_steps: a.next_steps ? JSON.parse(a.next_steps) : [],
    })));
  } finally {
    db.close();
  }
});

/**
 * GET /api/activities/:id - Get single activity with all details
 */
router.get('/:id', (req, res) => {
  const db = getDatabase();
  try {
    const activity = db.prepare(`
      SELECT 
        a.*,
        acc.name as account_name,
        sr.name as rep_name
      FROM activities a
      LEFT JOIN accounts acc ON acc.id = a.account_id
      LEFT JOIN sales_reps sr ON sr.id = a.rep_id
      WHERE a.id = ?
    `).get(req.params.id);

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    const participants = db.prepare(`
      SELECT * FROM activity_participants WHERE activity_id = ?
    `).all(req.params.id);

    res.json({
      ...activity,
      pain_points: activity.pain_points ? JSON.parse(activity.pain_points) : [],
      next_steps: activity.next_steps ? JSON.parse(activity.next_steps) : [],
      participants,
    });
  } finally {
    db.close();
  }
});

/**
 * POST /api/activities - Create manual activity (note, voice update, screenshot)
 */
router.post('/', (req, res) => {
  const db = getDatabase();
  try {
    const {
      account_id, deal_id, contact_id, rep_id,
      activity_type, title, summary, full_content,
      activity_date
    } = req.body;

    if (!activity_type || !title) {
      return res.status(400).json({ error: 'activity_type and title are required' });
    }

    const id = uuid();
    db.prepare(`
      INSERT INTO activities (
        id, account_id, deal_id, contact_id, rep_id,
        activity_type, source, title, summary, full_content,
        activity_date
      ) VALUES (?, ?, ?, ?, ?, ?, 'manual', ?, ?, ?, ?)
    `).run(
      id, account_id, deal_id, contact_id, rep_id,
      activity_type, title, summary, full_content,
      activity_date || new Date().toISOString()
    );

    const activity = db.prepare('SELECT * FROM activities WHERE id = ?').get(id);
    res.status(201).json(activity);
  } finally {
    db.close();
  }
});

/**
 * GET /api/activities/stats/summary - Get activity statistics
 */
router.get('/stats/summary', (req, res) => {
  const db = getDatabase();
  try {
    const { start_date, end_date } = req.query;
    
    let dateFilter = '';
    const params = [];
    
    if (start_date && end_date) {
      dateFilter = 'WHERE activity_date BETWEEN ? AND ?';
      params.push(start_date, end_date);
    }

    const stats = db.prepare(`
      SELECT
        COUNT(*) as total_activities,
        COUNT(CASE WHEN activity_type = 'call' THEN 1 END) as total_calls,
        COUNT(CASE WHEN activity_type = 'email' THEN 1 END) as total_emails,
        COUNT(CASE WHEN activity_type = 'voice_note' THEN 1 END) as total_voice_notes,
        COUNT(DISTINCT account_id) as accounts_touched,
        SUM(duration_seconds) as total_call_duration
      FROM activities
      ${dateFilter}
    `).get(...params);

    res.json(stats);
  } finally {
    db.close();
  }
});

export default router;
