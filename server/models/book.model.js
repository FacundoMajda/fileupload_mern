import mongoose from "mongoose";
import bookSchema from "./schemas/book.schema.js"; // Importa el esquema del libro

const Book = mongoose.model("Book", bookSchema);

export default Book;
