# Atlantic Subsurface Data Hub – Spectacular (static) site (log‑first)

This is a static, single‑page site (HTML/CSS/JS) designed for GitHub Pages.

## Focus
**Well logs first** (LAS/DLIS/PDF → clean digital), strengthened with **core + geology**, then aligned to **static & dynamic reservoir modeling** workflows.

## What’s in this version
- **Hero video background** (local file: `assets/hero.mp4`) with poster fallback
- Services + workflow + case‑study layout
- A **log‑heavy visuals mix** (wireline tools, well log examples, core photo, modeling diagram)
- Optional redaction strips on example screenshots

## Upload to GitHub (no installs)
1. Open your repo on GitHub
2. Click **Add file → Upload files**
3. Drag‑drop **everything from this zip** into the repo root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (important)

Commit → GitHub Pages redeploys automatically.

## Swap the hero video (optional)
Replace `assets/hero.mp4` with your own looped MP4 (recommended: 6–12 seconds, muted, 720p or 1080p).
The page will still look good even if the video fails to load (it uses the poster + gradients).

## Visual credits (built‑in links in footer)
- **USGS public domain**: LI1LOG, Permian Basin well log (via Wikimedia Commons)
- **Wikimedia Commons**: wireline tools (CC BY‑SA 4.0), core samples (CC BY 2.0), modeling diagram (CC BY‑SA 4.0)
- **Unsplash**: geology texture (Unsplash License)

If you want, I can also make it 100% self‑contained (no external images at all).


## Techlog / Petrel screenshots
This package includes **illustrative placeholders** (`assets/techlog-illustrative.svg`, `assets/petrel-illustrative.svg`).
If you want to show real screenshots, replace those files with your own images that you are allowed to publish
(e.g., screenshots from your own licensed software + your own projects, with sensitive identifiers blurred).

Tip: keep filenames the same so you don’t need to edit HTML.


## Images & licensing notes
- This site includes a Petrel screenshot from Wikimedia Commons (CC BY-SA 3.0). See the in-page credits.
- Generated example plots are included under `assets/plot-*.png` and can be replaced with your own plots.
- If you add proprietary software screenshots (e.g., from your own licensed Techlog/Petrel), ensure you have the right to publish them and redact any sensitive identifiers.
