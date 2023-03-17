import React from "react";

import { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import tatooine from "../../img/Tatooine.jpg";


const DetailsPlanets = (props) =>{

    const { store, actions } = useContext(Context);

    const params = useParams();


    return(
<div className="container">
      <div className="card mb-3 bg-dark text-white w-100">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={(store.planetsProperties[params.id].uid == 1) ? tatooine :"https://starwars-visualguide.com/assets/img/planets/"+store.planetsProperties[params.id].uid+".jpg"} style={{width: "100%"}} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-7 text-center">
            <div className="card-body h-100">
              <h5 className="card-title fs-1">{store.planetsProperties[params.id].properties.name}</h5>
              <p className="card-text">
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza
                clasica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de
                antiguedad. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
            
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5">
            </div>


            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong> 
                        <p>{store.planetsProperties[params.id].properties.name}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Climate</strong>
                        <p>{store.planetsProperties[params.id].properties.climate}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Population</strong>
                        <p>{store.planetsProperties[params.id].properties.population}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Orbital Period</strong>
                        <p>{store.planetsProperties[params.id].properties.orbital_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Rotation Period</strong>
                        <p>{store.planetsProperties[params.id].properties.rotation_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Diameter</strong>
                        <p>{store.planetsProperties[params.id].properties.diameter}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPlanets;


// "gravity": "1",
// "surface_water": "1",
