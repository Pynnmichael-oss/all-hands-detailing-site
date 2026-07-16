# Review Checklist — All Hands Mobile Detailing Site

Last updated 2026-07-16. Two sections: CONFIRMED (safe to treat as fact) and OPEN
(still needs the owner before launch).

## CONFIRMED (2026-07-16)
- [x] Business name: All Hands Mobile Detailing
- [x] Scope: Mobile Detailing + Window Cleaning only (ceramic coating/PPF,
      transportation, and moving permanently dropped, not just hidden)
- [x] Address: 411 S Elgin Ave, Tulsa, OK 74120, United States (drop-off/pick-up)
- [x] Full Detail (Ext + Int): $200
- [x] Half Detail (Ext or Int): $125
- [x] "General service fees may apply" note
- [x] All Hands Membership: 6mo $1,350 / 12mo $2,700; 2 monthly visits, vehicle
      alternation allowed
- [x] Window Cleaning: $18/window, ext/int priced separately, 1st + reachable 2nd
      floor only
- [x] Logo received and integrated (black + white transparent variants, favicon set)

## OPEN — needs the owner before launch
- [ ] Phone number
- [ ] Email address
- [ ] Hours of operation / booking windows
- [ ] Real testimonials (Home page currently uses fake/sample entries, clearly marked)
- [ ] About page: mission/values copy, founding-story paragraph — currently generic
      placeholder text, not specific invented facts, but still needs an owner rewrite
- [ ] Owner/team photo — About page currently uses a neutral placeholder graphic
      (avatar/silhouette), not a real photo
- [ ] Trust-bar claims on Home ("Fully Insured", "Background-Checked," etc.) — currently
      asserted as placeholder; confirm these are actually true before launch
- [ ] Formspree — real account/endpoint needed, tied to the business's email
- [ ] Google Reviews — blocked until the business's Google Business Profile is
      confirmed/claimed by the owner. Plan is a third-party widget (Elfsight or
      similar, free tier), not a custom Places API build, since this is a static site
      with no backend. "What Customers Say" section currently reads from a local
      reviews.json with sample-tagged placeholder entries.
- [ ] Gallery images — 6 Higgsfield-generated placeholders (3 before/after pairs), not
      real photos of the business's work; replace once the owner provides real photos
      and grants usage rights
- [ ] Service-area radius wording on Contact page (currently "Tulsa metro," unconfirmed
      exact boundary)
- [ ] FAQ accordion answers — generic/process-based content; flag any that assume a
      specific policy (e.g. exact turnaround time) for owner confirmation
- [ ] Favicon/logo contrast check — confirm the white logo variant is actually used
      wherever the nav/footer background is dark, and black variant wherever light;
      spot-check after any future palette changes
- [ ] Analytics (none set up yet — confirm if wanted)
- [ ] Privacy policy / terms (none currently on the site — confirm if needed)
- [ ] Confirm no competitor or related-entity copy was used verbatim anywhere
      (policies, FAQ, comparison-style content were all written in original wording —
      spot-check against source material referenced in CLAUDE.md §1 before launch)

## Functional Blockers
- [ ] Jobber account created by owner (Core plan or higher)
- [ ] Jobber request/booking form built and embed code obtained
- [ ] Embed code pasted into `contact.html` `#jobber-booking` div (replacing the
      fallback "Request a Booking" link — see `docs/jobber-integration.md`)
- [ ] Decide: keep Formspree for general inquiries alongside Jobber booking, or
      fully replace it

## Migration (later, not blocking launch)
- [ ] Real CNAME once a domain is secured
- [ ] Swap Formspree → native Netlify Forms if/when moving to Netlify
