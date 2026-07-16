# All Hands Mobile Detailing — Website

> Build brief for Claude Code. This supersedes the original demo-only brief — several
> facts below are now CONFIRMED by the owner (as of 2026-07-16), not placeholders.
> Items still marked PLACEHOLDER remain unconfirmed and must stay visibly marked in
> code and tracked in REVIEW-CHECKLIST.md until the owner signs off.

## 1. Business Facts (CONFIRMED 2026-07-16)
- Name: All Hands Mobile Detailing ("The People's Company" is the parent brand tagline
  — used subtly in the footer only, not repeated site-wide).
- Location: 411 S Elgin Ave, Tulsa, OK 74120, United States — drop-off/pick-up address,
  embedded in the footer map.
- Scope: **Mobile Detailing + Window Cleaning only.** Ceramic coating/PPF, transportation,
  and moving are explicitly OUT of scope — do not reintroduce them anywhere in copy, nav,
  or meta tags.

### Confirmed services & pricing
**Mobile Detailing** — mobile or drop-off/pick-up
- Full Detail (Exterior + Interior): $200
- Half Detail (Exterior OR Interior): $125
- Note: "General service fees may apply"

**All Hands Membership**
- 6 months: $1,350 / 12 months: $2,700
- Both include 2 monthly service visits; vehicles can be alternated monthly (one
  vehicle serviced per visit)

**Window Cleaning** — residential & offices
- $18 per window; exterior/interior priced separately
- Services 1st floor and reachable 2nd floor windows

### Still unconfirmed (keep placeholder-marked; see REVIEW-CHECKLIST.md)
Hours of operation, phone number, email, real testimonials, About page mission/founding
story specifics, owner photo, trust-bar claims (insured/background-checked), Formspree
real account, Google Business Profile connection.

## 2. Tech Stack
Static HTML/CSS/JS, no framework, no build step. Vanilla JS for nav, form handling,
gallery lightbox, and FAQ accordion. Hosted on GitHub Pages (`Pynnmichael-oss/all-hands-
detailing-site`), relative links only, portable to a future custom domain/Netlify move.

## 3. Brand Assets (CONFIRMED)
- Real logo received and processed: `assets/logo/all-hands-logo-black.png` (transparent,
  for light backgrounds) and `all-hands-logo-white.png` (transparent, for dark nav/
  footer). Favicon set generated (`favicon.ico`, `apple-touch-icon.png`, `icon-512.png`)
  and wired into all five pages' `<head>`.
- Visual identity direction: lean into the logo's bold, high-contrast, poster/screen-
  print style — sharper corners (not fully square, but less "bubbly" than default
  rounded-2xl), bold-weight display headings, normal-weight body text. Avoid generic
  soft-SaaS template look.
- Palette: navy/charcoal + one accent color, as CSS custom properties in `:root` for
  easy swapping once/if further brand guidance comes in.

## 4. Site Structure (current, post-overhaul)

**Home**
- Hero: logo, headline, high-contrast CTA button (fixed — was low-contrast against the
  blue hero background).
- Trust bar: 3-4 short badges (Fully Insured / Background-Checked / Satisfaction
  Focused / Mobile or Drop-Off) — PLACEHOLDER claims, marked for owner confirmation.
- "Our Services" quick-glance: 4 cards (Full Detail, Half Detail, Membership, Window
  Cleaning), each with SVG icon, one-liner, starting price, anchor-scrolls to its
  expanded section below.
- Expanded service sections (one per offering, alternating image/text layout): short
  teaser copy + image + "See full pricing & details" link to services.html anchor —
  NOT full pricing duplication; Services page stays the source of truth.
- "Why All Hands": SVG line icons (replaced emoji), matched to bullet meaning.
- "What Customers Say": reviews section reading from `assets/data/reviews.json`
  (currently sample-tagged placeholder entries); TODO slot commented in HTML for a
  third-party Google Reviews widget (Elfsight or similar) — see §7.
- FAQ accordion: generic booking/process questions, placeholder-marked where specifics
  are unconfirmed.
- Gallery teaser + final CTA banner.

**Services**
- Section IDs added (`#full-detail`, `#half-detail`, `#membership`, `#window-cleaning`)
  for Home-page anchor links.
- Tabbed/badge-based package cards (one card carries a "Most Popular" badge — Full
  Detail) with a real checklist format (checkmark + short phrase) instead of paragraphs.
- No ceramic coating/PPF tier (removed permanently, not just hidden).

**Gallery**
- 6 total images: 3 Before/After pairs. Layout is two stacked rows — "Before" row of 3
  on top, "After" row of 3 directly below, same column order per pair. Click-to-enlarge
  lightbox retained.

**About**
- Extended beyond the original single placeholder block: mission/values (2-3 short
  paragraphs, placeholder), founding-story paragraph (placeholder, generic — no invented
  specific facts), and a "meet the owner" block with a neutral placeholder photo slot
  (avatar/silhouette graphic or gray box — NOT a generated fake photo of a person).

**Contact**
- Formspree form (placeholder endpoint ID until a real account exists), Tulsa-metro
  service area note (placeholder radius).

**Footer** (all pages)
- 3 columns: Contact/Address + embedded Google Map (411 S Elgin Ave — real, safe to
  embed now) | Quick Links | Services (anchor links to Services page sections).
  Logo + "The People's Company" tagline above the columns, copyright bar below.

## 5. Higgsfield Asset Generation
`scripts/generate-assets.js`, official `@higgsfield/client` v2 Node SDK, credentials
from local `.env` (`HIGGSFIELD_API_KEY_ID` / `HIGGSFIELD_API_KEY_SECRET`, never
committed). Generates: 1-2 hero images, 3 before/after pairs (6 images — reduced from
the original plan of 4 pairs), and service-section supporting images. Re-run and trim/
regenerate individual images as needed rather than keeping weak results to hit a count.

## 6. Contact Form
Formspree (default choice), placeholder endpoint ID until the business has a real
account. Swap to native Netlify Forms on migration (see §9).

## 7. Google Reviews (in progress, blocked)
Plan: third-party widget (e.g. Elfsight), not a custom Places API build, since this is
a static site with no backend. Blocked until the owner confirms/claims the business's
Google Business Profile. Current state: "What Customers Say" section built against a
local `reviews.json` with sample-tagged placeholder entries and a commented TODO slot
for the eventual widget embed script.

## 8. Content & Placeholder Rules
Every unconfirmed fact gets `<!-- PLACEHOLDER: confirm with owner — [what] -->` in the
source AND a line in REVIEW-CHECKLIST.md, added as it's written, not batched at the end.
Confirmed facts (§1, §3) no longer need placeholder markers — update/remove old markers
on pricing, services, address, and logo since those are now real.

## 9. Migration Notes (later)
Domain secured → add real `CNAME`. Netlify migration → swap Formspree for native
Netlify Forms.

## 10. Open Environment Limitations
- GitHub push needs the user's authenticated `gh`/git locally.
- Higgsfield calls need a real key in local `.env`.
- Google Reviews widget needs the business's Google Business Profile to exist/be
  claimed, plus a decision on which widget provider to use.
- Formspree needs a real account tied to the business's email.
