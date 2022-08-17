import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Characters.css";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  const getCharacters = async () => {
    const rawData = await axios.get(
      "https://starwars-server.vercel.app/characters"
    );
    setCharacterList(rawData.data.data.characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className="characters">
      <h2>Characters</h2>
      <div className="gallery">
        {characterList.length > 0 ? (
          characterList.map((character) => (
            <CharacterCard characterInfo={character} key={character._id} />
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
        
      </div>
    </section>
  );
};

export default Characters;
