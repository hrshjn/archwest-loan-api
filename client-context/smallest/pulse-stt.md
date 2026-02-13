# Smallest AI - Pulse STT (Speech-to-Text)

**Last Updated:** 2026-02-03  
**Model Version:** `140126` (January 14, 2026)  
**Internal Reference for Sales & Technical Discussions**

---

## Overview

Pulse is Smallest AI's high-accuracy, low-latency automatic speech recognition (ASR) model built for real-time transcription. It uses a neural encoder-decoder architecture optimized for low-latency and high-throughput transcription.

> **Note:** The model was previously referred to as "Lightning" in earlier documentation. The STT model is now officially named **Pulse**.

---

## Key Specifications

| Metric | Value |
|--------|-------|
| **Pricing** | $0.005/min ($0.30/hr) - All features included |
| **Per-Chunk Latency (P50)** | **157ms** streaming |
| **Final Response Latency** | **56-160ms** (min-P50) |
| **Non-Streaming RTFx** | **500-770x** real-time |
| **English WER** | 4.5% (FLEURS benchmark) |
| **Concurrency** | 100 concurrent per GPU (auto-scaling available) |
| **On-Premise** | Yes (enterprise VPCs, Docker, Kubernetes) |

### Pricing Comparison

| Provider | Pricing | Latency | Notes |
|----------|---------|---------|-------|
| **Smallest Pulse** | $0.005/min | 157ms P50 | All features included |
| Deepgram Nova-3 | $0.0077/min streaming | ~250ms | Features extra |
| AssemblyAI Universal | $0.0025/min base | ~300ms | Features $0.02-$0.08/hr each |

---

## Feature Matrix

| Feature | Streaming (Real-time) | Non-streaming (Pre-recorded) |
|---------|----------------------|------------------------------|
| Word-level timestamps | ✅ Yes | ✅ Yes |
| Sentence-level timestamps | ✅ Yes | ✅ Yes |
| Speaker diarization | ✅ Yes | ✅ Yes |
| Emotion detection | ❌ No | ✅ Yes |
| Age & gender detection | ❌ No | ✅ Yes |
| PII/PCI redaction | ✅ Yes | ✅ Yes |
| Full transcript generation | ✅ Yes | ✅ Yes |

---

## Performance Benchmarks

### Streaming Latency (80 sessions tested)

| Metric | Min | P50 | P95 | P99 | Max |
|--------|-----|-----|-----|-----|-----|
| **Time to First Final** (first chunk → first finalized transcript) | 4,035ms | 5,854ms | 7,773ms | 9,055ms | 9,055ms |
| **End-to-End Latency** (first chunk → first transcript) | 692ms | 1,163ms | 1,941ms | 1,955ms | 1,955ms |
| **Per-Chunk Latency** (average across all sessions) | 98ms | 157ms | 210ms | 240ms | 240ms |
| **Final Response** (last chunk sent → is_last received) | 56ms | 160ms | 589ms | 654ms | 654ms |

**Inter-Transcript Latency:**
- Inter-Interim (n=750): Avg 862ms, P50 853ms, P99 1,414ms
- Inter-Final (n=183): Avg 1,901ms, P50 1,862ms, P99 3,839ms

**Word Timestamps:** 100% confidence coverage (10,695 words, 0 missing)

### Non-Streaming Throughput (Batch Processing)

| Audio Duration | Mode | Processing Time | RTFx | GPU Memory |
|----------------|------|-----------------|------|------------|
| 1 hour | No diarization | 6.5s | **772x** | 20 GB |
| 1 hour | Diarization only | 8.5s | **505x** | 20 GB |
| 1 hour | Diar + PII redaction | 10.4s | **501x** | 20 GB |
| 1 hour | All options | 10.2s | **503x** | 20 GB |
| 2 hours | No diarization | 11.2s | **797x** | 20 GB |
| 2 hours | Diarization only | 15.7s | **545x** | 20 GB |
| 3 hours | No diarization | 16.2s | **782x** | 20 GB |
| 3 hours | All options | 25.8s | **544x** | 20 GB |
| 4 hours | No diarization | 21.2s | **773x** | 20 GB |
| 4 hours | All options | 33.3s | **551x** | 20 GB |

**Key Takeaways:**
- Non-streaming achieves **500-800x real-time** throughput
- Diarization adds ~30% processing overhead
- PII/PCI redaction adds minimal overhead (~5%)
- Constant GPU memory (~20 GB) regardless of file size

---

## Languages Supported (32+)

### Production Ready
Italian, Spanish, English, Portuguese, Hindi, German, French, Ukrainian, Russian, Kannada, Malayalam, Polish, Marathi, Gujarati, Czech, Slovak, Telugu, Oriya (Odia), Dutch, Bengali, Latvian, Estonian, Romanian, Punjabi, Finnish, Swedish, Bulgarian, Tamil, Hungarian, Danish, Lithuanian, Maltese

### Coming Soon (Latest Additions)
Malay, Mandarin, Japanese, Cantonese, Tagalog, Korean, Indonesian

### Strong Performance Languages
- **Italian:** 3.0% WER
- **Spanish:** 3.2% WER
- **English:** 4.5% WER
- **Portuguese:** 5.0% WER
- **Hindi:** 6.3% WER

---

## Word Error Rate (WER) by Language

Evaluated on FLEURS dataset in streaming mode. Lower is better.

| Language | WER | Language | WER |
|----------|-----|----------|-----|
| Italian | 3.0% | Dutch | 15.0% |
| Spanish | 3.2% | Bengali | 16.4% |
| **English** | **4.5%** | Latvian | 16.5% |
| Portuguese | 5.0% | Estonian | 17.8% |
| Hindi | 6.3% | Romanian | 17.8% |
| German | 6.4% | Finnish | 18.3% |
| French | 7.1% | Punjabi | 18.3% |
| Ukrainian | 7.5% | Swedish | 18.7% |
| Russian | 9.6% | Danish | 19.8% |
| Kannada | 9.8% | Tamil | 21.6% |
| Malayalam | 10.0% | Hungarian | 22.5% |
| Polish | 10.3% | Bulgarian | 24.1% |
| Marathi | 11.5% | Lithuanian | 25.1% |
| Gujarati | 12.3% | Maltese | 25.5% |
| Czech | 12.4% | | |
| Slovak | 13.5% | | |
| Telugu | 14.3% | | |
| Oriya (Odia) | 14.8% | | |

---

## Use Cases

### Primary Applications
- Real-time and batch audio transcription
- Voice agents and conversational AI
- Meeting transcription and summarization
- Customer support call transcription
- Speech-to-text pipelines feeding downstream NLP systems

### Downstream Use
- Speaker diarization for multi-speaker scenarios
- Sentiment/emotion analysis pipelines
- Compliance and PII/PCI redaction workflows
- Subtitle and caption generation
- Search indexing of audio content

---

## Technical Infrastructure

### On-Premise Deployment

| Parameter | Value |
|-----------|-------|
| **GPU Model** | NVIDIA L4 |
| **AWS Instance** | G6.2xlarge |
| **Min VRAM** | 16 GB |
| **Max Concurrency** | ~100 parallel streams |
| **Per-Chunk Latency** | ~98-240ms (P50: 157ms) |
| **Final Response Latency** | ~56-654ms (P50: 160ms) |

### Server Regions
- India (Mumbai)
- USA (Oregon)
- Automatic geo-location based routing for lowest latency

### Model Naming Convention

| Mode | Format | Example |
|------|--------|---------|
| Streaming (real-time) | `pulse_streaming_<lang>_<version>.smlst` | `pulse_streaming_en_140126.smlst` |
| Non-streaming (batch) | `pulse_offline_<lang>_<version>.smlst` | `pulse_offline_en_140126.smlst` |

---

## API Quick Start

```bash
# Pre-recorded transcription
curl --request POST \
  --url 'https://waves-api.smallest.ai/api/v1/pulse/get_text?language=en' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/octet-stream' \
  --data-binary '@audio.wav'
```

For real-time streaming, use the WebSocket endpoint.

**Documentation:** https://waves-docs.smallest.ai  
**Console:** https://console.smallest.ai

---

## Competitive Positioning

### SWOT Summary

| Strengths | Weaknesses |
|-----------|------------|
| Competitive latency: 157ms P50 per-chunk | Smaller language coverage: 32 vs 99 (AssemblyAI) |
| Exceptional batch throughput: 500-800x RTFx | English WER 4.5% vs ~3-5% (competitors) |
| Competitive pricing: $0.005/min all-inclusive | Limited brand recognition |
| Strong Indic language performance | Baltic/Nordic languages 16-25% WER |
| All features included (no surcharges) | Multi-language detect needs work |
| On-premise deployment available | |

### Target Customers
- Voice AI startups
- Real-time transcription apps
- Contact centers and BFSI
- Enterprise with on-prem requirements

### Win On
**Batch Throughput + Price/Performance + English/Hindi/Tamil/Spanish + On-Premise**

### Primary Competitors
- **Deepgram Nova-3:** Accuracy leader, ~250ms latency, complex pricing
- **AssemblyAI Universal:** 99 languages, à la carte pricing, ~300ms latency

> **Note:** Streaming latency is comparable to competitors. Key differentiator is **batch throughput (500-800x RTFx)** and **all-inclusive pricing**.

---

## Safety & Compliance

### Privacy Features
- PII redaction (names, addresses, phone numbers)
- PCI redaction (credit cards, CVV, account numbers)
- No speaker identification or biometric profiling
- No intentional storage of personal or speaker-identifying data

### Regulatory Compliance
For compliance documentation (GDPR, SOC2, HIPAA), contact support@smallest.ai

---

## Out-of-Scope Use

Pulse must **not** be used for:
- Medical diagnosis, treatment decisions, or healthcare advice
- Surveillance, biometric identification, or speaker recognition
- Transcribing sensitive conversations without explicit consent
- Safety-critical applications where transcription errors may cause harm

---

## Known Limitations

- Out-of-vocabulary words (proper nouns, domain-specific jargon) may be misrecognized
- Heavily accented speech outside training distribution may show higher WER
- Transcriptions may not be 100% accurate
- Words not present in the trained vocabulary are less likely to be recognized

### Recommendations
- Use diarization for multi-speaker audio
- Normalize audio levels and remove silence for best results
- Track WER per accent/domain in production to identify blind spots
- Use PII/PCI redaction as part of comprehensive data protection strategy

---

## Contact

- **Support:** support@smallest.ai
- **Documentation:** https://waves-docs.smallest.ai
