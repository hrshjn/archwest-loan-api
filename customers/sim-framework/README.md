# Voice Agent Simulation Framework

Test, grade, and continuously improve Smallest AI's internal voice agents.

## Architecture

```
scenarios/          <- Test case definitions (JSON)
  infosec-agent.json
  sales-agent.json
  legal-agent.json    (added per phase)

transcripts/        <- Captured conversations (auto-saved)
  infosec-certs-happy-path-2026-03-03T...json
  
results/            <- Graded simulation results
  infosec-agent-2026-03-03T...json

run-simulation.mjs  <- Test runner (connects to live agents via chat API)
ingest-transcript.mjs <- Feed real call transcripts into new scenarios
```

## Quick Start

```bash
cd sim-framework

# Run all scenarios for an agent
node run-simulation.mjs scenarios/infosec-agent.json

# Run a specific scenario
node run-simulation.mjs scenarios/sales-agent.json --scenario sales-bfsi-collections-happy

# Custom response timeout (default 12s)
node run-simulation.mjs scenarios/infosec-agent.json --timeout 15000
```

## How It Works

1. **Scenario files** define test conversations: user messages, expected agent behaviors (regex patterns)
2. **Runner** creates a real chat session with the agent via Atoms `/conversation/chat` API
3. Sends messages over LiveKit data channel, captures agent responses
4. **Grader** checks each response against expected behavior patterns
5. Results saved as JSON with full transcript + pass/fail for each check

## The Feedback Loop

```
Build Agent → Run Simulations → Deploy
                  ↑                  ↓
            Generate new        Collect real
            scenarios from      call transcripts
                  ↑                  ↓
            Analyze gaps ← ← ← Feed transcripts
```

1. **After each real call:** Pull transcript from Atoms call logs
2. **Ingest:** `node ingest-transcript.mjs <call-id>` extracts the conversation and creates a new scenario
3. **Analyze:** Compare real caller questions vs. what our scenarios test — find gaps
4. **Update KB:** If the agent escalated or gave a weak answer, update the prompt's knowledge base
5. **Re-simulate:** Run updated scenarios to verify the fix

## Adding a New Agent

1. Create `scenarios/<agent-name>.json` following the schema:
```json
{
  "agentId": "<atoms-agent-id>",
  "agentName": "Human-readable name",
  "scenarios": [
    {
      "id": "unique-scenario-id",
      "name": "What this tests",
      "persona": "Who the caller is pretending to be",
      "messages": ["User message 1", "User message 2"],
      "expectedBehaviors": [
        { "check": "check_name", "pattern": "regex pattern", "required": true }
      ]
    }
  ]
}
```

2. Run: `node run-simulation.mjs scenarios/<agent-name>.json`
3. Review results in `results/`

## Environment

- Requires: Node.js 18+, `@livekit/rtc-node`
- API key: Set `ATOMS_API_KEY` env var or uses default
- Network: Needs access to `api.smallest.ai` and LiveKit servers
