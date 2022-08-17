import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movieInfo }) => {
  return (
    <figure className="moviecard">
      <h3>{movieInfo.name}</h3>
      <img src={movieInfo.poster} alt={movieInfo.name} />
    </figure>
  );
};

export default MovieCard;
