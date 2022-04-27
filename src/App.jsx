import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./containers/CardContainer/CardContainer";
//import beerArr from "./data/data";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);

  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().startsWith(searchTerm);
  });

  console.log("filteredBeers");
  console.log(filteredBeers);

  const searchTermChangeHandler = (event) => {
    //handles changes in the search bar at the top
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  // // string array is set, if string array build up on tag - set by toggle
  // // use join by &&
  // //

  // //function for checking false true state of checkboxes
  // // then use function within useEffect

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((beerObjects) => {
        //beerObjects is just an element in this case
        console.log(beerObjects);
        setBeers(beerObjects);
      });
  }, [searchTerm]); // has to be changed based upon filters + the search engine - doesn't care about true or false just cares about change
  // open up postman and play around with the API

  console.log("after fetch");

  return (
    <div>
      <Nav searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={filteredBeers.length} />

      {/* <CardContainer beerArr={filteredBeers} /> */}
      <CardContainer beerArr={filteredBeers} />
    </div>
  );
};

export default App;
