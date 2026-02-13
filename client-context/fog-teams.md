# FOG Teams / V3.1 Asset - Client Context

**Last Updated:** 2026-02-09 (post Kanik negotiation + Apoorv debrief)
**Deal Owner:** Aditya Bhat (FDE), Harsh Jain
**Stage:** **CLOSURE - Terms Verbally Agreed, Pending Internal Sign-Off**
**Priority:** 🔥 **HIGH - Close by Feb 12**

---

## Company Overview
- **Company:** FOG Teams (V3.1 Asset client)
- **Industry:** Voice AI Platform / Contact Center Technology
- **Contact:** Kanik Arora (Co-founder, Decision Maker)
- **Country:** TBD

---

## What They're Buying

### Products
- **STT (Speech-to-Text)** - Primary
- **TTS (Text-to-Speech)** - Secondary
- Both required as separate line items

### Use Cases
- Voice AI platform infrastructure
- Real-time transcription services
- Voice synthesis for voice bots
- Multilingual support

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Min Annual Commitment** | **₹30 Lakh** |
| **Deal Type** | Deal (Production) |
| **Products** | STT + TTS (separate line items) |
| **Agreement Term** | 5-year agreement |
| **Billing Start** | 1st March 2026 |
| **Payment Terms** | Quarterly |

### Latest Offer Sent to Kanik (4th Feb 2026)

This is the most recent commercial proposal shared directly with Kanik:

#### STT Slab Pricing

| Tier | Rate |
|------|------|
| Up to 20M mins | ₹0.20/min |
| 20M - 100M mins | ₹0.15/min |
| 100M - 1B mins | ₹0.09/min |
| 1B+ mins | ₹0.045/min |

#### TTS Pricing
- **Flat rate: ₹0.45/min**

#### Agreement Terms
- **Minimum annual commitment:** ₹30 Lakh
- **Agreement duration:** 5 years
- **Annual increment:** 5% on both STT and TTS rates
- **Cancellation:** 60-day notice, 1-year minimum before cancellation allowed
- **Payment:** Quarterly
- **Billing start date:** 1st March 2026
- **Connection/Token:** No connection customer, token-based up to 3

#### Closing Note (verbatim)
> "We can close the agreement this week itself."

### Previous Volume & Pricing Estimates (for reference)

#### Phase 1: Initial (Year 1)
| Metric | Value |
|--------|-------|
| Call Volume | 1 Cr calls/year (10M calls) |
| Total Minutes | 10M minutes/year |
| Usage Split | 5M STT + 5M TTS (50-50 assumed) |
| Pricing Tier | Starter (up to 20M mins/year) |
| **Annual Cost** | **₹67.5 Lakh** (~$75K) |
| **Monthly Cost** | ₹5.63 Lakh (~$6,250) |

#### Phase 2: Scale (Post Year 1)
| Metric | Value |
|--------|-------|
| Call Volume | 1 Cr calls/month (10M calls/month) |
| Total Minutes | 10M minutes/month = 120M mins/year |
| Usage Split | 5M STT + 5M TTS per month |
| Pricing Tier | Scale (100M-1B mins/year) |
| **Annual Cost** | **₹4.74 Cr** (~$526K) |
| **Monthly Cost** | ₹39.5 Lakh (~$44K) |

**⚠️ NOTE:** Phase 1/2 estimates are pre-negotiation projections. The 4th Feb offer above is the actual sent quote.

---

## Apoorv’s Pricing / Negotiation Guidance (Jan 26)

Goal: **Close fast** without showing all pricing permutations up front.

### How to quote (Rule 101)
- **Send a “feeler” first quote only** (minimum viable pricing), then iterate after their feedback.
- **Do NOT send slabs / all tiers on day 1** — keep room to maneuver.
- Anchor on a single ask:
  - **Annual commitment:** **1 Cr minutes**
  - **Split guidance:** recommend **50/50 STT:TTS**, but say you’re open to their mix.
- Include the **on-prem pricing** (models-only) for **newer models (v3.1 / Pulse STT)** in the same note.
- Keep the circle tight: **“Between you, me (Apoorv), and him (buyer)”** — don’t add extra people unless needed.

### Why this works
- First quote is to **gather signal**; the buyer also opens their cards gradually.
- Over-sharing upfront makes negotiation harder (you lose optionality and invite apples-to-oranges comparisons).

### Closing language to use
- “Please share feedback on this first cut — happy to align slabs/structure after.”
- “Looking forward to closing this in the next **1–2 days**.”

### Meta
- Competition benchmarking/validation is still in progress; Apoorv expects **15–30 days** to firm this up.

---

## Testing Status

### Current Phase
- **Testing Duration:** 2.5-3 weeks (started early Jan 2026)
- **Feedback:** Sharing feedback "today" (per Jan 21 GTM update)
- **Focus:** STT model quality evaluation
- **Timeline:** Testing completion by end Jan 2026

### Language Requirements
- **Confirmed:** Hindi/English
- **Additional Languages:** Training ~7-10 days per language
- Need to confirm specific language list

---

## Technical Requirements

### Critical Blocker for Large Deals
**On-Prem Zero-Egress Metering**
- Kanik's main blocker for large enterprise deals
- Current metering requires data egress
- **If solved:** Can eliminate other vendor contracts
- **Potential:** "Double value" per customer
- **Next Step:** Akshat technical call with co-founder

### Integration
- API for customer data retrieval
- Real-time streaming support
- WebSocket or REST API
- Minimal latency requirements

---

## Timeline

| Date | Milestone |
|------|-----------|
| Early Jan 2026 | Testing started |
| Mid-Jan 2026 | 2.5-3 weeks testing period |
| Jan 27 | Feedback sharing |
| Late Jan | Commercial negotiation |
| **4th Feb 2026** | **Final offer sent to Kanik (STT slabs + TTS flat + 5-yr terms)** |
| **Week of 9th Feb** | **TARGET: Close agreement** |
| **1st Mar 2026** | **Billing starts** |

---

## Key Meetings & Discussions

### Testing Feedback Session (Scheduled)
- Testing completion: 2.5-3 weeks from start
- Feedback sharing: Jan 27, 2026
- Apoorv quote discussion on TTS + STT separate line items

### Technical Discussion (Pending)
- **On-prem metering solution**
- Akshat call with co-founder needed
- Critical for enterprise deal expansion

---

## Competitive Context

### Current Alternatives
- Using some TTS (ours already)
- Exploring other vendors for on-prem
- Considering Whisper (but quality issues)

### Our Advantages
- Superior quality metrics vs Whisper/Deepgram
- Dual capability (STT + TTS from single vendor)
- Proven at scale
- Direct engineering support
- Can solve on-prem metering (if Akshat call successful)

---

## Next Steps

### Immediate (This Week)
- [ ] Collect testing feedback (Jan 27)
- [ ] **Validate usage split** (STT vs TTS ratio in typical calls)
- [ ] Send two-phase commercial proposal
- [ ] Schedule Akshat call on zero-egress metering
- [ ] Create WhatsApp group for coordination

### Post-Feedback
- [ ] Address any quality concerns from testing
- [ ] Finalize language list and training timeline
- [ ] Resolve on-prem metering if possible
- [ ] Close commercial agreement
- [ ] Plan production deployment

---

## Critical Success Factors

1. **STT Quality:** Must meet their evaluation criteria
2. **On-Prem Metering:** If solved, unlocks enterprise expansion
3. **Pricing:** Competitive at scale tier
4. **Language Support:** Hindi/English confirmed, others TBD
5. **Integration:** Seamless API experience

---

## Strategic Opportunity

### If Metering Solved
- Can eliminate their other vendor contracts
- "Double value" per customer for them
- Positions Smallest as sole voice AI vendor
- Opens enterprise customer deals for FOG Teams
- Strengthens partnership potential

---

## Help Needed

### From Apoorv
- Commercial structure confirmation (separate STT/TTS line items)
- Pricing approval for scale tier
- Strategy on on-prem metering value

### From Akshat
- Technical call with co-founder on zero-egress metering
- Solution feasibility assessment
- Implementation timeline if feasible

---

## Source References
- **GTM Update (Jan 21):** Listed as $2K MRR closing this month
- **FOG Teams Quote Summary:** Detailed pricing analysis and volume projections
- **Slack #gtm:** Testing timeline and feedback schedule
- **Kanik Arora:** Direct discussions on technical requirements

---

---

## Internal Discussion: Commercial Negotiation with Kanik (9th Feb 2026)

**Source:** Granola — "Chat with Kanik (Fogteams) - Contract negotiation" + "Chat with Apoorv (Fogteams) partner commitment terms"
**Date:** 9th February 2026
**Participants:** Harsh (Kanik call), Harsh + Apoorv (internal debrief)

### What Was Agreed with Kanik

Kanik counter-offered against the Feb 4 proposal. The following terms were verbally agreed, pending internal sign-off:

| Term | Our Feb 4 Offer | Kanik Negotiated (Feb 9) | Delta |
|------|-----------------|--------------------------|-------|
| **STT Tier 1** (up to 20M) | ₹0.20/min | **₹0.18/min** | -10% concession |
| **STT Tier 2** (20M-100M) | ₹0.15/min | **₹0.12/min** | -20% concession |
| **STT Tier 3** (100M-1B) | ₹0.09/min | ₹0.09/min | Held |
| **STT Tier 4** (1B+) | ₹0.045/min | ₹0.045/min | Held |
| **TTS** | ₹0.45/min flat | Not re-discussed | Assumed unchanged — confirm |
| **Min Annual Commitment** | ₹30 Lakh | **₹25 Lakh** | -₹5L (Kanik asked ₹22L, landed at ₹25L) |
| **Notice Period** | 60 days | **30 days** | Halved |
| **Annual Increment** | 5% | 5% | Same |
| **Agreement Duration** | 5 years | 5 years | Same |
| **Min Before Cancellation** | 1 year | 1 year | Same |
| **Payment Schedule** | Quarterly | Quarterly | Same |
| **Customer/Token Limit** | 3 | 3 | Same |
| **GST** | Not specified | **GST separate** (all pricing ex-GST) | Clarified |
| **Billing Start** | 1st March 2026 | **March (TBD)** / Contract April 15th | ⚠️ Needs alignment |

### Apoorv Internal Debrief — Key Discussion Points

1. **Billing start date is the main open item**
   - Kanik wants billing from March, but contract start date is April 15th
   - Kanik specifically flagged avoiding "double payment" with current vendor during transition
   - Harsh needs to check internally whether we can accommodate March billing start
   - Apoorv's view: Finance team to prepare an addendum to bridge the gap

2. **January payment is overdue**
   - Outstanding payment from Jan needs collection BEFORE we finalize March transition
   - Cannot let this slip — sets bad precedent on payment discipline

3. **Commitment structure acceptable**
   - 30-day notice (down from 60) — Apoorv acknowledged this is workable
   - 1-year minimum before cancellation — agreed
   - 5% annual increment — confirmed
   - ₹25L min commitment — middle ground, acceptable

4. **Finance team action needed**
   - Prepare addendum to existing agreement
   - Adjust current payment amounts for new structure
   - Set up new billing cycle from March onwards

### Items Requiring Internal Sign-Off

- [ ] **March billing start** — Can we bill from March if contract formally starts April 15th? (Check with finance/Apoorv)
- [ ] **₹25L min annual commitment** — Apoorv to formally approve (down from ₹30L ask)
- [ ] **STT Tier 1 & 2 discount** — ₹0.18 and ₹0.12 vs our ₹0.20 and ₹0.15. Acceptable? (Revenue impact at Phase 1 volumes)
- [ ] **TTS ₹0.45/min** — Confirm this still stands; not re-negotiated in Kanik call
- [ ] **January overdue payment** — Collect before finalizing March terms

### Revenue Impact Analysis (at Phase 1 volumes: 5M STT + 5M TTS)

| Scenario | STT Revenue | TTS Revenue | Total Annual |
|----------|-------------|-------------|--------------|
| **Original offer (₹0.20 STT + ₹0.45 TTS)** | ₹10L | ₹22.5L | **₹32.5L** |
| **Negotiated (₹0.18 STT + ₹0.45 TTS)** | ₹9L | ₹22.5L | **₹31.5L** |
| **Delta** | -₹1L | — | **-₹1L** (~3% reduction) |

At Phase 1 volumes, the STT concession costs us ~₹1L/year. Manageable. The bigger risk is the min commitment dropping from ₹30L to ₹25L (₹5L floor reduction).

### Next Steps (Harsh)

1. **Today (Feb 9):** Get Apoorv sign-off on ₹25L min commitment and March billing start
2. **Today/Tomorrow:** Collect January overdue payment from Kanik — make this a precondition
3. **By Feb 11:** Confirm TTS ₹0.45/min pricing is unchanged
4. **By Feb 11:** Finance team prepares addendum with bridge billing structure
5. **By Feb 12:** Send final agreement to Kanik incorporating all negotiated terms
6. **Kanik's action:** Send summary message confirming all agreed points

### Internal Negotiation Assessment

**What we gave up:**
- STT Tier 1: ₹0.02/min (~₹1L/yr at Phase 1)
- STT Tier 2: ₹0.03/min (material only at scale)
- Min commitment: ₹5L floor reduction
- Notice period: Halved from 60→30 days

**What we held:**
- 5-year term — significant lock-in
- 5% annual escalator — protects against inflation
- STT Tier 3 & 4 pricing — intact for scale
- Quarterly billing — cash flow friendly
- 3-customer cap — manageable scope

**Assessment:** Net acceptable deal. The concessions are at the margin, and the 5-year lock-in + escalator protects long-term value. **Priority is to close fast — don't re-open negotiation on settled points.**

---

**🎯 TARGET: Close agreement by Feb 12, 2026**
**📄 NEGOTIATED TERMS: ₹25L min commitment, 5-yr, STT slabs (₹0.18/0.12/0.09/0.045) + TTS ₹0.45/min (TBC)**
**📅 BILLING START: March 2026 (pending internal approval)**
**⚠️ BLOCKERS: Jan payment overdue, March billing start needs finance sign-off**
**📊 EXPANSION POTENTIAL: ₹4.74 Cr if they scale to Phase 2**
