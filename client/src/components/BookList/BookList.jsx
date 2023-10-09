import React from "react";
import useEntityList from "../hooks/useEntityList";

const BookList = () => {
  const books = useEntityList("books");

  return (
    <>
    <div className="BookList">
      <h2>Lista de Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default BookList;
