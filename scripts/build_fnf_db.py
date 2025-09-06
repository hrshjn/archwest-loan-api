#!/usr/bin/env python3
import csv, json, re, math

CSV_PATH = "Simple Sizer FNF with formulas  - Pricing Sheet Mod.csv"
DB_PATH  = "archwest_fnf_database.json"

def parse_money(s):
    if s is None:
        return None
    s = str(s).strip().replace("$", "").replace(",", "")
    try:
        return float(s) if s else None
    except Exception:
        return None

def parse_pct(s):
    if s is None: return None
    s = str(s).strip().replace("%","")
    try:
        return float(s)/100.0
    except:
        return None

def is_rate_token(s):
    s = str(s).strip()
    return bool(re.match(r"^\d+(?:\.\d+)?%$", s))

def approx(a,b,eps=1e-6):
    return a is not None and b is not None and abs(a-b) <= eps

def extract_percentages(row):
    return [parse_pct(v) for v in row if isinstance(v,str) and v.strip().endswith('%')]

def find_triplet_indices(row_pcts, target_triplet):
    # find the first window of length 3 matching target_triplet approximately
    for i in range(len(row_pcts)-2):
        trip = row_pcts[i:i+3]
        if all(approx(trip[j], target_triplet[j], 5e-4) for j in range(3)):
            return i
    return None

def compress_rate_pairs(pcts):
    # rows often contain duplicated rate values e.g. 9.029%,9.029%,9.079%,9.079%...
    comp=[]
    i=0
    while i < len(pcts):
        comp.append(pcts[i])
        if i+1 < len(pcts) and approx(pcts[i], pcts[i+1], 5e-6):
            i += 2
        else:
            i += 1
    return comp

def load_existing_db():
    with open(DB_PATH,'r') as f:
        return json.load(f)

def find_header_indexes(rows):
    header_idx = None
    for i,row in enumerate(rows):
        if 'Product' in row and 'Borrower Level' in row:
            header_idx = i
            break
    if header_idx is None:
        return None
    hdr = rows[header_idx]
    def find_col(label):
        for j,cell in enumerate(hdr):
            if str(cell).strip() == label:
                return j
        for j,cell in enumerate(hdr):
            if label in str(cell):
                return j
        return None
    # Allow finding detail headers that may live on the next header line(s)
    def find_any_col(label):
        for r in rows:
            for j,cell in enumerate(r):
                if str(cell).strip() == label:
                    return j
        return None
    return {
        'row': header_idx,
        'product': find_col('Product'),
        'level': find_col('Borrower Level'),
        'minExp': find_col('Min. Experience 36 mos.'),
        'minFico': find_col('Min. FICO:'),
        'loanAmountTier': find_col('Loan Amount Tier'),
        'minLoan': find_col('Min. Loan:'),
        'maxLoan': find_col('Max. Loan:'),
        'purchaseLTV': find_any_col('Purchase LTV') or find_col('Purchase LTV'),
        'purchaseLTARV': find_any_col('Purchase LTARV') or find_col('Purchase LTARV'),
        'purchaseLTC': find_any_col('Purchase LTC') or find_col('Purchase LTC'),
        'refiLTV': find_any_col('Refinance LF RehabLTV') or find_col('Refinance LF RehabLTV'),
        'refiLTARV': find_any_col('Refinance LF RehabLTARV') or find_col('Refinance LF RehabLTARV'),
        'refiLTC': find_any_col('Refinance LF RehabLTC') or find_col('Refinance LF RehabLTC'),
        'tier1': find_any_col('Tier 1') or find_col('Tier 1'),
        'tier2': find_any_col('Tier 2') or find_col('Tier 2'),
        'tier3': find_any_col('Tier 3') or find_col('Tier 3')
    }

def main():
    db = load_existing_db()

    # Map for quick lookup of known purchase/refi triplet indices using an existing A row from DB
    # Pick an A/720/tier3 row (commonly present)
    known = next(r for r in db['products']['FNF']['pricing_rows']
                 if r['borrowerLevel']=='A' and r['minFico']==720 and r['loanAmountTier']==3)
    known_purchase = [known['purchase']['LTV'], known['purchase']['LTARV'], known['purchase']['LTC']]
    known_refi     = [known['refi']['LTV'],     known['refi']['LTARV'],     known['refi']['LTC']]

    pricing_rows = []
    caps_by_fico = {}  # key: (level, minFico) -> {purchase:{}, refi:{}}

    # Load all rows first to identify header columns
    with open(CSV_PATH, newline='') as f:
        all_rows = list(csv.reader(f))

    hdr = find_header_indexes(all_rows) or {}
    pidx = hdr.get('product'); lvl = hdr.get('level'); expi = hdr.get('minExp'); fic = hdr.get('minFico')
    tier = hdr.get('loanAmountTier'); minL = hdr.get('minLoan'); maxL = hdr.get('maxLoan')
    pLTV = hdr.get('purchaseLTV'); pARV = hdr.get('purchaseLTARV'); pLTC = hdr.get('purchaseLTC')
    rLTV = hdr.get('refiLTV'); rARV = hdr.get('refiLTARV'); rLTC = hdr.get('refiLTC')
    t1 = hdr.get('tier1'); t2 = hdr.get('tier2'); t3 = hdr.get('tier3')

    for row in all_rows:
        if pidx is None or pidx >= len(row):
            continue
        if (row[pidx] or '').strip() != 'FNF':
            continue
        borrowerLevel = (row[lvl] if lvl is not None and lvl < len(row) else '').strip()
        if borrowerLevel not in ('A','B','C','D'):
            continue
        try:
            minExperienceMonths = int(str(row[expi]).strip()) if expi is not None and expi < len(row) else 0
        except Exception:
            minExperienceMonths = 0
        try:
            minFico = int(str(row[fic]).strip()) if fic is not None and fic < len(row) else 0
        except Exception:
            continue
        try:
            loanAmountTier = int(str(row[tier]).strip()) if tier is not None and tier < len(row) else None
        except Exception:
            loanAmountTier = None
        minLoan = parse_money(row[minL]) if minL is not None and minL < len(row) else None
        maxLoan = parse_money(row[maxL]) if maxL is not None and maxL < len(row) else None

        purchase = {
            'LTV':   parse_pct(row[pLTV]) if pLTV is not None and pLTV < len(row) else None,
            'LTARV': parse_pct(row[pARV]) if pARV is not None and pARV < len(row) else None,
            'LTC':   parse_pct(row[pLTC]) if pLTC is not None and pLTC < len(row) else None,
        }
        refi = {
            'LTV':   parse_pct(row[rLTV]) if rLTV is not None and rLTV < len(row) else None,
            'LTARV': parse_pct(row[rARV]) if rARV is not None and rARV < len(row) else None,
            'LTC':   parse_pct(row[rLTC]) if rLTC is not None and rLTC < len(row) else None,
        }

        # Fallback: if any cap is missing, scan percentage triplets and align to known A-row triplets
        if any(v is None for v in purchase.values()) or any(v is None for v in refi.values()):
            pcts = extract_percentages(row)
            if pcts:
                p_ix = find_triplet_indices(pcts, known_purchase)
                r_ix = find_triplet_indices(pcts, known_refi)
                if p_ix is not None:
                    purchase = {
                        'LTV': pcts[p_ix+0],
                        'LTARV': pcts[p_ix+1],
                        'LTC': pcts[p_ix+2]
                    }
                if r_ix is not None:
                    refi = {
                        'LTV': pcts[r_ix+0],
                        'LTARV': pcts[r_ix+1],
                        'LTC': pcts[r_ix+2]
                    }

        # Note rates from explicit Tier columns if present; else fallback to scanning percentages near end
        noteRates = None
        if t1 is not None and t2 is not None and t3 is not None and max(t1,t2,t3) < len(row):
            r1 = parse_pct(row[t1]); r2 = parse_pct(row[t2]); r3 = parse_pct(row[t3])
            if r1 and r2 and r3:
                noteRates = { 'Tier1': r1, 'Tier2': r2, 'Tier3': r3 }
        if not noteRates:
            pcts = extract_percentages(row)
            rate_candidates = [x for x in pcts if x and 0.05 <= x <= 0.15]
            rates = compress_rate_pairs(rate_candidates)[-3:]
            if len(rates) == 3:
                noteRates = { 'Tier1': rates[0], 'Tier2': rates[1], 'Tier3': rates[2] }

        # If we have caps but no tier/minLoan, store as caps_by_fico for later backfill
        if (loanAmountTier is None or minLoan is None or maxLoan is None) and all(v is not None for v in purchase.values()) and all(v is not None for v in refi.values()):
            caps_by_fico[(borrowerLevel, minFico)] = { 'purchase': purchase, 'refi': refi }
            continue

        if loanAmountTier and minLoan and maxLoan:
            pricing_rows.append({
                'product':'FNF',
                'borrowerLevel': borrowerLevel,
                'minExperienceMonths': minExperienceMonths,
                'minFico': minFico,
                'loanAmountTier': loanAmountTier,
                'minLoan': minLoan,
                'maxLoan': maxLoan,
                'purchase': purchase,
                'refi': refi,
                'noteRates': noteRates
            })

    # Merge with existing rows, de-duplicate by (level, fico, tier)
    def key(r):
        return (r['borrowerLevel'], r['minFico'], r['loanAmountTier'])
    existing = { key(r): r for r in db['products']['FNF']['pricing_rows'] }
    for r in pricing_rows:
        k = key(r)
        if k in existing:
            base = existing[k]
            # Only overwrite with non-null values
            for blk in ('purchase','refi'):
                for cap in ('LTV','LTARV','LTC'):
                    if r[blk].get(cap) is not None:
                        base[blk][cap] = r[blk][cap]
                    elif base[blk].get(cap) is None:
                        # try backfill from caps_by_fico
                        caps = caps_by_fico.get((base['borrowerLevel'], base['minFico']))
                        if caps and caps[blk].get(cap) is not None:
                            base[blk][cap] = caps[blk][cap]
            if r.get('noteRates'):
                base['noteRates'] = r['noteRates']
            base['minLoan'] = r['minLoan'] or base['minLoan']
            base['maxLoan'] = r['maxLoan'] or base['maxLoan']
            base['minExperienceMonths'] = r['minExperienceMonths'] or base.get('minExperienceMonths')
        else:
            # backfill caps if missing using caps_by_fico
            caps = caps_by_fico.get((r['borrowerLevel'], r['minFico']))
            if caps:
                for blk in ('purchase','refi'):
                    for cap in ('LTV','LTARV','LTC'):
                        if r[blk].get(cap) is None and caps[blk].get(cap) is not None:
                            r[blk][cap] = caps[blk][cap]
            existing[k] = r
    merged = sorted(existing.values(), key=lambda r: (r['borrowerLevel'], r['minFico'], r['loanAmountTier']))

    # Ensure experience requirements include C and D defaults
    exp = db['products']['FNF'].setdefault('experience_requirements_months', {})
    exp.setdefault('C', 3)
    exp.setdefault('D', 1)

    db['products']['FNF']['pricing_rows'] = merged

    with open(DB_PATH,'w') as f:
        json.dump(db, f, indent=2)

    print("Wrote", len(merged), "rows to", DB_PATH)

if __name__ == '__main__':
    main()


