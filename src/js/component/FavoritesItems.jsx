import React from "react";

import { Link } from "react-router-dom";

import { useContext, useMemo } from "react";

import { Context } from "../store/appContext";


import laserX from "../../img/laserX.png";



const FavoritesItems = (props) => {

    const  {store, actions} = useContext(Context);

    const memo = useMemo(() => {
        
        let url = "";

        switch (props.description) {
          case "A person within the Star Wars universe":
            url = "/detailsPeople/";
            break;
          case "A planet.":
            url = "/detailsPlanets/";
            break;
          case "A vehicle":
            url = "/detailsVehicles/";
            break;
        }

        return(url);
    },[props.description]);



  return (
    <li className="dropdown-item d-flex justify-content-between">
      <span>
        <Link to={memo + props.id}> {props.name} </Link>
      </span>

      <button
        type="button"
        onClick={() => actions.deleteFavorites(props.index)}
        className="botonesDelete btn btn-outline-danger ms-2"
      >
        <img className="iconoDelete" src={laserX} />
      </button>
    </li>
  );
};

export default FavoritesItems;
