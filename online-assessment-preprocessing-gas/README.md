# 🧩 Online Assessment Data Preprocessing Layer  
## (Google Apps Script | Data Pipeline | ETL)

Production-grade data preprocessing pipeline that transforms raw form submissions in **Google Sheets** into structured, validated and normalized datasets ready for orchestration (e.g., n8n).

Designed as a lightweight ETL / ingestion layer for automation architectures.

---

## ⚙️ Core Responsibilities

- 📥 Data ingestion (Google Sheets – raw input layer)
- 🧹 Data validation & normalization (date / phone / text sanitation)
- 🔁 State tracking to prevent reprocessing (deduplication / idempotency)
- 🧬 Deterministic token generation (unique identifiers for traceability)
- 📤 Structured staging output + delivery queue preparation

---

## 🏗 Architecture

Google Sheets (Raw Data Source)<br>
↓<br>
Google Apps Script (Scheduled ETL Job)<br>
↓<br>
Staging Layer (Structured Dataset)<br>
↓<br>
Queue Layer (Automation Handoff)<br>


---

## 🛠 Technical Practices

- Incremental processing (delta-based execution)
- State-aware control flow
- Idempotent data handling
- Deterministic ID generation
- Data sanitation & normalization
- Reverse iteration optimization
- Separation of concerns (raw vs staging vs queue)
- Scheduled execution (near real-time polling)

---

## 🎯 Scope

### ✅ Includes
- Data transformation layer
- Deduplication & state control
- Structured staging dataset
- Queue preparation for orchestration workflows

### ❌ Excludes
- Message delivery layer
- Conversational logic
- Business / clinical decision engine

---

## 🚀 Status

✅ Production environment  

---

## 🧱 Tech Stack

- Google Sheets (Data Ingestion Layer)
- Google Apps Script (ETL / Processing Layer)
- n8n (Workflow Orchestration – downstream)

