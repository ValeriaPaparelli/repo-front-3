import React from "react";
import Pokemons from "../Pokemons/Pokemons";

const PokemonList = () => {
  let type = "water";
  return (
    <>
      <Pokemons type={type} />
    </>
  );
};

export default PokemonList;
