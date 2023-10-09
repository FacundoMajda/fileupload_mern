import React from "react";
import Slider from "react-slick";
import useEntityList from "../hooks/useEntityList";

const AuthorSlider = () => {
  const authors = useEntityList("authors");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="AuthorSlider">
      <h2>Autores Destacados</h2>
      <Slider {...settings}>
        {authors.map((author) => (
          <div key={author._id} className="author-card">
            <h3>
              {author.firstName} {author.lastName}
            </h3>
            <p>{author.biography}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AuthorSlider;
