# Smallest AI - Electron SLM (Small Language Model)

**Last Updated:** 2026-02-11  
**Current Version:** Electron-v2  
**Internal Reference for Sales & Technical Discussions**

> **VERSION A — With Internal Eval Data**  
> This version incorporates actual benchmark scores from the Outline eval report (Pritish, Oct 2025) and corrected architecture details. Written for internal honesty so sales doesn't get caught out.  
> **Pritish:** Please review the benchmark section, architecture details, and latency numbers. Flag anything outdated (eval was Oct 2025 — scores may have improved since). Add/correct as needed.

> **How to use this doc:** Jump to the section you need.
> - **AEs / Sales:** Start at [Talking Points](#talking-points-for-customer-conversations) and [Objection Handlers](#objection-handlers)
> - **SEs / Technical:** Start at [Key Specifications](#key-specifications) and [Internal Benchmark Results](#internal-benchmark-results)
> - **Leadership / Strategy:** Start at [Competitive Landscape](#competitive-landscape) and [Limitations](#known-limitations--where-electron-is-not-the-answer)

---

## Overview

Electron is Smallest AI's proprietary Small Language Model (SLM) — the reasoning engine powering voice agents on the Atoms platform and available as a standalone API for Enterprise customers. It is purpose-built for real-time conversational use cases.

**Architecture:** Electron is built on a fine-tuned **Qwen3 30B A3B** — a Mixture of Experts (MoE) model with 30B total parameters but only **3B active parameters per token** during inference. This gives it the speed of a 3B model with quality closer to a much larger one.

Electron is the "brain" in Smallest's fully proprietary voice AI stack:

| Component | Model | Role |
|-----------|-------|------|
| **Speech-to-Text** | Pulse STT | Transcribes user speech |
| **Reasoning / LLM** | **Electron SLM** | Understands intent, reasons, generates response |
| **Text-to-Speech** | Lightning TTS | Synthesizes response into speech |
| **Speech-to-Speech** | Hydra (newer) | End-to-end multimodal voice model |

> **Core Thesis:** "LLMs memorize more information as they scale, and this behavior is often conflated with intelligence. Electron demonstrates how intelligence and memory can be decoupled." — smallest.ai

---

## Key Specifications

| Metric | Value | Notes |
|--------|-------|-------|
| **Architecture** | Qwen3 30B A3B (MoE) | 30B total params, **3B active per token** |
| **Precision** | FP8 | Halves VRAM from ~60GB to ~30GB |
| **Hardware target** | 1x NVIDIA L40S (48GB VRAM) | Single GPU deployment |
| **TPS (Tokens Per Second)** | 100+ at concurrency 1 | 2.5x faster than 14B FP8 variant |
| **TTFT (Time to First Token)** | **45ms** (website claim) | Electron LLM only — not end-to-end |
| **TTFC (Time to First Chunk)** | <250ms at concurrency 1 | More important metric — first full sentence |
| **Concurrency per GPU** | ~5 calls before degradation | TTFC stays <500ms up to concurrency 5; degrades after |
| **Safety** | Native NSFW protection, prompt injection/attack protection | Built into architecture |
| **Languages** | Hindi, English, Hinglish, Tamil + more | Dynamic mid-conversation switching |

> **Pritish: Is 45ms TTFT still accurate for the production Electron-v2? The latency report showed different numbers for the 30B model. Please confirm or correct.**

---

## Internal Benchmark Results

**Source:** Outline — "Electron (14B & 30B) Eval Report" by Pritish Mishra, Oct 31 2025  
**Benchmark:** `single-prompt-agent`, 560 evaluations  
**Models tested:** Electron-14B, Electron-30B, GPT-4.1, GPT-4.1-Mini

> **Pritish: These are from Oct 2025. Have scores improved since then with Electron-v2? If yes, please provide updated numbers or note expected improvement range.**

### Overall Performance (Individual Evaluation — more reliable per Pritish)

| Model | Avg Score | Rank |
|-------|-----------|------|
| GPT-4.1 | **4.83/5.0** | 1st |
| GPT-4.1-Mini | **4.64/5.0** | 2nd |
| **Electron-30B** | **4.45/5.0** | **3rd** |
| Electron-14B | 4.40/5.0 | 4th |

### Per-Criteria Breakdown (Individual Eval)

| Criteria | Electron-30B | GPT-4.1-Mini | GPT-4.1 | Gap (Electron vs Mini) |
|----------|-------------|-------------|---------|----------------------|
| Conversational Quality | 4.29 | 4.50 | 4.75 | -0.21 |
| Hallucination | 4.79 | 4.89 | 4.98 | -0.10 |
| Instruction Following | 4.22 | 4.50 | 4.72 | -0.28 |
| Tool Calling | 4.49 | 4.67 | 4.86 | -0.18 |

### By Language

| Language | Electron-30B | GPT-4.1-Mini | GPT-4.1 |
|----------|-------------|-------------|---------|
| English | 4.38 | 4.61 | 4.78 |
| Hindi | 4.61 | 4.72 | 4.96 |

### What This Means for Sales

1. **GPT-4.1 is clearly better on quality** — Electron doesn't outperform it on these benchmarks. The website claim "outperforms GPT-4.1" is not supported by internal evals.
2. **GPT-4.1-Mini is also ahead**, but the gap is smaller (4.64 vs 4.45 overall). The Sierra Ventures claim "outperforms GPT-4.1 Mini" is also not supported in these evals, though it may reference different evaluations or conditions.
3. **Electron-30B scores are still strong** — 4.45/5.0 is good. For many voice use cases, the quality difference between 4.45 and 4.64 may not be perceptible to end callers.
4. **Hallucination scores are close** — 4.79 vs 4.89. Electron is solid here.
5. **The real sell is cost + latency + independence**, not raw quality superiority. Electron is ~90% of GPT-4.1-Mini quality at a fraction of the cost, with no third-party dependency and on-prem capability.

> **⚠️ How to handle the website claim:** Don't repeat "outperforms GPT-4.1" in technical sales conversations. Instead say: "Electron delivers comparable quality to GPT-4.1 Mini on conversational tasks, at dramatically lower cost and latency, with the ability to deploy on-prem."

> **Pritish: The comparison eval (head-to-head) showed Electron ranking 3rd/4th with ~20% win rate vs GPT models. Is this representative, or are there scenarios where Electron wins more consistently? Any updated evals to share?**

---

## Latency Breakdown — What the Numbers Actually Mean

There are **three different latency metrics** and they measure different things:

```
Caller speaks → [Pulse STT] → [Electron SLM] → [Lightning TTS] → Caller hears response
                  ~Xms*          45ms TTFT         ~Xms*
                               <250ms TTFC
                |←————————————— Full pipeline: ~2.8s ——————————————→|
```

| Metric | Value | What It Measures |
|--------|-------|-----------------|
| **Electron TTFT** | 45ms (website) | Time from Electron receiving text to producing first token. LLM-only number. |
| **Electron TTFC** | <250ms @ concurrency 1 | Time to first complete sentence/chunk. **More important than TTFT** — even if TTFT is low, TTFC can be high if generation speed is slow. Stays <500ms up to concurrency 5. |
| **Platform average latency** | sub-400ms | Smallest.ai website claim. **Needs confirmation on what this measures.** |
| **Full pipeline latency** | ~2.8s | End-of-caller-speech to beginning-of-AI-speech. Includes STT + LLM + TTS. What the caller actually experiences. |

### Concurrency vs Latency (From Latency Report)

| Concurrency | TTFC (30B A3B) | Status |
|-------------|---------------|--------|
| 1 | <250ms | Within threshold |
| 2-5 | <500ms | Within threshold |
| 5+ | Degrades rapidly | Above threshold — TPS drops to 14B levels |

> **Why this matters for on-prem sizing:** At ~5 concurrent calls per GPU, a customer doing 50 concurrent calls needs ~10 L40S GPUs. This needs to be factored into on-prem deployment proposals.

### How to talk about it

- **Do say:** "Electron produces its first complete response sentence in under 250 milliseconds. Combined with our STT and TTS, the full voice response takes about 2-3 seconds — natural conversation pace."
- **Don't say:** "Sub-second latency" or "45ms" without qualifying what metric you're citing.

> **🔴 ACTION NEEDED (Engineering):** Confirm what "sub-400ms average latency" on the website measures precisely.

---

## Versions

| Version | Description |
|---------|-------------|
| **Electron-v2** (current) | Significantly faster than v1. More robust agent flow navigation. Architectural improvements for performance and reliability. Drop-in replacement for v1. |
| **Electron-v1** | First-generation SLM. Trained for conversational tasks, optimized for dialogue-based interactions. |

> **Pritish: Is Electron-v2 still the same Qwen3-30B-A3B base, or has the architecture changed? Any v2-specific eval numbers?**

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

| Limitation | Detail | What to Say |
|-----------|--------|-------------|
| **Quality gap vs GPT-4.1** | Internal evals show Electron-30B at 4.45/5.0 vs GPT-4.1 at 4.83/5.0 (Oct 2025). Noticeable in instruction following and conversational quality. | "Electron delivers strong quality for voice conversations. For use cases where absolute peak quality matters more than cost or latency, we also support GPT-4.1 on the same platform — you can A/B test both." |
| **General knowledge** | MoE with 3B active params means less world knowledge than GPT-4o. Relies on Knowledge Bases (RAG) for domain facts. | "Electron is a reasoning engine, not an encyclopedia. We inject domain knowledge via Knowledge Bases. The agent only knows what you want it to know." |
| **Complex multi-step reasoning** | Larger models genuinely perform better on long chains of logical reasoning, math, multi-step planning. | "For structured voice conversations — which is what contact centers need — Electron is strong. Complex analytical tasks are better served by larger models." |
| **Concurrency per GPU** | Performance degrades after ~5 concurrent calls per L40S GPU. | Factor into on-prem deployment sizing. Cloud deployment handles this via auto-scaling. |
| **Open-ended creative tasks** | Not designed for creative writing, summarization, or general-purpose chat. | "Electron is specialized for dialogue. For general-purpose needs, we support GPT-4o on the same platform." |
| **Niche languages** | Strong in English, Hindi, Hinglish, Tamil. Other languages available but may not be as colloquial. | Be honest about production-grade vs developing languages. |

---

## Competitive Landscape

### Electron vs GPT-4o / GPT-4.1 (Honest Comparison)

| Dimension | Electron SLM | GPT-4o / GPT-4.1 |
|-----------|-------------|-------------------|
| **Architecture** | 30B MoE, 3B active per token | ~200B+ dense (estimated) |
| **Quality (internal eval)** | 4.45/5.0 | 4.83/5.0 (GPT-4.1) |
| **TTFC** | <250ms @ concurrency 1 | Higher (API latency + larger model) |
| **Voice-optimized** | Yes (purpose-built for dialogue) | No (general-purpose, adapted) |
| **On-prem deployable** | Yes (1x L40S GPU) | No (impractical to self-host) |
| **Third-party dependency** | None (100% proprietary) | Full (OpenAI / Azure) |
| **General knowledge** | Limited (relies on RAG/KBs) | Extensive (baked into weights) |
| **Complex reasoning** | Good for conversational tasks | Superior for multi-step logic |
| **Cost at scale** | Bundled in per-min rate | $0.0025-$0.01/1K tokens on top |

### Beyond OpenAI — Competitors You'll Actually Face

| Competitor | What They Offer | Electron's Advantage | Their Advantage |
|-----------|----------------|---------------------|-----------------|
| **Groq** | Ultra-fast inference on open-source models (Llama, Mixtral) | Full-stack ownership (STT+LLM+TTS). Voice-specific fine-tuning. On-prem deployable. | Groq hardware delivers fast inference on larger models. More flexible model selection. |
| **Deepgram** | Nova STT + Aura TTS + Agent platform | Smallest owns the LLM layer; Deepgram uses third-party LLMs. End-to-end stack is tighter. | Stronger STT brand recognition in US. More mature developer ecosystem. |
| **ElevenLabs** | Best-in-class TTS, recently adding agents | Proprietary STT + LLM; ElevenLabs relies on external LLMs for reasoning. | ElevenLabs TTS quality widely considered top-tier. Stronger brand in creative/media. |
| **Retell AI / Vapi / Bland** | Voice agent platforms using GPT/Claude | All inherit GPT's latency, cost, and vendor dependency. Electron eliminates all three. On-prem impossible for them. | Easier to start with (GPT is familiar). Broader model selection. More US-market integrations. |
| **Fine-tuned open-source (Llama/Qwen/Phi)** | Self-hosted 3B models | See [objection handler below](#q-why-not-just-fine-tune-an-open-source-3b-model). Ironic note: Electron itself is built on Qwen3. Our value is the voice-specific training + integrated stack, not the base architecture. | Free weights, large community, no vendor lock-in. |

---

## Objection Handlers

### Q: "Why not just fine-tune an open-source 3B model?"

**What to say:**
> "You could fine-tune a Qwen or Phi model for your use case. The question is total cost of ownership.
>
> Electron isn't just a fine-tuned base model — it's trained specifically for voice dialogue with:
> 1. **Turn-taking and interruption handling** native to the model
> 2. **Tool/function calling** optimized for real-time voice (mid-call API triggers)
> 3. **Flow navigation** for complex branching conversation trees
> 4. **Safety (NSFW, prompt injection)** baked into architecture
> 5. **End-to-end integration** with our STT and TTS — latency optimized across the full pipeline
>
> You'd need a team of ML engineers building and maintaining all of this yourself, plus separate STT, TTS, telephony, and orchestration. We deliver that as a managed platform."

**Internal note:** Electron is built on Qwen3-30B-A3B. A sophisticated prospect who digs into this will realize the base architecture is open-source. Our real differentiation is: (a) voice-specific fine-tuning and training data, (b) the integrated stack, (c) the operational burden we absorb. If a prospect has a strong ML team and wants full control, we may not be the right fit.

### Q: "Your website says you outperform GPT-4.1. Can you prove it?"

**What to say:**
> "On our internal benchmarks for conversational voice tasks, Electron scores competitively — it's within striking distance of GPT-4.1 Mini on quality metrics, at a fraction of the cost and latency. Rather than debating benchmarks, I'd like to show you on your actual use case. Can we set up a live demo where you compare Electron and GPT-4.1 on the same agent?"

**Internal note:** Our internal evals (Oct 2025) show Electron-30B at 4.45/5.0 vs GPT-4.1 at 4.83/5.0 and GPT-4.1-Mini at 4.64/5.0. Electron does not outperform either on these benchmarks. **Do not double down on the website claim in technical conversations.** Redirect to a live demo — real-world voice quality often matters more than benchmark scores.

### Q: "Can I see it handle [specific scenario]?"

**What to say:**
> "Yes — let's set up a live demo on the Atoms platform. We can configure an agent for your specific use case and you can call it yourself."

This is always the strongest response. A live demo beats any benchmark slide.

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

### Cost Comparison at Realistic Volumes

**Scenario:** 1M minutes/month outbound calling (India), avg 3-min calls, ~4 turns per call.

| Cost Component | Smallest (Electron) | Competitor using GPT-4o |
|---------------|--------------------|-----------------------|
| **LLM cost** | Bundled in per-min rate | ~500 tokens/turn x 4 turns x 333K calls = 667M tokens/mo. At $2.50/M input + $10/M output ≈ **$5,000–$8,000/mo** just for LLM |
| **Platform cost** | 1M min x $0.07 = **$70,000/mo** | Similar platform fees + LLM markup |
| **Total LLM overhead** | $0 incremental | $5,000–$8,000/mo (7-11% on top) |
| **On-prem option** | Yes (1x L40S per ~5 concurrent calls) | No — GPT-4o can't self-host |

At **10M minutes/month** (YuVerse/Spocto scale), the GPT LLM overhead alone would be **$50,000–$80,000/mo**.

---

## On-Premise Deployment

| Spec | Detail |
|------|--------|
| **GPU** | NVIDIA L40S (48GB VRAM) |
| **VRAM usage** | ~30GB for model (FP8) + ~18GB free for inference |
| **Concurrency per GPU** | ~5 calls before significant degradation |
| **Deployment** | Docker / Kubernetes |
| **Full air-gapped stack** | Pulse (STT) + Electron (LLM) + Lightning (TTS) |

**Sizing example:** Customer wants 50 concurrent voice agent calls on-prem → needs ~10 L40S GPUs for the Electron layer alone (plus additional for STT and TTS).

> **Pritish: Are there optimization paths to increase concurrency per GPU? vLLM batching improvements? Different quantization levels? Please add notes on the roadmap here.**

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
- Significant cost reduction at scale vs. GPT-based alternatives
- No per-token OpenAI bill — flat infrastructure cost
- For most voice conversations, the quality gap vs GPT (4.45 vs 4.64) is not perceptible to end callers

### BFSI / Banking (ICICI, Piramal, Kogta, TVS Credit, IndusInd)

- **On-prem deployment** means sensitive financial data never leaves customer infra
- Compliance-ready: PII masking + HIPAA/SOC2/PCI:DSS/ISO 27001
- No third-party LLM dependency = no data flowing to OpenAI

### Enterprise Outbound / Campaigns (Amazon Ads, RR Cable)

- At scale (100K+ calls/month), cost difference vs GPT is significant
- Faster inference = higher throughput = more calls per GPU
- Better flow navigation (v2) = fewer failed conversations

### Platform Builders / OEMs (Five9, Vonage, Yellow AI)

- Full API access to Electron as standalone model (Enterprise tier)
- No dependency on OpenAI pricing changes or rate limits
- White-label capable as part of the voice stack

### Collections-Specific (YuVerse/Spocto, CredResolve, Kogta)

- Purpose-built for repetitive, structured conversations
- At collections scale (1–3 Cr calls/month), cost advantage is massive
- Handles negotiation patterns, objection loops, and escalation triggers natively

---

## Talking Points for Customer Conversations

### The Latency Pitch
> "Electron produces its first complete response sentence in under 250 milliseconds. Combined with our STT and TTS, the full voice response takes about 2-3 seconds — natural conversation pace. And because we own the entire stack, we're optimizing latency across every layer."

### The Cost Pitch
> "At your call volumes, the LLM layer alone could cost $50K-$80K/month on GPT-4o. With Electron, that's bundled into our per-minute rate — no separate token charges, no surprise OpenAI bills."

### The Independence Pitch
> "Our entire voice stack is proprietary — STT, LLM, and TTS. You're not dependent on OpenAI's pricing, rate limits, or policy changes. And we can deploy the full stack on your infrastructure — air-gapped, no data leaves your network."

### The Right-Fit Intelligence Pitch
> "For voice conversations — structured, domain-specific, real-time — you don't need a model that knows everything about the world. You need a fast, specialized model that reasons well within your domain and costs a fraction to run. That's Electron. And if you need GPT-4.1 quality for specific scenarios, it's available on the same platform — you can switch per agent."

### The Safety Pitch
> "Prompt injection protection and NSFW filtering are built into the model, not bolted on. Combined with SOC2, HIPAA, and ISO 27001 certifications, you get compliance-grade AI out of the box."

---

## Production Stats

**Platform-wide** numbers from smallest.ai (Feb 2026). Reflect the Atoms platform overall — not Electron specifically.

| Metric | Value | Scope |
|--------|-------|-------|
| Calls run monthly | 1B+ | Platform-wide (all LLMs) |
| Uptime (enterprise) | 99.99% | Platform SLA |
| Average latency | sub-400ms | Platform claim — definition needs confirmation |
| Cost reduction vs alternatives | ~50% | Marketing claim — see [pricing math](#cost-comparison-at-realistic-volumes) |
| Show-up rate improvement | 90% | **Unclear:** likely TO ~90%, not BY 90%. Needs confirmation. |

---

## Research Foundation — Artificial Special Intelligence

Electron is grounded in Smallest AI's published research thesis: **"Artificial Special Intelligence: Beyond Scaling Laws Towards Structured Intelligence"** (Jan 26, 2026).

### Core Arguments

1. **Scaling ≠ Intelligence** — LLMs conflate memorization with reasoning.
2. **Decoupling intelligence and memory** — Knowledge lives in external stores (RAG), not model weights.
3. **Specialization over generality** — Small, task-aligned models outperform monolithic models in constrained settings.
4. **Separation of compute and memory** — Active reasoning stays focused; long-term knowledge is external.
5. **Asynchronous cognition** — Predictive processing (future direction toward Hydra).
6. **Continuous learning** — Stateful adaptation over time.

---

## FAQ (Internal)

**Q: Can customers use GPT-4o instead of Electron on Atoms?**
A: Yes. Atoms supports GPT-4o, GPT-4.1, and GPT-Realtime. They'll get better quality scores but higher latency, higher cost, and no on-prem option.

**Q: Is Electron available as a standalone API?**
A: Yes, Enterprise-only via Waves API.

**Q: How does Electron handle knowledge it wasn't trained on?**
A: Knowledge Bases (RAG). Electron's architecture separates reasoning from memory by design.

**Q: Can Electron be fine-tuned for specific customers?**
A: Custom model support available at Enterprise tier. Talk to Research.

**Q: Is Electron really "proprietary" if it's built on Qwen3?**
A: The base architecture is Qwen3-30B-A3B (open-source). Our proprietary value is: (a) voice-dialogue-specific fine-tuning and training data, (b) safety layers, (c) tool calling optimization, (d) integration with Pulse/Lightning for end-to-end latency optimization. The model weights after training are proprietary.

**Q: What about Hydra?**
A: Hydra is a newer speech-to-speech model (full duplex, multimodal). Electron + Pulse + Lightning is the production stack for most customers today.

---

## Open Items for Pritish / Research Team

| # | Item | Priority |
|---|------|----------|
| 1 | **Are Oct 2025 eval scores still current?** Have Electron-v2 scores improved? If yes, provide updated numbers. | **P0** |
| 2 | **Confirm the 45ms TTFT claim.** The latency report shows TTFC <250ms for 30B — is 45ms TTFT measured differently? | **P0** |
| 3 | **Are there scenarios where Electron beats GPT-4.1-Mini?** The head-to-head shows ~20% win rate overall, but are there specific agent types or use cases where Electron wins more? | P0 |
| 4 | **Website says "outperforms GPT-4.1."** Is there a different eval or external benchmark backing this? Or should marketing update the claim? | P0 |
| 5 | Confirm Electron-v2 is still Qwen3-30B-A3B based, or has architecture changed? | P1 |
| 6 | Roadmap for concurrency improvements (>5 per GPU)? | P1 |
| 7 | Any plans for a smaller/faster variant for latency-critical use cases? | P2 |

---

## Source References

- **Website:** https://smallest.ai (Electron section under "Our Models")
- **Atoms LLM Config Docs:** https://atoms-docs.smallest.ai/deep-dive/llm-config/llm-config
- **Research Thesis:** https://smallest.ai/research/smallest-ai-thesis
- **Internal Eval Report:** Outline — "Electron (14B & 30B) Eval Report" (Pritish Mishra, Oct 2025)
- **Internal Latency Report:** Outline — "Electron (14B & 30B) Latency Report" (Pritish Mishra, Oct 2025)
- **Outline Docs:** Engineering Handoff, Amazon Ads Questions, Security & Compliance Details
- **External:** Sierra Ventures investment write-up
