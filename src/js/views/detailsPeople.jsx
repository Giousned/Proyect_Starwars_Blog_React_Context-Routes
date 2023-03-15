import React from "react";

import { useState } from "react";


const DetailsPeople = (props) =>{

    const [estado, setEstado] = useState([])


    return(
        <div>
            <div className="card mb-3 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="" style={{width: '300px'}} className="img-fluid rounded-start" alt="..."/>
                    </div>
                <div className="col-md-8 text-center">
                    <div className="card-body">
                        <h5 className="card-title fs-1"></h5>
                        <p className="card-text">
                        Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
                         simplemente texto aleatorio. Tiene sus raices en una pieza clasica de la
                          literatura del Latin, que data del año 45 antes de Cristo, haciendo que 
                          este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor 
                          de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras 
                          más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir 
                          leyendo distintos textos del latín, descubrió la fuente indudable.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5">
            </div>


            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong> 
                        <p></p>
                    </div>
                    <div className="col-md-2">
                        <strong>Birth Year</strong>
                        <p></p>
                    </div>
                    <div className="col-md-2">
                        <strong>Eye Color</strong>
                        <p></p>
                    </div>
                    <div className="col-md-2">
                        <strong>Hair Color</strong>
                        <p></p>
                    </div>
                    <div className="col-md-2">
                        <strong>Skin Color </strong>
                        <p></p>
                    </div>
                    <div className="col-md-2">
                        <strong>Height</strong>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPeople;