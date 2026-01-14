// src/sizer/fnf.js
const MONEY = n => Math.floor(Number(n || 0));
const pct = v => (v == null ? null : Number(v)); // already 0–1 in JSON

// Normalize US state input: accepts full state name or 2-letter postal code
const STATE_NAME_TO_CODE = {
	'ALABAMA':'AL','ALASKA':'AK','ARIZONA':'AZ','ARKANSAS':'AR','CALIFORNIA':'CA','COLORADO':'CO','CONNECTICUT':'CT','DELAWARE':'DE','FLORIDA':'FL','GEORGIA':'GA','HAWAII':'HI','IDAHO':'ID','ILLINOIS':'IL','INDIANA':'IN','IOWA':'IA','KANSAS':'KS','KENTUCKY':'KY','LOUISIANA':'LA','MAINE':'ME','MARYLAND':'MD','MASSACHUSETTS':'MA','MICHIGAN':'MI','MINNESOTA':'MN','MISSISSIPPI':'MS','MISSOURI':'MO','MONTANA':'MT','NEBRASKA':'NE','NEVADA':'NV','NEW HAMPSHIRE':'NH','NEW JERSEY':'NJ','NEW MEXICO':'NM','NEW YORK':'NY','NORTH CAROLINA':'NC','NORTH DAKOTA':'ND','OHIO':'OH','OKLAHOMA':'OK','OREGON':'OR','PENNSYLVANIA':'PA','RHODE ISLAND':'RI','SOUTH CAROLINA':'SC','SOUTH DAKOTA':'SD','TENNESSEE':'TN','TEXAS':'TX','UTAH':'UT','VERMONT':'VT','VIRGINIA':'VA','WASHINGTON':'WA','WEST VIRGINIA':'WV','WISCONSIN':'WI','WYOMING':'WY','DISTRICT OF COLUMBIA':'DC','WASHINGTON DC':'DC','WASHINGTON, DC':'DC','DC':'DC'
};
function normalizeStateCode(input){
	if(!input) return null;
	const s = String(input).trim().toUpperCase();
	if(s.length===2) return s;
	if(STATE_NAME_TO_CODE[s]) return STATE_NAME_TO_CODE[s];
	const SHORT = {'CALIF':'CA','PENNA':'PA','MASS':'MA','TENN':'TN','WASH':'WA'};
	if(SHORT[s]) return SHORT[s];
	return null;
}

function pickPurposeBlock(row, purpose) {
	return (purpose || 'purchase').toLowerCase().startsWith('refi')
		? row.refi
		: row.purchase;
}

function loanAmountTierFromAmount(db, amount) {
	const tiers = db.products.FNF.loan_amount_tiers; // { "1":{minLoan,maxLoan},... }
	const tierId = Object.keys(tiers)
		.map(k => Number(k))
		.sort((a,b)=>a-b)
		.find(k => amount >= tiers[k].minLoan && amount <= tiers[k].maxLoan);
	return tierId || null;
}

function stateTier(db, state) {
	const st = (state || '').toUpperCase();
	const t = db.products.FNF.state_tiers[st];
	return t || null; // 1/2/3 or null
}

function ableToLend(db, state) {
	// Lists.csv has an "Able to Lend" flag; your JSON exporter can add it later.
	// Until then: lendable if state_tiers has an entry.
	return Boolean(stateTier(db, state));
}

function bestFicoBand(rows, borrowerFico){
	// choose the HIGHEST row minFico that is <= borrowerFico
	const eligible = rows.filter(r => r.minFico != null && borrowerFico >= r.minFico);
	if (!eligible.length) return null;
	return eligible.sort((a,b)=>b.minFico - a.minFico)[0];
}

function rowsForLevelAndExp(db, borrowerLevel, expMonths) {
	const monthsNeeded = db.products.FNF.experience_requirements_months[borrowerLevel] ?? 0;
	if (expMonths < monthsNeeded) return {ok:false, reason:'experience_below_min_36m', minRequired: monthsNeeded};
	// filter rows by level
	const rows = db.products.FNF.pricing_rows.filter(r => r.borrowerLevel === borrowerLevel);
	return {ok:true, rows};
}

function projectNoteFromCaps(purposeBlock, deal) {
	const { ARV, purchase, rehab } = deal;
	const capLTARV = pct(purposeBlock.LTARV) * ARV;
	const cost = purchase + rehab;
	const capLTC   = pct(purposeBlock.LTC)   * cost;
	// projected = min(LTARV, LTC)
	const projected = Math.min(capLTARV, capLTC);
	return { projected, capLTARV, capLTC };
}

function upbAtClose(purposeBlock, deal) {
	// Only purchase uses LTV for initial advance; refi will use refi LTV branch.
	const { LTV } = purposeBlock;
	return pct(LTV) * (deal.purchase);
}

function pickRowByFinalNote(rows, finalNote){
	// choose row whose min/max contains finalNote; if multiple, pick the narrowest tier (highest tier number typically has larger min)
	const fit = rows.filter(r => finalNote >= r.minLoan && finalNote <= r.maxLoan);
	if (!fit.length) return null;
	// prefer the row whose (max-min) is minimal, then highest min
	return fit.sort((a,b)=> (a.maxLoan-a.minLoan) - (b.maxLoan-b.minLoan) || b.minLoan - a.minLoan)[0];
}

function priceFromRow(row, stTier){
	const t = String(stTier);
	const rate = row.noteRates ? (
		t==='1' ? row.noteRates.Tier1 :
		t==='2' ? row.noteRates.Tier2 :
		t==='3' ? row.noteRates.Tier3 : null
	) : null;
	return rate; // decimal (e.g., 0.09495)
}

function roundDownTo1k(n){ return Math.floor(n/1000)*1000; }

exports.quoteFNF = function quoteFNF(db, req) {
	const { productKey, data } = req;
	if ((productKey||'FNF') !== 'FNF') return { ok:false, error:'unsupported_product' };

	const purpose = (data.loanPurpose || 'purchase'); // 'purchase' | 'refi'
	const state   = normalizeStateCode(data.propertyState);
	const ARV     = MONEY(data.afterRepairPropertyAmount || data.afterRepairValue || 0);
	const purchase= MONEY(data.purchasePrice || data.propertyValue || 0);
	const rehab   = MONEY(data.rehabBudget || 0);
	const requested = MONEY(data.requestedAmount || 0);

	// 0) State gate
	if (!ableToLend(db, state)) {
		return { ok:true, data:{ qualified:false, outcome:'ineligible', reason:'state_not_enabled', state: state || data.propertyState } };
	}
	const stTier = stateTier(db, state);

	// 1) Level/Experience screen
	const borrowerLevel = data.borrowerLevel || 'A';
	const expRes = rowsForLevelAndExp(db, borrowerLevel, Number(data.borrowerExperienceMonths||0));
	if (!expRes.ok) {
		return { ok:true, data:{ qualified:false, outcome:'recontact', reason:expRes.reason, minExperienceMonths:expRes.minRequired } };
	}

	// 2) Filter rows → FICO band choice
	const rows = expRes.rows;
	const fico = Number(data.borrowerFico||0);
	const byFico = rows.filter(r => r.minFico != null).sort((a,b)=>a.minFico-b.minFico);
	const startRow = bestFicoBand(byFico, fico);
	if (!startRow) {
		return { ok:true, data:{ qualified:false, outcome:'ineligible', reason:'fico_below_min' } };
	}

	// 3) Purpose block
	const pBlock = pickPurposeBlock(startRow, purpose);

	// 4) Constraint sizing (Projected Note) — LTARV vs LTC (min) per PDF
	const proj = projectNoteFromCaps(pBlock, { ARV, purchase, rehab });

	// 5) UPB @ Close via LTV (purchase/refi appropriate column) per PDF
	const upb = upbAtClose(pBlock, { purchase });

	// 6) Final Note per PDF: min(Projected, UPB+Rehab)
	let finalNote = Math.min(proj.projected, upb + rehab);
	// Respect request cap if provided
	if (requested > 0) finalNote = Math.min(finalNote, requested);
	finalNote = roundDownTo1k(finalNote);

	// 7) Snap to correct row whose min/max contains Final Note; if different, recompute pBlock, proj, upb, finalNote again
	let row = pickRowByFinalNote(byFico, finalNote) || startRow;
	let block = pickPurposeBlock(row, purpose);
	let proj2 = projectNoteFromCaps(block, { ARV, purchase, rehab });
	let upb2  = upbAtClose(block, { purchase });
	let final2= Math.min(proj2.projected, upb2 + rehab);
	if (requested > 0) final2 = Math.min(final2, requested);
	final2 = roundDownTo1k(final2);

	// if still out of row range, attempt one more snap
	const row2 = pickRowByFinalNote(byFico, final2);
	if (row2) {
		row = row2;
		block = pickPurposeBlock(row, purpose);
		proj2 = projectNoteFromCaps(block, { ARV, purchase, rehab });
		upb2  = upbAtClose(block, { purchase });
		final2= Math.min(proj2.projected, upb2 + rehab);
		if (requested > 0) final2 = Math.min(final2, requested);
		final2 = roundDownTo1k(final2);
	}
	const finalNoteAmt = final2;
	if (!(finalNoteAmt >= row.minLoan && finalNoteAmt <= row.maxLoan)) {
		return {
			ok:true,
			data:{ qualified:false, outcome:'ineligible', reason:'sizing_outside_row_range', minLoan:row.minLoan, maxLoan:row.maxLoan, finalNoteAmt }
		};
	}

	// 8) Display metrics the PDF wants
	const holdback = Math.max(0, finalNoteAmt - upb2); // amount reserved for rehab
	const displayLTV = upb2 / (purchase || 1);          // UPB / property value (purchase price per sheet language)
	const displayLTC = finalNoteAmt / ((purchase + rehab) || 1);

	// 9) Pricing (rate) by state tier + 30 bps range
	const rateLo = priceFromRow(row, stTier);
	const rateHi = (rateLo != null) ? (rateLo + 0.0030) : null;

	return {
		ok: true,
		data: {
			qualified: true,
			outcome: 'eligible',
			productKey: 'FNF',
			purpose,
			stateTier: stTier,
			loanAmountTier: row.loanAmountTier,
			qualificationKey: row.qualificationKey || null,

			// constraints returned
			caps: {
				purchase: { LTV: pct(block.LTV) },
				both: { LTARV: pct(block.LTARV), LTC: pct(block.LTC) }
			},
			projectedNote: roundDownTo1k(proj2.projected),

			// final amounts (per PDF)
			upbAtClose: roundDownTo1k(upb2),
			holdback: roundDownTo1k(holdback),
			finalNoteAmount: finalNoteAmt,

			// display metrics for UI (per PDF)
			displayLTV,
			displayLTC,

			// pricing
			rateLo,           // decimal (e.g., 0.09495)
			rateHi,           // +30 bps
			termMonths: 12
		}
	};
};


