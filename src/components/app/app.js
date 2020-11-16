import React, { Component } from "react";

import Header from "../header";
import { RandomPokemon } from "../random-pokemon";
import { PokemonPage, MainPage, FAQPage } from "../pages";
import PokemonDetails from "../pokemon-details";

import "./app.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <RandomPokemon />
          <Route path="/" component={MainPage} exact />
          <Route path="/pokemons/" component={PokemonPage} exact />
          <Route
            path="/pokemons/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <PokemonDetails pokemonId={id} />;
            }}
          />
          <Route path="/faq/" component={FAQPage} />
        </Router>
      </div>
    );
  }
}
