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


