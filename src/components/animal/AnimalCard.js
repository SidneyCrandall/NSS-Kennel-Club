import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => {
    return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>  
  );
}


//An exported function that represents the HTML of what will be multiple different animals. 
//<picture>
//<img src={require('./dog.svg')} alt="My Dog" />
//</picture>