import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ searchTerm, searchTermChangeHandler, searchResultCount }) => {
  let searchResultText = `${searchResultCount} beers found`;
  // searchResultCount == 1 ? "Found 1 pokemon" :

  return (
    <div className="search-box">
      <label htmlFor="searchBox"></label>
      <input
        type="text"
        id="searchBox"
        className="search-box__name-search"
        placeholder="Name to search"
        onChange={searchTermChangeHandler}
        value={searchTerm}
      />
      <p> {searchResultText}</p>
    </div>
  );
};

export default SearchBox;

// const SearchBox = props => {
//   const { label, searchTerm, handleInput } = props;

//   const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

//   return (
//     <form className="search-box">
//       <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
//       <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input"/>
//     </form>
//   );
// };

// export default SearchBox;
