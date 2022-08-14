import "./PopularItem.css";
import { Link } from "react-router-dom";

export const PopularItem = ({ data }) => {
  return (
    <>
      <Link className="popular-link" to={`/single/${data.id}`}>
        <li key={data.id} className="PopularItem">
          <img
            width="300"
            height="400"
            src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            alt="popular img"
          />
          <h3>{data.title}</h3>
          <p>
            Popularity: <span>{data?.popularity}</span>
          </p>
          <p>
            Years: <span>{data?.release_date}</span>
          </p>
        </li>
      </Link>
    </>
  );
};
