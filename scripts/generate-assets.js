// Build-time Higgsfield asset generation — see CLAUDE.md §6.
// Run with: npm run generate-assets
//
// Uses the `higgsfield` CLI (not the @higgsfield/client npm SDK) so
// authentication is handled by `higgsfield auth login` (device/browser
// login) rather than an API key in .env. Never run this client-side;
// the CLI and its stored token never touch any browser-facing JS/HTML.

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile, mkdir } from 'node:fs/promises';

const execFileAsync = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(REPO_ROOT, 'assets', 'generated');

// Confirmed via `higgsfield model get flux_kontext`: accepts aspect_ratio
// (1:1, 4:3, 3:4, 16:9, 9:16) and prompt; input_images is optional, so it
// works as pure text-to-image. Re-check with the same command before
// swapping models.
const MODEL = 'flux_kontext';

// Shared style guidance: demo-site imagery only. Keep it generic/stock-like
// so nothing here could be mistaken for a real customer's vehicle or a real
// person, per CLAUDE.md §6.
const STYLE_SUFFIX =
  'bright commercial stock-photography style, clean studio-quality lighting, ' +
  'slightly idealized/stylized rendering rather than photojournalistic realism, ' +
  'the car has no visible manufacturer logo, badge, or emblem anywhere — grille and ' +
  'wheel-center badge areas are left blank or generic, no readable text anywhere in ' +
  'the frame, no visible license plates (plate area blank, removed, or blurred), ' +
  'no people, no human figures, nobody in the shot';

const ICON_STYLE_SUFFIX =
  'simple minimalist flat icon-style illustration, clean vector-like look, ' +
  'deep navy blue and warm amber orange color palette, plain background, no readable text';

const jobs = [
  // Hero images (1-2)
  {
    filename: 'hero-01.png',
    aspect_ratio: '16:9',
    prompt: `Wide landscape photo with professional mobile detailing equipment — coiled hoses, plain solid-color wash buckets with no printed labels or logos, microfiber towels, and polishing pads — in sharp focus in the foreground on a driveway. A car is visible in the soft-focus background, shown from the side/rear three-quarter angle only so no front grille or badge is in view. No people anywhere in the frame; unattended equipment only. ${STYLE_SUFFIX}`,
  },
  {
    filename: 'hero-02.png',
    aspect_ratio: '16:9',
    prompt: `Wide landscape close-up of a freshly detailed car's glossy exterior paint reflecting sunlight, water beading on the surface. ${STYLE_SUFFIX}`,
  },

  // Before/after gallery pairs (4)
  {
    filename: 'gallery-before-01.png',
    aspect_ratio: '4:3',
    prompt: `Photo of a generic sedan's interior before detailing — dusty dashboard, crumbs and clutter on the seats. ${STYLE_SUFFIX}`,
  },
  {
    filename: 'gallery-after-01.png',
    aspect_ratio: '4:3',
    prompt: `Photo of the same style generic sedan interior after detailing — spotless dashboard, vacuumed seats, streak-free glass, plain unbranded steering wheel center. ${STYLE_SUFFIX}`,
  },
  // Note: gallery-before-02 was dropped (weak "before" — car rendered too clean) and the
  // exterior pair removed from the gallery; gallery-after-02 is kept because the Home page
  // membership breakout reuses it.
  {
    filename: 'gallery-after-02.png',
    aspect_ratio: '4:3',
    prompt: `Photo of a generic sedan exterior after a wash and wax — glossy clean paint, shining wheels. ${STYLE_SUFFIX}`,
  },
  {
    filename: 'gallery-before-03.png',
    aspect_ratio: '4:3',
    prompt: `Photo of a generic SUV, both interior and exterior visibly dirty, in a driveway setting, plain unbranded grille, no license plate mounted. ${STYLE_SUFFIX}`,
  },
  {
    filename: 'gallery-after-03.png',
    aspect_ratio: '4:3',
    prompt: `Photo of the same style generic SUV after a complete detail — spotless interior and gleaming exterior, driveway setting. ${STYLE_SUFFIX}`,
  },
  // Window cleaning is home/business windows (scope confirmed 2026-07-16);
  // the STYLE_SUFFIX car-specific clauses are harmless no-ops here.
  {
    filename: 'gallery-before-04.png',
    aspect_ratio: '4:3',
    prompt: `Photo of a residential house's large exterior windows covered in dust, water spots, and streaks, before professional window cleaning, suburban home exterior. ${STYLE_SUFFIX}`,
  },
  {
    filename: 'gallery-after-04.png',
    aspect_ratio: '4:3',
    prompt: `Photo of the same style residential house's large exterior windows perfectly clean and streak-free after professional window cleaning, crystal-clear glass reflecting blue sky, suburban home exterior. ${STYLE_SUFFIX}`,
  },

  // Service tier icons/imagery (4)
  {
    filename: 'icon-half-detail.png',
    aspect_ratio: '1:1',
    prompt: `Icon representing a half car detail — a car silhouette split down the middle, one half sparkling clean with shine lines. ${ICON_STYLE_SUFFIX}`,
  },
  {
    filename: 'icon-membership.png',
    aspect_ratio: '1:1',
    prompt: `Icon representing a membership plan — a loyalty card or badge with a star and a circular repeat arrow. ${ICON_STYLE_SUFFIX}`,
  },
  {
    filename: 'icon-full-detail.png',
    aspect_ratio: '1:1',
    prompt: `Icon representing a full car detail — a sparkling car silhouette with shine lines. ${ICON_STYLE_SUFFIX}`,
  },
  {
    filename: 'icon-window-cleaning.png',
    aspect_ratio: '1:1',
    prompt: `Icon representing professional window cleaning — a squeegee wiping a sparkling clean window pane. ${ICON_STYLE_SUFFIX}`,
  },
];

async function ensureCliReady() {
  try {
    await execFileAsync('higgsfield', ['--version']);
  } catch {
    throw new Error(
      'The `higgsfield` CLI was not found on PATH. Install it and run `higgsfield auth login` first.'
    );
  }
}

async function generateImage(job) {
  const args = [
    'generate',
    'create',
    MODEL,
    '--prompt',
    job.prompt,
    '--aspect_ratio',
    job.aspect_ratio,
    '--wait',
    '--json',
  ];
  const { stdout } = await execFileAsync('higgsfield', args, {
    maxBuffer: 10 * 1024 * 1024,
    timeout: 5 * 60 * 1000,
  });
  const results = JSON.parse(stdout);
  return results[0];
}

async function downloadImage(url, destPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destPath, buffer);
}

async function runJob(job) {
  console.log(`[${job.filename}] queued`);

  try {
    console.log(`[${job.filename}] in progress...`);
    const result = await generateImage(job);

    if (result.status === 'completed' && result.result_url) {
      const destPath = path.join(OUTPUT_DIR, job.filename);
      await downloadImage(result.result_url, destPath);
      console.log(`[${job.filename}] completed -> assets/generated/${job.filename}`);
      return { filename: job.filename, ok: true };
    }

    console.error(`[${job.filename}] failed — status: ${result.status}`);
    return { filename: job.filename, ok: false, reason: result.status };
  } catch (error) {
    const message = error.stderr?.toString().trim() || error.message;
    console.error(`[${job.filename}] failed — ${message}`);
    return { filename: job.filename, ok: false, reason: message };
  }
}

async function main() {
  await ensureCliReady();
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Optional: pass specific filenames as CLI args to regenerate just those
  // (e.g. `node scripts/generate-assets.js hero-01.png gallery-after-01.png`)
  // instead of burning credits re-running the whole batch.
  const only = new Set(process.argv.slice(2));
  const selectedJobs = only.size ? jobs.filter((job) => only.has(job.filename)) : jobs;

  console.log(`Generating ${selectedJobs.length} image(s) into assets/generated/ via the Higgsfield CLI...\n`);

  const results = [];
  for (const job of selectedJobs) {
    // Sequential on purpose — avoid bursting the API / rate limits.
    results.push(await runJob(job));
  }

  const succeeded = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);

  console.log(`\nDone. ${succeeded.length} succeeded, ${failed.length} failed.`);
  if (failed.length) {
    console.log('Failed:', failed.map((f) => `${f.filename} (${f.reason})`).join(', '));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
