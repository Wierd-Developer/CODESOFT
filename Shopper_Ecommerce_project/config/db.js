import mongoose from "mongoose";

const connectioDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${con.connection.host}`);

    } catch (error) {
        console.log(`Mongodb connection failed ${error}`);
    }
}
export default connectioDB;