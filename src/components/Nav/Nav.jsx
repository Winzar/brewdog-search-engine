import React from "react";
import "./Nav.scss";
import logo from "./BrewdogLogo.png";
import SearchBox from "../SearchBox/SearchBox";

const Nav = ({ searchTerm, searchTermChangeHandler, searchResultCount }) => {
  return (
    <nav className="nav">
      <div className="nav__upper">
        <h2 className="nav__heading">Brewdog Connoisseur</h2>
        <SearchBox searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={searchResultCount} />
        <img className="nav__logo" src={logo} alt="brewdog logo" />
      </div>
      <div className="nav__lower">
        <div>
          <input type="checkbox" id="checkbox-1" />
          <label htmlFor="checkbox-ABV"> ABV value great than 6%</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox-2" />
          <label htmlFor="checkbox-Classic"> Brewed before 2010</label>
        </div>

        <div>
          <input type="checkbox" id="checkbox-3" />
          <label htmlFor="checkbox-PH"> pH lower than 4</label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
