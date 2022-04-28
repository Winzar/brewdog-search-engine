import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./containers/CardContainer/CardContainer";
//import beerArr from "./data/data";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const [abvFilter, setabvFilter] = useState(false);
  const [classicFilter, setclassicFilter] = useState(false);
  const [phFilter, setphFilter] = useState(false);

  const abvFilterChangeHandler = (event) => {
    if (event.target.checked == true) {
      setabvFilter(true);
    } else {
      setabvFilter(false);
      return;
    }
  };

  const classicFilterChangeHandler = (event) => {
    if (event.target.checked == true) {
      setclassicFilter(true);
    } else {
      setclassicFilter(false);
      return;
    }
  };

  const phFilterChangeHandler = (event) => {
    if (event.target.checked == true) {
      setphFilter(true);
    } else {
      setphFilter(false);
      return;
    }
  };

  const abvFilterer = (array) => {
    //console.log(array);
    return array.filter((beer) => {
      //console.log(beer.abv);
      return beer.abv > 6;
    });
  };

  const classicFilterer = (array) => {
    //console.log(array);
    return array.filter((beer) => {
      var beerAge = beer.first_brewed.split("");
      var newBeerAge = beerAge.slice(3);
      var returnBeerAge = newBeerAge.join("");
      return returnBeerAge < 2010;
    });
  };

  const phFilterer = (array) => {
    //console.log(array);
    return array.filter((beer) => {
      //console.log(beer.abv);
      return beer.ph < 4;
    });
  };

  let filteredBeers;

  if (abvFilter == true) {
    filteredBeers = abvFilterer(beers);
  }
  if (classicFilter == true) {
    filteredBeers = classicFilterer(beers);
  }
  if (phFilter == true) {
    filteredBeers = phFilterer(beers);
  }
  if (abvFilter == true && classicFilter == true) {
    filteredBeers = classicFilterer(abvFilterer(beers));
  }
  if (classicFilter == true && phFilter == true) {
    filteredBeers = phFilterer(classicFilterer(beers));
  }
  if (abvFilter == true && phFilter == true) {
    filteredBeers = phFilterer(abvFilterer(beers));
  }
  if (abvFilter == true && classicFilter == true && phFilter == true) {
    filteredBeers = classicFilterer(phFilterer(abvFilterer(beers)));
  } else if (abvFilter == false && classicFilter == false && phFilter == false) {
    filteredBeers = beers;
  }

  console.log("filteredBeers  " + filteredBeers);
  const searchedBeers = filteredBeers.filter((beer) => {
    return beer.name.toLowerCase().startsWith(searchTerm);
  });

  // could do several if statements using this segment above, changing it from beers to beers>abv 6 or something simiular for each / changing the array used. Using beer as the master,
  // with there being a filter prior

  console.log("searchedBeers");
  console.log(searchedBeers);

  //

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

  // do three separate fetches that rely on three different states, with an if condition for each state

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => response.json())
      .then((beerObjects) => {
        //beerObjects is just an element in this case
        console.log(beerObjects);
        setBeers(beerObjects);
      });
  }, [searchTerm, phFilter, abvFilter, classicFilter]); // has to be changed based upon filters + the search engine - doesn't care about true or false just cares about change
  // open up postman and play around with the API

  console.log("after fetch");

  return (
    <div>
      <Nav
        searchTerm={searchTerm}
        searchTermChangeHandler={searchTermChangeHandler}
        searchResultCount={searchedBeers.length}
        abvFilterChangeHandler={abvFilterChangeHandler}
        classicFilterChangeHandler={classicFilterChangeHandler}
        phFilterChangeHandler={phFilterChangeHandler}
      />

      {/* <CardContainer beerArr={filteredBeers} /> */}
      <CardContainer beerArr={searchedBeers} />
    </div>
  );
};

export default App;
