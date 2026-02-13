# TVS Credit Services - Client Context

**Last Updated:** 2026-02-04
**Deal Owner:** Harsh Jain
**Stage:** **POC SCOPING - Deep-dive Complete**
**Priority:** 🔥 **HIGH - 196K calls/month potential**

---

## TL;DR (Updated Post Feb 4 Call)

| Item | Details |
|------|---------|
| **POC Contact** | Manigandan J M - 9003023382 - Manikandan.JM@tvscredit.com |
| **His Role** | Fee Products (business side), reports to Kartik, now leading independently |
| **Conviction** | HIGH - genuinely interested, asking about cross-functional use |
| **Core Flow** | WhatsApp nudge → PWA → Payment. **Voice handles drop-offs (98% of conversions!)** |
| **Volume** | **2 lakh customers/month** nudged, ~196K voice calls/month |
| **Languages** | Tamil, Telugu, Hindi for POC |
| **Next Steps** | 1) Share demo recording 2) Technical call with their team 3) Discuss POC terms |
| **Upside** | Future projects are 100% voice-based + collections cross-sell opportunity |

---

## Company Overview

- **Company:** TVS Credit Services Limited
- **Website:** https://www.tvscredit.com/
- **Industry:** NBFC (RBI-registered Non-Banking Financial Company)
- **Parent:** TVS Group
- **Founded:** 2010
- **Customer Base:** 3 crore+ customers
- **Presence:** 157 area offices across 22 states in India
- **Country:** India
- **Deal Type:** Direct

**Business Lines:**
- Two-wheeler finance
- Used car loans
- Consumer durable loans
- Tractor financing
- Personal loans
- Mobile loans
- Gold loans

---

## What They're Evaluating

### Product
- **Voice AI for VAS Sales** - Primary use case (Health OPD plans)

### Use Case
- **Full Sales Closure** - Not just lead capture, but complete transaction with payment gateway
- **Drop-off Recovery** - Voice bot handles 98% of customers who don't convert via WhatsApp/PWA
- **Multi-language Support** - Tamil, Telugu, Hindi for POC; full regional rollout later

---

## Commercial Details

| Metric | Value |
|--------|-------|
| **Est. MRR** | **$5K-8K** (at 196K calls/month) |
| **ARR Potential** | **$60K-100K** |
| **Deal Type** | Direct |
| **Volume** | ~196,000 voice calls/month (POC scope) |
| **Deployment** | Cloud (on-prem option discussed) |

---

## Key Contacts

| Name | Role | Email | Notes |
|------|------|-------|-------|
| **Manigandan J M** | Fee Products (Taking over as POC) | Manikandan.JM@tvscredit.com | New primary contact - was silent deputy in Jan 14 call |
| Kartik Kopparty | Fee Products (Previous POC) | Kartik.Kopparty@tvscredit.com | Moving to different project |
| P Venkatbabu | Fee Products | Venkatbabu.P@tvscredit.com | CC'd on threads |

**Important Context on Org Dynamics:**
- **Both Kartik & Manigandan are from Fee Products (Business side)**
- Kartik was the lead, Manigandan was his deputy on this initiative
- Manigandan was **silent throughout** the Jan 14 call - Kartik drove everything
- Now Kartik is moving to different project → Manigandan takes over

**Key Implication:**
- Manigandan inherits an initiative he didn't actively drive
- He heard the conversations but wasn't the one asking questions or setting direction
- Need to understand: Does he have the same conviction? Same understanding of requirements?
- May need to re-establish context and get his buy-in fresh

---

## Use Case Details

### Primary Objective
Transition from manual call center to **AI-powered Voice Bot** for closing VAS sales to customers who drop off from WhatsApp/PWA journey.

### The Actual Flow (Confirmed Feb 4)

```
Step 1: WhatsApp Nudge
        - Send content/banners about VAS products to customer base
        - Customer clicks link
                ↓
Step 2: PWA (Progressive Web App)  
        - Web page showing product benefits in detail
        - Multiple CTAs including payment link
                ↓
Step 3: Payment Gateway
        - Customer completes purchase
        - Only ~1-2% convert organically here
                ↓
Step 4: Voice Bot (THIS IS WHERE WE COME IN)
        - Drop-off customers (98-99% of base!) get outbound call
        - Voice bot explains product, handles objections, closes sale
        - Sends payment link via SMS (WhatsApp integration for production)
        - Confirms payment completion on call
```

### Key Insight
**Voice isn't secondary - it handles the MAJORITY of conversions!**
> "Closing the lead organically will be only 1% of total base... 98% will be happening through call center only."

### Target Product: Health OPD Plans

| Plan | Price (Inc. GST) | Key Benefits |
|------|-----------------|--------------|
| **Silver** | ₹299 | 12 teleconsultations, ₹2,500 hospitalization benefit, 10% pharmacy discount |
| **Gold** | ₹499 | All specialities consultations, ₹5,000 hospitalization benefit, OPD in-clinic ₹500 |
| **Platinum** | ₹699 | 24 teleconsultations, ₹10,000 hospitalization benefit, 2 adults covered, smartwatch discount |

**USPs:**
- Face scan (contactless health monitoring)
- Hospital-linked wellness benefit (OPD coverage upon 24hr+ hospitalization)

### Language Requirements (POC Priority)
1. **Tamil** - Must have (Tamil Nadu doesn't work in Hindi)
2. **Telugu** - Priority
3. **Hindi** - Common across rest of India

Full rollout: Tamil, Telugu, Kannada, Malayalam + Hindi

### Volume (Confirmed Feb 4)
- **2 lakh customers/month** minimum nudged via WhatsApp
- **~196,000 voice calls/month** (98% drop-off rate from WhatsApp/PWA)
- "It must be in lakhs, only not in thousands"
- May increase based on business rules

---

## BANT Assessment

| Factor | Status |
|--------|--------|
| **Budget** | Not disclosed |
| **Authority** | Manigandan J M (needs clarity on final decision-maker/signing authority) |
| **Need** | Immediate - wants to finalize vendors after paid POC in next 30 days |
| **Timeline** | Full deployment by **end of March 2026** |

---

## Pain Points (from previous calls)

1. **Need contactless sales channel** - Want to upsell/cross-sell to 30M+ customers without deploying additional call-center or field sales resources

2. **End-to-end closure challenge** - Need the bot to handle full sales cycle including payment link and confirmation, not just intent capture

3. **Non-tech-savvy audience** - Customer base largely from Tier-2/3 cities; solution must manage language switching, interruptions, and rushed callers

4. **Tight timeline** - Only ~2 months to deployment (before FY26 targets kick in April 2026)

---

## Critical Quote from Kartik (Jan 14 Call)

> "There's a fine difference, Divyanshu, in between what you just mentioned and what I want. So basically what you're saying is that it captures the buying intent... passes on to the sales representative... **It's not exactly what I'm asking.**"

> "**I want the bot to kind of close the sale, you know, on the call itself with the payment gateway.** We have our own payment gateway... basically closing the sale. The customer saying yes, I have understood the product, yes I want to purchase it, please share the payment link... the payment link is shared on WhatsApp or any interface and then the payment is done. **To that level. Can the voice bot be that effective?**"

This is THE key requirement - not intent capture, but **full transaction closure**.

---

## What They're Looking For

1. **Voice bot that can close sales** - Not just lead generation, but full transaction completion with payment gateway integration

2. **WhatsApp + Voice hybrid** - Primary WhatsApp flow with voice fallback for drop-offs

3. **Multi-language support** - Seamless language switching mid-conversation

4. **Demo recordings** - Want to hear real call examples showing language handling and emotion detection

5. **Paid PoC** - Open to 15-day paid proof-of-concept if demos meet expectations

---

## Customer Base Challenges (Kartik's Words)

> "Our customer base like I mentioned to you in a previous call are basically from **tier 2 cities and beyond**. It's a **very challenging customer base** that we have. So even we know that **this is not your tech savvy crowd** that we are going to have."

**What they want to validate in demos:**
- Language switching capability
- Context switching handling
- Identifying the "pulse or emotion" of the customer
- Detecting if customer is "in a listening mood or in a rushed state"
- Interruption handling
- Handling colloquial/non-standard speech patterns

---

## Engagement Timeline

| Date | Event |
|------|-------|
| Dec 5, 2025 | First contact - Kartik sent Teams invite |
| Dec 11, 2025 | Discovery call scheduled |
| Jan 9, 2026 | Follow-up, rescheduled discovery call to Jan 14 |
| Jan 14, 2026 | Discovery call held - Use case deep-dive |
| Jan 15, 2026 | Divyanshu sent deck + demo recording |
| Jan 19, 2026 | Kartik shared Health OPD product details |
| Jan 30, 2026 | Internal handoff to Sales (Harsh/Tausif) |
| **Feb 4, 2026** | **Deep-dive call with Manigandan - COMPLETED** |

---

## Feb 4 Call Summary (Harsh × Manigandan)

### The Actual Customer Journey (Clarified!)

```
1. WhatsApp Nudge (content/banners about VAS product)
         ↓
2. PWA (Progressive Web App) - product benefits page
         ↓
3. Payment Gateway - customer completes purchase
         ↓
   IF CUSTOMER DROPS OFF (98-99% of cases!)
         ↓
4. Voice Bot calls to close the sale
```

**Key insight:** Voice isn't backup - it handles MAJORITY of conversions!
> "Closing the lead organically will be only 1% of total base... 98% will be happening through call center only."

### Volume Confirmed
- **2 lakh customers/month** minimum nudged
- 98% need voice intervention = **~196,000 voice calls/month**
- "It must be in lakhs, only not in thousands"

### Manigandan's Conviction
He's genuinely interested, not just inheriting:
- "I'm also very much interested in exploring how this is going to work for us"
- Asked about cross-functional use (collections for other departments)
- Mentioned future projects that are 100% voice-based

### Cross-Sell Opportunity
> "Being at NBFC, we have multiple departments who are having such kind of requirements where we are doing all those things with manual call center."

**Future projects** are in pipeline that are entirely voice-based (not WhatsApp-first).

### Technical Discussion Pending
- Tech team couldn't join - "back to back meetings"
- Need separate technical call
- Questions asked: On-prem vs cloud, concurrency, payment link delivery (SMS vs WhatsApp)

### Language for POC
- Tamil, Telugu, Hindi confirmed
- Harsh gave honest assessment of readiness levels

### Next Steps
1. Share demo recording (voice agent + payment link flow)
2. Schedule technical call with their tech team
3. Schedule follow-up business discussion
4. Discuss POC terms, commercials, timeline, success criteria

### Manigandan's Contact
- Mobile: 9003023382
- Email: Manikandan.JM@tvscredit.com

---

## Materials Shared

**From Smallest to TVS Credit:**
- Sales deck: "Smallest for Contact Centres v1.5"
- Demo recording: Credit card cold call outbound

**From TVS Credit to Smallest:**
- Health OPD product construct and pricing table
- Benefit descriptions

---

## Next Steps

### Immediate (Post Feb 4 Call)

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Share demo recording showing voice agent + payment link flow | Harsh/Divyanshu | PENDING |
| 2 | Schedule technical call with TVS Credit tech team | Harsh | PENDING |
| 3 | Schedule follow-up business discussion | Harsh | PENDING |
| 4 | Prepare POC proposal (terms, commercials, timeline, success criteria) | Harsh | PENDING |

**Manigandan's ask:** "Meanwhile, you share those recordings that you have with you."

---

## Prep Notes (Feb 4 Call)

### Key Objectives

1. **Build relationship with Manigandan** - He was silent before, need to hear HIS perspective

2. **Confirm he's bought in** - Does he share Kartik's conviction? Or is this an inherited task?

3. **Reconfirm requirements** - Ensure "close the sale" vision is intact post-Kartik

4. **Clarify authority** - Does he have decision-making power? Budget sign-off?

5. **Move toward PoC** - 15-day paid PoC scope, success metrics, volumes

### Approach: Deputy Taking Over from Champion

Kartik was clearly the driver - asked all the questions, set the vision. Manigandan observed but didn't engage. Now he inherits it.

- **Don't assume he has full context** - Recap key points, let him react
- **Get HIS perspective** - What does he think? What are his concerns?
- **Check for conviction** - Is this his priority or just something handed to him?
- **Identify any blockers** - Did anything change with Kartik's exit?

### Key Questions to Ask

**Understanding His Perspective:**
1. "Now that you're leading this, what's your take on the project? What excites you about it?"
2. "Any concerns or questions from the previous discussions that we should address?"
3. "Is this a priority for you personally, or is there other stuff competing for your attention?"

**Confirming Requirements:**
4. "Kartik was clear about wanting full sales closure with payment link - is that still the vision?"
5. "The WhatsApp + Voice combination - is that still the approach?"
6. "Any changes to the timeline? Still targeting March?"

**Authority & Decision:**
7. "Do you have the authority to move forward with a PoC?"
8. "Who else needs to be involved in the decision?"
9. "Is the budget still allocated, or did anything change with the org restructure?"

**Moving Forward:**
10. "Did you review the demo recordings we shared? Any feedback?"
11. "What would you need to see to feel confident moving to a paid PoC?"
12. "Can we lock in a start date for the PoC?"

### Potential Concerns to Address

1. **Conviction gap** - He may see this as inherited baggage vs. his own initiative
2. **Context gap** - He heard the calls but wasn't driving - may have gaps
3. **Authority uncertainty** - Kartik may have had authority that doesn't transfer
4. **Timeline pressure** - March 2026 is aggressive; be realistic
5. **Champion loss** - Kartik was clearly the internal champion; who fills that role now?

---

## Relevant smallest.ai Capabilities to Highlight

- **End-to-end sales closure** with payment link integration (Paytm case study)
- **Low latency** (~100ms response time)
- **On-prem deployment** option available
- **BFSI experience** - Similar assisted sales use cases (merchant loans, digital gold)
- **Multi-language support** with mid-conversation switching
- **Emotion detection** and handling interruptions

---

## Paytm Case Study (Referenced in Jan 14 Call)

Divyanshu mentioned two relevant Paytm use cases:

1. **Merchant Loans** - AI agent assisted customers with loan process
2. **Digital Gold Sales** - AI agent helped customers buy digital gold

> "Both of these cases, the AI agent was actually used to help and assist the customer with their relevant concerns, questions or the process altogether to go ahead and buy it."

**Note:** Kartik asked if the bot can close sales with payment gateway. Divyanshu confirmed: "Yes, it can. We have done this for previous customers across industries."

---

## Decision Process (from Jan 14 Call)

Kartik laid out their evaluation path clearly:

> "Even before we come to the paid PoC bit... Can you show us some demo? If you have some use cases, ready use cases which are very close to our requirement, we can listen to those calls or my team can interact with the voice bot."

> "If we find merit to this process, yes we can go ahead. The cost is sitting within our budgets etc, we will be willing to take this to the next level and deploy it on a **pilot basis for 3 to 6 months** and see how this goes."

**Evaluation Sequence:**
1. Review demo recordings of similar sales use cases
2. Team interacts with voice bot to assess capabilities
3. If merit found + costs fit → Paid PoC (15 days)
4. If PoC successful → Pilot deployment (3-6 months)

---

## Cross-Sell & Expansion Opportunities

### 1. Collections (Mentioned by Manigandan)
> "If I could use this service for any other verticals or any other departments also, I can refer it... Being at NBFC, we have multiple departments who are having such kind of requirements where we are doing all those things with manual call center."

Manigandan was interested in the Jaipur NBFC collections case study (45K calls/day, 2.5x efficiency improvement).

### 2. Future Voice-First Projects
> "We have few more future products projects which **totally depends upon call center only**... probably there your role will be very larger."

These are 100% voice-based projects (not WhatsApp-first). Entry point is voice itself.

### 3. WhatsApp Bot Bundling
Manigandan asked if we offer WhatsApp bot service - potential to either:
- Partner with WhatsApp BSP
- Refer to WhatsApp directly (Harsh offered to connect)

---

## Strategic Importance

### Why This Matters
1. **NBFC Vertical:** Fourth NBFC opportunity (Kogta, Piramal, Cholamandalam precedent)
2. **High Volume:** ~196K calls/month starting volume
3. **TVS Brand:** Major conglomerate validation
4. **Full Sales Closure:** Demonstrates end-to-end capability (not just lead gen)
5. **Expansion Potential:** Collections + future voice-first projects
6. **Regional Languages:** Tamil/Telugu capability showcase

---

## Notes

- TVS Credit has a non-tech-savvy customer base (Tier-2/3 cities) - demos should highlight natural conversation handling
- They want to see robustness in handling interruptions, background noise, and colloquial language
- Voice handles 98% of conversions (drop-offs from WhatsApp/PWA) - this is the main event, not backup
- Manigandan is bought in and interested - risk of "inherited initiative" is LOW
- **Opportunity:** ~196K calls/month for VAS + collections cross-sell + future voice-first projects

---

## Source References
- **Granola Meeting (Feb 4):** Deep-dive call with Manigandan
- **Granola Meeting (Jan 14):** Discovery call with Kartik
- **Email Thread:** Health OPD product details from Kartik (Jan 19)
- **Internal Handoff:** From Divyanshu (BDR) to Harsh/Tausif (Jan 30)

---

**🎯 TARGET: POC start by mid-Feb 2026**
**🔧 KEY: Share demo recordings, schedule technical call**
**💼 USE CASE: VAS sales closure (Health OPD plans)**
**📞 VOLUME: ~196K calls/month**
**🌐 LANGUAGES: Tamil, Telugu, Hindi**
**💰 POTENTIAL: $5-8K MRR (VAS alone, more with collections)**
