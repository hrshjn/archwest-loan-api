# Smallest AI - Lightning TTS v3.1 (Text-to-Speech)

**Last Updated:** 2026-01-30  
**Model Version:** v3.1  
**Internal Reference for Sales & Technical Discussions**

---

## Overview

Lightning v3.1 is Smallest AI's high-fidelity, low-latency text-to-speech (TTS) model delivering natural, expressive, and realistic speech at 44 kHz sample rate. Optimized for real-time applications with ultra-low latency and voice cloning support.

---

## Key Specifications

| Metric | Value |
|--------|-------|
| **Latency** | 175ms @ 20 concurrency |
| **Native Sample Rate** | 44,100 Hz |
| **Languages** | English, Hindi |
| **Speed Control** | 0.5x to 2.0x |
| **Max Chunk Size** | 250 characters |
| **Output Formats** | PCM, MP3, WAV, mulaw |

### Supported Sample Rates
8,000 Hz / 16,000 Hz / 24,000 Hz / 44,100 Hz

---

## Use Cases

### Primary Applications
- Voice assistants and conversational AI
- Interactive chatbots with voice output
- Real-time narration and live streaming
- Accessibility tools and screen readers
- Gaming (dynamic character voices)
- Customer service automation
- Any application requiring immediate voice feedback

### Downstream Use
- Voice cloning (Instant and Professional)
- Multi-turn conversational agents
- Audio content generation pipelines
- Telephony and IVR systems
- Podcast and audiobook generation

---

## Available Voices

### For Hindi Content

| Voice ID | Name | Gender | Accent | Languages |
|----------|------|--------|--------|-----------|
| `vaibhav` | Vaibhav | Male | Indian | English, Hindi |
| `yuvika` | Yuvika | Female | Indian | English, Hindi |
| `siddharth` | Siddharth | Male | Indian | English, Hindi |
| `arjun` | Arjun | Male | Indian | English, Hindi |
| `kunal` | Kunal | Male | Indian | English, Hindi |
| `hitesh` | Hitesh | Male | Indian | English, Hindi |
| `anuja` | Anuja | Female | Indian | English, Hindi |
| `gaurav` | Gaurav | Male | Indian | English, Hindi |

### For English Content

| Voice ID | Name | Gender | Accent | Languages |
|----------|------|--------|--------|-----------|
| `sandra` | Sandra | Female | American | English |
| `lauren` | Lauren | Female | American | English |
| `daniel` | Daniel | Male | American | English |
| `robert` | Robert | Male | American | English |
| `brooke` | Brooke | Female | American | English |

---

## Voice Cloning

### Instant Voice Cloning
| Parameter | Details |
|-----------|---------|
| **Audio Required** | 5-15 seconds |
| **Use Case** | Quick voice replication |
| **Quality** | Captures basic voice characteristics |

### Professional Voice Cloning (PVC)
| Parameter | Details |
|-----------|---------|
| **Audio Required** | Minimum 45 minutes (high-quality) |
| **Use Case** | Professional applications requiring near-perfect match |
| **Quality** | Captures intonation, accent, emotions, vocal nuances |

---

## API Endpoints

| Endpoint | Method | Use Case |
|----------|--------|----------|
| `/api/v1/lightning-v3.1/get_speech` | POST | Synchronous synthesis |
| `/api/v1/lightning-v3.1/stream` | POST (SSE) | Server-sent events streaming |
| `/api/v1/lightning-v3.1/get_speech/stream` | WebSocket | Real-time streaming |

### Request Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to synthesize |
| `voice_id` | string | Yes | - | Voice identifier |
| `sample_rate` | integer | No | 44100 | Output sample rate (Hz) |
| `speed` | float | No | 1.0 | Speech speed (0.5-2.0) |
| `language` | string | No | "en" | Language code (en/hi) |
| `output_format` | string | No | "pcm" | Audio format |
| `pronunciation_dicts` | array | No | - | Custom pronunciation IDs |

---

## API Quick Start

```bash
curl --request POST \
  --url 'https://waves-api.smallest.ai/api/v1/lightning-v3.1/get_speech' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "text": "Hello, this is Lightning v3.1",
    "voice_id": "sophia",
    "sample_rate": 44100
  }' \
  --output audio.wav
```

For real-time streaming, use the WebSocket or SSE endpoints.

**Documentation:** https://waves-docs.smallest.ai  
**Console:** https://console.smallest.ai

---

## Technical Infrastructure

### On-Premise Deployment

| Parameter | Value |
|-----------|-------|
| **GPU Model** | NVIDIA L40S |
| **AWS Instance** | g6e.2xlarge |
| **VRAM Required** | 48 GB |
| **Max Concurrency** | ~20 parallel streams |
| **First-Byte Latency** | 150-200ms |
| **Output Mode** | Streaming audio frames |

### Server Regions
- India (Mumbai)
- USA (Oregon)
- Automatic geo-location based routing for lowest latency

### Concurrency Limits

| Type | Limit |
|------|-------|
| HTTP requests | 1 concurrent per account |
| WebSocket connections | Up to 5 simultaneous |
| Active requests | 1 processing at a time |

---

## Best Practices

### Text Formatting

| Aspect | Recommendation |
|--------|----------------|
| **Language scripts** | English in Latin, Hindi in Devanagari |
| **Break points** | Natural punctuation (. ! ? ,) |
| **Mixed language** | Avoid transliteration |

**Important:** Mixed-language text (transliteration) may produce suboptimal results. For example, avoid "Hinglish" — Hindi text should be in Devanagari script (e.g., "नमस्ते") not Latin (e.g., "Namaste"), and English text should be in Latin script not Devanagari.

### Number & Date Handling

| Type | Format |
|------|--------|
| Phone numbers | Default 3-4-3 grouping |
| Dates | DD/MM/YYYY or DD-MM-YYYY |
| Time | HH:MM or HH:MM:SS |

### Recommendations
- Use proper script for each language (Latin for English, Devanagari for Hindi)
- Break long text at natural punctuation points
- Use pronunciation dictionaries for specialized vocabulary
- Test voice selection for your specific use case
- Custom pronunciation may be needed for domain-specific terms

---

## Key Strengths

- **44 kHz native resolution** - Highest fidelity among Lightning models
- **Natural, expressive speech** - Realistic prosody and intonation
- **Ultra-low latency** - Optimized for real-time applications
- **Voice cloning support** - Both Instant and Professional cloning
- **Multiple streaming options** - HTTP, SSE, WebSocket

---

## Languages

### Current (Production Ready)
- English
- Hindi

### Coming Soon
- Tamil
- Spanish

---

## Safety & Compliance

### Safety Measures
- Voice cloning requires explicit consent
- No generation of harmful or illegal content
- Usage monitoring for policy compliance

### Privacy Guarantees
- No retention of synthesized audio
- No storage of personal voice data beyond cloning scope

### Regulatory Compliance
For compliance documentation (GDPR, SOC2, HIPAA), contact support@smallest.ai

---

## Out-of-Scope Use

Lightning v3.1 must **not** be used for:
- Impersonation or fraud
- Generating deceptive audio content (deepfakes)
- Creating content that violates consent or privacy
- Harassment, abuse, or harmful speech generation
- Any illegal or unethical purposes

---

## Known Limitations

### Biases
- Voice selection reflects specific accents (US, British, Indian)
- Prosody and intonation patterns trained on specific demographics

### Technical Limitations
- Limited to English and Hindi languages
- Mixed-language text (transliteration) may produce suboptimal results

---

## Contact

- **Support:** support@smallest.ai
- **Documentation:** https://waves-docs.smallest.ai
