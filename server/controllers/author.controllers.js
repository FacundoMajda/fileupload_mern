import Author from "../models/author.model.js";

// Controlador para obtener todos los autores
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();

    if (!authors || authors.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No hay autores registrados aún.",
      });
    }

    res.status(200).json({
      authors: authors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener autores" });
  }
};

// Controlador para obtener un autor por ID
export const getAuthor = async (req, res) => {
  const { authorID } = req.params;

  try {
    const author = await Author.findById(authorID);

    if (!author) {
      return res.status(404).json({
        status: 404,
        message: "No existe el autor solicitado.",
      });
    }

    res.status(200).json({
      author: author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el autor" });
  }
};

// Controlador para crear un nuevo autor
export const createAuthor = async (req, res) => {
  const { firstName, lastName, biography } = req.body;

  try {
    const newAuthor = new Author.create(req.body);
    const savedAuthor = await newAuthor.save();
    res.status(201).json({
      message: "Autor creado exitosamente",
      author: savedAuthor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear un nuevo autor" });
  }
};

// Controlador para eliminar un autor por ID
export const deleteAuthor = async (req, res) => {
  const { authorID } = req.params;

  try {
    const author = await Author.delete(authorID);

    if (!author) {
      return res.status(404).json({
        status: 404,
        message: "No existe el autor solicitado.",
      });
    }

    res.status(200).json({
      message: "Autor borrado correctamente",
      author: author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el autor" });
  }
};

// Controlador para actualizar un autor por ID
export const updateAuthor = async (req, res) => {
  const { authorID } = req.params;
  try {
    const updatedAuthor = await Author.update(authorID, req.body);

    if (!updatedAuthor) {
      return res.status(404).json({
        status: 404,
        message: "No existe el autor solicitado.",
      });
    }
    res.status(200).json({
      message: "Autor actualizado correctamente",
      author: updatedAuthor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el autor" });
  }
};
