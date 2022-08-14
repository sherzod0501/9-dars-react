import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

export const Movie = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=377730aaf04b02ec942be0a20410e5bc`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  console.log(id);
  console.log(data);
  return (
    <div className="Movie container">
      <img
        src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
        alt="card img"
      />
      <div className="movie-right">
        <h3 className="movie-title">{data?.title}</h3>
        <p className="movie-text">{data?.overview}</p>
        <div className="movie-genres">
          <p className="movie-genre-text">Genres:</p>
          {data?.genres &&
            data?.genres.map((el) => <p key={el.name}>{el?.name}</p>)}
        </div>
        <div className="movie-companies">
          <p className="movie-companies-text">Companies:</p>
          {data?.production_companies &&
            data?.production_companies.map((el) => (
              <p key={el.name}>{el?.name}</p>
            ))}
        </div>
      </div>
    </div>
  );
};
