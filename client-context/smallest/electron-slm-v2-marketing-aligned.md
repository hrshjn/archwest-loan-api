# Smallest AI - Electron SLM (Small Language Model)

**Last Updated:** 2026-02-11  
**Current Version:** Electron-v2  
**Internal Reference for Sales & Technical Discussions**

> **VERSION B — Marketing-Aligned (Current Website Claims)**  
> This version uses the claims as stated on the website and by Sierra Ventures, without internal eval data. Benchmark specifics are left as placeholders for Research to fill in.  
> **Pritish:** Compare with Version A (which has the Oct 2025 eval data). Decide which framing is accurate for the current state of Electron-v2. If scores have improved since Oct 2025, this version may be closer to reality — but we need the numbers to back it up.

> **How to use this doc:** Jump to the section you need.
> - **AEs / Sales:** Start at [Talking Points](#talking-points-for-customer-conversations) and [Objection Handlers](#objection-handlers)
> - **SEs / Technical:** Start at [Key Specifications](#key-specifications) and [Latency Breakdown](#latency-breakdown--what-the-numbers-actually-mean)
> - **Leadership / Strategy:** Start at [Competitive Landscape](#competitive-landscape) and [Limitations](#known-limitations--where-electron-is-not-the-answer)

---

## Overview

Electron is Smallest AI's proprietary Small Language Model (SLM) — the reasoning engine powering voice agents on the Atoms platform and available as a standalone API for Enterprise customers. It is purpose-built for real-time conversational use cases, with less than 3B active parameters per token.

Electron is the "brain" in Smallest's fully proprietary voice AI stack:

| Component | Model | Role |
|-----------|-------|------|
| **Speech-to-Text** | Pulse STT | Transcribes user speech |
| **Reasoning / LLM** | **Electron SLM** | Understands intent, reasons, generates response |
| **Text-to-Speech** | Lightning TTS | Synthesizes response into speech |
| **Speech-to-Speech** | Hydra (newer) | End-to-end multimodal voice model |

> **Core Thesis:** "LLMs memorize more information as they scale, and this behavior is often conflated with intelligence. Electron demonstrates how intelligence and memory can be decoupled." — smallest.ai

### Performance Claims — Source Attribution

| Claim | Source | Guidance |
|-------|--------|----------|
| "Outperforms GPT-4.1 on multiple benchmarks" | smallest.ai website | Use in marketing/pitch decks. In technical conversations, offer a live demo instead of debating benchmarks. |
| "Outperforms GPT-4.1 Mini in quality and latency for real-time conversational use cases" | Sierra Ventures write-up | Third-party investor characterization. Use with attribution. |
| 45ms TTFT | Product docs / website | Electron LLM only — does NOT include STT or TTS. |

> **🔴 ACTION NEEDED (Research Team / Pritish):** Provide specific benchmark names, scores, and methodology so AEs have defensible numbers when technical buyers push back. This is the #1 credibility gap. If the Oct 2025 eval scores are outdated and v2 scores are better, please share the updated data.

---

## Key Specifications

| Metric | Value | Notes |
|--------|-------|-------|
| **Active Parameters** | <3B per token | MoE architecture — 3B active during inference |
| **TTFT (Time to First Token)** | **45ms** | Electron LLM only — not end-to-end |
| **Hardware** | 1x NVIDIA L40S (48GB VRAM) | Single GPU deployment target |
| **Safety** | Native NSFW protection, prompt injection/attack protection | Built into architecture, not bolted on |
| **On-Premise** | Yes — single GPU deployment feasible | Due to small active parameter count |
| **Languages** | Hindi, English, Hinglish, Tamil + more | Dynamic mid-conversation switching |

---

## Latency Breakdown — What the Numbers Actually Mean

There are **three different latency numbers** and they measure different things:

```
Caller speaks → [Pulse STT] → [Electron SLM] → [Lightning TTS] → Caller hears response
                  ~Xms*          45ms TTFT         ~Xms*
                |←————————————— Full pipeline: ~2.8s ——————————————→|
```

| Metric | Value | What It Measures |
|--------|-------|-----------------|
| **Electron TTFT** | 45ms | Time from Electron receiving text input to producing first token. LLM-only number. |
| **Platform average latency** | sub-400ms | Smallest.ai website claim. **Needs confirmation from engineering on exact definition.** |
| **Full pipeline latency** | ~2.8s | End-of-caller-speech to beginning-of-AI-speech. Includes all STT + LLM + TTS. This is what the caller actually experiences. |

### How to talk about it

- **Do say:** "Electron's reasoning engine responds in 45ms — that's 5-10x faster than GPT-class models. Combined with our STT and TTS, the full voice response takes about 2-3 seconds, which is within natural conversation pace."
- **Don't say:** "Sub-second latency" without qualifying what you're measuring.

> **🔴 ACTION NEEDED (Engineering):** Confirm what "sub-400ms average latency" measures.
>
> **Pritish:** The internal latency report shows TTFC <250ms at concurrency 1 for the 30B model. Is 45ms TTFT still the right number for Electron-v2, or should we lead with TTFC instead?

---

## Versions

| Version | Description |
|---------|-------------|
| **Electron-v2** (current) | Significantly faster than v1. More robust agent flow navigation. Architectural improvements for performance and reliability. Drop-in replacement for v1. |
| **Electron-v1** | First-generation SLM. Trained for conversational tasks, optimized for dialogue-based interactions. |

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
| **General knowledge** | Less world knowledge baked into weights than GPT-4o. Electron relies on Knowledge Bases (RAG) for domain facts. | "Electron is a reasoning engine, not an encyclopedia. We inject domain knowledge via Knowledge Bases. The agent only knows what you want it to know." |
| **Complex multi-step reasoning** | For long chains of logical reasoning, math, or multi-step planning, larger models genuinely perform better. | "For structured voice conversations — which is what contact centers need — Electron excels. Complex analytical tasks are better served by larger models." |
| **Open-ended creative tasks** | Not designed for creative writing, summarization, or general-purpose chat. | "Electron is specialized for dialogue. For general-purpose needs, we support GPT-4o on the same platform." |
| **Long context windows** | Smaller models typically have shorter effective context. | Acknowledge, position Knowledge Bases as mitigation. |
| **Niche languages** | Strong in English, Hindi, Hinglish, Tamil. Other languages available but may not be as colloquial. | Be honest about production-grade vs developing. |

---

## Competitive Landscape

### Electron vs GPT-4o / GPT-4.1

| Dimension | Electron SLM | GPT-4o / GPT-4.1 |
|-----------|-------------|-------------------|
| **Active Parameters** | ~3B per token | ~200B+ (estimated) |
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
| **Groq** | Ultra-fast inference on open-source models | Full-stack ownership (STT+LLM+TTS). Voice-specific fine-tuning. On-prem. | Hardware delivers fast inference on larger models. More model flexibility. |
| **Deepgram** | Nova STT + Aura TTS + Agent platform | Smallest owns the LLM layer; Deepgram uses third-party LLMs. | Stronger STT brand in US. More mature developer ecosystem. |
| **ElevenLabs** | Best-in-class TTS, adding agents | Proprietary STT + LLM; ElevenLabs relies on external LLMs. | TTS quality widely considered top-tier. Stronger creative/media brand. |
| **Retell AI / Vapi / Bland** | Voice agent platforms using GPT/Claude | All inherit GPT's latency, cost, vendor dependency. On-prem impossible for them. | Easier to start with. Broader model selection. More US integrations. |
| **Fine-tuned open-source (Llama/Qwen/Phi)** | Self-hosted 3B models | See [objection handler below](#q-why-not-just-fine-tune-an-open-source-3b-model). | Free weights, large community, no vendor lock-in. |

---

## Objection Handlers

### Q: "Why not just fine-tune an open-source 3B model?"

**What to say:**
> "You absolutely could fine-tune a Qwen or Phi model. The question is total cost of ownership.
>
> Electron is trained specifically for voice dialogue with:
> 1. **Turn-taking and interruption handling** native to the model
> 2. **Tool/function calling** optimized for real-time voice
> 3. **Flow navigation** for complex branching conversation trees
> 4. **Safety (NSFW, prompt injection)** baked into architecture
> 5. **End-to-end integration** with our STT and TTS — latency optimized across the full pipeline
>
> Building this yourself on top of Qwen means a team of ML engineers, plus separate STT, TTS, telephony, and orchestration. We deliver that as a managed platform."

### Q: "What benchmarks exactly?"

**What to say:**
> "Our investor Sierra Ventures independently evaluated Electron and noted it outperforms GPT-4.1 Mini in both quality and latency for real-time conversational use cases. I'd love to set up a technical deep-dive with our research team to walk through the methodology — or better yet, let's do a live demo on your use case."

### Q: "Can I see it handle [specific scenario]?"

> "Yes — let's configure an agent for your use case on Atoms and you can call it yourself."

### Q: "What happens if OpenAI drops their price by 50%?"

> "Our cost advantage is the full stack — STT, LLM, TTS — no third-party margin stacking. And on-prem deployment, data sovereignty, and no vendor dependency don't go away with a price cut."

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
| **LLM cost** | Bundled in per-min rate | ~667M tokens/mo ≈ **$5,000–$8,000/mo** just for LLM |
| **Platform cost** | 1M min x $0.07 = **$70,000/mo** | Similar platform fees + LLM markup |
| **Total LLM overhead** | $0 incremental | $5,000–$8,000/mo (7-11% on top) |
| **On-prem option** | Yes (single GPU) | No |

At **10M minutes/month** (YuVerse/Spocto scale), GPT LLM overhead alone: **$50,000–$80,000/mo**.

---

## On-Premise Deployment

- **Single GPU deployment** feasible (1x NVIDIA L40S, 48GB VRAM)
- Runs within customer VPC / private cloud
- Combined with on-prem Pulse (STT) and Lightning (TTS) — entire voice stack can run air-gapped
- Critical for: BFSI, government, healthcare, defense
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
- Lower latency, cost reduction at scale, no per-token OpenAI bills, high concurrency with lower GPU footprint

### BFSI / Banking (ICICI, Piramal, Kogta, TVS Credit, IndusInd)
- On-prem deployment, compliance-ready (HIPAA/SOC2/PCI:DSS/ISO 27001), no third-party LLM dependency

### Enterprise Outbound / Campaigns (Amazon Ads, RR Cable)
- Cost savings at 100K+ calls/month, faster inference, better flow navigation, function calling

### Platform Builders / OEMs (Five9, Vonage, Yellow AI)
- Standalone API access (Enterprise), no OpenAI dependency, white-label capable

### Collections-Specific (YuVerse/Spocto, CredResolve, Kogta)
- Purpose-built for structured conversations, massive cost advantage at collections scale

---

## Talking Points for Customer Conversations

### The Latency Pitch
> "Electron's reasoning engine responds in 45 milliseconds — 5-10x faster than GPT-class models. The full voice response takes about 2-3 seconds — natural conversation pace."

### The Cost Pitch
> "At your call volumes, the LLM layer alone could cost $50K-$80K/month on GPT-4o. With Electron, it's bundled — no separate token charges."

### The Independence Pitch
> "Our entire voice stack is proprietary. No dependence on OpenAI. And we can deploy on your infrastructure — air-gapped."

### The Right-Sized Intelligence Pitch
> "For voice conversations you don't need 200 billion parameters. You need a fast, specialized model that reasons well within your domain. That's Electron."

### The Safety Pitch
> "Prompt injection protection and NSFW filtering built into the model. SOC2, HIPAA, ISO 27001 certified."

---

## Production Stats

**Platform-wide** numbers from smallest.ai (Feb 2026).

| Metric | Value | Scope |
|--------|-------|-------|
| Calls run monthly | 1B+ | Platform-wide (all LLMs) |
| Uptime (enterprise) | 99.99% | Platform SLA |
| Average latency | sub-400ms | Platform claim — needs precise definition |
| Cost reduction vs alternatives | ~50% | Marketing claim |
| Show-up rate improvement | 90% | Needs confirmation (relative vs absolute) |

---

## Research Foundation — Artificial Special Intelligence

(Jan 26, 2026 thesis)

1. **Scaling ≠ Intelligence** — memorization ≠ reasoning
2. **Decoupling intelligence and memory** — knowledge in external stores, not weights
3. **Specialization over generality** — small task-aligned models beat monolithic ones in constrained settings
4. **Separation of compute and memory** — reasoning stays focused, knowledge is external
5. **Asynchronous cognition** — predictive processing (future: Hydra)
6. **Continuous learning** — stateful adaptation over time

---

## FAQ (Internal)

**Q: Can customers use GPT-4o instead?** Yes — Atoms supports it. They lose latency/cost/on-prem advantage.

**Q: Standalone API?** Enterprise-only via Waves.

**Q: How does it handle domain knowledge?** Knowledge Bases (RAG). Reasoning and memory are separate by design.

**Q: Fine-tuning for specific customers?** Enterprise tier. Talk to Research.

**Q: Hydra vs Electron?** Hydra is next-gen S2S. Electron + Pulse + Lightning is the production stack today.

---

## Open Items for Pritish / Research

| # | Question | Priority |
|---|----------|----------|
| 1 | **Have Electron-v2 eval scores improved since Oct 2025?** If yes, provide updated numbers for Version A or confirm this version's claims are defensible. | **P0** |
| 2 | **Is the website "outperforms GPT-4.1" claim backed by any eval we can share?** Internal Oct 2025 data shows GPT-4.1 at 4.83 vs Electron at 4.45. If there's a newer eval or different benchmark, we need it. | **P0** |
| 3 | Confirm 45ms TTFT is still accurate for v2. | P0 |
| 4 | Concurrency improvement roadmap (currently ~5 per L40S). | P1 |
| 5 | Confirm architecture (still Qwen3-30B-A3B or changed for v2?) | P1 |

---

## Source References

- **Website:** https://smallest.ai
- **Atoms Docs:** https://atoms-docs.smallest.ai/deep-dive/llm-config/llm-config
- **Research Thesis:** https://smallest.ai/research/smallest-ai-thesis
- **Outline:** Engineering Handoff, Amazon Ads Questions, Security & Compliance, Eval Report, Latency Report
- **External:** Sierra Ventures investment write-up
