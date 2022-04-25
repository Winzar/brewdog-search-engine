import "./CardContainer.scss"
import beerArray from "../../data/data";
import Card from "../../components/Card/Card";

const CardContainer = () => {
    const beerCardJSX = beerArray.map(beer => {
        return <Card key ={beer.id} id = {beer.id} image={beer.image_url} name={beer.name}/>
    })
    return (
    <main>
        <h1>My beer Page</h1>
        <div className="card-container">
            {beerCardJSX}
        </div>
    </main>);
}
 
export default CardContainer;