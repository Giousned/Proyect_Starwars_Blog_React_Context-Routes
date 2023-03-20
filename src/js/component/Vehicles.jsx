import React from "react";

import { useContext } from "react";

import CardPeople from "./CardPeople.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


const Vehicles = () => {

  const { store, actions } = useContext(Context);

  return (
      <div className="card-group" id="cardGroup">
        {store.vehiclesProperties.map((item, index) => (
          <CardPeople key={index} properties={item.properties} uid={item.uid} index={index} description={item.description} />
        ))}
      </div>
  );
};

export default Vehicles;


// <div className="relative flex container text-nowrap overflow-auto card-group d-flex">
// <div className="items-center d-flex overflow-x-auto text-nowrap whitespace-nowrap scroll-smooth">
// <div className="card-group d-flex container text-nowrap overflow-auto">
// overflow-x-scroll scroll text-nowrap whitespace-nowrap scroll-smooth
