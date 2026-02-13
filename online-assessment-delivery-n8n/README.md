# 🧩 Online Assessment Delivery -n8n
#### Production-Grade Automation Pipeline  
## Report Delivery Orchestration – Google Sheets → WhatsApp API (n8n)

Distributed automation pipeline responsible for reliable and traceable report delivery based on structured datasets stored in Google Sheets.

Designed and maintained as a production-grade orchestration layer within a self-hosted infrastructure.

---

## ⚙️ Overview

Self-hosted **n8n orchestration layer** consuming structured data via **Google Sheets API (OAuth 2.0)**, performing payload validation, state control, REST integrations, automated WhatsApp delivery, and internal operational notifications.

Architecturally decoupled from the upstream data pre-processing (staging) layer.

**End-to-end ownership:** architecture, deployment, integration and production reliability.

---

## 🧠 Problem

Need for reliable, idempotent and traceable report delivery:

- Generated in Google environment  
- Integrated with WhatsApp-based CRM  
- Duplicate prevention  
- State tracking  
- Automated consultant notification  
- Production reliability guarantees  

---

## 🛠 Solution

Event-driven orchestration via n8n implementing:

- Structured data ingestion (Sheets API)
- Payload validation & normalization
- User upsert via REST API
- Automated personalized report delivery
- Internal notification workflow
- State tracking & duplicate prevention
- Conversational workflow handoff
- Async control and retry strategy

---

## 🏗 Architecture

- Staging Layer (Google Sheets – structured dataset)
- Controlled trigger (polling/API-based)
- Conditional routing (Switch logic)
- RESTful integrations (HTTP Request nodes)
- WhatsApp API delivery (external provider)
- Retry + async execution control (Wait node)
- Handoff to conversational workflow layer

**Event-consistent and idempotent design.**

---

## 🔬 Engineering Practices

- Decoupled orchestration layer  
- State-aware execution model  
- Idempotent processing  
- Defensive payload sanitation  
- Conditional routing  
- Controlled retry strategy (5xx handling)  
- Rate-limit aware throttling  
- Item-based loop execution  
- Modular workflow design  
- Failure isolation  

---

## 🎯 Scope

### ✅ Includes
- Delivery orchestration layer  
- REST API integrations  
- State & duplicate control  
- Automated internal notifications  
- Production reliability control  

### ❌ Excludes
- Data pre-processing layer  
- Clinical/business decision logic  
- Conversational triage logic  

---

## 🛡 Operational Reliability

- Defensive sanitation (phone/name normalization)
- Controlled retry on transient failures
- Throttling to prevent API rate limits
- Execution tracking per item
- Self-hosted controlled environment

---

## 🚀 Status

✅ In production  
Self-managed infrastructure

---

## 🧱 Tech Stack

- n8n (self-hosted automation engine)
- Google Sheets API (OAuth 2.0)
- RESTful API integrations
- WhatsApp API (external provider)
- Self-managed VPS infrastructure

*Sensitive configuration omitted.*
