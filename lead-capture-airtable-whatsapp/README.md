# 📥 Lead capture — Airtable + WhatsApp alert

**Status:** 🟢 Production

A website form posts to an n8n webhook. The lead is normalized, created or updated in Airtable (no duplicates), and the sales team receives a WhatsApp alert in seconds.

`Webhook → normalize fields → Airtable upsert → format alert → WhatsApp (Evolution API)`

| File | |
|---|---|
| `workflow.json` | 5 nodes |
