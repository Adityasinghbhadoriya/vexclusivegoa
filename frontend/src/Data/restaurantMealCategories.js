/**
 * Meal-category assignments.
 * Values: "breakfast" | "lunch" | "brunch"
 */

export const MEAL_CATEGORIES = [
  {
    id: "breakfast",
    label: "Breakfast",
    emoji: "🍳",
    subtitle: "Morning tables & fresh starts",
    accent: "from-yellow-400 to-amber-500",
    glow: "rgba(250, 204, 21, 0.38)",
  },
  {
    id: "brunch",
    label: "Brunch",
    emoji: "🥐",
    subtitle: "Leisurely late-morning plates",
    accent: "from-sky-400 to-blue-600",
    glow: "rgba(56, 189, 248, 0.35)",
  },
  {
    id: "lunch",
    label: "Lunch",
    emoji: "🍽️",
    subtitle: "Midday dining favorites",
    accent: "from-lime-400 to-green-600",
    glow: "rgba(132, 204, 22, 0.35)",
  },
];

/**
 * Keys are restaurant `id` values from Data/restaurant.js.
 * @type {Record<number, Array<"breakfast"|"lunch"|"brunch">>}
 */
export const restaurantMealCategoryMap = {
  // Breakfast
  7: ["breakfast"], // Babka Goa
  9: ["breakfast"], // Coco Moga Bakehouse
  10: ["breakfast"], // Pincode Bungalow

  // Brunch
  8: ["brunch"], // Nova Sandwich Shop
  4: ["brunch"], // Thalassa
  3: ["brunch"], // Elephant Beach Cafe & Bar
  2: ["brunch"], // Piccola Roma Pizza

  // Lunch
  1: ["lunch"], // Da Luna Restaurant
  6: ["lunch"], // Burger Factory
  5: ["lunch"], // Sakana Japanese Restaurant
  15: ["lunch"], // Anand Sea Food Bar & Restaurant
  16: ["lunch"], // The Fisherman's Wharf
  11: ["lunch"], // Cajy Bar
  12: ["lunch"], // Pablos
  13: ["lunch"], // Calhiz, Village Bar
  14: ["lunch"], // Boilermaker
};

export const getMealCategoryById = (categoryId) =>
  MEAL_CATEGORIES.find((category) => category.id === categoryId) || null;

export const restaurantBelongsToMealCategory = (restaurant, categoryId) => {
  if (!categoryId) return true;
  const assigned = restaurantMealCategoryMap[restaurant.id] || [];
  return assigned.includes(categoryId);
};

export const filterRestaurantsByMealCategory = (restaurants, categoryId) => {
  if (!categoryId) return restaurants;
  return restaurants.filter((restaurant) =>
    restaurantBelongsToMealCategory(restaurant, categoryId)
  );
};
