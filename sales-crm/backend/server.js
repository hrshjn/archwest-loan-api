import express from 'express';
import cors from 'cors';
import { initDatabase } from './db/init.js';

import accountsRouter from './routes/accounts.js';
import activitiesRouter from './routes/activities.js';
import dealsRouter from './routes/deals.js';
import syncRouter from './routes/sync.js';
import reviewsRouter from './routes/reviews.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database
initDatabase();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/accounts', accountsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/deals', dealsRouter);
app.use('/api/sync', syncRouter);
app.use('/api/reviews', reviewsRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║   🚀 Sales CRM Backend Running                    ║
║   http://localhost:${PORT}                          ║
║                                                   ║
║   Endpoints:                                      ║
║   - GET  /api/accounts                            ║
║   - GET  /api/activities                          ║
║   - GET  /api/deals                               ║
║   - GET  /api/deals/pipeline                      ║
║   - POST /api/sync/sybill/call                    ║
║   - GET  /api/reviews/weekly                      ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
  `);
});
