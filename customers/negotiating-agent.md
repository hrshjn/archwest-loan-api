# Negotiating Agent — Commercial Negotiation Assistant

**Agent Name:** Smallest AI Commercial Desk
**Agent ID:** (to be assigned after deployment)
**Type:** Conversational Flow (workflow_graph)
**LLM:** Electron
**Voice:** Sana (waves_lightning_v3_1) with office background
**Smart Turn:** Enabled, 3s wait
**Inbound Calls:** Enabled
**First Message:** "Hi, this is the Smallest AI commercial team. I can help with pricing, volume quotes, POC terms, or any commercial questions. What can I help with?"

---

## Agent Prompt

See deployment script for full prompt text.

---

## Pricing Knowledge Base

### Per-Minute Rates (Cloud SaaS)

| Component | Model | USD/min |
|-----------|-------|---------|
| TTS | Lightning V3.1 | $0.02 |
| STT | Pulse | $0.005 |
| LLM | Electron | $0.02 |
| Telephony | Plivo (India) | $0.0039 |
| Telephony | Twilio (US) | $0.014 |
| LiveKit | Fixed | $0.01 |
| Location | India | $0 |
| Location | USA | $0.06 |

### Full Atoms Agent Cost (India, Plivo)
TTS V3.1 ($0.02) + STT ($0.005) + Electron ($0.02) + Plivo ($0.0039) + LiveKit ($0.01) = ~$0.059/min

### Volume Discount Bands (Atoms)
| Monthly Volume | Min Discount | Max Discount | Price Range |
|----------------|-------------|-------------|-------------|
| 100K mins | 10% | 40% | $0.038–$0.058/min |
| 250K mins | 15% | 45% | $0.035–$0.054/min |
| 500K mins | 20% | 50% | $0.032–$0.051/min |
| 1M mins | 30% | 55% | $0.029–$0.045/min |
| 2M mins | 40% | 60% | $0.026–$0.038/min |

### On-Prem Tiers (INR)
| Tier | Volume | STT | TTS |
|------|--------|-----|-----|
| Starter | Up to 20M/yr | ₹0.25/min | ₹1.10/min |
| Growth | 20M–100M/yr | ₹0.18/min | ₹0.90/min |
| Scale | 100M–1B/yr | ₹0.09/min | ₹0.70/min |
| Enterprise | 1B+/yr | ₹0.045/min | ₹0.45/min |

### POC Terms
- Duration: 2–4 weeks
- Cost: $1,000–$2,500
- Success criteria defined upfront
- Data deleted within 30 days of completion

### Competitive Positioning
- 72–80% cheaper than ElevenLabs at volume
- Stronger Indian language support than Deepgram/AWS Transcribe
- Lower latency than Sarvam (sub-200ms TTS)
