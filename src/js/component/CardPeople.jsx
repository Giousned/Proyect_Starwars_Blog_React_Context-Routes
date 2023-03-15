import React from "react";

import "../../styles/home.css";

const CardPeople = (props) => {
  return (
    <div className="card">
      <img src="https://www.verance.com/app/uploads/2017/01/400x200.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.properties.name}</h5>
        <p className="card-text my-1">Gender: {props.properties.gender}</p>
        <p className="card-text my-1">Hair Color: {props.properties.hair_color}</p>
        <p className="card-text my-1">Eye Color: {props.properties.eye_color}</p>

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

export default CardPeople;
