import React from "react";


import { useContext } from "react";

import { useParams } from "react-router-dom";

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
            <img id="imagenDetallada" src={(store.planetsProperties[params.id].uid == 1) ? tatooine :"https://starwars-visualguide.com/assets/img/planets/"+store.planetsProperties[params.id].uid+".jpg"} className="img-fluid rounded-start" alt="..."/>
          </div>

          <div className="col-md-7 text-center">

            <div className="card-body h-100">

              <h5 className="card-title fs-1 text-info">{store.planetsProperties[params.id].properties.name}</h5>

              <div id="textoDescripcion">
                <p className="card-text">
                Star Wars, space opera film series, created by George Lucas. It became one of the most successful and influential franchises in motion picture history. A space opera set "a long time ago in a galaxy far, far away..."
                the film centres on Luke Skywalker, a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forces. Skywalker and the opportunistic smuggler Han Solo are tasked
                  with saving Princess Leia from captivity on a massive space station commanded by the menacing Darth Vader, whose deep mechanically augmented voice became instantly iconic. At the core of the film and the series it
                  initiated are the Jedi Knights —a group of either benevolent or malevolent warriors who harness and manipulate the Force, an all-pervasive spiritual essence that holds in balance the forces of good and evil— 
                  and Skywalker's quest to join their ranks.
                </p>
              </div>

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
