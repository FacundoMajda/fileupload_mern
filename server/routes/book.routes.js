import express from "express";
import {
  getAllBooks,
  createBook,
} from "../controllers/book.controllers.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);

export default router;
