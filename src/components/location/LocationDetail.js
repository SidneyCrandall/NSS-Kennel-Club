import React, { useState, useEffect } from 'react';
import './Location.css'
import './LocationDetail.css';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({name: "", address:"" });
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
            deleteLocation(locationId).then(() =>
            history.push("/locations"))
    }

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
                setIsLoading(false);
            });
    }, [locationId]);
    
    return (
        <section className="animal">
            <h3 className="animal__name">{location.name}</h3>
            <div className="animal__location">{location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Closed
            </button>
        </section>
    ) 
}