import Book from "../models/book.model.js";

import { unlink } from "fs";
import { v4 as uuidv4 } from "uuid";

// Controlador para obtener todos los libros
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    if (!books || books.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No hay libros registrados aún.",
      });
    }

    res.status(200).json({
      books: books,
    });
  } catch (error) {
    console.log("Error en Controlador: SHOW", error);
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

    res.status(200).json({ book: book });
  } catch (error) {
    console.log("Error en Controlador: GET", error);
    res.status(500).json({ error: "Error al obtener el libro" });
  }
};

// Controlador para crear un nuevo libro
export const createBook = async (req, res) => {
  const { title, genre, year, biography, author } = req.body;
  const { coverImage } = req.files;

  //---------//

  if (!req.files || Object.keys(req.files).length === 0) {
    const errorMessage = "No se han cargado archivos";
    console.error(errorMessage);
    return res.status(400).send(errorMessage);
  }

  const original_filename = image.name.split(".")[0];
  const format = image.name.split(".")[1];
  //---------//

  try {
    const file_name = uuidv4() + "." + format;
    const uploadPath = path.join(
      import.meta.url,
      "../library/images",
      `${file_name}`
    );

    //metodo mv
    coverImage.mv(uploadPath, (err) => {
      if (err) {
        const errorMessage = `Error al subir archivo: ${err.message}`;
        console.error(errorMessage);
        return res.status(500).send(errorMessage);
      }

      const successMessage = `Archivo subido: ${sampleFile.name} - ${currentDate}`;
      console.log(successMessage);
      res.send(successMessage);
    });

    const newBook = new Book.create({ ...req.body });
    const savedBook = await newBook.save();

    res.status(200).json({ savedBook: savedBook });
  } catch (error) {
    console.log("Error en Controlador: CREATE", error);
    res.status(500).json({ error: "Error al crear un nuevo libro" });
  }
};

// Controlador para eliminar un libro por ID
export const deleteBook = async (req, res) => {
  const { bookID } = req.params;
  const book = await Book.findById(bookID);
  const original_filename = image.name.split(".")[0];
  const format = image.name.split(".")[1];

  if (!book) {
    return res.status(404).json({
      status: 404,
      message: "No existe el libro solicitado.",
    });
  }

  try {
    const file_name = uuidv4() + "." + format;
    const uploadPath = path.join(
      import.meta.url,
      "../library/images",
      `${file_name}`
    );

    unlink(uploadPath, function (err) {
      if (!err) {
        console.log("coverImage eliminado.", coverImage);
      }
    });

    await Book.delete(bookID);

    console.log("Libro eliminado");
    res.json({ message: "Libro eliminado con éxito" });
    res.status(200).json({ book: book });
  } catch (error) {
    console.log("Error en Controlador: DELETE", error);
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};

// Controlador para actualizar un libro por ID
export const updateBook = async (req, res) => {
  const { bookID } = req.params;

  try {
    const updatedBook = await Book.update(bookID, req.body, coverImage);

    if (!updatedBook) {
      return res.status(404).json({
        status: 404,
        message: "No existe el libro solicitado.",
      });
    }

    res.status(200).json({ updatedBook: updatedBook });
  } catch (error) {
    console.log("Error en Controlador: UPDATE", error);
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};
