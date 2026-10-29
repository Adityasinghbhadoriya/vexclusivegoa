import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "../seo/config"
import { buildJsonLd, resolvePageMeta } from "../seo/pageMeta"

const META_ATTR = "data-vex-seo"
const LINK_ATTR = "data-vex-seo-link"
const JSONLD_ATTR = "data-vex-seo-jsonld"

/**
 * Update an existing head meta tag in place when possible to avoid duplicates
 * with the static tags in index.html. Create a managed tag only if missing.
 */
function upsertMeta(attrKey, attrValue, content) {
  if (!content) return
  const selector = `meta[${attrKey}="${attrValue}"]`
  let el =
    document.head.querySelector(`${selector}[${META_ATTR}]`) ||
    document.head.querySelector(selector)

  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attrKey, attrValue)
    el.setAttribute(META_ATTR, "true")
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel, href) {
  let el =
    document.head.querySelector(`link[rel="${rel}"][${LINK_ATTR}]`) ||
    document.head.querySelector(`link[rel="${rel}"]`)

  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    el.setAttribute(LINK_ATTR, "true")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function clearJsonLd() {
  document.head.querySelectorAll(`script[${JSONLD_ATTR}]`).forEach((node) => node.remove())
}

function writeJsonLd(schemas) {
  clearJsonLd()
  schemas.forEach((schema) => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute(JSONLD_ATTR, "true")
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}

/**
 * Client-side head manager for the Vite SPA.
 * Canonical URLs omit query strings to reduce duplicate-URL signals.
 */
export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolvePageMeta(pathname)
    const canonical = absoluteUrl(meta.canonicalPath)

    document.title = meta.title

    upsertMeta("name", "description", meta.description)
    upsertMeta("name", "robots", meta.robots)
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:site_name", SITE_NAME)
    upsertMeta("property", "og:title", meta.title)
    upsertMeta("property", "og:description", meta.description)
    upsertMeta("property", "og:url", canonical)
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE)
    upsertMeta("name", "twitter:card", "summary")
    upsertMeta("name", "twitter:title", meta.title)
    upsertMeta("name", "twitter:description", meta.description)
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE)

    upsertLink("canonical", canonical)
    writeJsonLd(buildJsonLd(meta))
  }, [pathname])

  return null
}
