import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const db_uri = process.env.DB_URL;
        await mongoose.connect(db_uri)
        console.log("Database connected");
    } catch (error) {
        console.log("Database disconnected");
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDb;