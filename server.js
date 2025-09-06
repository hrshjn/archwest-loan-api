const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// New sizer route (purpose-aware caps, UPB/holdback, final note re-selection)
try {
    const { quoteFNF } = require('./src/sizer/fnf');
    app.post('/v1/sizer/fixflip/quote', (req, res) => {
        try {
            const result = quoteFNF(pricingDatabase, req.body || {});
            return res.json(result);
        } catch (e) {
            return res.status(400).json({ ok:false, error: e.message });
        }
    });
} catch {}

// Load Archwest pricing database
const pricingDatabase = JSON.parse(
	fs.readFileSync(path.join(__dirname, 'archwest_fnf_database.json'), 'utf8')
);

// Minimal validation/error tokens inferred from archwest-form.js
const ErrorTokens = {
	ARV_GREATER_THAN_REHAB: 'arv_gt_rehab_value',
	ARV_GREATER_THAN_PROPERTY: 'arv_gt_property_value',
	INVALID_FNF_AMOUNT: 'invalid_fnf_amount',
	INVALID_AMOUNT: 'invalid_amount'
};

// Get loan amount tier based on requested amount
function getLoanAmountTier(amount) {
	const tiers = pricingDatabase.products.FNF.loan_amount_tiers;
	for (const [tierNum, range] of Object.entries(tiers)) {
		if (amount >= range.minLoan && amount <= range.maxLoan) {
			return Number(tierNum);
		}
	}
	return null;
}

// Find best matching pricing row based on borrower profile
function findPricingRow(borrowerFico, borrowerExperienceMonths, loanAmountTier) {
	const rows = pricingDatabase.products.FNF.pricing_rows;
	
	// Filter rows by loan amount tier
	const tierRows = rows.filter(r => r.loanAmountTier === loanAmountTier);
	
	// Find rows where borrower meets minimum requirements
	const eligibleRows = tierRows.filter(r => 
		borrowerFico >= r.minFico && 
		borrowerExperienceMonths >= r.minExperienceMonths
	);
	
	if (eligibleRows.length === 0) return null;
	
	// Sort by best fit (highest FICO requirement they qualify for)
	eligibleRows.sort((a, b) => b.minFico - a.minFico);
	
	return eligibleRows[0];
}

// Provisional sizing and eligibility segmentation
function computeLoanDetails(productKey, payload) {
	const p = payload || {};
	const afterRepairPropertyAmount = Number(p.afterRepairPropertyAmount);
	const rehabBudget = Number(p.rehabBudget);
	const propertyValue = p.propertyValue != null ? Number(p.propertyValue) : NaN;
	const purchasePrice = p.purchasePrice != null ? Number(p.purchasePrice) : NaN;
	const requestedAmount = p.requestedAmount != null ? Number(p.requestedAmount) : NaN;
	const borrowerFico = p.borrowerFico != null ? Number(p.borrowerFico) : NaN;
	const borrowerExperienceDeals = p.borrowerExperienceDeals != null ? Number(p.borrowerExperienceDeals) : 0;
	const borrowerExperienceMonths = p.borrowerExperienceMonths != null ? Number(p.borrowerExperienceMonths) : 36;
	const propertyState = p.propertyState || 'CA';
	const loanPurpose = p.loanPurpose || 'purchase'; // 'purchase' or 'refi'

	if (!afterRepairPropertyAmount || !rehabBudget) {
		const err = new Error('Invalid Amount');
		err.code = ErrorTokens.INVALID_AMOUNT;
		throw err;
	}
	if (afterRepairPropertyAmount <= rehabBudget) {
		const err = new Error('ARV must be greater than rehab budget');
		err.code = ErrorTokens.ARV_GREATER_THAN_REHAB;
		throw err;
	}
	if (!Number.isNaN(propertyValue) && afterRepairPropertyAmount <= propertyValue) {
		const err = new Error('ARV must be greater than property value');
		err.code = ErrorTokens.ARV_GREATER_THAN_PROPERTY;
		throw err;
	}

	// Validate product type
	if (productKey !== 'FNF') {
		const err = new Error('Invalid product type');
		err.code = ErrorTokens.INVALID_FNF_AMOUNT;
		throw err;
	}

	// Check minimum experience requirement (36 months)
	if (borrowerExperienceMonths < 36) {
		const err = new Error('Minimum 36 months experience required');
		err.code = 'insufficient_experience';
		throw err;
	}

	// Get state tier
	const stateTier = pricingDatabase.products.FNF.state_tiers[propertyState] || 3;
	
	// Calculate loan amount to use for tier determination
	const loanAmountForTier = Number.isNaN(requestedAmount) ? 
		Math.min(0.85 * afterRepairPropertyAmount, 0.90 * ((purchasePrice || 0) + rehabBudget)) :
		requestedAmount;
	
	// Get loan amount tier
	const loanAmountTier = getLoanAmountTier(loanAmountForTier);
	if (!loanAmountTier) {
		const err = new Error('Loan amount outside acceptable range');
		err.code = ErrorTokens.INVALID_FNF_AMOUNT;
		throw err;
	}
	
	// Find matching pricing row
	const pricingRow = findPricingRow(borrowerFico || 0, borrowerExperienceMonths, loanAmountTier);
	if (!pricingRow) {
		const err = new Error('No qualifying loan product found');
		err.code = 'no_qualifying_product';
		throw err;
	}
	
	// Get LTV/LTARV/LTC caps from pricing row
	const caps = loanPurpose === 'refi' ? pricingRow.refi : pricingRow.purchase;
	const maxLTV = caps.LTV;
	const maxLTARV = caps.LTARV;
	const maxLTC = caps.LTC;

	const asIsBasis = Number.isNaN(propertyValue) ? purchasePrice : Math.min(propertyValue || 0, purchasePrice || propertyValue || 0);
	const totalProjectCost = (purchasePrice || 0) + rehabBudget;

	// Max loan by each constraint
	const byLTARV = maxLTARV * afterRepairPropertyAmount;
	const byLTC = maxLTC * totalProjectCost;
	const byLTV = Number.isNaN(asIsBasis) ? Infinity : maxLTV * asIsBasis;

	const maximumEligibleLoan = Math.max(0, Math.min(byLTARV, byLTC, byLTV));
	const provisionalLoanAmount = Math.min(maximumEligibleLoan, Number.isNaN(requestedAmount) ? maximumEligibleLoan : requestedAmount);

	// Get interest rate based on state tier
	const stateTierKey = `Tier${stateTier}`;
	const noteRate = pricingRow.noteRates[stateTierKey] || pricingRow.noteRates.Tier1;
	
	// Eligibility tiering
	let outcome = 'eligible';
	let reason = null;
	const ficoMin = Math.min(...pricingDatabase.products.FNF.fico_minimums);
	const ficoRecontactThreshold = ficoMin - 40; // 640 if min is 680
	
	if (borrowerFico && borrowerFico < ficoRecontactThreshold) {
		outcome = 'recontact';
		reason = 'low_fico_recontact';
	} else if (borrowerFico && borrowerFico < pricingRow.minFico) {
		outcome = 'ineligible';
		reason = 'low_fico';
	} else if (provisionalLoanAmount <= 0) {
		outcome = 'ineligible';
		reason = 'sizing_constraints';
	} else if (provisionalLoanAmount < pricingRow.minLoan) {
		outcome = 'ineligible';
		reason = 'below_minimum_loan';
	} else if (provisionalLoanAmount > pricingRow.maxLoan) {
		outcome = 'ineligible';
		reason = 'above_maximum_loan';
	}

	return {
		productKey,
		requestedAmount: Number.isNaN(requestedAmount) ? null : requestedAmount,
		afterRepairPropertyAmount,
		rehabBudget,
		propertyValue: Number.isNaN(propertyValue) ? null : propertyValue,
		purchasePrice: Number.isNaN(purchasePrice) ? null : purchasePrice,
		propertyState,
		borrowerFico: Number.isNaN(borrowerFico) ? null : borrowerFico,
		borrowerExperienceDeals,
		borrowerExperienceMonths,
		loanPurpose,
		
		// Tier determinations
		stateTier,
		loanAmountTier,
		borrowerLevel: pricingRow.borrowerLevel,
		
		// Applied constraints
		policy: {
			maxLTV,
			maxLTARV,
			maxLTC,
			minFico: pricingRow.minFico,
			minExperienceMonths: pricingRow.minExperienceMonths,
			minLoan: pricingRow.minLoan,
			maxLoan: pricingRow.maxLoan
		},
		
		// Calculations
		constraints: {
			byLTARV,
			byLTC,
			byLTV,
			totalProjectCost
		},
		
		// Loan sizing
		sizing: {
			maximumEligibleLoan,
			provisionalLoanAmount
		},
		
		// Pricing
		pricing: {
			noteRate: (noteRate * 100).toFixed(3) + '%',
			noteRateDecimal: noteRate,
			originationFee: 0.0075, // 0.75% from sheet
			term: 12 // default 12 months
		},
		
		// Final determination
		outcome,
		reason
	};
}

app.post('/api/loan-details', (req, res) => {
	try {
		const { productKey, data } = req.body || {};
		const result = computeLoanDetails(productKey, data || {});
		return res.json({ ok: true, data: result });
	} catch (err) {
		return res.status(400).json({ ok: false, error: err.code || 'unknown_error', message: err.message });
	}
});

// Health check endpoint
app.get('/health', (req, res) => {
	res.json({ 
		status: 'healthy', 
		timestamp: new Date().toISOString(),
		service: 'archwest-loan-sizing-api',
		version: '1.0.0'
	});
});

// Root endpoint
app.get('/', (req, res) => {
	res.json({ 
		message: 'Archwest Loan Sizing API',
		endpoints: {
			'POST /api/loan-details': 'Calculate loan eligibility and terms',
			'GET /health': 'Health check'
		}
	});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});


