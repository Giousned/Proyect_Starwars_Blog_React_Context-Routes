import React from "react";


import { useContext } from "react";

import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";



const DetailsPeople = () => {

  const { store, actions } = useContext(Context);

  const params = useParams();


  return (
    <div className="container">
      <div className="card mb-3 bg-secondary text-white w-100">
        <div className="row g-0">
          <div className="col-md-5">
            <img id="imagenDetallada" src={"https://starwars-visualguide.com/assets/img/characters/"+store.peopleProperties[params.id].uid+".jpg"} className="img-fluid rounded-start" alt="..."/>
          </div>

          <div className="col-md-7 text-center">

            <div className="card-body h-100">

              <h5 className="card-title fs-1 text-info text-decoration-underline">{store.peopleProperties[params.id].properties.name}</h5>

              <div id="textoDescripcion">
                <p className="card-text" >
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

      <div className="h4 pb-2 mb-4 border-bottom border-danger border-3 mt-5"></div>

      <div id="textoDetalles" className="container mt-5 text-center">
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
