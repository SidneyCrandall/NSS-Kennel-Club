import React, { useState, useEffect } from 'react';
import { updateLocation, getLocationById } from "../../modules/LocationManager";
import "./LocationForm.css";
import { useHistory, useParams } from 'react-router-dom';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { getAllAnimals } from '../../modules/AnimalManager';

export const LocationEditForm = () => {

    const [location, setLocation] = useState({ name: "", addrees:"" });
    const [isLoading, setIsLoading] = useState(false);

    const { locationId } = useParams();
    const history = useHistory();

    const [employees, setEmployees] = useState([]);
    const [animals, setAnimals] = useState([]);

    const handleFieldChange = event => {
        const stateToChange = { ...location };
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[event.target.id] = selectedVal
        setLocation(stateToChange);
    };

    const updateExistingLocation = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: locationId,
            name: location.name,
            address: location.address,
            employeeId: location.employeeId,
            animalId: location.animalId
        };

        const employeeId = location.employeeId
        const animalId = location.animalId

        if (employeeId === 0 || animalId === 0) {
            window.alert("Please select a location and an animal")
        } else {
            updateLocation(editedLocation)
                .then(() => history.push("/locations"))
        }
    }

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false)
            });
    }, [locationId]);

    useEffect(() => {
        getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllAnimals()
            .then(animalsFromAPI => {
                setAnimals(animalsFromAPI)
            });
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
                            value={location.name}
                        />
                        <label htmlFor="name">Location name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="address"
                            value={location.address}
                        />
                        <label htmlFor="email">email</label>


                        <select
                            value={location.employeeId}
                            name="empployeeId"
                            id="employeeId"
                            onChange={handleFieldChange}
                            className="form-control" >
                            <option value="0">Select an employee</option>
                            {employees.map(l => (
                                <option key={l.id} value={l.id}>
                                    {l.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="employee">Employee</label>

                        <select
                            value={location.animalId}
                            name="animal" id="animalId"
                            onChange={handleFieldChange}
                            className="form-control" >
                            <option value="0">Select an animal</option>
                            {animals.map(a => (
                                <option key={a.id} value={a.id}>
                                    {a.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="animalId">Animal: </label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingLocation}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}