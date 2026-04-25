import express from "express"
import {
    trackQRScan,
    trackCategoryClick,
    getCategoryClicks,
    trackClubClick,
    getClubClicks,
    trackRestaurantClick,
    getRestaurantClicks,
    getAnalytics
} from "../controller/controller.js"

const router = express.Router()

// QR Scan tracking
router.get("/scan", trackQRScan)

// Category clicks (Restaurants / Clubs)
router.post("/category-click", trackCategoryClick)
router.get("/category-clicks", getCategoryClicks)

// Club clicks
router.post("/club-click", trackClubClick)
router.get("/club-clicks", getClubClicks)

// Restaurant clicks
router.post("/restaurant-click", trackRestaurantClick)
router.get("/restaurant-clicks", getRestaurantClicks)

// Admin dashboard - Get all analytics
router.get("/admin", getAnalytics)

export default router