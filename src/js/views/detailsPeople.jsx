import React from "react";

import { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const DetailsPeople = () => {

  const { store, actions } = useContext(Context);

  const params = useParams();

  console.log(store.peopleProperties[params.id].properties.name);

  return (
    <div className="container">
      <div className="card mb-3 bg-dark text-white w-100">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.id+".jpg"} style={{width: "100%"}} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-7 text-center">
            <div className="card-body h-100">
              <h5 className="card-title fs-1">{store.peopleProperties[params.id].properties.name}</h5>
              <p className="card-text">
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza
                clasica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de
                antiguedad. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5"></div>

      <div className="container mt-5 text-danger text-center">
        <div className="row g-0">
          <div className="col-md-2">
            <strong>Name</strong>
            <p>{store.peopleProperties[params.id].properties.name}</p>
          </div>
          <div className="col-md-2">
            <strong>Birth Year</strong>
            <p>{store.peopleProperties[params.id].properties.birth_year}</p>
          </div>
          <div className="col-md-2">
            <strong>Eye Color</strong>
            <p>{store.peopleProperties[params.id].properties.eye_color}</p>
          </div>
          <div className="col-md-2">
            <strong>Hair Color</strong>
            <p>{store.peopleProperties[params.id].properties.hair_color}</p>
          </div>
          <div className="col-md-2">
            <strong>Skin Color </strong>
            <p>{store.peopleProperties[params.id].properties.skin_color}</p>
          </div>
          <div className="col-md-2">
            <strong>Height</strong>
            <p>{store.peopleProperties[params.id].properties.height}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPeople;


//     "mass": "77",
