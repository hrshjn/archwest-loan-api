# [Neysa] YuVerse / Spocto / Yubi - Client Context

**Last Updated:** 2026-02-10
**Deal Owner:** Apoorv Sood, Aditya Bhat (FDE)
**Stage:** Opportunity → NDA Counter-Execution (POC imminent)
**Partner Channel:** Neysa (Joint GTM)
**Priority:** 🔴 Highest — largest volume opportunity in pipeline

---

## Company Overview
- **Parent Company:** Yubi (formerly CredAvenue)
- **Entities:**
  - **YuVerse** - Voice AI evaluation (Matangi Ramachandran)
  - **Spocto / Yucollect** - Debt collection platform (Vivek Srikantan - CTO)
- **Industry:** FinTech / Debt Collection Platform
- **Contacts:** 
  - Vivek Srikantan (CTO, Spocto/Yucollect) — `vivek.srikantan@spocto.com`
  - Sourabh Choudhary (Principal Engineer, Spocto) — `sourabh.choudhary@spocto.com` — **Primary POC for testing** (WFH, Mumbai)
  - Matangi Ramachandran (YuVerse side)
  - Ramya (YuVerse side)
  - Amartya Saha (Legal, Yubi) — `amartya.saha@go-yubi.com` — NDA reviewer
  - Spocto Compliance — `compliance@spocto.com` — NDA execution
- **Partner:** Neysa (GPU cloud/AI infrastructure)
  - Vishal Ramaswamy (India Lead, Unicorns & AI-Native Startups, Neysa) — `vishal.ramaswamy@neysa.ai` — Facilitator/connector
  - Prashant Pandey (Neysa) — `prashant.pandey@neysa.ai`
- **Location:** Mumbai (BKC WeWork - same building as Smallest!)

---

## What They're Evaluating/Buying

### Primary Products
- **TTS (Text-to-Speech)** - Voice synthesis
- **STT (Speech-to-Text)** - Transcription
- Full voice agent stack for collections

### Business Model
- Self-serve platform for lenders/agencies
- Managed service (paid on **outcome basis**)
- Scoring → Segmentation → Channel recommendation → Execution

### Channel Recommendations Their Platform Makes
- SMS / IVR
- Conversational AI bot
- Telecaller
- Field agent

---

## Volumes

| Metric | Value | Notes |
|--------|-------|-------|
| CRM Volume | 10,000 minutes | Initial |
| Daily Call Volume | **Tens of lakhs** | Normal operations |
| Peak Volume | **Hundreds of lakhs/day** | Extreme scenarios |
| Scale Volume | 3 crore calls/month | Mentioned in earlier discussion |

**This is a MASSIVE scale opportunity** - cost economics critical

### Pricing Analysis (At Scale Tier)

| Product | Rate | Notes |
|---------|------|-------|
| STT | ₹0.09/min | Scale tier (100M-1B mins/year) |
| TTS | ₹0.70/min | Scale tier |
| Combined | ₹0.79/min | Per minute of conversation |

**Annual Cost Estimate:**
- 3 Cr calls/month × 3 min avg × 12 months = ~1 billion minutes/year
- At Scale tier: ~₹79 Cr/year (combined TTS+STT)
- At Enterprise tier (1B+ mins): ~₹49.5 Cr/year (₹0.045 + ₹0.45 = ₹0.495/min)

⚠️ **Critical:** Vivek mentioned pricing "looked on the higher side" initially. Need to present Enterprise tier pricing given their scale.

---

## Technical Requirements

### Languages Required
| Language | V3 Status | Timeline |
|----------|-----------|----------|
| English | ✅ Live | Now |
| Hindi | ✅ Live | Now |
| Tamil | 🔄 Coming | End of next week |
| Spanish | 🔄 Coming | End of next week |
| South Indian | 🔄 In progress | Training ongoing |

### Performance Specs (Smallest V3/3.1)
| Component | Latency | Notes |
|-----------|---------|-------|
| TTS | 200-250ms | At 20 concurrency |
| STT | 300ms | At high concurrency |
| STT (low concurrency) | 65-70ms | Optimized |

### Vivek's Latency Calculation
- STT: 300ms
- TTS: 200ms  
- LLM: 100ms minimum
- Telephony overhead
- **Total: ~1 second** (concern raised)

### Tech Stack
- Building on **LiveKit** (standard, easy to plug in)
- LLM-based voice agents (evolved from traditional NLP)
- Can experiment with multiple model variants
- A/B testing for collection efficiency

---

## Competitive Landscape

### Models Already Tried
| Model | Status |
|-------|--------|
| Sarvam | Evaluated |
| Cartesia | Evaluated |
| Chirp | Evaluated |
| Smallest | Initial pricing looked high (pre-Apoorv GTM era) |
| 11 Labs | Too expensive, language issues |
| Deepgram | Good in English, poor in other languages |

### Key Differentiators for Smallest
- Indian language support (beyond English)
- Cost optimization at scale
- Neysa deployment (on-prem option)
- Fine-tuning capabilities
- Data dictionary support
- Reference customer in same domain (DPDZero — collections, using our models)

---

## Engagement Timeline

### Email: 14/01/2026 — Initial Introduction
- Vishal Ramaswamy (Neysa) connected Apoorv with Vivek via email
- Context: "As discussed in December, connecting you with Apoorv Sood from Smallest to explore an integrated POC on Neysa AI Cloud"
- Vivek proposed Wed Jan 21 at 2 PM; Apoorv confirmed

### Reschedule: 21/01/2026
- Vivek rescheduled to Jan 22 due to priority conflict
- Vishal re-sent Teams invite

### Meeting: 22/01/2026 (Vivek, Sourabh, Vishal, Apoorv, Aditya)

**Attendees:** Vivek Srikantan (CTO, Spocto), Sourabh Choudhary (Principal Engineer, Spocto), Vishal Ramaswamy (Neysa — stepped back early, had another meeting), Apoorv Sood, Aditya Bhat

**Vivek's Opening (laid all cards on table):**
1. CTO for Spocto and Yucollect — debt collection business
2. Offer product as self-serve platform AND managed service (paid on outcome basis)
3. Platform does: Scoring → Segmentation → Channel recommendation → Execution
4. Voice agents evolved from traditional NLP to LLM-based
5. Scale business — easily tens of lakhs of calls/day, sometimes hundreds of lakhs
6. Cost-sensitive — unit economics must work, collection efficiency must be managed within cost
7. Key considerations: quality of voice, latency, cost
8. Already tried: Sarvam, Cartesia, Chirp — Smallest pricing "looked on the higher side" initially
9. Building on LiveKit — platform to experiment with multiple model variants and A/B test collection efficiency

**Apoorv's Counter-Positioning:**
1. "Whatever you saw pre-me, take it with a pinch of salt and forget it" — GTM only 4-5 months old, no structured GTM existed before
2. Already engaging with Matangi/Ramya on YuVerse side (testing since Nov/Dec 2025)
3. V3/3.1 just launched with significantly better specs
4. Reference customer: DPDZero in same collections domain, seeing success
5. 11Labs too expensive + language gaps; Deepgram good in English but poor in other languages
6. Partnership framing: model usage + cost optimization + feedback loop (two-way street)
7. On-prem via Neysa at scale — model optimized for Neysa chipsets
8. Per-client GPU scaling — latency maintained

**Technical Discussion (Aditya + Sourabh):**
- TTS latency: 200-250ms (V3/3.1), 20 concurrency at 250ms on single GPU
- STT latency: ~300ms at higher concurrency, 65-70ms at low concurrency
- Sourabh's key question: "Is scaling per-client or shared?" → Answer: **per-client** via Neysa deployment
- At 100-200 concurrency: latency stays sub-300ms with proper GPU allocation
- Vivek's latency math: STT 300ms + TTS 200ms + LLM 100ms + telephony = ~1 second (concern raised)
- Apoorv noted: stats given are worst-case at high concurrency; actual outcome is sub-1 second with optimizations (filler words, etc.)

**Logistics:**
- Vivek couldn't whitelist external Slack (Infosec) → **WhatsApp chosen** for comms
- Sourabh confirmed as primary POC (Vivek "in some random meeting or the other most of the time")
- Sourabh is WFH in Mumbai; Spocto office shifted to BKC WeWork
- Offices are right opposite each other — in-person collaboration possible

**Next Steps Agreed:**
1. WhatsApp group for quick comms (Sourabh primary POC)
2. NDA process (Vivek to handle via Infosec — mandatory before any platform onboarding)
3. Registration/credentials setup (simple — create account on Smallest AI platform)
4. Test case definition
5. Quick feedback loop for fine-tuning

### NDA Thread: Feb 1–10, 2026

| Date | Action |
|------|--------|
| **Feb 1** | Vivek shared Spocto's standard NDA template; added Spocto legal team to thread |
| **Feb 2** | Harsh added Manjari (Smallest Legal) to execute |
| **Feb 9** | Manjari sent back **signed NDA** (Smallest side complete) |
| **Feb 10** | Vivek forwarded to **Amartya Saha** (Yubi legal, `amartya.saha@go-yubi.com`) for review + **Spocto Compliance** (`compliance@spocto.com`) for counter-execution |

**NDA Status (as of Feb 10):** Smallest has signed. Awaiting Spocto/Yubi legal review and counter-signature. Final step before POC can formally begin.

---

## Neysa Partnership

### Joint GTM
- Neysa accelerating the opportunity
- Smallest already using Neysa GPUs for training
- Production scaling with Neysa infrastructure
- Working together on Vodafone and other collective opportunities
- Model optimized for Neysa chipsets

### Deployment Model
- On-prem via Neysa at scale
- Per-client GPU allocation
- Latency maintained across scaling

---

## Key Blockers/Concerns

1. ~~**NDA** - Required before onboarding (Infosec process)~~ → **Almost resolved** (Smallest signed; Spocto counter-execution in progress as of Feb 10)
2. **Latency** - Need total response < 1 second (Vivek's math: STT + TTS + LLM + telephony ≈ 1s)
3. **Cost** - Must work at massive scale economics; initial pricing "looked on the higher side" — need to present Enterprise tier
4. **Languages** - South Indian languages quality still maturing

---

## Current Status (Feb 2026)

### NDA Progress
- ✅ Vivek shared Spocto NDA template (Feb 1)
- ✅ Harsh added Smallest Legal (Feb 2)
- ✅ **Smallest signed NDA** sent back (Feb 9)
- ⏳ **Spocto/Yubi legal review + counter-signature** in progress (Feb 10 — Amartya Saha reviewing, Spocto Compliance executing)

### What's Unblocked Once NDA Completes
- Sourabh can onboard onto Smallest AI platform
- LiveKit POC can formally begin
- Test case definition and execution
- Fine-tuning feedback loop

### Parallel Testing
- Matangi/Ramya testing on YuVerse side simultaneously (since Nov/Dec 2025)
- V3/3.1 model evaluation ongoing
- Neysa deployment discussions active

---

## Action Items

- [x] Create WhatsApp group (Apoorv, Aditya, Sourabh, Vivek) ✅
- [x] NDA template shared by Vivek (Feb 1) ✅
- [x] Smallest signed NDA (Feb 9, Manjari/Legal) ✅
- [ ] **Spocto counter-sign NDA** (Amartya Saha + Spocto Compliance — in progress as of Feb 10)
- [ ] Send registration/credentials to Sourabh (once NDA executed)
- [ ] Define test case parameters
- [ ] Run POC on LiveKit integration
- [ ] Sync with Matangi/Ramya on YuVerse testing results
- [ ] V3 model feedback collection
- [ ] Quick feedback loop for fine-tuning established
- [ ] Present Enterprise tier pricing (given their 1B+ min/year scale)

---

## Relationship Note
> **Smallest office is RIGHT OPPOSITE Spocto office at WeWork BKC, Mumbai!**
> - In-person collaboration opportunity for testing/support
> - Sourabh is WFH but can come in for in-person sessions when needed

---

## Source References
- **CRM Deal:** YuVerse
- **Meeting Transcript:** 22/01/2026 — Vivek, Sourabh, Vishal (Neysa), Apoorv, Aditya
- **Email Thread 1:** "Yubi/Spocto <> Smallest AI + Neysa AI | Accelerating Voice AI" (Jan 14–21, scheduling)
- **Email Thread 2:** "[Confidential] Re: Yubi/Spocto <> Smallest AI + Neysa AI..." (Jan 22 – Feb 10, NDA execution)
- **Neysa Recap Email:** "Smallest <> Neysa – Quick Recap & Next Steps" (Jan 30, Harsh → Aniket Dongre)
- **Granola Notes:** "smallest for YuVerse | Feedback"
- **Slack #gtm:** Multiple references to YuVerse and Neysa partnership
