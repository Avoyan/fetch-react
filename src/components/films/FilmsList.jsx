import { useState } from "react";
import { useEffect } from "react";
import FilmsListItem from "./FilmsListItem";

function FilmsList () {
  const [films, setFilms] = useState([]);
  
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => setFilms(films))
  }, []);

  return (
    <div>
      {
        films.length > 0 &&  
        <table className="films-table">
          <thead>
            <tr>
              <th className="table-cell">Title</th>
              <th className="table-cell">Release Date</th>
              <th className="table-cell">Director</th>
              <th className="table-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {films.map((item) => 
              <FilmsListItem
                key={item.id}
                film={item}
              />
            )}
          </tbody>
        </table>      
      }
    </div>
  );
}

export default FilmsList;