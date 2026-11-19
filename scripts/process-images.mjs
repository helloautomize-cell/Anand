/**
 * Process assets/images into public/img:
 *  - AVIF + WebP at 640 / 1024 / 1600 widths for photos
 *  - logo.png / logo-white.png copied as-is
 *  - og-card.png generated 1200x630 from signboard
 * Reads alt text from assets/images/alt-text.json (validated for presence).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "assets", "images");
const OUT = path.join(ROOT, "public", "img");
const WIDTHS = [640, 1024, 1600];

fs.mkdirSync(OUT, { recursive: true });

const alts = JSON.parse(fs.readFileSync(path.join(SRC, "alt-text.json"), "utf-8"));
const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f) && !f.startsWith("_"));

let missingAlt = 0;
for (const f of files) {
  const base = f.replace(/\.[^.]+$/, "");
  if (!alts[base] && !alts[f]) {
    console.warn(`  [alt] no alt text for ${f}`);
    missingAlt++;
  }
}

for (const f of files) {
  const src = path.join(SRC, f);
  const base = f.replace(/\.[^.]+$/, "");
  if (f === "logo.png" || f === "logo-white.png") {
    fs.copyFileSync(src, path.join(OUT, f));
    continue;
  }
  const img = sharp(src);
  const meta = await img.metadata();
  const widths = WIDTHS.filter((w) => w <= (meta.width ?? 1600));
  for (const w of widths) {
    const resized = sharp(src).resize({ width: w });
    await resized
      .clone()
      .avif({ quality: 62 })
      .toFile(path.join(OUT, `${base}-${w}.avif`));
    await resized.webp({ quality: 78 }).toFile(path.join(OUT, `${base}-${w}.webp`));
  }
  // canonical webp at source size (markup references base.webp)
  await sharp(src)
    .webp({ quality: 82 })
    .toFile(path.join(OUT, `${base}.webp`));
}

// OG card 1200x630 from signboard
const ogSrc = path.join(SRC, "signboard.webp");
if (fs.existsSync(ogSrc)) {
  await sharp(ogSrc)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(OUT, "og-card.png"));
}

// favicon + apple-touch-icon: wide logo letterboxed into a square
const logoSrc = path.join(SRC, "logo.png");
const cardSvg = Buffer.from(
  `<svg width="200" height="97"><rect width="200" height="97" rx="16" fill="#fff"/></svg>`
);
const logoCard = await sharp(cardSvg)
  .composite([{ input: logoSrc, left: 15, top: 11 }])
  .png()
  .toBuffer();
const squareTransparent = await sharp(logoCard)
  .extend({ top: 52, bottom: 51, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await sharp(squareTransparent)
  .resize(512, 512)
  .png()
  .toFile(path.join(ROOT, "app", "icon.png"));
const squareApple = await sharp(logoSrc)
  .extend({ top: 70, bottom: 75, left: 25, right: 25, background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();
await sharp(squareApple)
  .resize(180, 180)
  .png()
  .toFile(path.join(ROOT, "app", "apple-icon.png"));

console.log(`processed ${files.length} images; missing alt: ${missingAlt}`);
