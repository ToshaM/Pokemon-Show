import React, { Component } from "react";

import "./item-list.css";
import PokeapiService from "../../services/pokeapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
  pokeapiService = new PokeapiService();

  state = {
    pokemonList: null,
  };

  componentDidMount() {
    this.pokeapiService.getAllPokemon().then((pokemonList) => {
      this.setState({
        pokemonList,
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onPokemonSelected(id)}
        >
          <span className="pokemon-id">{id}.</span> {name[0].toUpperCase() + name.slice(1)}
          <div className="pokemon-image-list">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
            />
          </div>
        </li>
      );
    });
  }

  render() {
    const { pokemonList } = this.state;

    if (!pokemonList) {
      return <Spinner />;
    }

    const items = this.renderItems(pokemonList);

    return (
      <div className="item-list-wrapper">
        <ul className="item-list list-group">{items}</ul>
      </div>
    );
  }
}
