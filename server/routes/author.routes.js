import express from "express";
import {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} from "../controllers/author.controllers.js";
import { validateSchema } from "../middlewares/validator.js";
import { authorValidation } from "../models/schemas/author.schema.js";

const router = express.Router();

// Rutas para los autores
router.get("/authors-list", getAllAuthors);
router.get("/authors/:authorID", getAuthor);
router.post("/author-add", authorValidation, validateSchema, createAuthor);
router.put(
  "/authors/:authorID/update",
  authorValidation,
  validateSchema,
  updateAuthor
);
router.delete("/authors/:authorID", deleteAuthor);

export default router;
