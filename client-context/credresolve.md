# CredResolve - Client Context

**Last Updated:** 2026-02-05 (Post sales call with Harsh)
**Deal Owner:** Harsh Jain (Handoff from Divyanshu complete)
**Stage:** **POC SCOPING - Follow-up Scheduled Wed Feb 12**
**Priority:** 🔥 **HIGH - 1 Lakh Calls/Day Production Target**

---

## TL;DR (Updated Post Feb 5 Sales Call)

| Item | Details |
|------|---------|
| **Company** | CredResolve - Collections platform startup (Gurgaon + Tirupati offices) |
| **Primary Contact** | Manoj Kumar Honhaga (Product) - prefers WhatsApp |
| **Signing Authority** | **Vijay Kumar (Co-founder)** |
| **Use Cases** | Pre-due reminders + Overdue collections |
| **Languages** | Hindi/English (enterprise-grade), Tamil (90%), Telugu/Kannada (needs refinement) |
| **Current Setup** | In-house call center, 200-300 human agents across 2 offices |
| **POC Volume** | **10,000 calls/day × 2 weeks** (after 1 week build) |
| **Production Target** | **1 lakh calls/day** |
| **Avg Call Duration** | 30-40 seconds |
| **Pricing Discussed** | ₹3-6/min; floor ~₹3/min at scale; wants 30-sec pulse |
| **Critical Requirement** | **Transcript accuracy** - drives downstream workflows (field visits, legal notices) |
| **Next Meeting** | **Wed Feb 12, 3 PM** - with co-founders |
| **Telco Complexity** | 1600 series - banks own numbers, integration handshake needed |

---

## Company Overview

- **Company:** CredResolve (Legal Entity: Credhas Technology Private Limited)
- **Industry:** AI-Driven Debt Collection Platform (Fintech/BFSI)
- **Location:** Gurugram, India
- **Type:** Seed-Stage Startup (Founded August 2023)
- **Founders:** Balaji Koustubha, G Prashant Kumar, Vijay Kumar
- **Funding:** $1.1M seed (March 2025) led by UNLEASH Capital Partners + CDM Capital; $100K angel (Feb 2024)
- **ARR:** ~$1M (as of funding announcement)
- **Customers:** 20+ lenders including Slice, banks, NBFCs, fintechs, ARCs
- **Current Operations:** In-house call center with 200-300 support executives
- **Country:** India
- **Deal Type:** Direct

**What They Do:**
- Automates debt recovery workflows for banks, NBFCs, fintechs, ARCs
- AI-powered notices, borrower outreach, and analytics
- RBI compliance built-in

**Business Model (Clarified Feb 5):**
- CredResolve is a **layer in the middle** - they serve banks/NBFCs as clients
- Have in-house call centers (Gurgaon + Tirupati), was planning more offices
- **New strategy:** Replace human agents with voice AI instead of opening more offices
- **Smallest is a sub-vendor** to CredResolve in this model
- Pricing sensitivity is high because they need margin on top

**Key quote (Manoj):**
> "We are also like in a layer. So pricing is very important for me."

---

## What They're Evaluating

### Product
- **Voice AI for Collections** - Pre-due and overdue calling

### Use Cases
- **Pre-Due Reminders:** EMI due date reminders, capture PTP (Promise to Pay)
- **Overdue Collections:** Payment recovery calls, disposition capture
- **Self-Serve Platform:** Want to build and iterate agents themselves

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Est. MRR** | **$8K-15K** (at 1 lakh calls/day production) |
| **ARR Potential** | **$100K-180K** |
| **Deal Type** | Direct (Smallest as sub-vendor to CredResolve) |
| **POC Volume** | 10,000 calls/day × 2 weeks |
| **Production Target** | 1 lakh calls/day |
| **Avg Call Duration** | 30-40 seconds |
| **Deployment** | Cloud (on-prem models possible, SaaS layer cloud-only) |

### Pricing Discussion (Feb 5 Call)

| Scenario | Price Quoted |
|----------|--------------|
| With Smallest telephony | ₹3.5-6/min |
| High volume (6-7 lakh min/month) | Under ₹4/min |
| BYOT (Bring Your Own Telephony) | Shave ₹0.4-0.5 off |
| **Floor at scale** | ~₹3/min |

**Manoj's Ask:**
- Wants **30-second pulse** (Smallest default is 60-second)
- Asked "what's the lowest you can go" multiple times
- Pricing is a **gating factor** for decision

**Key quote (Manoj):**
> "The lowest is 3 rupees, right? On a 30 second pulse... I'm calculating because I like to also get an approximate range."

---

## Key Contacts

| Name | Role | LinkedIn | Notes |
|------|------|----------|-------|
| **Manoj Kumar Honhaga** | Product | [linkedin.com/in/manojhonhaga](https://www.linkedin.com/in/manojhonhaga/) | Primary POC, evaluates product, prefers WhatsApp |
| **Vijay Kumar** | Co-founder | - | **Signing authority** for contracts |

### Manoj's Background (Confirmed Feb 5 Call)
- **Education:** NIT Warangal alumnus
- **Voice AI Experience:** Co-founded Vocallabs.ai with friends; left due to "things that happened with founders"
- **Why at CredResolve:** Joined specifically because they needed someone in voice AI / agentic AI
- **Deep Knowledge:** Understands latency issues, spent "one or two months" debugging at previous company
- **Style:** Direct, values speed, prefers WhatsApp over email

**Key quote (Manoj on joining CredResolve):**
> "They need something in agentic AI, agent voice. So that's why I joined it."

### Founders
| Name | Role | Notes |
|------|------|-------|
| Balaji Koustubha | Co-founder | |
| G Prashant Kumar | Co-founder | |
| **Vijay Kumar** | Co-founder | **Signing authority** |

**Decision Process (Clarified Feb 5):**
- Manoj evaluates the product and recommends
- Co-founders CC'd on all emails / added to WhatsApp group
- **Vijay Kumar is the signing authority**
- "Direct co-founders, no one else in between"

---

## Use Case Details

### Use Case 1: Pre-Due Calling (Preview)

**Flow:**
```
1. AI calls customer before EMI due date
2. "Hello sir, am I speaking with [name]?"
3. "Your EMI is due on [date]. Can you keep this money ready?"
4. If YES → End call
5. If NO but willing → Capture promised date (PTP disposition)
6. If NO and not willing → Capture reason for non-payment
```

**Characteristics:**
- Higher call duration (customers willing to engage)
- Better pickup rates
- More conversational

### Use Case 2: Overdue Calling (Collections)

**Flow:**
- Similar structure to pre-due
- Customers less likely to pick up
- Quick hang-ups when they hear company name or loan amount

**Characteristics:**
- Lower pickup rates
- Customers avoid calls once they recognize collection context
- Need multiple retry attempts (3-4 per contact)

---

## Volume & Scale

### POC Scope (Agreed Feb 5)

| Parameter | Value |
|-----------|-------|
| **POC Duration** | 3 weeks total |
| **Week 1** | Agent build (with handholding) |
| **Weeks 2-3** | Live calling |
| **Daily Volume** | Start with 10,000 calls/day |
| **Can Scale To** | 30,000-40,000 calls/day during POC |
| **Avg Call Duration** | 30-40 seconds |

### Production Target

| Metric | Value |
|--------|-------|
| **Target daily calls** | **1 lakh calls/day** |
| **Current human agents** | 200-300 executives (Gurgaon + Tirupati) |
| **Office expansion** | Was planning more offices, now replacing with AI |

**Key quote (Manoj):**
> "Suppose we are taking 1 lakh calls a day. So what will be the pricing for that?"

---

## Language Requirements

### The Challenge
- Clients **cannot segregate callers by language** upfront
- Agent must **auto-detect and switch** based on how customer speaks
- No language tags in the data they receive

**Key quote (Manoj):**
> "Clients can't give the data in the form of languages. They can't segregate the callers in the form of which language the customer will speak."

### Smallest's Readiness (Harsh's Honest Assessment - Feb 5)

| Language | TTS Readiness | STT Readiness |
|----------|---------------|---------------|
| **Hindi** | ✅ Enterprise-grade | ✅ 2x better than Deepgram (6.3% WER vs 14%) |
| **English** | ✅ Enterprise-grade | ✅ 2x better than OpenAI (4.5% WER vs 10-11%) |
| **Tamil** | 🟡 90% there | ✅ Better than Deepgram & Assembly |
| **Telugu** | 🟡 Needs refinement | ✅ State of the art |
| **Kannada** | 🟡 Needs refinement | ✅ Covers top 10 Indian languages |

**Key quote (Harsh):**
> "Hindi, English at our end is enterprise grade. It can handle interruption, background noise. Tamil is getting there, maybe 90%. Telugu, Kannada need a little bit more refinement because it's the most colloquial."

---

## Pain Points (with Other Vendors)

| Issue | Details |
|-------|---------|
| **1. Poor Tonality** | Voice doesn't sound human-like |
| **2. Inaccurate Dispositions** | Disposition matrices not captured properly |
| **3. Slow Bot Development** | "Bot making takes a lot of time" |

**Key quote (Manoj):**
> "First is the tonality and the human kind of thing. And second one is like we're not getting the correct outputs from the call."

---

## Technical Requirements

| Requirement | Details |
|-------------|---------|
| **Transcript Accuracy** | 🔴 **CRITICAL** - drives all downstream workflows |
| **Dispositions** | Must be accurate; have in-house analyzers that depend on it |
| **Language Switching** | Auto-detect and switch mid-call (no language tags in data) |
| **Platform Access** | Self-serve agent building (with initial handholding) |
| **1600 Series Numbers** | Complex - banks own numbers, need integration handshake |
| **On-Prem Option** | Models can be on-prem; SaaS/dashboard cloud-only (hybrid) |

### Why Transcript Accuracy is #1 Priority

**CredResolve has in-house transcript analyzers** that drive downstream actions:

```
Transcript → Disposition → Action
                           ├── If "not willing to pay" → Field visit
                           ├── If legal escalation needed → Legal notice
                           └── If PTP captured → Follow-up scheduled
```

**Key quote (Manoj):**
> "We have in-house transcript analyzers... fairly advanced system. The actions which happen after the call depend fairly on the transcripts."
> "If the transcripts are coming wrong, the output is also coming wrong, and my other flows are getting [broken]."

### 1600 Series Number Complexity

**The Problem:**
- Banks are the principal entity and own the 1600 numbers
- CredResolve works with multiple banks
- Same bank may work with multiple collection agencies
- CredResolve needs to integrate numbers they don't control

**Smallest's Position:**
- Already done this with Kogta Financial (5 numbers via Plivo/Tata)
- Work in tandem with Plivo and Tata
- Need follow-up call to figure out handshake workflow for CredResolve's model

**Self-Serve (Updated Feb 5):**
> "For few days we'll be needing the handholding part for the agents." - Manoj

- Initial handholding needed, then self-serve
- Dispositions: "Use cases are limited... if one disposition is made, we'll be using that disposition only"
- Harsh committed to helping with disposition tuning

---

## BANT Assessment (Updated Feb 5)

| Factor | Status | Notes |
|--------|--------|-------|
| **Budget** | 🟡 Price-sensitive | Sub-vendor model; needs margin; pushing for ₹3/min floor |
| **Authority** | ✅ Identified | Vijay Kumar (co-founder) is signing authority |
| **Need** | ✅ Immediate | Replacing call centers with AI; exploring multiple vendors |
| **Timeline** | 🟡 Vague | "As fast as possible"; pricing is gating factor |

---

## POC Evaluation Criteria (Updated Feb 5)

From Manoj:
> "Banks are very strict with these things. Based on these parameters we'll select."

| Priority | Criteria | Why It Matters |
|----------|----------|----------------|
| 1 | **Transcript accuracy** | Drives all downstream workflows |
| 2 | **Language switching** | Auto-detect, no language tags available |
| 3 | **Agent behavior / LLM reasoning** | How the agent handles conversations |
| 4 | **Disposition accuracy** | Correct output capture |

**Success Metrics (to be defined):**
- They'll also test success metrics since replacing call centers
- Need to compare AI performance vs human agent benchmarks

---

## Engagement Timeline

| Date | Event | Outcome |
|------|-------|---------|
| **Feb 5, 2026 (AM)** | Discovery call (Divyanshu × Manoj) | Initial requirements gathered |
| **Feb 5, 2026 (PM)** | Sales call (Harsh × Manoj) | POC scope, pricing, next steps agreed |
| **Feb 5, 2026** | Post-call: Send email pack + platform access | PENDING |
| **Wed Feb 12, 3 PM** | Follow-up call with co-founders | SCHEDULED |
| **Post Feb 12** | POC kickoff (Week 1: Agent build) | PLANNED |
| **Weeks 2-3** | POC calling (10K calls/day) | PLANNED |

---

## Competitive Context

**Current Status (Feb 5):**
> "We're exploring all the options. No one is finalized. We are looking for the best option."

- Evaluating multiple vendors including Smallest
- Had poor experiences with others (transcript accuracy, tonality)
- Mentioned exploring "Rime" (has open SLM for dispositions)

**Smallest's Differentiators (Highlighted by Harsh):**

| Differentiator | Details |
|----------------|---------|
| **Full-stack** | Own TTS, STT, SLM, working on speech-to-speech |
| **Research-first** | Researchers across top US labs; advisor worked with Yann LeCun |
| **No third-party hops** | Lower latency, can fine-tune, can deploy on-prem |
| **NBFC Reference** | Kogta Financial: 5-day POC → scaled; 80-90K calls/day; 2.5x efficiency improvement |
| **WER Benchmarks** | 2x better than Deepgram/OpenAI on Indian accents |
| **Compliance** | Architecture built for scale and compliance; 1600 series already done |

**Key quote (Harsh on differentiation):**
> "The more hops you add, the more third-party layers, the more latency... At our end, we have the exact opposite approach. We are full stack."

---

## Next Steps (Post Feb 5 Call)

### Smallest's Commitments

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Send email pack with WER benchmarks, documentation | Harsh | PENDING |
| 2 | Give platform access (7 days trial) | Harsh | PENDING |
| 3 | Share collections agent templates | Harsh | PENDING |
| 4 | Create WhatsApp group with stakeholders | Harsh | PENDING |
| 5 | Schedule Wed Feb 12, 3 PM call | Harsh | PENDING |
| 6 | Bring leadership to Feb 12 call | Harsh | PENDING |

### CredResolve's Commitments

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Confirm calendar availability for Feb 12 | Manoj | PENDING |
| 2 | Add co-founders to WhatsApp group / email thread | Manoj | PENDING |
| 3 | Share use cases and buckets details | Manoj | Next call |
| 4 | Try platform, create test agent | Manoj | Before Feb 12 |

### For Feb 12 Call
- Co-founders from CredResolve (including Vijay - signing authority)
- Leadership from Smallest
- Topics: Use case buckets, client complexity, POC terms, final pricing

---

## Meeting Notes

### Feb 5, 2026 (PM) - Sales Call (Harsh × Manoj)

**Attendees:**
- Smallest: Harsh Jain, Divyanshu Pandey
- CredResolve: Manoj Kumar Honhaga

**Key Outcomes:**

1. **Manoj's background confirmed** - Was at Vocallabs (voice AI), left due to founder issues, joined CredResolve for their agentic AI needs

2. **Transcript accuracy is THE critical requirement** - They have in-house analyzers; downstream workflows depend on it

3. **Language switching required** - No language tags in data, agent must auto-detect

4. **POC scope agreed** - 3 weeks (1 week build + 2 weeks calling), 10K calls/day

5. **Pricing discussed** - ₹3-6/min range; floor ~₹3/min at scale; Manoj pushed for 30-sec pulse

6. **Decision maker identified** - Vijay Kumar (co-founder) is signing authority

7. **1600 numbers** - Complex; banks own numbers; need follow-up call on handshake

8. **Next meeting scheduled** - Wed Feb 12, 3 PM with co-founders

**Harsh's Commitments:**
- Send email pack with WER benchmarks
- Give 7-day platform access
- Share collections templates
- Create WhatsApp group

---

### Feb 5, 2026 (AM) - Discovery Call (Divyanshu × Manoj)

**Key Quotes:**

**On Scale:**
> "The plan is to trigger at least 1 to 1.5 or 2 to 3 lakhs calls a day." - Manoj

**On Pain Points:**
> "First is the tonality and the human kind of thing. And second one is like we're not getting the correct outputs from the call." - Manoj

**On Self-Serve:**
> "We want to build our own agents... customers will give a real time feedback." - Manoj

**On Timeline:**
> "We want to do this as fast as possible... the timelines are like we two are a startup." - Manoj

---

## Strategic Importance

### Why This Matters
1. **Sub-Vendor Model:** CredResolve serves 20+ lenders; win here = access to all their clients
2. **Volume:** 1 lakh calls/day production target; 30-40K during POC
3. **Collections Vertical:** Proven use case (Kogta Financial reference lands well)
4. **Transcript Accuracy Showcase:** Their #1 pain; our WER benchmarks are 2x better
5. **Competitive Displacement:** Still evaluating; no one finalized
6. **Startup Speed:** Direct to co-founders; no middle layers

### Expansion Potential
- 20+ lenders they already serve
- Each lender could be separate agent deployment
- Collections is recurring, high-volume
- If transcript accuracy proves out → strong stickiness

### Reference Value
- If successful: "We power CredResolve's collections for 20+ banks/NBFCs"
- Validates sub-vendor / platform model

---

## Risk Assessment (Updated Feb 5)

### Active Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Pricing pressure** | 🔴 High | Manoj asked "lowest" 3x; need to justify value, not just cost |
| **30-sec pulse ask** | 🟡 Medium | Confirm if Smallest can do this; model both scenarios |
| **Regional language readiness** | 🟡 Medium | Tamil 90%, Telugu/Kannada need refinement; be honest |
| **1600 number complexity** | 🟡 Medium | Banks own numbers; need technical call to figure handshake |
| **Timeline undefined** | 🟡 Medium | "Depends on pricing"; push for hard date in Feb 12 call |

### Mitigations Applied
- ✅ Signing authority identified (Vijay Kumar)
- ✅ POC scope agreed (3 weeks, 10K calls/day)
- ✅ Platform access being given (7 days trial)
- ✅ Kogta Financial reference shared (5-day POC to scale)

---

## Communication Preferences

| Channel | Preference |
|---------|------------|
| **WhatsApp** | Preferred for quick conversations |
| **Email** | Required for deck sharing, formal docs |

**Key quote (Manoj):**
> "If we can use WhatsApp, I think it's the fastest one."

---

## Source References
- **Discovery Call:** Divyanshu Pandey × Manoj Kumar (Feb 5, 2026 AM)
- **Sales Call:** Harsh Jain × Manoj Kumar (Feb 5, 2026 PM)
- **Referral Source:** Sam (forwarded email)
- **LinkedIn Research:** Perplexity + web search (Feb 5, 2026)
- **Company Research:** IPO Platform, Tracxn, BFSI Elets (funding announcements)

---

**🎯 NEXT: Wed Feb 12, 3 PM - Call with co-founders**
**📧 ACTION: Send email pack + platform access TODAY**
**💼 USE CASE: Collections (pre-due + overdue)**
**📞 POC: 10K calls/day × 2 weeks (after 1 week build)**
**🚀 PRODUCTION: 1 lakh calls/day target**
**🌐 LANGUAGES: Hindi/English ✅, Tamil 🟡, Telugu/Kannada 🟡**
**💰 PRICING: ₹3-6/min; floor ~₹3/min at scale**
**✍️ SIGNER: Vijay Kumar (co-founder)**
