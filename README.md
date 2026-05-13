# TRIGR · Vieroots Performance OS — UI Prototype

Static HTML + CSS + vanilla JS prototype of the TRIGR app, covering all 12 pages from the project brief. Designed mobile-first with a luxe desktop dashboard layout.

## Files

```
trigr/
├── index.html        Dashboard (Home)
├── workout.html      $1 Fitness Club / AI Workouts
├── scan.html         Face Scan (Binah.ai / rPPG)
├── maia.html         MAIA — AI Coach
├── coach.html        Real Coach Booking (calendar UI)
├── eplimo.html       EPLIMO (Vieroots-only genetic sync)
├── health.html       Health Tracker (Bio Age, HIA, vitals)
├── diet.html         Nutrition (DNA-tuned meal plans)
├── store.html        Vieroots Store
├── community.html    Community feed + events + leaderboard
├── upgrade.html      Plans — Free / Plus / Pro (₹0/₹649/₹999 /mo)
├── profile.html      Profile + Rewards + Settings
├── styles.css        Shared design system (responsive)
├── icons.js          SVG icon sprite (~50 line icons)
└── _shell.html       Sidebar/bottom-nav reference fragment
```

## Brand

- **Primary:** `#FF6B2C` (Trigr orange)
- **Luxe accent:** `#D4AF7A` (champagne gold) — used on Pro tier, rewards, featured cards
- **Surface:** `#0A0908` (deep near-black, slightly warm)
- **Text:** `#F5F0EA` (cream)
- **Type:** Orbitron (display / numerals) + Inter (body)

## Responsive behaviour

- `≥ 1024px` — left sidebar nav + multi-column dashboard
- `768–1023px` — single-column with bottom nav
- `< 768px` — mobile app shell with bottom nav

No build step required. Just open `index.html` in a browser, or serve the folder over HTTP.

## Local preview

```bash
cd trigr
python3 -m http.server 5174
# open http://localhost:5174
```

## Hand-off notes for developer

- **Stack-agnostic.** All pages are static; port to Next.js / React / Vue as needed.
- **Icon system.** `icons.js` injects an SVG sprite once. Use `<svg class="ic"><use href="#i-NAME"/></svg>` — 50 icons available.
- **Design tokens** are CSS variables in `:root` at the top of `styles.css`.
- **EPLIMO is Vieroots-only** (Section 9.3 of brief) — the connect zone says "Sign in with Vieroots", not "Upload report". 23andMe / AncestryDNA / VCF / PDF are explicitly not supported.
- **AI Coach is MAIA** everywhere — never "AI Coach" generically.
- **Pricing is monthly subscription** — Free / Plus / Pro at ₹0 / ₹649 / ₹999.
- Razorpay is the suggested payment integration (Indian market).

## Source brief

See `TRIGR_PROJECT_BRIEF.md` for full product spec.
