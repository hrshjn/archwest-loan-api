# Setup Instructions for Team

## Push to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it something like `archwest-loan-api`
   - Make it private if needed
   - Don't initialize with README (we already have one)

2. **Push this code**
   ```bash
   # Add your GitHub repo as origin
   git remote add origin https://github.com/YOUR_USERNAME/archwest-loan-api.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

## For Your Team to Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/archwest-loan-api.git
cd archwest-loan-api

# Install dependencies
npm install

# Run the server
npm start

# Test it
curl http://localhost:3000/health
```

## Quick Deploy Options

### Option 1: Deploy to Render (Recommended)
1. Push to GitHub first
2. Go to https://render.com
3. New > Web Service
4. Connect your GitHub repo
5. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Deploy! You'll get a URL like `https://archwest-api.onrender.com`

### Option 2: Deploy to Railway
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Option 3: Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
```

## API Integration for Voice Agent

Your voice agent should make POST requests to:
```
https://your-deployed-url/api/loan-details
```

With this JSON structure:
```json
{
  "productKey": "FNF",
  "data": {
    "propertyState": "CA",
    "purchasePrice": 2700000,
    "afterRepairPropertyAmount": 7000000,
    "rehabBudget": 310000,
    "propertyValue": 2700000,
    "requestedAmount": 2700000,
    "borrowerFico": 740,
    "borrowerExperienceMonths": 84,
    "borrowerExperienceDeals": 7,
    "loanPurpose": "purchase"
  }
}
```

## Files Overview

- `server.js` - Main API server
- `archwest_fnf_database.json` - Complete pricing database (576 scenarios)
- `README.md` - API documentation
- `deployment.md` - Deployment options
- `*.csv` - Original Excel data (for reference)
