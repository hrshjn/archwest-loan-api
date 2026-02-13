# SBI Mutual Fund - Client Context

**Last Updated:** 2026-01-26  
**Deal Owner:** Harsh Jain / Yash Ghelani  
**Stage:** **QUALIFICATION / PILOT TESTING (Inbound Call Analytics - STT)**  
**Priority:** 🟡 Medium (strong STT fit; needs clear pilot success metrics)

---

## Company Overview
- **Company:** SBI Mutual Fund
- **Industry:** Asset Management / Mutual Funds
- **Location:** Mumbai, India
- **Primary Need:** **Speech-to-Text (STT)** for inbound call transcription + analytics

---

## Key Contacts (from call)
- **Puneet Sinha** — (SBI MF) Primary stakeholder (contact center / CX analytics)
- **Srini** — CIO (SBI MF) (met by Apoorv; awaiting next steps)
- **Pratirath Gupta** — Smallest technical spokesperson (Delivery)
- **Yash Ghelani** — Smallest delivery/implementation lead (Mumbai)
- **Aditya Bhat** — Product (Smallest)

---

## Problem Statement / Goal
SBI MF gets high inbound call volume and wants to:
- Transcribe calls reliably across Indian languages (incl. **Marathi** and others)
- Extract **entities** (names, fund names, locations) and reasons for calls
- Produce **exec-level analytics**:
  - “Top reasons customers are calling”
  - Insights to improve app/website/FAQ and reduce contact center load

---

## Volumes
- **Avg inbound calls:** ~**1,000 calls/day** (can spike to **1,500–2,000/day**)

---

## Requirements (from call)

### Languages
- Mixed Indian languages expected (explicit mention: **Marathi**, **Gujarati**, etc.)
- Need robustness on accents + code-mixing.

### PII / Compliance
- Desire to **mask/block PII** from transcription outputs (e.g., phone numbers spoken on call).

### Concurrency / Pooling
- Asked if their requests share a pool with other customers.
- We stated: **Enterprise plan → dedicated pool** (10–15 concurrent requests processed immediately; can increase as needed).

### Product ask: Audio format conversion
- Their call recordings may be stored in varied formats/compressed.
- Docs currently mention typical STT requirements (e.g., **16kHz, mono**), which creates overhead for them.
- They want: “Send the raw audio; Smallest does preprocessing/conversion and returns best transcription.”
- Smallest to confirm feasibility + timeline (product enhancement / pipeline).

### Summarization / Insights
- They asked for “one-go” output: transcription + translation + pain-points.
- We clarified: not available as a packaged feature today; we have **Electron** and internal pipeline for our voice agents, but “instant insights” workflow is not productized yet.

---

## Current Status
- **Trial access was shared in early Dec** with Puneet; follow-ups have been largely **unresponsive**.
- Apoorv met **Srini (CIO)** on Jan 26; awaiting confirmation on pilot kickoff + SPOC ownership.
- WhatsApp group preferred for coordination (once they restart).

---

## Next Steps
- [ ] Follow up with **Srini (CIO)** to confirm: pilot start date, success criteria, and SPOC (Puneet vs alternate).
- [ ] Confirm exact **audio formats** they receive (codec, sample rate, channels) and whether conversion can be handled on our side short-term.
- [ ] Provide a **reference script** / “best practice” pipeline for batch testing + structured outputs.
- [ ] Define pilot success metrics:
  - WER/accuracy by language
  - Entity extraction accuracy (names/fund/product)
  - PII masking effectiveness
  - Turnaround time / throughput at target concurrency
- [ ] Share enterprise plan details (dedicated pool + concurrency) + recommended limits.
- [ ] Schedule follow-up after initial test results.

---

## Source References
- Meeting notes provided by Harsh (transcript excerpt in chat).
