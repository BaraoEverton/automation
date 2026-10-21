# 📰 Content radar — trends and curiosities

**Status:** 🔵 Working (validated in recent runs; activated on demand)

Runs 4× a day (or by webhook). Collects candidates from Wikipedia (featured content, "on this day"), Google News, Reddit, YouTube and science feeds, filters and scores each item, enriches it (license and sources), calculates a viral-potential score and saves the result to a content bank in Google Sheets, sending an alert with the best ideas.

`Schedule/Webhook → source list → fetch → read, filter & score → save → enrich (license, sources) → viral score → alert`

| File | |
|---|---|
| `workflow.json` | 12 nodes |
