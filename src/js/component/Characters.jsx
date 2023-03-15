import React from "react";

import { useState, useEffect } from "react";

import Card from "../component/Card.jsx";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [propertie, setPropertie] = useState([]);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  };

  const getProperties = () => {
    characters.map((item, index) => {
      fetch(item.url)
        .then((res) => res.json())
        .then((data) => setPropertie([...propertie, data.result]))
        .catch((err) => console.error(err));
    });
  };

  useEffect(() => getPeople(), []);

  //   console.log(characters);

  console.log(propertie);

  useEffect(() => getProperties(), []);

  return (
    <div className="relative flex items-center">
      <div className="card-group d-flex overflow-x-scroll scroll text-nowrap whitespace-nowrap scroll-smooth">
        {characters.map((item, index) => (
          <Card key={index} title={item.name} propertie={propertie} />
        ))}
      </div>
    </div>
  );
};

export default Characters;

{
  /* <div className="container text-nowrap overflow-auto card-group d-flex"> */
}
