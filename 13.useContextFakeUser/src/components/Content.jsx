import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { UserContext } from "../context/context";

const Content = () => {
  const [photos, setPhotos] = useState([]);
  const {user} = useContext(UserContext);

  const getPhotos = async () => {
    const raw = await axios.get("https://picsum.photos/v2/list");
    setPhotos(raw.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return <section className="gallery">
    {user != undefined ? photos.map((photo) => <PhotoCard key={photo.id} photo={photo}/>) : <h2>Please, log in</h2>}
  </section>;
};

export default Content;
