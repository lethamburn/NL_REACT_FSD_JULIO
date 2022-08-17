import React from 'react'
import "./CharacterCard.css";
const CharacterCard = ({characterInfo}) => {
  return (
    <figure className="charactercard">
       <h3>{characterInfo.name}</h3>
       <img src={characterInfo.image} alt={characterInfo.name} />
    </figure>
  )
}

export default CharacterCard