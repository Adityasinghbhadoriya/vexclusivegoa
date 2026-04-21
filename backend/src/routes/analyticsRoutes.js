import express from "express"
import {
    trackQRScan,
    trackRestaurantClick,
    getAnalytics
} from "../controller/controller.js"

const router = express.Router()

router.get("/scan", trackQRScan)
router.post("/restaurant-click", trackRestaurantClick)
router.get("/admin", getAnalytics)

export default router