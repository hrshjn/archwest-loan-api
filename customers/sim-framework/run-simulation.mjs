#!/usr/bin/env node
/**
 * Voice Agent Simulation Runner
 * 
 * Runs scenario-based chat tests against live Atoms agents via /conversation/chat API.
 * Grades responses against expected behaviors. Outputs structured results.
 * 
 * Usage:
 *   node run-simulation.mjs <scenario-file> [--scenario <id>] [--timeout <ms>]
 * 
 * Example:
 *   node run-simulation.mjs scenarios/infosec-agent.json
 *   node run-simulation.mjs scenarios/sales-agent.json --scenario sales-bfsi-collections-happy
 */

import { Room, RoomEvent } from "@livekit/rtc-node";
import https from "https";
import fs from "fs";
import path from "path";

const API_KEY = process.env.ATOMS_API_KEY || "sk_1af9e3a09213dd0deee2b196f4708bc9";
const BASE = "https://api.smallest.ai/atoms/v1";
const RESPONSE_TIMEOUT = parseInt(process.argv.find((_, i, a) => a[i - 1] === "--timeout") || "12000");

function apiRequest(apiPath, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${BASE}/${apiPath}`);
    const req = https.request({
      hostname: url.hostname, port: 443, path: url.pathname, method,
      headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    }, (res) => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => { try { resolve(JSON.parse(d)); } catch { resolve({ raw: d }); } });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function gradeResponses(transcript, expectedBehaviors) {
  const agentMessages = transcript.filter(t => t.role === "agent").map(t => t.text);
  const allAgentText = agentMessages.join(" ");
  const results = [];

  for (const check of expectedBehaviors) {
    const result = { id: check.check, description: check.description || check.check, required: check.required };

    if (check.pattern) {
      const regex = new RegExp(check.pattern, "i");
      result.pass = regex.test(allAgentText);
      result.matchedIn = agentMessages.find(m => regex.test(m))?.substring(0, 120) || null;
    } else {
      result.pass = null;
      result.note = "Manual review needed — no regex pattern defined";
    }
    results.push(result);
  }

  const total = results.filter(r => r.pass !== null).length;
  const passed = results.filter(r => r.pass === true).length;
  const requiredFails = results.filter(r => r.required && r.pass === false);

  return { checks: results, total, passed, score: total > 0 ? (passed / total * 100).toFixed(0) : "N/A", requiredFails };
}

async function runScenario(agentId, scenario) {
  const transcript = [];
  let disconnected = false;

  console.log(`\n  --- ${scenario.name} (${scenario.id}) ---`);
  console.log(`  Persona: ${scenario.persona}\n`);

  const session = await apiRequest("conversation/chat", "POST", { agentId });
  if (!session.status) {
    console.error(`  FAIL: Could not create session: ${JSON.stringify(session)}`);
    return { scenario: scenario.id, error: "session_failed", transcript: [], grade: null };
  }

  const room = new Room();
  let waitResolve = null;

  room.on(RoomEvent.DataReceived, (payload) => {
    try {
      const data = JSON.parse(new TextDecoder().decode(payload));
      if (data.type === "transcript" && data.text) {
        console.log(`    AGENT: ${data.text}`);
        transcript.push({ role: "agent", text: data.text, ts: Date.now() });
        if (waitResolve) { waitResolve(); waitResolve = null; }
      }
    } catch { /* non-JSON event */ }
  });

  room.on(RoomEvent.Disconnected, () => { disconnected = true; });

  try {
    await room.connect(session.data.host, session.data.token);
    await sleep(4000);

    for (let i = 0; i < scenario.messages.length; i++) {
      if (disconnected) {
        console.log(`    [Session disconnected — stopping at message ${i + 1}]`);
        break;
      }

      const msg = scenario.messages[i];
      console.log(`    USER [${i + 1}/${scenario.messages.length}]: ${msg}`);
      transcript.push({ role: "user", text: msg, ts: Date.now() });

      const payload = new TextEncoder().encode(JSON.stringify({
        type: "transcript", text: msg, topic: "user_response", timestamp: Date.now(),
      }));
      await room.localParticipant.publishData(payload, { reliable: true });

      await new Promise(r => { waitResolve = r; setTimeout(r, RESPONSE_TIMEOUT); });
      await sleep(500);
    }

    await sleep(3000);
  } catch (e) {
    console.log(`    [Error: ${e.message}]`);
  } finally {
    try { await room.disconnect(); } catch { /* ignore */ }
  }

  const grade = gradeResponses(transcript, scenario.expectedBehaviors);
  
  console.log(`\n    Score: ${grade.passed}/${grade.total} (${grade.score}%)`);
  if (grade.requiredFails.length > 0) {
    console.log(`    REQUIRED FAILURES:`);
    grade.requiredFails.forEach(f => console.log(`      - ${f.id}: ${f.description}`));
  }

  return { scenario: scenario.id, name: scenario.name, transcript, grade, disconnected };
}

async function main() {
  const scenarioFile = process.argv[2];
  if (!scenarioFile) {
    console.error("Usage: node run-simulation.mjs <scenario-file.json> [--scenario <id>]");
    process.exit(1);
  }

  const filterScenario = process.argv.find((_, i, a) => a[i - 1] === "--scenario");
  const data = JSON.parse(fs.readFileSync(scenarioFile, "utf-8"));

  console.log(`\n${"=".repeat(60)}`);
  console.log(`SIMULATION: ${data.agentName}`);
  console.log(`Agent ID: ${data.agentId}`);
  console.log(`Scenarios: ${data.scenarios.length}`);
  console.log(`${"=".repeat(60)}`);

  const scenarios = filterScenario
    ? data.scenarios.filter(s => s.id === filterScenario)
    : data.scenarios;

  if (scenarios.length === 0) {
    console.error(`No scenarios matched filter: ${filterScenario}`);
    process.exit(1);
  }

  const allResults = [];

  for (const scenario of scenarios) {
    const result = await runScenario(data.agentId, scenario);
    allResults.push(result);
    await sleep(3000);
  }

  // Summary
  console.log(`\n${"=".repeat(60)}`);
  console.log("SIMULATION SUMMARY");
  console.log(`${"=".repeat(60)}\n`);

  let totalChecks = 0, totalPassed = 0, totalRequiredFails = 0;

  for (const r of allResults) {
    const status = r.error ? "ERROR" : r.grade.requiredFails.length === 0 ? "PASS" : "FAIL";
    const score = r.grade ? `${r.grade.passed}/${r.grade.total}` : "N/A";
    console.log(`  [${status}] ${r.name} — ${score}`);

    if (r.grade) {
      totalChecks += r.grade.total;
      totalPassed += r.grade.passed;
      totalRequiredFails += r.grade.requiredFails.length;
    }
  }

  console.log(`\n  Overall: ${totalPassed}/${totalChecks} checks passed, ${totalRequiredFails} required failures`);
  console.log(`  Score: ${totalChecks > 0 ? (totalPassed / totalChecks * 100).toFixed(0) : "N/A"}%\n`);

  // Save results
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const resultFile = path.join(path.dirname(scenarioFile), "..", "results", `${path.basename(scenarioFile, ".json")}-${timestamp}.json`);
  
  const output = {
    agent: { id: data.agentId, name: data.agentName },
    timestamp: new Date().toISOString(),
    summary: { totalChecks, totalPassed, totalRequiredFails, score: totalChecks > 0 ? (totalPassed / totalChecks * 100).toFixed(0) + "%" : "N/A" },
    scenarios: allResults.map(r => ({
      id: r.scenario,
      name: r.name,
      disconnected: r.disconnected,
      transcript: r.transcript,
      grade: r.grade,
    })),
  };

  fs.writeFileSync(resultFile, JSON.stringify(output, null, 2));
  console.log(`  Results saved: ${resultFile}\n`);

  // Save transcripts separately for feedback loop
  for (const r of allResults) {
    if (r.transcript.length > 0) {
      const txFile = path.join(path.dirname(scenarioFile), "..", "transcripts", `${r.scenario}-${timestamp}.json`);
      fs.writeFileSync(txFile, JSON.stringify({ scenario: r.scenario, agentId: data.agentId, transcript: r.transcript }, null, 2));
    }
  }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
