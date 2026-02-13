# GreyLabs AI - Client Context

**Last Updated:** 2026-02-09
**Deal Owner:** Apoorv Sood (GTM), Harsh Jain (Commercials), Yash Ghelani (Technical)
**Stage:** **EXPANSION - In-Person Meeting Done, Quote Pending**
**Priority:** 🔴 **HIGH - Large Volume On-Prem Deal, Quote Urgently Needed**

---

## TL;DR

| Detail | Value |
|--------|-------|
| **Company** | GreyLabs AI (legal entity: AHG Technologies Pvt Ltd) |
| **What** | Massive on-prem STT + TTS buyer for voice AI platform |
| **Volume** | 80L–1.5 Cr+ mins/month combined (STT batch + streaming + TTS) |
| **Growth** | 20% MoM projected |
| **Existing Contract** | $10,000 annual TTS-only (Lightning V2), $538 used, $9,462 remaining |
| **New Scope** | Pulse STT (batch + streaming) + Lightning v3.1 TTS, all on-prem |
| **Current Stack** | Deepgram STT, Sarvam STT, Cartesia TTS, ElevenLabs TTS (fallback) |
| **Deployment** | On-prem (L4/L40S GPUs) |
| **Key Decision Maker** | Raj Sanghavi (COO & Co-founder) |
| **Next Step** | Share commercial quote, then contracting |

---

## Company Overview

| Field | Detail |
|-------|--------|
| **Company** | GreyLabs AI |
| **Legal Entity** | AHG Technologies Private Limited |
| **Industry** | Voice AI Platform / Conversational AI |
| **HQ** | Mumbai, India (Powai, Hiranandani Gardens) |
| **Website** | greylabs.ai |
| **Type** | Platform Builder — Voice AI Infrastructure Buyer |
| **Key People** | Aman Goel (CEO/Director), Raj Sanghavi (COO/Co-founder) |

---

## Key Contacts

| Name | Role | Email | Notes |
|------|------|-------|-------|
| **Raj Sanghavi** | Co-founder & COO | raj@greylabs.ai | Primary commercial contact, +91 9820477562 |
| **Aman Goel** | CEO / Director | aman@greylabs.ai | Signed existing contract, +91 7905358546 |
| **Devashish** | Technical Lead (assumed) | — | Involved in STT/TTS evaluation and testing |
| **Shreyas** | Team member | — | On email threads |

### Smallest Team Involved

| Name | Role | Involvement |
|------|------|-------------|
| **Apoorv Sood** | GTM Lead | Relationship owner, visited office Feb 5 |
| **Harsh Jain** | Commercials | Pricing quote and contracting |
| **Yash Ghelani** | Technical | MOM, testing coordination, feedback loop with Devashish |
| **Akshat Mandloi** | Founder | Original relationship, shared benchmarks Nov 2025 |
| **Diksha Singh** | Account Manager | Named on existing contract |

---

## Existing Contract (Order Form 237871)

| Field | Value |
|-------|-------|
| **Effective Date** | June 24, 2025 (on payment) |
| **Type** | Annual On-Premise Enterprise Plan - Proxy Billing |
| **Term** | 12 months |
| **Total Committed** | $10,000 (INR 9,00,000 @ ₹90/USD) |
| **Product** | Lightning V2 Text-to-Speech only |
| **Used** | $538.35 |
| **Remaining** | **$9,461.65 unused** |
| **Payment** | Yearly, INR |
| **Voice Clones** | 15 allowed at any time |

### Existing Rate Card

**Cloud:**
| Model | USD/min | INR/min |
|-------|---------|---------|
| Lightning V2 | $0.01 | ₹0.87 |
| Lightning Large | $0.01 | ₹0.87 |
| Lightning | $0.01 | ₹0.87 |

**On-Prem:**
| Model | USD/min | INR/min |
|-------|---------|---------|
| Lightning V2 | $0.006 | ₹0.50 |
| Lightning Large | $0.006 | ₹0.50 |
| Lightning | $0.006 | ₹0.50 |

**Overage (On-Prem):**
| Model | USD/min | INR/min |
|-------|---------|---------|
| Lightning | $0.01 | ₹0.87 |
| Lightning Large | $0.01 | ₹0.87 |
| Lightning V2 | $0.01 | ₹0.97 |

**Why Low Usage:** V2 performance was not sufficient for their production needs. Now evaluating latest models (Pulse STT + Lightning v3.1 TTS).

---

## Volume Estimates (Shared by Raj, Feb 6, 2026)

| Product | Monthly Volume | Annual Equivalent | Notes |
|---------|---------------|-------------------|-------|
| **Batch STT** | 50L – 1 Cr mins | 6 Cr – 12 Cr mins/yr | High volume batch processing |
| **Real-time STT** | 15L – 25L mins | 1.8 Cr – 3 Cr mins/yr | Streaming transcription |
| **TTS** | 15L – 25L mins | 1.8 Cr – 3 Cr mins/yr | Voice synthesis |
| **Total** | **80L – 1.5 Cr mins/mo** | **9.6 Cr – 18 Cr mins/yr** | |
| **Growth** | **20% MoM** | Compounding | All product lines |

### Volume in Absolute Numbers

| Product | Low Estimate (Monthly) | High Estimate (Monthly) |
|---------|----------------------|------------------------|
| Batch STT | 5,000,000 mins | 10,000,000 mins |
| Real-time STT | 1,500,000 mins | 2,500,000 mins |
| TTS | 1,500,000 mins | 2,500,000 mins |
| **Total** | **8,000,000 mins** | **15,000,000 mins** |
| **Annual** | **96,000,000 mins** | **180,000,000 mins** |

---

## Current Tech Stack & Competitive Landscape

### Speech-to-Text
| Provider | Use Case | Deployment | Notes |
|----------|----------|------------|-------|
| **Deepgram** | English, Hindi | On-prem | Primary STT |
| **Sarvam** | Multilingual (Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali) | On-prem | Regional languages |

### Text-to-Speech
| Provider | Use Case | Deployment | Notes |
|----------|----------|------------|-------|
| **Cartesia** | Primary TTS | On-prem | Main engine |
| **ElevenLabs** | Fallback TTS | Selective | Used selectively |

### Key Evaluation Criteria
- **STT:** Streaming accuracy, concurrency on commodity GPUs (L4/L40S), noise tolerance, keyword boosting
- **TTS:** Naturalness, batch vs streaming behavior, artifact-free output
- **General:** Turn detection / interruptions, smart VAD, Deepgram Flux-like capabilities

---

## Product Evaluation Status

### Pulse STT
| Aspect | Status |
|--------|--------|
| Batch feedback | Shared by GreyLabs, being addressed |
| Streaming eval | Pending — will use structured test script |
| English/Hindi | Production-ready |
| Top 10 Indian languages | Available |
| Concurrency | ~100 parallel streams on single L4 |
| Latency | ~180 ms |
| Batch speed | ~1 hour audio in ~8 seconds |

**Pulse STT Roadmap (shared with GreyLabs):**
| Timeline | Feature |
|----------|---------|
| Next week (from Feb 7) | Improved Indian noun/domain-specific term recognition |
| 1st week March | Improved diarization |
| 3rd week March | Summarization, intent detection, topic detection |
| 2nd week April | Further Indic language improvements (South Indian first) |

### Lightning v3.1 TTS
| Aspect | Status |
|--------|--------|
| Early testing | Shows improved naturalness |
| Artifacts | Some last-mile artifacts noted, fixable with iteration |
| Batch vs streaming | Needs clarification for GreyLabs |
| English, Hindi, Tamil | Production-ready |
| Target concurrency | ~20 streams at ~200 ms latency on L40S |

**Lightning v3.1 TTS Roadmap (shared with GreyLabs):**
| Timeline | Feature |
|----------|---------|
| End of Feb | Instruction control for English, Hindi, Tamil |
| End of March | Additional Indian languages (South Indian + Marathi) |

---

## Engagement Timeline

### November 2025 — Initial Contact
- **Nov 10:** Akshat shared model benchmarks, performance docs, and roadmap with Raj
- **Nov 11:** Raj acknowledged, agreed to review internally
- Enabled Lightning ASR and Lightning V3 on GreyLabs account for 2-week trial
- Mentioned Lightning V2.5 API coming in 2 weeks, and Electron SLM

### June 2025 — Existing Contract
- **Jun 23-24:** Order Form 237871 signed ($10,000 annual, Lightning V2 TTS on-prem)
- Low usage due to V2 performance not meeting production bar

### February 2026 — Expansion Push
- **Feb 5:** Apoorv + Yash visited GreyLabs office in person
  - Detailed technical discussion on STT + TTS
  - Volume estimates shared by Raj
  - Both sides aligned on next steps
- **Feb 6:** Raj sent follow-up email with volume estimates and action items
  - Asked about utilizing existing unused credits ($9,461.65)
- **Feb 6:** Apoorv responded — committed to commercials quote and partnership acceleration
- **Feb 7:** Yash sent detailed MOM with full meeting notes and roadmap

---

## Commercial Alignment Points (from MOM)

| Point | Detail |
|-------|--------|
| **Preferred Structure** | Annual commitment with monthly billing and overage |
| **Support SLAs** | Key decision factor |
| **INR Billing** | Preferred |
| **AWS/APN Procurement** | Potential benefit — exploring AWS billing path |
| **Existing Credits** | Raj asked how to utilize remaining $9,461.65 |

---

## Next Steps

### From Smallest (Immediate)
- [ ] **[Harsh + Apoorv]** Share commercial quote for on-prem STT + TTS at stated volumes
- [ ] **[Yash]** Share consolidated response:
  - Streaming STT evaluation plan and test script
  - Clarification on TTS batch vs streaming behavior
  - Timelines for Lightning v3.1 gap fixes (including emotion control)
- [ ] Address existing credit utilization ($9,461.65)
- [ ] Post alignment — work on contracting

### From GreyLabs (Pending)
- [ ] Share internal benchmark results
- [ ] Share detailed Lightning v3.1 issues (audio files + artifacts)
- [ ] Share GPU infrastructure details (models, providers)
- [ ] Confirm language mix by volume and peak streaming concurrency expectations
- [ ] Share relevant AWS/APN details for billing exploration

---

## Risk Assessment

### Low-Medium Risk
- **V2 underperformance history:** Low usage on existing contract may create skepticism — mitigate by showcasing v3.1 / Pulse improvements clearly
- **Multi-vendor incumbent:** Deepgram, Sarvam, Cartesia all entrenched — need to win on quality + cost + support
- **Roadmap dependency:** Some features (South Indian languages, emotion control) still on roadmap

### Mitigations
1. In-person meeting built strong trust and alignment
2. Volume estimates are concrete and large — both sides incentivized
3. 20% MoM growth means long-term value compounds
4. Annual commitment + monthly billing structure matches their preference
5. AWS/APN billing path adds procurement convenience

---

## Strategic Importance

### Why GreyLabs Matters
1. **Volume:** 80L–1.5 Cr mins/month is one of the largest on-prem deals in pipeline
2. **Multi-Product:** STT (batch + streaming) + TTS — full stack deal
3. **Growth:** 20% MoM compounding = massive ARR within 12 months
4. **Platform Builder:** Their customers indirectly become our volume
5. **On-Prem Reference:** Validates Smallest's on-prem deployment at scale
6. **Multilingual:** Tests our Indian language breadth (top 10 languages)
7. **Competitive Displacement:** Opportunity to replace Deepgram, Sarvam, Cartesia, and ElevenLabs

---

## Source References

- **Order Form 237871:** Existing contract (Awaaz Labs x AHG Technologies), signed Jun 24, 2025
- **Email Thread:** Raj ↔ Apoorv ↔ Yash ↔ Akshat, Feb 6-7, 2026
- **MOM by Yash Ghelani:** Feb 7, 2026 (detailed meeting notes from Feb 5 office visit)
- **Original Outreach:** Akshat → Raj, Nov 10, 2025 (benchmarks and model access)

---

**🎯 TARGET: Close expanded on-prem deal by end of Feb 2026**
**💰 POTENTIAL: ₹3-6 Cr+ ARR at initial volumes, growing 20% MoM**
**🏗️ TYPE: Platform builder (voice AI infrastructure)**
**🌏 LANGUAGES: English, Hindi + top 10 Indian languages**
**⚡ PRODUCTS: Pulse STT (batch + streaming) + Lightning v3.1 TTS**
**🤝 ADVANTAGE: In-person trust built, concrete volume estimates, mutual alignment**
