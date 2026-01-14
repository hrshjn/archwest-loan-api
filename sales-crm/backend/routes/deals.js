import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { getDatabase } from '../db/init.js';

const router = Router();

// Deal stages with weights for pipeline calculations
const DEAL_STAGES = {
  'discovery': { order: 1, probability: 10 },
  'qualification': { order: 2, probability: 20 },
  'demo': { order: 3, probability: 40 },
  'proposal': { order: 4, probability: 60 },
  'negotiation': { order: 5, probability: 80 },
  'closed_won': { order: 6, probability: 100 },
  'closed_lost': { order: 7, probability: 0 },
};

/**
 * GET /api/deals - List all deals with account info
 */
router.get('/', (req, res) => {
  const db = getDatabase();
  try {
    const { stage, status, owner_id } = req.query;
    
    let whereClause = '1=1';
    const params = [];
    
    if (stage) { whereClause += ' AND d.stage = ?'; params.push(stage); }
    if (status) { whereClause += ' AND d.status = ?'; params.push(status); }
    if (owner_id) { whereClause += ' AND d.owner_id = ?'; params.push(owner_id); }

    const deals = db.prepare(`
      SELECT 
        d.*,
        a.name as account_name,
        a.domain as account_domain,
        sr.name as owner_name,
        (SELECT COUNT(*) FROM activities WHERE deal_id = d.id) as activity_count,
        (SELECT MAX(activity_date) FROM activities WHERE deal_id = d.id) as last_activity_date
      FROM deals d
      LEFT JOIN accounts a ON a.id = d.account_id
      LEFT JOIN sales_reps sr ON sr.id = d.owner_id
      WHERE ${whereClause}
      ORDER BY d.deal_size DESC
    `).all(...params);

    res.json(deals);
  } finally {
    db.close();
  }
});

/**
 * GET /api/deals/pipeline - Get pipeline summary by stage
 */
router.get('/pipeline', (req, res) => {
  const db = getDatabase();
  try {
    const pipeline = db.prepare(`
      SELECT 
        stage,
        COUNT(*) as deal_count,
        SUM(deal_size) as total_value,
        AVG(deal_size) as avg_deal_size
      FROM deals
      WHERE status = 'active'
      GROUP BY stage
    `).all();

    // Add stage metadata and calculate weighted pipeline
    const pipelineWithMeta = pipeline.map(p => ({
      ...p,
      order: DEAL_STAGES[p.stage]?.order || 0,
      probability: DEAL_STAGES[p.stage]?.probability || 0,
      weighted_value: p.total_value * (DEAL_STAGES[p.stage]?.probability || 0) / 100,
    })).sort((a, b) => a.order - b.order);

    const totals = {
      total_deals: pipelineWithMeta.reduce((sum, p) => sum + p.deal_count, 0),
      total_value: pipelineWithMeta.reduce((sum, p) => sum + p.total_value, 0),
      weighted_value: pipelineWithMeta.reduce((sum, p) => sum + p.weighted_value, 0),
    };

    res.json({ stages: pipelineWithMeta, totals });
  } finally {
    db.close();
  }
});

/**
 * GET /api/deals/:id - Get deal details
 */
router.get('/:id', (req, res) => {
  const db = getDatabase();
  try {
    const deal = db.prepare(`
      SELECT 
        d.*,
        a.name as account_name,
        a.domain as account_domain,
        sr.name as owner_name
      FROM deals d
      LEFT JOIN accounts a ON a.id = d.account_id
      LEFT JOIN sales_reps sr ON sr.id = d.owner_id
      WHERE d.id = ?
    `).get(req.params.id);

    if (!deal) {
      return res.status(404).json({ error: 'Deal not found' });
    }

    // Get related activities
    const activities = db.prepare(`
      SELECT * FROM activities WHERE deal_id = ? ORDER BY activity_date DESC LIMIT 20
    `).all(req.params.id);

    res.json({
      ...deal,
      activities: activities.map(a => ({
        ...a,
        pain_points: a.pain_points ? JSON.parse(a.pain_points) : [],
        next_steps: a.next_steps ? JSON.parse(a.next_steps) : [],
      })),
    });
  } finally {
    db.close();
  }
});

/**
 * POST /api/deals - Create new deal
 */
router.post('/', (req, res) => {
  const db = getDatabase();
  try {
    const { account_id, name, stage, deal_size, expected_close_date, owner_id, notes } = req.body;

    if (!account_id || !name) {
      return res.status(400).json({ error: 'account_id and name are required' });
    }

    const id = uuid();
    const dealStage = stage || 'discovery';
    const probability = DEAL_STAGES[dealStage]?.probability || 10;

    db.prepare(`
      INSERT INTO deals (id, account_id, name, stage, deal_size, probability, expected_close_date, owner_id, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, account_id, name, dealStage, deal_size || 0, probability, expected_close_date, owner_id, notes);

    const deal = db.prepare('SELECT * FROM deals WHERE id = ?').get(id);
    res.status(201).json(deal);
  } finally {
    db.close();
  }
});

/**
 * PATCH /api/deals/:id - Update deal
 */
router.patch('/:id', (req, res) => {
  const db = getDatabase();
  try {
    const { name, stage, deal_size, expected_close_date, owner_id, status, notes } = req.body;
    
    const updates = [];
    const values = [];
    
    if (name !== undefined) { updates.push('name = ?'); values.push(name); }
    if (stage !== undefined) { 
      updates.push('stage = ?'); 
      values.push(stage);
      updates.push('probability = ?');
      values.push(DEAL_STAGES[stage]?.probability || 10);
    }
    if (deal_size !== undefined) { updates.push('deal_size = ?'); values.push(deal_size); }
    if (expected_close_date !== undefined) { updates.push('expected_close_date = ?'); values.push(expected_close_date); }
    if (owner_id !== undefined) { updates.push('owner_id = ?'); values.push(owner_id); }
    if (status !== undefined) { updates.push('status = ?'); values.push(status); }
    if (notes !== undefined) { updates.push('notes = ?'); values.push(notes); }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No updates provided' });
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);

    db.prepare(`UPDATE deals SET ${updates.join(', ')} WHERE id = ?`).run(...values);

    const deal = db.prepare('SELECT * FROM deals WHERE id = ?').get(req.params.id);
    res.json(deal);
  } finally {
    db.close();
  }
});

export default router;
