# Review Checklist — Placeholders to Confirm with Owner

This is a running log of every placeholder fact/copy in the site. Add a line here
**as each placeholder is written**, grouped by page. Nothing on this list should be
treated as fact-checked or ready for real customers until the owner confirms it and
the line is checked off.

## Global (in every page footer + `css/styles.css`)
- [ ] Brand colors/logo — placeholder navy (`#101826`) / charcoal (`#2d333d`) /
      amber accent (`#d98324`) in `css/styles.css` `:root`. No real logo yet.
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
- [ ] Testimonials (3) — fabricated samples, not real reviews. Marked with an
      HTML comment and a visible "SAMPLE — NOT A REAL REVIEW" tag on each card.
      Must be replaced with real reviews (or removed) before launch.
- [ ] Hero background image (`assets/generated/hero-01.png`, set via CSS on
      `.hero`) and highlight image (`assets/generated/hero-02.png`) are
      Higgsfield-generated stock-style images, not real photos of this
      business's work or vehicles. Must be swapped for real photos once the
      owner provides them and grants usage rights.

## Services (`services.html`)
- [ ] Four package tiers and their bullet inclusions (Interior Detail, Exterior
      Detail, Full Detail, Ceramic Coating & PPF) — names/inclusions/pricing are
      all placeholder draft content.
- [ ] Pricing: Interior $89, Exterior $79, Full Detail $149, Ceramic Coating &
      PPF from $599 — all placeholder numbers, not owner-confirmed.
- [ ] Confirm whether Ceramic Coating and PPF should be split into two separate
      packages/prices.
- [ ] Deposit policy paragraph — paraphrased, original-wording placeholder based
      on a pattern observed at a related domain (~$50 standard / ~30% ceramic
      coating & PPF). NOT confirmed as this business's actual policy.
- [ ] Rain-day policy paragraph — paraphrased, original-wording placeholder, not
      confirmed as this business's actual policy.
- [ ] Four tier icons (`assets/generated/icon-*.png`) are Higgsfield-generated
      stock-style illustrations, not real branded imagery. Fine to keep as
      generic icons, or swap once the owner has real branding.

## Gallery (`gallery.html`)
- [ ] All 8 gallery images (4 before/after pairs: Interior Deep Clean, Exterior
      Wash & Wax, Full Detail, Ceramic Coating — `assets/generated/gallery-*.png`)
      are Higgsfield-generated stock-style images, wired to a click-to-enlarge
      lightbox (`js/main.js`). These are NOT real photos of this business's work
      or real customer vehicles — they must be swapped for real before/after
      photos once the owner provides them and grants usage rights.

## About (`about.html`)
- [ ] Entire bio/mission copy — placeholder draft text, owner to rewrite
      completely before launch.

## Contact (`contact.html`)
- [ ] Formspree endpoint — placeholder `https://formspree.io/f/xxxxxxxx`. Needs
      a real Formspree (or equivalent) account created for the business before
      the form will actually deliver submissions.
- [ ] Netlify Forms migration note left as an HTML comment near the `<form>`
      tag for when the site moves off GitHub Pages (see CLAUDE.md §7/§11).
- [ ] Service area note — placeholder "~25-mile radius of downtown Tulsa".
- [ ] Contact info block (phone/email/hours) — same placeholders as global.

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
