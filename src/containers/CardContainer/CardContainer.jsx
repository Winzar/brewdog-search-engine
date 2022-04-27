import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = ({ beerArr }) => {
  const beerCardJSX = beerArr.map((beer) => {
    return (
      <Card
        key={beer.id}
        id={beer.id}
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        ph={beer.ph}
        abv={beer.abv}
        ibu={beer.ibu}
        foodPairing={beer.food_pairing}
        firstBrewed={beer.first_brewed}
      />
    );
  });
  return (
    <main>
      <div className="card-container">{beerCardJSX}</div>
    </main>
  );
};

export default CardContainer;
