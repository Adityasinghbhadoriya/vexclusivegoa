import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import analyticsRoutes from "./routes/analyticsRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/analytics", analyticsRoutes)

const PORT = process.env.PORT || 5000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})