import Book from "../models/book.model.js";

// Controlador para obtener todos los libros
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

// Controlador para crear un nuevo libro
export const createBook = async (req, res) => {
  const { title, genre, year, author } = req.body;
  try {
    const newBook = new Book({ title, genre, year, author, coverImage: "" });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo libro" });
  }
};
