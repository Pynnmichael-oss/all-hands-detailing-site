# scripts/

`generate-assets.js` — build-time Higgsfield asset generation (see `CLAUDE.md` §6).

Uses the global `higgsfield` CLI (`flux_kontext` model), authenticated via
`higgsfield auth login` — no API key or `.env` involved. Never referenced
client-side.

- Regenerate everything: `npm run generate-assets`
- Regenerate specific files: `node scripts/generate-assets.js <filename>.png ...`

Outputs land in `assets/generated/`; commit the images, not any job-status output.
