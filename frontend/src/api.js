const BASE_URL = "https://vexclusivegoa.onrender.com"

// ============================================
// CATEGORY TRACKING (Restaurants / Clubs)
// ============================================

export const trackCategoryClick = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/category-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category })
    })

    const data = await res.json()
    console.log(`✅ ${category} category click tracked:`, data)
    return data
  } catch (err) {
    console.error("❌ Category click tracking error:", err)
  }
}

export const getCategoryClicks = async (category = null) => {
  try {
    const url = category 
      ? `${BASE_URL}/api/analytics/category-clicks?category=${category}`
      : `${BASE_URL}/api/analytics/category-clicks`

    const res = await fetch(url)
    const data = await res.json()
    console.log("📊 Category clicks data:", data)
    return data
  } catch (err) {
    console.error("❌ Get category clicks error:", err)
  }
}

// ============================================
// CLUB TRACKING (Individual Clubs)
// ============================================

export const trackClubClick = async (clubId, clubName = "") => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/club-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clubId, clubName })
    })

    const data = await res.json()
    console.log(`✅ Club ${clubName || clubId} click tracked:`, data)
    return data
  } catch (err) {
    console.error("❌ Club click tracking error:", err)
  }
}

export const getClubClicks = async (clubId = null) => {
  try {
    const url = clubId 
      ? `${BASE_URL}/api/analytics/club-clicks?clubId=${clubId}`
      : `${BASE_URL}/api/analytics/club-clicks`

    const res = await fetch(url)
    const data = await res.json()
    console.log("📊 Club clicks data:", data)
    return data
  } catch (err) {
    console.error("❌ Get club clicks error:", err)
  }
}

// ============================================
// RESTAURANT TRACKING (Individual Restaurants)
// ============================================

export const trackRestaurantClick = async (restaurantId, restaurantName = "") => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/restaurant-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ restaurantId, restaurantName })
    })

    const data = await res.json()
    console.log(`✅ Restaurant ${restaurantName || restaurantId} click tracked:`, data)
    return data
  } catch (err) {
    console.error("❌ Restaurant click tracking error:", err)
  }
}

export const getRestaurantClicks = async (restaurantId = null) => {
  try {
    const url = restaurantId 
      ? `${BASE_URL}/api/analytics/restaurant-clicks?restaurantId=${restaurantId}`
      : `${BASE_URL}/api/analytics/restaurant-clicks`

    const res = await fetch(url)
    const data = await res.json()
    console.log("📊 Restaurant clicks data:", data)
    return data
  } catch (err) {
    console.error("❌ Get restaurant clicks error:", err)
  }
}

// ============================================
// ANALYTICS DASHBOARD
// ============================================

export const getAnalyticsData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/admin`)
    const data = await res.json()
    console.log("📈 Full analytics data:", data)
    return data
  } catch (err) {
    console.error("❌ Get analytics error:", err)
  }
}