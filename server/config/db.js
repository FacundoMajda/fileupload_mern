//@ts-check
import "dotenv/config";
import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    const DB_NAME = process.env.DB_NAME;
    await mongoose.connect(`${DB_URL}${DB_NAME}`);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};
