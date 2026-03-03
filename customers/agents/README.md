# Internal Voice Agents — Smallest AI

> Every recurring client communication that doesn't require physical presence gets replaced by a voice agent built on Atoms.

This repo contains the full configuration, knowledge bases, and simulation test suite for Smallest AI's internal voice agents. These agents handle sales, infosec, legal, technical support, and commercial negotiations — running entirely on our own platform.

---

## Agents

| # | Agent | Atoms ID | Type | Handles | Sim Score |
|---|-------|----------|------|---------|-----------|
| 1 | [Outbound Sales](01-outbound-sales/) | `69a72063bd1bc2da08fcc1e1` | Single Prompt | Cold calls with live use-case simulation | Tested |
| 2 | [InfoSec Responder](02-infosec/) | `69a730c36cd1d52771328761` | Workflow Graph | Security questionnaires, compliance certs | 50% (2 soft misses) |
| 3 | [Legal Coordination](03-legal/) | `69a744f8bd1bc2da08fcc214` | Workflow Graph | NDA, MSA, vendor registration | **100%** (17/17) |
| 4 | [Technical Support (FDE)](04-fde/) | `69a7466c030fdcfe28d982f9` | Workflow Graph | Architecture, API integration, POC scoping | **93%** (14/15) |
| 5 | [Commercial Desk](05-negotiation/) | `69a74753b42c1648e0f8c4d9` | Workflow Graph | Pricing, volume discounts, negotiations | **100%** (15/15) |

### Not Yet Built

| # | Agent | Why Deferred |
|---|-------|-------------|
| 6 | Meeting Notes Agent | Infrastructure project (Google Meet bot + Waves STT streaming), not a prompt-based voice agent |

---

## Repo Structure

```
agents/
├── README.md                    ← You are here
├── 01-outbound-sales/
│   ├── README.md                ← Full prompt, config, simulation personas
│   ├── base-prompt.md           ← Original cold call template
│   └── campaign-bfsi.csv        ← BFSI prospect audience list
├── 02-infosec/
│   └── README.md                ← Prompt + 14K-char KB (ISO, SOC2, PCI DSS, encryption, VAPT)
├── 03-legal/
│   └── README.md                ← Prompt + KB (NDA process, MSA clauses, vendor reg, escalation)
├── 04-fde/
│   └── README.md                ← Prompt + KB (Atoms/Waves APIs, deployment models, POC scoping)
└── 05-negotiation/
    └── README.md                ← Prompt + KB (pricing tiers, discount bands, competitive intel)

sim-framework/
├── README.md                    ← Framework documentation
├── run-simulation.mjs           ← Test runner (Atoms chat API + LiveKit)
├── ingest-transcript.mjs        ← Feed real call transcripts into new scenarios
├── package.json
├── scenarios/                   ← Test case definitions (JSON)
│   ├── infosec-agent.json       ← 4 scenarios, 15 checks
│   ├── sales-agent.json         ← 5 scenarios, 14 checks
│   ├── legal-agent.json         ← 6 scenarios, 17 checks
│   ├── fde-agent.json           ← 5 scenarios, 15 checks
│   └── negotiation-agent.json   ← 6 scenarios, 15 checks
├── results/                     ← Timestamped graded results (JSON)
└── transcripts/                 ← Individual conversation logs
```

---

## How It Works

### Building an Agent

Each agent follows the same pattern:

1. **Knowledge Base** — Compile source docs (certs, templates, pricing, docs) into structured KB
2. **Prompt** — Write the agent prompt with role, KB, escalation rules, guardrails, conversation style
3. **Deploy** — Create agent on Atoms via API, deploy prompt to workflow via PATCH
4. **Simulate** — Run scenario-based tests via the simulation framework
5. **Iterate** — Fix issues surfaced by simulation, re-test

### Running Simulations

```bash
cd sim-framework
npm install

# Run all scenarios for an agent
node run-simulation.mjs scenarios/legal-agent.json

# Run a specific scenario
node run-simulation.mjs scenarios/sales-agent.json --scenario sales-bfsi-collections-happy

# Custom timeout for slow agents
node run-simulation.mjs scenarios/infosec-agent.json --timeout 15000
```

The runner:
1. Creates a real chat session with the live agent via Atoms `/conversation/chat` API
2. Sends test messages over LiveKit data channel
3. Captures agent responses
4. Grades each response against expected behavior patterns (regex)
5. Saves results + transcripts as JSON

### The Feedback Loop

```
Build Agent → Simulate → Deploy to Production
                ↑                    ↓
          Generate new         Collect real
          scenarios from       call transcripts
                ↑                    ↓
          Analyze gaps  ←←←  Ingest transcripts
```

After real calls happen, pull transcripts and create new test scenarios:

```bash
# Pull recent calls for an agent
node ingest-transcript.mjs --recent 69a744f8bd1bc2da08fcc214 --limit 5

# Pull a specific call
node ingest-transcript.mjs CALL-123456
```

---

## Agent Details

### 1. Outbound Sales Agent

**The hook:** Agent offers to simulate the prospect's exact use case live on the call. Prospect plays the customer (e.g., borrower, subscriber). Five simulation types: collections, customer support, telecom upsell, insurance verification, dealer reengagement.

**Three-act structure:** INTRO (30s hook + qualify) → SIMULATE (60-90s live demo) → CLOSE (gauge reaction + book meeting)

**Key stats cited:** 17,000 daily calls, 96% automation (Kogta NBFC), 34 crore calls on platform, sub-200ms latency.

### 2. InfoSec Responder

**Handles:** ISO 27001, SOC 2 Type II, PCI DSS, encryption (AES-256/TLS 1.3), data residency (Mumbai + Hyderabad DR), VAPT results (0 Critical, 0 High), AI guardrails, data usage policy.

**Negative compliance:** Explicitly denies HIPAA, FedRAMP, StateRAMP, HITRUST with escalation path.

**Escalation:** Amit Prakash (CISO) via security@smallest.ai for anything outside KB.

### 3. Legal Coordination Desk

**Handles:** NDA process (mutual, 1-week target), MSA standard positions (12 clauses covered), SOW/POC terms, vendor registration (12 standard docs), E-Sign support.

**Key positions:** Liability capped at 12-month fees, mutual indemnification only, no customer data for training, Indian law (Mumbai) default.

**Escalation:** Manjari (Legal) at legal@smallest.ai for any term modifications.

### 4. Technical Support (FDE)

**Handles:** Platform architecture (Atoms + Waves), API endpoints and integration patterns (REST, WebSocket, LiveKit), deployment models (Cloud, VPC, On-prem), telephony options (SIP, WebSocket, gRPC), POC requirements capture.

**Key data:** Full pipeline latency ~2.8s, Pulse STT 64ms, Electron 45ms, Lightning TTS sub-200ms. 11 Indian languages.

### 5. Commercial Desk (Negotiation)

**Handles:** Per-minute pricing (component-level), volume discount bands (100K to 2M+), on-prem tiers, POC terms ($1K-$2.5K), AWS Marketplace, competitive positioning.

**Negotiation guardrails:** Starts at high end of discount band. Only deepens discount for higher volume commitment or longer term. Never goes below floor price — escalates to VP Sales.

---

## Environment

- **Node.js** 18+ required for simulation framework
- **Atoms API key** set via `ATOMS_API_KEY` env var (or hardcoded default)
- **Network access** to `api.smallest.ai` and LiveKit servers
- All agents deployed on Atoms at `atoms.smallest.ai`

---

## The Branding Play

Each deployed agent is a case study: "Smallest runs its entire client communication stack on Atoms."

1. **Sales Agent** → "We prospect with our own voice agents"
2. **InfoSec Agent** → "Enterprise security teams talk to our agent and get answers instantly"
3. **Legal Agent** → "NDA to signed MSA in 48 hours, agent-assisted"
4. **FDE Agent** → "Integration support is 24/7 voice-first"
5. **Negotiation Agent** → "Our AI closed the deal"
