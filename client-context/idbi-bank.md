# IDBI Bank - Client Context

**Last Updated:** Feb 8, 2026
**Deal Owner:** Harsh
**Stage:** Blocked / On Hold
**Priority:** 🔴 SPOC departed, no active internal champion

---

## Overview
| Field | Value |
|-------|-------|
| **Account Name** | IDBI Bank |
| **Industry** | Banking / Financial Services (Public Sector) |
| **Stage** | Blocked / On Hold (SPOC departed) |
| **Product Interest** | Atoms (Full-Stack Voice Agents), TTS, ASR, SLM |
| **Estimated MRR** | TBD (400 agents, 5K-10K calls/day potential) |
| **Lead Source** | Outbound (Divyanshu Pandey) |
| **Partner** | - |

---

## Company Overview

IDBI Bank is a major Indian public sector bank (formerly Industrial Development Bank of India). Key facts relevant to this engagement:
- Public sector bank with associated compliance and procurement requirements
- Two offices in Mumbai: **Navi Mumbai CBD Belapur** (where Anupam sits) and **Corporate office in Colaba**
- Has an existing SI (System Integrator) for deployments with defined scope of work
- Uses **Avaya** as their contact center / inbound solution
- 99% of call volume is **inbound**, 1-2% is collections/outbound

---

## Key Contacts

| Name | Role | Location | Status | Notes |
|------|------|----------|--------|-------|
| **Anupam Morang** | Former Head - CX, AI & BI/Analytics | Mumbai (CBD Belapur) | ⛔ **Separated from IDBI** | Was the primary SPOC. Previously at Bank of Baroda. Strong technical understanding. Suggested re-engaging IDBI via their telephony vendor (Avaya) or AWS. |

> **⚠️ KEY UPDATE (Feb 2026):** Anupam Morang has left IDBI Bank. He was the sole SPOC and internal champion. He noted that IDBI does **not have a specialized AI team**, making direct re-engagement difficult. His recommendation: approach IDBI through a **partner channel** — either their telephony vendor (**Avaya**) or **AWS**. A new internal contact needs to be identified before progressing.

---

## Contact Center Profile

| Metric | Value |
|--------|-------|
| **Inbound Agents** | ~400 |
| **Daily Call Volume** | 5,000 - 10,000 calls |
| **Avg Call Duration** | 3-4 minutes |
| **Inbound/Outbound Split** | 99% inbound / 1-2% collections |
| **Primary Languages** | Hindi (#1), English (#2) |
| **Regional Languages Needed** | South Indian (4 languages), Punjabi, Gujarati, Bengali |
| **Contact Center Platform** | Avaya |

---

## Meeting History

### Discovery Call: Feb 7, 2026
**Attendees (Smallest):** Harsh, Divyanshu Pandey
**Attendees (IDBI):** Anupam Morang

**Context:**
- Anupam read about Smallest's $8M funding in Economic Times - was impressed
- He meets 2-3 AI startups daily, very well-informed about the space
- Anupam was dialing in from Kolkata during the call

**Key Discussion Points:**

1. **Full-Stack Positioning Resonated**
   - Harsh explained the full-stack approach (own TTS, ASR, SLM, orchestration layer)
   - Differentiation from competitors who stitch together components from multiple providers → latency issues, dropped calls, can't deploy on-prem
   - Anupam understood and acknowledged the integration/latency problems with multi-vendor stacks

2. **On-Premise Deployment is Critical**
   - Anupam strongly prefers **fully on-premise** deployment (not even AWS VPC) — same as core banking apps
   - Concerned about cloud data security
   - Acknowledged GPU requirements will be needed regardless (on-prem or cloud)
   - Asked for GPU requirement estimates for production deployment based on their volume

3. **Production-Ready vs POC-Ready**
   - Anupam's key concern: most AI vendors stop at POC, very few are production-ready
   - Peers at other banks share the same experience — lots of POC, little production
   - Wants assurance that Smallest can go beyond POC to production floor

4. **SLM Technical Questions**
   - Asked about model parameters (7B-12B range?)
   - Asked whether model was built from scratch or fine-tuned from open-source (Hugging Face)
   - Asked about training infrastructure and how it was possible in 1.5 years
   - Harsh committed to getting back with accurate technical details via email

5. **Pricing / TCO is the First Gate**
   - Budget is the first step before anything else can proceed
   - Needs **Total Cost of Ownership** over 3-4 years
   - Wants at least 80-90% accurate estimates (±10-20% acceptable)
   - Asked about pricing model: token-based vs per-conversation vs per-minute
   - Harsh explained per-minute pricing for application layer, per-million-characters for TTS/ASR model licensing

6. **POC Approach Discussed**
   - Suggested carving out a specific process (e.g., debit card hot listing) and diverting production calls
   - Believes real POC must use production calls to gauge actual performance vs human agents
   - Collections POC would be simpler (CSV upload, no integration needed)
   - Inbound POC is more complex — requires SIP trunk, IVR integration, Avaya integration

7. **Production Rollout Timeline**
   - First process: 3-4 months
   - Full inbound rollout: ~1-1.5 years (iterative approach)
   - Social responsibility factor: can't make 400 agents jobless overnight — gradual transition
   - May start with non-Hindi/English processes where volumes are lower and risk is manageable

8. **References & Social Proof**
   - Harsh mentioned Paytm (30+ use cases, collections, merchant sales, customer support, sound box)
   - Also referenced RingCentral (ASR for post-call analytics), ServiceNow (TTS), MetLife
   - Make My Trip (customer support)
   - Mentioned top-3 global accuracy for TTS/ASR on open-source benchmarks

**Competitive Landscape (IDBI's Current Evaluations):**
| Vendor | Status |
|--------|--------|
| **Haptik** | In evaluation/discovery |
| **Yellow.ai** | In evaluation/discovery |
| **Salesforce AgentForce** | In evaluation/discovery |
| **Others** | Multiple startups being met (2-3 daily) |

**No vendor has completed a full production-grade POC with IDBI yet.**

---

## Use Cases of Interest

### Primary: Inbound Customer Support
- Debit card hot listing
- Information seeking / general queries
- Multiple processes across the contact center
- Multi-language support required (Hindi, English, regional)

### Secondary: Collections (Outbound)
- Small volume (1-2% of total)
- Simpler to deploy (CSV-based, no integration needed)
- Previous collections POCs with other vendors did not materialize well

---

## Technical Requirements

### Deployment
- **Strong preference:** Fully on-premise (private cloud, NOT public cloud)
- Same deployment model as core banking applications
- Has existing SI for deployments (separate scope, could be extended via change request)
- GPU requirements for on-prem are a key planning factor

### Integration Requirements
- Avaya contact center integration (SIP trunk, IVR, call diversion)
- CRM systems integration
- Data in/out pipeline for customer queries

### Compliance & Security
- Public sector bank — strict data security requirements
- Does not want data going to cloud
- On-prem deployment essential for compliance
- Smallest's CISO-first approach and PCI compliance noted positively

### Language Support
- Hindi (primary, highest volume — cannot risk disruption)
- English (secondary, high volume)
- Regional: Tamil, Telugu, Kannada, Malayalam, Punjabi, Gujarati, Bengali

---

## Pricing Discussion

| Topic | Details |
|-------|---------|
| **Budget Gate** | Pricing/TCO is the FIRST step before any further action |
| **TCO Horizon** | 3-4 years |
| **Accuracy Needed** | 80-90% estimate (±10-20% acceptable) |
| **Pricing Model Questions** | Token-based? Per-minute? Per-conversation? |
| **Scale Consideration** | Must handle spikes (e.g., campaign-driven call surges) |
| **GPU Costs** | Needs clarity on GPU requirements for on-prem production |

---

## Blockers & Challenges

1. **🔴 SPOC departed** — Anupam Morang has left IDBI. No replacement contact identified yet.
2. **🔴 No AI team at IDBI** — Anupam confirmed IDBI lacks a specialized AI team, making direct vendor engagement harder.
3. **Partner re-engagement needed** — Anupam's parting advice: go through Avaya (telephony vendor) or AWS to re-enter.
4. **Budget is the first gate** — nothing moves forward without indicative pricing/TCO
5. **On-prem GPU requirements** — needs concrete numbers for production deployment
6. **Public sector procurement** — longer cycles, more approvals
7. **Social responsibility** — gradual rollout needed, can't displace 400 agents overnight
8. **Previous vendor POCs failed** — skepticism about production readiness in the market
9. **Inbound complexity** — Avaya integration, SIP trunk, IVR required for meaningful POC
10. **Hindi/English are high-risk** — may need to start with lower-volume regional language processes

---

## Action Items

### Previous Action Items (Now On Hold — SPOC Departed)
- [x] ~~Share presentation deck~~ — Superseded by Anupam's departure
- [x] ~~Get back on SLM technical queries~~ — Superseded
- [x] ~~Share GPU requirement estimates~~ — Superseded
- [x] ~~Provide indicative pricing / TCO estimate~~ — Superseded
- [x] ~~Send calendar invite for in-person meeting~~ — Superseded

### New Action Items (Re-Engagement Strategy)
- [ ] Identify new SPOC at IDBI Bank (Anupam's replacement or CX/IT leadership)
- [ ] Explore **Avaya partnership channel** — can Smallest be positioned as a voice AI layer on top of Avaya's contact center platform at IDBI?
- [ ] Explore **AWS channel** — leverage AWS partnership to get introduced to IDBI's cloud/IT team
- [ ] Check if Divyanshu has any other contacts at IDBI Bank
- [ ] Monitor for IDBI Bank AI/digital transformation RFPs or public tenders

---

## Strategic Notes

### Current Situation (Post Anupam Departure)
1. **Deal is effectively paused** — Without Anupam, there is no internal champion or SPOC at IDBI.
2. **No AI team exists at IDBI** — This means any re-engagement needs a partner to drive the conversation internally.
3. **Partner-led re-entry is the recommended path** — Anupam explicitly suggested going through **Avaya** or **AWS** as the channel back in.
4. **Avaya angle is strong** — IDBI already uses Avaya for their contact center. Positioning Smallest as a voice AI enhancement to Avaya's platform could create a warm introduction.
5. **AWS angle** — If Smallest has an AWS partnership, leveraging that to get introduced to IDBI's IT/cloud leadership could work.
6. **Public sector timelines** — Even with a new contact, expect long procurement cycles. This is a longer-term opportunity.

### Original Strategic Notes (From Discovery Call)
7. **Anupam was technically sharp** — Former BoB digital transformation lead. Any new contact may not have the same depth.
8. **Production-readiness is the differentiator** — IDBI's frustration that most vendors stop at POC remains valid.
9. **On-prem is non-negotiable** — Not even VPC/AWS. Must demonstrate fully on-prem deployment capability.
10. **Gradual rollout expected** — Don't pitch big bang. Iterative approach: one process → expand → full rollout over 1-1.5 years.
11. **Competitive situation was early** — No vendor had cracked production with IDBI. This may still be true.
12. **Regional language support** — Could be the low-risk entry point (lower volume, less disruption).

---

## Next Steps & Timeline

| Date | Event |
|------|-------|
| Feb 7, 2026 | Discovery call with Anupam Morang (completed) |
| Feb 2026 | Anupam Morang separated from IDBI Bank |
| Feb 8, 2026 | Deal status updated to Blocked / On Hold |
| TBD | Identify new SPOC at IDBI |
| TBD | Explore Avaya / AWS partner channel for re-engagement |

---

## Source References
- Discovery call transcript (Feb 7, 2026) — Harsh, Divyanshu Pandey, Anupam Morang
- Team update (Feb 2026) — Anupam Morang departed IDBI; advised re-engagement via Avaya or AWS partner channel
