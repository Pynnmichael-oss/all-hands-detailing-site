# Review Checklist — Placeholders to Confirm with Owner

This is a running log of every placeholder fact/copy in the site. Add a line here
**as each placeholder is written**, grouped by page. Nothing on this list should be
treated as fact-checked or ready for real customers until the owner confirms it and
the line is checked off.

## Confirmed
- [x] **Logo — CONFIRMED (2026-07-16).** Real logo files received and integrated:
      `assets/logo/all-hands-logo-black.png` / `all-hands-logo-white.png` (white
      variant used in header + footer against the navy background), plus
      `favicon.ico`, `apple-touch-icon.png`, and `icon-512.png` at repo root,
      wired into the `<head>` of all five pages. Footer carries the official
      "The People's Company" tagline as part of the brand lockup.
- [x] **Business address — CONFIRMED (2026-07-16).** 411 S Elgin Ave, Tulsa, OK
      74120 — shown in the footer contact column (with an embedded Google Map)
      and on `contact.html`.
- [x] **Service scope — CONFIRMED (2026-07-16).** The site covers **Mobile
      Detailing and Window Cleaning only**. Ceramic coating, PPF, transportation,
      and moving services are **permanently dropped from scope** — not pending
      owner confirmation. Do not re-add them.

## Global (in every page footer + `css/styles.css`)
- [ ] Brand colors — placeholder navy (`#101826`) / charcoal (`#2d333d`) /
      amber accent (`#d98324`) in `css/styles.css` `:root`; they match the logo
      reasonably well but exact brand values not confirmed by owner.
- [ ] Phone number — placeholder `(918) 555-0123` in every page footer and on
      `contact.html`.
- [ ] Email — placeholder `hello@allhandsdetailing.example` on `contact.html`.
- [ ] Business hours — placeholder "Mon–Sat, 8am–6pm" in every page footer and
      on `contact.html`.
- [ ] Service area radius — placeholder "Tulsa metro area" / "~25-mile radius
      of downtown Tulsa" in footers and on `contact.html`.
- [ ] Copyright line — placeholder "© 2026 All Hands Mobile Detailing" in every
      footer; confirm real legal entity name.

## Home (`index.html`)
- [ ] Hero headline/subhead — draft marketing copy, owner to confirm or rewrite.
- [ ] Trust bar claims (insured, background-checked) — confirm these are
      actually true before launch, currently placeholder assertions.
      ("Satisfaction Focused" and "We Come to You" are soft/confirmed;
      "Mobile or Drop-Off" was deliberately NOT used since drop-off service
      is unconfirmed.)
- [ ] Card eyebrow labels (Most Popular / Refresh / Membership / Home &
      Business, on Home and Services cards) — draft merchandising labels;
      confirm the owner agrees Full Detail is the flagship "Most Popular"
      tier.
- [ ] "Our Services" quick-glance cards — service names (Full Detail, Half
      Detail, All Hands Membership, Window Cleaning), one-line descriptions,
      and "From $X" starting prices are all draft placeholders mirroring
      `services.html` (which stays the source of truth for pricing).
- [ ] Four expanded service teaser sections — all four paragraphs are draft
      marketing copy; supporting images are Higgsfield-generated stock-style
      (reused from the gallery/hero set), not real photos of this business's
      work.
- [ ] Reviews (4) — fabricated samples in `assets/data/reviews.json`, rendered
      by `js/main.js` into the "What Customers Say" grid; each JSON entry is
      tagged SAMPLE DATA and each card shows a visible "SAMPLE — NOT A REAL
      REVIEW" tag. Must be replaced with real reviews (or removed) before launch.
- [ ] Google Reviews — **blocked until the business's Google Business Profile
      is confirmed/claimed by the owner**; plan is a third-party widget
      (Elfsight or similar, free tier), not a custom API build, since this is
      a static site with no backend. The widget embed slot is a commented TODO
      block in `index.html` next to `#reviews-grid`.
- [ ] Hero background image (`assets/generated/hero-01.png`, set via CSS on
      `.hero`) and highlight image (`assets/generated/hero-02.png`) are
      Higgsfield-generated stock-style images, not real photos of this
      business's work or vehicles. Must be swapped for real photos once the
      owner provides them and grants usage rights.

## Services (`services.html`)
- [ ] Four service tiers and their bullet inclusions (Full Detail, Half Detail,
      All Hands Membership, Window Cleaning — lineup updated 2026-07-16,
      replacing the earlier Interior/Exterior split) — names/inclusions/pricing
      are all placeholder draft content.
- [ ] Pricing: Full Detail $149, Half Detail $89, Membership $59/mo, Window
      Cleaning $99 — all placeholder numbers, not owner-confirmed.
- [ ] Half Detail definition — assumed "interior-only OR exterior-only,
      customer's choice"; confirm what the owner actually means by it.
- [ ] All Hands Membership — pricing model, billing cadence, and per-visit
      inclusions are entirely assumed draft content; confirm how the real
      membership works.
- [ ] FAQ accordion — answers use only already-logged placeholder info; the
      water/electricity answer (equipment/onboard water setup) and the job
      duration answer are kept generic and need owner confirmation, as does
      the membership answer (tied to the membership card above).
- [ ] Window Cleaning tier — confirm whether it covers home windows, business
      storefronts, or both, and what's included (screens, sills/tracks,
      interior + exterior).
- [x] ~~Confirm whether Ceramic Coating and PPF should be split into two separate
      packages/prices.~~ **Resolved 2026-07-16: ceramic coating & PPF are
      permanently out of scope** (see Confirmed section) — removed from the
      tier grid, deposit policy, meta descriptions, and all page copy.
- [ ] Deposit policy paragraph — paraphrased, original-wording placeholder based
      on a pattern observed at a related domain (~$50 deposit applied to total).
      NOT confirmed as this business's actual policy. (Ceramic/PPF 30% deposit
      clause removed with the scope change.)
- [ ] Rain-day policy paragraph — paraphrased, original-wording placeholder, not
      confirmed as this business's actual policy.
- [ ] Four tier icons (`assets/generated/icon-*.png`, incl. new
      `icon-window-cleaning.png`) are Higgsfield-generated stock-style
      illustrations, not real branded imagery. Fine to keep as generic icons,
      or swap once the owner has real branding.

## Gallery (`gallery.html`)
- [ ] All 6 gallery images (3 before/after pairs: Interior Deep Clean, Full
      Detail, Window Cleaning — `assets/generated/gallery-*.png`; the weak
      Exterior Wash & Wax pair was cut 2026-07-16) are Higgsfield-generated
      stock-style images, wired to a click-to-enlarge lightbox (`js/main.js`).
      These are NOT real photos of this business's work or real customer
      vehicles — they must be swapped for real before/after photos once the
      owner provides them and grants usage rights.

## About (`about.html`)
- [ ] Entire bio/mission copy — placeholder draft text, owner to rewrite
      completely before launch.
- [ ] Mission & values section and founding-story ("How We Got Started")
      section — both are generic placeholder drafts (added 2026-07-16); still
      open, unconfirmed items pending the owner's real story and wording.
- [ ] Owner/team photo — open item pending the owner. The "Meet the Owner"
      block ships with a neutral gray "Photo coming soon" placeholder slot,
      deliberately NOT a stock or AI-generated photo of a person; only a real
      photo provided by the owner goes here. Bio text in that block is also
      placeholder.

## Contact (`contact.html`)
- [ ] Formspree endpoint — placeholder `https://formspree.io/f/xxxxxxxx`. Needs
      a real Formspree (or equivalent) account created for the business before
      the form will actually deliver submissions.
- [ ] Netlify Forms migration note left as an HTML comment near the `<form>`
      tag for when the site moves off GitHub Pages (see CLAUDE.md §7/§11).
- [ ] Service area note — placeholder "~25-mile radius of downtown Tulsa".
- [ ] Contact info block (phone/email/hours) — same placeholders as global.
- [ ] "Service Interested In" dropdown — options updated 2026-07-16 to match
      the new lineup (Full Detail, Half Detail, All Hands Membership, Window
      Cleaning); confirm along with the tier names.

## Policies (currently on `services.html`)
- [ ] Deposit policy — see Services section above.
- [ ] Rain-day policy — see Services section above.
- [ ] Cancellation policy — not yet written; add if the owner wants one.

## Infrastructure
- [ ] `CNAME` — not active yet; add once a domain is secured (see CLAUDE.md §11).
- [x] Higgsfield asset generation — `scripts/generate-assets.js` uses the
      `higgsfield` CLI (not the `@higgsfield/client` npm SDK), authenticated via
      `higgsfield auth login` on this machine rather than an API key in `.env`.
      Re-run with `npm run generate-assets`, or regenerate specific files with
      `node scripts/generate-assets.js <filename>.png ...`.
