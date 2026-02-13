# Cisco WebEx - Client Context

**Last Updated:** 2026-02-12
**Deal Owner:** Apoorv Sood (Business), Harsh (Technical/Partnerships)
**Stage:** **ACTIVE - Integration Build Phase (Onboarding Complete)**
**Priority:** 🔥🔥 **VERY HIGH - Connector Build + App Hub Submission in Progress**

---

## ⚡ Current Status (as of 2026-02-12)

> **What's happening right now:** Onboarding deep dive with Soundarya (Cisco BYOVA PM) completed. Full architecture walkthrough done — Universal Harness, BYODS authentication (JWT-based, Cisco-generated), session events, billing model, and App Hub submission process all clarified. Sandbox needs SKU enablement (send Org ID to Soundarya). Kawaldeep connecting with Vishal tomorrow to start hands-on connector work.
> **Blocking:** Sandbox Org ID needs to be sent to Soundarya so she can enable the BYO Virtual Agent SKU. Without this, cannot test in sandbox.
> **Next action:** Kawaldeep + Vishal working session (Feb 13) to start connector implementation. Send sandbox Org ID to Soundarya ASAP.

### Status as of 2026-02-04
> Integration build phase starting. gRPC feasibility confirmed (~3 weeks to build). Sandbox access requested, waiting on provisioning. Meeting with Soundarya (Cisco Engineering) scheduled for Mon/Tue next week.

---

## Company Overview
- **Company:** Cisco Systems (WebEx Contact Center)
- **Industry:** Enterprise Communications / CCaaS / UCaaS
- **Country:** Global (India focus for initial engagement)
- **Segment:** Contact Center AI & Infrastructure
- **Opportunity Type:** Technology Partnership + Channel
- **India Data Center:** Launching in ~2 months (deployed, in testing)

---

## Key Contacts

| Name | Role | Email | Location | Notes |
|------|------|-------|----------|-------|
| **Sarang Shah** | Sales Lead - Contact Center India | sarshah@cisco.com | Mumbai (One BKC) | Business decisions, customer introductions |
| **Purvi Bajaj** | System Engineering Lead - Contact Center (India & SAARC) | pubajaj@cisco.com | Mumbai (One BKC) | 25+ yrs in contact center, 10 yrs at Cisco. Covers West primarily but "does everything". Technical integration owner |
| **Vishal Goyal** | Solution Architect - South India | vishagoy@cisco.com | Delhi → Bangalore (moving in ~1 month) | Covers South region. Technical walkthroughs, sandbox support |
| **Soundarya Muthuvel** | Product Manager - BYOVA Connector / Universal Harness | - | US timezone (early riser, 5:30-6pm IST calls ok) | Owns the Bring Your Own Virtual Agent journey, connector certification, App Hub publishing, developer support, stress testing. Runs onboarding for new AI vendors. |
| **Siddhartha Gandhi** | Engineering (Cisco) | - | - | Attended Feb 12 onboarding call; role TBC |
| **Abhiram Kramadhati** | Director, AI Go-to-Market and Ops | akramadh@cisco.com | Melbourne | Strategic, initiated the connection |
| **Manoj Muthavarapu** | PM Leader, AI Agent Portfolio (Contact Center) | manojmut@cisco.com | Hyderabad | Product/technical questions |

**Executive Context:** Vinod (formerly CEO at Uniphore, now leads CX globally at Cisco) - Apoorv knows him from Cloud Cherry days via Anish (Capillary) connection.

**Office Proximity:** Cisco is in One BKC (Starbucks building), we are in WeWork BKC Next - literally across the street. O Pedro is the agreed meeting spot.

---

## How We Connected

### Introduction Path
1. **Pranav Pai (3one4 Capital)** introduced Abhiram to Smallest team
2. Abhiram had been following Smallest.ai and noticed the Contact Center focus in recent announcements
3. Reached out to explore partnership possibilities
4. **Jan 30, 2026:** Initial meeting (Apoorv, Abhiram, Manoj) - Discovery
5. **Feb 3, 2026:** Follow-up with India sales team (Apoorv, Harsh, Sarang, Purvi) - **Joint customers identified**
6. **Feb 4, 2026:** Technical deep dive (Harsh, Maharshi, Kawal, Purvi, Vishal) - **Architecture confirmed, gRPC requirement**
7. **Feb 12, 2026:** Onboarding deep dive (Harsh, Kawaldeep, Soundarya, Purvi, Vishal) - **Full BYOVA walkthrough, auth/billing/App Hub process clarified**

---

## Why Cisco Needs Us (Critical Intel)

### The Problem with Cisco's Internal AI
From Sarang (Feb 3 call):
> "While we are ready as an organization with all the languages, **none of us in the GTM team for India are very confident about the OEM meeting the local price points**. OEM being ready for on-premise deployment."

### What Their Internal AI Can't Do
1. **Price:** Too expensive for India market
2. **On-Prem:** "I will only do cloud, I will not do on premise" - but 40,000 agents are still on-prem
3. **Dialects:** "Cisco will simply publish India as a language with one accent" - no Bihar Hindi vs UP Hindi
4. **Customization:** No soft voice vs stern voice for different use cases

### What They Want From Us
1. **India price points** that actually win deals
2. **On-prem deployment** for large existing customers
3. **Dialect-specific models** (not just language, but regional accents)
4. **Use-case customization** (soft voice for early collections, stern for final calls)
5. **Data dictionary** support (Infi for Infosys, PNB for Punjab National Bank)

---

## Cisco's Contact Center Business (India)

### Scale & History
- **26 years** in contact center (started 1999)
- **40,000 on-prem agents** across top 20 customers
- Focus: "Elephant hunting" - large deployments (5,000-10,000+ seats)

### Major Customers
| Customer | Size | Notes |
|----------|------|-------|
| **IDFC First Bank** | 6,000 agents | 8-9 years relationship, Jarvis AI project |
| **Bajaj Finance** | 6,500-7,000 agents | Copilot bots, 3-4M bot calls/day |
| **Airtel India** | 20,000 ports, 7,000-8,000 agents | Moved from Avaya (was Avaya's largest) |
| AU Finance | Mid-size | - |
| Ujivan | Mid-size | - |

### Cloud Strategy Shift
- **India data center:** Launching in ~2 months (deployed, testing)
- **Sweet spot for cloud:** 50-300 seats (better ROI than on-prem)
- **Expanding partner ecosystem** for mid-market reach

### Target Verticals
1. **BFSI** - Core strength (Banking, Insurance, MF, Broking)
2. **BPOs** - International processes
3. **Healthcare KPOs** - US/Europe outsourcing to India
4. **E-commerce/Digital Native** - Price sensitive but high volume

### Market Size
- Analyst view: $120M/year (excluding AI)
- Ground-up view: $40-50M/year
- AI is additional TAM

---

## Immediate Joint Opportunities (Action Required)

### Priority 1: IDFC First Bank
| Field | Details |
|-------|---------|
| **Type** | On-prem |
| **Volume** | 6 lakh (600K) bot calls/month |
| **Project** | "Jarvis" - AI transformation |
| **Current Stack** | 11Labs (TTS) + others (STT) |
| **Status** | Looking to replace with India-first, cost-effective solution |
| **Cisco Relationship** | 8-9 years, Purvi has been advising on AI journey |
| **Our Position** | Already in Jarvis project discussions |

**Why This is Fast:**
- Purvi: "I have solution for IDFC for the past 10 years... the time is ripe"
- They're already unhappy with current AI stack
- On-prem requirement = our sweet spot
- Already know us from Jarvis project

### Priority 2: Make My Trip
| Field | Details |
|-------|---------|
| **Type** | Cloud |
| **Volume** | **10 lakh calls, 60 lakh minutes** on bot (per Satish, Feb 4) |
| **Situation** | Replacing Avaya (Avaya exited India) |
| **Issues** | Support problems, scalability issues |
| **Cisco Relationship** | Active deal - Purvi was on call with Satish same day as our tech deep dive |
| **Our Connection** | Tim Guleri (Sierra, our investor) is on MMT board |
| **Tech Preference** | Initially wanted SIP → Now explicitly asking for gRPC |

**Why This Matters:**
- Satish Mani (MMT) actively engaged - Purvi spoke with him Feb 4
- Cloud deployment = faster integration
- **Massive volume** = significant revenue
- They specifically want gRPC (aligns with Cisco's preference)

**MMT Technical Evolution:**
> "Initially they started off with saying we'll do SIP and now they are also coming back and realizing that SIP's probably not such a smart thing to do. So they explicitly called out saying gRPC." - Purvi

### Priority 3: TBD
- Sarang to share after checking their AI strategy
- Will be revealed in next meeting

---

## Technical Integration Path

### Universal Harness Architecture (BYOVA)
*Architecture diagram saved: `/Users/harsh/.cursor/projects/Users-harsh-smallest-customers/assets/Screenshot_2026-02-04_at_2.15.10_PM-c2937a59-c384-42dd-9f8e-1aa2fc82bd04.png`*

**Three-Layer Architecture:**
```
┌─────────────────────────────────────┐
│  AI Stack (Smallest)                │  ← We are here
│  - TTS, STT, SLM                    │
│  - Receives gRPC stream             │
│  - Returns processed audio          │
└──────────────┬──────────────────────┘
               │ gRPC Stream (bidirectional)
┌──────────────▼──────────────────────┐
│  Orchestrator (Middleware)          │
│  - Auth Connector (OAuth tokens)    │
│  - AI Connector (trusted handshake) │
│  - Flow Designer (routing logic)    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Contact Center Platform            │  ← Cisco WebEx CC
│  - Customer calls land here         │
│  - Raw audio captured               │
│  - Routing decisions made           │
└─────────────────────────────────────┘
```

### API Categories (Three Buckets)

| API Type | Purpose | Use Case |
|----------|---------|----------|
| **Client API** | Open gRPC stream, handle media | Streaming audio in/out |
| **Provider API** | Get/pass metadata from/to Cisco | Context, customer info |
| **Serving API** | Agent-side things, knowledge base | Handoff to human agent |

### Service App & Authentication

**Updated Feb 12 — Based on Soundarya's onboarding walkthrough:**

Our **Service App** is the identifying entity for Cisco and Cisco customers to know that media streams go to Smallest AI's cloud. It can be named anything (e.g., "Smallest AI Virtual Agent").

**Service App gives us:**
- Token generation
- Data source URL registration (our endpoint that Cisco hits)
- JWT per customer
- Self-service control over descriptions and marketing materials in Developer Portal

**Authentication: Bring Your Own Data Source (BYODS)**

Cisco does NOT use standard OAuth 2.0 / API keys for this integration. Instead:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BYODS Authentication Flow                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ONBOARDING:                                                          │
│  1. Customer admin authorizes our Service App                         │
│  2. We get notified: "Customer XYZ (orgId123) wants your app"         │
│  3. We register data source URL per customer                          │
│     (e.g., smallestai.com/us-east or smallestai.com/eu1)              │
│  4. Cisco generates JWT token, signs with private key, stores it      │
│  5. We receive the JWT for that specific customer                     │
│                                                                       │
│  CALL FLOW:                                                           │
│  4. Call comes into Universal Harness via VA Activity in Flow Designer │
│  5. UH makes API call to our data source URL + signed JWT             │
│  6. We decrypt JWS with Cisco Public Key                              │
│  7. Verify JWT matches what was given during registration              │
│  8. Establish bidirectional gRPC stream                               │
│                                                                       │
│  TOKEN MANAGEMENT:                                                    │
│  - JWT is UNIQUE per customer org (no cross-mingling of data)         │
│  - Must be refreshed at least every 24 hours (can be more frequent)   │
│  - Sample app shows cron job approach for token refresh               │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Why this design:** Cisco's security team had reservations about storing third-party tokens in their cloud. So they flip the model — Cisco generates and signs the token, we verify it. This way no untrusted tokens are stored in Cisco's infrastructure.

### Session Events (Updated Feb 12)

| Event | Direction | Purpose |
|-------|-----------|---------|
| **Session Start** (not "Call Start") | Cisco → Us | Call begins, start processing |
| **Call End** | Us → Cisco | AI handled the call, terminate |
| **Agent Transfer** | Us → Cisco | Escalate to human agent queue |
| **Custom Events** | Bidirectional | Customer-specific workflow events |

**On Agent Transfer, we MUST send back:**
- VA Summary / Transcript (bare minimum)
- Optional: Status, Sentiment
- This shows in the agent desktop so human agents don't repeat what the AI already handled
- For cloud: WebEx Agent Desktop widget
- For on-prem: Finesse Desktop widget (encouraged to build for both)

**Stream Details:**
- Bidirectional gRPC stream
- Multiplexed: events + media + digital transcripts
- Everything in the "green box" (our processing) is a black box to Cisco
- Can use real-time Voice-to-Voice APIs (like OpenAI) — Cisco doesn't care how we process internally
- **Silence timeout:** 10 seconds default (configurable: 2s, 5s, 10s per customer preference)

### Cisco Billing to Customers (Interoperability Fee)

**Important:** This is Cisco's charge to customers, NOT to us. Our pricing is independent.

| SKU | Description | Price | Notes |
|-----|-------------|-------|-------|
| **A-FLEX-BYO** | BYO Virtual Agent bundle | **$10 / bundle** | 1 bundle = 2,000 minutes. Monthly subscription. Customer commits to N bundles. |
| **A-FLEX-BYO-O** | Overage bundle | **$11.50 / bundle** | Once committed bundles exhausted, overage kicks in at this rate. |

**Metering rules:**
- Timer starts when call is forwarded to our virtual agent AND we start sending responses back
- Timer stops on terminating events (Call End / Agent Transfer) or errors
- If Cisco sends initial prompt and gets NO response from us, timer does NOT start
- Call duration after escalation to human agent is NOT counted

**Customer must buy this SKU** before they can use our app. Without it, Cisco will just route calls to IVR. Even in sandbox, this SKU needs to be manually enabled (Soundarya can do this for sandbox orgs).

**Our pricing is separate:** Purvi confirmed — "Whatever is your contract with the customer is your contract with them. This is independent." These are list prices; actual India pricing may differ.

### App Hub Submission Process (Updated Feb 12)

| Step | Details | Status |
|------|---------|--------|
| 1. Complete development | Follow developer portal checklist | In progress |
| 2. Submit form | App Hub submission in developer portal | Not started |
| 3. Contact from Cisco | Someone reaches out immediately | - |
| 4. Demo video | Recorded with Cisco representative (for compliance) | - |
| 5. Review | Cisco reviews; may request changes | - |
| 6. Publish | Listed on WebEx App Hub (Marketplace) | - |

**Timeline:** As little as 1 week if we respond quickly to feedback. "We take no more than one week to publish it." - Soundarya

**CRITICAL: Do NOT sell to customers before App Hub approval.** Even if you have a customer in mind, wait until published.

**Pre-submission checklist requirements:**
- Service app created correctly
- Token management working properly
- All mandatory events implemented (Session Start handling, Call End, Agent Transfer)
- SLA document published (SEV1/SEV2 response times, escalation process)
- Support scope clearly defined
- Demo video showing working integration

### Support Scope Split

| Area | Owner | Scope |
|------|-------|-------|
| **Cisco** | Cisco TAC | Telephony, AI Harness integration, fallback routing, auth tokens, connectivity with vendor endpoints, session management, error handling on platform side |
| **Smallest AI** | Our Support | ASR accuracy, TTS quality/latency, NLU/intent recognition, dialog management, SLA around latency & availability, error handling/logging/observability |

**SLA requirement:** Cisco needs us to publish an SLA document before App Hub listing. This is so they can refer customers to our support when issues are on our side. Initial triage will direct customers to contact us first for AI-related issues.

### Sandbox Details

- **SKU enablement needed:** Send sandbox Org ID to Soundarya to get BYO VA SKU enabled
- **Usage limit:** 10,000 minutes/month for testing
- **Production orgs:** Cannot enable SKU without actual subscription — customer must purchase

When we integrate, Cisco will:
1. **Create us as a "Service App"** within their platform (✅ Done)
2. **BYODS token exchange** for trusted connection — Cisco generates JWT, we verify (replaces earlier understanding of OAuth)
3. **Add us to a WebEx Teams space** with their engineering team for real-time support

### ⚠️ Critical: gRPC vs WebSocket

**Cisco STRONGLY prefers gRPC:**

| Protocol | Cisco's View | Notes |
|----------|--------------|-------|
| **gRPC** | ✅ **Preferred** | Better at scale, faster certification |
| **WebSocket** | ⚠️ Supported but discouraged | "Session management is a bitch" - Purvi |

**Why gRPC matters:**
- MMT volume: 10 lakh calls, 60 lakh minutes
- WebSocket troubleshooting "takes forever"
- Stress testing for certification is cleaner with gRPC
- Latency issues common with WebSocket at scale

**Protocol familiarity assumed:** Purvi mentioned "I don't have to explain what is gRPC, what is MRCP" - they expect us to know media/speech protocols.

**✅ gRPC FEASIBILITY: CONFIRMED** - See "Smallest Technical Fit Analysis" section for detailed implementation plan.

### Resources

| Resource | Link |
|----------|------|
| **Sandbox** | https://developer.webex-cx.com/sandbox |
| **Setup Video 1** | https://app.vidcast.io/share/057f07a2-87ab-4288-96f3-c5e42dee9263 |
| **Setup Video 2** | https://app.vidcast.io/share/396869f8-726e-43b8-8a10-b99016c781c3 |
| **Sample Code** | https://github.com/CiscoDevNet/webex-contact-center-provider-sample-code/tree/main/media-service-api/dialog-connector-simulator |
| **App Hub Submission** | https://developer.webex.com/create/docs/app-hub-submission-process |
| **BYOVA Docs** | https://developer.webex.com/webex-contact-center/docs/bring-your-own-virtual-agent |

### Path to Integration (Updated Feb 12)

| Step | Status | Timeline |
|------|--------|----------|
| 1. Request sandbox access | ✅ Done | - |
| 2. Sandbox provisioned | ✅ Done | - |
| 3. Service app created | ✅ Done | - |
| 4. Confirm gRPC feasibility | ✅ Done | - |
| 5. Onboarding with Soundarya (BYOVA PM) | ✅ Done (Feb 12) | - |
| 6. **Send Org ID to Soundarya for SKU enablement** | ⏳ **BLOCKING** | ASAP |
| 7. Kawaldeep + Vishal hands-on session | 📅 Feb 13 | Tomorrow |
| 8. **Build gRPC connector** (BYODS auth + events + media) | 🔄 Starting | 2-3 weeks |
| 9. Implement BYODS token management (JWT refresh) | ⏳ Pending | Part of build |
| 10. Implement mandatory events (Session Start, Call End, Agent Transfer) | ⏳ Pending | Part of build |
| 11. Build VA summary/transcript return | ⏳ Pending | Part of build |
| 12. **Publish SLA document** | ⏳ Pending | Before App Hub submission |
| 13. **Submit App Hub form** | ⏳ Pending | After build complete |
| 14. Demo video with Cisco rep | ⏳ Pending | ~1 week after submission |
| 15. App Hub review & publish | ⏳ Pending | ~1 week after demo |
| 16. First joint customer demo (IDFC/MMT) | ⏳ Pending | Late Feb / Early Mar |

### Certification Requirements
As part of certification, Soundarya's team will require:
- **Stress testing** at volume
- **Volume commitment** - what throughput can we guarantee?
- **Latency benchmarks**

Note: This is where WebSocket gets messy - gRPC certification is cleaner.

### Timeline Expectation

**Purvi (Feb 4):**
> "If you're good on gRPC, I don't see you taking more than 2-3 weeks... you work in this space, media forking is not new to you."

**Fast-track possible** because live customers (IDFC, MMT) are waiting.

---

## Smallest Technical Fit Analysis

### What We Currently Support

| Service | Protocol | Status | Notes |
|---------|----------|--------|-------|
| **Lightning STT** | WebSocket | ✅ Production | Real-time bidirectional streaming |
| **Waves TTS** | HTTP + WebSocket | ✅ Production | HTTP for batch, WebSocket for streaming |
| **Electron SLM** | HTTP (REST) | ✅ Production | Streaming via SSE/chunked response |
| **Atoms (Agent Platform)** | WebSocket | ✅ Production | Full-duplex voice agents via LiveKit |

**Current Architecture:**
```
┌─────────────────────────────────────────────────────────────────┐
│                    Smallest Current Stack                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Client ──── WebSocket ────► Lightning STT API (wss://...)      │
│         │                    - Bidirectional audio streaming     │
│         │                    - Real-time transcription           │
│         │                    - 8kHz/16kHz/48kHz supported        │
│         │                                                        │
│         ├─── HTTP/WS ──────► Waves TTS API                       │
│         │                    - POST for single synthesis         │
│         │                    - WebSocket for streaming chunks    │
│         │                                                        │
│         └─── HTTP ─────────► Electron SLM API                    │
│                              - Chat completions (OpenAI-compat)  │
│                              - Streaming via SSE                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### What Cisco WebEx Requires

**Cisco's Universal Harness expects:**

| Requirement | Our Current State | Gap |
|-------------|-------------------|-----|
| **gRPC bidirectional streaming** | ❌ Not supported | Need to build |
| **Proto definitions** | ❌ None | Need to define |
| **Client API (media streaming)** | ✅ Logic exists (WebSocket) | Wrap in gRPC |
| **Provider API (metadata)** | ✅ REST endpoints exist | Expose via gRPC |
| **Serving API (agent handoff)** | ✅ Atoms handles this | Expose via gRPC |
| **8kHz G.711 audio** | ✅ Supported | No change needed |

### gRPC Integration Work Required

#### 1. Protocol Buffer Definitions (~1 week)

```protobuf
// smallest_stt.proto
syntax = "proto3";
package smallest.stt.v1;

service SpeechToText {
  // Bidirectional streaming - matches Cisco's Client API pattern
  rpc StreamingRecognize(stream StreamingRecognizeRequest) 
      returns (stream StreamingRecognizeResponse);
}

message StreamingRecognizeRequest {
  oneof streaming_request {
    StreamingRecognitionConfig config = 1;
    bytes audio_content = 2;  // Raw PCM audio chunks
  }
}

message StreamingRecognizeResponse {
  StreamingRecognitionResult result = 1;
  string error = 2;
}

message StreamingRecognitionResult {
  string transcript = 1;
  float confidence = 2;
  bool is_final = 3;
  int64 start_time_ms = 4;
  int64 end_time_ms = 5;
}
```

```protobuf
// smallest_tts.proto
syntax = "proto3";
package smallest.tts.v1;

service TextToSpeech {
  // Server streaming - text in, audio chunks out
  rpc Synthesize(SynthesizeRequest) returns (stream SynthesizeResponse);
  
  // Bidirectional for real-time (sentence by sentence)
  rpc StreamingSynthesize(stream SynthesizeRequest) 
      returns (stream SynthesizeResponse);
}

message SynthesizeRequest {
  string text = 1;
  string voice_id = 2;
  int32 sample_rate = 3;  // 8000 for telephony
  float speed = 4;
}

message SynthesizeResponse {
  bytes audio_content = 1;  // PCM audio chunk
  bool is_final = 2;
}
```

#### 2. gRPC Server Implementation (~1-2 weeks)

**Option A: Python with grpcio (Recommended for speed)**
```python
# Wraps existing WebSocket logic in gRPC interface
class SmallestSTTServicer(stt_pb2_grpc.SpeechToTextServicer):
    async def StreamingRecognize(self, request_iterator, context):
        # Reuse existing Lightning STT client internally
        async with LightningSTTClient() as stt:
            async for request in request_iterator:
                if request.HasField('config'):
                    await stt.configure(request.config)
                elif request.audio_content:
                    result = await stt.process_audio(request.audio_content)
                    if result:
                        yield StreamingRecognizeResponse(result=result)
```

**Option B: Go with grpc-go (Better for Cisco ecosystem alignment)**
```go
// Cisco uses Go extensively - may ease integration
func (s *STTServer) StreamingRecognize(stream pb.SpeechToText_StreamingRecognizeServer) error {
    // Connect to Smallest WebSocket API internally
    wsClient := smallest.NewSTTClient()
    
    for {
        req, err := stream.Recv()
        if err == io.EOF {
            return nil
        }
        // Forward to WebSocket, return via gRPC
        result := wsClient.ProcessAudio(req.AudioContent)
        stream.Send(&pb.StreamingRecognizeResponse{Result: result})
    }
}
```

#### 3. Infrastructure (~1 week)

| Component | Work Required |
|-----------|---------------|
| **Load Balancer** | Configure for HTTP/2 (gRPC transport) |
| **TLS** | Ensure proper cert chain for gRPC |
| **Health Checks** | Add gRPC health check protocol |
| **Monitoring** | Add gRPC interceptors for metrics |
| **Rate Limiting** | Implement per-stream limits |

#### 4. Cisco-Specific Connector (~1 week)

```
┌─────────────────────────────────────────────────────────────────┐
│              Smallest ↔ Cisco gRPC Connector                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Cisco WebEx CC                     Smallest Services            │
│  ┌──────────────┐                   ┌──────────────┐            │
│  │ Universal    │  gRPC             │ Connector    │            │
│  │ Harness      │◄────────────────► │ Service      │            │
│  │              │  (bidirectional)  │              │            │
│  └──────────────┘                   └──────┬───────┘            │
│                                            │                     │
│                              ┌─────────────┼─────────────┐      │
│                              │             │             │      │
│                              ▼             ▼             ▼      │
│                        ┌─────────┐   ┌─────────┐   ┌─────────┐ │
│                        │Lightning│   │ Waves   │   │Electron │ │
│                        │  STT    │   │  TTS    │   │  SLM    │ │
│                        │  (WS)   │   │(HTTP/WS)│   │ (HTTP)  │ │
│                        └─────────┘   └─────────┘   └─────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### MRCP Consideration

**Status: NOT REQUIRED for Cisco WebEx integration**

| Protocol | Cisco WebEx CC | Notes |
|----------|----------------|-------|
| **gRPC** | ✅ Required | Universal Harness uses gRPC |
| **WebSocket** | ⚠️ Supported | Discouraged for scale |
| **MRCP** | ❌ Not used | Legacy IVR protocol, not in WebEx CC stack |

**When MRCP Would Be Relevant:**
- Direct integration with on-prem PBX systems (Avaya, Genesys legacy)
- Cisco CUCM (Unified Communications Manager) - older deployments
- FreeSWITCH/Asterisk-based IVR systems

**For Cisco WebEx CC specifically:** MRCP is NOT needed. WebEx CC uses the modern Universal Harness API (gRPC-based), which is cloud-native and doesn't rely on MRCP.

However, for **IDFC's on-prem deployment**, MRCP might be relevant if they're using legacy IVR infrastructure. We should clarify with Purvi what their on-prem stack looks like.

### Summary: Work Breakdown

| Task | Effort | Owner | Dependency |
|------|--------|-------|------------|
| Proto definitions (STT, TTS, SLM) | 3-5 days | Maharshi | None |
| gRPC server (Python) | 5-7 days | Maharshi/Kawal | Protos |
| Infrastructure (LB, TLS, health) | 3-5 days | Infra team | Server |
| Cisco connector integration | 5-7 days | Kawal | gRPC server |
| Testing with sandbox | 3-5 days | Kawal | Connector |
| **Total** | **~3 weeks** | | |

### Recommendation

**Phase 1 (Cisco WebEx - NOW):**
- Build gRPC wrapper around existing WebSocket/HTTP APIs
- Focus on STT + TTS first (what Cisco needs immediately)
- Use Python for speed, Go later if needed

**Phase 2 (On-Prem customers like IDFC - Later):**
- IF they have MRCP-based IVR: Build UniMRCP plugin
- More likely: They'll use gRPC too via Cisco's on-prem WebEx CC

**Decision Point:** Confirm with Purvi/Vishal:
1. Is IDFC's on-prem using Cisco WebEx CC (gRPC) or legacy CUCM (potentially MRCP)?
2. What protocol does their "Jarvis" system use for AI integration?

---

## Partnership Models (Cisco Framework)

### Option 1: Technology Partner
- Integration understanding at tech level
- Commercials between Smallest and end customer directly
- Cisco provides platform, we provide AI

### Option 2: Solution+ Partner (Target State)
- Our product becomes **SKU within Cisco**
- Sold along with Cisco products
- Revenue share model
- Global reach without sales effort
- Cisco handles billing, collections

**Sarang's Quote:**
> "After a few successes, partners move from technology partners to Solution+ mode because that gives them access and global reach. They don't have to worry about collection of payments."

---

## What We Presented (Feb 3 Call)

### Key Points Apoorv Covered
1. **Foundational model company** - TTS, STT, SLM (Electron), Speech-to-Speech coming EOY
2. **SLM philosophy** - Smaller models = less hallucination, lower latency
3. **On-prem ready** - Docker deployment, minutes to deploy
4. **GPU optimization** - TTS: 20 concurrent/GPU, STT: 100 concurrent/GPU
5. **Customization** - Data dictionaries, dialect training, voice personas
6. **Compliance first** - ISO, SOC2, GDPR already in place

### References Shared
| Customer | Use Case | Status |
|----------|----------|--------|
| **Paytm (Boombox)** | Voice AI for collections, loans, UPI | Live, scaling |
| **Ring Central** | Keyword detection, transcription, analytics | NASDAQ listed, deployed |
| **IDFC First Bank** | Replacing 11Labs in Jarvis project | In progress |
| **ServiceNow** | Voice agents (US) | Partnership discussions |
| **Five9** | TTS replacement for ElevenLabs | Evaluating |
| **Vodafone** | Large POC opening | In progress |
| **SBI Mutual Fund** | Transcription for SEBI compliance | Live |

### Partners Mentioned
- AWS (listed on APN, billing integration)
- EY (Cosmos platform powered by us)
- PwC (consulting partner)
- ServiceNow (potential acquisition interest earlier)

---

## Competitive Landscape

### Cisco's Current AI Stack
- 8 Indian languages ready
- But: "None of us in GTM are confident about OEM meeting local price points"
- On-prem: "I will only do cloud" - limitation

### Vendors in Ecosystem
| Vendor | Used By | Our Position |
|--------|---------|--------------|
| **11Labs** | IDFC (TTS) | Replacing - cost + quality |
| **Core AI** | Various | They use Deepgram + 11Labs - we can replace |
| **Uniphore** | Cisco partner | Vinod connection, but we're more specialized |
| **Deepgram** | Various (STT) | We're competitive on accuracy + cost |

### Our Advantages (Per This Call)
1. **India price points** - Can actually win deals
2. **Dialect models** - Bihar Hindi ≠ UP Hindi ≠ Mumbai Hindi
3. **On-prem** - Docker, minutes to deploy
4. **Customization** - Soft voice, stern voice, data dictionaries
5. **Speed** - "If you want to run this fast, we will run 10x faster"

---

## Next Steps & Action Items

### Completed (Prior Weeks)
- [x] WhatsApp group created (Apoorv, Harsh, Sarang, Purvi)
- [x] **Technical deep dive with Purvi/Vishal** - Architecture walkthrough complete (Feb 4)
- [x] Sandbox access requested & provisioned
- [x] ✅ **Maharshi: Confirm gRPC feasibility** - **CONFIRMED**
- [x] Service app created in sandbox
- [x] ✅ **Meeting with Soundarya (Cisco Engineering)** - Completed Feb 12
- [x] NDA no longer required — APIs are GA

### Immediate (This Week - Feb 12-14)
- [ ] **Send sandbox Org ID to Soundarya** — She needs it to enable BYO VA SKU in our sandbox (P0)
- [ ] **Kawaldeep + Vishal working session** — Feb 13, hands-on connector setup (P0)
- [ ] Review developer portal checklist for mandatory events implementation
- [ ] Study sample app for BYODS token management (cron job reference)
- [ ] Start GRPC connector build — implement Session Start, Call End, Agent Transfer events

### This Month (Feb 2026)
- [ ] Complete gRPC connector build (bidirectional streaming, BYODS auth, event handling)
- [ ] Implement token refresh mechanism (24-hour JWT rotation)
- [ ] Build VA summary/transcript return on Agent Transfer
- [ ] **Publish SLA document** — Required before App Hub submission (SEV1/SEV2 response times)
- [ ] **Submit App Hub form** — Once dev complete
- [ ] Demo video recorded with Cisco representative
- [ ] App Hub review and publish (~1 week turnaround)
- [ ] **Joint customer demo** — Purvi wants to demo to IDFC and/or MMT in next few weeks

### Q1 2026 Target
- [ ] Published on WebEx App Hub
- [ ] Live with MMT or IDFC
- [ ] First revenue transaction
- [ ] Move from Technology Partner → Solution+ Partner

---

## Track Ownership

| Track | Owner (Smallest) | Owner (Cisco) | Focus |
|-------|------------------|---------------|-------|
| **Business** | Apoorv | Sarang | Customers, commercial, GTM |
| **Technical Integration** | Harsh | Purvi, Vishal | Architecture, sandbox, connector |
| **Engineering Build** | Maharshi, Kawaldeep | Soundarya (US) | gRPC connector, certification |
| **Strategic** | Apoorv | Abhiram | Partnership structure, Solution+ path |

---

## Meeting History

### Meeting 1: January 30, 2026 (Discovery)
**Attendees:** Apoorv (Smallest) | Abhiram, Manoj (Cisco)

**Purpose:** Introduction, understand fit

**Outcome:** 
- Positive reception to SLM approach
- Abhiram introduced Apoorv to Sarang (India sales)
- Multiple partnership models discussed

---

### Meeting 2: February 3, 2026 (Business Development)
**Attendees:** Apoorv, Harsh (Smallest) | Sarang, Purvi (Cisco)

**Purpose:** Identify joint customers, understand integration path

**Key Outcomes:**
1. **Three joint customers identified:** IDFC, Make My Trip, +1 TBD
2. **Technical path clear:** Universal Harness API, ~2 weeks to certify
3. **Cisco's pain exposed:** Internal AI won't win in India (price, on-prem, dialects)
4. **Tracks established:** Business (Apoorv-Sarang), Technical (Harsh-Purvi)
5. **In-person meeting:** Friday at O Pedro, BKC

**Critical Quote from Sarang:**
> "Even if I discount it by 90%, I'm not going to meet the India price points. There is a reason why we are looking at an alternate to Cisco's AI. We have our own AI. It is not going to get us there."

---

### Meeting 3: February 4, 2026 (Technical Deep Dive)
**Attendees:** Harsh, Maharshi, Kawaldeep (Smallest) | Purvi, Vishal Goyal (Cisco)

**Purpose:** Architecture walkthrough, understand integration requirements

**Key Outcomes:**
1. **Architecture explained:** Three-layer model (Platform → Orchestrator → AI Stack)
2. **gRPC strongly preferred** over WebSocket for scale and certification
3. **Three API buckets:** Client API (streaming), Provider API (metadata), Serving API (agent handoff)
4. **MMT update:** Purvi spoke with Satish same day - 10 lakh calls, 60 lakh minutes volume
5. **Timeline:** 2-3 weeks for connector build if gRPC works
6. **Next intro:** Soundarya (US Engineering) for certification process

**Critical Quote from Purvi:**
> "WebSocket session management is a bitch... when we're talking 10 lakh calls, 60 lakh minutes, we don't want to go down that path. We'd prefer gRPC."

**Blocker Identified:**
- ~~Maharshi needs to confirm gRPC streaming feasibility for Smallest~~ ✅ **RESOLVED**
- **Analysis:** gRPC is feasible by wrapping existing WebSocket/HTTP APIs in a gRPC service layer
- **Effort:** ~3 weeks (proto definitions → gRPC server → Cisco connector → testing)
- **MRCP:** Not needed for WebEx CC; only relevant if IDFC uses legacy on-prem IVR

**Longer-term Vision (Purvi mentioned):**
> "What would it take for us to host the SLM as a part of my model itself and then just use my orchestration?"
- Potential for deeper integration beyond connector - hosting Smallest models inside Cisco infrastructure

---

### Meeting 4: February 12, 2026 (Onboarding Deep Dive)
**Attendees:** Harsh, Kawaldeep (Smallest) | Soundarya Muthuvel (PM - BYOVA), Purvi Bajaj, Vishal Goyal, Siddhartha Gandhi (Cisco)

**Purpose:** Full onboarding walkthrough — architecture, authentication, billing, App Hub submission process, and support model

**Key Outcomes:**

1. **NDA no longer required** — APIs are GA (General Availability). This was a significant simplification from earlier process.

2. **Authentication model clarified — BYODS (Bring Your Own Data Source):**
   - NOT OAuth/API keys as initially understood
   - Cisco generates JWT, signs with private key, stores in their cloud
   - Per call: Cisco presents signed JWT → we decrypt with Cisco public key → verify → establish stream
   - JWT is unique per customer org, must refresh every 24 hours minimum
   - Sample app includes cron job reference implementation

3. **Session events updated:**
   - **Session Start** (renamed from "Call Start")
   - Call End and Agent Transfer events (mandatory)
   - Custom events supported for customer-specific workflows
   - Must send VA summary/transcript on Agent Transfer for human agent context

4. **Cisco billing to customers (interoperability fee):**
   - A-FLEX-BYO: $10/bundle (2,000 mins) — committed monthly
   - A-FLEX-BYO-O: $11.50/bundle — overage after committed bundles
   - Timer starts only when we start responding (not on initial prompt if no response)
   - **Our pricing is independent** — confirmed by Purvi

5. **App Hub submission process:**
   - Submit form → immediate contact → demo video with Cisco rep → review → publish
   - ~1 week turnaround if responsive
   - **Must NOT sell to customers before App Hub approval**
   - SLA document required before publishing

6. **Support scope defined:**
   - Cisco owns: telephony, Universal Harness, integration, fallback routing, auth
   - We own: ASR accuracy, TTS latency/quality, NLU, dialog management, SLA
   - Need to publish SLA document for SEV1/SEV2 escalation

7. **Sandbox enablement:**
   - Need to send sandbox Org ID to Soundarya for BYO VA SKU activation
   - 10,000 min/month testing limit
   - Production orgs require actual subscription

8. **On-prem compatibility:**
   - Same service app works for both cloud (WebEx CC) and on-prem (CCE)
   - Only onboarding steps differ on Cisco side

9. **Immediate next steps confirmed:**
   - Kawaldeep + Vishal working session tomorrow (Feb 13) to start connector work
   - Target: Demo to IDFC and MMT in next few weeks
   - Soundarya to send slide deck and additional resources

**Key Quotes:**

> **Soundarya on review timeline:** "It will take even as little as one week because all we need is a demo video... once he's given a thumbs up... we take no more than one week to publish it."

> **Soundarya on what's expected:** "All we're expecting is we'll be sending media and events and you have to send media events back to us."

> **Soundarya on black box:** "How this actually happens is a total black box to us. So if you're going to be using a real-time API like an OpenAI or Voice to Voice API, that's also something you can do."

> **Soundarya on silence timeout:** "If we do hear silence for about 10 seconds, then we will terminate this stream... that threshold can be changed as well."

> **Purvi on timing:** "If in the next few weeks, we can actually go together to somebody like IDFC and actually demonstrate this... the timing is right for us right now. And of course MakeMyTrip definitely on the cards."

> **Purvi on billing independence:** "This is not a part of [your pricing]. Whatever is your contract with them is your contract with them. This is independent."

---

## Key Quotes from Feb 3 Call

**On Why They Need Us (Sarang):**
> "I love the point when you said it's not about the language, it's about a dialect. It's about the way Bihari speaks Hindi and Punjabi may speak Hindi. I don't think Cisco will do all that. Cisco will simply publish India as a language with one accent."

**On Speed (Purvi):**
> "I've got this done for another partner in like two weeks time. So it's not a long process."

**On Partnership Value (Sarang):**
> "After a few successes, partners move from technology partners to Solution+ mode because that gives them access and global reach."

**On Our Approach (Apoorv):**
> "If you want to run this fast, we will run 10x faster."

---

## Personal Notes

### Relationship Building
- **Purvi:** 25+ years in contact center, 10 at Cisco. Doesn't use virtual backgrounds. Appreciates directness.
- **Sarang:** Practical, commercial-focused. Values transparency.
- **Office proximity:** O Pedro restaurant is literally midway between offices
- **Vinod (their boss):** Apoorv knows from Cloud Cherry days via Anish (Capillary)

### Communication Style
- WhatsApp group created for fast communication
- Direct, informal, no BS
- "We have to be transparent" - both sides value honesty
- In-person meeting preferred over calls

---

## Strategic Importance

### Why This is Now VERY HIGH Priority
1. **Explicit need:** "Our internal AI won't get us there" - they NEED us
2. **Named customers:** IDFC (600K calls/mo), MMT (high volume) - real revenue
3. **Fast path:** 2 weeks to certification, not months
4. **Office proximity:** Can meet weekly in person
5. **Technical champion:** Purvi is engaged and supportive
6. **Solution+ potential:** Can become Cisco SKU with global reach

### Revenue Potential
| Customer | Est. Volume | Est. MRR |
|----------|-------------|----------|
| IDFC First Bank | 600K bot calls/mo | $15-25K |
| Make My Trip | **10 lakh calls, 60 lakh mins/mo** | $30-50K |
| Third customer | TBD | TBD |
| **Total Initial** | - | **$45-75K** |

### Risk Factors
- NDA/Legal process may be slow (mitigate: start tech work in parallel)
  - Purvi's joke: "Maharshi will probably finish coding faster than our legal teams will agree on it"
- IDFC has existing relationships (mitigate: we're already in Jarvis)
- Enterprise sales cycles (mitigate: Cisco doing the selling)

---

## Source References
- **Email Thread:** Jan 19-30, 2026 (Pranav intro → Sarang intro)
- **Email Thread:** Feb 3, 2026 - "RE: Smallest <> Cisco | Tech Deep Dive" (Purvi sent resources)
- **Meeting 1:** Jan 30, 2026 (Apoorv, Abhiram, Manoj) - Discovery
- **Meeting 2:** Feb 3, 2026 (Apoorv, Harsh, Sarang, Purvi) - Business development
- **Meeting 3:** Feb 4, 2026 (Harsh, Maharshi, Kawal, Purvi, Vishal) - Technical deep dive
- **Meeting 4:** Feb 12, 2026 (Harsh, Kawaldeep, Soundarya, Purvi, Vishal, Siddhartha) - Onboarding deep dive
- **Slide deck images:** Saved in `/Users/harsh/.cursor/projects/Users-harsh-smallest-customers/assets/` (Universal Harness architecture, VA flow, Developer Experience, BYOVA Cloud/On-Prem, BYODS auth, pricing, support scope)
- **Next:** Kawaldeep + Vishal working session - Feb 13, 2026

---

**🎯 TARGET: gRPC connector build in 2-3 weeks → App Hub submission → live with IDFC/MMT by early March**
**💡 KEY ANGLE: "Cisco's AI won't win in India - we're the answer"**
**⚡ TIMING: Purvi wants joint demo to IDFC/MMT in next few weeks — "the timing is right"**
**✅ ONBOARDING: Complete** — Architecture, auth (BYODS/JWT), billing, App Hub process all clarified
**🔒 AUTH MODEL: BYODS** — Cisco generates JWT per customer, we verify. Refresh every 24hrs. NOT OAuth.
**💰 CISCO FEE TO CUSTOMERS: $10/bundle (2K mins) + $11.50 overage** — Our pricing is independent
**📋 BLOCKER: Send sandbox Org ID to Soundarya for SKU enablement**
**🤝 OWNERS: Harsh (technical with Purvi), Apoorv (business with Sarang), Kawaldeep (build with Vishal)**
**📍 ADVANTAGE: Offices across the street - weekly in-person possible**
