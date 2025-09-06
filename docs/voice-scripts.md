# Voice Agent Scripts

Short, human, and demo-safe phrasing. Use fields from `/v1/sizer/fixflip/quote`.

## Variables (from API)
- finalNoteAmount → ${loan}
- upbAtClose → ${upb}
- holdback → ${holdback}
- rateLo/rateHi → ${rateLoPct}-${rateHiPct}
- termMonths → ${term}
- outcome → eligible | ineligible | recontact
- reason → one of: state_not_enabled | low_fico | experience_below_min | sizing_outside_row_range

Format helpers:
- Money: round to nearest $1k (e.g., 1,010,000 → $1.01M; 935,000 → $935k)
- Rates: percent with one decimal (0.089 → 8.9%)

---

## 1) Eligible (default)
“Based on your details, you’re eligible for a provisional loan of about ${loanPretty}, with ${upbPretty} advanced at closing and ${holdbackPretty} reserved for rehab. Your estimated rate range is ${rateLoPctPretty} to ${rateHiPctPretty}, over ${term} months. Shall I connect you with a specialist to confirm next steps?”

Optional add-ons:
- “This is an indicative estimate and subject to underwriting and final approval.”
- “We can send a summary to your email or text.”

---

## 2) Recontact (low FICO / policy hold)
“I’m not able to qualify this today. If your credit improves, we may be able to approve you. I can set a reminder to follow up in a few months. What’s the best month to reconnect?”

If `reason = experience_below_min`:
- “We typically look for more recent experience. Once you have a bit more track record, we can revisit this.”

---

## 3) Ineligible (state not enabled)
“Currently, we’re not lending in your property’s state. If your next project is in a state we cover, I can help you get sized on the call.”

---

## 4) Ineligible (sizing outside row range)
“Given your budget and property details, the loan amount falls outside our supported range for this program. If you have flexibility on budget or timeline, we can revisit options.”

---

## 5) Need More Info (missing fields)
“I just need a couple details to size this accurately: purchase price, rehab budget, and the after‑repair value. Let’s start with the estimated after‑repair value.”

---

## 6) Compliance Footer (optional)
“This is an indicative estimate. Not a commitment to lend. All loans subject to underwriting, terms, and market conditions.”

---

## Example Data Binding (pseudo)
```js
const dollars = n => n >= 1_000_000 ? `$${(n/1_000_000).toFixed(2)}M` : `$${Math.round(n/1000)}k`;
const pct = n => `${(n*100).toFixed(1)}%`;

say(
  `Based on your details, you’re eligible for a provisional loan of about ${dollars(data.finalNoteAmount)}, ` +
  `with ${dollars(data.upbAtClose)} advanced at closing and ${dollars(data.holdback)} reserved for rehab. ` +
  `Your estimated rate range is ${pct(data.rateLo)} to ${pct(data.rateHi)}, over ${data.termMonths} months.`
);
```
