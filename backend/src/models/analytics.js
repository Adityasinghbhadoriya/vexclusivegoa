import { getDB } from "../config/db.js"

// Create collections and indexes if they don't exist
export const initializeAnalytics = async () => {
  const db = getDB()
  
  try {
    // Create collections
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map(c => c.name)
    
    if (!collectionNames.includes("category_clicks")) {
      await db.createCollection("category_clicks")
      console.log("Created category_clicks collection")
    }
    
    if (!collectionNames.includes("club_clicks")) {
      await db.createCollection("club_clicks")
      console.log("Created club_clicks collection")
    }
    
    if (!collectionNames.includes("restaurant_clicks")) {
      await db.createCollection("restaurant_clicks")
      console.log("Created restaurant_clicks collection")
    }
    
    if (!collectionNames.includes("qr_scans")) {
      await db.createCollection("qr_scans")
      console.log("Created qr_scans collection")
    }
  } catch (error) {
    console.error("Error initializing analytics collections:", error.message)
  }
}