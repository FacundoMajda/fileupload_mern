import React, { useState } from "react";
import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";
import AuthorSlider from "../AuthorSlider/AuthorSlider";
import AuthorForm from "../AuthorForm/AuthorForm";

const Home = () => {
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [showAuthorsSlider, setShowAuthorsSlider] = useState(false);
  const [error, setError] = useState(null);

  const toggleAddBookForm = () => {
    setShowAddBookForm(!showAddBookForm);
  };

  const toggleAuthorsSlider = () => {
    setShowAuthorsSlider(!showAuthorsSlider);
  };

  return (
    <div>
      <h1>Biblioteca</h1>
      <button onClick={toggleAddBookForm}>Agregar Libro</button>
      <button onClick={toggleAuthorsSlider}>Ver Autores</button>

      {showAddBookForm && <BookForm onError={setError} />}
      <BookList />

      {showAuthorsSlider && (
        <div>
          <AuthorSlider />
          <AuthorForm onError={setError} />
        </div>
      )}

      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Home;
