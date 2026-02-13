# Five9 - Client Context

**Last Updated:** 2026-02-10
**Deal Owner:** Adnan (US Sales), Sudarshan
**Stage:** **ACTIVE EVALUATION - TTS Testing In Progress**
**Priority:** 🔴 **CRITICAL - Largest Near-Term Revenue Opportunity**

---

## Company Overview
- **Company:** Five9
- **Industry:** CCaaS (Contact Center as a Service)
- **Size:** Enterprise (publicly traded, NASDAQ: FIVN)
- **Country:** USA (HQ)
- **Type:** Platform Builder - Voice AI Infrastructure Buyer

---

## Key Contact

| Name | Role | Email | Notes |
|------|------|-------|-------|
| **Aagam Mehta** | Head of AI Agent Builder Platform | *(to be confirmed via email)* | Previously at Yellow AI (4+ years), joined Five9 ~2 months ago |

**Background:**
- 4-5 years in conversational AI / voice agents
- Spent entire career in AI agent space, specifically Voice
- Previously at Yellow AI - worked on Voice Agent, built their own STT/TTS engine
- Now leading Five9's new AI agent builder platform
- Reports to CPO

---

## What They're Evaluating

### Product Interest
| Product | Priority | Interest Level |
|---------|----------|----------------|
| **TTS** | **P0** | 🟢 **HIGH** - Cost is biggest pain point |
| **STT** | P2 | 🟡 Low - Cost not a driver, hard to make internal case |

### Use Case (Platform Builder)
- Building new AI agent builder platform (separate from legacy IVR)
- Platform going **GA in ~1 month** (August/September)
- Voice is **top priority** for their customers
- Mix of inbound and outbound use cases
- US market focus for AI agents

---

## Commercial Opportunity

### Volume Projections
| Timeframe | Volume | Notes |
|-----------|--------|-------|
| **Legacy IVR** | 100M+ mins/month | Existing platform, not in scope |
| **AI Agents EOY 2026** | Few million mins/month | New platform target |
| **Concurrency Need** | 80-100 | Both STT and TTS |

### Revenue Potential
| Scenario | TTS Volume | Est. MRR | Est. ARR |
|----------|------------|----------|----------|
| Conservative (Year 1) | 1M mins/month | $15-20K | $180-240K |
| Growth (Year 2) | 5M mins/month | $50-75K | $600-900K |
| Scale | 10M+ mins/month | $100K+ | $1.2M+ |

**Sudarshan's Offer:**
- Flat unlimited pricing for Year 1 (not variable)
- On-prem deployment option
- Research scientists assigned to account
- Long-term partnership (5-10 year view)

---

## Current Stack & Pain Points

### TTS (Primary Focus)
| Current Provider | Pain Point |
|------------------|------------|
| **ElevenLabs** (Primary) | High cost, inconsistent quality, "sluggish behavior" |
| Microsoft Azure | Enterprise integration |
| Google | Legacy IVR integration |
| Amazon Polly | Legacy IVR integration |

**Key Insight:** TTS cost is **higher than STT and LLM combined**
- Reducing TTS cost by 50% = **25-40% reduction in overall AI agent cost**

### STT (Lower Priority)
| Current Provider | Usage |
|------------------|-------|
| **Deepgram** (Primary) | Main STT provider |
| Microsoft | Secondary |
| AssemblyAI | Secondary |

**Key Insight:** STT is **single-digit percentage** of overall cost
- Cost not a driver for STT decisions
- Latency and accuracy matter, but hard to benchmark (no good production datasets)
- Integration complexity is a barrier (VAD, turn detection, etc.)

### LLM
- OpenAI (primary)

---

## Languages Required

| Language | Priority | Notes |
|----------|----------|-------|
| **English** | **P0** | "If it doesn't work in English, it doesn't work for us" |
| **Spanish** | **P1** | Must-have, every customer from 3-10 in priority has Spanish needs |

---

## Competitive Positioning

### Why Smallest Wins on TTS
1. **Cost:** Significantly lower than ElevenLabs
2. **Consistency:** ElevenLabs has inconsistent quality issues
3. **On-Prem:** Full control, lower latency, infinite scale
4. **Partnership:** Long-term commitment, not transactional
5. **Support:** Research scientists assigned to account

### Why STT is Hard
1. **Cost Not a Driver:** Single-digit % of total cost
2. **Evaluation Difficulty:** No good production-representative benchmarks
3. **Integration Complexity:** VAD, turn detection, multi-speaker noise
4. **Public Benchmarks Useless:** Don't correlate with production

**Aagam's Quote:**
> "For me to build a case [for STT], I need a data set that represents production traffic... public benchmarks are of zero value."

---

## Internal Decision Process

### Stakeholders
- **Aagam Mehta** - Technical evaluation owner
- **CPO** - Budget approval
- **CEO** - Strategic decisions
- Procurement - Contract pricing

### Process
- Contracts >6 months require CPO, manager, CEO involvement
- Need to compare against existing ElevenLabs contract pricing
- Procurement takes ~2 weeks to provide current pricing
- Testing requires 1 developer for ~1 day (basic benchmarking)

---

## Strategic Relationships

### Smallest's Five9 Connections
| Person | Role | Relationship |
|--------|------|--------------|
| **Ashish Koul** | Ex-EVP Five9, Advisor | Very close friend, investor |
| **Mike** (ex-CEO) | Former Five9 CEO | Industry connection |
| **Five9 CEO** | Current CEO | Call scheduled in coming weeks |

### Cross-Pollination
- **Madhava Chinta** (CTO Yellow AI) - Aagam worked with him closely
- Smallest already talking to Madhava at Yellow AI
- Someone from Smallest met Madhava at AWS event

---

## Timeline

| Date | Milestone | Status |
|------|-----------|--------|
| **Feb 2, 2026** | First discovery call | ✅ Completed |
| **Feb 2-10** | API access + voice samples sent | ✅ Completed |
| **~2 weeks** | Aagam gets ElevenLabs pricing from procurement | ⏳ Pending |
| **Feb 23** | Follow-up call | 📅 **SCHEDULED** |
| **Aug/Sep 2026** | Five9 AI Agent platform GA | Target |
| **EOY 2026** | Few million minutes volume | Projection |

### Feb 10 Pipeline Update (Adnan)
- **Adnan's assessment:** "Largest near-term revenue opportunity"
- Focused on replacing high-cost TTS at ~100M minutes/month
- Two-month evaluation window confirmed
- English recordings to be provided
- Spanish preparation being finalized
- Supporting Aagam's internal business case
- Champion (Aagam) joined ~2 months ago and needs a quick win

---

## Next Steps

### Immediate (This Week)
- [ ] Send API access email to Aagam
- [ ] Include top voice samples to test
- [ ] Introduce Srishti (TTS PM) as point of contact
- [ ] Talk to Ashish Koul about strategic support

### Aagam's Actions
- [ ] Basic TTS testing (~1 day with developer)
- [ ] Get ElevenLabs contract pricing from procurement (~2 weeks)
- [ ] Evaluate quality, latency, consistency

### Follow-Up Call (Feb 23)
- [ ] Review testing results
- [ ] Discuss pricing delta vs ElevenLabs
- [ ] Scope partnership terms

---

## Objection Handling

### "STT cost doesn't matter"
**Response:** Acknowledged. Focus on TTS first. STT can be revisited once TTS partnership established. Offer combined platform value later.

### "Need to compare against ElevenLabs pricing"
**Response:** We'll provide flat unlimited pricing for Year 1 - no variable costs. Let's ensure you love the quality first, then we'll structure pricing to make the business case easy.

### "Can't benchmark STT accurately"
**Response:** Agree public benchmarks are useless. We can work together on production-representative evaluation when you're ready. 64ms latency, on-prem deployment gives you full control.

---

## Call Transcript Summary

### Key Quotes from Aagam

**On TTS Priority:**
> "TTS cost is the highest one in the whole stack... significantly higher than both STT and LLM combined."

**On ElevenLabs:**
> "We love ElevenLabs quality... [but] I have complaints with their consistency of quality. There are sluggish behavior here and there."

**On STT Difficulty:**
> "All the public data set is of zero value... it does not represent any single correlation with how production traffic goes."

**On On-Prem:**
> "On-prem deployment availability... gives me complete control of how to roll out, complete control of lower latency, complete control of scale up, scale down."

### Key Quotes from Sudarshan

**On Pricing:**
> "At those volumes... we give you a flat unlimited price for Year 1. You don't have to pay beyond that."

**On Partnership:**
> "For us it's important to work with Five9 long term... it's a five, ten year thing."

---

## Risk Assessment

### Medium Risk
- **Competition:** ElevenLabs has existing relationship
- **Procurement:** Enterprise process may be slow
- **STT:** Low priority, may never convert
- **Timing:** Platform still pre-GA

### Mitigations
1. Leverage Ashish Koul relationship for executive alignment
2. Focus on TTS first (clear pain point)
3. Flat pricing removes procurement complexity
4. On-prem deployment differentiator
5. Long-term partnership positioning

---

## Strategic Importance

### Why Five9 Matters
1. **US CCaaS Leader:** Major market validation
2. **Scale Potential:** 100M+ mins/month in legacy, millions in AI agents
3. **Reference Customer:** "Powered by Smallest" at Five9 = huge credibility
4. **Platform Partnership:** Their customers become our customers
5. **Long-Term:** 5-10 year relationship potential

### ICP Fit: Platform Builder
- ✅ Building voice AI platform (not end user)
- ✅ Technical decision makers understand value
- ✅ Cost sensitivity on TTS
- ✅ US market focus
- ✅ English + Spanish (our strengths)
- ✅ Executive relationships exist

---

## Source References
- **First Call Transcript:** Feb 2, 2026 (Sudarshan, Adnan, Aagam)
- **Participants:** Sudarshan Kamath, Adnan Turnadzic, Aagam Mehta (Five9)
- **Next Touchpoint:** Feb 23, 2026 follow-up call

---

**🎯 TARGET: TTS partnership secured by Q2 2026**
**💰 POTENTIAL: $180K-240K ARR Year 1, $1M+ at scale**
**🏗️ TYPE: Platform builder (CCaaS infrastructure)**
**🌎 MARKET: US English + Spanish**
**⏰ TIMELINE: Platform GA Aug/Sep, volume by EOY**
**🤝 ADVANTAGE: Ashish Koul relationship, on-prem deployment, flat pricing**
