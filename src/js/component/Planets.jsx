import React from "react";


import { useContext } from "react";

import CardPlanet from "./CardPlanet.jsx";

import { Context } from "../store/appContext";



const Planets = () => {

  const { store, actions } = useContext(Context);
  
  
  return (
    <div className="card-group" id="cardGroup">
      {store.planetsProperties.map((item, index) => (
        <CardPlanet key={index} properties={item.properties} uid={item.uid} index={index} description={item.description} />
      ))}
    </div>
  );
};

export default Planets;
