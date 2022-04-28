import { useState } from "react";
import "./Card.scss";
const Card = ({ id, image, name, description, foodPairing, ph, abv, ibu, tagline, firstBrewed }) => {
  const [rating, setRating] = useState(0);
  const handleClick = () => {
    const newRating = rating + 1;
    setRating(newRating);
  };
  const capitalisedName = name[0].toUpperCase() + name.substring(1);
  return (
    <section className="card">
      <img src={image} className="card__image" alt="beer" />
      <div className="card__content">
        <h4 className="card__heading">
          {capitalisedName} #{id}
        </h4>
        <p className="card__text"> {tagline} </p>
        <p className="card__text">
          {" "}
          <b>ph:</b> {ph} <b>abv:</b>
          {abv} <b>ibu:</b>
          {ibu}{" "}
        </p>
        <h4 className="card__heading"> Description:</h4>
        <p className="card__text">{description}</p>
        <h4 className="card__heading"> Food Pairing:</h4>
        <ul className="card__types">
          <li className="card__list">{foodPairing[0]}</li>
          <li className="card__list">{foodPairing[1]}</li>
        </ul>
        <h4 className="card__heading">First Brewed:</h4>
        <p className="card__text">{firstBrewed}</p>
        <button className="card__button" onClick={handleClick}>
          Give ❤️
        </button>
        <p className="card__text">My ❤️ rating: {rating}</p>
      </div>
    </section>
  );
};

export default Card;

// heading - bolded
// tagline {tagline}
// ph:{ph}, abv:{abv}, ibu:{ibu}
// break
// Description header
// Dscription info {description}
// Food pairing header
// Food pairing info - UL with bulle points {food_pairing}
// First brewed header {first_brewed}
// icon on the bottom right
