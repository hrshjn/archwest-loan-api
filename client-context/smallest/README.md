# Smallest AI - Product Documentation

**Last Updated:** 2026-02-11

This folder contains internal reference documentation for Smallest AI's core products.

---

## Files

| File | Description |
|------|-------------|
| **[pulse-stt.md](./pulse-stt.md)** | Pulse STT (Speech-to-Text) model card - 64ms latency, 32+ languages, WER benchmarks, competitive analysis |
| **[tts-v31.md](./tts-v31.md)** | Lightning TTS v3.1 model card - 44kHz audio, voice cloning, 13 voices, API reference |
| **[electron-slm.md](./electron-slm.md)** | Electron SLM (Small Language Model) - 45ms TTFT, <3B params, conversational reasoning, competitive positioning |
| **[pricing-technical-specs.md](./pricing-technical-specs.md)** | Pricing tiers, on-prem deployment specs, client cost estimates |
| **[company-info.md](./company-info.md)** | Company registration, tax IDs (PAN, GST, EIN), office addresses for India & USA entities |

---

## Quick Reference

### STT (Pulse)
- **Latency:** 64ms TTFT (industry-leading)
- **Pricing:** $0.005/min ($0.30/hr) - all features included
- **Languages:** 32+ (English, Hindi, Spanish, Tamil strong)
- **English WER:** 4.5%

### TTS (Lightning v3.1)
- **Latency:** 175ms @ 20 concurrency
- **Sample Rate:** 44,100 Hz native
- **Languages:** English, Hindi (Tamil, Spanish coming)
- **Voices:** 13 (8 Indian, 5 American)

### SLM (Electron)
- **TTFT:** 45ms
- **Parameters:** <3B
- **Benchmark:** Outperforms GPT-4.1 on conversational tasks
- **Safety:** Native NSFW + prompt injection protection
- **On-Prem:** Yes (single GPU)

---

## External Resources

- **API Documentation:** https://waves-docs.smallest.ai
- **Console:** https://console.smallest.ai
- **Support:** support@smallest.ai
