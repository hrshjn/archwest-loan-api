# [AWS] Kogta Financial - Client Context

**Last Updated:** 2026-02-11
**Deal Owner:** Harsh Jain (via AWS - Sombir Yadav)
**Stage:** **PRODUCTION - AWS Marketplace Live**
**Priority:** 🔴 **Active Customer — Upsell in Progress**

---

## Company Overview
- **Company:** Kogta Financial Services
- **Industry:** NBFC (Non-Banking Financial Company)
- **Country:** India
- **Key Contacts:**
  - **Vishal Handa** — CTO (primary relationship, daily monitoring, decision-maker on tech/product)
  - **Chandan Agarwal** — CDO / Co-founder (ex-WholesaleBox; drives management reviews, commercial decisions)
  - **Akshay Kakkar** — Primary admin / implementation lead (day-to-day ops contact)
  - Abhishek Chordia — CISO
- **Partner Channel:** AWS India
- **AWS AM:** Sombir Yadav (sombiry@amazon.com)

---

## What They're Buying

### Product
- **Voice AI Platform (Atoms)** - End-to-end solution

### Use Cases (as of Feb 11)
1. **Collections (0-30 day bucket)** — Primary use case, 3 production bots, ~90% of volume
2. **Collections (31-90 day bucket)** — In development, going live this month
3. **TVR (Telephone Verification)** — Customer, Co-Applicant, Guarantor verification agents. 66-117s avg call duration.
4. **Sales Productivity Bot** — New (Feb 5-6), internal sales team use
5. **Lead Qualification (Bike Loan)** — Outbound qualification
6. **Customer Complaint Handling** — Inbound (new, Feb 8)

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **MRR** | **$8,000** |
| **ARR** | **$96,000** |
| **Deal Type** | Deal (Production) |
| **Volume** | 100,000 minutes/month (est.) |
| **Deployment** | SaaS (AWS Marketplace) |
| **Contract** | Initial commitment period |

---

## Procurement

### AWS Marketplace Private Offer
- **Status:** ✅ Resolved — Kogta has added billing on AWS Marketplace
- **Billing Partner:** Searce (pass-through INR transaction)
- Private offer accepted and payment method sorted (confirmed Feb 6, 2026)

### Current Status (Feb 2026)
- AWS Marketplace billing live
- Production customer
- Focus now on optimizing collections performance ahead of India AI Summit

---

## Technical Requirements

### Languages — Confirmed Roadmap (Feb 11 call)
- **Hindi** — Primary (live). Dialect understanding improvement needed (Haryanvi vs Rajasthani vs Delhi Hindi — bot gets lost on dialects)
- **English (Indian)** — Soon
- **Gujarati** — P0 (high-growth market). Akshat targeting **March first week** for testing.
- **Marathi** — P0 (Maharashtra 3-year growth trajectory, Aurangabad/Nagpur). Same March first week target.
- **Punjabi** — P1 (soon after Gujarati/Marathi)
- **South Indian (Tamil, Kannada)** — 6 months out. Kogta expanding south next FY. Need both because customers migrate between states.

**Key context:** Kogta serves rural/semi-rural market. Chandan estimates **5-10% conversion increase** with regional language support. Marathi accidentally enabled in Jan — 4.5 min natural conversation proved demand.

**Data sharing for training:** Apoorv asked if Kogta could share call recordings to train dialect models. Chandan open but needs RBI compliance team clearance first. Not a no — checking internally. (Feb 11)

### Integration
- CRM integration for lead/customer data
- API for campaign management
- Telephony integration
- Analytics dashboard (HIGH PRIORITY — see Feature Requests below)

---

## Timeline

| Date | Milestone |
|------|-----------|
| Dec 2025 | Initial discussions, POC |
| Jan 2026 | Private offer sent |
| **Jan 14-15** | Private offer accepted |
| **Jan 27** | **TARGET: Payment resolution** |
| **Jan 31** | **TARGET: First transaction** |

---

## Key Blockers

### ✅ RESOLVED (Feb 2026)
~~**Issue:** Payment method resolution for private offer~~ — Kogta added billing on AWS. All clear.

- [x] Clarify with Sombir on partner situation
- [x] Get relevant AWS partner to execute transaction
- [x] Resolve payment method ticket
- [x] Follow up on private offer acceptance

---

## Strategic Importance

### Why This Matters
1. **First Case Study:** Will become first production customer reference
2. **AWS Proof Point:** Validates AWS partnership model
3. **India Market:** Demonstrates India NBFC traction
4. **Scaling Potential:** POC → Production faster than expected
5. **Revenue:** $8K MRR baseline, expansion potential

---

## AWS Support Needed

| Need | Priority | Status |
|------|----------|--------|
| ~~Clarify partner situation with Sombir~~ | ~~HIGH~~ | ✅ Resolved |
| ~~Find relevant partner for transaction~~ | ~~HIGH~~ | ✅ Resolved (Searce) |
| ~~Resolve private offer payment issue~~ | ~~CRITICAL~~ | ✅ Resolved |
| Update ACE opportunity to "Launched" | **HIGH** | Pending |
| Kogta as case study for ISVA qualification | **MEDIUM** | Pending (post India AI Summit) |

---

## Next Steps

### Immediate (Feb 2026)
- [x] AWS Marketplace billing resolved
- [x] Private offer accepted and processed
- [x] Optimize collections performance (retries, concurrency boost) — Feb 6 concurrency increase showed 2x+ improvement
- [ ] **V3 voice clarity fix** — Maharshi working on it (fumbles at 1.3-1.4x speed)
- [ ] **Reserved agent-level concurrency** — last-mile testing (Maharshi)
- [ ] **Analytics dashboard** — Akshat targeting ~2 weeks post architecture stabilization
- [ ] **In-person meeting Feb 23, Jaipur** — Harsh traveling. Akshay confirmed. Checking Chandan.
- [ ] Coordinate fireside chat with Vishal at India AI Summit (Feb 2026)

### Upsell & Commercial (Active)
- [ ] **Concurrency-for-commitment commercial structure** — framework planted on Feb 11 call. Vishal hasn't discussed internally yet. Follow up closer to March/April contract discussion.
- [ ] **Multilingual upsell** — Gujarati + Marathi testing by March first week. Commercial impact TBD.
- [ ] **Usage-based repricing** — current $8K MRR vs actual ~220-250K mins/month run-rate. Need to reconcile.

### Product Delivery (Akshat)
- [ ] Gujarati + Marathi model testing — March first week target
- [ ] Cross-call context awareness — Akshat to propose solution approaches to Vishal
- [ ] Agent orchestration SDK cleanup — share with Vishal for testing
- [ ] Vishal to share multi-agent use case requirements
- [ ] Chandan to check RBI compliance on data sharing for dialect training

### Growth & Case Study
- [ ] Case study development (fireside at India AI Summit)
- [ ] Expansion discussions (TVR, Sales Productivity, 31-90 bucket — all self-building)
- [ ] Invite NBFC CTOs to fireside session at summit

---

## Email Thread Contacts
- Abhishek Chordia (CISO) - Kogta
- Chandan Agarwal (CDO) - Kogta
- Sombir Yadav - AWS India
- Harsh Jain - Smallest

---

## Source References
- **CRM Deal:** Kogta Financial
- **AWS Pipeline CSV:** Private offer sent status
- **Slack #gtm:** Multiple updates on private offer and billing partner confusion
- **GTM Update (Jan 21):** Listed as $8K MRR closure target this month
- **Granola (Feb 7):** [Vishal performance review + multilingual](https://notes.granola.ai/t/d5985a47-2e92-4d70-bcc0-6cd372260c2e)
- **Granola (Feb 10):** [Akshay + Akshat — MSA & language requirements](https://notes.granola.ai/t/a8008127-ec42-419a-8101-d89821f67f37)
- **Call Transcript (Feb 11):** Full team call — Harsh, Apoorv, Akshat ↔ Vishal, Chandan, Akshay
- **Live DB Pull (Feb 11):** Usage data Feb 6-10 from atoms-prod MongoDB

---

## Post-Sale Success Plan

### Onboarding (Week 1-2)
- Technical integration workshop
- CRM data mapping
- Telephony setup
- Training for ops team

### Go-Live (Week 3-4)
- Pilot campaign (500-1000 calls)
- Monitor and optimize
- Feedback loop with team

### Scale (Month 2-3)
- Expand to full volume
- Additional use case activation
- Performance reporting
- Expansion discussions

---

**✅ CLOSED — Now in Production. Upsell discussions in progress (concurrency + multilingual + expanded use cases).**

---

## Platform Users (7 active)

| Name | Email | Role/Org | Joined |
|------|-------|----------|--------|
| Akshay Kakkar | akshay.kakkar@kogta.in | Primary admin | Nov 2025 |
| **Vishal Handa** | vishal.handa@kogta.in | Main org owner | Dec 2025 |
| Shubham Chandra | shubham.chandra@kogta.in | Agent builder | Dec 2025 |
| Aakriti Gupta | aakriti.gupta@kogta.in | Collections | Dec 2025 |
| Mohit Ramani | mohit.ramani@kogta.in | TVR/Analytics | Dec 2025 |
| Rajendra Gour | rajendra.gour@kogta.in | — | Jan 2026 |
| Deepanshu Malik | deepanshu.malik@kogta.in | — | Jan 2026 |

---

## Active Agents (as of Feb 6, 2026)

### Production Collection Bots (3 parallel)

| Agent | ID | Status | Since |
|-------|----|--------|-------|
| Production Collection Bot - Agent 1 | `694c042d` | **Active** — handles ~56% of volume | Dec 24, 2025 |
| Production Collection Bot - Agent 2 | `694c0451` | **Active** — handles ~14% of volume | Dec 24, 2025 |
| Production Collection Bot - Agent 3 | `694c0462` | **Active** — handles ~29% of volume | Dec 24, 2025 |

- **LLM:** GPT-4o (Agent 1), others likely same
- **TTS:** Waves Lightning v2, voice: Aditi (female, Hindi)
- **Language:** Hindi primary, language switching available
- **Workflow:** Graph-based (multi-step collection flow)
- **Post-call analytics:** 12 disposition metrics including PTP date, PTP amount, follow-up date, disposition classification (40+ categories), human intervention flag, branch address, alternate phone, vehicle sale info

### TVR (Telephone Verification) Agents

| Agent | Status |
|-------|--------|
| Dev: TVR [Customer] | Active — 1,459 calls, 66s avg duration |
| Loan TVR Agent | Active — 176 calls, 117s avg duration |
| Dev: TVR [Co-Applicant - NonRePayment] | New (Feb 5) |
| Dev: TVR [Co-Applicant - RePayment] | New (Feb 5) |
| Dev: TVR [Guarantor] | New (Feb 5) |
| TVR Analytics-Test [Mohit] | Active |

### Other Active Agents

| Agent | Status |
|-------|--------|
| Dev: Collection Bot: 31-90 | Active — 31-90 day overdue bucket (Jan 28) |
| Dev: Collection Bot: Reminder Call 31-90 | Active (Jan 18) |
| DEV Multiple EMI - Collection Agent 0-30 Bucket | Active (Dec 16) |
| DEV - Collection agent 0-30 bucket | Active (Dec 11) |
| Development - Collection Bot - Step 1 | Active (Jan 1) |
| Akshay - Collection Testing Bot | Active |
| Akshay RF Sales Bot Testing | Active (Jan 21) |
| [DM][CON] Sales Productivity Bot | **New (Feb 5)** |
| [DM][SIN] Sales Productivity Bot | **New (Feb 6 — today)** |
| (IN) Lead Qualification (Bike Loan) - Outbound | Active (Jan 21) — GPT-4.1, ElevenLabs voice |

---

## Usage Data & Collections Insights (Feb 6, 2026)

### Overall Scale (Production Collection Bots Only)

| Metric | Value |
|--------|-------|
| **Total call attempts** | **1,602,389** (906K + 464K + 231K across 3 agents) |
| **Unique customers called** | **62,369** |
| **Avg calls per customer** | **25.7** (max: 223) |
| **Avg completed calls per customer** | **4.1** |
| **Connected at least once** | **45,823 (73.5%)** |
| **Never connected** | **16,546 (26.5%)** — key retry/concurrency improvement target |
| **Total completed calls** | **256,432** |
| **Total call minutes** | **~153,900 mins** (~2,565 hours) |
| **Active since** | Dec 24, 2025 (~6 weeks) |
| **Call type** | 99.5% telephony outbound |

### Retry Distribution (per unique customer)

| Attempts | Customers | % |
|----------|-----------|---|
| Called once | 6,242 | 10.0% |
| 2-5 times | 10,625 | 17.0% |
| 6-10 times | 5,435 | 8.7% |
| 11-20 times | 12,491 | 20.0% |
| 21-50 times | 15,163 | 24.3% |
| 51+ times | 12,413 | 19.9% |

### Daily Call Volume & Connect Rate Trend

| Date | Total Calls | Completed | Connect Rate | Minutes |
|------|------------|-----------|-------------|---------|
| Jan 1 | 1,757 | 706 | 40.2% | ~555 |
| Jan 2 | 4,514 | 1,885 | 41.8% | ~1,533 |
| Jan 3 | 6,538 | 2,441 | 37.3% | ~1,704 |
| Jan 6 | 12,325 | 4,215 | 34.2% | ~4,109 |
| Jan 7 | 19,747 | 5,668 | 28.7% | ~4,883 |
| **Jan 8** | **41,660** | **8,660** | **20.8%** | ~6,889 |
| Jan 9 | 36,553 | 5,837 | 16.0% | ~4,460 |
| **Jan 10** | **56,656** | **10,798** | **19.1%** | ~7,274 |
| Jan 15 | 51,660 | 7,269 | 14.1% | ~4,069 |
| Jan 16 | 40,189 | 6,946 | 17.3% | ~5,852 |
| Jan 22 | 71,294 | 9,545 | 13.4% | ~5,789 |
| Jan 25 | 113,795 | 8,304 | 7.3% | ~4,309 |
| Jan 27 | 61,800 | 9,304 | 15.1% | ~4,887 |
| Jan 31 | 55,820 | 8,643 | 15.5% | ~4,116 |
| Feb 1 | 56,084 | 6,798 | 12.1% | ~3,211 |
| Feb 3 | 90,383 | 10,698 | 11.8% | ~5,126 |
| Feb 4 | 54,311 | 13,034 | **24.0%** | ~6,056 |
| Feb 5 | 61,004 | 12,432 | **20.4%** | ~5,716 |
| **Feb 6 (today, partial)** | **45,134** | **17,525** | **38.8%** | **~11,903** |

### Concurrency Increase Impact (Feb 6)

| Metric | Jan Avg Day | Jan 8 (best) | Jan 10 (best) | Feb 5 | **Feb 6 (today)** | Change vs Jan best |
|--------|-------------|-------------|--------------|-------|-------------------|-------------------|
| Connect rate | ~16% | 20.8% | 19.1% | 20.4% | **38.8%** | **+97%** |
| Completed calls | 5,900 | 8,660 | 10,798 | 12,432 | **17,525** | **+62%** |
| PTP outcomes | ~720 | 2,133 | 2,178 | 1,056 | **3,034** | **+39%** |
| Already paid | ~240 | 368 | 461 | 518 | **997** | **+116%** |
| Collection-positive | ~960 | 2,501 | 2,639 | 1,574 | **4,031** | **+53%** |
| Avg call duration | ~6s | ~10s | ~7s | ~5.6s | **15.8s** | **+126%** |

### Collections Revenue (PTP Amounts — ₹, capped at ₹5L for clean data)

| Period | PTP Calls w/ Amount | Total ₹ Value | Avg PTP | Daily Avg ₹ |
|--------|-------------------|---------------|---------|-------------|
| **Jan full month** | 20,233 | **₹34.48 Cr** | ₹17,039 | ₹1.11 Cr |
| Jan 1-5 (ramp) | 1,059 | ₹2.78 Cr | ₹26,293 | ₹0.56 Cr |
| **Jan 6-10 (peak)** | **5,796** | **₹11.67 Cr** | ₹20,135 | **₹2.33 Cr** |
| Jan 11-15 | 3,526 | ₹5.64 Cr | ₹15,989 | ₹1.13 Cr |
| Jan 16-20 | 6,118 | ₹8.31 Cr | ₹13,585 | ₹1.66 Cr |
| Jan 21-25 | 2,309 | ₹3.79 Cr | ₹16,432 | ₹0.76 Cr |
| Jan 26-31 | 1,425 | ₹2.28 Cr | ₹15,987 | ₹0.38 Cr |
| **Feb 1-6 (6 days)** | **2,226** | **₹4.01 Cr** | ₹18,012 | ₹0.67 Cr |
| Feb 1 | 190 | ₹0.38 Cr | ₹20,023 | — |
| Feb 2 | 142 | ₹0.29 Cr | ₹20,743 | — |
| Feb 3 | 208 | ₹0.37 Cr | ₹17,761 | — |
| Feb 4 | 332 | ₹0.56 Cr | ₹16,855 | — |
| Feb 5 | 304 | ₹0.56 Cr | ₹18,416 | — |
| **Feb 6 (today, partial)** | **1,050** | **₹1.85 Cr** | ₹17,577 | — |

**Today's ₹1.85 Cr is 3.3x yesterday and already close to Jan 6-10 peak daily average of ₹2.33 Cr — with the day not over.**

### Disposition Outcomes (256,432 completed calls, all time)

| Disposition | Count | % |
|-------------|-------|---|
| Connected but no response (silent) | 117,525 | 45.8% |
| Customer not available (3rd party) | 24,985 | 9.7% |
| **Promise to Pay — Online** | **20,809** | **8.1%** |
| Refuse to Pay | 20,881 | 8.1% |
| No pickup (rang out) | 18,593 | 7.3% |
| Willing to pay (no date) | 11,353 | 4.4% |
| Hung up immediately | 5,805 | 2.3% |
| Already paid — Online | 5,656 | 2.2% |
| Financial hardship | 4,465 | 1.7% |
| Already paid — to DSA | 4,133 | 1.6% |
| Vehicle sold to 3rd party | 3,661 | 1.4% |
| PTP — at branch | 1,919 | 0.7% |
| Disputes (loan tenure) | 1,374 | 0.5% |
| Broken PTP (re-committed) | 1,212 | 0.5% |
| Paid on the call itself | 975 | 0.4% |
| PTP — next month | 927 | 0.4% |
| PTP — to field agent | 895 | 0.3% |

**Key stats:**
- 29,846 calls extracted a concrete PTP date
- ~35,900 total PTP outcomes (14% of completed)
- ~10,764 already-paid confirmations (4.2%)
- Human intervention needed: only 3.6% (9,267 / 254K)

### Weekly Collection-Positive Outcomes

| Period | PTP | Paid | Total Collection+ | Daily Avg |
|--------|-----|------|-------------------|-----------|
| Jan 1-5 | 1,556 | 234 | 1,790 | 358 |
| **Jan 6-10 (peak)** | **8,284** | **1,650** | **9,934** | **1,987** |
| Jan 11-15 | 4,710 | 1,162 | 5,872 | 1,174 |
| Jan 16-20 | 6,604 | 1,529 | 8,133 | 1,627 |
| Jan 21-25 | 4,325 | 1,934 | 6,259 | 1,252 |
| Jan 26-31 | 4,423 | 2,446 | 6,869 | 1,145 |
| Feb 1-3 | 2,144 | 990 | 3,134 | 1,045 |
| Feb 4-5 | 2,393 | 1,008 | 3,401 | 1,701 |
| **Feb 6 (today only)** | **3,034** | **997** | **4,031** | **4,031** |

### Projection: If Concurrency Holds

| Metric | Jan Monthly | Feb Projected (at today's rate) |
|--------|------------|-------------------------------|
| PTP ₹ value/day | ₹1.11 Cr | **₹2.5-3 Cr** |
| PTP ₹ value/month | ₹34.48 Cr | **₹55-66 Cr** |
| Collection-positive/day | 960 | **4,000+** |
| Completed calls/day | 5,900 | **17,000+** |

---

## Observations & Insights (Feb 6, 2026)

1. **Concurrency is the biggest lever** — Connect rate doubling from ~19% to 39% means the same call volume produces 2x the conversations. Today is proof.

2. **They're self-serving and scaling fast** — 52 agents created, 7 users, new use cases (TVR, Sales Productivity, Lead Qualification) being built without hand-holding. New agents created as recently as today.

3. **TVR is a genuine second product line** — Not just collections. They built Customer, Co-Applicant, and Guarantor TVR agents for loan verification. Avg call duration 66-117 seconds (much deeper conversations).

4. **The 31-90 day bucket expansion** — They started with 0-30 day overdue, now building 31-90 day collection bots. This is natural account expansion within the same use case.

5. **Sales Productivity Bot (Feb 5-6)** — Brand new use case, potentially for their own sales team. Shows they see Atoms as a platform, not just a collections tool.

6. **Silent call rate (46%) is the optimization opportunity** — Nearly half of "completed" calls have no customer response. Better voicemail detection, retry timing, and number validation could convert some of these into real conversations.

7. **Actual run-rate likely exceeds $8K MRR** — At ~120K+ mins/month (and growing), actual usage may already exceed the original commercial estimate.

---

## Usage Update: Feb 6-10, 2026 (Live DB Pull)

### Daily Performance (Production Collection Bots)

| Date | Day | Total Calls | Completed | Connect Rate | Minutes | PTP ₹ Value | PTP Calls | Paid | Collection+ |
|------|-----|-------------|-----------|-------------|---------|-------------|-----------|------|-------------|
| **Feb 6** | Thu | 45,134 | 17,525 | **38.8%** | 11,903 | **₹1.85 Cr** | 1,056 | 997 | 4,031 |
| **Feb 7** | Fri | 80,482 | **24,846** | 30.9% | **14,738** | **₹2.05 Cr** | 1,392 | 1,702 | **5,314** |
| Feb 8 | Sat | 78,013 | 20,744 | 26.6% | 11,047 | ₹1.17 Cr | 852 | 1,681 | 3,930 |
| Feb 9 | Sun | 67,131 | 15,760 | 23.5% | 7,995 | ₹0.83 Cr | 596 | 1,094 | 2,778 |
| Feb 10 | Mon | 52,442 | 11,516 | 22.0% | 5,620 | ₹0.57 Cr | 424 | 717 | 1,842 |

### 5-Day Totals (Feb 6-10)

| Metric | Value |
|--------|-------|
| **Total calls attempted** | **323,202** |
| **Completed (connected)** | **90,391** |
| **Avg connect rate** | **28.0%** (vs Jan avg ~16%) |
| **Total minutes** | **51,303 min** (~855 hrs) |
| **Total PTP ₹ value** | **₹6.47 Cr** |
| **Total "Already Paid" confirmations** | **6,191** |
| **Total collection-positive outcomes** | **17,895** |

### Key Trend: Connect Rate Declining After Concurrency Boost

- Feb 6 peak: 38.8% → Feb 10: 22.0%
- Likely weekend effect + portfolio fatigue (repeat calls to same set)
- Feb 10 Monday still above Jan avg (~16%), so sustained improvement vs baseline

### Feb Run-Rate Projection

| Metric | Jan Actual | Feb 6-10 Daily Avg | Feb Projected |
|--------|-----------|-------------------|--------------|
| Minutes/day | ~4,500 | **10,261** | **~220-250K/month** |
| PTP ₹/day | ₹1.11 Cr | ₹1.29 Cr | **₹28-35 Cr/month** |
| Collection+/day | 960 | 3,579 | **~75-90K/month** |
| Completed calls/day | 5,900 | 18,078 | **~400K/month** |

**Note:** Platform consuming ~2x the original volume estimate (220-250K mins vs 100K). Key leverage for upsell.

### Second Org (New — Testing)

Kogta set up a second org (`692447617327d3e417ffa4b9`) with new Collection Bot 1/2/3, TVR agents, and Sales Productivity bots. Only 63 calls so far — pure testing. Production remains on primary org.

---

## Meeting History

### Feb 7, 2026 — Harsh + Vishal Handa (CTO) — Performance Review & Multilingual
**Source:** [Granola transcript](https://notes.granola.ai/t/d5985a47-2e92-4d70-bcc0-6cd372260c2e)

- **AUM:** ₹8,000 Cr with 20,000 active cases
- **Performance:** Strong improvement. Management raising expectations after recent success.
- **Hard bucket:** 31-90 day agent deployment planned this month
- **Industry-wide issue:** Customer call pickup rates declining — not a platform problem, affects all players
- **Marathi moment:** Accidentally enabled, 4.5-min natural conversation. Clear demand for native language.
- **High-growth markets:** Gujarat (strong biz growth), Maharashtra (3-yr trajectory, Aurangabad/Nagpur transport demand), Rajasthan (tractor financing, stagnant)
- **Competitors:** Already offering multilingual. Vishal flagged as competitive risk.
- **Pricing:** Vishal mentioned current pricing "won't work" at scale — commercial restructuring needed
- **Feb commitment:** Referenced original MSA timeline for multilingual delivery

### Feb 10, 2026 — Harsh + Akshay Kakkar — MSA & Language Requirements
**Source:** [Granola transcript](https://notes.granola.ai/t/a8008127-ec42-419a-8101-d89821f67f37)

- MSA period needs to reflect actual product roadmap
- Current platform supports 3 languages; future additions (Marathi, Gujarati, South Indian) under discussion
- New voice creation capabilities, exclusions/inclusions framework
- Stakeholder alignment call to be scheduled: Vishal + Akshat + Harsh
- Akshat unavailable (family emergency); rescheduling

### Feb 11, 2026 — Full Team Call: Harsh, Apoorv, Akshat ↔ Vishal, Chandan, Akshay
**Attendees:** Harsh Jain, Apoorv Sood (GTM), Akshat Mandloi (CTO) | Vishal Handa (CTO), Chandan Agarwal (CDO/Co-founder), Akshay Kakkar

**1. Tech Stability — Acknowledged Improvement**
- Vishal: "We are now not seeing those pressing issues which we were seeing last month." No more morning crashes. Confidence restored.
- Still monitoring but relief vs. Jan.

**2. V3 Voice Feedback**
- Latency reduced — "looks more real now"
- **Clarity issue at high speed** — bot fumbles/takes shortcuts when speaking fast
- Speed at 1.3-1.4x is **intentional** (Vishal): slower speed → customers hang up. Fix clarity, not speed.
- Maharshi working on fix. Akshat to expedite.

**3. Multilingual — Confirmed P1**
- Chandan: "This is P1. Rest can go second priority."
- **Immediate:** Gujarati, Marathi (rural/semi-rural market demand)
- **Soon:** Punjabi, Indian English
- **6 months:** South Indian (Tamil, Kannada) — Kogta expanding south next FY
- **Akshat timeline:** Data collection ongoing. Training ~2 more weeks. **Gujarati + Marathi available for testing by March first week (best case).**
- Chandan: "Once we start conversing in regional language, conversion will easily increase by 5-10%."

**4. Data Sharing for Training**
- Apoorv asked if Kogta could share call recordings to train rural dialect models
- Chandan: "Your point of view is valid but as long as we are abiding with RBI guidelines... I'd like to check with my compliance team."
- **Not a no** — pending internal compliance review

**5. Dialect Understanding**
- Chandan: Hindi varies hugely by region (Haryanvi vs Rajasthani vs Delhi). Bot gets lost on dialects.
- Akshat: **Dialect understanding (STT) is more feasible** than dialect speaking (TTS). Will prioritize understanding across dialects first.
- Dialect speaking (different regional accents in TTS) is harder and not short-term feasible.
- Chandan: "Let's solve one by one. At least the bot is able to respond rather than getting hung."

**6. Concurrency & Commercial — Planted but Not Discussed**
- Harsh proposed: reserve higher concurrency for key dates (6-9th, 16-19th monthly), flex down for others, reflect in commercial structure
- Vishal: "We did not discuss internally on the commercials right now... when we get closer to that we'll start discussing."
- Vishal confirmed they increased to ~100 concurrency this cycle and saw results
- **No commercial commitments made. Framework planted.**

**7. Reserved Agent-Level Concurrency — KEY PLATFORM ASK**
- Vishal: Currently FIFO across all agents. "That is something which is very importantly missing."
- They're going live with multiple verticals (collections, TVR, sales) — each needs dedicated capacity
- "It cannot happen in first-in-first-out basis. Those are completely different verticals."
- Akshay confirmed Maharshi doing last-mile testing on this feature

**8. Agent Orchestration (Far-Sighted)**
- Vishal wants multi-agent orchestration — not just customer-facing, could be hybrid (internal ops + customer delegation)
- Akshat: SDK POC exists (built in 1 week for another customer). Base framework available. Needs cleanup for public use.
- Vishal to document a use case and share requirements
- Akshat to clean up SDK and share for testing

**9. Analytics Dashboard — HIGH PRIORITY**
- Vishal: "If you can get the dashboard it will be really helpful to plan our campaigns."
- Chandan: "We also have internal reviews... management is very aggressive, wants weekly reviews."
- Currently dependent on Maharshi/Kawaldeep sharing data manually — painful and slow
- Akshat: Analytics module in design, answers all their questions. Something going live in ~2 weeks.
- Apoorv (transparency): Big architectural shift happened this week, 1-2 weeks to stabilize, then analytics built on top.

**10. Cross-Call Context Awareness — NEW FEATURE REQUEST**
- Chandan: Bot should have context of all previous calls to same customer within the month
- Currently only disposition data passed (narrow)
- "If the bot can have context with current month conversations, it will give more human feeling than a machine feeling."
- Could be 2 calls, 5 calls, 10 calls — however deep into the month
- Akshat: Will propose multiple solution approaches for Vishal to evaluate

**11. Relationship & Personal Connections**
- Apoorv discovered Chandan is co-founder of WholesaleBox. Apoorv was CRO at WebEngage (Rehan was early investor at WholesaleBox). Strengthens personal bond.
- Vishal: "One of the biggest reasons for us going with Smallest is the aggression. Issues are there in every system. But people are aggressive, supportive, trying to do their best."
- Apoorv publicly credited Akshat for what the small team has achieved vs. ElevenLabs' 150-person TTS team.

**12. In-Person Meeting — Feb 23, Jaipur**
- Harsh traveling to Jaipur specifically for Kogta
- Akshay confirmed available; checking with Chandan
- Vishal may meet separately this week/next week
- Apoorv wants to join after US trip

**13. Akshay Asked Harsh to Stay Back**
- Something separate discussed after the main call. Details TBD.

---

## Feature Requests & Product Roadmap (from Feb 11 call)

| Feature | Priority | Owner | Timeline | Status |
|---------|----------|-------|----------|--------|
| **Multilingual (Gujarati, Marathi)** | **P0** | Akshat | March first week (test) | Data collection ongoing, training ~2 weeks |
| **Analytics Dashboard** | **P0** | Akshat | ~2 weeks (post arch shift) | Arch shift done, stabilizing, then build |
| **Reserved Agent-Level Concurrency** | **P0** | Maharshi | Last-mile testing | Code-level changes done, testing left |
| **V3 Voice Clarity Fix** | **P1** | Maharshi | This week | Active bug — fumbles at 1.3-1.4x speed |
| **Cross-Call Context Awareness** | **P1** | Akshat | TBD | Akshat to propose solution approaches |
| **Testing Suite** | **P2** | Akshat | March | POCs done, UX/integration in progress |
| **Agent Orchestration SDK** | **P2** | Akshat | TBD | POC exists, needs cleanup. Vishal to share use case. |
| **Punjabi language** | **P2** | Akshat | Post Gujarati/Marathi | — |
| **South Indian languages** | **P3** | Akshat | 6 months | Kogta expanding south next FY |
| **Dialect understanding (Hindi)** | **P2** | Akshat | Ongoing | STT first, TTS dialect is harder |
