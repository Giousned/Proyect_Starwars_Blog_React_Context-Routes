import React from "react";

const Loader = () => {
  return (
      <div>
        <img
          className="imagenEspera d-block mb-2"
          src="https://media1.giphy.com/media/7Z8QOXkz3USMDb9NZH/200w.gif?cid=6c09b952easb1vamvu1h5j66jhcu6edzkh9vpccavkphwjr3&rid=200w.gif&ct=g"
        />
        <button
          className="btn btn-warning fw-bolder"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
          <span
            className="spinner-border spinner-border-sm ms-2"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      </div>
  );
};

export default Loader;
