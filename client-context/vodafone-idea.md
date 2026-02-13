# Vodafone Idea - Client Context

**Last Updated:** 2026-02-11
**Deal Owner:** Harsh Jain
**Stage:** **CLOSING - Technical Integration (POC)**
**Priority:** 🔴 **CRITICAL - Integration complete but calls not connecting (Feb 11). Agreement pending Vi internal closure.**

---

## TL;DR

| Item | Details |
|------|---------|
| **Use Case** | Prepaid to Postpaid (P2P) conversion voice agent |
| **POC Volume** | 1,39,535 dials → 60,000 connects over 2 weeks |
| **Integration Status** | ⚠️ Integration code complete (Yash, Feb 10). **Calls not connecting** since Feb 9 — Prutech investigating (Feb 11). Production ETA was Feb 11 EOD. |
| **Agreement Status** | Smallest legal points closed (Manjari). Open items now between Vi internal (Vickey/Tanvi) and Vi legal/cyber/network teams |
| **Telephony Decision** | Using Vi's CCAS (WebSocket) instead of Plivo (SIP) |
| **Technical Contact** | Sivanand Biju (Prutech), Rehan Khatib (Prutech) |
| **Business Contact** | Vickey Rodrigues, Tanvi Daware - Vodafone Idea |
| **POC Capabilities** | Inbound + Outbound calling ✅ |
| **POC Limitations** | Call transfer NOT available ❌ |
| **SMS Integration** | Vi provides whitelisted templates, simple API call from our side |
| **Smallest Team** | Hitesh Wadhwani (Engg), Yash Ghelani (FDE), Shambhavi (QA), Gaurav Verma (Engg) |
| **Test Number** | +919610012318 (inbound) |

---

## Company Overview

- **Company:** Vodafone Idea Limited (Vi)
- **Industry:** Telecommunications
- **Country:** India
- **Integration Partner:** Prutech (Vi's telephony arm)
- **Deal Type:** POC transitioning to Production

---

## What They're Evaluating/Buying

### Products
- **TTS (Text-to-Speech)** - Primary
- **STT (Speech-to-Text)** - Primary
- **Telephony Component** - Via Vi CCAS (WebSocket integration)

### Use Cases
- Prepaid to Postpaid conversion (P2P) - POC focus
- Customer service automation
- Interactive voice response (IVR)
- Outbound calling campaigns
- Multilingual support for pan-India coverage

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **MRR** | **$10,000** |
| **ARR** | **$120,000** |
| **Deal Type** | POC → Production |
| **Volume** | 300,000+ minutes/month (estimate) |
| **POC Budget** | ₹1,04,000 |
| **Target CPA** | ₹807 |
| **Deployment** | Smallest-hosted Cloud (India) |

---

## Business Context

### The Opportunity

| Metric | Value |
|--------|-------|
| Weekly customer base | 70 lakh (7 million) prepaid customers |
| Current human agent capacity | 30,000 calls/week (0.4% of base) |
| Current connect rate | ~45% |
| Problem | Limited agents for P2P activity, no scale |

### POC Scope

| Parameter | Value |
|-----------|-------|
| Duration | 2 weeks |
| Dial attempts | 1,39,535 |
| Expected connects (@43%) | 60,000 |
| Target P2P orders (@3.61%) | 2,167 |
| Target activations (@60%) | 1,300 |
| Target conversion | 2.2% |
| Budget | ₹1,04,000 |
| Target CPA | ₹807 |

### Objectives

Demonstrate the AI voice bot can:
- Scale calling conversion volumes
- Improve connect percentage
- Reduce dependency on human agents
- Continuously learn and improve conversion rates

---

## Agent Configuration (from FDE SOW)

| Parameter | Value |
|-----------|-------|
| Calling Window | 10 AM - 7 PM IST (including holidays) |
| Languages | English + Hindi |
| Voice | Female, Indian accent |
| Data Input | CSV Import |
| Data Output | Google Sheets / CSV |
| Knowledge Base | Postpaid plans, FAQs, P2P FAQs |
| Hosting | Smallest-hosted Cloud (India) |
| Model Inference | Stateless compute (India) |
| Telephony | Custom WebSocket integration with Atoms |
| Monitoring | Atoms dashboard + Google Sheets |

---

## Conversation Design

### High-level Flow

1. Agent calls user
2. Agent pitches postpaid upgrade value (tailored to subscriber context)
3. Agent answers questions about postpaid benefits and plan details
4. If user agrees → Agent triggers Vi SMS with portal link
5. Eligibility determined by what user sees on portal

### Portal Outcomes

| Outcome | User Sees | Agent Response | Result |
|---------|-----------|----------------|--------|
| **Eligible** | OTP option appears | Guide user to enter OTP, capture confirmation | Instant conversion |
| **Ineligible** | Address form (no OTP) | Collect/confirm address, trigger intent verification OTP | Strong intent capture → doorstep KYC |

### Call Outcome Codes

- No answer
- Call failure
- Connected, not interested
- Connected, interested, link sent
- Eligible flow, OTP entered, conversion completed
- Eligible flow, drop-off after link
- Ineligible flow, address captured, intent captured
- Ineligible flow, drop-off during address

---

## Telephony Integration

### The Decision: CCAS (WebSocket) vs Plivo (SIP)

**Background (from Jan 19 call):**

Vi wanted Smallest to use their own CCAS infrastructure instead of Plivo for better pickup rates and cost control.

| | Smallest Default | Vi CCAS (Prutech) |
|--|------------------|-------------------|
| Protocol | SIP trunking | WebSocket (WSS) streaming |
| Provider | Plivo | In-house (Prutech) |
| Mediator | LiveKit | None (direct integration) |
| Call Transfer | ✅ Supported | ❌ Not for POC |

**Why Vi's CCAS was chosen:**
- Vi's numbers are whitelisted with their own customers → better pickup rates
- Cost savings vs external Plivo
- Full control within Vi's ecosystem

**Trade-off:**
- No SDK from Vi - we had to build WebSocket integration from scratch
- LiveKit bypassed (only supports SIP)
- Call transfer not feasible for POC timeline

### Current Integration Status (as of Feb 11)

| Component | Status |
|-----------|--------|
| WebSocket connection | ✅ Working |
| Custom parameter (`conversation_id`) | ✅ Configured by Prutech (API snippet shared Feb 4) |
| Campaign API endpoint | ✅ `POST https://cts.myvi.in:8443/Cpaas/api/v1/obdcampaignapi/staticCampaignDataIngestion` |
| `conversation_id` as custom param | ✅ Confirmed in base load API |
| Inbound calling | ✅ Available (number: +919610012318) |
| Outbound calling | ✅ Available |
| IP whitelisting | ✅ Completed - IPs: 103.75.249.33, 103.75.249.34, 122.15.132.161, 202.164.153.222, 118.185.111.81, 118.185.111.70 |
| Integration code | ✅ Complete on Smallest side (Yash confirmed Feb 10) |
| Dev environment testing | 🔄 In progress |
| **Call delivery** | **🔴 NOT WORKING since Feb 9** — was working until Friday Feb 6 night. Campaigns created but no calls received. Prutech investigating. |
| Call transfer | ❌ Not for POC |
| QA ownership | ✅ Shambhavi added to thread (Feb 11) |

**Timeline:**
- Feb 3: Sivanand shared campaign API format
- Feb 4: Rehan shared `conversation_id` custom parameter API
- Feb 5-6: IP whitelisting exchange
- Feb 9: IP 118.185.111.81 confirmed legitimate by Rehan. **Calls stopped working.** Hitesh shared campaign IDs for debugging.
- Feb 10: Yash told Tanvi integration is complete, testing in dev. Production ETA: Feb 11 EOD.
- Feb 11: **Still no calls.** Hitesh reported two new campaigns today with zero calls. Rehan: "We are checking this."
- Feb 11: Yash added Shambhavi (QA) to integration thread.

**Failed Campaign IDs (for debugging):**
- `call_CALL-1770617468037-686aa2` (campaign id: `yHC1Omqd0W/U2we3FZnttw==`) — Feb 9
- `call_CALL-1770781917822-116ad2` — Feb 11
- One more unnamed campaign — Feb 11

### Technical Details

**WebSocket Events:**
- Smallest sends `call_id` in start event (internally generated)
- Prutech sends `conversation_id` for correlation
- Initially tried `call_id` but conflicted → renamed to `conversation_id`
- Hitesh noted Prutech's `room_id` and `call_id` are generated post-call initiation and therefore can't be used as pre-call identifiers (Feb 3)

**Key quote (Hitesh, Feb 4):**
> "It's almost done. We were just blocked on the custom parameter which has to be sent during call initiation."

**Key quote (Yash to Tanvi, Feb 10):**
> "Telephony integration work is complete on our end and testing is ongoing in our dev environment. ETA to go live in production is tomorrow, 11 Feb EOD (around 11PM)."

**Key quote (Hitesh, Feb 11):**
> "We are still not receiving any calls on our side. Below are the latest two campaigns created today, neither of which resulted in any calls."

**Key quote (Sanjay, Jan 19):**
> "SIP trunking is not feasible. All our setup is inside telecom... the current customers who are existing with us also we are providing WSS only."

---

## SMS/DLT Integration

| Item | Status |
|------|--------|
| DLT registration from Smallest | ❌ Not required |
| SMS templates | Vi provides (whitelisted) |
| API integration | Simple API call once access received |

### Pending Items

- [ ] Receive SMS templates from Vi business team
- [ ] Receive SMS API access details (endpoint, auth, schema)
- [ ] SMS delivery status callback (if available)

---

## Success Metrics

| Metric | Definition |
|--------|------------|
| **Orders** | Users where strong intent captured (eligible + ineligible flows) |
| **Activations** | Users who actually convert (prepaid → postpaid completed) |
| **Connect Rate** | Connected calls / dial attempts |

---

## Reporting & Deliverables

| Deliverable | Channel | Frequency | Contents |
|-------------|---------|-----------|----------|
| Daily campaign report | Google Docs | Daily | Dials, connects, conversions, drop-offs, objections, failures |
| Call outcome codes | Google Sheets | Real-time | Structured disposition per attempt |
| Final campaign summary | Google Docs | Post-campaign | Outcomes, learnings, production recommendations |

---

## Timeline

*Starts after Vi provides cohort CSV and validation*

| Phase | Days | Milestone |
|-------|------|-----------|
| v1 Agent Build | 1-3 | First working flow, initial KB, basic reporting |
| Iteration Loop | 4-14 | Prompt tuning, KB fixes, latency/quality checks, API stability |
| Controlled Pilot | 15-16 | Limited ramp, monitoring in Google Sheets |
| Full POC Volume | 17-28 | Daily monitoring, reporting, live outcomes |

---

## Dependencies (Inputs from Vi)

### Pre-call

| Item | Description | Why Needed |
|------|-------------|------------|
| Cohort CSV | Phone, circle, language pref, consent flag | Dialing, compliance, greeting |
| Context fields | Usage, spend, tenure, handset, current plan | Tailored pitch |
| Exclusion rules | DND, cooling period, cohorts to exclude | Compliance |

### During-call

| Item | Description | Why Needed |
|------|-------------|------------|
| SMS API | Endpoint to send portal link | Agent triggers mid-call |
| API details | Auth, schema, status codes | Implementation |
| Delivery callback | Confirm SMS sent/delivered | Handle failures |

### Portal

| Item | Description | Why Needed |
|------|-------------|------------|
| UX screenshots | Eligible vs ineligible flows | On-call guidance |

### Inputs Already Received

- ✅ Calling script
- ✅ Plan details and Postpaid FAQs
- ✅ Prepaid to Postpaid FAQs
- ✅ Sample calls (8-10)
- ✅ Scope document and trial agreement (shared by Tanvi, Jan 16)
- ✅ Website link with P2P plans and T&Cs (shared by Tanvi, Jan 27)
- ✅ Portal screenshot for P2P flow (shared by Tanvi, Jan 27)
- ✅ ViL legal team's comments on agreement (shared by Tanvi, Jan 27)

---

## Key Contacts

### Vodafone Idea / Prutech

| Name | Role | Email | Notes |
|------|------|-------|-------|
| **Sivanand Biju** | Technical (Prutech) | sivanandbiju@prutech.co.in | Primary tech contact, available on WhatsApp |
| **Rehan Khatib** | Integration Engineer (Prutech) | rehan@prutech.co.in | WebSocket integration, IP whitelisting. M: +91 8668413947 |
| **Vickey Rodrigues** | Business (COR) | vickey.rodrigues@vodafoneidea.com | Business coordination, POC scope, architecture review |
| **Tanvi Daware** | Tech Strategy (AGM) | tanvi.daware@vodafoneidea.com | Legal/contracts, architecture, M: 9820018091 |
| **Ketan Satam** | Product (COR) | ketan.satam@vodafoneidea.com | Portal/SMS flow, conversion status APIs |
| **Siddhesh Khanolkar** | Vi | siddhesh.khanolkar@vodafoneidea.com | Integration meetings attendee |
| **Mitali Gajbhiye** | Legal (COR) | mitali.gajbhiye@vodafoneidea.com | Vi legal team |
| **Manjari Mukherjee** | Legal (Smallest) | legal@smallest.ai | Smallest legal - closed all points on agreement |
| **Sanjay C P** | Prutech | cpsanjay@prutech.co.in | Initial telephony discussions |
| **Aakash Manjrekar** | Cloud Telephony (COR) | aakash.manjrekar@vodafoneidea.com | Commercial/pricing, CCAS infrastructure |

### Smallest Team

| Name | Role |
|------|------|
| Apoorv Sood | Leadership |
| Yash Ghelani | FDE (Team Lead) |
| Hitesh Wadhwani | Engineering (WebSocket integration lead) |
| Gaurav Verma | Engineering |
| Shambhavi | QA (added to integration thread Feb 11) |

---

## Technical Requirements

### Languages
- **Hindi** - Primary
- **English** - Secondary
- **Regional languages** - Pan-India coverage (future)
  - Tamil, Telugu, Malayalam, Kannada, Marathi, Gujarati, Bengali

### Integration
- Vodafone's existing contact center infrastructure (CCAS)
- Custom WebSocket telephony integration
- CRM integration
- Analytics and reporting

### Deployment
- Smallest-hosted Cloud (India)
- Stateless compute (India)
- High availability requirements (telecom SLA standards)

---

## Open Items

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1 | **🔴 Calls not connecting — campaigns created but zero calls received** | Rehan (Prutech) investigating | **BLOCKING** - broken since Feb 9. Rehan: "We are checking this" (Feb 11) |
| 2 | IP whitelisting | Hitesh / Rehan | ✅ RESOLVED - IP 118.185.111.81 confirmed legitimate by Rehan (Feb 9). Additional IP 118.185.111.70 also shared. |
| 3 | **Legal agreement closure** | Vi internal (Vickey/Tanvi + Vi legal/cyber/network) | **IN PROGRESS** - Smallest points closed by Manjari. Vi closing internal points with cyber & network teams |
| 4 | Receive SMS templates | Vi Business Team | PENDING |
| 5 | Receive SMS API access | Vi Business Team | PENDING |
| 6 | Portal UX screenshots | Vi (Tanvi/Ketan) | PARTIALLY DONE - Tanvi shared portal screenshots Jan 27 |
| 7 | Cohort CSV for pilot | Vi | PENDING |
| 8 | Architecture diagrams review | Vi (Vickey/Tanvi) | ✅ Sent by Yash (updated Feb 5 with clearer diagrams including server location, security, encryption, data flow) |
| 9 | Call transfer (if needed for production) | Smallest | Future scope |

---

## Next Steps

### Immediate (Feb 11+)

- [x] Complete WebSocket integration core (conversation_id parameter ✅)
- [x] IP whitelisting resolved (118.185.111.81 confirmed legitimate by Rehan Feb 9)
- [x] Integration code complete on Smallest side (Yash confirmed Feb 10)
- [ ] **🔴 BLOCKER: Resolve call delivery issue** — Prutech side. Campaigns create but no calls received since Feb 9. Rehan investigating.
- [ ] **Follow up on legal agreement closure** (Vi internal teams working on cyber/network points)
- [ ] Go live in production (ETA was Feb 11 EOD — blocked by call delivery issue)
- [ ] Receive SMS templates from Vi
- [ ] Receive SMS API access details
- [ ] Receive cohort CSV for pilot

### Post-Agreement/Integration

- [ ] v1 Agent build (Days 1-3)
- [ ] Iteration loop and testing (Days 4-14)
- [ ] Controlled pilot (Days 15-16)
- [ ] Full POC volume (Days 17-28)

---

## Meeting Notes

### Jan 19, 2026 - Telephony Integration Discussion

**Attendees:**
- Smallest: Apoorv Sood, Yash Ghelani, Gaurav Verma
- Vodafone/Prutech: Vickey Rodrigues, Tanvi Daware, Sanjay C P, Sivanand Biju, Aakash

**Objective:** Determine if Smallest can use Vi's CCAS instead of Plivo for the POC

**Key Discussion Points:**

1. **Current Smallest Setup:**
   - Uses Plivo + LiveKit via SIP trunking
   - LiveKit enables warm/cold transfers, call rooms

2. **Vi's Position:**
   - CCAS only supports WebSocket (WSS) streaming
   - SIP trunking not feasible within their telecom setup
   - No SDK available - event-based integration

3. **Decision:**
   - Proceed with Vi's CCAS (WebSocket integration)
   - Smallest to bypass LiveKit, build direct WSS integration
   - Call transfer descoped from POC

4. **Benefits of CCAS:**
   - Vi's whitelisted numbers → better pickup rates
   - Cost savings vs Plivo
   - Full ecosystem control

5. **Action Items:**
   - Vi to share WSS documentation
   - Smallest to assess effort and quality impact
   - Vi to provide commercial comparison vs Plivo

**Key Quotes:**

> "SIP trunking is not feasible. All our setup is inside telecom." - Sanjay (Prutech)

> "Let's fast track... at least this week we'll have to get a closure on whether we can use the CCAS or not." - Vickey

---

### Feb 4, 2026 - Technical Sync Call

**Attendees:**
- Smallest: Hitesh Wadhwani, Yash Ghelani
- Vodafone/Prutech: Sivanand Biju, Vickey Rodrigues

**Outcome:**
- `conversation_id` parameter configured and tested successfully
- Integration blocker resolved
- ETA for completion: This week
- SMS integration: No action needed from Smallest until templates received

**Key Quotes:**

> "It's almost done. We were just blocked on the custom parameter which has to be sent during call initiation." - Hitesh

> "For the POC the transfer call will not work. But if we get the time we will try to integrate it." - Hitesh

> "Only the transfer call will not work. Other than that, every feature available on the platform will work seamlessly." - Hitesh

---

### Dec 4, 2025 - Neysa BOM & Vi Data Requirements

**General Thread:**
- Tanvi asked Ketan Satam to collate data requirements in the CSV format shared by Smallest, targeting Monday delivery
- Dipen Shah (Neysa) shared BOM for GPU infrastructure
- Harsh confirmed Neysa commercials were "good to go"

---

### Dec 8-15, 2025 - Follow-ups on BOM & Pending Items

**General Thread:**
- Dec 8 & 12: Dipen Shah (Neysa) followed up asking for BOM confirmation and POC start date
- Dec 12: Harsh responded — waiting on Vodafone for scope and trial agreement finalization
- Dec 15: Harsh checked in with Tanvi, Vickey, Ketan on pending items:
  - Confirm commercials with final scope
  - Share trial agreement
  - Other closure items

---

### Jan 16, 2026 - Scope Document & Trial Agreement Shared

**General Thread:**
- Tanvi shared scope document and trial agreement with Harsh/Apoorv
- Apoorv acknowledged: "This is duly noted. We will circle back soon on this."
- Harsh looped in Smallest Legal Admin for review

---

### Jan 19, 2026 - Requirements Exchange Initiated

**General Thread:**
- Post integration call, Tanvi asked Yash/Harsh: "Please share the requirements/information needed from our side."
- Yash acknowledged, committed to sharing list by EOD or next morning

---

### Jan 20, 2026 - SOW, Trial Agreement & Requirements Shared

**Legal:**
- Smallest Legal Admin (Manjari) sent SOW and Trial Agreement to Tanvi with comments in track + most recent commercials
- Harsh forwarded full thread context to Legal Admin for review

**Requirements:**
- Yash shared consolidated requirements table with Tanvi — requested API schemas, sample payloads, and sample responses for all requested APIs

---

### Jan 22, 2026 - Tanvi's Remarks on Requirements

**General Thread:**
- Tanvi shared remarks on requirements, noted "it might take us a few days to get back with the data"
- Yash acknowledged, said he'd review and get back with questions/clarifications

---

### Jan 23, 2026 - Requirements Recap from Yash

**General Thread:**
- Yash recapped what's needed from Vi side:
  - Website links to latest P2P plan pages
  - Portal UX screenshots
  - Data/API clarity items

---

### Jan 27, 2026 - General Coordination Thread ("Interaction with Vi - Smallest.ai & Neysa")

**Key Updates:**
- Tanvi shared ViL legal team's comments with Manjari (Smallest legal)
- Tanvi shared website link with postpaid plans, T&Cs, and portal screenshot for P2P flow
- Yash asked Ketan Satam for clarity on:
  - How the upgrade SMS link is generated/sent
  - Conversion status API availability
  - Portal flow details

---

### Jan 30, 2026 - Legal & Architecture Updates

**Legal Thread:**
- Manjari (Smallest legal) responded to Tanvi: "The comments are directed at your internal members and if the same is closed from your end, we can clean up the draft and send the same for execution."
- **Implication:** Smallest has closed all legal points. Ball is in Vi's court.

**Architecture Thread:**
- Yash sent initial architecture diagrams to Vickey covering the high-level lifecycle of a voice agent conversation (pre-call, during call, post-call flows)

---

### Feb 2, 2026 - Vickey's Additional Requirements

**Attendees (email):** Vickey Rodrigues, Apoorv Sood, Yash Ghelani

**Vickey requested additional details on architecture diagrams:**
- Location of server
- Security processes and tools in place
- Confirmation on data encryption and security
- Proposed flow of data from VI to Smallest and vice versa

**Apoorv acknowledged:** "This is duly noted. We will come back ASAP on these."

---

### Feb 4, 2026 - Updated Architecture + Integration API Details

**Architecture (General Thread):**
- Yash sent updated architecture diagrams to Vickey with all requested details:
  - Server location
  - Security processes and tools in place
  - Data encryption and security controls
  - Proposed end-to-end data flow between VI and Smallest

**Integration Thread (Telephone Integration):**
- Rehan Khatib (Prutech) shared `conversation_id` custom parameter API details:
  - Endpoint: `POST https://cts.myvi.in:8443/Cpaas/`
  - Custom parameter can be passed in base load API
- Yash acknowledged and confirmed the team would reach out with any questions
- Sivanand confirmed availability for sync call

---

### Feb 5, 2026 - Architecture Diagram Revisions + Security Hardening

**General Thread:**
- Tanvi requested clearer architecture diagrams ("too small and not clearly legible")
- Yash acknowledged and resent updated document with more legible diagrams

**Integration Thread:**
- Hitesh requested WebSocket endpoint security from Prutech:
  - Options proposed: IP whitelisting or token-based auth
  - Asked Rehan for preferred authentication method

---

### Feb 6, 2026 - IP Whitelisting Exchange

**Integration Thread:**
- Rehan shared Prutech static IPs for whitelisting:
  - 103.75.249.33
  - 103.75.249.34
  - 122.15.132.161
  - 202.164.153.222
- Hitesh flagged unexpected WebSocket connection from `118.185.111.81` (via X-Forwarded-For header) - asked Rehan to verify if expected

---

### Feb 3, 2026 - Integration Thread: API Format & Timeline Update

**Integration Thread:**
- Sivanand shared the campaign API format for initiating calls:
  - `POST https://cts.myvi.in:8443/Cpaas/api/v1/obdcampaignapi/staticCampaignDataIngestion`
  - JSON body with `campaign_ID` field
- Sivanand suggested using `room_id` or `call_id` as unique identifiers
- Hitesh explained these don't work: "The room_id and call_id do not meet our requirements because they are generated by your system after the call is initiated" — need an identifier generated before the call (`conversation_id`)
- Yash updated Vickey: "Core integration work expected to be completed by end of this week. This includes wiring Vodafone phone numbers into our system."

---

### Feb 9, 2026 - Integration Thread: Calls Stop Working

**Integration Thread (critical):**
- Hitesh requested confirmation on whitelisting for `118.185.111.81` and inbound status for `+919610012318`
- Rehan confirmed **both IPs are legitimate**: 118.185.111.81 and 118.185.111.70 (resolving the Feb 6 flag)
- **Calls stopped working:** Hitesh reported: "We are currently not receiving any calls, although the integration was working until Friday night."
  - Shared campaign IDs for debugging
  - Rehan asked for campaign name
  - Hitesh provided: campaign id `yHC1Omqd0W/U2we3FZnttw==`, campaign name `call_CALL-1770617468037-686aa2`

---

### Feb 9, 2026 - WhatsApp: Harsh ↔ Tanvi Daware (Agreement Status)

**Context:** Harsh checked on legal agreement status

**Key Exchange:**
- Harsh asked for update from legal on the agreement, offered to connect both legal teams if needed
- **Tanvi confirmed:**
  - Manjari (Smallest legal) has **closed all points for Smallest** ✅
  - Open points are now between Vi internal (Vickey & Tanvi) and their own legal team
  - Need to connect with Vi **cyber and network teams** to close some pointers
  - Trying to close ASAP but may take some time
- Harsh offered to schedule a call between both legal teams if needed
- Tanvi said she would let Harsh know if Smallest legal team needs to be looped in

**Assessment:** Agreement is blocked on Vi's internal processes (legal + cyber/network review), not on Smallest. No immediate action required from Smallest side.

---

### Feb 10, 2026 - Tanvi Checks Integration Status

**Integration Thread:**
- Tanvi emailed Hitesh/Rehan: "Please share the current status on this."
- Yash responded to Tanvi: "Telephony integration work is complete on our end and testing is ongoing in our dev environment. ETA to go live in production is tomorrow, 11 Feb EOD (around 11PM). I'll keep this thread updated."

---

### Feb 11, 2026 - Calls Still Not Connecting + QA Added

**Integration Thread:**
- **Hitesh reported:** "We are still not receiving any calls on our side. Below are the latest two campaigns created today, neither of which resulted in any calls."
  - `call_CALL-1770781917822-116ad2`
  - One additional campaign — both with zero calls
- **Rehan (Prutech):** "We are checking this. I will keep you posted."
- **Yash added Shambhavi** to the integration thread: "Adding Shambhavi as well to this thread. She owns QA for our voice agent platform."

**General Thread:**
- Harsh forwarded the Neysa/Dipen Shah BOM context to Yash for reference

**Assessment:** Integration code is complete on Smallest side but calls are not being delivered by Prutech's CCAS. This is a Prutech-side issue being investigated. Production go-live (ETA Feb 11 EOD) is now blocked on this resolution.

---

## Neysa Connection

### Joint GTM Opportunity
- Neysa and Smallest working together on Vodafone
- Part of broader Neysa partnership
- On-prem deployment capability via Neysa
- GPU infrastructure from Neysa
- **Dipen Shah** (Neysa, Enterprise AI Sales Lead – West, M: +91-9920532502, dipen.shah@neysa.ai) — primary Neysa contact
- Dec 4, 2025: Dipen shared BOM (Bill of Materials) for GPU infra — Harsh confirmed commercials were good to go
- Dec 8-12, 2025: Dipen followed up on BOM confirmation and POC start date
- Dec 12, 2025: Harsh informed Dipen they're waiting on Vodafone for scope/trial agreement
- Feb 11, 2026: Harsh forwarded Neysa/Dipen context to Yash for reference
- **Tanvi asked Ketan (Dec 4)** to collate data in requirements CSV format by Monday

**Reference:** Mentioned in YuVerse/Spocto context as "collective opportunities"

---

## Competitive Context

- Large telecom evaluating multiple vendors
- Need to demonstrate reliability (critical for telecom)
- Cost competitiveness important at scale
- Telephony integration complexity is differentiator
- Vickey requested a **structured competitor benchmark / comparison** pack (to help "campaign internally")

---

## Strategic Importance

### Why This Matters
1. **Enterprise Telecom:** Major brand validation
2. **Scale Potential:** Vodafone's call volumes are massive (70L customers/week)
3. **Reference Customer:** Telecom sector showcase
4. **Partnership Proof:** Neysa joint GTM success
5. **Revenue:** $10K MRR significant contribution
6. **Custom Integration:** WebSocket telephony capability unlocked

---

## Reference Documents

| Document | Location | Contents |
|----------|----------|----------|
| Vi Scope Document | `/Users/harsh/Downloads/Scope document - smallest.docx.md` | Business context, KPIs, timelines |
| FDE SOW | `/Users/harsh/Downloads/Scope of Work_ Vodafone Idea (1).md` | Technical spec, agent config, dependencies |
| Trial Agreement (with Smallest comments) | Email - Legal Admin to Tanvi (Jan 20) | Legal terms, SOW with track changes, latest commercials |
| Architecture Diagrams (updated) | Email - Yash to Tanvi (Feb 5) | Server location, security, encryption, data flow (PDF attached) |
| ViL Legal Comments | Email - Tanvi to Manjari (Jan 27) | Vi legal team's comments on agreement |

---

## Communication Channels

- **Email (Integration):** "Telephone Integration" thread - Hitesh ↔ Prutech (Rehan, Sivanand) for WebSocket technical work
- **Email (General):** "Interaction with Vi - Smallest.ai & Neysa" thread - Yash/Apoorv ↔ Vickey/Tanvi for architecture, legal, coordination
- **WhatsApp:** Quick coordination - Harsh ↔ Tanvi (agreement status), Sivanand available
- **Calls:** Technical syncs as needed

---

## Email Threads (Active)

| Thread | Subject | Key Participants | Status |
|--------|---------|------------------|--------|
| **Integration** | "Telephone Integration" | Hitesh, Yash, Shambhavi, Rehan Khatib, Sivanand (Prutech), Tanvi | 🔴 Active - calls not connecting, Prutech investigating (Feb 11) |
| **General Coordination** | "Interaction with Vi - Smallest.ai & Neysa" | Yash, Vickey, Tanvi, Apoorv, Manjari (legal), Ketan, Dipen (Neysa) | Active - architecture docs sent, legal pending Vi internal |

---

## Source References
- **GTM Update (Jan 21):** Listed as $10K MRR POC closing this month
- **MSA Scope:** Expanded to include telephony component
- **Neysa Partnership:** Mentioned in YuVerse context as joint opportunity; Dipen Shah BOM shared Dec 4
- **Slack #gtm:** Multiple updates on MSA legal review
- **Technical Sync (Feb 4):** Integration status update - conversation_id API shared by Rehan
- **Email Thread - Telephone Integration:** Full integration lifecycle from Jan 16 → Feb 11 (scope doc → API exchange → IP whitelisting → call delivery issue)
- **Email Thread - Interaction with Vi:** Requirements exchange, SOW/legal, architecture diagrams, security details (Jan 16 → Feb 11)
- **WhatsApp - Harsh ↔ Tanvi (Feb 9):** Agreement status - Vi closing internal points with cyber/network teams
- **Sybill Meeting Summary (Jan 19):** Detailed capture of telephony integration discussion

---

**🔴 BLOCKER: Calls not connecting since Feb 9 — Prutech investigating (Feb 11)**
**🎯 TARGET: Resolve call delivery + agreement closure**
**🔧 INTEGRATION: Code complete on Smallest side. Production ETA was Feb 11 EOD — blocked.**
**📋 LEGAL: Smallest points closed. Vi closing internal points with cyber/network teams.**
**💼 USE CASE: P2P conversion voice agent**
**📞 VOLUME: 1,39,535 dials → 60,000 connects (POC)**
**🌐 LANGUAGES: English + Hindi**
**💰 MRR: $10,000**
