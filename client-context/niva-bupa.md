# Niva Bupa - Client Context

**Last Updated:** 2026-02-04  
**Deal Owner:** Harsh Jain  
**Stage:** **Building v0.1 Agent → POC**  
**Priority:** 🔥 **HIGH - ELT pushing for POC**  
**Handoff From:** Divyanshu Pandey (BDR)

---

## TL;DR

| Item | Details |
|------|---------|
| **Company** | Niva Bupa Health Insurance (formerly Max Bupa) |
| **Primary Use Case** | Tele-underwriting (replace vendor doing manual doctor calls) |
| **Secondary Use Cases** | Post-churn surveys, Renewals, Service calls |
| **Monthly Volume** | 35,000-40,000 tele cases/month |
| **Current Vendor Cost** | **~₹300 per completed tele case** (our price benchmark) |
| **Languages** | English + Hindi (regional later, not P0) |
| **CRM** | Sprinklr |
| **Decision Maker** | Jitendra Vanjani (ELT) - final sign-off |
| **Approvers** | Vikar (Underwriting Head), Charit R. Agarwal (Chief Analytics Officer) |
| **Working Contact** | Mohit Thakran - 8750370848 |
| **Competition** | Convin AI (they use our voice model!) |
| **Smallest Team** | Harsh Jain (lead), Divyanshu Pandey (BDR), Tausif Patel, Pratirath Gupta |

---

## Company Overview

- **Company:** Niva Bupa Health Insurance Company Limited
- **Formerly:** Max Bupa Health Insurance Company Limited
- **Industry:** Health Insurance
- **Country:** India
- **Status:** Publicly listed insurer
- **Parent:** Bupa Singapore Holdings Pte. Ltd. (UK-based Bupa group)
- **Heritage:** 70+ years global healthcare experience
- **Customers:** 1 crore+ (10 million+)
- **Hospital Network:** 10,000+ across India
- **Global Presence:** Bupa operates in 190+ countries
- **Company Age:** ~17-18 years

---

## What They're Evaluating/Buying

### Products
- **TTS (Text-to-Speech)** - Primary
- **STT (Speech-to-Text)** - Primary
- **Full Stack Voice Agents (Atoms)** - Primary

### Use Cases
- **Tele-underwriting** (primary POC focus) ← PRIORITY
- Post-churn survey calls (secondary)
- Renewals with cross-sell/upsell (future)
- Service/claims query handling (future)
- Next-best-action campaigns (future)

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Current Vendor Cost** | **~₹300 per completed tele case** |
| **Monthly Volume** | 35,000-40,000 cases |
| **Calls per Case** | ~1.2x |
| **Call Duration** | 7-12 mins (estimate) |
| **POC Volume** | 10-20 cases/day for 10-15 days |
| **Target Price** | Must be "much below" ₹300/case |
| **MRR** | TBD |
| **ARR** | TBD |
| **Deal Type** | Champion-Challenger POC |
| **Deployment** | Cloud (AWS or Sprinklr) |

---

## Business Context

### Business Model

Insurance lifecycle with multiple customer touch points:
1. **Acquisition** - Find prospects, explain products, telesales
2. **Onboarding** - Welcome calling, tele-underwriting
3. **Servicing** - Answer queries on products, claims process
4. **Claims** - Support during hospital admissions (3-5% of customers/year)
5. **Renewal** - Segment-based outreach, churn prevention
6. **Retention** - Next-best-action campaigns (birthdays, anniversaries)

### The Opportunity

| Metric | Value |
|--------|-------|
| Tele-underwriting | Currently outsourced to agency |
| Approach | Champion-challenger (5% AI → 95% agency initially) |
| Goal | Gradually shift volume to AI as confidence grows |

---

## Tele-Underwriting Process (Detailed)

### Current State (Manual Vendor Process)

1. **Application:** Customer fills policy application + medical questionnaire (yes/no questions)
2. **Rule Engine:** System determines STP (straight-through) vs non-STP cases
3. **STP Cases:** Auto-approved, instant policy issuance
4. **Non-STP Cases:** Goes to underwriting bucket
5. **Vendor Ops:** Calls customer to schedule tele-underwriting time
6. **Doctor Call:** Vendor doctor calls at scheduled time, asks medical questions
7. **Summarization:** Doctor manually types PDF summary (not speech-to-text)
8. **Underwriter Review:** Reviews all docs + tele summary → approve/exclusion/reject

### Pain Points

| Issue | Impact |
|-------|--------|
| Manual scheduling | Delays, customer drops off |
| Not 24/7 available | Application-to-issuance dropouts |
| Manual summarization | Slow, inconsistent quality |
| No tone/hesitation detection | Miss risk signals |

### What the Bot Must Do

**Phase 1 (Primary Objectives):**
- 24/7 availability (biggest value prop - reduce issuance dropouts)
- Medical context understanding
- Explain jargon to non-medical customers
- Feel like a doctor explaining and helping, not just asking questions
- Human-like voice
- Summarize responses for underwriter in structured format

**Phase 2 (Secondary):**
- Detect hesitations, tones
- Flag risks for underwriter
- Trigger video call if high risk detected

**Quote from Mohit:**
> "He should feel like doctor to explain and help you and then know about you rather than you have to finish the case or ask these questions."

---

## Use Cases (Prioritized)

### 1. Tele-Underwriting (Primary POC Use Case)

| Attribute | Details |
|-----------|---------|
| Current State | Outsourced to external agency (~₹300/case) |
| Approach | Champion-challenger (5% AI → 95% agency initially) |
| Goal | Gradually shift volume to AI as confidence grows |
| Complexity | Medical jargon needs simplification for tier-2 Hindi speakers |

**Key Challenge (from Charit):**
> "For example, if somebody asks 'has someone in your family been diagnosed with sarcoma?' and the consumer is a Hindi-speaking person from tier-2 city, he does not know what sarcoma is. Can the bot tone down the language to explain what we're really asking?"

**Requirements:**
- Structured data output (matching agency format)
- Unstructured insights from transcripts
- Confidence scoring (was consumer confident 80% of the time?)
- Intent detection and clarification

### 2. Post-Churn Survey Calls

| Attribute | Details |
|-----------|---------|
| Purpose | Understand why customers left Niva Bupa |
| Volume | Random sample of churned customers |
| Output | Insights to minimize future churn |

### 3. Renewals

| Attribute | Details |
|-----------|---------|
| Current State | Combination of calls + omnichannel (WhatsApp, SMS, email) |
| Focus | High-churn segments |
| Opportunity | Cross-sell/upsell new products, plan migrations |

### 4. Service Calls (Future)

| Attribute | Details |
|-----------|---------|
| Purpose | Answer queries on products, claims status |
| Channel | Inbound |
| Current State | Large team of service agents |

### 5. Next-Best-Action Campaigns (Future)

| Attribute | Details |
|-----------|---------|
| Purpose | Increase customer mind share beyond claims/renewal touchpoints |
| Examples | Birthday wishes, anniversary calls, app feature promotion |
| Goal | Reduce churn through proactive engagement |
| App Offerings | Teleconsultation, medicines, second medical opinion (10+ offerings) |

---

## Technical Requirements

### Languages
- **English** - Primary
- **Hindi** - Primary
- **Regional languages** - Future (based on KPI impact)

### Integration

| System | Details |
|--------|---------|
| CRM | Sprinklr |
| Data Input | API push/pull with CRM |
| Data Output | Structured data matching agency format |
| Hosting | Could be AWS (Niva Bupa uses AWS) or Sprinklr cloud |

### Telephony

| Option | Details |
|--------|---------|
| SIP Trunking | Available if using existing Niva Bupa numbers |
| Plivo | Regulated 1400-1600 series numbers available |

### AI Capabilities Required

| Capability | Importance |
|------------|------------|
| Low latency | Table stakes |
| Human-like voices | Table stakes |
| Real-time intent understanding | Critical |
| Language clarification | Critical (medical jargon → layman terms) |
| Confidence/sentiment scoring | High |
| Transcript analysis | High |
| Hindi + English code-switching | Critical |

**Quote from Charit:**
> "Am I understanding the consumer on the go? Intent of hiding something, intent of clarifying that the consumer is not able to understand my question..."

---

## Key Contacts

### Niva Bupa

| Name | Role | Contact | Notes |
|------|------|---------|-------|
| **Jitendra Vanjani** | ELT (Executive Leadership) | - | **FINAL SIGN-OFF**, project sponsor |
| **Vikar** | Underwriting Head | - | Reviews with ELT after Charit/Mohit approve |
| **Charit R. Agarwal** | Chief Analytics Officer | charit.agarwal@nivabupa.com | First layer approval, IIT Bombay, 15+ years analytics |
| **Mohit Thakran** | Charit's team | **8750370848**, mohit.thakran@nivabupa.com | **PRIMARY WORKING CONTACT** |

**Decision Flow:**  
Mohit + Charit (demo review) → Vikar + Jitendra (final go-ahead)

### Charit's Background

- **Current:** Chief Analytics Officer, Niva Bupa
- **Previous:** IndusInd Bank, Encore Capital Group, EXL Service
- **Education:** IIT Bombay
- **Experience:** ~15 years in analytics for Fortune 500 clients
- **Expertise:** Marketing analytics, machine learning, predictive modeling, credit cards, health insurance
- **LinkedIn:** https://www.linkedin.com/in/charitagarwal/

### Smallest Team

| Name | Role |
|------|------|
| Harsh Jain | Head of Partnerships (Deal Owner) |
| Divyanshu Pandey | BDR (discovery call owner) |
| Tausif Patel | Sales |
| Pratirath Gupta | Sales |

---

## POC Structure

| Phase | Details | Timeline |
|-------|---------|----------|
| **Phase 0** | Mohit shares 20-30 call recordings + questionnaire | Today (Feb 4) |
| **Build** | We build v0.1 tele-underwriting agent | ~1 week |
| **Demo** | Review with Mohit + Charit | Week of Feb 10 |
| **POC** | 10-20 cases/day for 10-15 days (manual integration) | If demo approved |
| **Metrics Review** | Contactability, NPS, quality vs vendor | After POC |
| **Scale** | Increase volume, full integration | If metrics match |
| **Go-Live** | Full production | TBD |

---

## Competitive Landscape

### Convin AI (Current Vendor)

| Aspect | Status |
|--------|--------|
| Relationship | Active POC/engagement |
| Experience | Positive ("nothing went wrong") |
| Our Position | Challenger |
| Key Intel | **They use Smallest's voice model!** (per Harsh on call) |

**Quote from Charit:**
> "Nothing is wrong with them. They are also developing a solution. It's more of a champion-challenger conversation right now."

**Positioning:** We own the full stack (STT, TTS, LLM, orchestration) - can fine-tune at last mile. Convin uses external components, including our voice model.

### What We Need to Win

| Factor | Charit's Words |
|--------|----------------|
| Latency | "Table stakes" |
| Human-like voice | "Table stakes" |
| Real-time understanding | "Am I understanding the consumer on the go?" |
| Language adaptation | "Can we tone down the language to explain to the consumer?" |
| Confidence scoring | "Consumer was confident for 80% of the time, not confident on this question" |
| Price | Must be much below ₹300/case |

---

## Timeline

| Date | Event |
|------|-------|
| Jan 24, 2026 (Fri) | Initial discovery call - Divyanshu × Charit |
| Jan 27, 2026 | Summary email sent, follow-up call scheduled |
| Jan 28, 2026 | Follow-up call - Charit couldn't join (meeting overran) |
| Jan 30, 2026 | Charit added Mohit Thakran to handle scheduling |
| Feb 3, 2026 | Divyanshu spoke with Mohit, scheduled Feb 4 call |
| **Feb 4, 2026** | **Deep-dive call - Harsh × Mohit** ✅ |
| **Feb 4, 2026** | **Mohit to share 20-30 recordings + questionnaire** |
| **Week of Feb 10** | **Demo v0.1 agent to Mohit/Charit** |
| **Feb 15-28** | **POC: 10-20 cases/day** |

---

## Open Items

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1 | Receive 20-30 call recordings from Mohit | Mohit | **PENDING (today)** |
| 2 | Receive medical questionnaire document | Mohit | **PENDING (today)** |
| 3 | Build v0.1 tele-underwriting agent | Smallest | **TODO (~1 week)** |
| 4 | Demo to Mohit/Charit | Harsh | After build |
| 5 | Present to Vikar + Jitendra | Harsh/Mohit | After demo approval |
| 6 | POC: 10-20 cases/day, 10-15 days | Both | After approval |
| 7 | Address voice-cloning quality gap | Pratirath (bring Osho back) | PENDING |
| 8 | NDA signing | Both parties | PENDING |

---

## Next Steps

### Immediate (This Week)

- [ ] **Receive from Mohit:** 20-30 call recordings + questionnaire (today)
- [ ] **Build:** v0.1 tele-underwriting agent (~1 week)
- [ ] **Send:** Email to Mohit confirming next steps
- [ ] Address voice-cloning quality (Osho)

### Next Week

- [ ] **Demo:** Show v0.1 to Mohit + Charit
- [ ] **Iterate:** Based on feedback
- [ ] **If approved:** Start POC (10-20 cases/day)

### After POC

- [ ] Present to Vikar (Underwriting Head) + Jitendra (ELT)
- [ ] Full integration discussion
- [ ] Commercial proposal
- [ ] NDA signing
- [ ] POC scope definition

---

## Meeting Notes

### Jan 24, 2026 - Discovery Call (Divyanshu × Charit)

**Key Points:**
- Charit walked through the entire insurance lifecycle and touch points
- Three initial use cases identified: post-churn, renewals, tele-underwriting
- Tele-underwriting currently outsourced to agency
- Champion-challenger approach preferred (start with 5% AI, 95% agency)
- Already working with Convin AI (positive experience)
- Volumes: 10-20k calls/month per use case
- Languages: English + Hindi
- Integration with Sprinklr CRM

**Charit's Key Requirements:**
1. Low latency (table stakes)
2. Human-like voices (table stakes)
3. Real-time intent understanding
4. Language simplification (medical jargon → layman terms for tier-2 Hindi speakers)
5. Confidence/sentiment scoring in transcripts
6. Structured + unstructured data output

**Next Steps Discussed:**
- NDA signing
- Quick POC with two bots:
  1. Post-churn survey bot
  2. Tele-underwriting bot
- Requirement document from Niva Bupa

### Jan 28, 2026 - Follow-up Call (Incomplete)

**Outcome:** Charit couldn't join (meeting overran). Technical stakeholder missing.

**Action Items (from Sybill summary):**
1. Pratirath: Bring Osho back for voice-cloning improvements
2. Harsh: Reach out to core group at Niva Bupa
3. Divyanshu: Obtain requirement form
4. Pratirath: Schedule internal follow-up

**Key Takeaways:**
- Voice-cloning quality is below expectations for India-specific requirements
- Technical stakeholder needs to attend next call
- Cannot proceed to proposal without requirement form

### Feb 4, 2026 - Deep-Dive Call (Harsh × Mohit) ✅

**Attendees:** Harsh Jain, Mohit Thakran

**Key Outcomes:**

1. **Use Case Confirmed:** Tele-underwriting is priority (not post-churn)

2. **Process Clarity:** Mohit explained full tele-underwriting flow:
   - Customer declares medical conditions in application
   - Non-STP cases go to tele-underwriting bucket
   - Vendor ops schedules call, vendor doctor calls and asks questions
   - Doctor manually types PDF summary
   - Underwriter reviews and decides

3. **Volume & Pricing:**
   - 35,000-40,000 tele cases/month
   - Currently paying ~₹300/completed case to vendor
   - We need to be "much below" this

4. **Decision Makers Identified:**
   - Jitendra Vanjani (ELT) - final sign-off
   - Vikar - Underwriting Head
   - Charit - first layer approval

5. **Priority Confirmed:** ELTs have been asking why not already in POC
   > "Abhi tak toh koi ek bot hona chahiye tha jo abhi tak POC pe success metrics aur ye sab hume dikha raha tha."

6. **POC Approach:**
   - Mohit to share 20-30 call recordings + questionnaire
   - We build v0.1 in ~1 week
   - Demo to Mohit/Charit
   - If good, POC: 10-20 cases/day for 10-15 days
   - Then present to Vikar + Jitendra

7. **Bot Requirements:**
   - 24/7 availability (primary - reduce issuance dropouts)
   - Medical context understanding
   - Explain jargon to customers
   - Feel like a doctor helping, not just asking questions
   - Summarize for underwriter
   - Secondary: detect hesitations, flag risks

**Next Steps:**
- Mohit sends recordings + questionnaire (today)
- We build agent (~1 week)
- Demo call next week

---

## Risks and Concerns

| Risk | Mitigation |
|------|------------|
| Price sensitivity | Must be much below ₹300/case |
| Medical accuracy | Use recordings to train on real scenarios |
| Voice quality not competitive | Engage Osho to improve professional voice-cloning output |
| Timeline pressure | ELTs pushing - need to move fast |
| Convin AI has positive relationship | Position as complementary challenger, highlight full-stack advantage |
| Technical stakeholder not engaged | Ensure Mohit coordinates right attendees for calls |
| Medical jargon handling | Demonstrate dynamic language simplification capability |

---

## Attachments Shared

| Document | Shared By | Date | Status |
|----------|-----------|------|--------|
| Smallest AI - Infy Deck - v4 - 200126.pdf | Divyanshu | Jan 27, 2026 | ✅ Shared |
| 20-30 call recordings | Mohit | Feb 4, 2026 | ⏳ Pending |
| Medical questionnaire | Mohit | Feb 4, 2026 | ⏳ Pending |

---

## Communication Channels

- **Email:** Formal communication (charit.agarwal@nivabupa.com, mohit.thakran@nivabupa.com)
- **WhatsApp:** Mohit (8750370848), Divyanshu ↔ Charit
- **Google Meet:** Video calls

---

**🎯 TARGET:** Build v0.1 in 1 week → Demo → POC (10-20 cases/day)  
**🔑 KEY PERSON:** Jitendra Vanjani (ELT - final sign-off)  
**💰 PRICE:** Must be much below ₹300/case  
**⚡ PRIORITY:** HIGH - ELTs asking why not already in POC  
**⚔️ COMPETITION:** Convin AI (they use our voice model!)  
**📞 NEXT:** Receive recordings from Mohit → Build agent → Demo next week
