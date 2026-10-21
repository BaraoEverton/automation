# 📡 RSS radar — market pain points

**Status:** 🔵 Working (validated in recent runs; activated on demand)

Daily radar that reads RSS feeds from competitors' blogs, app-store reviews and the n8n community, normalizes everything, skips items already seen, and uses AI to turn relevant news into content ideas with validated sources. Ideas go to a review table; history prevents duplicates.

`Daily 07:00 → 5 RSS sources → normalize → merge → dedupe vs history → AI analysis → validate sources → save for review → log history`

| File | |
|---|---|
| `workflow.json` | 24 nodes |
