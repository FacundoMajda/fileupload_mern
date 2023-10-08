import express from "express";
import {
  getAllAuthors,
  createAuthor,
} from "../controllers/author.controllers.js";

const router = express.Router();

router.get("/authors", getAllAuthors);
router.post("/authors", createAuthor);

export default router;
