import mongoose from "mongoose"

const analyticsSchema = new mongoose.Schema({
  scans: {
    type: Number,
    default: 0
  },
  restaurants: [
    {
      id: Number,
      name: String,
      clicks: {
        type: Number,
        default: 0
      }
    }
  ]
})

export default mongoose.model("Analytics", analyticsSchema)