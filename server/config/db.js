import "dotenv/config";
import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    const DB_NAME = process.env.DB_NAME;
    const connection = await mongoose.connect(`${DB_URL}${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection) {
      console.log("Conexión a MongoDB establecida correctamente");
    } else {
      console.error("No se pudo establecer la conexión a MongoDB");
    }
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};
