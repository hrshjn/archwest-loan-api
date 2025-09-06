# Archwest Loan Sizing API

Express service that implements Archwest Capital's Fix & Flip (FNF) loan sizing per the internal pricing PDF and sheets. Designed for forms, CRMs, and voice agents to return a provisional loan and indicative rate range in-call.

## Overview

Phase‑1 supports FNF with Borrower Levels A/B, state tiering, and loan amount tiers 1–4. The sizing flow is row‑driven from the pricing matrix.

## Run

```bash
npm start
# or
npm run dev
```

Server will listen on `http://localhost:3000`.

## Inputs (what callers must provide)

Required
- productKey: "FNF"
- data.loanPurpose: "purchase" | "refi"
- data.propertyState: 2‑letter code (state tier)
- data.purchasePrice (or current propertyValue for refi)
- data.rehabBudget
- data.afterRepairPropertyAmount (ARV)
- data.borrowerFico
- data.borrowerExperienceMonths

Optional
- data.requestedAmount (caps Final Note)
- data.borrowerLevel (defaults to A; A/B currently supported)

Success response:

```json
{
  "ok": true,
  "data": {
    "productKey": "FNF",
    "requestedAmount": 2700000,
    "afterRepairPropertyAmount": 7000000,
    "rehabBudget": 310000,
    "propertyValue": 2700000,
    "purchasePrice": 2700000,
    "propertyState": "CA",
    "borrowerFico": 740,
    "borrowerExperienceDeals": 7,
    "borrowerExperienceMonths": 84,
    "loanPurpose": "purchase",
    "stateTier": 1,                   // State pricing tier (1=CA, 2=FL/GA/TX, 3=others)
    "loanAmountTier": 3,              // Loan size tier (1-4)
    "borrowerLevel": "A",             // Borrower qualification level
    "policy": {
      "maxLTV": 0.85,                 // Max loan-to-value
      "maxLTARV": 0.8,                // Max loan-to-ARV
      "maxLTC": 0.9,                  // Max loan-to-cost
      "minFico": 740,
      "minExperienceMonths": 7,
      "minLoan": 2000000,
      "maxLoan": 3499999
    },
    "constraints": {
      "byLTARV": 5600000,             // Max by ARV constraint
      "byLTC": 2709000,               // Max by total cost constraint
      "byLTV": 2295000,               // Max by property value constraint
      "totalProjectCost": 3010000
    },
    "sizing": {
      "maximumEligibleLoan": 2295000,
      "provisionalLoanAmount": 2295000
    },
    "pricing": {
      "noteRate": "8.904%",           // Interest rate
      "noteRateDecimal": 0.08904,
      "originationFee": 0.0075,       // 0.75%
      "term": 12                      // Months
    },
    "outcome": "eligible",            // eligible|ineligible|recontact
    "reason": null
  }
}
```

Error response (examples):

```json
{ "ok": false, "error": "arv_gt_rehab_value", "message": "ARV must be greater than rehab budget" }
{ "ok": false, "error": "arv_gt_property_value", "message": "ARV must be greater than property value" }
{ "ok": false, "error": "insufficient_experience", "message": "Minimum 36 months experience required" }
{ "ok": false, "error": "no_qualifying_product", "message": "No qualifying loan product found" }
{ "ok": false, "error": "invalid_fnf_amount", "message": "Loan amount outside acceptable range" }
```

## Calculation Logic (PDF sequence)

1. State gate: reject if state not enabled (via state tier table)
2. Borrower level/experience screen (A/B supported; mins enforced)
3. Choose pricing row by FICO band (highest row minFICO ≤ borrower FICO) and loan‑amount tier
4. Purpose caps from row (Purchase vs Refi)
   - Projected Note = min( ARV × LTARV, (Purchase + Rehab) × LTC )
   - UPB @ Close = Purchase × LTV
   - Final Note (provisional loan) = min( Projected Note, UPB + Rehab, RequestedAmount if provided )
5. Snap to the row whose Min/Max contains Final Note and re‑calculate (caps, UPB, Final Note)
6. Price by State Tier (Tier1/2/3) and display a +30 bps range
7. Return eligibility outcome and explanation

## Outputs (contract)

Always
- ok (boolean), data.outcome: eligible | ineligible | recontact
- data.reason when not eligible (e.g., state_not_enabled, low_fico, sizing_outside_row_range)

If eligible
- data.finalNoteAmount, data.upbAtClose, data.holdback
- data.displayLTV, data.displayLTC
- data.rateLo, data.rateHi, data.termMonths (12)
- data.stateTier, data.loanAmountTier

## Borrower Personas (A, B) and Voice‑Agent Input Checklist

### Personas covered in this MVP

- **Borrower Level A (Experienced)**
  - **Experience**: ≥ 7 months (from database rows)
  - **FICO bands supported**: 740, 720, 700, 680
  - **Typical caps (example, Purchase)**: at 740 FICO, caps often align to `LTV 85%`, `LTARV 80%`, `LTC 90%`; lower FICO bands reduce caps per pricing row

- **Borrower Level B (Mid‑Experienced)**
  - **Experience**: ≥ 5 months (from database rows)
  - **FICO bands supported**: 740, 720, 700, 680
  - **Typical caps**: slightly tighter than A for the same tier/FICO (see JSON rows for exact caps used by the API)

Levels **C (≥ 3 months)** and **D (≥ 1 month)** will be added. Until then, callers with < 5–7 months should expect “ineligible” or “recontact” outcomes depending on FICO.

### Voice‑agent input checklist (what to collect on‑call)

- **Property**
  - `propertyState` (2‑letter code; drives state tier/rate)
  - `propertyValue` (as‑is value)
  - `afterRepairPropertyAmount` (ARV)
  - `purchasePrice` (if applicable)
  - `rehabBudget`

- **Borrower**
  - `borrowerFico`
  - `borrowerExperienceMonths` (required; min enforced is 36 months)
  - `borrowerExperienceDeals` (optional, informational)

- **Loan details**
  - `loanPurpose` (`purchase` or `refi`)
  - `requestedAmount` (optional; if omitted, API returns the maximum eligible sizing)

### Guardrails the voice agent can communicate

- ARV must be greater than rehab budget; otherwise sizing is invalid
- ARV must be greater than current property value
- Minimum experience of 36 months is enforced in the API today
- FICO below pricing row minimum → ineligible; FICO < ~640 → “recontact” recommendation
- Sizing respects the minimum/maximum loan amounts per loan‑amount tier

### How the API sizes the provisional loan

Given the inputs above, the API computes:

- Caps from database by borrower level, FICO, loan‑amount tier, and purpose (Purchase vs Refi)
- Constraint amounts: `byLTARV`, `byLTC`, `byLTV`
- `maximumEligibleLoan = min(byLTARV, byLTC, byLTV)`
- `provisionalLoanAmount = min(maximumEligibleLoan, requestedAmount || maximumEligibleLoan)`

Result also includes the effective `noteRate` based on state tier (CA = Tier1, FL/GA/TX = Tier2, others = Tier3).

## Example Request/Response

Endpoint: `POST /v1/sizer/fixflip/quote`

## Quick test

```bash
curl -s -X POST http://localhost:3000/api/loan-details \
  -H 'Content-Type: application/json' \
  -d '{
    "productKey": "fix_and_flip",
    "data": {
      "afterRepairPropertyAmount": 500000,
      "rehabBudget": 100000,
      "propertyValue": 300000,
      "requestedAmount": 250000
    }
  }' | jq
```


## Update Log

- Added new purpose-aware sizer endpoint: `POST /v1/sizer/fixflip/quote`.
  - Implements PDF sequence: Projected Note (min of LTARV and LTC), UPB @ close via LTV, Final Note = min(Projected, UPB+Rehab), re-selects pricing row by Final Note, and prices by State Tier with a +0.30% range.
  - Returns: `projectedNote`, `upbAtClose`, `holdback`, `finalNoteAmount`, `displayLTV`, `displayLTC`, `rateLo`, `rateHi`, `termMonths`, `stateTier`, `loanAmountTier`, `caps`.
- Added `src/sizer/fnf.js` sizing module (purchase/refi caps, UPB/holdback, snap-to-row, rate range).
- Kept existing endpoint `POST /api/loan-details` (basic sizing) for backward compatibility.
- Documented borrower personas (Levels A/B), voice-agent input checklist, and guardrails.
- Health endpoints available: `GET /` and `GET /health`.
- Known gaps (to be added next): borrower levels C/D, points adjustments, judicial/non-judicial linkage, additional products (Bridge/GUC/DSCR).

---

## Features (Phase 1 – Live Today)

- Fix & Flip with Rehab sizing logic
- Borrower Levels A and B (experience mins enforced)
- Loan amount tiers 1–4 and state tier mapping (CA=Tier1; FL/GA/TX=Tier2; others=Tier3)
- FICO banding at 740/720/700/680
- Returns: Final Note (provisional loan), UPB @ Close, Holdback, display LTV/LTC, rate range (+30 bps), 12‑month term, outcome

## Data

Pricing and tiering rules are loaded from a JSON generated from Archwest’s CSV/Excel sheets:

```
archwest_fnf_database.json
```

This JSON contains:
- Loan amount tiers (min/max)
- FICO minimums
- Experience requirements (A=7, B=5 in 36 months)
- State → Tier mapping
- Pricing rows with LTV/LTARV/LTC caps and note rates

## API Usage (Sizer Endpoint)

Endpoint

```
POST /v1/sizer/fixflip/quote
```

Request example

```json
{
  "productKey": "FNF",
  "data": {
    "loanPurpose": "purchase",
    "propertyState": "CA",
    "purchasePrice": 1100000,
    "rehabBudget": 75000,
    "afterRepairPropertyAmount": 1400000,
    "borrowerFico": 740,
    "borrowerExperienceMonths": 84,
    "borrowerLevel": "A",
    "requestedAmount": 1200000
  }
}
```

Response example

```json
{
  "ok": true,
  "data": {
    "qualified": true,
    "outcome": "eligible",
    "finalNoteAmount": 1010000,
    "upbAtClose": 935000,
    "holdback": 75000,
    "displayLTV": 0.85,
    "displayLTC": 0.9,
    "rateLo": 0.0868,
    "rateHi": 0.0898,
    "termMonths": 12
  }
}
```

## Example Voice Agent Responses

- Eligible (A/B):
  “Based on your details, you’re eligible for a provisional loan of about $1.01M, with $935k advanced at closing and $75k reserved for rehab. Your rate is estimated between 8.7% and 9.0% for a 12‑month term.”

- Recontact:
  “You’re not eligible at this time. If your credit improves over the next six months, you may qualify. I’ll set a reminder to reach out then.”

- Ineligible (state gate):
  “We’re not able to offer a loan right now because the property state isn’t eligible for our programs.”

## Future Enhancements

- Borrower Levels C/D (with complete cap validation).
- Judicial vs Non‑Judicial and explicit Able‑to‑Lend integration (single policy section).
- Additional products (Bridge, DSCR, GUC).
- Pricing adjustments (origination/size/credit/tier spreads, buffers).
- CRM integrations (Salesforce/HubSpot).

## Disclaimer

This API provides front‑end sizing only and is not a credit decision engine. All outputs are indicative and subject to Archwest’s final underwriting and compliance rules.


