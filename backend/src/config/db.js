import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const client = new MongoClient(process.env.MONGO_URI)

let db

export const connectDB = async () => {
    try {
        await client.connect()
        db = client.db("qrAnalytics")
        console.log("MongoDB connected")
    } catch (error) {
        console.log("DB connection error:", error.message)
        process.exit(1)
    }
}

export const getDB = () => db