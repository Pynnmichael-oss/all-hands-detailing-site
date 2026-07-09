# Review Checklist — Placeholders to Confirm with Owner

This is a running log of every placeholder fact/copy in the site. Add a line here
**as each placeholder is written**, grouped by page. Nothing on this list should be
treated as fact-checked or ready for real customers until the owner confirms it and
the line is checked off.

## Global
- [ ] Business name/branding, logo, and colors — currently a neutral navy/charcoal
      placeholder palette in `css/` `:root` variables.
- [ ] Contact phone number and email — placeholder throughout.
- [ ] Service area radius (Tulsa metro) — placeholder distance/zip list.
- [ ] Business hours / availability — placeholder.

## Home
- [ ] Hero headline/value prop copy — placeholder, owner to rewrite.
- [ ] Testimonials — placeholder text, clearly marked as fake in an HTML comment and
      visually (e.g. "sample testimonial" label).

## Services
- [ ] Package tiers (interior / exterior / full detail / ceramic coating & PPF) —
      names and inclusions are placeholder.
- [ ] Pricing for every tier — placeholder numbers only.
- [ ] Ceramic coating / PPF deposit policy (~30% pattern) — paraphrased placeholder,
      original wording, not copied from any competitor/related-entity site.
- [ ] Standard detail/tint deposit policy (~$50 pattern) — paraphrased placeholder,
      original wording.

## Gallery
- [ ] All images — Higgsfield-generated only, not real business photos. Confirm
      owner is fine with AI-generated imagery for the demo, and swap for real photos
      once available.

## About
- [ ] Bio / mission / story copy — placeholder, owner to rewrite entirely.

## Contact
- [ ] Formspree endpoint ID — placeholder until a real Formspree (or equivalent)
      account exists for the business.
- [ ] Service area note — placeholder radius/wording.

## Policies (Services page or footer/FAQ)
- [ ] Rain-day / reschedule policy — paraphrased placeholder, original wording, not
      copied from any competitor/related-entity site.
- [ ] Cancellation policy — placeholder if/when added.

## Infrastructure
- [ ] `CNAME` — not active yet; add once a domain is secured (see CLAUDE.md §11).
- [ ] Higgsfield API key — needs a real key in local `.env` before asset generation
      script can run (never committed, never client-side).
