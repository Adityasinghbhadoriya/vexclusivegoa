import { clubs } from "../Data/clubs"
import { restaurants } from "../Data/restaurant"
import { spas } from "../Data/spa"
import { getBreadcrumbs } from "./breadcrumbs"
import { absoluteUrl, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./config"

/**
 * Static route metadata grounded in visible page content.
 * Titles/descriptions are descriptive, not keyword-stuffed.
 */
export const STATIC_PAGE_META = {
  "/": {
    title: `${SITE_NAME} | Restaurants, Nightlife & Experiences`,
    description: DEFAULT_DESCRIPTION,
    robots: "index, follow",
  },
  "/restaurants": {
    title: `Restaurants in Goa | Dining Guide | ${SITE_NAME}`,
    description:
      "Browse curated Goa restaurants by breakfast, brunch, lunch and more. Find partner dining spots recommended by V Exclusive Goa.",
    robots: "index, follow",
  },
  "/restaurants/browse": {
    title: `Discover Restaurants in Goa | ${SITE_NAME}`,
    description:
      "Explore featured and listed restaurants across Goa, with cuisine details, locations and directions from V Exclusive Goa.",
    robots: "index, follow",
  },
  "/clubs": {
    title: `Nightlife in Goa | Clubs & Bars | ${SITE_NAME}`,
    description:
      "Choose the nightlife vibe you want in Goa — from community bars to clubs — then explore curated venues with V Exclusive Goa.",
    robots: "index, follow",
  },
  "/clubs/browse": {
    title: `Discover Clubs in Goa | ${SITE_NAME}`,
    description:
      "Browse curated clubs and nightlife spots in Goa, including featured venues, music styles and location details.",
    robots: "index, follow",
  },
  "/admin": {
    title: `Admin | ${SITE_NAME}`,
    description: "Private analytics dashboard.",
    robots: "noindex, nofollow",
  },
  "/parra-road": {
    title: `Parra Road Goa | Scenic Coconut Drive | ${SITE_NAME}`,
    description:
      "A calm, coconut-lined village stretch in North Goa known for peaceful drives and photogenic scenery.",
    robots: "index, follow",
  },
  "/hilltop-market": {
    title: `Hilltop Market Arpora | Night Market Guide | ${SITE_NAME}`,
    description:
      "Explore Hilltop Market in Arpora — a night market with shopping, music and festive Goa energy.",
    robots: "index, follow",
  },
  "/chapora-lane": {
    title: `Chapora Lane Goa | Village Walks & Cafés | ${SITE_NAME}`,
    description:
      "Quiet Chapora lanes with cafés, boutiques and local charm — a peaceful North Goa stroll.",
    robots: "index, follow",
  },
  "/mandrem-beach": {
    title: `Mandrem Beach Goa | Calm Shoreline Guide | ${SITE_NAME}`,
    description:
      "Discover Mandrem Beach in North Goa — a calmer shoreline suited to relaxation and slower beach days.",
    robots: "index, follow",
  },
  "/morjim": {
    title: `Morjim Beach Goa | Quiet Coastal Escape | ${SITE_NAME}`,
    description:
      "Morjim is a peaceful North Goa coastal spot known for sunsets, quieter beaches and an unhurried vibe.",
    robots: "index, follow",
  },
  "/basilica-bom-jesus": {
    title: `Basilica of Bom Jesus | Old Goa Heritage | ${SITE_NAME}`,
    description:
      "Visit the Basilica of Bom Jesus in Old Goa — a historic church and heritage landmark.",
    robots: "index, follow",
  },
  "/bhagwan-mahavir-wildlife": {
    title: `Bhagwan Mahavir Wildlife Sanctuary | Nature in Goa | ${SITE_NAME}`,
    description:
      "Explore forests, trails and nature around Bhagwan Mahavir Wildlife Sanctuary near Mollem, Goa.",
    robots: "index, follow",
  },
  "/cabo-de-rama-beach": {
    title: `Cabo de Rama Beach | South Goa Cliffs & Shore | ${SITE_NAME}`,
    description:
      "A scenic South Goa beach with cliffs, quieter shores and sunset views around Cabo de Rama.",
    robots: "index, follow",
  },
  "/cola-beach-kayaking": {
    title: `Cola Beach Kayaking | South Goa Lagoon | ${SITE_NAME}`,
    description:
      "Paddle the calm Cola Beach lagoon in South Goa — a green, low-key adventure experience.",
    robots: "index, follow",
  },
  "/fort-aguada": {
    title: `Fort Aguada Goa | Historic Fort & Coast Views | ${SITE_NAME}`,
    description:
      "Explore Fort Aguada in North Goa — a Portuguese-era fort with coastline views and heritage interest.",
    robots: "index, follow",
  },
  "/museum-of-goa": {
    title: `Museum of Goa | Contemporary Art in Pilerne | ${SITE_NAME}`,
    description:
      "Discover the Museum of Goa in Pilerne — contemporary art, sculpture and cultural stories.",
    robots: "index, follow",
  },
  "/reis-magos-fort": {
    title: `Reis Magos Fort | Mandovi River Views | ${SITE_NAME}`,
    description:
      "Visit Reis Magos Fort — a restored Portuguese-era fort with peaceful Mandovi River views.",
    robots: "index, follow",
  },
  "/chapora-fort": {
    title: `Chapora Fort Goa | Hilltop Ruins & Sunsets | ${SITE_NAME}`,
    description:
      "Chapora Fort offers historic hilltop ruins, dramatic cliffs and sweeping North Goa sunset views.",
    robots: "index, follow",
  },
}

function truncate(text, max = 160) {
  if (!text) return DEFAULT_DESCRIPTION
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).trimEnd()}…`
}

export function resolvePageMeta(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/"

  if (STATIC_PAGE_META[path]) {
    const meta = STATIC_PAGE_META[path]
    return {
      ...meta,
      canonicalPath: path === "/" ? "/" : path,
    }
  }

  const restaurantMatch = path.match(/^\/restaurant\/(\d+)$/)
  if (restaurantMatch) {
    const restaurant = restaurants.find((r) => r.id === Number(restaurantMatch[1]))
    if (!restaurant) {
      return {
        title: `Restaurant Not Found | ${SITE_NAME}`,
        description: DEFAULT_DESCRIPTION,
        robots: "noindex, follow",
        canonicalPath: path,
      }
    }
    return {
      title: `${restaurant.name} | ${restaurant.location || "Goa"} | ${SITE_NAME}`,
      description: truncate(
        restaurant.description ||
          `${restaurant.name} in ${restaurant.location || "Goa"}. Cuisine: ${restaurant.cuisine || "Dining"}.`,
      ),
      robots: "index, follow",
      canonicalPath: path,
      type: "restaurant",
      entity: restaurant,
    }
  }

  const clubMatch = path.match(/^\/club\/(\d+)$/)
  if (clubMatch) {
    const club = clubs.find((c) => c.id === Number(clubMatch[1]))
    if (!club) {
      return {
        title: `Club Not Found | ${SITE_NAME}`,
        description: DEFAULT_DESCRIPTION,
        robots: "noindex, follow",
        canonicalPath: path,
      }
    }
    return {
      title: `${club.name} | Nightlife in ${club.location || "Goa"} | ${SITE_NAME}`,
      description: truncate(
        club.description ||
          `${club.name} in ${club.location || "Goa"}. ${club.vibe || "Nightlife venue"}.`,
      ),
      robots: "index, follow",
      canonicalPath: path,
      type: "club",
      entity: club,
    }
  }

  const spaMatch = path.match(/^\/spa\/(\d+)$/)
  if (spaMatch) {
    const spa = spas.find((s) => s.id === Number(spaMatch[1]))
    if (!spa) {
      return {
        title: `Wellness Spot Not Found | ${SITE_NAME}`,
        description: DEFAULT_DESCRIPTION,
        robots: "noindex, follow",
        canonicalPath: path,
      }
    }
    return {
      title: `${spa.name} | Wellness Spa in ${spa.location || "Goa"} | ${SITE_NAME}`,
      description: truncate(
        spa.description ||
          `${spa.name} in ${spa.location || "Goa"} — spa and wellness experiences.`,
      ),
      robots: "index, follow",
      canonicalPath: path,
      type: "spa",
      entity: spa,
    }
  }

  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: "This page is not available on V Exclusive Goa.",
    robots: "noindex, follow",
    canonicalPath: path,
  }
}

function localityFromLocation(location) {
  if (!location || typeof location !== "string") return null
  const parts = location.split(",").map((part) => part.trim()).filter(Boolean)
  if (!parts.length) return null
  return {
    "@type": "PostalAddress",
    addressLocality: parts[0],
    addressRegion: parts[1] || "Goa",
    addressCountry: "IN",
  }
}

function absoluteAssetUrl(value) {
  if (!value || typeof value !== "string") return undefined
  if (value.startsWith("http://") || value.startsWith("https://")) return value
  if (value.startsWith("/")) return `${SITE_URL}${value}`
  return undefined
}

function buildBreadcrumbList(pathname) {
  const items = getBreadcrumbs(pathname)
  if (items.length < 2) return null
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildJsonLd(meta) {
  const scripts = []

  if (meta.canonicalPath === "/") {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      description: DEFAULT_DESCRIPTION,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: absoluteUrl("/"),
        sameAs: ["https://www.instagram.com/vexclusivegoa/"],
      },
    })
  }

  const breadcrumbList = buildBreadcrumbList(meta.canonicalPath)
  if (breadcrumbList) scripts.push(breadcrumbList)

  if (meta.type === "restaurant" && meta.entity) {
    const r = meta.entity
    const data = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: r.name,
      description: r.description,
      url: absoluteUrl(meta.canonicalPath),
    }
    const address = localityFromLocation(r.location)
    if (address) data.address = address
    if (r.cuisine) data.servesCuisine = r.cuisine
    if (r.phone) data.telephone = r.phone
    const image = absoluteAssetUrl(r.image)
    if (image) data.image = image
    scripts.push(data)
  }

  if (meta.type === "club" && meta.entity) {
    const c = meta.entity
    const data = {
      "@context": "https://schema.org",
      "@type": "NightClub",
      name: c.name,
      description: c.description,
      url: absoluteUrl(meta.canonicalPath),
    }
    const address = localityFromLocation(c.location)
    if (address) data.address = address
    if (c.phone) data.telephone = c.phone
    const image = absoluteAssetUrl(c.image)
    if (image) data.image = image
    scripts.push(data)
  }

  if (meta.type === "spa" && meta.entity) {
    const s = meta.entity
    const data = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: s.name,
      description: s.description,
      url: absoluteUrl(meta.canonicalPath),
    }
    const address = localityFromLocation(s.location)
    if (address) data.address = address
    if (s.phone) data.telephone = s.phone
    const sameAs = [s.websiteLink, s.instagram].filter(Boolean)
    if (sameAs.length) data.sameAs = sameAs
    scripts.push(data)
  }

  return scripts
}

/** Indexable public paths for sitemap generation helpers / audits. */
export function getIndexableSitemapPaths() {
  const staticPaths = Object.entries(STATIC_PAGE_META)
    .filter(([, meta]) => !String(meta.robots).includes("noindex"))
    .map(([path]) => path)

  const restaurantPaths = restaurants.map((r) => `/restaurant/${r.id}`)
  const clubPaths = clubs.map((c) => `/club/${c.id}`)
  const spaPaths = spas.map((s) => `/spa/${s.id}`)

  return [...staticPaths, ...restaurantPaths, ...clubPaths, ...spaPaths]
}
