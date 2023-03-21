import React from "react";

import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

import "../../styles/home.css";


export const Home = () => {


  return (
    <div className="container mt-3">

      <h1 className="text-danger">Characters</h1>
      <div id="containerCarrusel"><Characters /></div>

      <h1 className="text-danger mt-3">Planets</h1>
      <div id="containerCarrusel"><Planets /></div>

      <h1 className="text-danger mt-3">Vehicles</h1>
      <div id="containerCarrusel"><Vehicles /></div>
    </div>
  );
};
