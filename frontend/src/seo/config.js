/** Canonical production origin for V Exclusive Goa (public frontend). */
export const SITE_URL = "https://vexclusivegoa.online"

export const SITE_NAME = "V Exclusive Goa"

export const DEFAULT_DESCRIPTION =
  "Discover curated restaurants, nightlife, beaches, wellness and travel experiences across Goa with V Exclusive Goa."

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.webp`

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
