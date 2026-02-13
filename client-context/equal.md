# Equal.in (OneEqual) - Client Context

**Last Updated:** 2026-02-09
**Deal Owner:** Apoorv (GTM), Harsh Jain
**Stage:** POC / Evaluation (ASR)
**Priority:** 🟡 Active evaluation in progress

---

## Company Overview

| Field | Details |
|-------|---------|
| **Company** | Equal.in (OneEqual) |
| **Industry** | Contact Center / Voice AI Platform |
| **Website** | equal.in |
| **Country** | India |
| **Type** | Platform Builder / Direct Customer |

---

## Key Contacts

### Equal Team

| Name | Role | Email | Notes |
|------|------|-------|-------|
| Rajeev | Decision Maker / Lead | — (Slack: @rajeev) | Initiated evaluation, adds technical resources |
| Pavan M | ASR Evaluator (current) | pavan.m@equal.in | Active since Feb 2026, doing ASR testing |
| Vibha Karen Dsouza | Tester (TTS/STT) | vibha@equal.in | Tested in Jul 2025 phase |
| Ravi Teja | Technical Tester | raviteja@equal.in | Initial testing in Jul 2025 phase |

### Smallest AI Team

| Name | Role | Notes |
|------|------|-------|
| Apoorv | GTM Lead | Primary relationship owner |
| Harsh Jain | Ops | Re-engaged Rajeev in Feb 2026 |
| Yash Ghelani | Technical SPOC (current) | Handling Pavan's ASR evaluation |
| Diksha | Former Technical SPOC | Supported Jul 2025 testing phase |
| Gaurav Verma | Initial Contact | Created channel, initial onboarding |
| Akshat | Introduced GTM lead | Connected Apoorv to the deal |

---

## Products of Interest

| Product | Status | Notes |
|---------|--------|-------|
| **ASR (Pulse STT)** | 🟢 Active evaluation | Pavan testing since Feb 6, 2026 |
| **TTS** | ⚪ Previously tested | Vibha & Ravi Teja tested Jul 2025 |
| **STT** | ⚪ Previously tested | Had Hinglish issues in Jul 2025 |

### ASR Evaluation Details (Feb 2026 — Current)

Pavan's key questions and answers:

| Question | Answer |
|----------|--------|
| Transcripts with timelines? | **Yes** — word & utterance level timestamps supported |
| VAD / Speaker diarization? | **Yes** — diarization supported |
| Romanization / Transliteration? | **No** — not supported currently |

**Docs shared:**
- Timestamps: https://waves-docs.smallest.ai/v4.0.0/content/api-references/pulse-stt#parameter-word-timestamps
- Diarization: https://waves-docs.smallest.ai/v4.0.0/content/api-references/pulse-stt#parameter-diarize

---

## Engagement Timeline

### Phase 1: Initial Testing (Jul 2025)

- **Jul 22, 2025** — Channel un-archived by Gaurav. Rajeev from OneEqual added and introduced Ravi Teja for testing.
- **Jul 22, 2025** — Ravi Teja requested credentials. Gaurav shared console.smallest.ai.
- **Jul 24, 2025** — Ravi Teja requested more credits and asked about STT testing. Diksha assigned as SPOC. Meeting scheduled.
- **Jul 25, 2025** — Account activation for vibha@equal.in and raviteja@equal.in.
- **Jul 30, 2025** — Vibha reported issues:
  - **Hinglish problems** — having certain issues with Hinglish output
  - **Server timeout errors** — consistent testing procedure throws timeout every new day
  - Requested meeting to give feedback and discuss fine-tuning
- **Jul 31, 2025** — Meeting scheduled at 4pm. Diksha joined late (stuck on a call).

### Gap: Aug–Sep 2025 (no activity)

### Phase 2: GTM Re-engagement (Oct 2025)

- **Oct 8, 2025** — Akshat added Apoorv (GTM lead) to the channel. Noted "Rajeev and team were evaluating our offerings."
- **Oct 29, 2025** — Apoorv messaged to re-ignite the group. No response from Equal side.

### Gap: Nov 2025–Jan 2026 (no activity)

### Phase 3: ASR Evaluation Revival (Feb 2026 — Current)

- **Feb 5, 2026** — Harsh joined and reached out to Rajeev to restart comms.
- **Feb 6, 2026** — Rajeev added Pavan M from Equal for ASR evaluation.
  - Pavan started testing, couldn't generate API key (screenshot shared).
  - Harsh asked for email → Pavan shared pavan.m@equal.in.
  - Yash Ghelani joined as technical SPOC, enabled access and shared API key link.
  - Apoorv confirmed Yash as primary technical SPOC for Equal.
  - Pavan confirmed working — "thanks for quick turnaround."
- **Feb 7, 2026** — Pavan posted detailed ASR questions:
  1. Transcripts with timelines? → Yes (word + utterance level)
  2. VAD / Diarization support? → Yes
  3. Romanization / Transliteration? → **Not supported** currently
  - Shared example transcripts showing the use case (caller screening / assistant bots with multilingual support including Hindi, Kannada, Telugu).
- **Feb 8, 2026** — Pavan acknowledged answers: "Will check them and get back for any other clarifications." Yash: "Sure, let me know if you run into any issues."

---

## Use Case Signals

From Pavan's example transcripts, Equal appears to be building:
- **AI Call Screening / Assistant Bots** — automated caller identification and routing
- **Multilingual Voice Bots** — handling Hindi, Kannada, Telugu, and English
- **Call Transcription** — need for timestamped, diarized transcripts
- **Romanized/Transliterated output** — desired but not available (potential blocker or feature request)

---

## Action Items / Next Steps

- [ ] **Yash** — Monitor Pavan's testing progress, respond to follow-up questions
- [ ] **Apoorv/Harsh** — Follow up with Pavan/Rajeev on ASR evaluation results after testing
- [ ] **Product** — Note romanization/transliteration as a feature request from Equal
- [ ] **Apoorv** — Understand full scope of Equal's use case and volume potential
- [ ] Revisit earlier Hinglish issues from Jul 2025 — check if resolved in current ASR model

---

## Risk Assessment

| Risk | Level | Notes |
|------|-------|-------|
| Romanization gap | 🟡 Medium | Equal wants transliterated output — not currently supported |
| Previous Hinglish issues | 🟡 Medium | Jul 2025 testing had Hinglish problems — unclear if resolved |
| Engagement continuity | 🟡 Medium | Two previous engagement gaps (Aug–Sep 2025, Nov 2025–Jan 2026) |
| Champion availability | 🟢 Low | Rajeev actively adding resources (Pavan) for evaluation |

---

## Source References

- Slack channel: `#smallest-x-equal` (Slack Connect with OneEqual)
- Smallest console: console.smallest.ai (accounts: pavan.m@equal.in, vibha@equal.in, raviteja@equal.in)
