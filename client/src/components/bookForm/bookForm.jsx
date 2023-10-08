import React, { useState } from "react";
import FileUploader from "../uploader/uploader";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [biographyFile, setBiographyFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("year", year);
    formData.append("author", author);
    formData.append("coverImage", coverImage);
    formData.append("biographyFile", biographyFile);

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        console.log("Libro agregado con éxito");
      } else {
        console.error("Error al agregar libro");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Libro</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Género"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID del Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <FileUploader
          accept="image/*"
          onFileSelected={(file) => setCoverImage(file)}
        />

        <FileUploader
          accept=".txt"
          onFileSelected={(file) => setBiographyFile(file)}
        />
        <button type="submit">Agregar Libro</button>
      </form>
    </>
  );
};

export default BookForm;
