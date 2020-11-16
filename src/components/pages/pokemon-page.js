import React from "react";
import ItemList from "../item-list/item-list";
import { withRouter } from "react-router-dom";

const PokemonPage = ({ history }) => {
  return (
    <ItemList
      onPokemonSelected={(pokemonId) => {
        history.push(pokemonId);
      }}
    />
  );
};

export default withRouter(PokemonPage);
