# 📩 Gmail Billing Automation (n8n)

Automated pipeline for extracting invoice data from Gmail, storing PDFs in Drive, and structuring payment metadata in Google Sheets.

---

## 🎯 What This System Does

- 📥 Reads incoming emails
- 📎 Extracts PDF attachments (if available)
- ☁️ Uploads files to Drive
- 📊 Stores structured metadata in Google Sheets
- 🔍 Extracts:
  - Due date
  - Payment amount
  - Barcode
  - PIX copy-and-paste code
- 🔀 Separates emails with and without attachments
- 🧾 Handles multiple PDFs per email

---

## ✅ Implemented

- Gmail trigger ingestion
- PDF extraction & multi-file handling
- Drive storage with ID tracking
- Structured Sheet schema
- Idempotent processing (by DRIVE_FILE_ID)
- Switch logic (PDF vs body-only emails)
- Regex parsing for:
  - Due date
  - Amount
  - Barcode
  - PIX code

---

## 🚧 In Progress

- AI-assisted email classification
- Payment prioritization suggestions
- Smart labeling (spam / important / financial)
- Notification control logic
- User-facing assistant for financial inbox management

---

## 🏗 Simplified Architecture

Gmail  
→ Attachment / Body Parser  
→ Drive Storage  
→ Metadata Extraction (Regex Layer)  
→ Google Sheets (Structured Schema)  
→ Action Layer (Labels / Notifications / Future AI)

---

## 📊 Sheet Schema

DRIVE_FILE_ID  
EMAIL_ID  
DATA_EMAIL  
HORA  
NOME  
REMETENTE  
CORPO_DA_MENSAGEM  
LINK_PDF  
VALOR  
VENCIMENTO  
CODIGO_BOLETO  
PIX  
N_DOCUMENTO  
REGISTRO_LOG  

---

## 🎥 Demo Video

Full workflow demonstration available on LinkedIn:

🔗 [Watch Demo](LINK_AQUI)

---

## 🧠 Architectural Focus

- Deterministic processing
- Structured ETL pattern
- Modular flow design
- Future AI integration layer
- Production-oriented automation
