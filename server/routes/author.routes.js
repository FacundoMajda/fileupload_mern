import express from "express";
import {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} from "../controllers/author.controllers.js";
import { validateSchema } from "../models/schemas/validator.js";

const router = express.Router();

// Rutas para los autores
router.get("/authors-list", getAllAuthors);
router.get("/authors/:authorID", getAuthor);
router.post("/author-add", validateSchema, createAuthor);
router.put("/authors/:authorID", validateSchema, updateAuthor);
router.delete("/authors/:authorID", deleteAuthor);  

export default router;
