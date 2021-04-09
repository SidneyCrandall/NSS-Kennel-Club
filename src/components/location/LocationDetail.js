import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
      setIsLoading(true);
      deleteLocation(locationId).then (() => 
      history.push("/locations"));
  };
  
  useEffect(() => {
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          animal: location.animal,
          employee: location.employee
        });
        setIsLoading(false);
      });
  }, [locationId]);


  return (
    <section className="location card">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <div className="location__animal">Attened By: {location.animal?.name}</div>
      <div className="location__employee">Works here: {location.employee?.name}</div>
    <button type="button" disabled={isLoading} onClick={handleDelete}>
        Remove
    </button>
   </section>
  );
}