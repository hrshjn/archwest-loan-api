# Smallest AI - Pricing & Technical Specs Reference

**Last Updated:** 2026-01-26  
**Internal Use Only**

---

## Pricing Tiers (excl. GST)

| Yearly Volume | STT (ASR) | TTS |
|---------------|-----------|-----|
| **Starter** (Up to 20M mins) | ₹0.25/min | ₹1.10/min |
| **Growth** (20M - 100M mins) | ₹0.18/min | ₹0.90/min |
| **Scale** (100M - 1B mins) | ₹0.09/min | ₹0.70/min |
| **Enterprise** (1B+ mins) | ₹0.045/min | ₹0.45/min |

### Quick Conversions
- 1 Lakh minutes = 100,000 minutes
- 1 Crore minutes = 10,000,000 minutes (10M)
- 1 Lakh calls × 3 min avg = 3 Lakh minutes

---

## On-Prem Deployment Technical Specs

### Speech-to-Text (ASR)

| Parameter | Value |
|-----------|-------|
| **GPU Model** | NVIDIA L4 |
| **AWS Instance** | G6.2xlarge |
| **Max Concurrency** | ~100 parallel streams |
| **First-Byte Latency** | ~200 ms |
| **Processing Mode** | Streaming |

### Text-to-Speech (TTS) - Lightning v3.1

| Parameter | Value |
|-----------|-------|
| **GPU Model** | NVIDIA L40S |
| **AWS Instance** | g6e.2xlarge |
| **VRAM Required** | 48 GB |
| **Max Concurrency** | ~20 parallel streams |
| **First-Byte Latency** | 150-200 ms |
| **Output Mode** | Streaming audio frames |

### Summary

| Model | GPU | Concurrency | First-Byte Latency |
|-------|-----|-------------|-------------------|
| **ASR** | NVIDIA L4 | ~100 | ~200 ms |
| **TTS (v3.1)** | NVIDIA L40S | ~20 | 150-200 ms |

---

## Deployment Options

1. **Bare-metal GPU servers**
2. **Kubernetes** (GPU operator)
3. **Docker-based** single-node deployments
4. **AWS Marketplace** (ASR listing coming soon)

### Architecture Flow
```
Customer Audio Stream
        ↓
Ingress (gRPC / WebSocket)
        ↓
Streaming Runtime
        ↓
ASR / TTS Model Container
        ↓
GPU Execution
        ↓
Streaming Output
```

---

## Client Volume → Pricing Tier Mapping

| Client | Estimated Volume | Tier | Est. STT Cost | Est. TTS Cost |
|--------|------------------|------|---------------|---------------|
| **YuVerse/Spocto** | 3 Cr calls/mo × ~3 min = ~900M min/yr | **Scale** | ₹0.09/min | ₹0.70/min |
| **EY - RR Cable** | 5-6 Lakh min/mo = ~60-72M min/yr | **Growth** | ₹0.18/min | ₹0.90/min |
| **360 One Wealth** | ⚠️ TBD (~300 RMs, adoption early) | **Starter** | ₹0.25/min | - |
| **Piramal Finance** | 50K min/mo = ~600K min/yr | **Starter** | ₹0.25/min | ₹1.10/min |
| **PolicyBazaar UAE** | 50K min/mo = ~600K min/yr | **Starter** | ₹0.25/min | ₹1.10/min |
| **Jio** | 50K min/mo = ~600K min/yr | **Starter** | - | ₹1.10/min |

### Annual Cost Estimates (at full projected scale)

| Client | Product | Volume/Year | Rate | Annual Cost |
|--------|---------|-------------|------|-------------|
| **YuVerse/Spocto** | TTS+STT | ~900M min | ₹0.09 + ₹0.70 = ₹0.79/min | ~₹71 Cr |
| **EY - RR Cable** | Full Stack | ~72M min | Growth tier | ~₹7-10 Cr |
| **360 One Wealth** | STT only | ⚠️ TBD | ₹0.25/min | TBD (volume unverified) |
| **Piramal Finance** | Voice Bot | ~600K min | ₹1.35/min | ~₹8 Lakh |
| **PolicyBazaar UAE** | Voice Bot | ~600K min | ₹1.35/min | ~₹8 Lakh |
| **Jio** | TTS only | ~600K min | ₹1.10/min | ~₹6.6 Lakh |

⚠️ **Note:** YuVerse/Spocto is MASSIVELY larger than all other deals combined. Cost sensitivity is critical for them.

---

## Competitive Context

### Pricing Comparison (approximate)

| Provider | STT | TTS | Notes |
|----------|-----|-----|-------|
| **Smallest AI** | ₹0.045-0.25/min | ₹0.45-1.10/min | Tiered, Indian languages |
| **AWS Transcribe** | ~₹1.00/min | - | Limited Indian language quality |
| **11 Labs** | - | ~$0.30/min (~₹25/min) | Premium quality, expensive |
| **Deepgram** | ~$0.01/min (~₹0.85/min) | - | Good English, limited Indian |
| **Cartesia** | - | Varies | TTS focus |

### Smallest AI Differentiators
- **Indian language quality** - trained on colloquial, code-switching speech
- **On-prem deployment** - data residency compliance
- **Cost at scale** - Enterprise tier is very competitive
- **Latency** - Sub-200ms first-byte latency

---

## Languages Supported

### Current (Production Ready)
- English
- Hindi
- Tamil
- Telugu
- Kannada
- Malayalam
- Marathi
- Gujarati

### Coming Soon
- Spanish (next week per Aditya)
- Bengali (not yet available)

### Code-Switching Support
- Hindi-English ✅
- Multiple languages in single conversation - being validated

---

## Key Metrics for Sales Conversations

### Latency Benchmarks
- **STT First-Byte:** ~200ms
- **TTS First-Byte:** 150-200ms
- **Total Voice Agent Round-trip:** <1 second target

### Accuracy
- **Word Error Rate:** Better than AWS Transcribe on Indian languages
- **Current AWS Transcribe accuracy:** ~60% (per 360 One)

### Scale Capacity
- **Per L4 GPU (ASR):** ~100 concurrent streams
- **Per L40S GPU (TTS):** ~20 concurrent streams
- **Horizontal scaling:** Supported

---

## Fine-Tuning Parameters (Implementation Phase)

These can be discussed during deployment:
- Chunk size (ms)
- Streaming window length
- Model precision (FP16 / BF16)
- CPU ↔ GPU threading
- NUMA alignment
- Batching strategy
- Multi-GPU sharding
- Language-specific optimizations

---

## Internal Contacts

- **Speech Infra / Core Models Team** - for advanced tuning
- **FDE Team** - for deployment planning
