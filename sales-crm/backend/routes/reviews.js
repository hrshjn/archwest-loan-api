import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { getDatabase } from '../db/init.js';

const router = Router();

/**
 * GET /api/reviews/weekly - Generate weekly review summary
 */
router.get('/weekly', (req, res) => {
  const db = getDatabase();
  try {
    const { week_start, week_end, rep_id } = req.query;

    // Default to current week if not specified
    const now = new Date();
    const startOfWeek = week_start || new Date(now.setDate(now.getDate() - now.getDay())).toISOString().split('T')[0];
    const endOfWeek = week_end || new Date(now.setDate(now.getDate() - now.getDay() + 6)).toISOString().split('T')[0];

    let repFilter = '';
    const params = [startOfWeek, endOfWeek];
    if (rep_id) {
      repFilter = 'AND rep_id = ?';
      params.push(rep_id);
    }

    // Activity summary
    const activityStats = db.prepare(`
      SELECT
        COUNT(*) as total_activities,
        COUNT(CASE WHEN activity_type = 'call' THEN 1 END) as total_calls,
        COUNT(CASE WHEN activity_type = 'email' THEN 1 END) as total_emails,
        COUNT(DISTINCT account_id) as accounts_touched,
        SUM(duration_seconds) / 60 as total_call_minutes
      FROM activities
      WHERE DATE(activity_date) BETWEEN ? AND ? ${repFilter}
    `).get(...params);

    // Top accounts by activity
    const topAccounts = db.prepare(`
      SELECT 
        acc.id, acc.name, acc.domain, acc.deal_stage,
        COUNT(act.id) as activity_count,
        MAX(act.activity_date) as last_activity
      FROM accounts acc
      JOIN activities act ON act.account_id = acc.id
      WHERE DATE(act.activity_date) BETWEEN ? AND ? ${repFilter}
      GROUP BY acc.id
      ORDER BY activity_count DESC
      LIMIT 10
    `).all(...params);

    // Deals with no activity (stuck)
    const stuckDeals = db.prepare(`
      SELECT 
        d.id, d.name, d.stage, d.deal_size,
        acc.name as account_name,
        MAX(act.activity_date) as last_activity,
        JULIANDAY('now') - JULIANDAY(MAX(act.activity_date)) as days_since_activity
      FROM deals d
      JOIN accounts acc ON acc.id = d.account_id
      LEFT JOIN activities act ON act.deal_id = d.id OR act.account_id = d.account_id
      WHERE d.status = 'active'
      GROUP BY d.id
      HAVING days_since_activity > 7 OR last_activity IS NULL
      ORDER BY days_since_activity DESC
      LIMIT 10
    `).all();

    // Recent highlights (calls with summaries)
    const highlights = db.prepare(`
      SELECT 
        act.id, act.title, act.summary, act.outcome, act.activity_date,
        acc.name as account_name
      FROM activities act
      LEFT JOIN accounts acc ON acc.id = act.account_id
      WHERE DATE(act.activity_date) BETWEEN ? AND ?
        AND act.outcome IS NOT NULL
        ${repFilter}
      ORDER BY act.activity_date DESC
      LIMIT 10
    `).all(...params);

    // Pipeline snapshot
    const pipeline = db.prepare(`
      SELECT 
        stage,
        COUNT(*) as deal_count,
        SUM(deal_size) as total_value
      FROM deals
      WHERE status = 'active'
      GROUP BY stage
    `).all();

    res.json({
      week: { start: startOfWeek, end: endOfWeek },
      stats: activityStats,
      topAccounts,
      stuckDeals,
      highlights,
      pipeline,
    });
  } finally {
    db.close();
  }
});

/**
 * GET /api/reviews/account/:id - Generate account review summary
 */
router.get('/account/:id', (req, res) => {
  const db = getDatabase();
  try {
    const account = db.prepare(`
      SELECT * FROM accounts WHERE id = ?
    `).get(req.params.id);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Activity timeline
    const activities = db.prepare(`
      SELECT 
        act.*,
        sr.name as rep_name
      FROM activities act
      LEFT JOIN sales_reps sr ON sr.id = act.rep_id
      WHERE act.account_id = ?
      ORDER BY act.activity_date DESC
      LIMIT 30
    `).all(req.params.id);

    // Aggregate pain points across all calls
    const allPainPoints = activities
      .filter(a => a.pain_points)
      .flatMap(a => {
        try { return JSON.parse(a.pain_points); } catch { return []; }
      });

    // Aggregate next steps
    const allNextSteps = activities
      .filter(a => a.next_steps)
      .flatMap(a => {
        try { return JSON.parse(a.next_steps); } catch { return []; }
      });

    // Contacts and their engagement
    const contacts = db.prepare(`
      SELECT 
        c.*,
        COUNT(ap.id) as interaction_count
      FROM contacts c
      LEFT JOIN activity_participants ap ON ap.contact_id = c.id
      WHERE c.account_id = ?
      GROUP BY c.id
      ORDER BY interaction_count DESC
    `).all(req.params.id);

    // Deals
    const deals = db.prepare(`
      SELECT * FROM deals WHERE account_id = ? ORDER BY deal_size DESC
    `).all(req.params.id);

    // Summary
    const summary = {
      total_interactions: activities.length,
      total_call_minutes: activities.reduce((sum, a) => sum + (a.duration_seconds || 0), 0) / 60,
      key_contacts: contacts.slice(0, 5),
      recent_pain_points: [...new Set(allPainPoints)].slice(0, 10),
      pending_next_steps: [...new Set(allNextSteps)].slice(0, 10),
      active_deal_value: deals.filter(d => d.status === 'active').reduce((sum, d) => sum + d.deal_size, 0),
    };

    res.json({
      account,
      summary,
      activities: activities.map(a => ({
        ...a,
        pain_points: a.pain_points ? JSON.parse(a.pain_points) : [],
        next_steps: a.next_steps ? JSON.parse(a.next_steps) : [],
      })),
      contacts,
      deals,
    });
  } finally {
    db.close();
  }
});

export default router;
