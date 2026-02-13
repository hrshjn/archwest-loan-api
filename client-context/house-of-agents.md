# House of Agents - Client Context

**Last Updated:** 2026-01-27
**Deal Owner:** FDE Team (Pratirath Gupta), Harsh Jain
**Stage:** **BLOCKED - Renewal**
**Priority:** 🔴 **CRITICAL - Agreement Expires Feb 2026**

---

## Company Overview
- **Company:** House of Agents
- **Industry:** Voice AI / Collections Platform
- **Website:** houseofagents.ai
- **Contacts:**
  - Anmol Pathak (anmol@houseofagents.ai) - Primary Decision Maker
  - Ritambuj Dwivedi (ritambuj@houseofagents.ai) - Technical SPOC
  - Vineet Arora (aroravineet07@gmail.com) - Engineering/Integration Lead

---

## What They're Using

### Current Product
- **TTS Lightning V2** - Text-to-Speech with voice cloning

### Use Cases
- **Outbound Voice Bots** for financial services/verification
- **Collections Calling** - Payment reminders and negotiation
- **PAN Card Reading** - Financial verification calls
- **High-Volume Calling** - 80+ concurrent calls operational

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Current MRR** | **$2,000** (₹22,500/month) |
| **ARR** | **$24,000** |
| **Contract** | 3-month agreement (Oct 2025 start) |
| **Volume Committed** | 100,000 minutes/month |
| **Concurrency** | 10 included (achieving 80 concurrent) |
| **Billing** | Manual credit allocation (bank transfer) |
| **Agreement Expires** | **February 2026** |

### Expansion Potential
| Phase | Volume | MRR | ARR |
|-------|--------|-----|-----|
| Current | 100K min/mo | $2K | $24K |
| Near-term Target | 200K min/mo | $4K | $48K |
| Scale Aspiration | 1M min/mo | $20K | $240K |

**Note:** Currently using <5% of allocated credits due to quality issues (now being addressed).

---

## Critical Blocker - RENEWAL RISK

### 🚨 PRIMARY BLOCKER
**Issue:** Voice cloning not available in V3/V3.1
- Voice cloning worked perfectly in V2
- V3 launched without voice cloning support
- Customer NEEDS cloned voices for their use case
- **This is blocking the renewal**

### Current Status
- ✅ V3.1 access provided (Jan 22, 2026)
- ✅ Custom voice cloning now offered
- ⏳ Awaiting customer to test V3.1 cloning
- ⏳ Need audio samples for 2-3 voice clones

---

## Service Reliability Issues (December 2025)

### Outages That Damaged Trust
1. **Dec 9:** Complete audio failure (cloud provider issue)
2. **Dec 19:** Audio failure recurrence
3. **Dec 23:** Third audio failure - Vineet requested "permanent fix"

### Root Cause
- Cloud provider infrastructure issues
- Now migrated to more reliable provider

### Impact
- Trust erosion
- Production readiness concerns
- Renewal at risk

---

## Technical Challenges

### 1. PAN Card Reading (Active Issue)
**Problem:** TTS normalizes character-number combinations
- Example: "AAC 92 double 7M" instead of "A-A-C-9-2-7-7-M"
- Need: Clear, slow, character-by-character pronunciation
- **Status:** Word-level duration controls in development

### 2. Quality Consistency
**Problem:** Playground (24kHz) ≠ Production (16kHz) quality
- Demos don't match production experience
- Impact on customer satisfaction

### 3. Regional Availability
**Problem:** V3 not available in USA region (discovered during Jan 16 outage)
- Limits deployment options
- Affects production planning

---

## Recovery Strategy

### Phase 1: Win Back Trust (This Week)
1. ✅ Acknowledge December outages directly
2. ✅ Share infrastructure migration completion
3. ✅ Provide V3.1 access with voice cloning
4. ⏳ Get audio samples for 2-3 voice clones
5. ⏳ Deliver cloned voices within 48 hours

### Phase 2: Expand the Relationship (Next 30 Days)
1. **Voice Cloning Excellence**
   - Deliver 2-3 custom V3.1 cloned voices
   - Demonstrate quality improvement over V2
   - Show reliability improvements
   
2. **PAN Reading Solution**
   - Schedule optimization session with Vineet
   - Provide custom pronunciation rules
   - Beta test word-level duration controls
   
3. **STT Cross-Sell**
   - They're doing 80+ concurrent calls = 80 ASR streams
   - Revenue opportunity: ~200K min/month STT = additional $2-3K MRR
   - Pitch: "Complete voice AI stack with single vendor"

---

## Pricing Strategy for Renewal

### Option 1: Renewal + Expansion (Recommended)
- **Volume:** 200K minutes/month
- **Duration:** 6 months
- **Price:** ₹40,000/month (~$2,200 MRR)
- **Includes:**
  - 3 custom cloned voices in V3.1
  - 20 concurrency
  - Priority support with direct escalation
  - Quarterly business reviews

### Option 2: Bundle TTS + STT
- **TTS:** 200K minutes/month
- **STT:** 150K minutes/month
- **Bundle Price:** ₹70,000/month (~$3,800 MRR)
- **Includes:**
  - Everything from Option 1
  - Free STT trial for 2 weeks
  - 15% bundle discount
  - Unified SLA

---

## Key Meeting Notes

### December 3, 2025 - Quality Issues Discussion
**Critical feedback from Anmol:**
- Original commitment: 2.5M minutes monthly
- Actual usage: <5% due to quality constraints
- Playground vs production quality mismatch
- PAN card reading issues blocking usage
- Voice cloning is only viable solution

### January 12-22, 2026 - V3 Migration Attempt
- Jan 12: Customer requested V3 access
- Jan 15: Feedback meeting scheduled with Kawal
- Jan 16: Production outage (4-5 hours down)
- Jan 20: Concurrency limits clarification (50 WebSocket, higher streams via multiplexing)
- Jan 22: V3.1 Lightning access provided with custom cloning offer

---

## Technical Stack

### Current Usage
- WebSocket-based TTS integration
- US and India regions
- Multiple concurrent streams per WebSocket
- Real-time voice generation for calls
- 80 concurrent calls achieved

### Languages
- **Hindi** - Primary
- **English** - Secondary
- **Tamil** - Added per request

---

## Action Items

### For FDE Team
- [ ] Get audio samples for 2-3 voice clones
- [ ] Deliver V3.1 cloned voices within 48 hours
- [ ] Schedule PAN reading optimization session with Vineet
- [ ] Prepare STT demo and trial
- [ ] Weekly reliability report to rebuild trust

### For Harsh
- [ ] Call with Anmol Wed/Thu to discuss renewal
- [ ] Approve bundle pricing for TTS+STT
- [ ] Executive relationship reinforcement
- [ ] Confirm Kaval on clone voice V3 availability

### For Engineering (Gaurav)
- [ ] Ensure V3.1 voice cloning production-ready
- [ ] Fast-track voice cloning for HoA (48-hour turnaround)
- [ ] USA region V3 availability timeline
- [ ] Document PAN card reading best practices
- [ ] Zero tolerance for service outages

---

## Risk Assessment

### High Risk
- **Service Reliability:** Another outage = lost account
- **Voice Cloning Quality:** If V3.1 doesn't match V2, deal is dead
- **Competitor Activity:** Likely exploring alternatives post-December

### Mitigation Plan
1. Over-communicate service status (weekly reports)
2. Prioritize voice cloning delivery
3. Offer commercial flexibility
4. Executive engagement (Harsh + Anmol call)
5. Fast-track PAN reading solution

---

## Next Steps

### This Week (Jan 27-31)
1. **Apoorv call Wed/Thu** - Renewal discussion
2. Get voice cloning audio samples
3. Deliver cloned voices in 48 hours
4. Schedule Vineet optimization session
5. Prepare bundle pricing options

### Next 30 Days
1. Secure 6-month renewal at 200K+ minutes
2. Start STT trial with production traffic
3. Maintain zero outages
4. Positive V3.1 feedback
5. Expand to TTS+STT bundle

---

## Strategic Value

### Why This Matters
- **Renewal Recovery:** Win back trust after December incidents
- **Revenue Expansion:** 2x-10x current MRR potential
- **Reference Customer:** BFSI vertical showcase
- **Product Feedback:** They've identified real issues helping improve product
- **Partnership Potential:** Exclusive deployment discussions held

---

## Source References
- **CRM Deal:** House of Agents
- **GTM Update (Jan 21):** Listed as blocked $2K MRR renewal
- **Handover Timeline Doc:** Comprehensive history from Sep 2025 - Jan 2026
- **Email Threads:** Quality issues, V3 migration, outage reports
- **Slack #gtm:** Multiple updates on clone voice blocker

---

**🎯 TARGET: Renewal secured by Feb 1, 2026**
**⚠️ RISK: High - Agreement expires Feb 2026, December outages damaged trust**
