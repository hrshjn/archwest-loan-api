# Archwest Loan Sizing API

Express endpoint that implements Archwest Capital's Fix & Flip (FNF) loan sizing calculator with complete pricing logic.

## Overview

This API provides loan eligibility and pricing calculations for Archwest Capital's Fix & Flip products. It's designed to be called by voice agents during customer conversations to provide instant loan sizing and qualification decisions.

### Key Features
- Real-time loan eligibility determination (eligible/ineligible/recontact)
- State-based pricing tiers (CA, FL/GA/TX, others)
- FICO and experience-based qualification
- LTV/LTARV/LTC constraint calculations
- Interest rate lookup from 576 pricing scenarios
- Loan amount tiers from $150K to $5M

## Run

```bash
npm start
# or
npm run dev
```

Server will listen on `http://localhost:3000`.

## Endpoint

- POST `/api/loan-details`

Request body:

```json
{
  "productKey": "FNF",
  "data": {
    "propertyState": "CA",                 // 2-letter state code
    "purchasePrice": 2700000,              // Purchase price
    "afterRepairPropertyAmount": 7000000,  // ARV
    "rehabBudget": 310000,                 // Rehab amount
    "propertyValue": 2700000,              // Current/as-is value
    "requestedAmount": 2700000,            // Requested loan amount
    "borrowerFico": 740,                   // FICO score
    "borrowerExperienceMonths": 84,        // Months of experience
    "borrowerExperienceDeals": 7,          // Number of completed deals
    "loanPurpose": "purchase"              // "purchase" or "refi"
  }
}
```

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

## Outcome Types

- **eligible**: Borrower qualifies for the loan with calculated terms
- **ineligible**: Does not qualify (see `reason` field for details like `low_fico`, `sizing_constraints`, etc.)
- **recontact**: Borrower should be contacted later (typically FICO < 640)

## Current Limitations and Rationale

- Borrower Levels covered: **A and B** only. Levels **C and D** (lower experience profiles) are not yet included in the JSON dataset. Rationale: we prioritized common borrower profiles to ship a working demo quickly; C/D add 36 more rows and will be added next.
- Product coverage: **FNF (Fix & Flip)** only. Other products referenced in the sheets (e.g., **Bridge**, **Ground-Up/GUC**, **DSCR/rental**) are not included yet. Rationale: the demo focuses on FNF sizing; adding other products requires separate parsing and validation passes.
- Points: We apply **0.75% origination** as a constant; tiered/adjusted points (e.g., credit/size/tier adjustments) are not applied yet. Rationale: adjustment rows in the sheet (e.g., "Tier Spread", "Size Adjustment", "Credit Adjustment", "Min Spread", "Buffer") need careful handling to avoid double-counting; we will integrate once validations are in place.
- Judicial vs Non‑Judicial: The lists CSV contains this, but it's **not yet used** for pricing/eligibility. Rationale: no explicit pricing linkage specified; we will wire this once the rule is confirmed.
- Experience thresholds: We enforce **minimum 36 months** and use **borrowerExperienceMonths** for qualification. Deal‑count tiers from the sheet are not yet mapped to pricing changes beyond the provided rows.
- Dataset completeness: The pricing database currently has **20 rows** (A/B across tiers and FICO bands). The source CSV contains **56 FNF rows**; the remaining will be parsed and added.

These limitations are intentional to deliver a reliable MVP for voice‑agent sizing. The API and data model are structured so we can extend coverage without breaking clients.

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

## State Tiers

- **Tier 1**: CA (best rates)
- **Tier 2**: FL, GA, TX
- **Tier 3**: All other states

## Loan Amount Tiers

- **Tier 1**: $150,000 - $999,999
- **Tier 2**: $1,000,000 - $1,999,999
- **Tier 3**: $2,000,000 - $3,499,999
- **Tier 4**: $3,500,000 - $4,999,999

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


