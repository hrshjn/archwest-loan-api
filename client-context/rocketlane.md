# Rocketlane - Internal Tooling Context (Post-Sales / FDE Platform)

**Last Updated:** 2026-02-10
**Internal Owner:** Yash Ghelani (primary), Aditya Bhat
**Executive Sponsor:** Apoorv Sood
**Stage:** DATA MIGRATION → GO-LIVE (Final migration planned week of Feb 10)
**Priority:** 🔴 **CRITICAL — Active migration, blocking FDE team operations**

---

## TL;DR

| Item | Detail |
|------|--------|
| **What** | Rocketlane is being implemented as Smallest AI's post-sales project management & customer delivery platform |
| **Why** | LINEAR (current eng tool) not built for customer-facing delivery; no customer portal, no structured intake, no handover docs |
| **Contract** | 3-year agreement, $49/user/month (discount negotiated down from standard), annual/biannual billing |
| **Users** | Started with 8, scaling to 10+3 free = 13, roadmap to 20+ by mid-2026 |
| **Implementation Partner** | SAS Genie (Rocketlane's implementation partner) — Bhuvi (impl manager), Gaya Kumar (delivery lead) |
| **Integrations** | Zoho CRM ↔ Rocketlane (via Zapier), Linear ↔ Rocketlane (via Zapier, two-way) |
| **Current Status** | Integrations complete; Notion→RL data migration is the final blocker; target go-live: week of Feb 10, 2026 |
| **Interim Solution** | Built Notion-based stopgap mimicking RL structure (engagements=projects, databases for tasks/bugs/people) |
| **Long-Term Consideration** | Evaluate if we should build our own delivery platform (vibe-code it in 3-4 days) vs continue paying for RL |

---

## What Rocketlane Is Being Used For

### Core Purpose
Post-sales delivery platform for the **FDE (Forward Deployment Engineering) team** to manage:
- Customer onboarding & voice agent delivery lifecycle
- Structured requirements intake (replacing Tally forms → Slack workflow)
- POC execution tracking (build rounds, testing phases, customer feedback loops)
- Production deployment & handover documentation
- Customer-facing portal (visibility into project status, feedback, comms)
- Issue/bug reporting from customers post-go-live

### Why Not Just LINEAR?
LINEAR is Smallest's engineering project management tool. It fails for delivery because:
- **No customer portal** — can't give clients visibility into their project status
- **No structured intake** — no forms, no requirements gathering workflow
- **Not built for finite projects** — LINEAR is for ongoing dev work, not time-boxed delivery engagements
- **No handover/documentation layer** — no built-in doc templates, customer-facing spaces
- **No phase/stage tracking** — LINEAR doesn't model delivery lifecycles well

### The Delivery Lifecycle (6 Stages)

Smallest AI's voice agent delivery follows this lifecycle. Each **agent** = one project in Rocketlane. One **customer** (account) can have multiple agents (projects).

| # | Stage | Description | RL Mapping | Customer Visibility |
|---|-------|-------------|------------|---------------------|
| 1 | **Intake** | Sales identifies POC interest, sends requirements gathering form | Project creation + form link auto-generated | Form to fill |
| 2 | **Scoping & Alignment** | Internal feasibility study, POC scope template created, commercials + NDA shared | Document templates, phase introduction | Scope doc, commercials, NDA |
| 3 | **POC Execution** | Build rounds (3-4 avg), each with internal phases + customer testing + feedback | Tasks with nested build rounds, customer feedback slots | Build round status, version notes, feedback slots |
| 4 | **Handover** | Per-agent handover doc (credentials, debugging guides, platform docs, self-serve info) | Document template per agent | Full handover doc access |
| 5 | **Production Build & Test** | Same build round structure as POC but for production-ready agent | Same task structure, fewer rounds expected | Similar to POC visibility |
| 6 | **Maintenance & Monitoring** | Dashboard for all agents, issue reporting, ongoing feedback | Spaces + issue reporting forms (multi-response) | Issue reporting form, status dashboard |

### Key Roles in Delivery

| Role | Abbreviation | Involvement |
|------|-------------|-------------|
| **Sales** | — | Pre-intake, sends requirements form, manages Zoho pipeline |
| **Solutions Architect** | SA | Owns intake & scoping, reviews feasibility, hands off to IE |
| **Implementation Engineer** | IE | Builds the agent, runs POC & production build rounds |

---

## Integrations Architecture

### Zoho CRM → Rocketlane (via Zapier, one-way + link return)

```
Zoho Lead Created
  → RL Project Created (with unique requirements gathering form)
  → Form link pushed back to Zoho as custom field (for salesperson to send)

Zoho Stage Change (e.g., "Invoice Paid for POC")
  → New Phase introduced in RL project
  (one example zap built; Yash duplicates for other stage→phase mappings)
```

**Key decisions:**
- Trigger starts at lead creation (not deal close) because FDE team engages pre-signature for POC
- Form submission does NOT trigger anything in Zoho (delivery team consumes form data in RL)
- Using shared `developer@smallest.ai` account for Zapier/Zoho/Linear integration auth
- Zapier chosen for flexibility — Smallest wants to self-maintain and modify triggers as processes evolve

### Rocketlane ↔ Linear (via Zapier, two-way)

```
RL Task (with specific custom field value, e.g., "feature request")
  + Account is paying customer (specific stage filter)
  → Creates Linear Issue with relevant metadata (title, description, custom fields)

Linear Issue status change (e.g., completed)
  → Updates corresponding RL task
  → Link to Linear issue stored in RL
```

**Key decisions:**
- Only tasks from **paying customers** (beyond a certain stage) get pushed to Linear
- Uses Linear's "customer" primitive to associate issues with accounts
- Engineering team assigns/prioritizes in Linear; status flows back to RL
- `developer@smallest.ai` account facilitates automation (not individual user accounts)

### Zapier Details
- Smallest's own Zapier instance (not Rocketlane's shared one — policy changed mid-implementation)
- Rocketlane recommended Professional plan
- Engineering team already had Zapier; delivery team's first time using it
- Rocketlane offered to offset Zapier costs via free licenses or AI credits or no-cost premium upgrade (under discussion)

---

## Notion Stopgap (Being Migrated Away)

Because RL implementation was delayed, Smallest built a structured Notion setup:

| Notion Object | RL Equivalent | Notes |
|--------------|---------------|-------|
| **Engagements** (database) | Projects | ~70 records, each with 20-30 custom fields |
| **Companies** (database) | Accounts | Related to engagements |
| **Tasks** (database) | Tasks | Custom fields: due date, assignee, product, status |
| **Bugs** (database) | Issue tracking | Form-submitted, related to engagements |
| **People** (database) | Contact fields | Related to engagements via relation property |
| **Documents** | Spaces/Docs | Templates not yet formalized |

**Migration approach:**
- CSV export from Notion → field mapping CSV reviewed by both sides → Ram (migration specialist) runs migration script
- Dry run already completed with full data set
- Final migration: data freeze after Monday review (Feb 10) → export → Ram migrates → validate by Friday → next Monday review happens in RL
- Field type compatibility confirmed (picklist→picklist, text→text, checkbox→checkbox, numbers→numbers)
- Custom fields that exist in RL but not in mapping CSV will be deleted (cleanup)
- Default RL fields cannot be renamed; data transformation done on Smallest's side before export

---

## Timeline & Key Milestones

| Date | Event | Status |
|------|-------|--------|
| **Oct 27, 2025** | Commercial negotiation call (Keerthana) | ✅ Done |
| **Oct 29, 2025** | Pre-kickoff — intros with Gaya (delivery lead) + Bhuvi (impl manager) | ✅ Done |
| **Oct 30, 2025** | Process walkthrough — Yash walks RL team through delivery lifecycle | ✅ Done |
| **Oct 31, 2025** | Official kickoff + first admin training; RL portal access granted | ✅ Done |
| **Nov 3-20, 2025** | Admin training sessions, template building, foundational setup | ✅ Done |
| **Nov 20, 2025** | Original target go-live date (Aditya's ask) | ❌ Missed |
| **Dec 8, 2025** | Integration scoping call — Zoho + Linear feasibility | ✅ Done |
| **Dec 16, 2025** | Catch-up with Kevin (global impl lead) — acknowledged delays | ✅ Done |
| **Dec 19, 2025** | Integration deep-dive with Nitin (SAS Genie tech consultant) | ✅ Done |
| **Early Jan 2026** | Integration development (Zapier zaps built) | ✅ Done |
| **Jan 20, 2026** | Notion migration scoping call with Ram (migration specialist) | ✅ Done |
| **Late Jan 2026** | Dry run migration (full data, sample validation) | ✅ Done |
| **Feb 6, 2026** | Final migration planning — field mapping finalization | ✅ Done |
| **Feb 10, 2026** | Data freeze after Monday review → final Notion export | 🔄 In Progress |
| **Feb 10-14, 2026** | Final migration + validation | ⏳ Pending |
| **Feb 17, 2026** | **TARGET: First Monday review in Rocketlane (not Notion)** | ⏳ Target |

---

## Commercial Details

| Item | Value |
|------|-------|
| **Per-user price** | $49/month (standard; discount negotiated but exact final unclear) |
| **Initial users** | 8 (ramping to 10 then 13 with 3 free) |
| **Free users** | 3 complimentary on top of 10 |
| **Contract term** | 3-year minimum (Rocketlane's standard for 2025+) |
| **Billing** | Annual (biannual option offered for cash flow) |
| **Implementation fee** | ~$2,500 for Zoho CRM + Linear integrations (discount requested) |
| **Payment** | Upfront annual |
| **Premium upgrade** | Under discussion — offsetting Zapier costs (~$1,200 USD difference) |

---

## Key Contacts (Rocketlane Side)

| Name | Role | Context |
|------|------|---------|
| **Keerthana S** | Account Executive / CSM | Primary commercial contact, relationship manager throughout |
| **Bhuvi Srinivasan** | Implementation Manager (SAS Genie) | Hands-on RL setup, admin training, template building |
| **Gaya Kumar (Gayathri)** | Delivery Lead (SAS Genie) | Governance, escalation point, timeline management |
| **Kevin Ramesh** | Global Head of Implementations (Rocketlane) | Escalation — joined Dec 16 after delays |
| **Nitin** | Technical Consultant (SAS Genie) | Built Zapier integration zaps (Zoho + Linear) |
| **Ram** | Migration Specialist (Rocketlane partner) | Notion → RL data migration, script-based |

---

## Key Contacts (Smallest AI Side)

| Name | Role | Involvement |
|------|------|-------------|
| **Yash Ghelani** | FDE Lead | Primary POC for all implementation work, daily operator |
| **Aditya Bhat** | Operations / Impl Lead | Co-admin, involved in kickoff and early scoping |
| **Apoorv Sood** | CEO/Founder | Executive sponsor, drove the decision, wants 4-week impl timeline |

---

## Pain Points & Frustrations Expressed

1. **Significant delays** — Original target was Nov 20 go-live; still migrating in Feb 2026 (3+ months delay)
2. **Integration blockers** — SAS Genie took weeks to respond on Linear feasibility; Zapier account ownership changed mid-project
3. **Forced to build Notion stopgap** — Team couldn't wait; built parallel system that now needs migration
4. **Apoorv escalation email** — CEO sent a direct email about delays (referenced in Dec 16 call)
5. **Premium plan upgrade ask** — Smallest wants Rocketlane to absorb or offset Zapier costs given the delays and friction

---

## Feature/Capability Map (For Future "Build Our Own" Reference)

This maps what Rocketlane provides that would need to be replicated:

| Capability | RL Feature | Complexity to Build |
|-----------|-----------|-------------------|
| **Project management** | Projects, phases, tasks, subtasks, Gantt view | Medium |
| **Customer portal** | White-labeled portal with branding, project visibility, CSAT | High |
| **Requirements intake** | Forms (conditional logic, multi-response) | Medium |
| **Document templates** | Doc templates with auto-creation on triggers | Low-Medium |
| **Custom fields** | Project/account/task level custom fields (text, select, multi-select, date, checkbox, number) | Medium |
| **Automations** | Global + template-level automations (triggers → actions) | Medium-High |
| **Integrations** | Native + Zapier-based (CRM, engineering tools) | Medium |
| **Role-based access** | Account admin, super user, collaborator + custom roles + placeholders | Medium |
| **Customer CSAT** | Milestone-based CSAT collection | Low |
| **Time tracking** | Native time tracking on tasks | Low |
| **Reporting/Dashboards** | Foundational reports + custom dashboards (pie, bar) | Medium |
| **Project updates** | Email-based status updates triggered from platform | Low |
| **Chat/Comms** | In-platform chat with @mentions | Medium |
| **White-labeling** | Custom domain (smallest.rocketlane.com), brand colors, logos | Low-Medium |
| **Migration tooling** | CSV import/export, field mapping, script-based migration | Medium |
| **Spaces** | Document/resource hub per project | Low-Medium |

---

## Strategic Notes

### Short-Term (Now → Q1 2026)
- Complete Notion → RL migration (target: Feb 10-14 migration, Feb 17 first review in RL)
- Stabilize Zapier-based Zoho and Linear integrations
- Onboard full FDE team onto Rocketlane
- Build muscle memory: Monday reviews, customer portals, intake forms all running in RL

### Medium-Term (Q2 2026)
- Evaluate if RL is delivering value vs. cost ($49/user × 13+ users = ~$7,600+/year minimum)
- Consider support ticketing integration (Freshdesk/Zendesk → RL via marketplace apps)
- Expand to 20+ users as FDE team grows
- Explore invoicing/billing tool integrations

### Long-Term Consideration
- **Build vs. Buy decision**: Apoorv and team have discussed the possibility of building a custom post-sales platform
- Key factors: RL costs scale with users; team is engineering-heavy; most RL features are well-defined CRUD + workflow automation
- If building: could vibe-code core features (project mgmt, customer portal, intake forms, integrations) in 3-4 days as experiment
- The feature/capability map above would serve as the requirements spec

---

## Source References

All context extracted from 9 recorded calls:

1. **Commercials** — Oct 27, 2025 (Keerthana, Aditya)
2. **Pre-kickoff** — Oct 29, 2025 (Keerthana, Gaya, Bhuvi, Apoorv, Aditya, Yash)
3. **Process walkthrough** — Oct 30, 2025 (Bhuvi, Gaya, Keerthana, Yash, Aditya)
4. **Kickoff + Admin Training** — Oct 31, 2025 (Bhuvi, Keerthana, Yash, Aditya)
5. **Integrations scoping** — Dec 8, 2025 (Keerthana, Gaya, Yash)
6. **Catch-up (delays)** — Dec 16, 2025 (Keerthana, Kevin, Yash)
7. **Integration deep-dive** — Dec 19, 2025 (Gayathri, Nitin, Bhuvi, Yash)
8. **Notion migration scoping** — Jan 20, 2026 (Keerthana, Ram, Yash)
9. **Data migration planning** — Feb 6, 2026 (Ram, Yash)
