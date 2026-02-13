# [AWS] 360 One Wealth - Client Context

**Last Updated:** 2026-01-26
**Deal Owner:** (via AWS India partnership)
**Stage:** Opportunity

---

## Company Overview
- **Company:** 360 ONE (formerly IIFL Wealth)
- **Industry:** Wealth Management / AMC
- **Contacts:** 
  - Behnaaz Kapadia (behnaaz.kapadia@360one.com) - Primary
  - Prabhath Reddy M - AMC analytics
- **Partner Channel:** AWS India
- **AWS AM:** Snehal

---

## What They're Evaluating/Buying

### Primary Product Need
- **ASR (Speech-to-Text) for Multilingual Transcription**
- Want to **stitch into existing UI** - NOT rebuild their solution
- Only need the transcription model, they have built everything else

### Use Cases

#### 1. Surveillance / Compliance Monitoring (Like SBI MF)
- Recording calls between dealers/fund managers and clients
- Monitoring for insider trading, off-guard recommendations
- Red flag detection for specific keywords
- Multilingual calls between dealer and client

#### 2. RM Voice Recording & Insights Platform (LIVE)
- Custom UI already built for voice recording
- Features: Live recording, upload pre-recorded calls, transcription, insights generation, task/opportunity extraction
- CRM integration for RMs to log interactions
- Sentiment analysis, PI data masking
- Open to entire organization

### Current Pain Point
> "The only challenge is I'm not able to get a good transcription done for multilingual calls"
> - Behnaaz Kapadia

---

## Current Tech Stack (What They've Built)

| Component | Status | Notes |
|-----------|--------|-------|
| Custom Voice Recording UI | ✅ Live | Built in-house |
| Transcription | ⚠️ AWS Transcribe | 60% accuracy for multilingual |
| Speaker Diarization | ✅ Working | Can tag speakers |
| Insights/Summary Generation | ✅ Working | Uses Claude (Bedrock) |
| CRM Integration | ✅ Working | Tasks auto-created |
| PI Data Masking | ✅ Working | PAN, email, mobile masked |
| Sentiment Analysis | ✅ Working | Built-in |

**Key Insight:** They want Smallest ASR as a **drop-in replacement** for AWS Transcribe, NOT a new platform.

---

## Volumes

| Metric | Value | Notes |
|--------|-------|-------|
| CRM Volume | 50,000 minutes/month | ⚠️ **Unverified placeholder** |
| RMs | ~300 total | ✅ Confirmed (80 Wealth, 100+ AMC) |
| Call Duration | Variable | 30 sec voice notes to 1 hour meetings |
| Adoption | Early stage | Promoting internally to drive adoption |

### ⚠️ Volume Verification (From 16/12/2025 Meeting)

**Behnaaz explicitly stated volumes are UNKNOWN:**
> "So I wouldn't be able to give you a rough sense of how many minutes it's going to go to."

**Why volumes are uncertain:**
1. Solution is NOT yet widely adopted internally
2. RMs haven't built the discipline of recording all conversations
3. Call durations vary wildly (30 sec voice notes vs 1 hour live meetings)
4. Mix of in-person meetings and voice notes

**What IS confirmed:**
- ~300 RMs across Wealth (80) and AMC (100+)
- Early adoption phase - actively promoting internally

### Pricing Analysis (STT Only - Speculative)

| Tier | Rate | Annual Cost (if 50K min/mo) |
|------|------|-----------------------------|
| Starter | ₹0.25/min | ~₹1.5 Lakh/year |
| Growth (if scales 10x to 500K/mo) | ₹0.18/min | ~₹10.8 Lakh/year |

**Note:** Actual costs TBD once adoption drives real volume data.

**Context:** They currently use AWS Transcribe with ~60% accuracy. Our STT is significantly better on Indian languages.

---

## Technical Requirements

### Languages Required (Top 7-8 Indian Languages)
| Language | Smallest Status |
|----------|-----------------|
| Hindi | ✅ Covered |
| English | ✅ Covered |
| Tamil | ✅ Covered |
| Telugu | ✅ Covered |
| Malayalam | ✅ Covered |
| Kannada | ✅ Covered |
| Marathi | ✅ Covered |
| Gujarati | ✅ Covered |
| Bengali | ❌ Not yet |

**Coverage: ~95-96%** of required languages

### Multi-Language in Single Conversation
- Scenario: 4 people, each speaking different language (Hindi, English, Marathi, Gujarati)
- Frequency: ~5% of calls
- Majority: 2 languages within single conversation

### Deployment Requirements
- **On-Prem / VPC deployment** - Data residency concern
- Data currently going to US servers (problematic)
- Need solution within their own VPC
- Confidential data / PI data restrictions

### Technical Features Needed
- Diarization (multi-party calls, more than 2 speakers)
- Sentence-level timestamps
- High accuracy for code-switching (language mixing)

---

## Current Accuracy Issues

| Model | Accuracy | Issue |
|-------|----------|-------|
| AWS Transcribe | ~60% | Poor for multilingual, code-switching |

---

## Competitive Context
- Using **AWS Transcribe** currently
- Using **Bedrock (Claude)** for insights
- Data residency forcing on-prem consideration

---

## Key Meeting Notes

### Meeting: 16/12/2025 (Harsh, Behnaaz, Prabhath)
**Context:** First detailed call after AWS FSI Symposium brief meeting

**Key Discussion Points:**
1. **Pain point clarified:** Low accuracy for regional Indian languages in transcription
2. **Existing solution:** They have built a complete voice recording UI - only need ASR
3. **Data residency:** Must be on-prem/VPC, data currently going to US servers
4. **Languages:** Need 7-8 major Indian languages
5. **Multi-language calls:** Some calls have 3-4 languages in one conversation (~5%)
6. **Scale:** ~300 RMs, adoption being driven internally

**Harsh's Response:**
- Can unbundle ASR offering
- Similar deployment with SBI Mutual Fund (insider trading monitoring)
- Will enable 7-day trial access with credits
- Share ASR documentation and benchmarks
- AWS Marketplace STT listing coming in few weeks

**Quote from Behnaaz:**
> "I don't want to rebuild this entire thing that I've already built. If I just want to use your multilingual transcription service and stitch it... bring it into this solution"

### Later Meeting Summary (From Granola)
1. **Diarization fix** - ~2 weeks timeline
2. **Pronunciation issues** - Names like "Ayush" vs "Aayush"
3. **Number handling** - "400 crore" → "4 crore" or "4 billion"
4. **Marathi performance** - AWS currently better, Smallest improving

---

## Current Status (Jan 2026)

### Trial Phase Active
- **Trial:** 7-day trial enabled
- **Status:** Early adoption stage, volumes TBD
- **AWS AM:** Snehal (AWS India)
- **Next:** Awaiting trial feedback and adoption data

---

## Action Items from 16/12 Meeting
- [x] Enable 7-day trial access with credits ✅
- [x] Share ASR API documentation ✅
- [ ] Share technical benchmarks / word error rate data
- [ ] Connect with AWS AM (Snehal) for pipeline support
- [ ] AWS Marketplace STT listing (ETA: Q1 2026)
- [ ] Answer: Multi-language (3-4 languages) in single conversation support
- [ ] On-prem deployment scoping (depends on scale/commitment)

### Post-Trial
- [ ] Collect feedback on transcription quality
- [ ] Measure improvement vs. AWS Transcribe (currently ~60%)
- [ ] Validate volume projections based on adoption
- [ ] Commercial discussion
- [ ] On-prem deployment planning if volumes justify

---

## Commercial Considerations

**Minimum Commitments:** Discussed for on-prem deployment
- Depends on scoping and scale
- Will be worked out based on where they are and where they intend to be
- AWS involvement can help structure something that works

---

## Source References
- **CRM Deal:** [AWS India] 360 ONE
- **Meeting Transcript:** 16/12/2025 - Harsh, Behnaaz, Prabhath
- **Granola Transcript:** "Chat with Sai (360 One Wealth)"
- **Email Thread:** Active correspondence re: meeting summaries and technical fixes
