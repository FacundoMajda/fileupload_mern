
import React from "react";
import useEntityForm from "../hooks/useEntityForm";

const BookForm = () => {
  const { formData, handleInputChange, handleSubmit } = useEntityForm("book");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Libro</h2>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Género"
          value={formData.genre}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Año"
          value={formData.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="ID del Autor"
          value={formData.author}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Libro</button>
      </form>
    </>
  );
};

export default BookForm;
