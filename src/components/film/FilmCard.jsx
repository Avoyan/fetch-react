import { useState } from "react";
import { useEffect } from "react";

function FilmCard () {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
      .then(res => res.json())
      .then(film => setFilm(film));
  }, []);

  return (
    <div>
      {
        Object.keys(film).length !== 0 &&
        <div className="card">
          <div className="card-item">
            <span className="item-title">Title:</span>
            {film.title}
          </div>
          <div className="card-item">
            <span className="item-title">Description:</span>
            {film.description}
          </div>
          <div className="card-item">
            <span className="item-title">Director:</span>
            {film.director}
          </div>
          <div className="card-item">
            <span className="item-title">Producer:</span>
            {film.producer}
          </div>
          <div className="card-item">
            <span className="item-title">Release Date:</span>
            {film.release_date}
          </div>
        </div>
      }
    </div>
  );
}

export default FilmCard;