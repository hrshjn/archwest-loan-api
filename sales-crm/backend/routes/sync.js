import { Router } from 'express';
import { SyncService } from '../services/sync.js';
import { SybillService } from '../services/sybill.js';
import { getDatabase } from '../db/init.js';

const router = Router();

/**
 * GET /api/sync/settings - Get sync settings (token status, last sync, etc)
 */
router.get('/settings', (req, res) => {
  const db = getDatabase();
  try {
    const settings = db.prepare(`
      SELECT * FROM settings WHERE key IN ('sybill_token', 'last_sync', 'sync_status')
    `).all();
    
    const settingsMap = settings.reduce((acc, s) => {
      acc[s.key] = s.key === 'sybill_token' ? (s.value ? '***saved***' : null) : s.value;
      return acc;
    }, {});
    
    res.json(settingsMap);
  } catch (error) {
    res.json({ sybill_token: null, last_sync: null, sync_status: null });
  } finally {
    db.close();
  }
});

/**
 * POST /api/sync/settings - Save sync settings
 */
router.post('/settings', (req, res) => {
  const db = getDatabase();
  try {
    const { sybill_token } = req.body;
    
    if (sybill_token) {
      db.prepare(`
        INSERT OR REPLACE INTO settings (key, value, updated_at) 
        VALUES ('sybill_token', ?, CURRENT_TIMESTAMP)
      `).run(sybill_token);
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Settings save error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    db.close();
  }
});

/**
 * POST /api/sync/sybill/all - Sync ALL calls from Sybill
 * This fetches the call list, then syncs each call's extended data
 */
router.post('/sybill/all', async (req, res) => {
  const db = getDatabase();
  try {
    // Get token from body, header, or stored settings
    let token = req.body.auth_token || req.headers['x-sybill-token'];
    
    if (!token) {
      const setting = db.prepare(`SELECT value FROM settings WHERE key = 'sybill_token'`).get();
      token = setting?.value;
    }
    
    if (!token) {
      db.close();
      return res.status(400).json({ error: 'Sybill auth token required. Save it in Settings first.' });
    }

    // Update sync status
    db.prepare(`
      INSERT OR REPLACE INTO settings (key, value, updated_at) 
      VALUES ('sync_status', 'running', CURRENT_TIMESTAMP)
    `).run();

    const sybill = new SybillService(token);
    const syncService = new SyncService(token);
    
    // Get options from request
    const { startDate, endDate, maxCalls = 100 } = req.body;
    
    // First, list all calls
    console.log('Fetching call list from Sybill...');
    const calls = await sybill.listAllCalls({ startDate, endDate, maxCalls });
    console.log(`Found ${calls.length} calls to sync`);
    
    const results = {
      total: calls.length,
      synced: 0,
      failed: 0,
      skipped: 0,
      accounts: new Set(),
      errors: [],
    };
    
    // Sync each call
    for (const call of calls) {
      const callId = call._id || call.id || call.callId;
      if (!callId) {
        results.skipped++;
        continue;
      }
      
      try {
        // Check if already synced (use a fresh db connection for this check)
        const checkDb = getDatabase();
        const existing = checkDb.prepare(`
          SELECT id FROM activities WHERE source_id = ? AND source = 'sybill'
        `).get(callId);
        checkDb.close();
        
        if (existing) {
          results.skipped++;
          continue;
        }
        
        const result = await syncService.syncCall(callId);
        results.synced++;
        if (result.accountId) results.accounts.add(result.accountId);
        
        // Small delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 200));
      } catch (error) {
        results.failed++;
        results.errors.push({ callId, error: error.message });
        console.error(`Failed to sync call ${callId}:`, error.message);
      }
    }
    
    // Update last sync time
    const finalDb = getDatabase();
    finalDb.prepare(`
      INSERT OR REPLACE INTO settings (key, value, updated_at) 
      VALUES ('last_sync', ?, CURRENT_TIMESTAMP)
    `).run(new Date().toISOString());
    
    finalDb.prepare(`
      INSERT OR REPLACE INTO settings (key, value, updated_at) 
      VALUES ('sync_status', 'completed', CURRENT_TIMESTAMP)
    `).run();
    finalDb.close();
    
    res.json({
      success: true,
      ...results,
      accounts: results.accounts.size,
    });
  } catch (error) {
    console.error('Bulk sync error:', error);
    try {
      const errDb = getDatabase();
      errDb.prepare(`
        INSERT OR REPLACE INTO settings (key, value, updated_at) 
        VALUES ('sync_status', 'failed', CURRENT_TIMESTAMP)
      `).run();
      errDb.close();
    } catch (e) {}
    res.status(500).json({ error: error.message });
  } finally {
    try { db.close(); } catch (e) {}
  }
});

/**
 * POST /api/sync/sybill/call - Sync a single Sybill call by ID
 */
router.post('/sybill/call', async (req, res) => {
  const db = getDatabase();
  try {
    const { call_id, auth_token } = req.body;

    if (!call_id) {
      db.close();
      return res.status(400).json({ error: 'call_id is required' });
    }

    // Get token from body, header, or stored settings
    let token = auth_token || req.headers['x-sybill-token'];
    if (!token) {
      const setting = db.prepare(`SELECT value FROM settings WHERE key = 'sybill_token'`).get();
      token = setting?.value;
    }
    db.close();
    
    if (!token) {
      return res.status(400).json({ error: 'Sybill auth token required' });
    }

    const syncService = new SyncService(token);
    const result = await syncService.syncCall(call_id);

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Sync error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/sync/sybill/call/:id/preview - Preview call data without syncing
 */
router.get('/sybill/call/:id/preview', async (req, res) => {
  const db = getDatabase();
  try {
    let token = req.headers['x-sybill-token'];
    if (!token) {
      const setting = db.prepare(`SELECT value FROM settings WHERE key = 'sybill_token'`).get();
      token = setting?.value;
    }
    db.close();
    
    if (!token) {
      return res.status(400).json({ error: 'Sybill auth token required' });
    }

    const sybill = new SybillService(token);
    const callData = await sybill.getCallExtended(req.params.id);
    const activity = sybill.toActivity(callData);

    res.json({
      raw: callData,
      parsed: activity,
    });
  } catch (error) {
    console.error('Preview error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
