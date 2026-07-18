import mongoose from "mongoose";
import config from "./index.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.env.MONGODB_URI);
    console.log("🎊 Database connected successfully");
  } catch (error) {
    throw new Error(`Database connection failed: ${error.message}`);
  }
};

export default connectDB;
