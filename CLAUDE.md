# All Hands Mobile Detailing — Website (Demo Build)

> This file is the build brief for Claude Code. Read it fully before scaffolding anything.
> This is a **demo build**, not yet reviewed by the business owner. Every business-specific
> fact (pricing, hours, phone, address, policy wording) is a **placeholder**
> until the owner confirms it. Do not present anything in this repo as fact-checked.
> **Confirmed so far (2026-07-16):** the real logo (see §0) and the service scope —
> **Mobile Detailing + Window Cleaning only**. Ceramic coating, PPF, transportation,
> and moving services are permanently out of scope; do not re-add them.

## 0. Working in This Repo (read first)

**Commands** — there is no build step, bundler, linter, or test suite; the site is plain
static HTML/CSS/JS served as-is:
- Preview locally: `python3 -m http.server` from the repo root (or open the HTML files
  directly — all internal links are relative).
- Regenerate all AI imagery: `npm run generate-assets` (needs the global `higgsfield`
  CLI, authenticated via `higgsfield auth login` — see §6).
- Regenerate specific images: `node scripts/generate-assets.js <filename>.png ...`
- Visual check without a browser window: `google-chrome --headless --disable-gpu
  --window-size=1280,900 --screenshot=/tmp/shot.png file://$PWD/index.html`

**Architecture:**
- Five pages at repo root (`index`, `services`, `gallery`, `about`, `contact`), one
  shared stylesheet (`css/styles.css`), one script (`js/main.js`).
- **No templating** — the header/nav, footer, and favicon `<link>` block are duplicated
  verbatim in every page. Any change to those blocks must be applied to all five files.
- All brand colors/spacing live in `:root` custom properties at the top of
  `css/styles.css`; change theme there only.
- `js/main.js` does two things: mobile nav toggle (`.nav-toggle`/`.site-nav.is-open`)
  and a lightbox built at runtime from any element carrying `data-lightbox`.
- Real brand assets: `assets/logo/` (black + white logo variants — header/footer use
  the **white** one because both bars are navy) and `favicon.ico` /
  `apple-touch-icon.png` / `icon-512.png` at repo root.
- AI-generated placeholder imagery lives in `assets/generated/`, produced by
  `scripts/generate-assets.js` (prompt list lives in that file). `public/` is an
  untracked drop-zone for raw files from the owner — not referenced by the site.

**Placeholder protocol (the one hard rule):** every unconfirmed business fact in the
HTML carries a `<!-- PLACEHOLDER: confirm with owner — ... -->` comment **and** a
matching line in `REVIEW-CHECKLIST.md`, added as you write it, not batched later.
When a fact gets confirmed, move/mark its checklist line as confirmed rather than
deleting it.

## 1. Context (unconfirmed, gathered via web research)
- Business: mobile auto detailing, Tulsa, OK — works at the customer's location.
- A related entity called "All Hands" (the "people's company") also markets window washing
  and broader home/lifestyle services. ~~Scope for this site is auto detailing only~~
  **Superseded 2026-07-16: scope is Mobile Detailing + Window Cleaning.** "The People's
  Company" is part of the official logo lockup and appears as a footer tagline only.
- A related domain showed a deposit pattern: ~$50 non-refundable deposit for standard
  detailing/tint, ~30% non-refundable deposit for ceramic coating/PPF. Treat this as a
  *plausible placeholder pattern only* — do not present as this business's actual policy,
  and do not copy any competitor/related-entity T&C language verbatim. Paraphrase in
  original wording and mark for confirmation.
- Same source material implies a rain-day policy (customer's discretion to reschedule) —
  same caveat: placeholder, original wording, marked for confirmation.

## 2. Tech Stack
- Static HTML/CSS/JS. No framework, no build step.
- Vanilla JS for mobile nav, form handling, and gallery lightbox.
- Hosting: GitHub Pages (root or `/docs` — your call; root is simpler, note the choice in
  the PR/commit description).

## 3. Repo Setup
- Repo: `Pynnmichael-oss/all-hands-detailing-site` (already created on GitHub, cloned locally).
- Enable GitHub Pages from `main`.
- Internal links must be **relative**, never hardcoded to a `/repo-name/` subpath, so the
  site survives a future move to a custom domain / Netlify without link rewrites.
- Add a `CNAME` placeholder at repo root — not an active file yet, just a commented note
  (e.g. `CNAME.example` or a `# CNAME` section in `README.md`) explaining that a real
  `CNAME` file gets added once a domain is secured.
- Add a `.gitignore` covering `.env`, `node_modules/`, and any local generation cache.

## 4. Site Structure
- **Home** — hero, value prop, primary CTA (book/contact), trust signals (placeholder
  testimonials, clearly marked as placeholder in an HTML comment and visually distinct
  enough that no one mistakes them for real reviews).
- **Services** — package tiers: interior / exterior / full detail / window cleaning
  (ceramic coating & PPF dropped from scope 2026-07-16). Placeholder pricing throughout.
- **Gallery** — before/after-style imagery, Higgsfield-generated only (see §6). No scraped
  real photos from the business's social accounts.
- **About** — placeholder bio/mission copy, marked for owner rewrite.
- **Contact** — working form (see §7) + Tulsa-metro service area note (placeholder radius).
- **Policies** — can live on Services page or a footer/FAQ block. Paraphrased placeholder
  deposit + rain-day policy, original wording, marked for confirmation. Do not copy any
  competitor or related-entity site's policy language.

## 5. Content Rules
- Every placeholder fact gets a visible marker in the source:
  `<!-- PLACEHOLDER: confirm with owner — [what needs confirming] -->`
- Log every single one of these in `REVIEW-CHECKLIST.md` at the repo root as you add them —
  don't batch this at the end, add each line as you write the page that contains it. A
  starter version of this file is included below (§10) — extend it, don't replace it.

## 6. Visual Assets — Higgsfield
- Do not use real business photos for this demo.
- `scripts/generate-assets.js`: build-time script only, never client-side.
  - **Actual implementation note:** uses the `higgsfield` CLI (installed globally
    on this machine, `flux_kontext` model) rather than the `@higgsfield/client`
    npm SDK originally planned. Auth is via `higgsfield auth login` (device/browser
    login, session stored by the CLI), not an API key in `.env`. No secrets are
    read from or written to `.env` by this script. Re-run with
    `npm run generate-assets`, or regenerate specific files with
    `node scripts/generate-assets.js <filename>.png ...`.
  - Submits generation jobs, downloads finished images into `/assets/generated/`.
  - Needed assets: 1–2 hero images, 3–4 before/after-style pairs for the gallery, a small
    set of service icons/imagery for the Services page.
  - Run this locally (you'll need a real Higgsfield API key in your own `.env` — I don't
    have one in this environment). Commit only the resulting image files, not the script's
    intermediate/job-status output.

## 7. Contact Form
- GitHub Pages has no backend, so use a static-friendly form POST service for now.
- Default choice unless you tell Claude Code otherwise: **Formspree** (free tier, no backend
  needed, easy to swap later). Note in `REVIEW-CHECKLIST.md` that the form endpoint ID is a
  placeholder until a real Formspree (or equivalent) account is created for the business.
- When migrating to Netlify later, swap to a native Netlify Forms `data-netlify="true"`
  attribute — leave a commented note in the form markup pointing at this.

## 8. Design Direction
- Clean, modern, mobile-first, fast-loading. No heavy JS frameworks, no bloated fonts.
- No confirmed logo or brand colors yet — use a neutral, professional placeholder palette
  (deep navy/charcoal + one clean accent color) that's trivial to swap via CSS custom
  properties once real branding exists. Put all brand colors in `:root` variables in one
  place, not scattered inline.
- Consult the frontend-design skill/reference for type scale and layout choices — avoid a
  generic template look.

## 9. Build Order
1. Scaffold repo + folder structure (`/`, `/assets`, `/assets/generated`, `/scripts`, `/css`,
   `/js`).
2. Build page skeletons with placeholder content, all markers in place, shared nav/footer.
3. Write and run the Higgsfield asset-generation script; populate `/assets/generated/`.
4. Wire up the contact form (Formspree), finalize policy/FAQ copy, cross-link nav on every
   page, and do a pass for mobile responsiveness + basic accessibility (alt text, contrast,
   focus states).
5. Deploy to GitHub Pages; confirm the live URL works on both mobile and desktop.
6. Finalize `REVIEW-CHECKLIST.md` — every placeholder from every page, in one list, before
   this goes live for real.

## 10. `REVIEW-CHECKLIST.md` — starter (extend this, don't replace it)
See the companion file. Add a line for every placeholder as you create it, grouped by page.

## 11. Migration Notes (later, not now)
- Domain secured → add real `CNAME` file, update GitHub Pages settings.
- Netlify migration → swap Formspree for native Netlify Forms.

## 12. Things this environment could NOT do, that you (Claude Code) need to handle
- Actual GitHub repo creation / push — needs the user's authenticated `gh` CLI or git
  credentials.
- Higgsfield API calls — needs a real API key in a local `.env`; this chat session has no
  network access to higgsfield.ai and no key.
- Formspree account creation — needs the business owner's (or Michael's) email to set up a
  real endpoint; use a clearly-fake placeholder ID until then.
