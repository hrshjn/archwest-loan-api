# Headout

## Company Overview
- **Company**: Headout
- **Industry**: Travel & Tourism / Experience Booking Platform
- **Website**: https://www.headout.com
- **Source**: Referral (Varun intro) + Early Access Google Form

## Key Contacts

| Name | Email | Role | Notes |
|------|-------|------|-------|
| Kewal Zanzmeria | kewal.zanzmeria@headout.com | Tech Lead | Primary technical contact, running evaluations |
| Rachit Watts | rachit@headout.com | Engineering | Set up Slack Connect, coordinating integration |
| Neil | - | Engineering | Mentioned in email thread |

## Use Case

**Interactive Audio Guide for Tourist Attractions**

Headout is building a voice-enabled audio guide for museum environments (e.g., Tower of London). Users speak to the guide and receive intelligent responses about exhibits and attractions.

**Technical Requirements:**
- Real-time streaming STT for low-latency interactions
- Strong performance in noisy museum environments (speech-in-noise)
- Multi-accent handling (international tourists)
- Integration with **LiveKit/agents** framework

## Products & Usage

| Product | Status | Details |
|---------|--------|---------|
| Pulse STT | Active Testing | Streaming API, 527 requests, ~25 mins total |
| TTS | Not Yet | Potential upsell - currently ASR only |
| Atoms | Not Yet | Could use full voice agent in future |

**Usage Account**: tech-dex@headout.com  
**Org ID**: 6792b8f478ee4c2f8bf5ba55  
**Testing Period**: Feb 2-7, 2026

## Volume & Scale (Feb 9, 2026 Update)

**Current Production:**
- 2 venues live
- ~50 DAUs (Daily Active Users)
- ~500 transcription requests/day

**Growth Plan (Next 3 Months):**
- Scale to **~50 venues worldwide**
- Product interventions to increase voice agent usage per session
- Latency reduction is key intervention → Pulse-STT fits this need

## Timeline & Status

| Date | Event |
|------|-------|
| Jan 29, 2026 | Email intro from Varun; got early access via Google form |
| Jan 30, 2026 | Sudarshan proposed Slack channel for faster comms |
| Feb 3, 2026 | Rachit accepted Slack invite; channel created |
| Feb 3, 2026 | Initial streaming API issues reported |
| Feb 4, 2026 | Timeout + ASR session failure issues investigated |
| Feb 6, 2026 | Smallest team pushed fixes (live) |
| Feb 7, 2026 | Kewal confirmed issues resolved |
| Feb 7, 2026 | **Positive evaluation results shared** - latency better, semantic understanding solid vs existing provider |
| Feb 7, 2026 | LiveKit STT plugin requested (blocker for experiment rollout) |
| Feb 9, 2026 | Volume update: 2 venues live, 50 DAUs, 500 req/day. Planning 50 venues in 3 months |
| **Week of Feb 10** | **STT pipeline advancing** — moving forward on Pulse-STT integration this week |

## Current Stage: **Pipeline Advancing (Week of Feb 10)**

### Evaluation Results (Feb 7, 2026)
> "I ran some evaluations on the streaming Pulse-STT endpoint using our test data, and the results are promising. Latency is noticeably better, and semantic understanding is generally solid as compared to our existing provider."

### Blocker
Headout's agent runs on **LiveKit/agents** framework. They need an official STT plugin to roll out an experiment.

**Reference**: TTS plugin already exists at `livekit-plugins-smallestai`  
**Ask**: Create matching STT plugin for LiveKit

## Next Steps

1. **Prioritize LiveKit STT Plugin** - This is the blocker for their experiment rollout
2. **Volume Discussion** - Sudarshan asked about current volumes (awaiting response)
3. **TTS Upsell** - Once STT is integrated, propose TTS for guide responses
4. **Full Voice Agent** - Long-term opportunity for Atoms-based interactive guide

## Sales Opportunity

- **Stage**: **Pipeline Advancing** — STT deal progressing week of Feb 10
- **Estimated Value**: TBD (depends on volume of tourists served; 50 venues in 3-month pipeline)
- **Timeline**: Advancing this week; LiveKit STT plugin remains key enabler
- **Competition**: Unnamed "existing provider" for STT

## Communication Channels

- **Slack**: #smallest-ai-headout (Slack Connect)
- **Email Thread**: "Intro to smallest.ai"

---
*Last Updated: Feb 9, 2026*
