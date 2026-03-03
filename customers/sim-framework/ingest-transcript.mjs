#!/usr/bin/env node
/**
 * Transcript Ingestion — Feed real call transcripts into the simulation framework.
 * 
 * Pulls a call transcript from Atoms API, extracts the conversation,
 * and generates a draft scenario file for review and inclusion.
 * 
 * Usage:
 *   node ingest-transcript.mjs <call-id> [--agent <agent-name>]
 *   node ingest-transcript.mjs --recent <agent-id> [--limit 5]
 * 
 * Examples:
 *   node ingest-transcript.mjs CALL-123456
 *   node ingest-transcript.mjs --recent 69a730c36cd1d52771328761 --limit 3
 */

import https from "https";
import fs from "fs";
import path from "path";

const API_KEY = process.env.ATOMS_API_KEY || "sk_1af9e3a09213dd0deee2b196f4708bc9";
const BASE = "https://api.smallest.ai/atoms/v1";

function apiRequest(apiPath) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${BASE}/${apiPath}`);
    const req = https.request({
      hostname: url.hostname, port: 443, path: url.pathname + url.search, method: "GET",
      headers: { Authorization: `Bearer ${API_KEY}` },
    }, (res) => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => { try { resolve(JSON.parse(d)); } catch { resolve({ raw: d }); } });
    });
    req.on("error", reject);
    req.end();
  });
}

function extractConversation(callLog) {
  const transcript = callLog.callTranscript || [];
  const messages = [];

  for (const entry of transcript) {
    if (entry.role === "user" && entry.content) {
      messages.push({ role: "user", text: entry.content });
    } else if (entry.role === "assistant" && entry.content) {
      messages.push({ role: "agent", text: entry.content });
    }
  }
  return messages;
}

function generateScenarioFromTranscript(callLog, conversation) {
  const userMessages = conversation.filter(m => m.role === "user").map(m => m.text);
  const agentMessages = conversation.filter(m => m.role === "agent").map(m => m.text);

  const callId = callLog.callId || "unknown";
  const agentId = callLog.agent?._id || callLog.agent || "unknown";
  const duration = callLog.callDuration || 0;
  const status = callLog.callStatus || "unknown";

  return {
    _meta: {
      sourceCallId: callId,
      sourceAgentId: agentId,
      callDuration: duration,
      callStatus: status,
      ingestedAt: new Date().toISOString(),
      note: "Auto-generated from real call. Review and add expectedBehaviors before using.",
    },
    id: `real-call-${callId.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`,
    name: `Real call ${callId} (${duration}s, ${status})`,
    persona: "Real caller — review transcript to characterize",
    messages: userMessages,
    expectedBehaviors: [
      {
        check: "review_needed",
        description: "Add expected behaviors based on what this call reveals about agent performance",
        required: false,
      },
    ],
    _fullTranscript: conversation,
    _agentResponses: agentMessages,
  };
}

async function ingestCall(callId) {
  console.log(`Fetching call: ${callId}`);

  const result = await apiRequest(`conversation?callId=${callId}`);
  if (!result.status || !result.data) {
    console.error("Failed to fetch call:", result);
    return null;
  }

  const callLog = Array.isArray(result.data) ? result.data[0] : result.data;
  const conversation = extractConversation(callLog);

  console.log(`  Duration: ${callLog.callDuration}s, Status: ${callLog.callStatus}`);
  console.log(`  Messages: ${conversation.length} (${conversation.filter(m => m.role === "user").length} user, ${conversation.filter(m => m.role === "agent").length} agent)`);

  const scenario = generateScenarioFromTranscript(callLog, conversation);

  const filename = `transcripts/real-${callId.replace(/[^a-zA-Z0-9]/g, "-")}.json`;
  fs.writeFileSync(filename, JSON.stringify(scenario, null, 2));
  console.log(`  Saved: ${filename}`);
  console.log(`  → Review and add expectedBehaviors, then move to scenarios/ folder\n`);

  return scenario;
}

async function ingestRecent(agentId, limit = 5) {
  console.log(`Fetching last ${limit} calls for agent ${agentId}...\n`);

  const result = await apiRequest(`conversation?agentId=${agentId}&limit=${limit}&sortBy=createdAt&sortOrder=desc`);
  if (!result.status || !result.data) {
    console.error("Failed to fetch calls:", result);
    return;
  }

  const calls = Array.isArray(result.data) ? result.data : [result.data];
  console.log(`Found ${calls.length} calls\n`);

  for (const call of calls) {
    const callId = call.callId || call._id;
    await ingestCall(callId);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--recent")) {
    const agentId = args[args.indexOf("--recent") + 1];
    const limit = parseInt(args[args.indexOf("--limit") + 1] || "5");
    await ingestRecent(agentId, limit);
  } else if (args[0]) {
    await ingestCall(args[0]);
  } else {
    console.error("Usage: node ingest-transcript.mjs <call-id>");
    console.error("       node ingest-transcript.mjs --recent <agent-id> [--limit 5]");
    process.exit(1);
  }
}

main().catch(console.error);
