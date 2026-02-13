# Kiwi General Insurance (Kiwi Insurance)

## TL;DR
- **Product:** Atoms (voice agent) + V3.1 voices; experimenting with **Electron SLM** for reasoning
- **Status:** Trial/testing ongoing (tester calls in progress); feedback loop active on Slack
- **Primary issues observed:** interruptions, background noise sensitivity, language switching + conversational flow

---

## Account Snapshot
- **Account:** Kiwi General Insurance
- **Channel:** Slack shared channel `#smallest-kiwi_insurance`
- **Primary contacts**
  - **Supreet Khalsa** (Kiwi) — testing + feedback
  - **Pratirath Gupta** (Smallest) — implementation + tuning
  - **Apoorv** (Smallest) — commercial / positioning support

---

## What happened (recent thread summary)
- Kiwi ran ~**10 tester calls** and shared a **PDF feedback doc** + call recordings.
- Feedback themes (Kiwi):
  - Agent is **too sensitive to background sounds**
  - **Interruptions** / turn-taking issues
  - **Language switching / detection** and overall conversational flow needs improvement
- Smallest actions / responses:
  - **Noise sensitivity** can be reduced by tuning **Voice Detection → Confidence**
  - **Interruption issue root cause:** **Release Time** parameter was set too low → fixed
  - Prompt likely needs to be **more instructional** to improve flow, validation, and language switching
  - Enabled **V3.1 voice models** (more natural: pauses/intonation/flow)
  - Plan to switch reasoning model to **Electron** and do prompt-level adjustments
  - Extended trial/credits to enable continued testing

---

## Product notes to share (requested by Apoorv)
- **V3.1 voices:** more natural/human-like prosody; better pause + intonation modeling.
- **Electron (reasoning SLM):** improved conversational flow + language detection/switching with prompt adjustments (still requires prompt tuning per use case).

---

## Open Questions
- Target language set(s) + expected switching behavior (what triggers a switch?)
- Desired interruption behavior: barge-in policy, silence thresholds, end-of-turn rules
- Background environment constraints (call center vs noisy field) → tune VAD thresholds accordingly

---

## Next Steps (suggested)
- [ ] Review Kiwi’s **PDF feedback** + call recordings; extract concrete failure modes + examples.
- [ ] Apply config tuning:
  - [ ] Voice Detection: **increase Confidence** (reduce noise sensitivity)
  - [ ] Voice Detection: validate **Release Time** + other end-of-speech parameters for turn-taking
- [ ] Prompt update: add explicit instruction for:
  - [ ] language detection/switching rules
  - [ ] response validation + clarifying question policy
  - [ ] safe fallback + re-ask strategy
- [ ] Decide model combo to ship for trial: (Electron vs previous) based on post-change calls.
- [ ] Schedule a feedback sync with Kiwi (Supreet) once updated trial calls complete.

---

## Sources
- Slack thread in `#smallest-kiwi_insurance` (Jan 2026): tuning guidance + test feedback + model enablement notes.

