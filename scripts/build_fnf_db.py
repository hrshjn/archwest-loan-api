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

def main():
    db = load_existing_db()

    # Map for quick lookup of known purchase/refi triplet indices using an existing A row from DB
    # Pick an A/720/tier3 row (commonly present)
    known = next(r for r in db['products']['FNF']['pricing_rows']
                 if r['borrowerLevel']=='A' and r['minFico']==720 and r['loanAmountTier']==3)
    known_purchase = [known['purchase']['LTV'], known['purchase']['LTARV'], known['purchase']['LTC']]
    known_refi     = [known['refi']['LTV'],     known['refi']['LTARV'],     known['refi']['LTC']]

    pricing_rows = []

    with open(CSV_PATH, newline='') as f:
        reader = csv.reader(f)
        for row in reader:
            # Find FNF rows: look for the literal 'FNF' and a borrower level token (A/B/C/D)
            if 'FNF' not in row: continue
            try:
                idx = row.index('FNF')
            except ValueError:
                continue
            if idx+8 >= len(row):
                continue
            borrowerLevel = (row[idx+1] or '').strip()
            if borrowerLevel not in ('A','B','C','D'):
                continue
            try:
                minExperienceMonths = int(str(row[idx+2]).strip() or '0')
            except:
                minExperienceMonths = 0
            try:
                minFico = int(str(row[idx+4]).strip() or '0')
            except:
                continue
            # Some rows may have '#N/A' qualificationKey at idx+5
            try:
                loanAmountTier = int(str(row[idx+7]).strip())
            except:
                continue
            minLoan = parse_money(row[idx+8])
            maxLoan = parse_money(row[idx+9])
            if not (minLoan and maxLoan):
                continue

            # Extract all percentage tokens from the row to find caps and rates
            pcts = [parse_pct(v) for v in row if isinstance(v,str) and v.strip().endswith('%')]
            if not pcts:
                continue
            # Identify purchase/refi triplets by aligning with known A row pattern
            purchase_ix = find_triplet_indices(pcts, known_purchase)
            refi_ix     = find_triplet_indices(pcts, known_refi)
            if purchase_ix is None or refi_ix is None:
                # Can't align, skip this row
                continue
            purchase = {
                'LTV':   pcts[purchase_ix+0],
                'LTARV': pcts[purchase_ix+1],
                'LTC':   pcts[purchase_ix+2],
            }
            refi = {
                'LTV':   pcts[refi_ix+0],
                'LTARV': pcts[refi_ix+1],
                'LTC':   pcts[refi_ix+2],
            }
            # Rates: compress duplicate pairs and take three that look like 8–11%
            rate_candidates = [x for x in pcts if x and 0.05 <= x <= 0.15]
            rates = compress_rate_pairs(rate_candidates)[:3]
            noteRates = None
            if len(rates) >= 3:
                noteRates = {
                    'Tier1': rates[0],
                    'Tier2': rates[1],
                    'Tier3': rates[2],
                }

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
        existing[key(r)] = r
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


