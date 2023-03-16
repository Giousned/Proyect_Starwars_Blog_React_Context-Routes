import React from "react";

import { useContext } from "react";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";


import starWars from "../../img/starwars.png";

import "../../styles/demo.css";


export const Navbar = () => {

  const { store, actions } = useContext(Context);

  
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="ml-auto ms-5">
        <Link to="/">
          <img src={starWars} width="100px" height="100px" />
        </Link>
      </div>

      <div className="ml-auto me-5">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle fw-bold fs-6"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="trashIcon">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.map((item, index) => {
              return (<li key={index} className="dropdown-item d-flex justify-content-between">
                  {item}<i onClick={() => actions.deleteFavorites(index)} className="fa-solid fa-trash p-1"></i>
              </li>);
            })}  
          </ul>
        </div>
      </div>
    </nav>
  );
};
