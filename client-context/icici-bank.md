# ICICI Bank - Client Context

## Overview
| Field | Value |
|-------|-------|
| **Account Name** | ICICI Bank |
| **Industry** | Banking / Financial Services |
| **Stage** | Awareness / Early Evaluation |
| **Product Interest** | Atoms (Voice Agents), TTS, STT |
| **Estimated MRR** | TBD (Enterprise potential) |
| **Lead Source** | Direct / Corporate Banking Relationship |
| **Partner** | - |

## Key Contacts

### Tech / AI Team
| Name | Role | Notes |
|------|------|-------|
| **Praveen Nair** | Tech Lead - AI Project | Leads iPAL (ICICI's chatbot on iMobile), focuses on conversational AI. Key decision maker for vendor evaluation. Emphasized importance of guardrails. |
| **Deshmukh Rahul J** | - | Attended Jan 5 demo, part of evaluation team |
| **Vishesh Bansal** | - | Attended Jan 5 demo |
| **Shakti Rege** | Startup Investments Team | Interested in Smallest from investment angle |

### Corporate Banking
| Name | Role | Notes |
|------|------|-------|
| **Pawan Kothari** | Corporate Banking | Primary relationship contact, attended Nov 4 & Nov 25 meetings |
| **Vinay Gupta** | Business Head - Corporate Banking (Karnataka/Kerala) | Pitched banking partnership opportunity for Smallest |
| **Anil Kumar** | - | Attended Nov 25 meeting |
| **Shivani** | - | Attended Nov 25 meeting |
| **Pushkal** | - | Attended Nov 25 meeting |
| **Anshu** | - | Attended Nov 25 meeting |

## Meeting History

### Meeting 1: Nov 4, 2025
**Attendees (Smallest):** Apoorv Sood (CRO), Harsh
**Attendees (ICICI):** Pawan Kothari

**Key Discussion Points:**
- Apoorv introduced Smallest's SLM philosophy - targeted functional use cases for regulated industries
- SLMs are more agile, easier to deploy on-prem, less prone to hallucination (no unnecessary general knowledge)
- Architecture: Application layer (agents) + Infrastructure layer (own TTS, ASR, SLM)
- Founders' autonomous vehicle background at Bosch → security-first mindset
- ICICI is "digitally first bank" with 400+ APIs, doing AI for internal use cases (call routing, HR coordination)
- ICICI cautious on customer-facing AI due to regulation
- Pawan agreed SLM approach fits regulated industries needing domain expertise (RBI mandates, policies)

**Partnership Angles Identified:**
1. **Vendor:** ICICI utilizes Smallest for specific use cases
2. **Banking Partner:** Smallest's banking needs (fundraise, current accounts, employee solutions)

**Next Steps:** Harsh to follow up, Apoorv mentioned meeting Rahul Deshmukh and Shakti Rege (investments team)

---

### Meeting 2: Nov 25, 2025
**Attendees (Smallest):** Akshat (CTO)
**Attendees (ICICI):** Pawan Kothari, Vinay Gupta, Praveen Nair, Anil Kumar, Shivani, Pushkal, Anshu

**Technical Deep Dive:**
- Akshat presented foundational speech models (STT, TTS, Speech-to-Speech, SLM)
- Orchestration layer, UI, telephony integration, analytics, knowledge base
- Emphasized proprietary in-house models, CISO-led compliance
- On-premise deployment: air-gapped Docker images + license key, only usage data shared
- STT/TTS quality: top 2-3 globally for conversational real-time use cases
- Benchmarking against Google: comparable WER, superior latency

**ICICI Requirements/Concerns:**
1. **Deployment:** On-premises (on their cloud premises) vs SaaS? → Confirmed on-prem option available
2. **Model Architecture:** Underlying LLM/SLM? → Proprietary, in-house trained SLMs (not derived LLM)
3. **Benchmarking:** STT vs Google for conversational real-time → Internal benchmarks for financial terms, WER parity, latency advantage
4. **Guardrails:** Critical for banking - prevent hallucinations, profanity, stay within defined knowledge

**Banking Partnership Pitch (Vinay Gupta):**
- ICICI as Smallest's primary banker (India + US: NY, TX, CA branches)
- Curated startup deck: salary accounts, credit cards for employees
- Potential strategic investments from balance sheet (RBI allows up to 100% in new-age companies integrating with banking services)
- ICICI Ventures for larger tickets

**Next Steps:**
- Akshat to discuss banking relationship with Sudarshan
- Share NDA (Smallest's or ICICI's)
- Provide deck to Praveen's team
- API trial access for a month
- Coordinate in-person meeting in Mumbai

---

### Meeting 3: Jan 5, 2025 (Earlier exploratory meeting)
**Attendees (Smallest):** Harsh, Pratirath Gupta
**Attendees (ICICI):** Deshmukh Rahul J, Vishesh Bansal, Shakti

**Demo & Discussion:**
- Demoed Atoms platform
- Explained full-stack voice AI approach, CISO early involvement, SLM philosophy
- Use cases: Debt collection, inbound/outbound scenarios
- Suggested different agents for different DPD buckets (varied conversation styles/aggression)

**ICICI Feedback:**
- Voice sounded "a little robotic" compared to other demos → Need to demo V3.1 voices
- Praised data sovereignty and private setup capabilities
- Requested more realistic demos, call recordings, case studies

**Next Steps:**
- Share call recordings and case studies
- Provide trial access (Rahul, Vishesh, Shakti to test agents)
- In-person workshop in Bombay with Praveen and contact center stakeholders

---

## Use Cases of Interest

### Primary Use Cases
1. **Collections (Largest Potential)**
   - Different agents for different DPD buckets (e.g., 11-day vs 120-day)
   - Varied tone and aggression levels
   - Guardrails critical for compliance

2. **Inbound Customer Service**
   - Credit card blocking
   - Transaction history
   - General support

3. **Outbound Campaigns**
   - Lead generation
   - Upselling loans
   - Digital gold promotion
   - Product offers

### ICICI's Current AI Initiatives
- **iPAL:** Chatbot on iMobile (led by Praveen Nair)
- Internal AI: Automated call routing, HR coordination
- Cautious on customer-facing AI due to RBI regulations

---

## Technical Requirements

### Deployment
- **Preference:** On-premises (on their cloud premises) - critical for compliance
- Air-gapped environment preferred
- Only usage data to be shared externally

### Compliance & Security
- CISO involvement critical
- Guardrails to prevent hallucinations and profanity
- Responses must stay within defined knowledge base
- Data residency/sovereignty important
- RBI mandate adherence required

### Benchmarking Criteria
- WER (Word Error Rate) for STT
- Latency for real-time conversational AI
- Financial term recognition (entity extraction)
- Comparison against Google

---

## Competitive Landscape
- ICICI evaluating multiple AI voice solutions
- Feedback: Some competitors have more natural-sounding voices
- Smallest differentiator: On-prem deployment, SLM approach, compliance focus

---

## Banking Partnership Opportunity

Beyond vendor relationship, ICICI has pitched banking partnership:

| Offering | Details |
|----------|---------|
| **Primary Banking** | India + US (NY, TX, CA branches) |
| **Startup Package** | Salary accounts, credit cards for employees |
| **Investment** | Strategic investments from balance sheet (up to 100% allowed by RBI) |
| **ICICI Ventures** | For larger investment tickets |
| **Gift City** | Potential consideration |

**Status:** Akshat to discuss with Sudarshan

---

## Blockers & Challenges
1. **Voice Quality Feedback:** "Robotic" sounding - need to demo V3.1 voices
2. **NDA Required:** Before sharing detailed deck and API access
3. **Regulatory Caution:** ICICI moving slowly on customer-facing AI
4. **Multiple Stakeholders:** Tech team, corporate banking, investments team - complex decision process

---

## Action Items

### Smallest
- [ ] Share NDA (use Smallest's or accept ICICI's)
- [ ] Provide detailed deck to Praveen's team post-NDA
- [ ] Set up API trial access (1 month)
- [ ] Demo V3.1 voices to address "robotic" feedback
- [ ] Share call recordings and case studies
- [ ] Coordinate in-person workshop in Mumbai with Praveen + contact center stakeholders
- [ ] Akshat/Sudarshan to evaluate banking partnership proposal

### ICICI
- [ ] Execute NDA
- [ ] Evaluate Smallest against their benchmarks
- [ ] Internal discussion on use cases to pilot
- [ ] Praveen to align with contact center/customer experience teams

---

## Strategic Notes

1. **Dual Opportunity:** Vendor relationship + Banking partnership
2. **SLM Positioning Resonates:** ICICI agrees SLM approach fits regulated industries
3. **Guardrails Critical:** Banking compliance is non-negotiable
4. **Enterprise Potential:** ICICI is a major Tier-1 bank, successful deployment could be significant reference
5. **In-Person Important:** Multiple references to Mumbai meetings - relationship-driven sale
6. **Investment Angle:** Shakti Rege (investments team) interested - potential strategic investor

---

## Timeline
| Date | Event |
|------|-------|
| Nov 4, 2025 | Initial meeting with Apoorv, Pawan (banking angle introduced) |
| Nov 25, 2025 | Technical deep dive with Akshat, Praveen Nair |
| Dec 30 | NDA execution |
| Jan 5, 2025 | Demo with Harsh, Pratirath (earlier exploratory) |
| TBD | API trial access |
| TBD | In-person workshop in Mumbai |

---

*Last Updated: Jan 26, 2026*
