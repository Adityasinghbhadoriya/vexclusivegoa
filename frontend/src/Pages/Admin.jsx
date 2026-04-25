import React, { useEffect, useState } from "react"
import { FaQrcode, FaUtensils, FaGlassCheers, FaSync, FaChartBar } from "react-icons/fa"

const Admin = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  // 🔐 Simple Password Protection
  useEffect(() => {
    const password = prompt("Enter Admin Password")

    if (password !== "admin123") {
      alert("Access Denied")
      window.location.href = "/"
    }
  }, [])

  // 📡 Fetch Analytics
  const fetchData = async () => {
    try {
      setRefreshing(true)
      const res = await fetch("https://vexclusivegoa.onrender.com/api/analytics/admin")
      const result = await res.json()
      setData(result)
      console.log("📊 Analytics Data:", result)
    } catch (err) {
      console.error("Error fetching analytics:", err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1f2937] to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">⏳</div>
          <p className="text-xl">Loading Analytics...</p>
        </div>
      </div>
    )
  }

  // Calculate totals
  const totalQRScans = data?.qrScans || 0
  const restaurantCategoryClicks = data?.categories?.find(c => c._id === "restaurants")?.count || 0
  const clubCategoryClicks = data?.categories?.find(c => c._id === "clubs")?.count || 0
  const totalClubClicks = data?.clubs?.total || 0
  const totalRestaurantClicks = data?.restaurants?.total || 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1f2937] to-black text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">📊 V-Exclusive Analytics Dashboard</h1>
          <p className="text-gray-400">Real-time tracking of user engagement</p>
        </div>
        <button
          onClick={fetchData}
          disabled={refreshing}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition disabled:opacity-50"
        >
          <FaSync className={refreshing ? "animate-spin" : ""} />
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* ===== TOP OVERVIEW CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        
        {/* QR Scans */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-sm font-semibold">QR Scans</p>
              <p className="text-4xl font-bold mt-2">{totalQRScans}</p>
            </div>
            <FaQrcode className="text-5xl opacity-30" />
          </div>
          <p className="text-purple-300 text-xs mt-3">Direct source links</p>
        </div>

        {/* Restaurant Category */}
        <div className="bg-gradient-to-br from-orange-500 to-red-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-200 text-sm font-semibold">Category: Restaurants</p>
              <p className="text-4xl font-bold mt-2">{restaurantCategoryClicks}</p>
            </div>
            <FaUtensils className="text-5xl opacity-30" />
          </div>
          <p className="text-orange-300 text-xs mt-3">Button clicks</p>
        </div>

        {/* Clubs Category */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-200 text-sm font-semibold">Category: Clubs</p>
              <p className="text-4xl font-bold mt-2">{clubCategoryClicks}</p>
            </div>
            <FaGlassCheers className="text-5xl opacity-30" />
          </div>
          <p className="text-pink-300 text-xs mt-3">Button clicks</p>
        </div>

        {/* Total Clicks */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-sm font-semibold">Total Item Clicks</p>
              <p className="text-4xl font-bold mt-2">{totalClubClicks + totalRestaurantClicks}</p>
            </div>
            <FaChartBar className="text-5xl opacity-30" />
          </div>
          <p className="text-blue-300 text-xs mt-3">Clubs + Restaurants</p>
        </div>
      </div>

      {/* ===== CLUBS SECTION ===== */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          🏳️ Nightlife & Clubs
          <span className="text-sm font-normal text-gray-400">({data?.clubs?.byClub?.length || 0} clubs)</span>
        </h2>

        {data?.clubs?.byClub && data.clubs.byClub.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.clubs.byClub.map((club, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-pink-500/30 rounded-lg p-5 hover:bg-white/10 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-pink-300">{club.clubName || `Club #${club._id}`}</h3>
                    <p className="text-xs text-gray-400 mt-1">ID: {club._id}</p>
                  </div>
                  <span className="text-3xl font-bold text-pink-400">{club.count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((club.count / Math.max(...data.clubs.byClub.map(c => c.count))) * 100, 100)}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 rounded-lg p-8 text-center text-gray-400">
            No club clicks yet
          </div>
        )}
      </div>

      {/* ===== RESTAURANTS SECTION ===== */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          🍽️ Restaurants
          <span className="text-sm font-normal text-gray-400">({data?.restaurants?.byRestaurant?.length || 0} restaurants)</span>
        </h2>

        {data?.restaurants?.byRestaurant && data.restaurants.byRestaurant.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.restaurants.byRestaurant.map((restaurant, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-orange-500/30 rounded-lg p-5 hover:bg-white/10 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-orange-300">{restaurant.restaurantName || `Restaurant #${restaurant._id}`}</h3>
                    <p className="text-xs text-gray-400 mt-1">ID: {restaurant._id}</p>
                  </div>
                  <span className="text-3xl font-bold text-orange-400">{restaurant.count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((restaurant.count / Math.max(...data.restaurants.byRestaurant.map(r => r.count))) * 100, 100)}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 rounded-lg p-8 text-center text-gray-400">
            No restaurant clicks yet
          </div>
        )}
      </div>

      {/* ===== DETAILED STATS TABLE ===== */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">📈 Detailed Statistics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Stats Summary */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Summary Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-300">Total QR Scans</span>
                <span className="font-bold text-2xl text-purple-400">{totalQRScans}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-300">Category Clicks (Restaurants)</span>
                <span className="font-bold text-2xl text-orange-400">{restaurantCategoryClicks}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-300">Category Clicks (Clubs)</span>
                <span className="font-bold text-2xl text-pink-400">{clubCategoryClicks}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-300">Individual Club Clicks</span>
                <span className="font-bold text-2xl text-red-400">{totalClubClicks}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Individual Restaurant Clicks</span>
                <span className="font-bold text-2xl text-yellow-400">{totalRestaurantClicks}</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Engagement Breakdown</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">QR Scans</span>
                  <span className="text-sm text-gray-400">{totalQRScans}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '33%'}} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Category Clicks</span>
                  <span className="text-sm text-gray-400">{restaurantCategoryClicks + clubCategoryClicks}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '33%'}} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Item Detail Views</span>
                  <span className="text-sm text-gray-400">{totalClubClicks + totalRestaurantClicks}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '33%'}} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 p-4 bg-white/5 rounded-lg text-center text-gray-400 text-sm border border-white/10">
        <p>Last updated: {new Date().toLocaleString()}</p>
        <p className="mt-2">All data is updated in real-time as users interact with the app</p>
      </div>

    </div>
  )
}

export default Admin