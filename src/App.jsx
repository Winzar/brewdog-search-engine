import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./containers/CardContainer/CardContainer";
import { useState, useEffect } from "react";
import beerArr from "./data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [beers, setBeers] = useState([]);

  const filteredBeers = beerArr.filter((beer) => {
    return beer.name.toLowerCase().startsWith(searchTerm);
  });

  console.log("filteredBeers");
  console.log(filteredBeers);

  const searchTermChangeHandler = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  // // string array is set, if string array build up on tag - set by toggle
  // // use join by &&
  // //

  // //function for checking false true state of checkboxes
  // // then use function within useEffect

  // useEffect(() => {
  //   fetch("https://api.punkapi.com/v2/beers?page=")
  //     .then((response) => response.json())
  //     .then((userObjects) => {
  //       console.log(userObjects);
  //       setBeers(userObjects);
  //     });
  // }, [searchTerm]); // has to be changed based upon filters + the search engine - doesn't care about true or false just cares about change
  // // open up postman and play around with the API

  // console.log("after fetch");

  return (
    <div>
      <Nav searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={filteredBeers.length} />

      <CardContainer beerArr={filteredBeers} />
    </div>
  );
};

export default App;
