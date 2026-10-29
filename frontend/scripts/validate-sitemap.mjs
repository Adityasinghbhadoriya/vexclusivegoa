import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8")
const robots = fs.readFileSync(path.join(root, "public/robots.txt"), "utf8")
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])

const expected = [
  "/",
  "/restaurants",
  "/restaurants/browse",
  "/clubs",
  "/clubs/browse",
  "/spa/1",
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => `/restaurant/${i}`),
  ...[1, 2, 3, 4].map((i) => `/club/${i}`),
  "/parra-road",
  "/hilltop-market",
  "/chapora-lane",
  "/mandrem-beach",
  "/morjim",
  "/basilica-bom-jesus",
  "/bhagwan-mahavir-wildlife",
  "/cabo-de-rama-beach",
  "/cola-beach-kayaking",
  "/fort-aguada",
  "/museum-of-goa",
  "/reis-magos-fort",
  "/chapora-fort",
].map((p) => `https://vexclusivegoa.online${p === "/" ? "/" : p}`)

const missing = expected.filter((u) => !locs.includes(u))
const extra = locs.filter((u) => !expected.includes(u))
const bad = locs.filter(
  (u) => u.includes("/admin") || u.includes("?") || u.includes(".com") || u.includes("lastmod"),
)

console.log(`sitemap urls: ${locs.length}`)
console.log(`missing: ${missing.length ? missing.join(", ") : "none"}`)
console.log(`extra: ${extra.length ? extra.join(", ") : "none"}`)
console.log(`bad: ${bad.length ? bad.join(", ") : "none"}`)
console.log(
  `robots sitemap ref: ${robots.includes("https://vexclusivegoa.online/sitemap.xml") ? "ok" : "MISSING"}`,
)

if (missing.length || extra.length || bad.length || !robots.includes("https://vexclusivegoa.online/sitemap.xml")) {
  process.exitCode = 1
} else {
  console.log("PASS")
}
