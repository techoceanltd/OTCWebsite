// Resize and convert every PNG/JPG in public/images to WebP, then remove the original.
// Run with: node scripts/optimize-images.mjs
import { readdir, rm, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const DIR = 'public/images'

// Full-width backgrounds and heroes get more pixels; everything else is capped lower.
const WIDE = /^(otc-|story|history|white-arrow|orange-arrow|drives-card|state-text)/
const maxWidthFor = (name) => (WIDE.test(name) ? 2400 : 1200)

let before = 0
let after = 0

for (const file of await readdir(DIR)) {
  const { name, ext } = parse(file)
  if (!/^\.(png|jpe?g)$/i.test(ext)) continue

  const src = join(DIR, file)
  const out = join(DIR, `${name}.webp`)
  const srcSize = (await stat(src)).size

  await sharp(src)
    .resize({ width: maxWidthFor(name), withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 6 })
    .toFile(out)

  const outSize = (await stat(out)).size
  before += srcSize
  after += outSize
  await rm(src)
  console.log(`${file.padEnd(28)} ${(srcSize / 1024).toFixed(0).padStart(7)} KB -> ${(outSize / 1024).toFixed(0).padStart(5)} KB`)
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`)
