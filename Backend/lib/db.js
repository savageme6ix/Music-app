import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const connectionString = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`connected to ${connectionString}`)
    } catch(error){
        console.log("Failed to connect to MongoDb", error);
        process.exit(1);
    }
}