# FDE Deal Summary - MRR/ARR USD

**Generated:** 2026-01-26  
**Exchange Rate:** $1 = ₹90

---

## Quick Summary Table

| Deal | Partner | Product | MRR (USD) | ARR (USD) | Confidence |
|------|---------|---------|-----------|-----------|------------|
| **PolicyBazaar UAE** | Direct | Atoms | **$500** | **$6,000** | ✅ User confirmed |
| **Piramal Finance** | AWS, Onnivation | Atoms SDK + TTS + STT | **$1,999** (initial) → **$4,500** (scale) | **$24K** → **$54K** | ⚠️ Workshop volumes |
| **YuVerse/Spocto** | Neysa | TTS + STT (On-prem) | **$263,000** | **$3.16M** | 📈 1 Cr calls/month |
| **360 One Wealth** | AWS | STT only | **$140** | **$1,670** | ⚠️ TBD (adoption early) |
| **RR Cable** | EY | Atoms SDK + TTS + STT | **$24,000** | **$288,000** | ✅ CRM deal value |
| **Reliance Jio** | Direct | TTS | **$10,000** | **$120,000** | ⚠️ Volume estimate |

---

## Detailed Breakdown

### 1. PolicyBazaar UAE 🟢 `[Direct]`
| Metric | Value |
|--------|-------|
| **MRR** | **$500** |
| **ARR** | **$6,000** |
| Stage | Moving to Production |
| Product | **Atoms** |
| Volume | 50 calls/day initial → 10K calls/month target |
| Basis | User-confirmed pricing |

**Notes:** Small starter deal, buying Atoms platform. MSA in final stages, go-live target Jan 2026.

---

### 2. Piramal Finance 🟡 `[AWS, Onnivation]`
| Metric | Value |
|--------|-------|
| **MRR (Initial)** | **$1,999** |
| **ARR (Initial)** | **$24,000** |
| **MRR (At Scale)** | **$4,500** |
| **ARR (At Scale)** | **$54,000** |
| Stage | Opportunity |
| Product | **Atoms SDK + TTS + STT** |

**Notes:** Client will share previous call transcripts for training. Full voice AI stack.

**Volume Data (from Workshop Email):**
- 70-80K inbound calls/month
- 100-200 agents
- Target: 3000 calls/month per bot

**At-Scale Calculation:**
- 75K calls × 4 min avg = 300K min/month
- Voice Bot (STT+TTS) at ₹1.35/min
- Annual: ₹48.6 Lakh = ~$54K ARR

**Starting vs Scale:**
| Phase | Calls/Month | Minutes | MRR | ARR |
|-------|-------------|---------|-----|-----|
| Initial | ~15K | 60K | $1,999 | $24K |
| At Scale | 75K | 300K | $4.5K | $54K |

---

### 3. YuVerse/Spocto 🔵 `[Neysa]`
| Metric | Value |
|--------|-------|
| **MRR (At Scale)** | **$263,000** |
| **ARR (At Scale)** | **$3.16M** |
| Stage | Opportunity |
| Product | TTS+STT (On-prem) |

**Volume Data (from Meeting 22/01/2026):**
> "Tens of lakhs of calls a day, sometimes going into maybe even hundreds of lakhs of calls per day" - Vivek Srikantan, CTO

**User Provided Estimate:** 3 Cr calls/month at scale

**Tiered Calculation:**
| Scale Level | Calls/Month | Minutes/Year | Tier | Rate/Min | ARR (USD) |
|-------------|-------------|--------------|------|----------|-----------|
| Starter POC | 10 Lakh | 36M | Growth | ₹1.08 | $432K |
| Mid-Scale | 1 Cr | 360M | Scale | ₹0.79 | $3.16M |
| Full Scale | 3 Cr | 1.08B | Enterprise | ₹0.495 | $5.94M |

**⚠️ Cost Sensitivity:** Vivek explicitly mentioned pricing "looked on the higher side" - Enterprise tier pricing critical.

---

### 4. 360 One Wealth 🟡 `[AWS]`
| Metric | Value |
|--------|-------|
| **MRR** | **$140** (estimated) |
| **ARR** | **$1,670** (estimated) |
| Stage | Opportunity |
| Product | STT only (ASR) |

**Volume Status:** ⚠️ **TBD - Adoption Early**

From Behnaaz (16/12/2025 meeting):
> "So I wouldn't be able to give you a rough sense of how many minutes it's going to go to."

**Known Facts:**
- ~300 RMs (80 Wealth, 100+ AMC)
- Call duration: 30 sec voice notes to 1 hour meetings
- Currently promoting internally for adoption

**Assumption-Based Estimate:**
| Scenario | Volume/Month | MRR | ARR |
|----------|--------------|-----|-----|
| Conservative (CRM placeholder) | 50K min | $140 | $1,670 |
| If adoption picks up (10x) | 500K min | $1,040 | $12,500 |

---

### 5. RR Cable 🟢 `[EY]`
| Metric | Value |
|--------|-------|
| **MRR** | **$24,000** |
| **ARR** | **$288,000** |
| Stage | Qualification |
| Product | **Atoms SDK + TTS + STT** |
| Partner | EY - Arun Nagarajan |

**Volume:** 5-6 Lakh minutes (at scale)

**Source:** CRM Deal Amount = $288,000

**Deployment:** Azure deployment if available, else Atoms Cloud

---

### 6. Reliance Jio 🟡 `[Direct]`
| Metric | Value |
|--------|-------|
| **MRR** | **$10,000** |
| **ARR** | **$120,000** |
| Stage | Proposal/Sent |
| Product | **TTS** |

**Volume:** At least $10K MRR expected per user guidance

**POC Discussion:** $1,500 one-time POC (300-500 min)

**Blocker:** Custom eval metrics (hallucination, repetition, gender ID) not supported. Competing against Cartesia (unlimited POC).

---

## Summary by Deal Size

### Tier 1: Enterprise ($1M+ ARR potential)
| Deal | Partner | ARR Potential | Product |
|------|---------|---------------|---------|
| **YuVerse/Spocto** | Neysa | $3.16M - $5.94M | TTS+STT |

### Tier 2: Mid-Market ($100K+ ARR)
| Deal | Partner | ARR | Product |
|------|---------|-----|---------|
| **RR Cable** | EY | $288K | Atoms SDK + TTS + STT |
| **Reliance Jio** | Direct | $120K | TTS |

### Tier 3: SMB/Starter ($10K-$50K ARR)
| Deal | Partner | ARR | Product |
|------|---------|-----|---------|
| **Piramal Finance (at scale)** | AWS, Onnivation | $54K | Atoms SDK + TTS + STT |
| **Piramal Finance (initial)** | AWS, Onnivation | $24K | Atoms SDK + TTS + STT |

### Tier 4: Small/POC (<$10K ARR)
| Deal | Partner | ARR | Product |
|------|---------|-----|---------|
| **PolicyBazaar UAE** | Direct | $6K | Atoms |
| **360 One Wealth** | AWS | $1.7K | STT |

---

## Total Pipeline Value

| Category | ARR (USD) |
|----------|-----------|
| **Confirmed/High Confidence** | $414K (EY + PolicyBazaar + Jio) |
| **At-Scale Potential** | $3.2M (YuVerse + Piramal) |
| **TBD/Early Stage** | $1.7K (360 One) |

**Total Weighted Pipeline:** ~$1.5M (conservative weighting)

---

## Assumptions & Notes

1. **Exchange Rate:** ₹90 = $1 USD
2. **Avg Call Duration:** 3-4 minutes for collections/voice bots
3. **YuVerse volumes:** Based on "3 Cr calls/month at scale" per user guidance
4. **Piramal volumes:** From workshop email - 70-80K inbound calls/month
5. **360 One:** Placeholder until adoption data available
6. **Pricing Tiers:** Based on Smallest AI pricing (excl. GST)

---

*Last Updated: 2026-01-26*
