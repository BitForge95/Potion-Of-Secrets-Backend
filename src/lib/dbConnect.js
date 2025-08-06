import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function dbConnect() {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Database connected successfully at ${db.connection.host}`);
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

export default dbConnect;
