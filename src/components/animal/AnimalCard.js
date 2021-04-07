import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import "./dog.svg";
import { PropsAndState } from "../PropsAndState";

export const AnimalCard = ({ animal }) => {
    return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
          Edit
        </button>
      </div>
    </div>  
  );
}

//An exported function that represents the HTML of what will be multiple different animals. 
