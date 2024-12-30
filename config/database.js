import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
  mongoose.set("strictQuery", true) // only property specified in our shema would be saved

  //   if the db is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected")
    return
  }

  //   Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
  } catch (err) {
    console.log(err)
  }
}

export default connectDB
