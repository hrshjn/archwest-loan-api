# Smallest AI - Electron SLM (Small Language Model)

**Last Updated:** 2026-02-11  
**Current Version:** Electron-v2  
**Internal Reference for Sales & Technical Discussions**

> **How to use this doc:** Jump to the section you need.
> - **AEs / Sales:** Start at [Talking Points](#talking-points-for-customer-conversations) and [Objection Handlers](#objection-handlers)
> - **SEs / Technical:** Start at [Key Specifications](#key-specifications) and [Latency Breakdown](#latency-breakdown--what-the-numbers-actually-mean)
> - **Leadership / Strategy:** Start at [Competitive Landscape](#competitive-landscape) and [Limitations](#known-limitations--where-electron-is-not-the-answer)

---

## Overview

Electron is Smallest AI's proprietary Small Language Model (SLM) — the reasoning engine powering voice agents on the Atoms platform and available as a standalone API for Enterprise customers. It is purpose-built for real-time conversational use cases, with less than 3B parameters.

Electron is the "brain" in Smallest's fully proprietary voice AI stack:

| Component | Model | Role |
|-----------|-------|------|
| **Speech-to-Text** | Pulse STT | Transcribes user speech |
| **Reasoning / LLM** | **Electron SLM** | Understands intent, reasons, generates response |
| **Text-to-Speech** | Lightning TTS | Synthesizes response into speech |
| **Speech-to-Speech** | Hydra (newer) | End-to-end multimodal voice model |

> **Core Thesis:** "LLMs memorize more information as they scale, and this behavior is often conflated with intelligence. Electron demonstrates how intelligence and memory can be decoupled." — smallest.ai

### Performance Claims — Be Precise

| Claim | Source | What It Actually Means | Use In |
|-------|--------|----------------------|--------|
| "Outperforms GPT-4.1 on multiple benchmarks" | smallest.ai website | Website-level marketing claim. **We do not have published benchmark scores to back this up yet.** | Marketing only — do NOT use in technical sales without specifics |
| "Outperforms GPT-4.1 Mini in quality and latency" | Sierra Ventures write-up | Investor's characterization, scoped to "real-time conversational use cases." GPT-4.1 Mini is a different (smaller) model than GPT-4.1. | Credible third-party quote, use with attribution |
| 45ms TTFT | Product docs / website | Time for Electron to produce its first token. Does NOT include STT or TTS. | Technical specs, with context |

> **⚠️ Internal Note:** The website says "outperforms GPT-4.1" and the investor says "GPT-4.1 Mini." These are different models. Until the research team publishes specific benchmark results, **default to the conservative claim**: Electron outperforms GPT-4.1 Mini on conversational tasks, and is competitive with GPT-4.1 at a fraction of the cost and latency. Don't let a prospect catch us inflating.
>
> **🔴 ACTION NEEDED (Research Team):** Publish specific benchmark names, scores, and methodology so sales has defensible numbers. This is the #1 credibility gap in technical conversations.

---

## Key Specifications

| Metric | Value | Notes |
|--------|-------|-------|
| **Parameters** | <3B | ~70x smaller than GPT-4o (~200B+ estimated) |
| **TTFT (Time to First Token)** | **45ms** | Electron LLM only — not end-to-end |
| **Safety** | Native NSFW protection, prompt injection/attack protection | Built into architecture, not bolted on |
| **On-Premise** | Yes — single GPU deployment feasible | Due to small parameter count |
| **Languages** | Hindi, English, Hinglish, Tamil + more | Dynamic mid-conversation switching |

---

## Latency Breakdown — What the Numbers Actually Mean

This is the most common source of confusion. There are **three different latency numbers** and they measure different things:

```
Caller speaks → [Pulse STT] → [Electron SLM] → [Lightning TTS] → Caller hears response
                  ~Xms*          45ms TTFT         ~Xms*
                |←————————————— Full pipeline: ~2.8s ——————————————→|
```

| Metric | Value | What It Measures |
|--------|-------|-----------------|
| **Electron TTFT** | 45ms | Time from Electron receiving text input to producing first token of response. This is the LLM-only number. |
| **Platform average latency** | sub-400ms | Smallest.ai website claim. Likely measures from STT finalization to first TTS audio byte — the "thinking" portion the caller perceives as a pause. **Needs confirmation from engineering.** |
| **Full pipeline latency** | ~2.8s | End-of-caller-speech to beginning-of-AI-speech. Includes all STT processing, LLM generation, and TTS synthesis. This is what the caller actually experiences. |

### How to talk about it

- **Do say:** "Electron's reasoning engine responds in 45ms — that's 5-10x faster than GPT-class models. Combined with our STT and TTS, the full voice response takes about 2-3 seconds, which is within the range of natural human conversation pauses."
- **Don't say:** "Sub-second latency" without qualifying what you're measuring. A skeptical buyer will test this and measure 2-3 seconds.

> **🔴 ACTION NEEDED (Engineering):** Confirm what "sub-400ms average latency" on the website measures. Is it STT-final → first TTS byte? First audio chunk → first response audio chunk? We need a precise definition.

---

## Versions

| Version | Description |
|---------|-------------|
| **Electron-v2** (current) | Significantly faster than v1. More robust agent flow navigation (follows complex conversation trees better). Architectural improvements for performance and reliability. Drop-in replacement for v1. |
| **Electron-v1** | First-generation SLM. Trained specifically for conversational tasks, optimized for dialogue-based interactions. |

---

## Availability & Access

| Context | PAYG | Enterprise |
|---------|------|------------|
| **Waves API** (standalone SLM access) | No | Yes (Enterprise-only) |
| **Atoms Platform** (within voice agents) | Yes | Yes |

- On Atoms, Electron is the **default/primary LLM** powering voice agents
- Customers can also select GPT-4o, GPT-4.1, or GPT-Realtime (hosted on Azure) as alternatives
- Standalone Electron API access (via Waves) is gated to Enterprise tier
- Feature ID in billing system: `WAV_SLM_ELECTRON` (Boolean entitlement)

---

## Known Limitations — Where Electron Is NOT the Answer

Be upfront about these. Sophisticated buyers will respect honesty and lose trust if they discover limitations you hid.

| Limitation | Detail | What to Say |
|-----------|--------|-------------|
| **General knowledge** | <3B params means less world knowledge baked into weights than GPT-4o. Electron relies on Knowledge Bases (RAG) for domain facts. | "Electron is a reasoning engine, not an encyclopedia. We inject domain knowledge via Knowledge Bases. For your use case, this is actually better — the agent only knows what you want it to know." |
| **Complex multi-step reasoning** | For tasks requiring long chains of logical reasoning, mathematical computation, or multi-step planning, larger models genuinely perform better. | "For structured voice conversations — which is what contact centers need — Electron excels. If you need a model to write code or solve math problems, that's not what this is for." |
| **Open-ended creative tasks** | Not designed for creative writing, summarization of long documents, or general-purpose chat. | "Electron is specialized for dialogue. For general-purpose needs, we support GPT-4o as an alternative LLM on the same platform." |
| **Long context windows** | Smaller models typically have shorter effective context. For conversations requiring recall of 30+ minutes of prior dialogue, limitations may surface. | Acknowledge, position Knowledge Bases as the mitigation. |
| **Niche languages** | Strong in English, Hindi, Hinglish, Tamil. Other Indian and international languages are available but may not be as colloquial. | Be honest about which languages are production-grade vs. available-but-developing. |

**Why being honest about this helps:** It lets you pivot to the real sell — "For your voice agent use case, Electron is purpose-built and outperforms general-purpose models. And if you ever need GPT-4o for a specific scenario, it's available on the same platform."

---

## Competitive Landscape

### Electron vs GPT-4o / GPT-4.1

| Dimension | Electron SLM | GPT-4o / GPT-4.1 |
|-----------|-------------|-------------------|
| **Parameters** | <3B | ~200B+ (estimated) |
| **TTFT** | 45ms | 200–500ms+ |
| **Voice-optimized** | Yes (purpose-built for dialogue) | No (general-purpose, adapted) |
| **On-prem deployable** | Yes (single GPU) | No (impractical to self-host) |
| **Third-party dependency** | None (100% proprietary) | Full (OpenAI / Azure) |
| **General knowledge** | Limited (relies on RAG/KBs) | Extensive (baked into weights) |
| **Complex reasoning** | Good for conversational tasks | Superior for multi-step logic |
| **Safety** | Native NSFW + prompt injection | Requires additional guardrails |

### Beyond OpenAI — Competitors You'll Actually Face

| Competitor | What They Offer | Electron's Advantage | Their Advantage |
|-----------|----------------|---------------------|-----------------|
| **Groq** | Ultra-fast inference on open-source models (Llama, Mixtral) | Electron is purpose-built for voice dialogue, not just fast inference on a general model. Full-stack ownership (STT+LLM+TTS). On-prem deployable. | Groq's hardware delivers extremely fast inference on larger open-source models. If customer wants Llama 70B at speed, Groq is compelling. |
| **Deepgram** | Nova STT + Aura TTS + Agent platform | Smallest owns the LLM layer (Electron); Deepgram uses third-party LLMs. Smallest's end-to-end stack is tighter. | Deepgram has stronger STT brand recognition in the US market. More mature developer ecosystem. |
| **ElevenLabs** | Best-in-class TTS, recently adding agents | Smallest has proprietary STT + LLM; ElevenLabs primarily excels in TTS and relies on external LLMs for reasoning. | ElevenLabs TTS quality is widely considered top-tier globally. Stronger brand in creative/media. |
| **Retell AI / Vapi / Bland** | Voice agent platforms using GPT/Claude under the hood | All inherit GPT's latency, cost, and vendor dependency. Electron eliminates all three. On-prem impossible for them. | Easier to get started with (GPT is familiar). Broader model selection. More US-market integrations. |
| **Fine-tuned open-source (Llama/Qwen/Phi)** | Self-hosted 3B models | See [objection handler below](#q-why-not-just-fine-tune-an-open-source-3b-model-llama-qwen-phi). | Free weights, large community, no vendor lock-in. |

---

## Objection Handlers

### Q: "Why not just fine-tune an open-source 3B model (Llama, Qwen, Phi)?"

This is the most important technical objection. Here's the honest answer:

**What to say:**
> "You absolutely could fine-tune a Qwen 2.5 3B or Phi for your use case. The question is: at what total cost?
>
> Electron isn't just a fine-tuned general model — it was trained from scratch for voice dialogue. That means:
> 1. **Turn-taking and interruption handling** are native, not prompt-engineered
> 2. **Tool/function calling** is optimized for real-time voice (mid-call API triggers)
> 3. **Flow navigation** handles complex branching conversation trees reliably
> 4. **Safety (NSFW, prompt injection)** is baked into architecture, not a filter layer
> 5. **It's integrated end-to-end** with our STT and TTS — latency is optimized across the full pipeline, not just the LLM
>
> You could build all of this yourself on top of Qwen. But you'd need a team of ML engineers maintaining it, plus separate STT, TTS, telephony, and orchestration. We're offering that as a managed platform."

**The real answer (internal):** Fine-tuned open-source models are a legitimate alternative for sophisticated teams. Our advantage is the integrated stack (not just the model), the voice-specific training data and architecture, and the operational burden we take off the customer. If a prospect has a strong ML team and wants to self-host everything, we may not be the right fit — and that's okay.

### Q: "What benchmarks exactly?"

**What to say:**
> "We're preparing detailed benchmark publications. What I can share today is that our investor Sierra Ventures independently evaluated Electron and noted it outperforms GPT-4.1 Mini in both quality and latency for real-time conversational use cases. I'd be happy to set up a technical deep-dive with our research team to walk through the methodology."

**Internal note:** This is a gap. Escalate requests for specifics to the research team. Don't improvise benchmark numbers.

### Q: "Can I see it handle [specific scenario]?"

**What to say:**
> "Yes — let's set up a live demo on the Atoms platform. We can configure an agent for your specific use case and you can call it yourself."

This is always the strongest response. A live demo on their use case beats any benchmark slide.

### Q: "What happens if OpenAI drops their price by 50%?"

**What to say:**
> "Two things. First, our cost advantage isn't just the LLM — it's the full stack. We own STT, LLM, and TTS, so there's no third-party margin stacking. Second, price is only part of it: on-prem deployment, data sovereignty, and no vendor dependency on OpenAI's API availability, rate limits, or policy changes — those don't go away with a price cut."

---

## Pricing — With Competitive Math

### Atoms Platform Pricing (Electron Bundled)

| Plan | India (per min) | US (per min) |
|------|----------------|--------------|
| PAYG | ~$0.09 | ~$0.15 |
| Business | ~$0.07 | ~$0.12 |
| Enterprise | Custom | Custom |

For standalone Waves API access (Enterprise-only), pricing is custom.

### Cost Comparison at Realistic Volumes

**Scenario:** 1M minutes/month outbound calling (India), avg 3-min calls, ~4 conversational turns per call.

| Cost Component | Smallest (Electron) | Competitor using GPT-4o |
|---------------|--------------------|-----------------------|
| **LLM cost** | Bundled in per-min rate | ~500 tokens/turn x 4 turns x 333K calls = 667M tokens/mo. At $2.50/M input + $10/M output ≈ **$5,000–$8,000/mo** just for LLM |
| **Platform cost** | 1M min x $0.07 = **$70,000/mo** | Similar platform fees + LLM markup |
| **Total LLM overhead** | $0 incremental | $5,000–$8,000/mo (7-11% on top) |
| **On-prem option** | Yes (single GPU) | No — GPT-4o can't self-host |

At **10M minutes/month** (YuVerse/Spocto scale), the GPT LLM overhead alone would be **$50,000–$80,000/mo** — money that goes straight to OpenAI, not to the platform vendor's margin.

> **Key point for AEs:** The LLM cost savings aren't the whole story. The bigger sell is: we don't have a third-party cost layer that can change without notice. Our economics are fully within our control.

---

## On-Premise Deployment

Because Electron is <3B parameters:

- **Single GPU deployment** is feasible (vs. multi-GPU clusters for GPT-class models)
- Runs within customer VPC / private cloud
- Combined with on-prem Pulse (STT) and Lightning (TTS), the entire voice stack can run air-gapped
- Critical for: BFSI, government, healthcare, defense, and any customer with strict data residency requirements
- Supported via Docker / Kubernetes

---

## Capabilities (Conversational)

| Capability | Detail |
|------------|--------|
| **Turn-taking detection** | Recognizes when user has finished speaking to avoid interruptions |
| **Language switching** | Dynamic Hindi ↔ English ↔ Hinglish ↔ Tamil switching mid-conversation |
| **Flow navigation** | Follows complex conversation trees / branching logic (improved in v2) |
| **Function/tool calling** | Triggers API calls before, during, or after conversations |
| **Objection handling** | Pre-trained on common objections with counter-responses |
| **Sentiment awareness** | Adjusts approach based on user tone and emotion |
| **Escalation detection** | Knows when to transfer to human agent (warm or cold transfer) |
| **Domain restriction** | Stays within defined use case boundaries to minimize hallucination |
| **Conversational fillers** | Strategic use of "hmm", "sure", etc. for natural pacing |

---

## Benefits by Customer Type

### Contact Centers / BPOs (Paytm, Vodafone, collections companies)

- Lower latency keeps callers engaged, reduces hang-ups
- Significant cost reduction at millions-of-minutes scale vs. GPT-based alternatives
- No per-token OpenAI bill — flat infrastructure cost on Smallest
- High concurrent call capacity with lower GPU footprint

### BFSI / Banking (ICICI, Piramal, Kogta, TVS Credit, IndusInd)

- **On-prem deployment** means sensitive financial data never leaves customer infra
- Compliance-ready: PII masking + HIPAA/SOC2/PCI:DSS/ISO 27001
- Handles complex financial conversations (account numbers, payment schedules, credit card details) with proper pacing
- No third-party LLM dependency = no data flowing to OpenAI

### Enterprise Outbound / Campaigns (Amazon Ads, RR Cable)

- At scale (100K+ calls/month), cost difference between Electron and GPT-4o is significant
- Faster inference = higher throughput = more calls per GPU
- Better flow navigation (v2) = fewer failed conversations in automated campaigns
- Function calling enables real-time CRM updates, ticket creation, campaign changes

### Multilingual / India Market (All India deals)

- Native language switching support (Hindi/English/Hinglish/Tamil)
- Low latency critical for code-switching conversations where model must detect and adapt in real-time
- India-specific accent optimization for TTS + STT
- India Marketplace listing in progress (separate from global)

### Platform Builders / OEMs (Five9, Vonage, Yellow AI)

- Full API access to Electron as standalone model (Enterprise tier)
- Can embed Smallest's reasoning engine into their own products
- No dependency on OpenAI pricing changes or rate limits
- White-label capable as part of the voice stack

### Collections-Specific (YuVerse/Spocto, CredResolve, Kogta)

- Purpose-built for repetitive, structured conversations (payment reminders, EMI collection, promise-to-pay)
- At collections scale (1–3 Cr calls/month for YuVerse), Electron's cost advantage is massive
- Handles negotiation patterns, objection loops, and escalation triggers natively
- Outcome-based model works because infrastructure cost per call is so low

---

## Production Stats

These are **platform-wide** numbers from smallest.ai (Feb 2026). They reflect the Atoms platform overall — not Electron specifically. Most production calls use Electron as the default LLM, but some customers use GPT-4o/4.1.

| Metric | Value | Scope |
|--------|-------|-------|
| Calls run monthly | 1B+ | Platform-wide (all LLMs) |
| Uptime (enterprise) | 99.99% | Platform SLA |
| Average latency | sub-400ms | Platform claim — see [latency breakdown](#latency-breakdown--what-the-numbers-actually-mean) for what this measures |
| Cost reduction vs alternatives | ~50% | Marketing claim — see [pricing math](#cost-comparison-at-realistic-volumes) for specifics |
| Show-up rate improvement | 90% | **Unclear:** likely means show-up rates improved TO ~90% (not BY 90%). Needs confirmation. |

> **⚠️ ACTION NEEDED (Marketing):** Clarify "90% improvements in show-up rates" — is this a 90% relative improvement (e.g., 40% → 76%) or achievement of a 90% absolute rate? Which customer/use case?

---

## Talking Points for Customer Conversations

### The Latency Pitch
> "Electron's reasoning engine produces its first token in 45 milliseconds — that's 5-10x faster than GPT-class models. The full voice response, including transcription and speech synthesis, takes about 2-3 seconds — which is natural conversation pace. The key is that our LLM isn't the bottleneck."

### The Cost Pitch
> "At your call volumes, the LLM layer alone could cost $50K-$80K/month on GPT-4o. With Electron, that's bundled into our per-minute rate — no separate token charges, no surprise OpenAI bills."

### The Independence Pitch
> "Our entire voice stack is proprietary — STT, LLM, and TTS. You're not dependent on OpenAI's pricing, rate limits, or policy changes. And because the models are small, we can deploy them on your infrastructure — fully on-prem, no data leaves your network."

### The Right-Sized Intelligence Pitch
> "For voice conversations — which are structured, domain-specific, and real-time — you don't need a 200-billion parameter model that knows everything about the world. You need a fast, specialized model that reasons well within your domain. That's what Electron is. And for domain knowledge, we use Knowledge Bases, so the agent only knows what you want it to know."

### The Safety Pitch
> "Prompt injection protection and NSFW filtering are built into the model architecture, not bolted on as an afterthought. Combined with our SOC2, HIPAA, and ISO 27001 certifications, you get compliance-grade AI out of the box."

---

## Research Foundation — Artificial Special Intelligence

Electron is grounded in Smallest AI's published research thesis: **"Artificial Special Intelligence: Beyond Scaling Laws Towards Structured Intelligence"** (Jan 26, 2026).

### Core Arguments

1. **Scaling ≠ Intelligence** — LLMs conflate memorization with reasoning. Bigger models memorize more, but that's not the same as being smarter.
2. **Decoupling intelligence and memory** — Electron offloads knowledge to external stores (knowledge bases, RAG) rather than baking everything into weights. This keeps the model small, fast, and updatable.
3. **Specialization over generality** — Small, task-aligned models outperform monolithic models in real-world latency- and cost-constrained settings. This mirrors biological intelligence: specialization + coordination beats universal generality.
4. **Separation of compute and memory** — Active reasoning stays focused; long-term knowledge lives in external memory.
5. **Asynchronous cognition** — Predictive processing rather than purely reactive (future direction toward Hydra).
6. **Continuous learning** — Stateful adaptation over time, not frozen weights after training.

### Practical Implications for Sales

- Electron is **not a stripped-down GPT** — it's a fundamentally different architecture optimized for dialogue
- It doesn't try to know everything; it's designed to **reason well** with domain-specific tools and memory
- The small size is a **feature, not a limitation** — it enables on-prem, low-cost, low-latency deployment
- When a prospect says "but GPT-4o is smarter" — agree on general tasks, disagree on voice-specific tasks

---

## FAQ (Internal)

**Q: Can customers use GPT-4o instead of Electron on Atoms?**
A: Yes. Atoms supports GPT-4o, GPT-4.1, and GPT-Realtime as alternative LLMs. But they lose the latency/cost advantage and the on-prem capability.

**Q: Is Electron available as a standalone API?**
A: Yes, but only for Enterprise customers via the Waves API. PAYG users only get Electron through Atoms voice agents.

**Q: How does Electron handle knowledge it wasn't trained on?**
A: Through Knowledge Bases (RAG). Electron's architecture separates reasoning from memory — domain knowledge is injected via external retrieval, not baked into weights. This is by design per the ASI thesis.

**Q: Can Electron be fine-tuned for specific customers?**
A: Custom model support is available at the Enterprise tier. Talk to the research team for specifics.

**Q: What about Hydra? Does it replace Electron?**
A: Hydra is a newer speech-to-speech model (full duplex, multimodal). It represents the next evolution but Electron + Pulse + Lightning remains the production stack for most customers today. Hydra is positioned for advanced use cases requiring asynchronous thinking and hyper-emotional dialogue.

**Q: Why not just fine-tune an open-source 3B model?**
A: See [objection handler above](#q-why-not-just-fine-tune-an-open-source-3b-model-llama-qwen-phi). Short answer: you could, but you'd need to build voice-specific training, tool calling, safety, plus integrate STT/TTS/telephony yourself. We offer that as a managed platform.

---

## Open Items for Internal Teams

| # | Item | Owner | Priority |
|---|------|-------|----------|
| 1 | Publish specific Electron benchmark results (names, scores, methodology) | Research | **P0** — biggest credibility gap |
| 2 | Clarify what "sub-400ms average latency" on website measures | Engineering | **P0** — sales can't defend this number |
| 3 | Clarify "90% show-up rate improvement" stat (relative vs absolute, which customer) | Marketing | P1 |
| 4 | Provide Electron-specific call volume (vs platform-wide 1B+) | Data/Analytics | P1 |
| 5 | Document GPU requirements for on-prem (which GPU, VRAM, throughput) | Engineering | P1 |
| 6 | Provide head-to-head eval vs fine-tuned Qwen/Llama 3B on voice tasks | Research | P2 |

---

## Source References

- **Website:** https://smallest.ai (Electron section under "Our Models")
- **Atoms LLM Config Docs:** https://atoms-docs.smallest.ai/deep-dive/llm-config/llm-config
- **Research Thesis:** https://smallest.ai/research/smallest-ai-thesis
- **Outline Docs Referenced:**
  - Engineering Handoff (Billing PRD) — feature catalog & entitlements
  - Amazon Ads Questions — multi-model architecture description
  - Security & Compliance Details — third-party vendor management
  - Voice Agent Prompting Guide — conversational capabilities
- **External:** Sierra Ventures investment write-up
