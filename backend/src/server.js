import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import { initializeAnalytics } from "./models/analytics.js"
import analyticsRoutes from "./routes/analyticsRoutes.js"

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json())

app.use("/api/analytics", analyticsRoutes)

const PORT = process.env.PORT || 5000

connectDB().then(async () => {
    await initializeAnalytics()
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})