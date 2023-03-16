import React from "react";

import { useState, useEffect } from "react";

import CardPeople from "./CardPeople.jsx";


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [propertie, setPropertie] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  };

  const getProperties = () => {
    characters.map((item) => {
      fetch(item.url)
        .then((res) => res.json())
        .then((data) => setPropertie(prev => [...prev, data.result]))
        .catch((err) => console.error(err));
    });
  };

  useEffect(() => getPeople(), []);

  useEffect(() => getProperties(), [characters]);

  const addFavorites = (e) => {
    const arrayFavorites = [...favorites, e];
    setFavorites(arrayFavorites);
  }

  return (
    <div className="items-center d-flex overflow-x-auto text-nowrap whitespace-nowrap scroll-smooth">
      <div className="card-group">
        {propertie.map((item, index) => (
          <CardPeople key={index} properties={item.properties} uid={item.uid} />
        ))}
      </div>
    </div>
  );
};

export default Characters;


// <div className="relative flex container text-nowrap overflow-auto card-group d-flex">

// overflow-x-scroll scroll text-nowrap whitespace-nowrap scroll-smooth
