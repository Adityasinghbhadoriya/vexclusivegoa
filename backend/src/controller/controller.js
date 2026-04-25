import { getDB } from "../config/db.js"

// ============================================
// QR SCAN TRACKING
// ============================================

export const trackQRScan = async (req, res) => {
    try {
        const db = getDB()

        await db.collection("qr_scans").insertOne({
            scannedAt: new Date(),
            source: req.query.source || "qr"
        })

       res.json({ success: true, message: "QR scan tracked" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ============================================
// CATEGORY CLICKS (Clubs & Nightlife / Top Restaurants)
// ============================================

export const trackCategoryClick = async (req, res) => {
    try {
        const { category } = req.body
        
        if (!category || !["restaurants", "clubs"].includes(category)) {
            return res.status(400).json({ error: "Invalid category" })
        }

        const db = getDB()

        await db.collection("category_clicks").insertOne({
            category,
            clickedAt: new Date(),
            timestamp: Date.now()
        })

        res.json({ success: true, message: `${category} category click tracked` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategoryClicks = async (req, res) => {
    try {
        const db = getDB()
        const { category } = req.query

        const query = category ? { category } : {}
        const count = await db.collection("category_clicks").countDocuments(query)

        res.json({ success: true, category, count })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ============================================
// CLUB CLICKS (Individual Clubs)
// ============================================

export const trackClubClick = async (req, res) => {
    try {
        const { clubId, clubName } = req.body

        if (!clubId) {
            return res.status(400).json({ error: "clubId is required" })
        }

        const db = getDB()

        await db.collection("club_clicks").insertOne({
            clubId,
            clubName: clubName || "",
            clickedAt: new Date(),
            timestamp: Date.now()
        })

        res.json({ success: true, message: `Club ${clubName || clubId} click tracked` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getClubClicks = async (req, res) => {
    try {
        const db = getDB()
        const { clubId } = req.query

        let pipeline

        if (clubId) {
            // Get clicks for specific club
            pipeline = [
                { $match: { clubId: parseInt(clubId) } },
                { $group: { _id: "$clubName", count: { $sum: 1 } } }
            ]
        } else {
            // Get clicks for all clubs
            pipeline = [
                { $group: { _id: "$clubId", clubName: { $first: "$clubName" }, count: { $sum: 1 } } },
                { $sort: { count: -1 } }
            ]
        }

        const results = await db.collection("club_clicks").aggregate(pipeline).toArray()

        res.json({ success: true, data: results })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ============================================
// RESTAURANT CLICKS (Individual Restaurants)
// ============================================

export const trackRestaurantClick = async (req, res) => {
    try {
        const { restaurantId, restaurantName } = req.body

        if (!restaurantId) {
            return res.status(400).json({ error: "restaurantId is required" })
        }

        const db = getDB()

        await db.collection("restaurant_clicks").insertOne({
            restaurantId,
            restaurantName: restaurantName || "",
            clickedAt: new Date(),
            timestamp: Date.now()
        })

        res.json({ success: true, message: `Restaurant ${restaurantName || restaurantId} click tracked` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRestaurantClicks = async (req, res) => {
    try {
        const db = getDB()
        const { restaurantId } = req.query

        let pipeline

        if (restaurantId) {
            // Get clicks for specific restaurant
            pipeline = [
                { $match: { restaurantId: parseInt(restaurantId) } },
                { $group: { _id: "$restaurantName", count: { $sum: 1 } } }
            ]
        } else {
            // Get clicks for all restaurants
            pipeline = [
                { $group: { _id: "$restaurantId", restaurantName: { $first: "$restaurantName" }, count: { $sum: 1 } } },
                { $sort: { count: -1 } }
            ]
        }

        const results = await db.collection("restaurant_clicks").aggregate(pipeline).toArray()

        res.json({ success: true, data: results })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ============================================
// GET ALL ANALYTICS DASHBOARD DATA
// ============================================

export const getAnalytics = async (req, res) => {
    try {
        const db = getDB()

        const qrCount = await db.collection("qr_scans").countDocuments()
        
        const categoryClicks = await db.collection("category_clicks").aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } }
        ]).toArray()

        const clubStats = await db.collection("club_clicks").aggregate([
            { $group: { _id: "$clubId", clubName: { $first: "$clubName" }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).toArray()

        const restaurantStats = await db.collection("restaurant_clicks").aggregate([
            { $group: { _id: "$restaurantId", restaurantName: { $first: "$restaurantName" }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).toArray()

        const totalClubClicks = clubStats.reduce((sum, club) => sum + club.count, 0)
        const totalRestaurantClicks = restaurantStats.reduce((sum, restaurant) => sum + restaurant.count, 0)

        res.json({
            success: true,
            qrScans: qrCount,
            categories: categoryClicks,
            clubs: {
                total: totalClubClicks,
                byClub: clubStats
            },
            restaurants: {
                total: totalRestaurantClicks,
                byRestaurant: restaurantStats
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}