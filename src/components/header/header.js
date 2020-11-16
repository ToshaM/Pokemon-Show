import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Show Pokemon</Link>
      </h3>
      <ul>
        <li>
          <Link to="/pokemons/">Pokemons</Link>
        </li>
        <li>
          <a href="/FAQ/">F.A.Q.</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
