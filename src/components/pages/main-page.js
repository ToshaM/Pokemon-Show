import React, { Component } from "react";
import PokemonDetails from "../pokemon-details";
import ItemList from "../item-list/item-list";
import Row from "../row";

export class MainPage extends Component {
  state = {
    selectedPokemon: 25,
  };

  onPokemonSelected = (id) => {
    this.setState({
      selectedPokemon: id,
    });
  };

  onItemSelected = (selectedPokemon) => {
    this.setState({ selectedPokemon });
  };

  render() {
    const { selectedPokemon } = this.state;

    return (
      <Row
        left={<ItemList onPokemonSelected={this.onPokemonSelected} />}
        right={<PokemonDetails pokemonId={selectedPokemon} />}
      />
    );
  }
}
