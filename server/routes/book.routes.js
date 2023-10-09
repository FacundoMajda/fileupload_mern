import express from "express";
import {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/book.controllers.js";
import { validateSchema } from "../middlewares/validator.js";
import { bookValidation } from "../models/schemas/book.schema.js";

const router = express.Router();

// Rutas para los libros
router.get("/books-list", getAllBooks);
router.get("/books/:bookID", getBook);
router.post("/book-add", bookValidation, validateSchema, createBook);
router.put("/books/:bookID/update", bookValidation, validateSchema, updateBook);
router.delete("/books/:bookID", deleteBook);

export default router;
