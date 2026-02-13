# Client Context Files

**Last Updated:** 2026-01-26

This directory contains comprehensive context files for active deals, compiled from:
- Zoho CRM deal records
- Gmail email threads
- Granola meeting transcripts/notes
- Slack #gtm channel discussions

---

## Quick Reference - Deal Summary

| Client | Partner | Stage | Volume (Monthly) | Primary Use Case | Key Contact | Est. MRR |
|--------|---------|-------|------------------|------------------|-------------|----------|
| [Kogta Financial](./kogta-financial.md) | AWS | **CLOSING - Private Offer** | 100K min | Voice AI Platform | Abhishek Chordia, Chandan Agarwal | $8K |
| [PolicyBazaar UAE](./policybazaar-uae.md) | Direct | **CLOSING - Commercial Thu** | 50K min (10K calls) | Insurance Renewals | Manu Rana | $0.5K–$1K (start) |
| [Piramal Finance](./piramal-finance.md) | AWS, Onnivation | **CLOSING - Infosec** | 50K min | Collections, Lead Gen | Shashank Agarwal | $2K |
| [Vodafone Idea](./vodafone-idea.md) | Direct | **CLOSING - MSA Review** | 300K+ min | Telephony + Voice AI | Legal team | $10K |
| [FOG Teams](./fog-teams.md) | Direct | **CLOSING - Feedback** | 800K min/year | Multilingual STT | Testing team | $5K+ |
| [House of Agents](./house-of-agents.md) | Direct | **BLOCKED - Clone Voice V3** | 100K min | TTS for Voice Bots | Anmol Pathak, Ritambuj | $2K |
| [YuVerse/Spocto](./yuverse-neysa.md) | Neysa | Opportunity | **🔥 1-3 Cr calls/month** | TTS+STT for Collections | Vivek Srikantan, Sourabh | $263K+ |
| [Bank Bazaar](./bank-bazaar.md) | AWS | POC | 300K+ min | Outbound + Analytics | Krishenjit Roy, Kiran G S | $100K |
| [Amazon Ads](./amazon-ads.md) | Internal Amazon | Qualified | 50K+ min | Atoms Platform | Manali Mundra, Shishir Borkar | $50K |
| [Kiwi Insurance](./kiwi-insurance.md) | Direct | Trial | TBD | Atoms Voice Agent | Supreet Khalsa | TBD |
| [ESAF Bank](./esaf-bank.md) | Catalyst/Metafore | Qualified | 300K min | Collections + Retail Banking | Via Abraham/Bobby | $5K |
| [Jio](./reliance-jio.md) | Direct | **BLOCKED - Custom Metrics** | 50K min | TTS Evaluation | Pankaj Pophaly, Aditya Suman | $1.5K |
| [360 One Wealth](./360-one-wealth.md) | AWS India | Trial | ⚠️ TBD (~300 RMs) | ASR for Multilingual | Behnaaz Kapadia, Prabhath | TBD |
| [SBI Life](./sbi-life.md) | AWS India | **INTERESTED - Meeting to Schedule** | TBD | TBD | Sourav Majumder | TBD |
| [SBI Mutual Fund](./sbi-mutual-fund.md) | Direct | Qualified / Pilot Testing | ~1,000 calls/day | Inbound Call Analytics (STT) | Puneet Sinha | TBD |
| [RR Cable (EY)](./ey-rr-cable.md) | EY | Qualified - LOI | 5-6L min at scale | Electrician Engagement | Sai (EY), Arun Nagarajan | $24K |
| [Adani Total Gas](./adani-total-gas.md) | EY | Advanced Stage | TBD | Contact Center (144 use cases) | Via EY - Arun | $5K |

### 🔥 Scale Tier: YuVerse/Spocto
This is BY FAR the largest volume opportunity:
- **Daily:** Tens of lakhs of calls
- **Scale:** 3 Cr calls/month potential
- **Business Model:** Collections platform, paid on outcomes

---

## What They're Evaluating

### ASR Only (Drop-in Replacement)
- **360 One Wealth** - Has built complete UI, ONLY needs ASR model to replace AWS Transcribe (~60% accuracy). NOT buying a platform.

### TTS (Text-to-Speech)
- **Jio** - Core TTS evaluation, comparing with Cartesia
- **YuVerse/Spocto** - TTS + STT for high-volume collections voice bots

### Voice Agents / Voice Bots
- **PolicyBazaar UAE** - Insurance renewals voice bot
- **Piramal Finance** - Collections, lead gen voice bots
- **Kiwi Insurance** - Atoms trial (prompt + VAD tuning; v3.1 voices; Electron reasoning experiments)
- **RR Cable** - Electrician engagement voice calls

---

## Key Blockers & Issues

| Client | Blocker/Issue | Status |
|--------|--------------|--------|
| 360 One | Bengali not supported, on-prem deployment needed, data residency | Trial enabled (7-day) |
| Piramal | Infosec requirements excessive, dual-language ASR | Pushback planned |
| PolicyBazaar UAE | Hallucination, aggressive tone, interruption handling | Trial feedback |
| YuVerse/Spocto | Total latency ~1s (need lower), NDA pending | V3 testing, WhatsApp group created |
| Jio | Custom eval metrics not supported, Cartesia competition | Need 300-500 min POC |
| RR Cable | 25% requirements gap in BOM | Technical deep-dive needed |

---

## Partner Channels

### AWS
- 360 One Wealth
- Piramal Finance
- (Multiple other AWS pipeline deals)

### EY
- RR Cable
- The Leela
- NeSL RFP

### Neysa
- YuVerse / Spocto / Yubi ecosystem
- Joint GTM in progress
- On-prem deployment capability
- **🏢 Smallest & Spocto offices are RIGHT OPPOSITE each other at WeWork BKC Mumbai!**

---

## How to Update These Files

1. After meetings, update the relevant client file with new information
2. Add new meeting notes under "Key Meeting Notes" section
3. Update "Next Steps" checkboxes as items are completed
4. Update "Last Updated" date at the top of each file

---

## Reference Documents

- **[FDE MRR/ARR Summary](./FDE-MRR-ARR-Summary.md)** - 📊 USD MRR/ARR for all deals (for FDE team)

### Smallest AI Product Documentation (`./smallest/`)
- **[Pulse STT Model Card](./smallest/pulse-stt.md)** - Complete STT reference (64ms latency, 32+ languages, WER benchmarks, competitive positioning)
- **[Lightning TTS v3.1 Model Card](./smallest/tts-v31.md)** - Complete TTS reference (44kHz, voice cloning, available voices, API details)
- **[Electron SLM Model Card](./smallest/electron-slm.md)** - Complete SLM reference (45ms TTFT, <3B params, outperforms GPT-4.1, on-prem capable)
- **[Pricing & Technical Specs](./smallest/pricing-technical-specs.md)** - Pricing tiers, on-prem specs, cost estimates per client

---

## Data Sources

| Source | How to Access |
|--------|---------------|
| Zoho CRM | Search deals by company name |
| Gmail | Search by company domain or contact name |
| Granola | Search transcripts/notes by company or participant name |
| Slack | Search #gtm channel for company name |
| Sybill | Paste transcripts manually if needed |
