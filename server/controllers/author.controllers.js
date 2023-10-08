import Author from "../models/author.model.js";

// Controlador para obtener todos los autores
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener autores" });
  }
};

// Controlador para crear un nuevo autor
export const createAuthor = async (req, res) => {
  const { firstName, lastName, biography } = req.body;
  try {
    const newAuthor = new Author({ firstName, lastName, biography });
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo autor" });
  }
};
