import React from "react";
import "./PhotoCard.css"
const PhotoCard = ({ photo }) => {
  return (
    <figure>
      <img src={photo.download_url} alt={photo.author} />
      <figcaption>{photo.author}</figcaption>
    </figure>
  );
};

export default PhotoCard;
