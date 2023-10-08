import React, { useState } from "react";

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/authors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, biography }),
      });

      if (response.ok) {
        console.log("Autor agregado con éxito");
        setName("");
        setBiography("");
      } else {
        console.error("Error al agregar el autor");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Autor</h2>
        <input
          type="text"
          placeholder="Nombre del autor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Biografía"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
        <button type="submit">Agregar Autor</button>
      </form>
    </>
  );
};

export default AuthorForm;
