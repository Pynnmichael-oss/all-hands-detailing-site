# Jobber Online Booking — Integration Guide

The Contact page (`contact.html`) has a prepared slot for Jobber's online
booking embed: the `<div id="jobber-booking" class="booking-embed">` container
near the top of the page. Until the real embed exists, it shows a fallback
"Request a Booking" button that anchors down to the Formspree contact form, so
nothing on the site is broken in the meantime.

## What the owner needs to do

1. **Create a Jobber account** — the online booking feature requires the
   **Core plan or higher**.
2. **Build a request form in Jobber** with a **booking question type enabled**
   (either *assessment booking* or *job booking*, depending on whether visits
   should be quoted first or booked directly).
3. **Copy the iframe embed code** from the form's settings in Jobber
   (Jobber provides this under the request form's sharing/embed options).
4. **Paste that embed code into `contact.html`**, inside the
   `#jobber-booking` div, replacing the placeholder fallback link and the
   "coming soon" note (keep the div itself — its `.booking-embed` class
   provides the responsive sizing).

## Why this approach

- **No API key, no backend, no build step.** The embed is a client-side
  iframe that pulls live availability directly from Jobber — it works fine on
  GitHub Pages (and will keep working after a Netlify move).
- The site never handles booking data itself; everything happens inside
  Jobber's iframe.

## Open decision (see REVIEW-CHECKLIST.md → Functional Blockers)

Once Jobber booking is live, decide whether the Formspree form stays for
general inquiries alongside it, or gets removed in favor of Jobber-only
intake.

## Related CTA wiring

The "Get a Quote" buttons on `services.html` point at
`contact.html#jobber-booking`, so they'll land visitors directly on the
booking embed once it's pasted in — no further changes needed there.
