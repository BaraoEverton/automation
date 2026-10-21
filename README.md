# ⚙️ Automation

Self-hosted automation systems built with n8n, REST APIs, Google Apps Script and JavaScript.

## Projects

| Project | Description | Status |
|---|---|---|
| [Online Assessment Delivery](online-assessment-delivery-n8n) | Report delivery orchestration: Google Sheets → WhatsApp API, idempotent and traceable | 🟢 Production |
| [Online Assessment Preprocessing](online-assessment-preprocessing-gas) | Data preprocessing layer in Google Apps Script | 🟢 Production |
| [Lead capture — Airtable + WhatsApp](lead-capture-airtable-whatsapp) | Webhook → Airtable upsert → instant WhatsApp alert to the sales team | 🟢 Production |
| [Content radar — trends](content-radar-trends) | Scheduled radar of trends and curiosities with scoring and enrichment | 🔵 Working |
| [RSS radar — market pain points](rss-pain-points-radar) | Monitors blogs, app reviews and communities; AI turns news into content ideas | 🔵 Working |
| [Central error alert](error-alert-central) | Error trigger for every workflow → WhatsApp alert | 🟡 Built, not yet active |
| [Inventory control via WhatsApp](inventory-control-whatsapp) | Adapting the Vita conversational architecture to stock control | 🟠 In development |
| [Fiscal XML integration (SIEG)](fiscal-xml-integration-sieg) | Diagnostics to download fiscal XML documents via API key and JWT | 🟠 In development |

## 🧪 Labs

Early prototypes and experiments, kept separate from the projects above.

| Lab | What it explores |
|---|---|
| [Open Finance (Pluggy)](labs/open-finance-pluggy) | Authentication and transaction retrieval for financial reconciliation |
| [Playwright market research](labs/playwright-market-research) | Browser automation to collect public profile data for market research |
| [Gmail → Drive automation](labs/gmail-drive-automation) | Attachment routing between Gmail and Google Drive |

**Status legend:** 🟢 Production · 🔵 Working (validated, runs on demand) · 🟡 Built, not yet active · 🟠 In development

📄 [MIT License](LICENSE)

> Workflow files are sanitized exports: credentials, IDs, phone numbers, addresses and personal data were replaced with placeholders. Import in n8n and select your own credentials in the nodes marked `configure-in-your-n8n`.
