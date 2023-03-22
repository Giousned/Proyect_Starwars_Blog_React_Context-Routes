import React from "react";


import { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import bb8 from "../../img/bb8.png";



const CardPeople = (props) => {

  const { store, actions } = useContext(Context);

  return (
    <div className="card" id="cartasGrid">
      
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title fw-bold text-center text-info">{props.properties.name}</h5>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Gender:</span> {props.properties.gender}</p>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Hair Color:</span> {props.properties.hair_color}</p>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Eye Color:</span> {props.properties.eye_color}</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          type="button"
          id="botonesDetalles"
          className="btn btn-outline-primary"
        >
          <Link to={"/detailsPeople/" + props.index}>
            Learn more!
          </Link>
        </button>
        <button id="botonesFavs" onClick={() => actions.addFavorites(props.index, props.properties.name, props.description)} type="button" className="btn btn-outline-warning">
          <img className="iconoFav" src={bb8} />
        </button>
      </div>

    </div>
  );
};

export default CardPeople;


{/* <Link to={"/single/" + index}>
  <span>Link to: {item.title}</span>
</Link>

<Link to="/">
<button className="btn btn-primary">Back home</button>
</Link> */}