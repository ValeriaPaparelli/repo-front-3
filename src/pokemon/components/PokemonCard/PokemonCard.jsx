import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.avatar} alt="" />
      <h3>{pokemon.powerLevel}</h3>
      <p>{pokemon.agressive ? "es agresivo" : "no es agresivo"}</p>
    </div>
  );
};

export default PokemonCard;
