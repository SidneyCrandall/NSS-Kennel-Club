import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css';
import { getAllLocations } from '../../modules/LocationManager'
import { getAllAnimals } from '../../modules/AnimalManager'

export const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        locationId: 0,
        animalId: 0
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const [locations, setLocations] = useState([]);
    const [animals, setAnimals] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCustomer = { ...customer }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
                selectedVal = parseInt(selectedVal)
        }

        newCustomer[event.target.id] = selectedVal
            setCustomer(newCustomer)
    }

    useEffect(() => {
        // load loaction data and setState 
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            })
    }, []);

    useEffect(() => {
        // load loaction data and setState 
        getAllAnimals()
            .then(animalsFromAPI => {
                setAnimals(animalsFromAPI)
            })
            setIsLoading(false)
    }, []);

    const handleClickSaveCustomer = (event) => {
        event.preventDefault()

        const locationId = customer.locationId
        const animalId = customer.animalId

        if(locationId === 0 || animalId ===0) {
            window.alert("Please select a loaction and customer")
        } else {
            addCustomer(customer)
                .then(() => history.push("customers"))
        }
    }
    return (
        <form className="customerForm">
        <h2 className="customerForm__title">New Customer</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Customer name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="address">Customer Address:</label>
                <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Address" value={customer.address} />
            </div>
        </fieldset>
        <fieldset>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                    <option value="0">Select a Location</option>
                    {locations.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="animalId">Animal: </label>
                <select value={customer.animalId} name="customer" id="animalId" onChange={handleControlledInputChange} className="form-control" >
                    <option value="0">Select an Animal</option>
                    {animals.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={handleClickSaveCustomer} disabled={isLoading}>
            Save Customer
      </button>
    </form>
    )
}