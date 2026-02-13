# Amazon Ads - Client Context

**Last Updated:** 2026-02-09 (Post NDA follow-ups + AWS help request)
**Deal Owner:** Harsh Jain (Internal Amazon team)
**Stage:** **NDA DELAYED - Awaiting Resend**
**Priority:** 🔥 **HIGH - Converting to Opportunity**

---

## Company Overview
- **Company:** Amazon Ads (Internal Amazon)
- **Division:** Amazon Advertising
- **Country:** India (team based)
- **Deal Type:** Internal Amazon evaluation (NOT AWS partnership channel)

---

## Amazon Ads Org Structure (India)

### Team Segments (Top to Bottom)
| Segment | Description | Account Support |
|---------|-------------|-----------------|
| **LCS** (Large Customer Sales) | Apple, Opus-level brands | AE + EM (full support) |
| **Head Accounts** | Jiva-level brands - big but not mega | AE + EM (multi-layer) |
| **Torso** | Smaller/upcoming brands | Single outsourced AM (not Amazon employees) |
| **Tail** | Long-tail SMB advertisers | Virtual light-touch AM using tools |

### Scale Team Charter
- **Shishir + Manali** = Part of the **Scale team** for India Ads
- Focus: **SMB advertisers who do NOT have direct 1:1 account managers**
- Manali specifically manages **Torso** segment (outsourced AM model)
- Shishir looks at broader scale charter

---

## Key Contacts

### Manali Mundra (Primary)
- **Email:** mundramn@amazon.com
- **Role:** Scale team - Torso segment lead
- **Background:** 
  - Already building agents internally (non-conversational)
  - Familiar with Amazon QuickSight
  - Looking for conversational AI capabilities
- **Responsibilities:** Manages advertisers with outsourced account managers

### Shishir Prashant Borkar
- **Email:** borkas@amazon.com
- **Role:** Scale team - broader scale charter
- **Focus:** Technical evaluation, scale infrastructure

---

## What They're Evaluating

### Product
- **Atoms Platform** - Complete Voice AI Platform
- Calling agent with analytics dashboard
- Customer sentiment analysis
- Conversion tracking

### Use Cases
- Customer sentiment analysis from voice calls
- Conversion tracking and analytics
- Voice AI for advertising effectiveness
- Call analytics platform

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Est. MRR** | **$50,000+** |
| **ARR Potential** | **$600,000+** |
| **POC Budget** | $2,500 discussed |
| **Production Volume** | 50,000+ minutes estimated |
| **Deployment** | SaaS |
| **Product** | Atoms Voice AI Platform |

---

## Current Status

### ⚠️ NDA Delayed - Feb 3-9, 2026 (Latest)
- **Milestone:** NDA initiated but delivery failed — awaiting resend
- **NDA Status:** Authorized signatory changed from CEO to **Akshat Mandloi (akshat@smallest.ai)**
- **What happened (Feb 3-4 WhatsApp with Manali):**
  - Feb 3: Harsh called Manali, discussed competition details. Manali agreed to proceed with NDA.
  - Feb 3: Harsh shared Akshat Mandloi (akshat@smallest.ai) as signatory contact.
  - Feb 3: Manali asked if they can continue with CEO as signatory (no edit/revoke option on her end). Harsh confirmed no problem.
  - Feb 3: Harsh asked about **on-prem vs cloud** preference for production deployment.
  - Feb 3 (9:44 PM): Akshat couldn't find NDA in his email. Manali confirmed she initiated it, said she'd check next day.
  - Feb 4: Harsh followed up to resend. Manali said she'd confirm by **end of week (Feb 7)**.
  - **As of Feb 9: No confirmation that NDA was resent or signed.**
- **NDA slipped past original Feb 3-7 target**
- **Next:** Confirm NDA resent + signed → then internal demo

### 🏁 Competition Call - Feb 3, 2026
- Harsh connected with Manali via WhatsApp call to discuss competition details
- **Multiple vendor evaluation confirmed** — this is a competitive deal
- Performance remains primary evaluation criteria

### Key Outcomes from Feb 3 Call (Manali Mundra)

#### NDA & Legal
- ✅ Mutual NDA initiated today
- 📋 Authorized signatory: **Sudarshan Kamath (CEO)**
- ⚠️ MSA discussion postponed - requires legal approval for PII sharing first
- ⏳ Amazon MSA process typically takes **3+ weeks minimum**

#### Salesforce Integration - NOT PURSUING
- ❌ Amazon decided **NOT to pursue Salesforce route**
- Third-party partner registration too complex
- Multiple partner types (agency, etc.) create lengthy approval process
- Working with legal team on data sharing alternatives
- Collaborating with other Amazon teams who've solved similar challenges

#### Data Sharing Approach
- **SFTP route preferred** - following precedents from other Amazon teams
- Cannot share PII without legal permissions yet
- Scale challenges identified - not simple SQL query extraction

#### Demo & POC Plan
- **Internal demo target:** Early next week (Feb 10 week)
- Smallest to help with initial demo setup (agent building + integration support)
- Separate cost for production scaling acknowledged
- **Cannot share PII** until legal permissions secured

#### Success Metrics Defined
1. **Functional ads knowledge** - Agent understands Amazon Ads domain
2. **Tonality and voice modulation** - Natural conversation quality
3. **Human-like behavior and relatability** - Not robotic
- Requirement gathering form to be shared by Smallest

#### Scale & Timeline
| Phase | Volume | Timeline |
|-------|--------|----------|
| Initial | 1K records | POC start |
| Phase 2 | 10K records | Post-POC |
| At Scale | **100K+ records** | **Mid to End March 2026** |

**Note:** Phased rollout - NOT immediate 100K deployment

#### Commercial & Procurement
- Procurement team involvement **after scaling decision**
- Commercial discussions led by: **Manali + Luke + Manager**
- **AWS Marketplace presence** noted as potential advantage
  - Infrastructure verification benefit
  - Procurement team to evaluate specific advantages
- **Multiple vendor evaluation in progress**
  - Performance as primary criteria
  - Commercial terms and precedents as secondary factors
- **PII security requirements critical**

#### Cadence
- **Bi-weekly or tri-weekly sync calls** during POC phase

---

### ✅ Demo Completed - Jan 20, 2026
- **Milestone:** Live demo completed with Manali and Shishir
- **Format:** Full Atoms platform demonstration
- **Showcased:**
  - Calling agent functionality
  - Analytics dashboard
  - Customer sentiment analysis
  - Conversion tracking

### Key Takeaways from Jan 20 Call
- **Primary blocker:** Amazon internal **legal** is gating deeper engagement + vendor onboarding.
- **Data at scale is non-trivial:** Manali needs a way to get **phone numbers in bulk**; highlighted cases where contact data is effectively **one-account-at-a-time** (restricted bulk export). Asked if **queuing / single-record pulls** or **native Salesforce integration** can solve this.
- **Telephony:** They use internal calling platforms (incl. **AWS Connect**). Near-term likely to run via provisioned numbers (avoid spam flagging) + integrate results back to their systems.
- **Analytics requirement:** wants **aggregate campaign metrics** (e.g., across 2,000 calls: % success/disposition), not only per-call logs.
- **Security/compliance:** requested security posture details (PCI + broader compliance posture) to support legal review.
- **Deployment preference:** **Cloud-first** right now; asked for on-cloud vs on-prem costs. On-prem understood as **models + APIs** (no full UI/orchestration layer).

**Update (Feb 3):** Salesforce integration dropped. SFTP route now preferred for data sharing.

---

## Next Steps & Timeline

### Immediate (This Week - Feb 3-7)
1. **NDA Signing** ✅ IN PROGRESS
   - NDA with authorized signatory: **Sudarshan Kamath (CEO)**
   - Target: Complete within this week

2. **Requirement Gathering Form**
   - Smallest to share requirement gathering form
   - Defines success metrics and use case parameters

3. **Legal POC Consultation**
   - Amazon legal reviewing PII sharing permissions
   - Required before MSA can begin (MSA takes 3+ weeks)

### Next Week (Feb 10 Week)
4. **Internal Demo**
   - Demo for Amazon internal team only
   - Smallest to assist with agent building + integration
   - No PII data yet (legal pending)

### POC Pricing Discussion
   - Option A: **500-call benchmark** (explicitly requested to ease approvals)
   - Option B: **20–30 call** lower-cost option (otherwise they may run those via Amazon’s internal services)
   - Also requested: **per-call commercial rate** view to speed internal approvals
   - Decision pending based on their budget

### Timeline to Production
| Milestone | Timeline |
|-----------|----------|
| NDA Signed | ~~Feb 3-7~~ **DELAYED — follow up Feb 10** |
| Internal Demo | ~~Feb 10 week~~ **Pushed — pending NDA** |
| Legal/PII Approval | 2-3 weeks |
| POC Start (1K records) | Late Feb |
| Scale (10K records) | March |
| Full Scale (100K+) | Mid to End March |

- **Current:** NDA delayed — awaiting Manali to resend (was promised by Feb 7)
- **Next Gate:** NDA signed + internal demo
- **Legal Approval:** Required for PII sharing
- **Target Production:** Mid-March 2026 (at risk if NDA continues to slip)
- **AWS Help:** Raise with Raman + Vijay to accelerate

---

## Demo Details (Jan 20, 2026)

### What Was Shown
1. **Live Demo:** Calling agent in action
2. **Analytics Dashboard:**
   - Customer sentiment tracking
   - Conversion metrics
   - Call performance analytics
3. **Use Case Fit:** Demonstrated relevance to Amazon Ads needs

### Attendees
- Smallest: [Demo team]
- Amazon: Manali Mundra, Shishir Prashant Borkar

---

## Technical Requirements

### Platform Needs
- Atoms full platform
- Analytics dashboard
- Sentiment analysis
- Call recording and transcription
- Real-time processing

### Integration Requirements
- API access for call data
- CRM/analytics system integration
- Reporting dashboard
- Data export capabilities

---

## Procurement Considerations

### Internal Amazon Process
- **NOT** going through AWS partnership channel
- Internal Amazon procurement
- Legal approval needed before partner engagement
- Different from typical AWS Marketplace deals

### POC Structure Options
| Option | Scope | Budget | Timeline |
|--------|-------|--------|----------|
| **Option A** | 500-call POC | ~$2,500 | 2-3 weeks |
| **Option B** | Smaller pilot | ~$1,500 | 1-2 weeks |

**Decision:** Awaiting their budget confirmation

---

## Strategic Importance

### Why This Matters
1. **Amazon Validation:** Internal Amazon usage = major credibility
2. **Enterprise Scale:** Amazon Ads is massive operation
3. **Reference Customer:** Strongest possible reference (Amazon!)
4. **Revenue Potential:** $50K+ MRR if successful
5. **Expansion:** Other Amazon divisions could follow

### Risks
- Internal Amazon procurement can be slow
- Legal processes complex
- Competing priorities within Amazon
- High bar for enterprise deployment

---

## Action Items

### For Harsh (Urgent - Feb 10 Week)
- [x] NDA initiated ✅ (Feb 3)
- [x] Signatory changed to Akshat Mandloi (akshat@smallest.ai) ✅
- [ ] **🔴 Follow up with Manali on NDA resend** — promised by EOW Feb 7, no confirmation yet
- [ ] **🔴 Raise Amazon Ads with Raman + Vijay (AWS)** — request co-sell / internal help
- [ ] Share requirement gathering form with Manali
- [ ] Confirm NDA signed
- [ ] Prepare for internal demo (delayed — was Feb 10 week target)

### For Internal Demo (Feb 10 Week)
- [ ] Build demo agent (no PII data)
- [ ] Integration support setup
- [ ] Success metrics alignment (ads knowledge, tonality, human-like behavior)

### Post-Legal Approval
- [ ] Set up SFTP data transfer (NOT Salesforce)
- [ ] Plan phased rollout: 1K → 10K → 100K records
- [ ] Commercial discussions with Manali + Luke + Manager

### Dropped/Changed
- ~~Salesforce integration~~ - NOT pursuing (too complex)
- Data sharing via **SFTP route** instead

---

## Key Blockers

### Current (Updated Feb 3)
- **NDA:** ✅ In progress - signatory: Sudarshan Kamath (CEO), target this week
- **PII Legal Approval:** Required before data sharing - Amazon legal reviewing
- **MSA:** Postponed until PII approval (takes 3+ weeks once started)

### Resolved
- ~~Salesforce integration~~ → Using SFTP route instead
- ~~Bulk data export~~ → SFTP following other Amazon team precedents

### Questionnaire Pending (for Yash)
- Manali shared a detailed questionnaire as an Amazon “secure attachment” link: **AI Calling Questions.xlsx**
- Action: Yash to draft responses; Harsh to review + send
- Source: Gmail thread “Re: Opportunity with AMZ Ads team” (received **Jan 23, 2026**)

### Competitive Context (Feb 3-9 Update)
- **Multiple vendor evaluation in progress** — confirmed via Feb 3 competition call with Manali
- Performance as primary evaluation criteria
- Commercial terms and precedents as secondary factors
- AWS Marketplace presence noted as advantage for procurement
- **⚠️ NDA delay is a risk** — competitors may be progressing faster

### 🤝 AWS Help Needed (Feb 9 — ACTION REQUIRED)
- **Ask Raman (AWS)** and **Vijay Rajagopal (AWS)** for help on this deal
- Amazon Ads is an internal Amazon team — AWS relationships could accelerate:
  - NDA / procurement process (internal introductions)
  - Competitive positioning (AWS can validate Smallest as preferred partner)
  - Co-sell support or internal advocacy
- **Context:** Raman is already engaged on pipeline review (asked to add Zepto, Swiggy, Paytm). Vijay helped on SBI Life thread. Both are active AWS contacts.
- **This should be raised in next AWS partner sync / pipeline review**

---

## Email Thread Contacts
- Manali Mundra (mundramn@amazon.com)
- Shishir Prashant Borkar (borkas@amazon.com)
- Harsh Jain (Smallest)

---

## Source References
- **WhatsApp (Feb 3-4):** Harsh ↔ Manali Mundra — NDA follow-up, competition call, signatory discussion, on-prem vs cloud question
- **Granola (Feb 3):** "Chat with Manali Mundra (NDA and POC planning for Amazon Ads)"
- **GTM Update (Feb 3-8 v2):** Amazon Ads listed as advancing pipeline, NDA redirected to Akshat
- **GTM Update (Jan 21):** Listed as validated lead, demo done Jan 20
- **AWS Pipeline CSV:** Qualified status, NDA pending
- **Slack #gtm:** Demo completion confirmation
- **Lead Conversion:** Moving from lead to opportunity status
- **AWS Contacts:** Raman (pipeline review), Vijay Rajagopal (SBI Life thread) — to be engaged for Amazon Ads help

---

## Follow-up Cadence

### This Week (Feb 9-14)
- **🔴 Follow up with Manali on NDA** — resend was promised by EOW Feb 7
- **🔴 Raise with Raman + Vijay (AWS)** — request help on Amazon Ads deal
- Share requirement gathering form
- Prepare internal demo (once NDA unblocked)

### Once NDA Signed
- Internal demo (no PII data)
- Agent building + integration support

### Ongoing
- **Bi-weekly or tri-weekly sync calls** during POC phase

---

**🎯 TARGET: Production by Mid-March 2026 (at risk — NDA slipping)**
**📋 GATE: NDA resend → NDA signed → Internal demo → Legal approval**
**💰 POTENTIAL: $50K+ MRR at 100K+ records scale**
**📈 SCALE PATH: 1K → 10K → 100K records (phased)**
**🤝 AWS ASK: Raise with Raman + Vijay for co-sell / internal advocacy**
