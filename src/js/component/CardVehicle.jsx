import React from "react";

import { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";



const CardVehicle = (props) => {

  const { store, actions } = useContext(Context);

  return (
    <div className="card" id="cartasGrid">
      
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.uid+".jpg"} className="card-img-top" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title fw-bold text-center text-info">{props.properties.name}</h5>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Model:</span> {props.properties.model}</p>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Class:</span> {props.properties.vehicle_class}</p>
        <p className="card-text my-1"> <span className="text-decoration-underline fw-bolder fst-italic">Passengers:</span> {props.properties.passengers}</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-primary"
        >
          <Link to={"/detailsVehicles/" + props.index}>
            Learn more!
          </Link>
        </button>
        <button onClick={() => actions.addFavorites(props.index, props.properties.name, props.description)} type="button" className="btn btn-outline-warning">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>

    </div>
  );
};

export default CardVehicle;