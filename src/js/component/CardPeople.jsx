import React from "react";

import { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

const CardPeople = (props) => {

  const { store, actions } = useContext(Context);


  return (
    <div className="card" id="cartasGrid">
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.properties.name}</h5>
        <p className="card-text my-1">Gender: {props.properties.gender}</p>
        <p className="card-text my-1">Hair Color: {props.properties.hair_color}</p>
        <p className="card-text my-1">Eye Color: {props.properties.eye_color}</p>

        <div className="d-flex justify-content-between my-4">
          <button
            type="button"
            className="btn btn-outline-primary"
          >
            <Link to={"/detailsPeople/" + props.index}>
              Learn more!
            </Link>
          </button>
          <button onClick={() => actions.addFavorites(props.properties.name)} type="button" className="btn btn-outline-warning">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
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