import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const rawData = await axios.get(
      "https://starwars-server.vercel.app/movies"
    );
    setMovieList(rawData.data.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="movies">
      <h2>Movies</h2>
      <div className="gallery">
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <MovieCard key={movie._id} movieInfo={movie} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
