# 🧾 Fiscal XML integration (SIEG)

**Status:** 🟠 In development (waiting for API credentials)

Diagnostics to download fiscal XML documents (NF-e) through the SIEG API, built to test each authentication mode safely before production: summaries never print secrets, JWTs or XML content.

| File | What it does | Status |
|---|---|---|
| `a-diagnostic-api-key.json` | Download test with API key | Executed |
| `b-diagnostic-jwt.json` | JWT generation + single XML download | Draft: waiting for ClientId / SecretKey |
| `helper-log-diagnostic.json` | Records each diagnostic result | Helper |
| `client-download-xmls.json` | Client download flow | In development |
