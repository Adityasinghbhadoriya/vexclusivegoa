import { clubs } from "../Data/clubs"
import { restaurants } from "../Data/restaurant"
import { spas } from "../Data/spa"

/**
 * Visible + schema breadcrumb trails for known public routes.
 * Unknown / admin routes return an empty list (no fake trail).
 */
export function getBreadcrumbs(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/"

  if (path === "/" || path === "/admin") return []

  const home = { name: "Home", path: "/" }

  if (path === "/restaurants") {
    return [home, { name: "Restaurants", path }]
  }
  if (path === "/restaurants/browse") {
    return [
      home,
      { name: "Restaurants", path: "/restaurants" },
      { name: "Browse", path },
    ]
  }
  if (path === "/clubs") {
    return [home, { name: "Nightlife", path }]
  }
  if (path === "/clubs/browse") {
    return [
      home,
      { name: "Nightlife", path: "/clubs" },
      { name: "Browse", path },
    ]
  }

  const restaurantMatch = path.match(/^\/restaurant\/(\d+)$/)
  if (restaurantMatch) {
    const restaurant = restaurants.find((r) => r.id === Number(restaurantMatch[1]))
    if (!restaurant) return []
    return [
      home,
      { name: "Restaurants", path: "/restaurants" },
      { name: restaurant.name, path },
    ]
  }

  const clubMatch = path.match(/^\/club\/(\d+)$/)
  if (clubMatch) {
    const club = clubs.find((c) => c.id === Number(clubMatch[1]))
    if (!club) return []
    return [
      home,
      { name: "Nightlife", path: "/clubs" },
      { name: club.name, path },
    ]
  }

  const spaMatch = path.match(/^\/spa\/(\d+)$/)
  if (spaMatch) {
    const spa = spas.find((s) => s.id === Number(spaMatch[1]))
    if (!spa) return []
    return [home, { name: spa.name, path }]
  }

  const destinationLabels = {
    "/parra-road": "Parra Road",
    "/hilltop-market": "Hilltop Market",
    "/chapora-lane": "Chapora Lane",
    "/mandrem-beach": "Mandrem Beach",
    "/morjim": "Morjim",
    "/basilica-bom-jesus": "Basilica of Bom Jesus",
    "/bhagwan-mahavir-wildlife": "Bhagwan Mahavir Wildlife Sanctuary",
    "/cabo-de-rama-beach": "Cabo de Rama Beach",
    "/cola-beach-kayaking": "Cola Beach Kayaking",
    "/fort-aguada": "Fort Aguada",
    "/museum-of-goa": "Museum of Goa",
    "/reis-magos-fort": "Reis Magos Fort",
    "/chapora-fort": "Chapora Fort",
  }

  if (destinationLabels[path]) {
    return [home, { name: destinationLabels[path], path }]
  }

  return []
}
