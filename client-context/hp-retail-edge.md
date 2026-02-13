# HP - Retail Edge Voice AI Partnership

**Last Updated:** 2026-02-10
**Deal Owner:** Sudarshan Kamath (CEO), Adnan Turnadzic (GTM)
**Stage:** **QUALIFIED - Demo Positive, Awaiting Real-Time Clip**
**Priority:** 🔥 **HIGH - Partnership Opportunity**

---

## Company Overview
- **Company:** HP Inc. (Hewlett-Packard)
- **Division:** Retail Edge / In-Store Solutions
- **Country:** United States
- **Channel:** Partnership (via Sierra Ventures introduction)
- **Deal Type:** OEM/Partnership - Edge deployment on HP hardware
- **Smallest Org ID:** `730a6`

---

## HP Team Contacts

| Name | Role | Email | Notes |
|------|------|-------|-------|
| **Elizabeth Scallon** | Partnership Lead | elizabeth.scallon@hp.com | Driving the initiative, main POC |
| **Aaron Sanders** | Technical Expert | aaron.sanders@hp.com | HP hardware/chips, has demo access |
| **Ryan Bartley** | Technical Expert | ryan.bartley@hp.com | Business/competitive questions, retail domain |
| **Mike Walsh** | Technical Expert | michael.walsh1@hp.com | Analytics focus |
| **Jen Purcell** | Legal/Partnerships | jen.purcell@hp.com | Facilitated CDA |
| **John McVay** | Main Partnership Contact | john.mcvay@hp.com | HP Strategic Alliances |
| **Faisal Masud** | Executive Sponsor | fm@hp.com | Original connection |
| **David White** | Retail & Industrial Solutions | d.white@hp.com | |

---

## What They're Evaluating

### Primary Use Case: Frontline Retail Worker Assistant
- **Earpiece/microphone setup** for store associates
- Query inventory, policies, customer questions in real-time
- Store operations support (restocking, procedures)
- **Key Insight:** Retail employees have high turnover (low-paid, seasonal) - AI assistant reduces training burden

### Secondary Use Case: Self-Help Kiosks
- Customer-facing kiosks in retail stores
- Quick, real-time, accurate responses

### Deployment Model
- **On HP Edge Boxes** in retail environments
- Reusing existing servers in stores (maximize existing hardware investment)
- Leverage spare bandwidth/compute for AI workloads

---

## Technical Requirements

### Edge Deployment Constraints
- Must run on existing HP edge servers in retail stores
- OS constraints TBD (Linux preferred, others may have latency trade-offs)
- Real-time latency critical for earpiece use case
- Multi-store deployment (1000+ stores potential)

### Integration Points
- Inventory management systems
- Store operations systems (SOPs, procedures)
- Knowledge bases for policy queries (returns policy, etc.)

### Key Technical Questions from HP
1. Can models run on their specific edge hardware? (specs pending)
2. What are OS constraints?
3. Latency trade-offs for different configurations?
4. Change management across 1000+ stores with regional variations?

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Est. Deal Size** | TBD - Partnership model |
| **Scale Potential** | 1000+ retail stores |
| **Deployment** | On-premise (HP Edge) |
| **Product** | Voice AI models + Agentic platform |
| **Revenue Model** | Likely OEM/licensing (to be discussed) |

---

## Competitive Landscape

### At HP
- **Sierra AI** - HP's customer service org is using them
- Smallest differentiator: Real-time focus, on-prem deployment capability, horizontal platform (white-label friendly)

### Our Positioning
- Sierra doesn't build own models - we do (partnership potential even with Sierra)
- We're horizontal/white-label friendly vs Sierra's verticalized CS platform
- On-prem deployment on HP servers = data privacy + reuse existing hardware

---

## Call Summary: Jan 16, 2026

### Attendees
- **Smallest:** Sudarshan Kamath, Rupesh Kollaikal
- **HP:** Elizabeth Scallon, Aaron Sanders, Ryan Bartley, Mike Walsh, Jen Purcell

### What Happened
1. **Intro/Background:** Explained Smallest's focus on real-time multimodal AI (STT, TTS, LLM, S2S)
2. **HP Use Case Discussion:** Elizabeth outlined frontline worker + kiosk scenarios
3. **Technical Deep Dive:** Ryan asked about agent platform capabilities, tuning requirements
4. **Competitive Discussion:** Ryan asked about landscape (ElevenLabs, OpenAI, Sierra)
5. **Platform Demo:** Showed Atoms agent builder, inbound insurance agent example
6. **Next Steps Agreed:** NDA → Specs → Demo account → Synthetic data → Prototype

### Key Insights from Call
- **Ryan's Advice:** "Get on Teams to talk to enterprise customers - direct connection forever" 🔥
- **Inbound vs Outbound:** Explained that inbound (open-ended questions) is harder than outbound (specific intent)
- **Analytics Interest (Mike):** Wants to see aggregate metrics across shifts (e.g., "top 5 questions asked")
- **Professional Services:** Ryan expects tuning/PS engagement for large multi-store rollouts

---

## Current Status (as of Feb 10, 2026)

### ✅ Completed
- **CDA Signed** - Jan 23, 2026
- **Demo Account Active** - Org ID: `730a6`
  - Users: aaron.sanders@hp.com, elizabeth.scallon@hp.com
- **Synthetic Data Received** - Jan 30, 2026
  - File: `inventory.zip` - Fictitious hardware store inventory database
  - Use case: Associates/customers query inventory via headsets or kiosks
- **Demo Call** - Feb 6, 2026 ✅ **Overall positive response**

### Feb 6 Demo Feedback (Adnan's Update)
- HP team was **happy with the demo overall**
- **Latency concern:** Some response lag observed, possibly due to multiple people on Google Hangout
- **Requested:** Real-time performance clip for review
- **All-in-one solution need:** Ability to connect to earbuds, cell phone, tablet (Hbox optional but "cherry on top")
- **Buying signal:** "Ready to move forward now for the right solution"

### 🔄 In Progress
- **Kawal creating real-time clip** (next week → share the following week)
- HP tech team continuing platform exploration

### ⏳ Upcoming
- Share real-time clip → Schedule review call
- Edge box hardware specs still pending from Aaron

---

## Timeline of Events

| Date | Event |
|------|-------|
| Dec 19, 2025 | Initial meeting scheduled |
| Jan 16, 2026 | Demo call - platform walkthrough |
| Jan 16, 2026 | Jen introduced John McVay (HP Strategic Alliances) |
| Jan 19, 2026 | Adnan sent invite for Jan 30 |
| Jan 23, 2026 | **CDA signed** by Sudarshan |
| Jan 23, 2026 | HP requested demo access for Aaron |
| Jan 30, 2026 | Aaron provided org ID: `730a6` |
| Jan 30, 2026 | Call pushed 1 week (HP needed time to explore platform) |
| Jan 30, 2026 | **Elizabeth sent inventory.zip** (synthetic data) |

---

## Next Steps & Timeline

### This Week (Feb 3-7)
1. **Follow-up Demo Call**
   - HP to share their experience with the platform
   - Review synthetic inventory data integration
   - Discuss prototype demo for hardware store use case

2. **Enable Credits**
   - Activate free credits for org `730a6`
   - Ensure HP team can test without friction

3. **Build Prototype Demo**
   - Use `inventory.zip` data
   - Create small LLM for hardware store inventory queries
   - Target: headset/kiosk Q&A for associates and customers

### Pending from HP
- [ ] Edge box hardware specs (Aaron Sanders)
- [ ] Detailed use case requirements document

### For Smallest
- [x] Send deck + meeting notes (Sudarshan) ✅
- [x] CDA signed ✅
- [ ] Activate demo credits for org `730a6`
- [ ] Process inventory.zip and build demo agent
- [ ] Prepare edge deployment feasibility assessment (once specs received)

---

## Strategic Importance

### Why This Matters
1. **OEM/Hardware Partnership:** First potential hardware OEM deal
2. **Retail Vertical:** Opens entire retail sector
3. **Edge AI Validation:** Proves on-prem edge deployment at scale
4. **HP Brand:** Major enterprise credibility
5. **Horizontal Platform:** Retail worker use case is very different from call center - proves platform flexibility

### Risks
- Edge hardware constraints may limit model performance
- Multi-store deployment complexity (change management, regional variations)
- HP enterprise procurement process
- Competing with Sierra AI in broader HP ecosystem

---

## Key Blockers

### Current
- ~~**CDA/NDA:** Awaiting from HP legal~~ ✅ RESOLVED
- **Hardware Specs:** Still need edge box specs to assess feasibility
- **Use Case Definition:** Synthetic data received, but detailed requirements TBD

### Potential
- Edge hardware compute limitations
- OS/deployment constraints
- HP internal approval process
- Integration with existing retail systems

---

## Synthetic Data Details

**File:** `inventory.zip`
**Purpose:** Fictitious hardware store inventory database
**Use Case:** Create small LLM for associates/customers to query inventory via headsets or kiosks
**Goal:** Get immediate answers to product/inventory questions

---

## Source References
- **Call Transcript:** Jan 16, 2026 - HP <> Smallest.ai Demo Call
- **Introduction:** Via Sierra Ventures (seed investor)
- **Email Thread:** "Re: HP <> Smallest.ai, Demo"
- **Latest Email:** Jan 30, 2026 - Elizabeth sent inventory.zip

---

## Notes
- **Pro tip from Ryan:** Enterprise hack - use Teams for calls to stay connected forever
- HP's customer service org already using Sierra AI - potential overlap/conflict to navigate
- Elizabeth mentioned Fridays work best for scheduling
- **Adnan is now primary GTM contact** for ongoing coordination

---

**🎯 TARGET: Prototype demo with synthetic data by Feb 7, 2026**
**📋 GATE: Edge hardware specs from Aaron**
**💰 POTENTIAL: OEM partnership across 1000+ retail stores**
