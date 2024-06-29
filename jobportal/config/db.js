import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connecting to ${con.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error.message}`.bgRed.white)
    }
}