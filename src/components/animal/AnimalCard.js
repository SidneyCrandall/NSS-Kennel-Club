import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import "./dog.svg";
import { useHistory } from "react-router-dom";


export const AnimalCard = ({ animal, deleteAnimal }) => {

  const history = useHistory()

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
          <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
          </Link>
            <button type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}> Edit </button>
        <button type="button" onClick={() => deleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  );
}

//An exported function that represents the HTML of what will be multiple different animals. 
/*<picture> <img src={require("./dog.svg")} alt="My Dog" /> </picture>*/