import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getAllLocations } from '../../modules/LocationManager'
import { getAllCustomers } from '../../modules/CustomerManager'
import "./AnimalForm.css"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [customers, setCustomers] = useState([]);


    const {animalId} = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        // event is passed through, which matches id of form
        const stateToChange = { ...animal };
        // the object with dot notation
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
        }
        stateToChange[evt.target.id] = selectedVal;
        // target the input nox. "dynamically referencing a property in my  object"
        setAnimal(stateToChange); 
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need an id
    const editedAnimal = {
        id: animalId,
        name: animal.name,
        breed: animal.breed,
        locationId: animal.locationId,
        customerId: animal.customerId
    };

    updateAnimal(editedAnimal)
        .then(() => history.push("/animals"))
    }

    useEffect(() => {
      getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                    setIsLoading(false);
            });
    }, [animalId]);

    useEffect(() => {
        // load loaction data and setState 
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            })
    }, []);
    
    useEffect(() => {
        // load customer data and setState
        getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
            })
    }, []);

    return (
        <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          
          <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                    <option value="0">Select a location</option>
                    {locations.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="customerId">Customer: </label>
                <select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
                    <option value="0">Select a customer</option>
                    {customers.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
          
        </fieldset>
      </form>
    </>
    )
}

//export default AnimalEditForm