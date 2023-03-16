import React from "react";

import { useContext } from "react";

import CardPlanet from "./CardPlanet.jsx";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



const Planets = () => {

  const { store, actions } = useContext(Context);
  
  
  return (
    <div className="container text-nowrap overflow-auto card-group d-flex">
      {store.planetsProperties.map((item, index) => (
        <CardPlanet key={index} properties={item.properties} uid={item.uid}/>
      ))}
    </div>
  );
};

export default Planets;
