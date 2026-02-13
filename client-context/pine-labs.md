# Pine Labs - Client Context

**Last Updated:** 2026-02-10
**Deal Owner:** Harsh Jain
**Stage:** **POC SETUP - VRA IN PROGRESS (infosec ongoing), SLM Training Scoping, Delhi Leadership Connect Feb 15-22**
**Priority:** 🔥 **HIGH - 168K mins/month potential, sample data expected tomorrow, Delhi leadership connect next week**

---

## TL;DR (Updated Feb 10 - SLM Scoping Call, Delhi Connect Planned)

| Item | Details |
|------|---------|
| **POC Contact** | Navjit Debnath - +91 60094 98752 - navjit.debnath@pinelabs.com |
| **PMO Contact** | Nidhi Maheshwari - helping with onboarding & internal processes |
| **Lead Source** | AWS intro via Karthik Jayagovind (Account Manager FSI-Fintech) |
| **Use Case** | Inbound voice bot for merchant support (B2B) + full support automation across voice, email, app, WhatsApp, device |
| **Volume** | **30K calls/month × 7min × 80% split = ~168K mins/month** |
| **Issue Categories** | **82 categories** of support issues across entire call center |
| **Languages** | Hindi (primary), English; Punjabi may be needed |
| **Competitors** | Azure/Microsoft partner (orchestration deployed in Pine Labs VPC), GCP (POC), **Nugget/Zomato** (uses 11 Labs + Sarvam) |
| **Key Pain Points** | 1) POS ID transcription (alphanumeric) 2) Noisy retail 3) Interruptions 4) Literary Hindi |
| **Our Edge** | Demo impressed them on noise + transcription; PCI DSS + VPC ready |
| **VRA Status** | Docs submitted (VRA, NDA, PoC pre-screening done); **infosec review still in progress** |
| **Deployment Pref** | **On-prem strongly preferred** — Navjit confirmed; regulated entity, data governance key concern |
| **POC Plan** | Cloud first (self-serve agent) → 30-min free pilot → expand to 2-3hr windows → lock commercial before scaling |
| **SLM Training** | ~2 years of historical call data (recordings, transcripts, quality audits, annotations) + SOPs + live data sources; sample data expected by Feb 11 |
| **Resource Onboarding** | Joiner intake form needed for 3-4 Smallest devs (credentials for API access) |
| **Delhi Connect** | Feb 15-22 — leadership handshake planned; Sahil/Nidhi coordinating; WhatsApp group being created |
| **Next Steps** | Sample data from Navjit (Feb 11) → Internal SLM plan → Structured proposal next week in Delhi |

---

## Company Overview

- **Company:** Pine Labs Private Limited
- **Website:** https://www.pinelabs.com/
- **Industry:** Fintech / Payments
- **Founded:** 1998
- **HQ:** Noida, India
- **Merchant Base:** 8 lakh (800,000) merchants; 690,000+ across India & Southeast Asia
- **Revenue:** ₹22,743 million (FY 2025)
- **Country:** India
- **Deal Type:** Direct (AWS-referred)

**Products & Services:**
- Payment acceptance solutions (POS terminals)
- Merchant commerce platforms
- ePOS, Pine Labs POS, Plutus, Pine Labs Plutus Smart (cloud-based)
- UPI, BharatQR, EMI, gift cards, loyalty points, digital wallets, contactless payments

**Business Units:**
| Unit | Location | Details |
|------|----------|---------|
| **Payments Team** | Noida | Current focus for voice AI |
| **Credit Card Processing Platform** | Pune | Serves 30-40 bank customers globally |
| **Gift Card Business** | - | **95% India market share** |

---

## What They're Evaluating

### Use Case: Inbound Merchant Support Voice Bot

**Primary Queries:**
- Transaction reports (daily/weekly)
- Transaction failure troubleshooting
- Network connectivity issues
- POS device issues

**Technical Challenge:**
- **POS ID authentication in noisy retail environments**
- Alphanumeric IDs with varying formats (8-12 digits)
- Different POS machine brands with inconsistent formats
- Background noise from retail shops complicates voice recognition

**Key Requirements:**
- Hindi language support (most prevalent)
- VPC deployment (prefer on-prem)
- PCI DSS compliance (critical)
- Stringent InfoSec requirements

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Volume** | ~30,000 calls/month |
| **Avg Duration** | 7 minutes |
| **Merchant Base** | 8 lakh merchants |
| **Deployment** | VPC (on-prem preferred) |
| **Evaluation Timeline** | 6 months (already underway) |

---

## Competitive Landscape

| Vendor | Status | Notes |
|--------|--------|-------|
| **OpenAI/Azure Partner** (Rajasthan-based) | ⚠️ In Production | Live traffic, but struggling - "not been that great" |
| **GCP Solution** | POC Phase | Active evaluation |
| **Nugget (by Zomato)** | Discussion Phase | **AWS partner**, uses 11 Labs + Sarvam |

**Why Azure Failed:**
- Noise detection issues in production
- Couldn't handle POS ID authentication in noisy retail environments
- Hindi output was "too literary" - not natural conversational Hindi
- This is our opportunity

**Nugget Intel (from Karthik debrief):**
- Nugget is the other AWS partner in the evaluation
- Currently using **11 Labs** (TTS) and **Sarvam** (likely STT/LLM)
- Karthik has a Nugget meeting scheduled next week
- **Opportunity:** Replace 11 Labs with Smallest (better, faster, cheaper)
- Potential to merge partnership threads after Nugget meeting

---

## Smallest's Competitive Advantages

| Their Challenge | Our Solution |
|-----------------|--------------|
| Hindi accuracy in noisy environments | Enterprise-grade 90%+ accuracy |
| PCI DSS compliance requirement | Already PCI DSS compliant |
| VPC/on-prem deployment preference | Full on-prem deployment capability |
| POS device memory constraints (5MB) | Custom SLM potential for edge deployment |
| Complex alphanumeric ID capture | Specialized ASR tuning possible |

**Strategic Opportunity:**
- Current POS devices have 5MB memory constraints
- Higher-spec tablet-based POS devices emerging
- SLM conversation with leadership could open bigger opportunity

---

## Key Contacts

### Pine Labs

| Name | Role | Email | Phone | Notes |
|------|------|-------|-------|-------|
| **Navjit Debnath** | Product Manager (AI Initiatives & Support) | navjit.debnath@pinelabs.com | +91 60094 98752 | Primary POC, driving evaluation |
| **Nidhi Maheshwari** | PMO | nidhi.maheshwari@pinelabs.com | - | Onboarding & internal processes; joined intro call |
| Sahil Gupta | - | sahil.gupta@pinelabs.com | - | Keep in loop for pricing discussions |
| Priya Ajit | Senior Product Analyst | priya.ajit@pinelabs.com | - | Added to thread |
| Chetan Kumar | Engineering Manager | chetan.v@pinelabs.com | - | NDA/VRA process owner |
| Ketan Kumar | Finance Operations Manager | ketan.kumar@pinelabs.com | - | NDA/VRA process owner |
| Sanjeev Kumar | - | sanjeev.kumar@pinelabs.com | - | CC'd on threads |
| Bankatesh Choudhary | Business Development Manager | Bankatesh.Choudhary@pinelabs.com | - | CC'd on threads |
| **CTO** | CTO | - | - | Escalation meeting Mon/Tue in Noida |

### AWS (Referral Source)

| Name | Role | Email | Phone | Notes |
|------|------|-------|-------|-------|
| **Karthik Jayagovind** | Account Manager - FSI-Fintech | karthkaj@amazon.com | +91 9902334936 | Pine Labs AM, made intro |
| Ajeet Dubey | - | ajeetkrd@amazon.com | - | CC'd on threads |

---

## Engagement Timeline

| Date | Event |
|------|-------|
| Feb 3, 2026 | Karthik (AWS) sends intro email to Pine Labs team |
| Feb 3, 2026 | Navjit responds, adds Chetan & Ketan for NDA/VRA process |
| Feb 4, 2026 | Karthik adds Harsh to thread |
| Feb 5, 2026 | Intel call with Karthik - detailed briefing on opportunity |
| **Feb 6, 2026** | **Intro call with Pine Labs - COMPLETED ✓** |
| **Feb 6, 2026** | **Debrief with Karthik - CTO escalation planned** |
| Feb 6-7, 2026 | NDA signing (digital) — **NDA signed from our end & shared** |
| **Feb 8, 2026** | **WhatsApp exchange with Navjeet** — asked about SLM training with historical call data; confirmed. NDA signed, VRA checklist expected early week. Agreed to set up Monday discussion |
| **Feb 9, 2026** | **VRA completion & POC scoping call with Navjeet** — VRA done ✅, infosec cleared for POC, POC plan agreed (cloud first → 30-min pilot free → scale), full data dump training requested, tech call scheduled Tue |
| **Feb 10, 2026** | **SLM training scoping call** — Harsh, Maharshi (Eng), Pritish (SLM lead) + Navjit, Nidhi. Discussed: 82 issue categories, 2yr historical data, on-prem preference, data governance. Navjit to share sample data by Feb 11. Joiner intake form needed for dev credentials. Delhi leadership connect planned Feb 15-22 |
| **Feb 11, 2026** | **Expected: Sample data from Navjit** + training frequency & volume details |
| **Feb 15-22, 2026** | **Delhi visit (India AI Summit)** — Leadership connect with Pine Labs; Sahil coordinating meetings with PL leadership; Smallest Head of GTM attending; CTO TBD |

---

## Feb 5 Intel Call with Karthik (AWS AM)

### Key Intel Shared

**Opportunity Size:**
- 8 lakh merchants, ~30K calls/month
- 7 minute average call duration
- B2B merchant support use case (not consumer)

**Evaluation Status:**
- 6-month evaluation already underway
- Multiple vendors being evaluated simultaneously
- Azure partner already in production but struggling

**Technical Challenges:**
- POS ID authentication is the hardest problem
- Noisy retail environments (shops, markets)
- Different POS brands have inconsistent ID formats
- Azure POC failed specifically on noise handling

**Compliance & Infrastructure:**
- PCI DSS is non-negotiable
- Prefer VPC deployment (on-prem)
- Very stringent InfoSec requirements

**Strategic Insight:**
- SLM on POS devices is a future opportunity
- Current devices limited to 5MB memory
- New tablet-based POS devices could run edge models
- Position this in conversation with leadership

### Karthik's Recommendations

1. Lead with Hindi/English accuracy in noisy environments
2. Highlight PCI DSS compliance upfront
3. Demo VPC deployment capability
4. Introduce SLM story for strategic positioning
5. Prepare custom demo mimicking Pine Labs scenario

---

## Feb 6 Intro Call with Pine Labs - COMPLETED ✓

### Attendees
- **Pine Labs:** Navjit Debnath (Product Manager), Nidhi Maheshwari (PMO)
- **Smallest:** Harsh, Yash Ghelani, Pratirath Gupta
- **AWS:** Karthik Jayagovind

### Pain Points Confirmed (Navjit's exact words)

1. **POS ID Transcription** - "#1 biggest challenge"
   > "Transcription of the POS ID or hardware ID which are usually alpha 10-12 digit alphanumeric... in a noisy environment"

2. **Noisy Retail Environments**
   > "Shop floors are pretty noisy and they will be calling from the market"

3. **Interruption Handling** - Bot needs to handle mid-sentence interrupts

4. **Literary Hindi**
   > "Without prompting initially the bot does speak in very literary Hindi"

5. **Production Pilots Struggling**
   > "We have taken in production pilots but again it's not been that great. That's why we are in this conversation with you."

### Demo Feedback

Pratirath demoed the Pine Labs agent with crowd noise in background. Navjit's reaction:
> "Okay, so even while it was talking, it was processing this. Okay, **pretty good**."

Demo addressed: noise handling, alphanumeric POS ID capture, real-time transcription, interruption handling.

### Commercial Details Confirmed

| Metric | Value |
|--------|-------|
| Calls/month | 30,000 |
| Avg duration | 7 minutes |
| **Volume split** | **80/20 - top vendor gets 80%** |
| **Your target** | **~168K minutes/month** |
| Pricing needed | Per-minute for cloud AND VPC deployment |

### Process Agreed

1. **NDA** - Sign digitally today, share PDF
2. **VRA** - Two options: full 20-doc list OR yes/no checklist (faster for POC)
3. **POC/UAT** - Can proceed with checklist while full VRA runs in parallel for production
4. **APIs** - Access after NDA signed
5. **Timeline** - APIs integrated by end of next week, workshop in Delhi Feb 15-21

### Key Quotes from Navjit

On evaluation approach:
> "What we would need is that you take the time, take however many weeks you need, and build a live use case using our live APIs in the UAT environment."

On scale-up:
> "Beyond the initial scope, how do we scale-up to our entire universe of service problems?"
(Yash confirmed platform is self-serve ready)

On pricing:
> "Before we invest our engineering resources, bandwidth and anything to integrate, we'd like to have a sense of the pricing. If it is way off, then there's no point pursuing this."

### Languages

- Hindi (primary)
- English
- **Punjabi** - Navjit noted this might be missing from our list

---

## Feb 6 Debrief with Karthik (AWS AM) - Post Call

### CTO Escalation Meeting

- **Scheduled:** Monday/Tuesday in Noida with Pine Labs CTO
- **Purpose:** SLM on POS devices, strategic partnership discussion
- **Prep needed:** 
  - CTO alignment call before escalation (5-10 min huddle with Harsh, CTO, and Karthik)
  - Send Pine Labs blurb and case studies over weekend

### SLM on POS Devices - Strategic Opportunity

| Insight | Details |
|---------|---------|
| Most POS devices | Insufficient specs for hosting LLM |
| High-end merchants | (e.g., Starbucks) could support LLM on advanced POS |
| Pine Labs has | **Hardware lab** for joint investment/concept development |
| Their plan | Testing Llama on GPUs for internal use |
| Our advantage | Smaller model size vs open source alternatives |

**Positioning:** Internal company knowledge base to power models → lower latency vs large language models (10B+ params)

### Nugget Partnership Thread

- Nugget currently working with **11 Labs** (TTS) and **Sarvam** (STT/LLM)
- Karthik has Nugget meeting scheduled next week
- **Opportunity:** Replace 11 Labs with Smallest (better, faster, cheaper)
- **Strategy:** Loop in after Nugget meeting to share contacts and explore merged approach

---

## Feb 8 WhatsApp Exchange with Navjeet

**Key exchange:**
- Navjeet reached out asking if a **custom SLM instance can be trained with their historical call data** to cover their entire support universe at a high level
- **Confirmed yes** — this is doable
- Navjeet proposed discussing Monday, contingent on NDA and checklist being done
- **NDA status:** Signed from Smallest's end and shared
- **VRA checklist:** Expected done early in the week
- Navjeet asked Harsh/Karthik to set up the discussion

---

## Feb 9 Call with Navjeet — VRA Completion & POC Scoping for Cloud Deployment

### VRA & Infosec Status
- **VRA completed on Smallest's end** — all responses and documents ready to share today
- **Infosec clearance for POC: APPROVED** ✅
- POC scope clarification needed on scale/volume and internal vs external testing approach

### POC Implementation Plan Agreed
1. **UAT Phase:** Internal testing only
2. **Production Pilot:**
   - Start with **30-minute window** initially (**no charge**, following the model other vendors set)
   - If quality approved, expand to **2-3 hour windows** with full volumes
   - **Commercial terms locked before production scaling**
3. **Timeline:** Aiming to **close within current month**

### Technical/Deployment Discussion
- **Pine Labs' preference:** On-premises within their VPC (best option)
- **Current state:** Microsoft has deployed orchestration in their VPC already
- **Smallest's approach for POC:**
  - **Cloud version first** — self-serve agent spinning capability
  - VPC deployment limited to Smallest's models (TTS/STT)
  - API access for all services
  - Volume likely insufficient for dedicated model deployment at this stage

### Data Training — Key Request
- Navjeet requested: **Full data dump training** instead of specific SOPs
  - Wants the SLM trained on historical call data to cover entire support universe
- **Smallest confirmed capability**
- **Head of engineering to be involved** in scoping this

### Next Steps from This Call
1. **Harsh:** Schedule tech call with engineering team for **Tuesday 11am or 12pm**
2. **Harsh:** Add Navjeet's contact who will forward to appropriate stakeholders
3. **Team:** Review shared technical documents before Tuesday call
4. **Both parties:** Continue rapid implementation pace

---

## Feb 10 Call — SLM Training Scoping & Delhi Planning

### Attendees
- **Smallest:** Harsh Jain, Maharshi Chattopadhyay (Engineering), Pritish Mishra (SLM Lead)
- **Pine Labs:** Navjit Debnath (Product Manager), Nidhi Maheshwari (PMO — joined mid-call)

### SLM Training Scope — Full Support Universe

**Navjit outlined the vision:**
- Automating as much support volume as possible using an AI agent
- **Primary channels today:** Voice and Email
- **Expanding to:** Pine Labs One app (merchant app), WhatsApp, and device channels
- **82 categories of issues** that customers can raise at the call center
- Goal: high-level bot response for all 82 categories using historical data fused with SOPs and live data sources

**Available training data:**
- All historical **call recordings**
- Full **transcripts** of calls
- **Quality audits and annotations**
- SOPs and live data sources to fuse with
- **~2 years worth of call data** expected

**Data sample:** Navjit will share after VRA check is complete — targeting **Feb 11 (tomorrow)**

### Data Governance & Deployment

- Pine Labs is a **regulated entity** — data governance is a key concern
- **On-prem deployment strongly preferred** — Navjit confirmed: "We definitely like it for on prem"
- Maharshi flagged trade-offs of on-prem:
  - Onboarding takes longer — PL engineering team needs to help set up data access
  - Constant data updation process needs to be figured out
- Navjit acknowledged the trade-offs but still prefers on-prem

### VRA / Infosec Status Update
- VRA docs submitted (VRA responses, NDA, PoC pre-screening)
- **Infosec review still in progress** — sample data will be shared once VRA check clears
- Nidhi flagged: **Joiner intake form still pending** — needed to create credentials for Smallest developers
  - Required fields: first name, last name, mobile number, gender, personal email ID
  - **3-4 resources max** (not 10)
  - This gets API access and dev environment credentials

### Delhi Leadership Connect (Feb 15-22)

- Smallest team in Delhi for **India AI Summit** (Feb 15-22)
- **Leadership handshake planned:**
  - Smallest: Head of GTM confirmed; CTO TBD (personal emergency)
  - Pine Labs: Sahil can coordinate meetings with leadership team
  - Nidhi can help coordinate in-person meetings at NCR office
- **Pine Labs CTO meeting:** Need advance notice — Nidhi will check with CTO's EA for calendar availability
- **WhatsApp group being created** for coordination between both teams + Nidhi
- Navjit won't be at the summit but will be in Delhi through February

### What Smallest Needs from Pine Labs
1. **Sample data** (recordings, transcripts, quality audits) — after VRA clears, targeting Feb 11
2. **Training frequency requirements** — how often should the model be retrained
3. **Data volume details** — exact size/scope of 2-year dataset
4. Answers on the above from Pine Labs operations team

### What Pine Labs Needs from Smallest
1. **SLM training plan** — step-by-step execution plan based on sample data received
2. **Timeline estimates** — how long each phase takes
3. **Data governance framework** — how data will be handled, stored, accessed
4. **Meeting minutes** from this call (Harsh to send)
5. **Joiner intake form** filled for 3-4 devs (Harsh to complete)

---

## Next Steps

| # | Action | Owner | Due | Status |
|---|--------|-------|-----|--------|
| 1 | Sign NDA digitally | Harsh + Legal | Feb 6-7 | **DONE ✅** |
| 2 | Complete VRA yes/no checklist (for POC) | CISO | Mid next week | **DONE ✅** (submitted; infosec review ongoing) |
| 3 | Send per-minute pricing (cloud + VPC) | Harsh | Early next week | PENDING |
| 4 | Joint TCO with AWS | Harsh + Karthik | Early next week | PENDING |
| 5 | Send demo number + platform access | Yash/Pratirath | Tomorrow | PENDING |
| 6 | Send Pine Labs blurb + case studies (for CTO meeting) | Harsh | Weekend | PENDING |
| 7 | CTO alignment call (5-10 min huddle) | Harsh + CTO + Karthik | Before Mon | PENDING |
| 8 | Cloud POC setup (self-serve agent) | Yash/Pratirath | This week | PENDING |
| 9 | Loop in after Karthik's Nugget meeting | Karthik → Harsh | This week | PENDING |
| **10** | **Send meeting minutes from Feb 10 call** | **Harsh** | **Feb 10 (today)** | **NEW** |
| **11** | **Fill joiner intake form (3-4 devs)** | **Harsh** | **Feb 10 (today)** | **NEW** — fields: first name, last name, mobile, gender, personal email |
| **12** | **Create WhatsApp group** for Delhi coordination | **Harsh + Nidhi** | **Feb 10 (today)** | **NEW** |
| **13** | **Share sample data** (recordings, transcripts, audits) | **Navjit** | **Feb 11** | **NEW** — after VRA check clears |
| **14** | **Share training frequency + data volume details** | **Navjit (from ops team)** | **This week** | **NEW** |
| **15** | **Internal SLM training discussion** (Pritish + Maharshi) | **Smallest Eng** | **After sample data** | **NEW** |
| **16** | **Prepare SLM training plan** (step-by-step, timeline, data governance) | **Smallest** | **Before Delhi visit** | **NEW** — present structured proposal in person |
| **17** | **Schedule Pine Labs CTO meeting** via EA | **Nidhi** | **Before Feb 15** | **NEW** — needs advance notice |
| **18** | **Delhi leadership connect** | **Harsh + Head of GTM** | **Feb 15-22** | **NEW** — Sahil/Nidhi coordinating; PL leadership + CTO if available |

---

## Demo Strategy

**For Tuesday Call:**
1. Standard voice bot demo (collections/support)
2. Highlight Hindi accuracy
3. Show noise handling capability
4. Introduce SLM capabilities for strategic positioning

**Custom Demo to Prepare:**
- Mimic Pine Labs merchant support scenario
- POS ID capture in noisy environment
- Transaction status inquiry
- Hindi language interaction

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Incumbent Azure partner has live traffic | Their POC "not been that great" - our demo impressed |
| 6-month evaluation cycle (bureaucracy) | AWS relationship + CTO escalation accelerates |
| Multiple competitors (3 total) | Technical differentiation on noise; Nugget uses 11 Labs (we can replace) |
| Stringent InfoSec requirements | Already PCI DSS compliant, VPC ready; do yes/no checklist for fast POC start |
| VRA can drag with architecture reviews | Run checklist for POC, full VRA in parallel for production |
| Pricing sensitivity | Joint TCO with AWS adds credibility |
| Punjabi language gap | Position as design partnership - can enable if needed |

---

## Strategic Value

**Why This Deal Matters:**

1. **Reference Customer** - Pine Labs is a marquee fintech brand (8L merchants)
2. **B2B Use Case** - Diversifies from B2C collections/support
3. **SLM Opportunity** - Edge deployment on POS devices is future revenue; they have hardware lab for joint R&D
4. **AWS Relationship** - Strengthens partnership; potential to also win Nugget thread
5. **Volume** - 168K mins/month at 80% split = significant MRR
6. **Platform Validation** - Self-serve readiness resonated; could become repeatable playbook

**SLM on POS - Long-term Play:**
- Most POS devices: insufficient specs
- High-end merchants (Starbucks-tier): could support LLM on advanced POS
- Pine Labs has hardware lab for joint concept development
- Our advantage: smaller model size vs Llama/open source
- Use case: internal knowledge base → lower latency than 10B+ param models

---

## Source References

- Email thread: "Smallest.AI - In-house built Voice & Reasoning LLMs" (Feb 3-4, 2026)
- Granola transcript: "Chat with Karthik (AWS AM) for Pine Labs" (Feb 5, 2026)
- Granola transcript: "Smallest.AI - Voice LLM - Introductory Call" (Feb 6, 2026) - Pine Labs intro call
- Granola transcript: "Pine Labs SLM deployment and partnership exploration with Smallest" (Feb 6, 2026) - Karthik debrief
- WhatsApp chat with Navjeet Devnath (Feb 8, 2026) - SLM training question, NDA/VRA status
- Granola transcript: "Chat with Navjeet (Pine Labs) VRA completion and POC scoping for cloud deployment" (Feb 9, 2026)
- Call transcript: SLM Training Scoping Call (Feb 10, 2026) — Harsh, Maharshi, Pritish + Navjit, Nidhi
- AWS intro by Karthik Jayagovind
