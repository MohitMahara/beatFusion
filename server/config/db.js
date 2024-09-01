import mongoose, { mongo } from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Successfully connected to MongoDB database ${conn.connection.host}`);
    } catch (error) {
        console.log(`error in connection with database ${error}`);
    }
}

export default connectDB;