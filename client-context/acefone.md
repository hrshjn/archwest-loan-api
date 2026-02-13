# Acefone - Client Context

**Last Updated:** 2026-02-11
**Deal Owner:** Apoorv (exec sponsor), Divyanshu (initial qualifying), Tausif (internal coordination)
**Stage:** **Post-Discovery → Pricing Proposal (due by Feb 13)**
**Priority:** 🔴 **HIGH - Partnership Deal, Pricing Due in 24-48hrs**

---

## TL;DR

| Dimension | Detail |
|-----------|--------|
| **Company** | Acefone — 20-year-old cloud telephony / CCaaS + CPaaS + GPU compute business |
| **Revenue** | ₹350 Cr total (75% gross margin). Cloud hosting ₹220 Cr, Telephony ₹100 Cr direct + ₹100 Cr via JV |
| **Headcount** | 700 total, 270-280 in telephony |
| **What they want** | STT + TTS embedded into their voice AI platform — offered as options to their enterprise customers |
| **Total call volume** | 350-400M answered calls/month across 250K active users |
| **Voice bot status** | NOT fully launched. 2 friendly test customers. Building on Pipecat. |
| **Their cost target** | Entire voice bot stack (telephony + STT + LLM + TTS) at **40-50 paisa/min**. TTS specifically at **20 paisa/min**. |
| **Our gap** | Our Enterprise TTS = ₹0.45/min (2.25x their target). Scale TTS = ₹0.70/min (3.5x). |
| **Own GPUs** | Yes — separate GPU compute business. Infra cost is near-zero for their own use. |
| **Concurrency target** | Year 1: 5,000 concurrent. Year 3: 30,000 concurrent. |
| **3-year vision** | 40% of natural traffic (non-burst) transitioning to conversational AI |
| **Partnership model** | Co-branded ("We will tell people this is Smallest"). Multi-vendor. Distribution play. |
| **Distribution reach** | 40 direct sales + 500 partner field sales + 45,000 accounts + 80 voice bot companies on streaming |
| **Next step** | Apoorv to send pricing (API tiers + on-prem) by **Feb 13**. In-person at AI Summit Delhi **Feb 17-20**. |

---

## Company Overview

| Field | Detail |
|-------|--------|
| **Company** | Acefone |
| **Age** | 20 years in business |
| **Industry** | Cloud Telephony / CCaaS + CPaaS + GPU Compute |
| **Website** | acefone.com |
| **Country** | India (primary), UK, US (SMB) |
| **Revenue** | ₹350 Cr (~$39M at ₹90) at 75% gross margin |
| **Headcount** | 700 total; 270-280 in telephony |
| **Market Share** | 18% India cloud telephony (direct + indirect via JV) |
| **Active Users** | 250,000 on platform |
| **Call Volume** | 350-400M answered calls/month (human agents) |

### Business Lines

| Business | Revenue | Notes |
|----------|---------|-------|
| **Cloud Hosting** | ~₹220 Cr | US-focused, expanding India. GPU compute for customers. |
| **Cloud Telephony (direct)** | ~₹100 Cr | India enterprise-heavy. 70+ BFSI logos. 10K+ agents per large customer. |
| **Cloud Telephony (JV)** | ~₹100 Cr | White-label via telco partners. Telcos sell, Acefone runs infra + app. |
| **Voice AI (new)** | Pre-revenue | 4 months in. Building platform. 2 test customers. |

### Competitive Landscape

| Competitor | Category | Notes (from call) |
|------------|----------|-------------------|
| **Exotel** | CCaaS + CPaaS | Primary India competitor. Acquired Ameyo for CCaaS. |
| **Ozonetel** | CCaaS | Contact center focused |
| **Kaleyra/Gupshup** | CPaaS (messaging) | Post-acquisition, more messaging/CPaaS focused. Not real voice competition. |
| **Infobip** | Messaging | Minimal voice. Not a direct competitor. |
| **Five9, RingCentral, Genesys** | Global CCaaS | US competition. Acefone can't compete on features, sees Voice AI as leap into international. |

### India Market Economics (from Karan)

| Metric | India | US |
|--------|-------|-----|
| Contact center seat/month | ₹800-1000 ($8-9) incl. telecom | $50-75 |
| Without telecom | ~$4-5 | $40-50 |
| Acefone's position | Cost-competitive, enterprise India | SMB only, can't compete on features |

---

## Key Contacts

| Name | Role | Email | Phone | Notes |
|------|------|-------|-------|-------|
| **Karan Chhabra** | CEO & Co-Founder | — | — | Final authority. Harvard exec MBA. On the Feb 11 call. Very transparent. Thinks distribution-first. |
| **Piyush Tandon** | Leads Cloud Telephony business | piyush.tandon1@acefone.com | 95606 35792 | Primary contact. Runs the 270-person telephony team. Led the call. **Not signed up on platform.** |
| **Saurabh Kukreti** | Tech-AI Team Lead | — | — | Technical evaluation |
| **Shrish Gulati** | Group Product Manager | shrish.gulati@acefone.com | — | Product eval. **Active account** (org `6973230b0cd7dc0b6730fdb8`, since Jan 23). 11K TTS + 1.2K ASR requests. |
| **Piyush Sikka** | — | piyush.sikka@acefone.com | — | Separate account (Jul 2025). No usage. |
| **Saksham Munshi** | — | saksham.munshi@acefone.com | — | Separate account (Dec 2025). No usage. |
| **Shubham Saini** | — | shubham.saini@acefone.com | — | Member of Shrish's org (Jan 30, 2026) |
| **Himanshu Gunwant** | — | himanshu.gunwant@acefone.com | — | Member of Shrish's org (Jan 27, 2026) |

### Decision Chain
```
Piyush Tandon (leads business, POC) → Saurabh Kukreti + Shrish Gulati (tech + product eval) → Karan Chhabra (CEO, final sign-off)
```

> Note: Karan was on the Feb 11 call and spoke directly. This is a CEO-driven decision, not a bottom-up eval.

---

## Voice AI Strategy (from Feb 11 Call)

### What They're Building
- Voice AI platform built on **Pipecat**
- Goal: transition from voice infra company → **Voice AI infrastructure company**
- Offer end-to-end solution: telephony + STT + LLM + TTS — pre-integrated, low-latency, self-hosted on their GPUs
- Think "a VAPI with infrastructure self-hosted in the same environment"
- Target: total turn latency of **300ms** (currently at ~600ms across different providers)
- Open platform: customers choose model, voice, text model — they provide the infra

### Current State (NOT fully launched)
- 2 "friendly" test customers only:
  - Large corporate travel booking company (OTP verification, WhatsApp, flight selection)
  - Lead qualification use case
- Previously ran debt collection at scale (10M answered calls/day for 5 months) — but as **streaming/telephony provider**, not bot provider
- Have been forwarding voice bot business to other providers. Now want to build their own.
- GTM team already bringing in voice bot customers — business exists, platform isn't ready yet

### Tech Stack They've Tested

| Layer | Providers Tested | Notes |
|-------|-----------------|-------|
| **LLM** | OpenAI, Gemini, Grok, Cerebras | Grok impressed on real-time (tested 150+ calls). Cerebras also good. |
| **STT** | Deepgram, Soniox, Azure, AWS, Google, **Smallest** | Deepgram = good relationship, good rates. Soniox = "great job", in talks for on-prem on their GPUs. |
| **TTS** | ElevenLabs, **Smallest** | ElevenLabs = great quality, too expensive for volume. Smallest = actively testing v2 and v3.1. |
| **Orchestration** | Pipecat | Base framework for their voice bot |

### Distribution Muscle
- 40 direct salespeople
- Telco partners with ~500 on-ground field sales (voice-focused)
- Combined access to **45,000 accounts**
- **80 active voice bot companies** already use their streaming platform
- 70+ BFSI enterprise logos

---

## Platform Usage (Shrish's Org — as of Feb 10, 2026)

### TTS Usage

| Metric | Value |
|--------|-------|
| **Total Requests** | 11,073 |
| **Total Characters** | 655,635 |
| **Total Credits Used** | 16.57 |
| **Models** | `lightning-v2` (7,673 req), `lightning-v3.1` (3,400 req) |
| **Active Since** | Jan 28, 2026 |
| **Peak Day** | Feb 6 — 1,893 requests, 120K chars |
| **Top Voices** | anuja (v3.1, 3,589), aditi (v2, 3,343), neha (v2, 2,954) — 89% of usage |
| **Language** | 100% English (zero Hindi/regional despite listing as requirement) |
| **Request Type** | WebSocket 57%, Streaming 43% — real-time voice bot pattern |
| **Avg Text Length** | 59 chars (median 46) — short conversational utterances |
| **Latency** | Avg 351ms, P95 765ms (cloud API) |
| **Voice Cloning** | None — all stock voices |

### ASR (STT) Usage

| Metric | Value |
|--------|-------|
| **Total Requests** | 1,167 |
| **Total Duration** | ~14,330 sec (~4 hours) |
| **Total Credits Used** | 5.97 |
| **Models** | Default (1,133 req), `pulse` (only 34 req) |
| **Active Since** | Feb 6, 2026 |
| **Avg Duration** | 11.85 sec (median 10.16 sec) — individual voice bot turns |
| **Language** | Not set (auto-detect on all requests) |

### Usage Insights
- **TTS is the primary product for them** — 10x more TTS than ASR requests
- **Pulse barely tested** (34 requests) despite Shrish specifically requesting a Pulse trial
- **English-only testing** despite listing 6 languages as requirements — multilingual is likely Phase 2
- **Real-time voice bot pattern confirmed** — WebSocket/streaming, short utterances, conversational
- **Cloud latency may be a problem** — P95 of 765ms won't work for production voice bots
- **All stock voices, no cloning** — testing standard voice quality first

---

## Volume & Concurrency Targets (from Feb 11 Call)

### Confirmed Numbers

| Metric | Value | Source |
|--------|-------|--------|
| Year 1 concurrency target | **5,000 concurrent calls** | Karan (CEO), on call |
| Year 3 concurrency vision | **30,000 concurrent calls** | Karan, on call |
| 3-year traffic transition | **40% of natural traffic** → conversational AI | Karan, on call |
| First slab | Up to ~1M calls/month | Piyush, on call |
| Inflection slab | 2-3M calls/month | Piyush, on call |
| Burst traffic | Debt collection — large, unpredictable | Karan, on call |

### Volume Reconciliation

| Number | What It Actually Means |
|--------|----------------------|
| 350-400M calls/month | Total platform volume — human agents answering calls. NOT voice bot volume. |
| 10-15M calls/month | Shrish's initial email — aspirational voice bot volume, not current. |
| 2 test customers | Actual current voice bot deployments. Near-zero production volume. |
| 1M calls/month (first slab) | What Piyush proposed as starting tier for pricing discussion. |
| 2-3M calls/month | Their inflection point where they'd consider on-prem. |

> Reality: they are pre-revenue on voice bots. All volume numbers are projections, not current traffic.

---

## The Pricing Problem

### Their Cost Stack Target

| Component | Their Target | Notes |
|-----------|-------------|-------|
| **Entire voice bot (telephony + STT + LLM + TTS + infra)** | **40-50 paisa/min** | Karan stated directly |
| Telephony | Near-zero | Licensed operator — "practically not even 10 paisa" |
| GPU infra | Near-zero | Own GPU compute business — "using my inventory for own use case" |
| Current cost without TTS | ~30 paisa/min | Piyush stated |
| **TTS target** | **20 paisa/min** | Piyush stated explicitly |

### Our Pricing vs. Their Target

| Tier | Our STT | Our TTS | Combined | Their TTS Target | Gap |
|------|---------|---------|----------|-------------------|-----|
| **Scale** (100M-1B/yr) | ₹0.09 | ₹0.70 | ₹0.79 | ₹0.20 | TTS is 3.5x over |
| **Enterprise** (1B+/yr) | ₹0.045 | ₹0.45 | ₹0.495 | ₹0.20 | TTS is 2.25x over |

> Their entire AI stack budget (STT + LLM + TTS) is 40-50 paisa total. Our TTS alone at Enterprise tier (₹0.45) nearly equals their entire budget. Our STT at Enterprise (₹0.045) fits within their budget.

### On-Prem Changes the Math

Since they have their own GPUs, the on-prem equation is fundamentally different:
- **Their infra cost = near zero** (own GPU inventory)
- **Our cost to them = model license only**
- A per-GPU or per-concurrency license could potentially hit their price target depending on utilization

#### On-Prem GPU Requirements (at 5,000 concurrent — Year 1 target)

| Model | GPU | Streams/GPU | GPUs Needed | Notes |
|-------|-----|-------------|-------------|-------|
| **STT** | NVIDIA L4 | ~100 | ~50 | Manageable |
| **TTS** | NVIDIA L40S | ~20 | ~250 | TTS is the bottleneck |

#### Effective Per-Minute Cost (On-Prem, License Only)

If we price per-GPU-per-month and they achieve 60%+ utilization:

**TTS example at 5,000 concurrent (250 L40S GPUs):**
- 5,000 concurrent × 60 min × 14 active hrs/day × 30 days × 60% utilization = ~75.6M mins/month
- If we license at ₹X/GPU/month × 250 GPUs, their effective per-min = (250 × X) / 75.6M

For them to hit ₹0.20/min effective TTS cost:
- 75.6M × ₹0.20 = ₹15.12 Cr/year license
- Per GPU/month: ₹15.12 Cr / 250 / 12 = **~₹50,400/GPU/month (~$560)**

For context, a g6e.2xlarge on-demand is ~$1.84/hr = ~$1,325/month. So a ₹50K/GPU/month license would be ~42% of their infra cost as a markup — which they'd resist given they own the GPUs.

---

## BANT Analysis (Updated Post-Call)

| Dimension | Detail |
|-----------|--------|
| **Budget** | Total stack budget: 40-50 paisa/min. TTS target: 20 paisa/min. Our pricing is 2-3.5x their TTS target. |
| **Authority** | Karan (CEO) was on the call and spoke directly. This is CEO-driven. |
| **Need** | Real but early. Pre-revenue on voice bots. 2 test customers. GTM machine ready but product isn't. |
| **Timeline** | Slab-based ramp: 1M calls/month → 2-3M → on-prem transition. No hard POC date discussed on call. |

---

## Engagement Timeline

### Pre-Engagement (Jul 2025 - Dec 2025)
- **Jul 9, 2025** — `piyush.sikka@acefone.com` created account. No usage.
- **Dec 24, 2025** — `saksham.munshi@acefone.com` created account. No usage.

### Active Evaluation (Jan 2026 - Present)
- **Jan 23, 2026** — `shrish.gulati@acefone.com` created account (org owner)
- **Jan 27, 2026** — `himanshu.gunwant@acefone.com` joined Shrish's org
- **Jan 28, 2026** — First TTS usage begins (1,192 requests on day 1)
- **Jan 30, 2026** — `shubham.saini@acefone.com` joined Shrish's org
- **~Late Jan** — Shrish's initial outreach to Samiyan requesting Pulse trial, mentioning 10-15M calls/month
- **~Early Feb** — Qualifying call with Divyanshu + Pratirath (latency/tech assessment)
- **Feb 6, 2026** — First ASR (Pulse) usage begins
- **Feb 10, 2026** — Divyanshu sends internal handoff email to Apoorv/Tausif
- **Feb 10, 2026** — Tausif reaches out to Harsh for pricing prep

### Deep-Dive Call (Feb 11, 2026 — 12:30 PM)
- **Attendees:** Apoorv (Smallest), Divyanshu (Smallest), Karan Chhabra (Acefone CEO), Piyush Tandon (Acefone telephony lead)
- **Duration:** ~55 minutes
- **Key outcomes:**
  - Karan & Piyush gave full transparency on business (revenue, margins, market share, strategy)
  - Confirmed pre-revenue on voice bots (2 test customers only)
  - Stated cost targets: 40-50 paisa total stack, 20 paisa TTS
  - Own GPUs — want to self-host for cost and latency
  - Year 1: 5,000 concurrent. Year 3: 30,000 concurrent.
  - Multi-vendor approach (Deepgram, Soniox, ElevenLabs tested alongside us)
  - Apoorv committed to pricing (API + on-prem) in 24-48 hours
  - Apoorv offered forward-deployed engineer (Pratirath already engaged)
  - Both sides will be at AI Summit Delhi Feb 17-20 — in-person meetup planned
  - Karan: "Don't look at us as customer, look at us as distribution"
  - Apoorv: "You're not a typical customer to me... I understand what you're saying"

---

## Competitive Positioning (Updated)

| Provider | Product | Acefone's Experience | Threat Level |
|----------|---------|---------------------|-------------|
| **Deepgram** | STT | "Good friendship, good rates" — established relationship | 🔴 High for STT |
| **Soniox** | STT | "Doing a great job" — in talks for on-prem on Acefone's GPUs | 🔴 High for STT |
| **ElevenLabs** | TTS | "Amazing voice" but "when they look at cost..." — too expensive | 🟢 Low (priced out) |
| **Smallest** | STT + TTS | Actively testing 2 weeks. Quality validated. Price is the question. | We're in the game |

> Key: Deepgram and Soniox are the real STT competition. On TTS, ElevenLabs is out on price. If we can get close to their TTS target, we may win TTS. STT is harder — Deepgram has an established relationship with good rates.

---

## Strategic Notes

### The Distribution Value Proposition
Karan explicitly positioned this as distribution, not just a customer:
- 40 direct salespeople will sell voice bots
- Telco JV partners have ~500 field sales reps
- Combined access to 45,000 accounts
- 80 voice bot companies already on their streaming platform
- If Smallest is embedded in their platform, every deal they close = our revenue

### The Price Reality
- They want TTS at 20 paisa. Our cheapest is 45 paisa.
- Their entire AI stack budget is 40-50 paisa. Our TTS alone nearly equals that.
- This is the India CCaaS market — not US SaaS margins. Per-seat revenue is ₹800-1000/month vs $50-75 in US.
- If we can't get close to their number, they'll go Soniox for STT and either build TTS or find a cheaper provider.

### Possible Paths Forward

**1. On-prem model license on their GPUs**
Since they own GPUs, strip out infra margin entirely. Price a per-GPU or per-concurrency license. At high utilization, effective per-minute could approach their target. This is the most likely path.

**2. Custom partnership tier**
Below Enterprise, justified by distribution value. Requires volume commitment. Risk: sets a precedent for other Indian partners.

**3. Win on STT, compete on TTS**
Our STT at Enterprise (₹0.045/min) is very competitive. If they use Deepgram at similar rates, we're in the ballpark. TTS is the harder fight — consider a loss-leader approach to get embedded.

**4. Bundle Electron (future)**
Apoorv mentioned Electron (their LLM, 6 months out) and Speech-to-Speech (end of FY). If we can offer STT + TTS + LLM as a bundle at a combined rate that hits their 40-50 paisa target, that's a differentiated play no one else can offer.

### Apoorv's Key Statements on Call
- Positioned on-prem threshold at ~₹1.5 lakh/month ($1,700/mo)
- "Per-minute nuances. I can figure out a cheaper per-minute call cost for you on TTS/STT."
- "I am aligned to partnering with you. I am aligned to commercial benefits for both sides."
- "If you had a goal of 450M agent-less calls across next three years, I would love to be a chief architect in that goal."
- Mentioned RingCentral (on-prem deployment, transcription + AI = all Smallest), Vonage, Five9, Cisco partnerships as credibility signals
- Mentioned Electron (~6 months) and Speech-to-Speech (end of FY)

### Karan's Key Statements on Call
- "Don't just look at us from a customer standpoint, look at us from a distribution standpoint"
- "We will tell people this is Smallest" (co-branded, not white-label)
- Revenue: ₹350 Cr at 75% gross margin
- Year 1: 5,000 concurrent. Year 3: 30,000 concurrent.
- 40% of natural traffic transitioning to AI over 3 years
- "GPU costs don't worry me" — has own inventory
- Wants to meet at AI Summit Delhi Feb 17-20

---

## Action Items

### Immediate (by Feb 13)
- [ ] **Apoorv** — Send pricing proposal: API tiers + on-prem licensing model
- [ ] **Harsh** — Model on-prem license pricing scenarios that can approach 20 paisa effective TTS rate
- [ ] **Pratirath** — Get Acefone to test STT (Pulse) more seriously (only 34 requests so far)
- [ ] **Pratirath** — Support Acefone on integration; they may be making assumptions without asking

### Short-term (by Feb 17 — AI Summit)
- [ ] **Apoorv** — Prepare for in-person meeting with Karan at AI Summit Delhi
- [ ] **Team** — Get Acefone to test Hindi/regional languages (100% English so far)
- [ ] **Acefone** — Send their on-prem estimation (throughput, concurrency needs, burst patterns)

### Medium-term
- [ ] Evaluate if Electron bundle (STT + TTS + LLM) at combined 40-50 paisa is viable
- [ ] Submit ACE opportunity once commercial terms are closer
- [ ] Explore whether Acefone's telco JV distribution can be leveraged for other Smallest customers

---

## Source References
- **Feb 11, 2026** — Deep-dive call transcript: "Deep-Dive Exploration on voice AI | Acefone x Smallest AI" (~55 min)
- **Feb 10, 2026** — Internal handoff email from Divyanshu Pandey
- **Feb 10, 2026** — Slack conversation: Tausif ↔ Harsh (3:50-6:21 PM)
- **Feb 10, 2026** — Platform usage data: ClickHouse + MongoDB
- Pricing reference: `/client-context/smallest/pricing-technical-specs.md`
