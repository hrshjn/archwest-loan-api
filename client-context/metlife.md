# MetLife - Client Context

## Company Overview
| Field | Value |
|-------|-------|
| **Company** | MetLife, Inc. |
| **Website** | https://www.metlife.com |
| **Industry** | Financial Services / Insurance |
| **Country** | United States (Global) |
| **Headquarters** | New York, NY |

## Stakeholders

### MetLife Team
| Name | Email | Title |
|------|-------|-------|
| Shivani Garcha | shivani.garcha@metlife.com | **AI Transformation** (Primary Contact / Liaison) |
| Ken Brown | kbrown1@metlife.com | **AVP, Global Customer Solutions & Operations Technology** |
| Jennifer Bradshaw | jbradshaw1@metlife.com | **AVP, Contact Center Technology** |
| Natesan Ramanathan | nramanathan1@metlife.com | **Team Lead Manager** (formerly IVR Technology Development Lead) |
| Karthi Muthukrishnan | kmuthukrishnan1@metlife.com | **Contact Center Analyst** (Enterprise Voice & Contact Center Technology) |
| Hari Sharma | hari.sharma1@metlife.com | **AVP, Customer Engagement Platforms & Digital Engineering** |
| Eva Thomas | emthomas@metlife.com | Stakeholder |
| Rahul Anand | rahul.anand2@metlife.com | Stakeholder |
| Anika Wall | awall@metlife.com | Stakeholder |

### Smallest.ai Team
| Name | Email | Role |
|------|-------|------|
| Adnan Turnadzic | adnan@smallest.ai | Account Lead |
| Rupesh Kollaikal | rupesh@smallest.ai | Team |
| Harsh Jain | harsh@smallest.ai | Head of Partnerships |
| Apoorv Sood | apoorv@smallest.ai | Team |
| Sudarshan Kamath | sudarshan@smallest.ai | Team |
| Yash | yash@smallest.ai | Team |

## Engagement Timeline

| Date | Event | Details |
|------|-------|---------|
| Dec 10, 2025 | Demo Scheduled | Initial meeting invite sent by Adnan |
| Dec 11, 2025 | **Demo & Discussion** | Informative demo delivered to MetLife stakeholder team |
| Dec 12, 2025 | Feedback Received | Shivani: "Thank you for the informative demo. We're in very early exploration phase and will need time to decide next steps." |
| Dec 12, 2025 | Follow-up Cancelled | MetLife requested to cancel Jan 14 deep dive call; will reach out when ready |
| Jan 2026 | Follow-up | Adnan checked in for updates |

## Current Status

- **Stage:** Early Exploration / Prospect
- **Temperature:** Warm (positive feedback but not ready to proceed)
- **Next Action:** Waiting for MetLife to reach out when their team is ready
- **Key Quote:** "We're in very early exploration phase and will need time to decide next steps"

## Notes

- Demo was well-received ("informative demo and discussion")
- Large stakeholder team involved (7 MetLife attendees) indicates serious interest
- They need internal alignment before proceeding
- Holiday season may have slowed decision-making

## Stakeholder Analysis

**This is a highly relevant buying committee for Voice AI:**

| Stakeholder | Relevance to Smallest.ai |
|-------------|--------------------------|
| Shivani Garcha | AI Transformation lead - likely champion/evaluator |
| Ken Brown | AVP overseeing Customer Solutions Technology - decision influencer |
| Jennifer Bradshaw | Contact Center Technology AVP - direct buyer for voice solutions |
| Natesan Ramanathan | IVR/Voice Technology background - technical evaluator |
| Karthi Muthukrishnan | Contact Center Analyst - technical implementer |
| Hari Sharma | Customer Engagement Platforms - integration stakeholder |

**Buying Signal:** The presence of AI Transformation, Contact Center Technology, IVR, and Customer Engagement leaders suggests MetLife is actively exploring voice AI modernization.

## Customer Business Problem

**Objective:** Enhance the claimant experience through conversational AI-driven interactions (voice and digital) to achieve measurable gains in:
- First Call Resolution (FCR)
- Average Handle Time (AHT)
- Net Promoter Score (NPS) / Customer Satisfaction (CSAT)

### Use Cases Identified by MetLife

| Use Case | Description | Persona |
|----------|-------------|---------|
| **Group Life / Annuity FNOL** | Empathetic, compliant First Notice of Loss capture with high self-service containment; collect required information to initiate claim process | Beneficiaries, Executors, Benefit Administrators |
| **Dental Pre-Claim** | Give dental members fast, accurate coverage summaries and out-of-pocket estimates before treatment; steer to in-network and pre-authorization when needed | Dental Members, Providers, Insured Dependents |
| **Dental Post-Claim (EOB)** | Help members understand EOBs—billed vs allowed, plan paid, deductible/coinsurance, member responsibility—reducing confusion and repeat contacts | Dental Members |
| **Outbound Call Flow** | Proactively and empathetically progress FNOL-related cases through outbound voice/SMS with strong consent, verification, and minimal data burden | Beneficiaries, Executors |

### Technical Requirements

| Category | Requirements |
|----------|--------------|
| **Integrations** | Genesys Cloud, Salesforce Console, Knowledge-base (RAG), Identity/Authentication APIs |
| **Compliance** | PII minimization/redaction, Fraud detection, Toxicity detection, HIPAA |
| **Deployment** | On-premise or Private Cloud preferred |
| **Channels** | Voice, Digital, SMS |

**Note on Deployment:** During the Dec 2025 demo, Smallest.ai presented three deployment options (on-premise, private cloud, SaaS) and explained that on-premise deployment would require A100/H100 GPUs for latency optimization. MetLife expressed preference for on-premise/private cloud but has not explicitly confirmed GPU infrastructure plans.

### Demo Delivered (Dec 2025)

- **Dental Pre-Claim Agent** demo built specifically for MetLife use case
- Ken Brown participated in live demo
- Agent handled: authentication (DOB, zip), provider lookup, procedure inquiry, network status, cost estimate
- Response times demonstrated: 53ms SLM, 500-600ms total agent response

## Opportunity Details (for AWS Partner Central)

| Field | Value |
|-------|-------|
| **Opportunity Type** | Net New Business |
| **Delivery Model** | SaaS or PaaS |
| **Use Case** | AI Machine Learning and Analytics |
| **Expected Monthly AWS Revenue** | $5,000 (early stage estimate) |
| **Target Close Date** | 2026-06-30 |
| **Customer Business Problem** | MetLife is exploring conversational AI to enhance claimant experience across Group Life/Annuity FNOL, Dental Pre-Claim (coverage summaries, out-of-pocket estimates), Dental Post-Claim (EOB explanation), and Outbound calling. Key goals: improve FCR, reduce AHT, increase NPS/CSAT. Requires integration with Genesys Cloud and Salesforce, HIPAA compliance, and on-premise/private cloud deployment options. Demo completed Dec 2025; MetLife in early exploration phase with internal alignment needed. |

---
*Last Updated: January 28, 2026*
*Sources: Email thread, Granola meeting notes, MetLife use case document (Oct 2025)*
