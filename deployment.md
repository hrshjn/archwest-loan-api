# Deployment Guide

## Quick Start with ngrok (5 minutes)

```bash
# Terminal 1: Keep server running
npm start

# Terminal 2: Expose to internet
ngrok http 3000
# Copy the HTTPS URL provided (e.g., https://abc123.ngrok.io)
```

## Deploy with Docker

```bash
# Build
docker build -t archwest-api .

# Run locally
docker run -p 3000:3000 archwest-api

# Push to Docker Hub
docker tag archwest-api yourusername/archwest-api
docker push yourusername/archwest-api

# Run anywhere
docker run -p 80:3000 yourusername/archwest-api
```

## Deploy to Cloud (Production)

### Heroku (Easiest)
```bash
# Install Heroku CLI
heroku create archwest-sizer-api
git add .
git commit -m "Initial deployment"
git push heroku main
# Your API: https://archwest-sizer-api.herokuapp.com
```

### AWS EC2
```bash
# On EC2 instance
git clone [your-repo]
cd smallest
npm install
sudo npm install -g pm2

# Start with PM2
pm2 start server.js --name archwest-api
pm2 startup
pm2 save

# Configure nginx (optional)
sudo apt-get install nginx
# Add reverse proxy config
```

### Google Cloud Run (Serverless)
```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/[PROJECT-ID]/archwest-api

# Deploy
gcloud run deploy --image gcr.io/[PROJECT-ID]/archwest-api --platform managed
```

## API Endpoint Documentation

Share this with your engineer:

**Base URL**: `https://your-deployed-url.com`

**Endpoint**: `POST /api/loan-details`

**Headers**:
```
Content-Type: application/json
```

**Request Body**:
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

**Response**: See README.md for full response structure

## Environment Variables (Optional)

Create `.env` file:
```env
PORT=3000
NODE_ENV=production
```

## Monitoring

Add health check endpoint:
```javascript
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});
```
