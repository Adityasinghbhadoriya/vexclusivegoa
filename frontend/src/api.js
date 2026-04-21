const BASE_URL = "https://vexclusivegoa.onrender.com"

export const trackQRScan = async () => {
  await fetch(`${BASE_URL}/api/analytics/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "daluna_qr" })
  })
}

export const trackRestaurantClick = async (id) => {
  try {
  const res = await fetch(`${BASE_URL}/api/analytics/restaurant-click`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ restaurantId: id })
  })

    const data = await res.json()
    console.log("CLICK TRACK RESPONSE:", data)
  } catch (err) {
    console.error("CLICK TRACK ERROR:", err)
  }

}