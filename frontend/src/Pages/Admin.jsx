import React, { useEffect, useState } from "react"

const Admin = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔐 Simple Password Protection
  useEffect(() => {
    const password = prompt("Enter Admin Password")

    if (password !== "admin123") {
      alert("Access Denied")
      window.location.href = "/"
    }
  }, [])

  // 📡 Fetch Analytics
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/analytics/admin")
        const result = await res.json()
        setData(result)
      } catch (err) {
        console.error("Error fetching analytics:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-lg">Loading Analytics...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f2937] to-black text-white p-6">

      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">

        {/* QR SCANS */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">QR Scans</h2>
          <p className="text-4xl font-bold text-yellow-400">
            {data?.qrScans || 0}
          </p>
        </div>

        {/* RESTAURANT CLICKS */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Restaurant Clicks</h2>
          <p className="text-4xl font-bold text-green-400">
            {data?.restaurantClicks || 0}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Admin