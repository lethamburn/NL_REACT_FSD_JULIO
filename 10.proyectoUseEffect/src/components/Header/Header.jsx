import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = ({ setShowCharacters, setShowMovies }) => {
  return (
    <header>
      <img src={logo} alt="Star Wars Logo" />
      <nav>
        <ul>
          <li onClick={() => setShowCharacters(true) & setShowMovies(false)}>
            Characters
          </li>
          <li onClick={() => setShowMovies(true) & setShowCharacters(false)}>
            Movies
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
