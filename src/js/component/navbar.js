import React from "react";
import { Link } from "react-router-dom";

import starWars from "../../img/starwars.png";

export const Navbar = () => {


  
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
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
