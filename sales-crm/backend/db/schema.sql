-- Sales CRM Database Schema
-- Designed to aggregate data from Sybill, emails, voice notes, and screenshots

-- Settings (Store API tokens, preferences, etc.)
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Accounts (Companies being sold to)
CREATE TABLE IF NOT EXISTS accounts (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    domain TEXT UNIQUE,
    industry TEXT,
    company_size TEXT,
    
    -- Deal Info (editable by user)
    deal_value REAL DEFAULT 0,
    deal_stage TEXT DEFAULT 'prospect',
    expected_close_date DATE,
    probability INTEGER DEFAULT 10,
    
    -- Requirements & Use Case
    requirements TEXT, -- What they need (editable)
    use_case TEXT, -- Their use case
    pain_points_summary TEXT, -- Aggregated from calls
    
    -- ICP (Ideal Customer Profile) fields
    icp_fit_score INTEGER DEFAULT 0, -- 0-100
    icp_notes TEXT,
    decision_maker TEXT, -- Main decision maker name
    champion TEXT, -- Internal champion
    budget_confirmed INTEGER DEFAULT 0,
    timeline TEXT,
    
    -- Status
    status TEXT DEFAULT 'active', -- active, won, lost, dormant
    lost_reason TEXT,
    
    owner_id TEXT,
    first_contact_date DATETIME,
    last_activity_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Contacts (People at accounts)
CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    account_id TEXT REFERENCES accounts(id),
    sybill_contact_id TEXT,
    sybill_person_id TEXT,
    name TEXT NOT NULL,
    email TEXT,
    job_title TEXT,
    linkedin_url TEXT,
    phone TEXT,
    is_decision_maker INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sales Reps (Team members)
CREATE TABLE IF NOT EXISTS sales_reps (
    id TEXT PRIMARY KEY,
    sybill_user_id TEXT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    role TEXT DEFAULT 'rep',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Deals (Opportunities)
CREATE TABLE IF NOT EXISTS deals (
    id TEXT PRIMARY KEY,
    account_id TEXT REFERENCES accounts(id),
    name TEXT NOT NULL,
    stage TEXT DEFAULT 'discovery',
    deal_size REAL DEFAULT 0,
    probability INTEGER DEFAULT 10,
    expected_close_date DATE,
    owner_id TEXT REFERENCES sales_reps(id),
    status TEXT DEFAULT 'active',
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Activities (All interactions: calls, emails, notes, screenshots)
CREATE TABLE IF NOT EXISTS activities (
    id TEXT PRIMARY KEY,
    account_id TEXT REFERENCES accounts(id),
    deal_id TEXT REFERENCES deals(id),
    contact_id TEXT REFERENCES contacts(id),
    rep_id TEXT REFERENCES sales_reps(id),
    
    -- Activity type: 'call', 'email', 'voice_note', 'screenshot', 'manual_note'
    activity_type TEXT NOT NULL,
    
    -- Source: 'sybill', 'gmail', 'voice_agent', 'manual'
    source TEXT NOT NULL,
    source_id TEXT, -- External ID from source system (e.g., Sybill call ID)
    
    -- Activity content
    title TEXT,
    summary TEXT,
    full_content TEXT, -- Full transcript, email body, etc.
    
    -- Sybill-specific fields
    outcome TEXT,
    pain_points TEXT, -- JSON array
    next_steps TEXT, -- JSON array
    engagement_score REAL,
    
    -- Metadata
    duration_seconds INTEGER,
    participant_count INTEGER,
    meeting_type TEXT, -- 'internal', 'external'
    
    -- Timestamps
    activity_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Activity Participants (Who was on the call/email)
CREATE TABLE IF NOT EXISTS activity_participants (
    id TEXT PRIMARY KEY,
    activity_id TEXT REFERENCES activities(id),
    contact_id TEXT REFERENCES contacts(id),
    name TEXT,
    email TEXT,
    is_internal INTEGER DEFAULT 0,
    engagement_score REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Weekly Reviews (Generated summaries)
CREATE TABLE IF NOT EXISTS weekly_reviews (
    id TEXT PRIMARY KEY,
    week_start DATE NOT NULL,
    week_end DATE NOT NULL,
    rep_id TEXT REFERENCES sales_reps(id),
    
    -- Summary content
    summary TEXT,
    highlights TEXT, -- JSON array
    blockers TEXT, -- JSON array
    action_items TEXT, -- JSON array
    
    -- Metrics
    total_calls INTEGER DEFAULT 0,
    total_emails INTEGER DEFAULT 0,
    deals_progressed INTEGER DEFAULT 0,
    deals_stuck INTEGER DEFAULT 0,
    pipeline_value REAL DEFAULT 0,
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Voice Agent Updates (From daily check-ins)
CREATE TABLE IF NOT EXISTS voice_updates (
    id TEXT PRIMARY KEY,
    rep_id TEXT REFERENCES sales_reps(id),
    account_id TEXT REFERENCES accounts(id),
    deal_id TEXT REFERENCES deals(id),
    
    -- Voice note content
    audio_url TEXT,
    transcript TEXT,
    summary TEXT,
    
    -- Extracted data
    mentioned_contacts TEXT, -- JSON array
    action_items TEXT, -- JSON array
    deal_updates TEXT, -- JSON
    
    recorded_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sync logs (Track what's been synced)
CREATE TABLE IF NOT EXISTS sync_logs (
    id TEXT PRIMARY KEY,
    source TEXT NOT NULL, -- 'sybill', 'gmail', etc.
    sync_type TEXT NOT NULL, -- 'full', 'incremental'
    status TEXT NOT NULL, -- 'running', 'completed', 'failed'
    items_synced INTEGER DEFAULT 0,
    error_message TEXT,
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_activities_account ON activities(account_id);
CREATE INDEX IF NOT EXISTS idx_activities_deal ON activities(deal_id);
CREATE INDEX IF NOT EXISTS idx_activities_date ON activities(activity_date);
CREATE INDEX IF NOT EXISTS idx_activities_type ON activities(activity_type);
CREATE INDEX IF NOT EXISTS idx_contacts_account ON contacts(account_id);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_deals_account ON deals(account_id);
CREATE INDEX IF NOT EXISTS idx_deals_stage ON deals(stage);
CREATE INDEX IF NOT EXISTS idx_accounts_domain ON accounts(domain);
