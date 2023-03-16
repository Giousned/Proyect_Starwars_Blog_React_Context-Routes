import React from "react";

import { useState, useEffect } from "react";

import CardPlanet from "./CardPlanet.jsx";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [planetsProperties, setPlanetsProperties] = useState([]);


  const getPlanets = () => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error(err));
  };

  const getProperties = () => {
    planets.map((item) => {
      fetch(item.url)
        .then((res) => res.json())
        .then((data) => setPlanetsProperties(prev => [...prev, data.result]))
        .catch((err) => console.error(err));
    });
  };


  useEffect(() => getPlanets(), []);

  useEffect(() => getProperties(), [planets]);


  return (
    <div className="container text-nowrap overflow-auto card-group d-flex">
      {planetsProperties.map((item, index) => (
        <CardPlanet key={index} properties={item.properties} uid={item.uid}/>
      ))}
    </div>
  );
};

export default Planets;
