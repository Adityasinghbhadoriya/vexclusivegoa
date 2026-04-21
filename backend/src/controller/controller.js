import { getDB } from "../config/db.js"

export const trackQRScan = async (req, res) => {
    try {
        const db = getDB()

        await db.collection("qr_scans").insertOne({
            scannedAt: new Date(),
            source: "daluna_qr"
        })

        res.redirect("http://localhost:5173/")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const trackRestaurantClick = async (req, res) => {
    try {
        const { restaurantId } = req.body
        const db = getDB()

        await db.collection("restaurant_clicks").insertOne({
            restaurantId,
            clickedAt: new Date()
        })

        res.json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAnalytics = async (req, res) => {
    try {
        const db = getDB()

        const qrCount = await db.collection("qr_scans").countDocuments()
        const restaurantCount = await db.collection("restaurant_clicks").countDocuments()

        res.json({
            qrScans: qrCount,
            restaurantClicks: restaurantCount
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}