/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "./pokemon-details.css";
import PokeapiService from "../../services/pokeapi-service";

export default class PokemonDetails extends Component {

  pokeapiService = new PokeapiService();

  state = {
    pokemon: null,
  };

  componentDidMount() {
    this.updatePokemon();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.updatePokemon();
    }
  }

  updatePokemon() {
    const { pokemonId } = this.props;
    if (!pokemonId) {
      return;
    }

    this.pokeapiService.getPokemon(pokemonId).then((pokemon) => {
      this.setState({pokemon});
    });
  }

  render() {
    if (!this.state.pokemon) {
      return <span>Select a pokemon from a list</span>;
    }

    const { height, id, name, weight, base_experience} = this.state.pokemon;

    return (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
        />

        <div className="card-body">
          <h4>{name[0].toUpperCase() + name.slice(1)}</h4>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">
          <span className="term">Number: {id}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Base experience: {base_experience}</span>
          </li>
            <li className="list-group-item">
              <span className="term">Height:</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight:</span>
              <span>{weight}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
