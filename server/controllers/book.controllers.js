import Book from "../models/book.model.js";

// Controlador para obtener todos los libros
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (!books || books.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No hay libros registrados aún.",
      });
    }

    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

// Controlador para obtener un libro por ID
export const getBook = async (req, res) => {
  const { bookID } = req.params;

  try {
    const book = await Book.findById(bookID);

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: "No existe el libro solicitado.",
      });
    }

    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el libro" });
  }
};

// Controlador para crear un nuevo libro
export const createBook = async (req, res) => {
  const { title, genre, year, author, coverImage, biographyFile } = req.body;

  try {
    const newBook = new Book({
      title,
      genre,
      year,
      author,
      biography,
      coverImage,
    });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear un nuevo libro" });
  }
};

// Controlador para eliminar un libro por ID
export const deleteBook = async (req, res) => {
  const { bookID } = req.params;

  try {
    const book = await Book.findByIdAndDelete(bookID);

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: "No existe el libro solicitado.",
      });
    }

    res.json({ message: "Libro eliminado con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};

// Controlador para actualizar un libro por ID
export const updateBook = async (req, res) => {
  const { bookID } = req.params;
  const { title, genre, year, author, coverImage, biographyFile } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookID,
      { title, genre, year, author, coverImage, biographyFile },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        status: 404,
        message: "No existe el libro solicitado.",
      });
    }

    res.json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};
