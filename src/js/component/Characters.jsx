import React from "react";

import { useContext } from "react";

import CardPeople from "./CardPeople.jsx";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


const Characters = () => {

  // const context = useContext(Context);  ASI SIN DESESTRUCTURAR

  const { store, actions } = useContext(Context);

  return (
    <div className="items-center d-flex overflow-x-auto text-nowrap whitespace-nowrap scroll-smooth">
      <div className="card-group">
        {store.peopleProperties.map((item, index) => (
          <CardPeople key={index} properties={item.properties} uid={item.uid} />
        ))}
      </div>
    </div>
  );
};

export default Characters;


// <div className="relative flex container text-nowrap overflow-auto card-group d-flex">

// overflow-x-scroll scroll text-nowrap whitespace-nowrap scroll-smooth
