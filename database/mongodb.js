import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error(
        "Database URI is not defined in .env.<development/production>.local"
    );
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode.`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectToDatabase;
