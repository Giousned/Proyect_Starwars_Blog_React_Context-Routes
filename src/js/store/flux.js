import React from "react";

import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	const [characters, setCharacters] = useState([]);
  	const [peopleProperties, setPeopleProperties] = useState([]);
  	const [planets, setPlanets] = useState([]);
  	const [planetsProperties, setPlanetsProperties] = useState([]);
	const [vehicles, setVehicles] = useState([]);
  	const [vehiclesProperties, setVehiclesProperties] = useState([]);

  	const [favorites, setFavorites] = useState([]);


	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters,
			peopleProperties,
			planets,
			planetsProperties,
			vehicles,
			vehiclesProperties,
			favorites
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadDataPeople: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people/")
					.then((res) => res.json())
					.then((data) => setStore({characters: data.results}))
					.catch((err) => console.error(err));
			},
			loadDataPeopleProperties: () => {

				const store = getStore();

				store.characters.map((item) => {
					fetch(item.url)
					  .then((res) => res.json())
					  .then((data) => setStore({peopleProperties: [...store.peopleProperties, data.result]}))
					  .catch((err) => console.error(err));
				  });
			},
			loadDataPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((res) => res.json())
					.then((data) => setStore({planets: data.results}))
					.catch((err) => console.error(err));
			},
			loadDataPlanetsProperties: () => {
				
				const store = getStore();

				store.planets.map((item) => {
					fetch(item.url)
					  .then((res) => res.json())
					  .then((data) => setStore({planetsProperties: [...store.planetsProperties, data.result]}))
					  .catch((err) => console.error(err));
				  });
			},
			loadDataVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((res) => res.json())
					.then((data) => setStore({vehicles: data.results}))
					.catch((err) => console.error(err));
			},
			loadDataVehiclesProperties: () => {
				
				const store = getStore();

				store.vehicles.map((item) => {
					fetch(item.url)
					  .then((res) => res.json())
					  .then((data) => setStore({vehiclesProperties: [...store.vehiclesProperties, data.result]}))
					  .catch((err) => console.error(err));
				  });
			},
			addFavorites: (index, nombre, descripcion) => {

				const store = getStore();

				const objFavorites = {id: index, description: descripcion, name: nombre}

				const arrayFavorites = [...store.favorites, objFavorites];
				setStore({favorites: arrayFavorites});
			},
			deleteFavorites: (indice) => {

				const store = getStore();

				const arrayDeletes = store.favorites.filter((item, index) => index != indice);
				setStore({favorites: arrayDeletes});
			},			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
