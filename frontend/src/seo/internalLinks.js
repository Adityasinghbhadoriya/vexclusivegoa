/** Contextual related destinations — only real public routes. */
export const RELATED_DESTINATIONS = {
  "/parra-road": [
    { to: "/chapora-lane", label: "Chapora Lane" },
    { to: "/fort-aguada", label: "Fort Aguada" },
  ],
  "/hilltop-market": [
    { to: "/clubs", label: "Nightlife in Goa" },
    { to: "/chapora-lane", label: "Chapora Lane" },
  ],
  "/chapora-lane": [
    { to: "/chapora-fort", label: "Chapora Fort" },
    { to: "/morjim", label: "Morjim" },
  ],
  "/mandrem-beach": [
    { to: "/morjim", label: "Morjim" },
    { to: "/chapora-lane", label: "Chapora Lane" },
  ],
  "/morjim": [
    { to: "/mandrem-beach", label: "Mandrem Beach" },
    { to: "/chapora-fort", label: "Chapora Fort" },
  ],
  "/basilica-bom-jesus": [
    { to: "/museum-of-goa", label: "Museum of Goa" },
    { to: "/reis-magos-fort", label: "Reis Magos Fort" },
  ],
  "/bhagwan-mahavir-wildlife": [
    { to: "/cola-beach-kayaking", label: "Cola Beach Kayaking" },
    { to: "/cabo-de-rama-beach", label: "Cabo de Rama Beach" },
  ],
  "/cabo-de-rama-beach": [
    { to: "/cola-beach-kayaking", label: "Cola Beach Kayaking" },
    { to: "/bhagwan-mahavir-wildlife", label: "Wildlife Sanctuary" },
  ],
  "/cola-beach-kayaking": [
    { to: "/cabo-de-rama-beach", label: "Cabo de Rama Beach" },
    { to: "/bhagwan-mahavir-wildlife", label: "Wildlife Sanctuary" },
  ],
  "/fort-aguada": [
    { to: "/reis-magos-fort", label: "Reis Magos Fort" },
    { to: "/parra-road", label: "Parra Road" },
  ],
  "/museum-of-goa": [
    { to: "/basilica-bom-jesus", label: "Basilica of Bom Jesus" },
    { to: "/reis-magos-fort", label: "Reis Magos Fort" },
  ],
  "/reis-magos-fort": [
    { to: "/fort-aguada", label: "Fort Aguada" },
    { to: "/museum-of-goa", label: "Museum of Goa" },
  ],
  "/chapora-fort": [
    { to: "/chapora-lane", label: "Chapora Lane" },
    { to: "/morjim", label: "Morjim" },
  ],
}

export const CORE_DISCOVERY_LINKS = [
  { to: "/", label: "Home" },
  { to: "/restaurants", label: "Restaurants in Goa" },
  { to: "/clubs", label: "Nightlife in Goa" },
  { to: "/spa/1", label: "Wellness spa" },
]
