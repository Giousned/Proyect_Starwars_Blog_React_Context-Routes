import React from "react";

import { useContext } from "react";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";



import tatooine from "../../img/Tatooine.jpg";
import bb8 from "../../img/bb8.png";



const CardPlanet = (props) => {

  const { store, actions } = useContext(Context);


  return (
    <div className="card" id="cartasGrid">
      
      <img src={(props.uid == 1) ? tatooine : "https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} className="card-img-top" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title fw-bold text-center text-info">{props.properties.name}</h5>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Population:</span> {props.properties.population}</p>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Terrain:</span> {props.properties.terrain}</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
            type="button"
            className="botonesDetalles btn btn-outline-primary"
          >
            <Link to={"/detailsPlanets/" + props.index}>
              Learn more!
            </Link>
          </button>
          <button onClick={() => actions.addFavorites(props.index, props.properties.name, props.description)} type="button" className="botonesFavs btn btn-outline-warning">
            <img className="iconoFav" src={bb8} />
          </button>
      </div>
    </div>
  );
};

export default CardPlanet;


// https://starwars-visualguide.com/assets/img/placeholder.jpg
// https://www.verance.com/app/uploads/2017/01/400x200.png
// https://starwars-visualguide.com/assets/img/planets/13.jpg
// https://custom.swcombine.com/static/8/632-large-1675095606.png