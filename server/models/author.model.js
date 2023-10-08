import mongoose from "mongoose";
import authorSchema from "./schemas/author.schema.js"; // Importa el esquema del autor

const Author = mongoose.model("Author", authorSchema);

export default Author;
