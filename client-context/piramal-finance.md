# [AWS] Piramal Finance - Client Context

**Last Updated:** 2026-02-05 (Post Raj Nair Meeting)
**Deal Owner:** (via AWS partnership + Onnivation)
**Stage:** Opportunity → Discovery/POC Planning
**Priority:** 🔥 **HIGH - Two Parallel Tracks**

---

## Company Overview
- **Company:** Piramal Finance
- **Industry:** Financial Services / NBFC
- **Contacts:**
  - **Raj Nair** (raj.nair@piramal.com) - Head of CX ⭐ Executive Sponsor
  - **Vikrant Wakhlu** (vikrant.wakhlu@piramal.com) - Business Excellence (CX Track Owner)
  - **Shashank Agarwal** (shashank.agarwal@piramal.com) - Engineering Manager (TTS Track Owner)
  - **Saiyam Jain** (kartikeytiwari37) - Engineer (TTS Integration)
  - **Markandey** - Workshop attendee (CX/Operations)
  - **Hussain** - Workshop attendee (CX/Operations)
- **Partner Channel:** AWS, Onnivation

---

## AI Workshop Summary (In-Person Meeting)

### Call Volumes & Patterns
- **70-80K inbound calls/month** through single toll-free line
- **15-minute interval forecasting** for capacity planning
- Peak days: **~4K calls/day**
- Peak window: **~460 calls in single 15-minute window**

#### Call Pattern by Month Cycle
| Days | Primary Query Types |
|------|---------------------|
| Days 1-10 | Check presentation, EMI deduction issues |
| Days 11-20 | Foreclosure requests, closures |
| Days 21-30 | Advance payment, blocked accounts |

### Agent Workflow Today
1. **IVR** → limited self-service → FIFO routing → agent desk
2. Customer identification via **registered mobile number** → secondary verification
3. Agent navigates **3-4 backend systems**: SFDC, SMDC, LMS, Penang, documentation, offer engines
4. Call dispositioning across: Query / Request / Complaint
5. Knowledge lookup via **Arya** (KB layer with 200-300ms latency)

### Categories & Complexity
- **~100 categories** with **1800+ subcategories**
- **EMI-related + Foreclosure** = ~60% of total volume
- **Top 10 categories** cover ~80% of volume
- Agents rely on: training, tenure, Arya KB, manual multi-system navigation

### Current Performance Metrics
| Metric | Value |
|--------|-------|
| **Average Handle Time (AHT)** | ~480 seconds (agent connect only) |
| **FCR (First Call Resolution)** | 86% |
| **Hindi** | 55% of calls |
| **English** | 10-15% of calls |
| **Regional (South Indian dominated)** | 30-35% |
| **Workforce** | 100-200 agents |
| **Operating Hours** | 9 AM - 6:30 PM |

---

## Desired Voice Automation Approach

### Philosophy
- **Replicate Grade 1 → Grade 2 agent performance** rather than isolated category-specific bots
- **Incremental rollout:** 1 agent persona → expand across top categories → full coverage

### Success Metrics (Defined by Piramal)
| Metric | Target |
|--------|--------|
| **Calls/month per bot** | 3,000 (vs ~1,800 for humans) |
| **Fallback rate to human** | TBD - need target % |
| **FCR** | TBD - need target % |
| **Emotion tracking** | Entry/exit sentiment |
| **Cross-sell readiness** | Optional |

### Operational Requirements
- **Live call-barge, whisper support, monitoring** - Required
- **24×7 availability** - Expected once scaled

---

## Integration Landscape

| System | Vendor/Type | Notes |
|--------|-------------|-------|
| **Telephony** | Genesys (on-prem) | Primary dialer |
| **Recording + Transcription** | Verint | Current solution |
| **Frontend CRM** | Salesforce (SFDC) | Customer data |
| **Core Systems** | SFDC, LMS, documentation | Multi-system navigation |
| **Knowledge Layer** | Arya | 200-300ms latency KB |
| **Internal GenAI** | Microservices | Prompting, embeddings, orchestration available |
| **Dialer (Outbound)** | Genesys + Exotel | Per engineering team |
| **Transport** | AudioCodes WebSocket | For TTS integration (audio issues under investigation) |
| **Telephony (Testing)** | Exotel | Working correctly with Smallest TTS ✅ |

---

## What They're Evaluating/Buying

### Primary Use Cases (Prioritized)
1. **Inbound Customer Support** - Top 10 categories (80% volume)
2. **EMI & Foreclosure Queries** - 60% of volume
3. **Collections** - Payment reminder calls
4. **Lead Generation** - Outbound voice calls
5. **Follow-ups** - Automated follow-up calls

### Product Interest
- **Full Voice AI Platform** - Replicate best agent performance
- **TTS + STT** - End-to-end solution
- **Atoms SDK** integration potential

---

## Volumes (Updated from Workshop)

| Metric | Value | Notes |
|--------|-------|-------|
| **Inbound Calls/Month** | 70-80K | Workshop confirmed |
| **Peak Calls/Day** | ~4K | High volume days |
| **Peak 15-min Window** | ~460 calls | Capacity planning |
| **Workforce** | 100-200 agents | Current state |
| **Target Bot Capacity** | 3,000 calls/month per bot | 67% higher than human |
| **Initial Budget** | ~$2,000/month | Starting phase |
| **At-Scale Potential** | $4,500/month | 75K calls × 4 min = 300K min |

---

## Technical Requirements

### Deployment & Security
- **Indian data processing** - Critical requirement
- **No third-party data sharing** - Strict compliance
- Data retention policies under discussion
- Infosec requirements (some excessive for scope - pushback planned)

### Technical Challenges Identified
- Repetition issues in voice output
- Random word insertion
- ASR accuracy with dual language (Hindi-English code-switching)

---

## Procurement Preferences
- **AWS Marketplace** - Faster procurement route
- Enterprise security compliance required

---

## Current AI Tools in Use
- Have existing AI tools internally
- Team evaluating multiple vendors

---

## Key Meeting Notes

### "smallest for Piramal Finance | Infosec" Meeting
- Discussed TTS partnership
- Security/compliance requirements reviewed
- Data retention policies
- Deployment models (cloud vs on-prem options)
- POC approach defined

### "Smallest.Ai <> Piramal Finance" Meeting
- Discussed Piramal's current AI tool usage
- Smallest's inbound solution demo
- Technical challenges: ASR accuracy with dual language
- Collections use case prioritized

---

## Current Status (Feb 2026) - TWO PARALLEL TRACKS

### Track 1: TTS (Shashank) - Near Term
| Item | Status |
|------|--------|
| InfoSec docs shared | ✅ Done |
| TTS integration tested | ✅ Working (Exotel) |
| Test calls running | ✅ Outbound use cases |
| InfoSec clearance | 🔄 Waiting 12-13 days |
| AWS Marketplace | 🔄 Ready to send private offer |
| **Target Close** | **Feb-Mar 2026** |
| **MRR** | **$2-5K** |

### Track 2: Full Solution (Raj/Vikrant) - Medium Term
| Item | Status |
|------|--------|
| Use case mapping | ✅ Workshop done (Nov) |
| Pareto analysis | 🔄 Piramal doing (2 weeks) |
| Sample calls shared | ❌ Blocked on InfoSec |
| Workflow workshops | 📅 Scheduled (March) |
| PMO structure | 🔄 Being set up |
| **Target PoC** | **End of Q1 2026** |
| **MRR Potential** | **$25-30K** |

### InfoSec Status (Critical Blocker)
- First call: Jan 5, 2026
- Deep dive: Jan 22, 2026
- **Waiting 12-13 days** for response ⚠️
- Vikrant following up with Harish (Piramal InfoSec)
- Normal process: 3+ rounds of Q&A (100+ questions)
- Cannot share production calls without clearance

### AWS Co-Selling
- 🔄 Active support from Shailesh Shivakumar (SA)
- AWS Marketplace preferred procurement route
- Private offer ready to send once InfoSec clears

---

## Infosec Discussion Points
- Requirements may be excessive for POC scope (pushback planned)
- InfoSec responses sent ✅
- Shashank (Eng Manager) reviewing
- Indian data processing is non-negotiable ✅
- Aggressive collaboration ongoing

---

## Next Steps

### Track 1: TTS Deal (Shashank) - Immediate
- [x] InfoSec docs shared to Shashank ✅
- [x] TTS integration validated (Feb 3) ✅
- [x] Test calls running on outbound ✅
- [ ] **Vikrant:** Follow up on InfoSec with Harish (immediate)
- [ ] Complete InfoSec review and approval
- [ ] Send private offer via AWS Marketplace
- [ ] Coordinate with AWS SA (Shailesh Shivakumar)
- [ ] **TARGET: Close TTS deal Feb-Mar 2026**

### Track 2: Full Solution (Raj/Vikrant) - Q1-Q2
- [ ] **Piramal:** Complete Pareto analysis of call types (2 weeks)
- [ ] **Piramal:** Identify straight-through processing opportunities
- [ ] **Piramal:** Check API availability for top use cases
- [ ] **Piramal:** Pull IVR volume data for non-disruptive testing
- [ ] **Piramal:** Share 5-10 sample calls (after InfoSec)
- [ ] **Joint:** In-person workshops (Mumbai/Bangalore) - March
- [ ] **Joint:** Build detailed workflows and conversation flows
- [ ] **Joint:** Reconvene - Early March
- [ ] **Target:** PoC complete by end of Q1 2026

### Engineering (Parallel - Both Tracks)
- [ ] **Piramal:** Test with AudioCodes to confirm audio quality issue is telephony-specific
- [ ] **Smallest:** Update WebSocket documentation for `request_id`, `pronunciation_dictionary`, buffer params
- [ ] **Piramal:** Experiment with `max_buffer_flush_ms` for LLM streaming optimization
- [ ] Fix repetition and random word insertion issues
- [ ] Improve dual-language ASR accuracy
- [x] AWS Marketplace listing for faster procurement ✅

---

## Engineering QA (Jan 21, 2026) - TTS Intermittency on Telephony Path

Piramal engineering reported **intermittent speed inconsistencies** when running our TTS through their telephony stack:

### Symptom
- Same “speed” parameter behaves inconsistently over time:
  - Morning: even **speed=1.5** sounded **slow**
  - Later: even **speed=0.5 / 0.8** sounded **fast**
- Happens on **calls/telephony path**, but hard to reproduce directly in the platform.

### Their stack (as described)
- Dialers / telephony: **Genesys dialer + Exotel**
- Transport: **AudioCodes WebSocket connectivity**
- They claim other vendors (e.g., Gemini) are consistent in the same setup.

### Hypothesis (from our side)
- Likely **transport/telephony layer timing / playback** issue rather than model change:
  - We had not updated models in the prior ~3–4 weeks (per Gaurav).
  - Issue reproduced across ~50 test calls “today”, but not earlier.

### Actions Agreed
- Gaurav to **capture/save what we generate** on our side and share recordings for side-by-side comparison (what we send vs what they hear).
- Share docs / guidance on **pronunciation dictionaries** to fix Hindi word pronunciations; update docs to ensure parity for WebSocket vs streaming parameters.
- If needed: consider fallback to an alternate endpoint/transport (but changing their pipeline to HTTP streaming is non-trivial for them).

---

## Engineering Deep-Dive Call (Feb 3, 2026) - WebSocket Integration & Audio Overlap

**Participants:**
- **Smallest AI:** Kawaldeep Singh, Gaurav Verma
- **Piramal:** Saiyam Jain (kartikeytiwari37)

### Issue Investigation: Audio Quality / Jittery Sound

**Status:** Could NOT reproduce during the call - audio was clear when tested live.

**Findings:**
- Tested with **Exotel** → Working perfectly, no issues
- Tested with **AudioCodes** → Had issues previously (but couldn't test during call - account restricted to 9am-8pm)
- Issue appears to be **telephony provider-specific**, not Smallest TTS

**Resolution:** Piramal to test with AudioCodes next morning to isolate whether issue is:
1. AudioCodes integration problem, OR
2. Piramal's implementation issue

### WebSocket vs HTTP Streaming Clarification

**Initial confusion:** Gaurav initially thought Piramal was using HTTP streaming based on logs.

**Clarified:**
- Piramal **IS using WebSocket** for V3.1 ✅
- V2 was using HTTP streaming (source of previous issues)
- Gaurav acknowledged it was an oversight on his end

### Root Cause: Filler + LLM Audio Overlap

**Piramal's Architecture:**
```
User Speech → STT → Two parallel paths:
  ├── Filler mechanism (fast, regex-based) → generates "hmm", "okay"
  └── LLM (slower) → generates actual response
Both send audio requests to the SAME WebSocket connection
```

**Problem:** When LLM is streaming and filler request arrives mid-stream, the filler audio gets interleaved with LLM audio.

**Gaurav's Explanation:**
> "If you are sending two parallel requests, they will be processed sequentially based on which arrives first."

Since Piramal uses LLM streaming (sends chunks as they arrive), a filler request CAN slip in between LLM chunks, causing audio overlap.

### Undocumented Feature Discovery: `request_id` Field

**Piramal's Fix:**
- Added a `request_id` field to track which audio chunks belong to which request
- Skip audio chunks that don't match the current expected `request_id`

**Key Discovery:** Smallest DOES accept `request_id` but it was **never documented**!
- Gaurav confirmed: *"We actually accept request_id"*
- Gaurav: *"We have used this approach before on one of our voice AI agents"*
- Claude AI somehow knew about this undocumented field and suggested it to Piramal

**Gaurav's commitment:** Will update documentation to include:
- `request_id` field ⚠️ **Undocumented**
- `pronunciation_dictionary` field ⚠️ **Undocumented**

### Undocumented WebSocket Parameters Explained by Gaurav

| Parameter | Range | Description |
|-----------|-------|-------------|
| `max_buffer_flush_ms` | 0-4000ms | Buffers LLM streaming input. Waits X ms OR until a "perfect chunk" forms before generating. **Recommended for LLM streaming.** |
| `continue` | true/false | When `true`, holds buffer without generating. Send `continue: false` to trigger generation. |
| `flush` | true/false | Forces immediate generation of all buffered text. |
| `complete_back_off_ms` | ms | Controls delay before "complete" status is sent (default ~4 seconds after last chunk). Set to 0 for instant. |

**Gaurav's recommendation:** Piramal should experiment with `max_buffer_flush_ms` for their LLM streaming use case.

### V3 vs V2 Voice Parameters

**Question from Piramal:** Why does V3 have fewer parameters than V2?

**Answer (Kawaldeep):**
> "V3 voices are more stable and you don't need all those parameters. It automatically handles them. That's why we've only given speed and sample rate."

### Action Items from Call

| Owner | Action | Status |
|-------|--------|--------|
| **Piramal** | Test with AudioCodes to isolate audio quality issue | 🔄 Pending |
| **Smallest (Gaurav)** | Update WebSocket docs: `request_id`, `pronunciation_dictionary`, buffer params | 🔄 Pending |
| **Piramal** | Experiment with `max_buffer_flush_ms` for LLM streaming | 🔄 Pending |

### Key Takeaways

1. ✅ **`request_id` approach validated** - Smallest endorses this for handling filler/LLM overlap
2. ✅ **Audio quality issues are telephony-related** (AudioCodes), not Smallest TTS
3. ⚠️ **Documentation gap** - Several useful WebSocket fields are undocumented
4. ✅ **V3 voices are more stable** - Don't need extra V2 parameters

---

## ⚠️ CRITICAL: Two Separate Tracks Identified (Feb 5, 2026)

Based on Raj Nair meeting + FDE (Kawaldeep) insights, there are **TWO distinct initiatives** at Piramal that were previously conflated:

### Track 1: Outbound TTS (Engineering - Shashank)

| Attribute | Detail |
|-----------|--------|
| **Owner** | Shashank Agarwal (Engineering Manager) |
| **Use Case** | Outbound - Collections, campaigns, demand generation |
| **Product** | Lightning TTS (V3.1) only |
| **Status** | ✅ Running test calls, evaluating TTS quality |
| **Architecture** | Own LLM + own orchestration + Smallest TTS |
| **MRR Potential** | $2K-5K |
| **Timeline** | Ready to close (pending InfoSec) |

**FDE Insight (Kawaldeep):** Shashank's team is actively running test calls on outbound use cases. They have built their own voice platform and just need TTS as a component.

### Track 2: Inbound Full Solution (CX - Raj Nair)

| Attribute | Detail |
|-----------|--------|
| **Owner** | Raj Nair (Head of CX) via Vikrant Wakhlu |
| **Use Case** | Inbound customer service (70-80K calls/month) |
| **Product** | Full solution: STT → SLM reasoning → API calls → TTS |
| **Status** | 🔄 Discovery phase, stuck on InfoSec |
| **Architecture** | Wants Smallest to provide full stack (Atoms) |
| **MRR Potential** | $25K-30K |
| **Timeline** | Q2 2026 (workshops → March, PoC → end of Q1) |

**Key Quote from Feb 5 Meeting:**
> "Full solution needed: STT → SLM reasoning → API calls → TTS response"

### Strategic Implication

| Deal | Product | MRR | Close Timeline | Blocker |
|------|---------|-----|----------------|---------|
| **Deal 1 (TTS)** | Lightning V3.1 | $2-5K | Feb-Mar 2026 | InfoSec (lower bar) |
| **Deal 2 (Atoms)** | Full Voice AI | $25-30K | Q2 2026 | InfoSec + use case definition |

**Recommendation:** Close TTS deal first, stay engaged on Atoms opportunity. If Shashank's team struggles to scale outbound to inbound, they'll need full solution.

---

## Raj Nair Meeting (Feb 5, 2026) - CX Strategy & Inbound Voice AI

**Participants:**
- **Smallest AI:** Apoorv Sood, Harsh
- **Piramal:** Vikrant Wakhlu (Business Excellence)
- **Note:** Raj Nair organized but Vikrant attended

### InfoSec Status Update

- **Current bottleneck** for both agent development AND TTS integration
- First InfoSec call: Jan 5th, deep dive call: Jan 22nd
- **Waiting 12-13 days** since last response ⚠️
- Vikrant to follow up with Harish (Piramal InfoSec) today/tomorrow
- Normal process: 3+ rounds of Q&A (100+ questions)
- **Cannot share production calls** without InfoSec approval

### Strategic Context

- Piramal **already has scaled outbound agents** for collections, demand generation, onboarding
- **Inbound customer service** identified as differentiated use case
- No other vendor has successfully scaled inbound B2C in Indian banking/NBFC
- Only known example: one bank using Nuance (now Microsoft)
- Smallest positioned as "innovative company working on the edges"

### Use Case Selection Discussion

Initial focus: **EMI-related queries** (70-80k calls/month)

Debate between simple vs complex use cases:

**1. Simple (Recommended Start):** Statement of account requests
- Straight-through processing with available APIs
- Clear intent identification and disambiguation
- "Put runs on the scoreboard" first

**2. Complex (Later):** Double EMI debit disputes
- Customer pays early + auto-debit triggers duplicate charge
- Peaks first week of each month
- Requires ticket creation and refund process

### Technical Integration Approach

Three parallel threads identified:
1. **Agent development** - Full solution (stuck on InfoSec)
2. **TTS integration** - Shashank's team (testing now)
3. **Platform integration** - SFDC/tenant connectivity

Smallest offers modular services: TTS, STT, SLM models
- Can work with existing Piramal orchestration setup
- Need to identify IVR use cases with highest volume for non-disruptive testing

### Next Steps from Meeting

| Owner | Action | Timeline |
|-------|--------|----------|
| **Piramal** | Complete Pareto analysis of call types | 2 weeks |
| **Piramal** | Identify straight-through processing opportunities | 2 weeks |
| **Piramal** | Check API availability for top use cases | 2 weeks |
| **Piramal** | Pull IVR volume data for non-disruptive testing | 2 weeks |
| **Vikrant** | Follow up on InfoSec with Harish | Immediate |
| **Joint** | Build detailed workflows and conversation flows | Workshops |
| **Joint** | In-person sessions (Mumbai/Bangalore) | TBD |
| **Piramal** | Share 5-10 sample calls (different dispositions) | After InfoSec |
| **Joint** | Reconvene | Early March |
| **Target** | PoC complete | End of Q1 2026 |

### Key Insight

> "Set up PMO structure with end-of-quarter PoC target"

This is now a **formal project** inside Piramal, not just an evaluation.

---

## Infosec Clarifications (Jan 22, 2026) - Piramal TechSec / TPRM

Key learnings from infosec clarification call (participants included **Amit Gupta (Smallest CISO)**, Piramal TechSec, and Piramal TPRM):

### What Piramal is asking for
- Questionnaire is based on **CSA CAIQ** (simplified subset; originally ~330 questions).
- They want evidence aligned to scope (SaaS + PI data flows).

### Key requirements / expectations
- **Single-tenant deployment for Piramal** (no other tenants in same instance) because PI data will flow.
- **Multi-AZ / DR capability** expected (later stage), with “capability + drill evidence” acceptable during POC stage.
- **India region** (Mumbai) for data residency.

### Evidence requests that came up explicitly
- VAPT / AppSec report scope clarity (ensure **APIs covered** or provide declaration)
- **Cloud vulnerability / infra scan** evidence for underlying hosting environment
- **CSPM report** / misconfiguration posture for the Smallest deployment
- Container / infra scanning evidence (e.g., AWS-native image scanning / ECS/ECR scan reports)
- GuardDuty / alerting enabled evidence (snapshots acceptable)
- Background verification: one sample “green” certificate (redacted), plus later provide for project staff

**Note:** Some items will be handled via **declarations** (CEO-signed) + additional evidence attachments as needed.

### Post-Closure
- [ ] Onboarding and training
- [ ] Collections use case pilot
- [ ] Monitor and optimize
- [ ] Expansion discussions

---

## Email Thread Contacts

### Piramal - CX Track (Inbound)
- **Raj Nair** (raj.nair@piramal.com) - Head of CX ⭐ Executive Sponsor
- **Vikrant Wakhlu** (vikrant.wakhlu@piramal.com) - Business Excellence, CX Track Owner
- **Markandey** - Workshop attendee (CX/Operations)
- **Hussain** - Workshop attendee (CX/Operations)

### Piramal - Engineering Track (TTS/Outbound)
- **Shashank Agarwal** (shashank.agarwal@piramal.com) - Engineering Manager, TTS Track Owner
- **Saiyam Jain** (kartikeytiwari37) - Engineer (TTS Integration)

### Piramal - InfoSec
- **Harish** - InfoSec (Vikrant's contact for follow-up)
- **Jay Maru** - TechSec
- **Jyoti Katare** - TPRM

### Smallest Team
- **Kawaldeep Singh** - FDE (Engineering support)
- **Gaurav Verma** - Engineering (WebSocket/TTS)
- **Amit Gupta** - CISO (InfoSec responses)

---

## Commercial Opportunity Analysis (Updated Feb 5, 2026)

### Two-Deal Structure

| Deal | Product | Use Case | MRR | ARR | Timeline |
|------|---------|----------|-----|-----|----------|
| **Deal 1: TTS** | Lightning V3.1 | Outbound (collections, campaigns) | $2-5K | $24-60K | Feb-Mar 2026 |
| **Deal 2: Atoms** | Full Voice AI | Inbound CX (70-80K calls) | $25-30K | $300-360K | Q2 2026 |

### Deal 1: TTS Only (Shashank's Track)

| Phase | Calls/Month | TTS Minutes | Price/Min | MRR | ARR |
|-------|-------------|-------------|-----------|-----|-----|
| POC | 15K | 60K | $0.018 | $1,080 | $13K |
| Scale (Top categories) | 60K | 240K | $0.017 | $4,080 | $49K |
| Full outbound | 75K | 300K | $0.016 | $4,800 | $58K |

### Deal 2: Full Solution (Raj's Track)

| Phase | Calls/Month | Total Minutes | Price/Min | MRR | ARR |
|-------|-------------|---------------|-----------|-----|-----|
| POC | 15K | 120K | $0.056 | $6,720 | $81K |
| Top 10 categories | 60K | 480K | $0.052 | $24,960 | $300K |
| Full inbound | 75K | 600K | $0.050 | $30,000 | $360K |

### Combined Potential

| Scenario | TTS MRR | Atoms MRR | Total MRR | Total ARR |
|----------|---------|-----------|-----------|-----------|
| **Near-term (TTS only)** | $5K | - | $5K | $60K |
| **Medium-term (TTS + Atoms POC)** | $5K | $7K | $12K | $144K |
| **Full Scale (Both at scale)** | $5K | $30K | $35K | $420K |

### Expansion Triggers
1. **TTS → Atoms pivot** - When Shashank's team hits inbound complexity
2. **24×7 availability** - Currently 9 AM - 6:30 PM only
3. **Regional languages** - South Indian languages = 30-35% volume untapped
4. **Cross-sell automation** - Optional but mentioned

---

## Revenue Impact Summary

| Timeframe | Expected Revenue | Notes |
|-----------|------------------|-------|
| **Q1 2026** | $2-5K MRR / $24-60K ARR | TTS deal only |
| **Q2 2026** | $12K MRR / $144K ARR | TTS + Atoms POC |
| **H2 2026** | $35K MRR / $420K ARR | Both at scale |

**Piramal is now a potential Tier 1 deal ($400K+ ARR)** when both tracks are considered.

---

## Source References
- **CRM Deal:** Piramal
- **Email Thread:** "AI Workshop for Piramal Finance" (Markandey, Hussain)
- **Granola Transcripts:** 
  - "smallest for Piramal Finance | Infosec"
  - "Smallest.Ai <> Piramal Finance"
  - "Chat with Raj Nair (Piramal) Meeting with Smallest.ai" (Feb 5, 2026)
- **Granola Notes:** Multiple infosec and technical discussions
- **Workshop Notes:** In-person CX mapping session (Nov 2025)
- **Engineering Call (Feb 3, 2026):** Smallest (Kawaldeep, Gaurav) ↔ Piramal (Saiyam Jain) - WebSocket integration deep-dive
- **FDE Insight (Feb 5, 2026):** Kawaldeep confirmed Shashank's team running outbound test calls

---

## 🎯 Summary (Updated Feb 5, 2026)

| Track | Product | MRR | Timeline | Status |
|-------|---------|-----|----------|--------|
| **TTS (Shashank)** | Lightning V3.1 | $2-5K | Feb-Mar 2026 | Testing ✅, InfoSec pending |
| **Atoms (Raj)** | Full Solution | $25-30K | Q2 2026 | Discovery, workshops March |

**💰 COMBINED POTENTIAL: $420K ARR at full scale**
**🔑 IMMEDIATE: Close TTS deal, stay engaged on Atoms**
**⚠️ BLOCKER: InfoSec - waiting 12-13 days, Vikrant following up**
**🔧 ENGINEERING: TTS validated (Feb 3) - outbound test calls running**