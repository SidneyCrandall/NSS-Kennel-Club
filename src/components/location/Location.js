import React from "react";
import "./Location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
    </section>
)


//An exported function that represents the HTML of what will be multiple different location. 