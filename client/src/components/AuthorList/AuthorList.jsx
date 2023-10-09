import React from "react";
import useEntityList from "../hooks/useEntityList";

const AuthorList = () => {
  const authors = useEntityList("authors");

  return (
    <>
      <div className="AuthorList">
        <h2>Lista de Autores</h2>
        <ul>
          {authors.map((author) => (
            <li key={author._id}>
              {author.firstName} {author.lastName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AuthorList;
