import React from "react";

import "../../styles/home.css";

const CardPlanet = (props) => {
  return (
    <div className="card">
      <img src={(props.uid == 1) ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : "https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.properties.name}</h5>
        <p className="card-text my-1">Population: {props.properties.population}</p>
        <p className="card-text my-1">Terrain: {props.properties.terrain}</p>

        <div className="d-flex justify-content-between">
          <button
            href={props.link}
            type="button"
            className="btn btn-outline-primary"
          >
            Learn more!
          </button>
          <button type="button" className="btn btn-outline-warning">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlanet;


// https://starwars-visualguide.com/assets/img/placeholder.jpg
// https://www.verance.com/app/uploads/2017/01/400x200.png
// https://starwars-visualguide.com/assets/img/planets/13.jpg