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
              return (
                <li key={index} className="dropdown-item d-flex justify-content-between">

                  {(item.description === "A person within the Star Wars universe") 
                    ? <span id="textoFavorito"><Link to={"/detailsPeople/" + item.id}> {item.name} </Link> </span> 
                    : (item.description === "A planet.") ? <span id="textoFavorito"><Link to={"/detailsPlanets/" + item.id}> {item.name} </Link> </span> : null
                  }
                  
                  <button type="button" onClick={() => actions.deleteFavorites(index)} className="btn btn-outline-danger ms-2"> <i className="fa-solid fa-trash"></i> </button>
                </li>
              );
            })}  
          </ul>
        </div>
      </div>
    </nav>
  );
};


{/* <ul className="dropdown-menu" style={{ height: 'auto', width:'220px'}}>
{props.favoritos.map((element,index)=>{
return(
  <>
  <div className="text-wrap row mt-1">
  <div className="col-8"><li>{element}</li></div>
  <div className="col-4"><button type="button" onClick={()=>props.borrar(index)} className="btn btn-outline-danger btn-sm"> 🗑️ </button></div>
  </div>
  </>	
)})
}
</ul> */}