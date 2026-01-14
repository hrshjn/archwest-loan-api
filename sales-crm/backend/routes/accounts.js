import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { getDatabase } from '../db/init.js';

const router = Router();

/**
 * GET /api/accounts - List all accounts with activity counts
 */
router.get('/', (req, res) => {
  const db = getDatabase();
  try {
    const accounts = db.prepare(`
      SELECT 
        a.*,
        COUNT(DISTINCT act.id) as activity_count,
        COUNT(DISTINCT c.id) as contact_count,
        COUNT(DISTINCT d.id) as deal_count,
        SUM(CASE WHEN d.status = 'active' THEN d.deal_size ELSE 0 END) as total_pipeline,
        MAX(act.activity_date) as last_activity_date
      FROM accounts a
      LEFT JOIN activities act ON act.account_id = a.id
      LEFT JOIN contacts c ON c.account_id = a.id
      LEFT JOIN deals d ON d.account_id = a.id
      GROUP BY a.id
      ORDER BY last_activity_date DESC NULLS LAST
    `).all();

    res.json(accounts);
  } finally {
    db.close();
  }
});

/**
 * GET /api/accounts/by-domain/:domain - Get account by domain name
 */
router.get('/by-domain/:domain', (req, res) => {
  const db = getDatabase();
  try {
    const domain = req.params.domain.toLowerCase();
    const account = db.prepare('SELECT * FROM accounts WHERE LOWER(domain) = ?').get(domain);
    
    if (!account) {
      return res.status(404).json({ error: 'Account not found', domain });
    }

    // Forward to the main account detail handler
    req.params.id = account.id;
    return getAccountDetail(db, account.id, res);
  } catch (err) {
    db.close();
    throw err;
  }
});

/**
 * GET /api/accounts/:id - Get account details with all related data
 */
router.get('/:id', (req, res) => {
  const db = getDatabase();
  return getAccountDetail(db, req.params.id, res);
});

/**
 * Get full account details including timeline, transcripts, and ICP analysis
 */
function getAccountDetail(db, accountId, res) {
  try {
    const account = db.prepare('SELECT * FROM accounts WHERE id = ?').get(accountId);
    
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Get contacts with decision maker info
    const contacts = db.prepare(`
      SELECT * FROM contacts WHERE account_id = ? ORDER BY is_decision_maker DESC, name
    `).all(accountId);

    // Get deals
    const deals = db.prepare(`
      SELECT d.*, sr.name as owner_name
      FROM deals d
      LEFT JOIN sales_reps sr ON sr.id = d.owner_id
      WHERE d.account_id = ?
      ORDER BY d.created_at DESC
    `).all(accountId);

    // Get ALL activities with full transcript - this is the timeline
    const activities = db.prepare(`
      SELECT 
        a.*,
        sr.name as rep_name,
        GROUP_CONCAT(DISTINCT ap.name) as participant_names,
        GROUP_CONCAT(DISTINCT ap.email) as participant_emails
      FROM activities a
      LEFT JOIN sales_reps sr ON sr.id = a.rep_id
      LEFT JOIN activity_participants ap ON ap.activity_id = a.id
      WHERE a.account_id = ?
      GROUP BY a.id
      ORDER BY a.activity_date DESC
    `).all(accountId);

    // Parse activities and extract ICP insights
    const parsedActivities = activities.map(a => ({
      ...a,
      pain_points: safeJsonParse(a.pain_points, []),
      next_steps: safeJsonParse(a.next_steps, []),
      participant_names: a.participant_names ? a.participant_names.split(',') : [],
      participant_emails: a.participant_emails ? a.participant_emails.split(',') : [],
      has_transcript: !!a.full_content,
    }));

    // Build ICP analysis from contacts
    const icpAnalysis = buildICPAnalysis(contacts, parsedActivities);

    // Build timeline summary
    const timelineSummary = buildTimelineSummary(parsedActivities);

    res.json({
      ...account,
      contacts,
      deals,
      activities: parsedActivities,
      icpAnalysis,
      timelineSummary,
    });
  } finally {
    db.close();
  }
}

/**
 * Build ICP (Ideal Customer Profile) analysis from contacts and activities
 */
function buildICPAnalysis(contacts, activities) {
  const titles = contacts.map(c => c.job_title).filter(Boolean);
  const decisionMakers = contacts.filter(c => c.is_decision_maker);
  
  // Extract pain points across all calls
  const allPainPoints = activities
    .flatMap(a => a.pain_points || [])
    .filter(Boolean);
  
  // Count pain point frequency
  const painPointCounts = {};
  allPainPoints.forEach(p => {
    const key = typeof p === 'string' ? p : JSON.stringify(p);
    painPointCounts[key] = (painPointCounts[key] || 0) + 1;
  });

  return {
    contactCount: contacts.length,
    decisionMakerCount: decisionMakers.length,
    titles: [...new Set(titles)],
    decisionMakers: decisionMakers.map(c => ({
      name: c.name,
      title: c.job_title,
      email: c.email,
    })),
    topPainPoints: Object.entries(painPointCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([point]) => point),
  };
}

/**
 * Build timeline summary stats
 */
function buildTimelineSummary(activities) {
  const calls = activities.filter(a => a.activity_type === 'call');
  const totalMinutes = calls.reduce((sum, c) => sum + (c.duration_seconds || 0), 0) / 60;
  
  const firstActivity = activities[activities.length - 1];
  const lastActivity = activities[0];
  
  return {
    totalActivities: activities.length,
    totalCalls: calls.length,
    totalMinutes: Math.round(totalMinutes),
    firstContact: firstActivity?.activity_date,
    lastContact: lastActivity?.activity_date,
    avgEngagement: calls.length > 0 
      ? calls.reduce((sum, c) => sum + (c.engagement_score || 0), 0) / calls.length 
      : null,
  };
}

/**
 * Safe JSON parse helper
 */
function safeJsonParse(str, defaultValue) {
  if (!str) return defaultValue;
  try {
    return JSON.parse(str);
  } catch {
    return defaultValue;
  }
}

/**
 * POST /api/accounts - Create new account
 */
router.post('/', (req, res) => {
  const db = getDatabase();
  try {
    const { name, domain, industry, company_size, revenue_potential, owner_id } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const id = uuid();
    db.prepare(`
      INSERT INTO accounts (id, name, domain, industry, company_size, revenue_potential, owner_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, name, domain, industry, company_size, revenue_potential || 0, owner_id);

    const account = db.prepare('SELECT * FROM accounts WHERE id = ?').get(id);
    res.status(201).json(account);
  } finally {
    db.close();
  }
});

/**
 * PATCH /api/accounts/:id - Update account (supports all editable fields)
 */
router.patch('/:id', (req, res) => {
  const db = getDatabase();
  try {
    const editableFields = [
      'name', 'domain', 'industry', 'company_size',
      // Deal fields (editable by user)
      'deal_value', 'deal_stage', 'expected_close_date', 'probability',
      // Requirements & Use Case
      'requirements', 'use_case', 'pain_points_summary',
      // ICP fields
      'icp_fit_score', 'icp_notes', 'decision_maker', 'champion', 
      'budget_confirmed', 'timeline',
      // Status
      'status', 'lost_reason', 'owner_id'
    ];
    
    const updates = [];
    const values = [];
    
    editableFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(req.body[field]);
      }
    });

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No updates provided' });
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);

    db.prepare(`
      UPDATE accounts SET ${updates.join(', ')} WHERE id = ?
    `).run(...values);

    const account = db.prepare('SELECT * FROM accounts WHERE id = ?').get(req.params.id);
    res.json(account);
  } finally {
    db.close();
  }
});

export default router;
