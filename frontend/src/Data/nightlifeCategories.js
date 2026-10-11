export const NIGHTLIFE_CATEGORIES = [
  {
    id: "community-bars",
    label: "Community Bars",
    emoji: "🍻",
    subtitle: "Local bars and neighborhood favorites",
    accent: "from-amber-400 to-orange-600",
    glow: "rgba(245, 158, 11, 0.32)",
  },
  {
    id: "clubs",
    label: "Clubs",
    emoji: "🎧",
    subtitle: "Goa’s nightlife and dance floors",
    accent: "from-fuchsia-500 to-violet-700",
    glow: "rgba(217, 70, 239, 0.3)",
  },
];

export const COMMUNITY_BAR_RESTAURANT_IDS = [11, 13];

export const clubNightlifeCategoryMap = {
  1: "clubs", // SinQ Nightclub
  2: "clubs", // Leela Club Anjuna
  3: "clubs", // Raeeth Club
  4: "clubs", // Savara Goa
};

export const filterClubsByNightlifeCategory = (clubs, categoryId) =>
  clubs.filter((club) => clubNightlifeCategoryMap[club.id] === categoryId);

export const getNightlifeCategoryById = (categoryId) =>
  NIGHTLIFE_CATEGORIES.find((category) => category.id === categoryId) || null;