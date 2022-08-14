import { Routes, Route } from "react-router-dom";
import {
  Films,
  Home,
  Popular,
  TopMovies,
  UpMovies,
  TvShow,
  Movie,
} from "./Pages";

export const Private = () => {
  return (
    <div className="">
      <Films />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Popular />} />
        <Route path="/top" element={<TopMovies />} />
        <Route path="/up" element={<UpMovies />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/single/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};
