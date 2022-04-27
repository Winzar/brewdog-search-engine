import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./containers/CardContainer/CardContainer";
import { useState } from "react";
import beerArr from "./data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeers = beerArr.filter((beer) => {
    return beer.name.toLowerCase().startsWith(searchTerm);
  });

  console.log("filteredBeers");
  console.log(filteredBeers);

  const searchTermChangeHandler = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  // useEffect(() => {
  //   fetch("https://api.punkapi.com/v2/beers?page=" + userRange)
  //     .then((response) => response.json())
  //     .then((userObjects) => {
  //       console.log(userObjects);
  //       setUserArr(userObjects.results);
  //     });
  // }, [userRange]);
  // console.log("after fetch");

  return (
    <div>
      <Nav searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={filteredBeers.length} />

      <CardContainer beerArr={filteredBeers} />
    </div>
  );
};

export default App;
