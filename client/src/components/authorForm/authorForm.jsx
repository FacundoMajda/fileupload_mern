import React from "react";
import useEntityForm from "../hooks/useEntityForm";

const AuthorForm = () => {
  const { formData, handleInputChange, handleSubmit } = useEntityForm("author");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Autor</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <textarea
          name="biography"
          placeholder="Biografía"
          value={formData.biography}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Autor</button>
      </form>
    </>
  );
};

export default AuthorForm;
