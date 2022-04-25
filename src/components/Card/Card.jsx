import { useState } from "react";
import "./Card.scss";
const Card = ({id, image, name}) => {
    const [rating, setRating] = useState(0);
    const handleClick = () => {
        const newRating = rating + 1;
        setRating(newRating)
    }
    const capitalisedName = name[0].toUpperCase() + name.substring(1);
    return (
    <section className="card">
        <img src={image} className="card__image" alt="beer image" />
        <div className="card__content">
            <h4 className="card__heading">{capitalisedName}</h4>
            <ul className="card__types">
                {capitalisedName} number#{id}
            </ul>
            <button className="card__button" onClick={handleClick}>Give ❤️</button>
            <p className="card__text">My ❤️ rating: {rating}</p>
        </div>
    </section>
    );
}
 
export default Card;