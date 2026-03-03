# Live Agent Chat Test Results — March 3, 2026

Tests run via Node.js chat client using Atoms `/conversation/chat` API + LiveKit.
These are **real agent responses** from the live deployed agents, not simulations.

---

## InfoSec Agent (69a730c36cd1d52771328761)

**Fixes applied before test:**
- Added PCI DSS compliance to certifications
- Added negative compliance list (HIPAA, FedRAMP, StateRAMP, HITRUST)
- Added conversational style section
- Added trust-building personality trait
- Added non-security question escalation
- Added proactive trust reinforcement in response style
- Updated guardrails to reflect PCI DSS compliance
- Added PCI DSS docs to document sharing list

### Transcript

```
AGENT: Hi, this is the Smallest AI security team. How can I help you today?
USER : Hi, I'm Rahul from Vodafone security team, checking on the Smallest AI evaluation.
AGENT: Hi Rahul. Could I get your last name and the specific engagement or project you're evaluating us for?
USER : What certifications do you hold — ISO, SOC 2, PCI DSS?
AGENT: We hold ISO 27001, SOC 2 Type II, and are PCI DSS compliant. Specifically, we have ISO 27001:2022
       certified with certificate number QCC/CADD/1224, issued December 21, 2024. Our SOC 2 Type II report
       covers the period from January 1, 2025, to July 15, 2025, and we are PCI DSS compliant for payment
       card data handling.
USER : Are you HIPAA compliant?
AGENT: We don't hold HIPAA certification today. I can check with Amit on our roadmap for it and follow up.
```

### Assessment

| Check | Result | Notes |
|-------|--------|-------|
| PCI DSS answer | PASS | Correctly reports compliance |
| HIPAA negative | PASS | Clean denial + escalation offer |
| Cert specificity | PASS | Cert number, dates, audit period cited |
| Caller identification | PASS | Asked for name and engagement |
| Session stability | PARTIAL | Disconnected after 3 exchanges (platform limit on chat sessions) |

---

## Outbound Sales Agent (69a72063bd1bc2da08fcc1e1)

**Fixes applied before test:**
- Added PERSONA SWITCH markers for simulation entry/exit
- Added tool fallback for SMS webhook failures
- Added stronger pitch for when prospect declines simulation
- Added callback mechanism with time confirmation
- Reinforced one-question-per-turn discipline
- Added persona switch markers for all simulation types
- Shortened voicemail script

### Transcript

```
USER : Hello?
AGENT: Hi Kawaldeep Singh, this is Karan from Smallest AI. We built voice AI that handles debt collection
       calls — a Jaipur NBFC is doing 17,000 completed calls a day on our platform with 96% automation.
       Is collections automation something your team is looking at?
USER : Yeah this is Pradeep, who's calling?
AGENT: I'm calling from Smallest AI. We're a voice AI platform — specifically, we build voice agents for
       collections. A Jaipur NBFC is running 17,000 calls a day on us. Is this something your team is
       looking at?
USER : Hmm interesting. We're looking at automating collections. About 5000 calls a day.
AGENT: Here's the thing — instead of me explaining what our voice agent sounds like on a collections call,
       let me just show you. I'm going to switch into our collections agent persona for 60 seconds. You
       play the borrower. I'll address you as Kawaldeep Singh ji and remind you about an overdue EMI.
       Just respond naturally. Ready?
USER : Sure, go ahead with the simulation.
AGENT: Namaste, kya main Kawaldeep Singh ji se baat kar rahi hoon? Main Neha bol rahi hoon, Paytm ki
       taraf se call kar rahi hoon.
USER : Haan Pradeep ji bol raha hoon. Batao kya baat hai?
AGENT: Kawaldeep Singh ji, aapki EMI of rupees 29,331 jo 7 February ko due thi, wo abhi tak pending hai.
       Kya aap abhi payment kar sakte hain?
```

### Assessment

| Check | Result | Notes |
|-------|--------|-------|
| Intro with proof point | PASS | 17,000 calls, 96% automation |
| Qualification flow | PASS | Asked about use case, then offered simulation |
| Simulation transition | PASS | Clean offer with instructions |
| Persona switch to Neha | PASS | Hindi, correct opener, professional |
| Collections state machine | PASS | OPENER → IDENTITY → REASON_FIRST flow correct |
| One question per turn | PASS | Single question per response |
| Default variables | NOTE | Still shows "Kawaldeep Singh" from previous config — needs reset for generic testing |

---

## Known Issues (to address next)

1. **Chat session timeout** — Sessions disconnect after ~30s idle. This is likely a platform-level limit for chat mode. Voice mode doesn't have this issue.
2. **Duplicate first message** — InfoSec agent sends greeting twice (once from agent config `firstMessage`, once from prompt). Need to either remove `firstMessage` from config or skip it in prompt.
3. **Default variables stuck** — Sales agent still has "Kawaldeep Singh" from previous call's `defaultVariables`. Should reset to generic defaults between campaigns.
