import React from "react";


import { useContext } from "react";

import { Context } from "../store/appContext";


import CardVehicle from "./CardVehicle.jsx";



const Vehicles = () => {

  const { store, actions } = useContext(Context);

  return (
      <div className="card-group" id="cardGroup">
        {store.vehiclesProperties.map((item, index) => (
          <CardVehicle key={index} properties={item.properties} uid={item.uid} index={index} description={item.description} />
        ))}
      </div>
  );
};

export default Vehicles;
