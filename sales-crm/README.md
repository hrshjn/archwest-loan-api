# Sales Command Center (CRM)

A custom sales CRM built to aggregate data from Sybill meeting recordings, emails, voice notes, and manual inputs. Track accounts, deals, pipeline, and get AI-powered weekly reviews.

## Features

### 📊 **Dashboard**
- Real-time pipeline overview with weighted values
- Recent activity feed from synced calls
- Deals needing attention (stuck/idle)
- Weekly summary statistics

### 🏢 **Accounts**
- Auto-created from Sybill call participants
- Contact management with LinkedIn integration
- Activity timeline per account
- Aggregated pain points and next steps

### 💰 **Pipeline**
- Kanban-style deal board with drag-and-drop
- Stage-based probability weighting
- Pipeline distribution visualization
- Deal progress tracking

### 📅 **Weekly Review**
- Auto-generated summaries
- Top performing accounts
- Stuck deals identification
- Call highlights and outcomes

### 🔄 **Sybill Integration**
- Sync meeting data with one click
- Extract transcripts, summaries, and insights
- Auto-create accounts and contacts
- Map pain points and next steps

## Architecture

```
sales-crm/
├── backend/              # Node.js Express API
│   ├── db/               # SQLite database & schema
│   ├── services/         # Sybill integration, sync logic
│   ├── routes/           # REST API endpoints
│   └── server.js         # Main server
├── frontend/             # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Dashboard, Accounts, Pipeline, etc.
│   │   ├── hooks/        # SWR data fetching hooks
│   │   └── lib/          # API client
│   └── index.html
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd sales-crm/backend

# Install dependencies
npm install

# Initialize database
npm run init-db

# Start server (development)
npm run dev

# Server runs at http://localhost:3001
```

### Frontend Setup

```bash
cd sales-crm/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Frontend runs at http://localhost:3000
```

## API Endpoints

### Accounts
- `GET /api/accounts` - List all accounts with activity counts
- `GET /api/accounts/:id` - Get account details with contacts, deals, activities
- `POST /api/accounts` - Create new account
- `PATCH /api/accounts/:id` - Update account

### Activities
- `GET /api/activities` - List activities (filterable by account, type, source)
- `GET /api/activities/:id` - Get activity details
- `POST /api/activities` - Create manual activity

### Deals
- `GET /api/deals` - List all deals
- `GET /api/deals/pipeline` - Get pipeline summary by stage
- `GET /api/deals/:id` - Get deal details
- `POST /api/deals` - Create new deal
- `PATCH /api/deals/:id` - Update deal (stage, size, etc.)

### Reviews
- `GET /api/reviews/weekly` - Get weekly review summary
- `GET /api/reviews/account/:id` - Get account review with aggregated insights

### Sync
- `POST /api/sync/sybill/call` - Sync a Sybill call by ID
- `GET /api/sync/sybill/call/:id/preview` - Preview call data before syncing

## Syncing Sybill Calls

1. Open a call in Sybill (app.sybill.ai)
2. Copy the call URL or extract the call ID (UUID)
3. Get your auth token:
   - Open Developer Tools (F12)
   - Go to Network tab
   - Find any API request
   - Copy the Bearer token from the Authorization header
4. Go to "Sync Calls" in the CRM
5. Paste the call ID/URL and token
6. Click "Preview" to see the data, then "Sync" to import

## Data Model

### Accounts
Companies being sold to, auto-created from Sybill call participants.

### Contacts
People at accounts, with email, job title, LinkedIn URL.

### Deals
Opportunities with stage, size, probability, and expected close date.

### Activities
All interactions: calls (from Sybill), emails, voice notes, manual notes.

### Weekly Reviews
Auto-generated summaries with stats, highlights, and stuck deals.

## Roadmap

- [x] Sybill integration for meeting data
- [x] Account & contact management
- [x] Deal pipeline with drag-and-drop
- [x] Weekly review summaries
- [ ] Gmail integration for email tracking
- [ ] Voice agent for daily updates
- [ ] WhatsApp/Screenshot uploads
- [ ] AI-powered deal scoring
- [ ] Calendar integration

## Tech Stack

- **Backend**: Node.js, Express, SQLite (better-sqlite3)
- **Frontend**: React 18, Vite, Tailwind CSS
- **Data Fetching**: SWR
- **Icons**: Lucide React

## License

MIT
