import React from "react";

import { useState, useEffect } from "react";

import Card from "../component/Card.jsx";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = () => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => getPlanets(), []);

  return (
    <div className="container text-nowrap overflow-auto card-group d-flex">
      {planets.map((item, index) => (
        <Card key={index} title={item.name} />
      ))}
    </div>
  );
};

export default Planets;
