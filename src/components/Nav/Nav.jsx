import React from "react";
import "./Nav.scss";
import logo from "./BrewdogLogo.png";
import SearchBox from "../SearchBox/SearchBox";

const Nav = ({ searchTerm, searchTermChangeHandler, searchResultCount }) => {
  return (
    <nav className="nav">
      <h2 className="nav__heading">Brewdog Connoisseur</h2>
      <SearchBox searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={searchResultCount} />
      <img className="nav__logo" src={logo} alt="brewdog logo" />
    </nav>
  );
};

export default Nav;
