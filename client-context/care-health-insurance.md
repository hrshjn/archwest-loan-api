# Care Health Insurance - Client Context

**Last Updated:** February 4, 2026  
**Stage:** Demo Sent → Awaiting Feedback (Friday Follow-up Scheduled)  
**Handoff From:** Divyanshu Pandey (BDR)

---

## TL;DR - Current Status

| Item | Details |
|------|---------|
| **Primary POC** | D. Balamurugan (Contact Center Lead) - **9953951548** |
| **Core Ask** | Replace IVR with Voice AI for claims queries |
| **Volume** | **70K-1 lakh calls/month** @ **6-7 min AHT** |
| **Languages** | English, Hindi, Tamil |
| **Success Metric** | **50% call reduction** |
| **Pricing Given** | ₹20-25L/month ballpark (Balamurugan: "product first, costing later") |
| **Next Step** | **Friday follow-up (Feb 7)** after demo evaluation |
| **POC Timeline** | Within a week of liking demo |
| **Key Risk** | Past vendors (Sprinklr, Miho) failed live testing in their environment |

---

## Company Overview

**Care Health Insurance Company Limited**  
- Formerly: Religare Health Insurance
- **Type:** Standalone Health Insurance Company
- **Headquarters:** Gurgaon, India
- **Market Position:** One of India's largest standalone health insurers
- **Products:** Health insurance policies, critical illness, personal accident
- **Current CRM:** Freshdesk 360 (2.5 years old, looking to replace)

---

## Key Contacts

| Name | Role | Decision Authority | Contact |
|------|------|-------------------|---------|
| **D. Balamurugan** | Contact Center Lead | Product evaluation & recommendation | **9953951548** (WhatsApp) |
| **KPS Oberoi** | Head of Claims | **FINAL DECISION MAKER** | Via Divyanshu |
| **Nathan Singla** | Heads Dialers & Operations | Key stakeholder | - |
| **Abhishek Sinha** | Head of Customer Service | Sign-off on CS side | - |
| **Suresh Kolla** | IT Head / CTO | **Final sign-off on COSTING** | [LinkedIn](https://www.linkedin.com/in/suresh-kolla-14248015/) |

**Decision Flow:**  
Balamurugan (Product Review) → Abhishek Sinha (CS Sign-off) → KPS Oberoi (Final Decision) + Suresh Kolla (Costing Approval)

---

## Use Case Details

### Primary Objective
Replace current IVR system with human-like Voice AI that can:
1. Understand customer queries with empathy
2. Provide accurate, real-time answers from CRM/policy data
3. Analyze call patterns to understand why customers are calling
4. Hand off to human agents when query cannot be resolved

### Current State
- **Call Volume:** 70K-1 lakh calls/month
- **Claims calls:** 70% of total volume
- **Average Handle Time:** 6-7 minutes
- **Call Center Size:** 110 agents
- **Current System:** Traditional IVR with button-press routing
- **Current CRM:** Freshdesk 360
- **Pain Point:** Cannot identify actual customer concerns; only 2% of calls audited

### Top Queries (Claims - 70% of calls)
1. **"Why was my claim rejected?"** - Need AI to pull rejection reason from CRM and explain
2. **"Why was the amount deducted?"** - Need AI to explain deductions clearly
3. **"Why is my claim not intimated/generated?"** - Status queries

### What Balamurugan Wants (from Feb 3 Discovery)

> "We want the same only that some human touch comes on the IVR and it's just specific and understand the empathy, sympathy also and it catches the actual concern of the customer and directly solve it humanly and after that if the query is not resolved by the AI then that query need to be sent to the agent."

> "Our major agenda is that the customer is not come on the call center. How we can reduce our call callers and we handle within the IVR only."

### Success Metrics
- **Primary:** 50% call reduction ("If we can reduce 50% calls, that is our achievement")
- **Secondary:** Agent Reduction - 30-40% target (33-44 agents freed up)
- **Tertiary:** Understand call patterns (what types of queries are coming)
- Customer satisfaction after AI interaction

---

## Language Requirements

| Language | Priority |
|----------|----------|
| English | Primary |
| Hindi | Primary |
| Tamil | Primary |

---

## Technical Requirements

### Must-Have
- **CRM Integration:** Real-time API calls to fetch policy data, claim status, rejection reasons
- **Knowledge Base:** Ability to ingest policy documents, T&Cs, FAQs
- **Call Analytics:** Post-call summary, reason categorization, sentiment analysis
- **Human Handoff:** Seamless transfer to live agent when needed
- **Low Latency:** Fast responses (past vendors failed on this)
- **High Accuracy:** No hallucination (past vendors failed on this)

### Balamurugan's Technical Question (Feb 3)
> "We're giving the terms and conditions and our policy documents in your AI and we are asking the questions so the AI can read the questions and give the answer to the customer or us."

**Divyanshu's Response (confirmed capability):**
- Knowledge base upload (PDF, Word) for policy documents
- API integration with CRM for real-time data
- AI can answer questions based on uploaded docs + live CRM data

### Their Unified Platform Wishlist (Deprioritized Due to Budget)
They originally wanted all-in-one:
- CRM replacement (from Freshdesk)
- Email auto-response
- IVR bot
- Automatic robotic calls
- Web and WhatsApp bot
- Agent co-pilot
- Ticket summarization

**Budget killed unified approach** → Now open to best-of-breed for Voice AI

---

## BANT Assessment

| Factor | Status |
|--------|--------|
| **Budget** | Not his decision; Suresh Kolla (CTO) has final sign-off. Sprinklr/Miho failed on costing. |
| **Authority** | Balamurugan (product review) → Abhishek Sinha → KPS Oberoi (final) + Suresh Kolla (costing) |
| **Need** | STRONG - Competitors adopting AI; want to reduce call center load; 1-2 years searching |
| **Timeline** | Urgent - within a week of liking demo, POC discussion. Go-live within a quarter. |

---

## Competitive Intelligence

### Previous Vendor Experience
- Was in "final stage" with another vendor before stopping due to cost
- Multiple vendors evaluated; all failed on demos or costing

### Past Vendors (Named)
| Vendor | What Happened |
|--------|---------------|
| **Sprinklr** | POC done, got stuck on costing |
| **Miho** | POC done, got stuck on costing |
| Others | Demo looked good, **live testing in their environment failed** |

### Why Past Vendors Failed (Critical Intel)

**From Feb 3 Discovery:**
> "Everyone is giving the commitment that 100% accuracy is there and the system can quickly identify. The AI can read the details, we can ask the questions. So at the time of the live demo they failed."

**From Feb 4 Call:**
> "When we are taking a demo then it is good. But when we are taking live testing, at that time they are giving false commitments."

**Specific failures:**
1. AI could not read data/PDFs accurately
2. Latency issues with AI voice
3. Accuracy not matching promises
4. System couldn't identify/understand queries properly
5. Demo ≠ Live performance

> "We want live demo testing only in our environment, then we can think about it."

### What We Must Prove
1. **Accuracy in live testing** - Cannot afford to fail like others
2. **Ability to read and answer from documents** - Policy T&Cs, claim data
3. **Human-like conversation** - Empathy, natural flow
4. **Speed** - No lag or breaking
5. **Full-stack advantage** - Explain why we don't fail like stitched-together solutions

---

## Engagement Timeline

| Date | Event |
|------|-------|
| December 2025 | Divyanshu spoke with Dr. K.P.S. Oberoi (Head of Claims) |
| December 2025 | Dr. K.P.S. connected Divyanshu to Mr. Singla, Balamurugan, and Mr. Sinha |
| Jan/Feb 2026 | Initial conversations with Abhishek Sinha |
| **Feb 3, 2026** | Discovery call - Divyanshu & Balamurugan |
| **Feb 4, 2026** | Demo call - Harsh & Balamurugan ✓ |
| **Feb 4, 2026** | Demo recordings + demo number sent |
| **Feb 7, 2026** | **FRIDAY FOLLOW-UP** - Get feedback on demo |
| Week of Feb 10 | POC decision (if demo liked) |

---

## Feb 3 Discovery Call (Divyanshu + Balamurugan)

### Key Quotes

**On urgency:**
> "We are seriously looking for the new technology also because our competitors as well are going in the new technology."

**On goal:**
> "Our major agenda is that the customer is not come on the call center. How we can reduce our call callers."

**On previous vendors:**
> "Everyone is giving the commitment that 100% accuracy is there... at the time of the live demo they failed."

**On decision timeline:**
> "This is our pipeline only that we are thinking about that within a quarter only if it is everything goes perfectly then we are thinking about to go live."

**On rejection cases needing humans:**
> "The rejection cases are the sympathy cases. Why you are reject my case? Because his family member in hospital is already pissed off with everything. So at the time the human can only touch."

---

## Feb 4 Demo Call (Harsh + Balamurugan)

### New Information Learned

**Volume Confirmed:**
- 70K-1 lakh calls/month (not annual)
- 6-7 min average handle time

**Decision Chain Clarified:**
- KPS Oberoi = Final decision maker (Head of Claims)
- Nathan Singla = Heads dialers & ops
- Abhishek Sinha = Head of Customer Service, sign-off on CS side
- Suresh Kolla = CTO, final sign-off on **costing only**
- Balamurugan = Product evaluation & recommendation (not budget authority)

**Current CRM:**
- Freshdesk 360 (2.5 years old, looking to replace)
- Also exploring Salesforce

**Why Unified Platform Failed:**
- Budget and costing issues
- Now open to individual best-of-breed solutions

**Critical Pain Point (98% Audit Gap):**
> "Out of 100%, only 2% sample is audited by the audit team. 98% is junk - random sample is done. We want to know which type of customers are coming and how we can give resolution over AI."

They literally don't know what customers are calling about. Huge opportunity for call analytics.

### Key Quotes from Feb 4

**On urgency:**
> "We are looking for AI from the last one to two years. Our stakeholders and competitors are using same functionality. We need to show management how to reduce calls."

**On timeline:**
> "We are not taking lots of time. If the product is good, we immediately take action on POC."

**On costing:**
> "Doesn't matter. First we think about product, then costing. We know how to manage costing. I am not the concerned person for deciding costing - I give product review. Final decision is taken by CTO only."

**On success:**
> "If we can reduce 50% calls, that is our achievement for AI voice."

**On rejection cases:**
> "We want sympathy and empathy and human touch. The rejection cases are sympathy cases - 'why you reject my case?' - their family member is in hospital, already pissed off. The human can only touch those. But other queries can be handled by AI."

### What Harsh Shared
- Pricing ballpark: ₹20-25L/month for 1 lakh calls at 6-7 min AHT
- Balamurugan's response: "Doesn't matter - product first, costing later" (not his decision)
- Full-stack positioning: Why we don't fail like stitched-together solutions
- References: Star Health (deployment underway), PayTM (40+ use cases)
- Offered to connect with Salesforce implementation partner

### Agreed Next Steps
1. Share demo recordings via email
2. Share demo number for Hindi AI interaction
3. Connect on WhatsApp (9953951548)
4. Friday follow-up call for feedback

---

## Prep for Demo (Historical - Feb 4)

### What Balamurugan Wanted to See
> "If you are already live with the health insurance then you have the use cases of the health insurance also. And I can also share the use cases. Both use cases can be demonstrated."

### Demo Must-Show Items
- [x] Claims rejection query handling
- [x] Amount deduction explanation
- [x] Document/knowledge base Q&A
- [x] Natural, empathetic conversation
- [x] Low latency responses
- [x] Hindi language capability
- [x] Human handoff flow concept
- [x] Call analytics/summary output

---

## Next Steps

### Immediate (Done/In Progress)
- [x] Discovery call with Balamurugan (Feb 3)
- [x] Demo call with Balamurugan (Feb 4)
- [x] Share demo recordings via email
- [x] Share demo number for Hindi AI interaction
- [x] Connect on WhatsApp (9953951548)
- [ ] **Friday follow-up call (Feb 7)** to get feedback

### If Demo Liked
- [ ] POC scoping discussion
- [ ] Get Abhishek Sinha involved
- [ ] Technical discussion with Suresh Kolla's team
- [ ] Formal proposal with pricing

### Open Questions for Friday
1. Did you get a chance to try the demo number?
2. What did you think of the voice quality and latency?
3. Any concerns or questions from your team?
4. Should we schedule a POC scoping call next week?
5. Should we loop in Abhishek sir or Suresh sir?

---

## Relevant Smallest Capabilities to Highlight

- **Full Stack:** No third-party stitching = no latency/accuracy issues (key differentiator)
- **Knowledge Base:** Upload policy docs, T&Cs, FAQs - AI answers from them
- **CRM Integration:** Real-time API to fetch claim status, rejection reasons
- **Low Latency:** ~100ms response time
- **Multi-language:** Hindi, English, Tamil supported
- **Human Handoff:** Seamless transfer with context
- **Call Analytics:** Post-call summary, intent categorization, sentiment
- **BFSI Experience:** PayTM (40+ use cases), IDFC, Tata Capital, NBFCs

### Health Insurance References (from calls)
- **Star Health:** Deployment underway (both outbound and inbound use cases)
- **Niva Bupa:** In advanced conversations
- **ICICI Prudential:** In advanced conversations
- **Piramal:** In conversations
- **Another listed insurtech:** Outbound use case deployment

---

## Risk Assessment

### High Risk Areas
1. **Live Testing:** They want to test in their environment - demo alone won't win
2. **Cost Sensitivity:** Sprinklr/Miho failed on costing - need competitive pricing
3. **PDF Accuracy:** Past vendors failed on this - must be flawless
4. **Timeline Pressure:** Want to go live within a quarter

### Mitigation
- Offer sandbox/POC in their environment early
- Have flexible pricing ready for POC
- Test PDF ingestion thoroughly before any live demo
- Show fast implementation capability (templates exist)

---

## Notes

- Balamurugan is the gatekeeper - product evaluation and recommendation
- KPS Oberoi (Claims Head) is the final decision maker - internal champion
- Suresh Kolla (CTO) is the costing gatekeeper
- Cost is a sensitive topic - Sprinklr/Miho were dropped for pricing
- They've been looking for AI for 1-2 years - competitors already using it
- Unified platform approach failed due to budget - now open to best-of-breed
- 98% of calls not audited - huge opportunity for call analytics value-add
- Rejection cases need human touch - AI for everything else
- 30% of calls are policy/renewal related (not just claims) - potential expansion
- They have digital channels but customers still call - want to understand why
- Balamurugan has been at Care for 7 years - deep institutional knowledge

---

**🎯 TARGET:** Friday positive feedback → POC next week → Q1 FY27 go-live  
**🔑 KEY PERSON:** D. Balamurugan (9953951548) - product recommendation  
**👑 DECISION MAKER:** KPS Oberoi (Head of Claims)  
**💰 COSTING:** Suresh Kolla (CTO) - final sign-off  
**📊 SUCCESS:** 50% call reduction  
**⚠️ CRITICAL:** Live testing in their environment - demo alone won't win  
**📞 NEXT:** Friday follow-up call (Feb 7)
