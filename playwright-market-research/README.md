# 🎭 Playwright market research

**Status:** 🟠 In development

Browser automation with Playwright for market research on public social profiles. Runs in a Docker container with a visible Chromium (noVNC) and a persistent browser profile, so sessions and cookies are handled manually and safely.

## Pipeline

1. **Session** — opens the persistent browser profile in noVNC for manual login and cookie consent
2. **Timeline** — opens a public profile, captures bio and post count, scrolls the timeline and collects links to posts, reels and collaborations → `outputs/<profile>.json`
3. **Posts** — opens each selected post and captures raw text, lines and meta tags → `outputs/<profile>-posts-raw.json`
4. **Next** — structure the raw data and analyze positioning, content themes and frequency

The scripts live on the research server and will be published here once the extraction is stable.
