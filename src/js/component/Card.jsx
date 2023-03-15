import React from "react";

import "../../styles/home.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text my-1">Gender: {props.gender}</p>
        <p className="card-text my-1">Hair Color: {props.hair_color}</p>
        <p className="card-text my-1">Eye Color: {props.eye_color}</p>
        {/* <p className="card-text">{props.propertie.height}</p>
        <p className="card-text">{props.propertie.gender}</p> */}

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

export default Card;
