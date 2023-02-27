import React from "react";
import pokemonsJson from "../../data/pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({ type }) => {
  let pokemonsByType = pokemonsJson[type];

  return (
    <>
      {pokemonsByType.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </>
  );
};

export default Pokemons;
