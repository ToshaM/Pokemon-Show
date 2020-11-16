/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import PokeapiService from "../../services/pokeapi-service";
import Spinner from "../spinner";

import "./random-pokemon.css";

class RandomPokemon extends Component {
  pokeapiService = new PokeapiService();

  state = {
    id: null,
    name: null,
    height: null,
    weight: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePokemon();
    this.interval = setInterval(this.updatePokemon, 5000);
  }

  componentWillUnmount() {
    clearImmediate(this.interval);
  }

  onPokemonLoaded = (pokemon) => {
    this.setState({ pokemon, loading: false });
  };

  onError = (err) => {};

  updatePokemon = () => {
    const id = Math.floor(Math.random() * 893);
    this.pokeapiService
      .getPokemon(id)
      .then((pokemon) => {
        this.setState({
          id: pokemon.id,
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          img: pokemon.sprites.front_shiny,
          loading: false,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { name, height, weight, img, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="random-pokemon jumbotron rounded">
        <img className="pokemon-image" src={`${img}`} />
        <div>
          <h4>Pokemon info</h4>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">
          <span className="term">Number: {this.state.id}</span>
          </li>
            <li className="list-group-item">
              <span className="term">Name:</span>
              <span>{name[0].toUpperCase() + name.slice(1)}</span>
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

export { RandomPokemon };
