/**
 * One-shot compressor for oversized marketing assets.
 * Targets display sizes used by the app (~430px column, up to ~2x retina heroes).
 * Overwrites files in place to preserve import paths.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const assets = path.join(root, "src/assets")

/** max edge, quality, keep format */
const jobs = [
  // Spa gallery — rendered ~full column width inside 68vh object-cover hero
  { file: "IMG_4076.jpg.webp", maxEdge: 1600, quality: 78 },
  { file: "IMG_0134.webp", maxEdge: 1600, quality: 78 },
  { file: "IMG_0214.webp", maxEdge: 1600, quality: 78 },
  { file: "IMG_0128.webp", maxEdge: 1600, quality: 78 },
  { file: "16.JPEG", maxEdge: 1600, quality: 78, as: "jpeg" },
  { file: "21.JPEG", maxEdge: 1600, quality: 78, as: "jpeg" },
  // Destination / home heroes (mobile-first column)
  { file: "chaporaLane.jpeg", maxEdge: 1400, quality: 78, as: "jpeg" },
  { file: "Hiltopmarket.jpg", maxEdge: 1600, quality: 78, as: "jpeg" },
  { file: "azulejos3.jpg", maxEdge: 1400, quality: 78, as: "jpeg" },
  { file: "Basilica Church.webp", maxEdge: 1600, quality: 78 },
  { file: "MahavirWaterfall.webp", maxEdge: 1600, quality: 78 },
  { file: "parra-road.jpg", maxEdge: 1600, quality: 78, as: "jpeg" },
  { file: "Fort2.jpeg", maxEdge: 1600, quality: 78, as: "jpeg" },
  { file: "Colabeach2.jpeg", maxEdge: 1400, quality: 78, as: "jpeg" },
  { file: "morjimImage.jpg", maxEdge: 1400, quality: 78, as: "jpeg" },
]

function formatBytes(n) {
  return `${(n / 1024).toFixed(1)}KB`
}

async function optimizeOne(job) {
  const inputPath = path.join(assets, job.file)
  if (!fs.existsSync(inputPath)) {
    console.log(`SKIP missing ${job.file}`)
    return
  }

  const before = fs.statSync(inputPath).size
  const image = sharp(inputPath, { failOn: "none" })
  const meta = await image.metadata()
  const longest = Math.max(meta.width || 0, meta.height || 0)
  const needsResize = longest > job.maxEdge

  let pipeline = sharp(inputPath, { failOn: "none" }).rotate()
  if (needsResize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? job.maxEdge : undefined,
      height: meta.height > meta.width ? job.maxEdge : undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
  }

  const ext = path.extname(job.file).toLowerCase()
  const as = job.as || (ext.includes("webp") ? "webp" : ext.includes("png") ? "png" : "jpeg")

  let buffer
  if (as === "webp") {
    buffer = await pipeline.webp({ quality: job.quality, effort: 4 }).toBuffer()
  } else if (as === "jpeg") {
    buffer = await pipeline.jpeg({ quality: job.quality, mozjpeg: true }).toBuffer()
  } else {
    buffer = await pipeline.png({ compressionLevel: 8 }).toBuffer()
  }

  const after = buffer.length
  if (after >= before * 0.98) {
    console.log(`KEEP ${job.file} (${formatBytes(before)}) — already efficient`)
    return
  }

  // Prefer writing beside the original, then replace — avoids Windows rename locks.
  const outPath = path.join(assets, `optimized-${job.file}`)
  fs.writeFileSync(outPath, buffer)
  try {
    fs.writeFileSync(inputPath, buffer)
    fs.unlinkSync(outPath)
  } catch {
    console.log(`WROTE sidecar ${path.basename(outPath)} (could not overwrite original)`)
  }

  const dim = await sharp(buffer).metadata()
  console.log(
    `OK ${job.file}: ${formatBytes(before)} → ${formatBytes(after)} (${dim.width}x${dim.height})`,
  )
}

for (const job of jobs) {
  await optimizeOne(job)
}
