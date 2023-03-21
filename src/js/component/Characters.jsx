import React from "react";


import { useContext } from "react";

import CardPeople from "./CardPeople.jsx";

import { Context } from "../store/appContext";



const Characters = () => {

  // const context = useContext(Context);  ASI SIN DESESTRUCTURAR

  const { store, actions } = useContext(Context);

  return (
      <div className="card-group" id="cardGroup">
        {store.peopleProperties.map((item, index) => (
          <CardPeople key={index} properties={item.properties} uid={item.uid} index={index} description={item.description} />
        ))}
      </div>
  );
};

export default Characters;


// <div className="relative flex container text-nowrap overflow-auto card-group d-flex">
// <div className="items-center d-flex scroll overflow-x-auto text-nowrap whitespace-nowrap scroll-smooth">
// <div className="card-group d-flex overflow-x-scroll container text-nowrap overflow-auto">