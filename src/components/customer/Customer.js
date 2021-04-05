import React from "react";
import "./Customer.css";

export const Customer = ({customer}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">{customer.name}</span></h3>
                <p>Address: {customer.address}</p>
                <p>Phone Number: {customer.phoneNumber}</p>
            </div>
        </div>
    )
}

//An exported function that represents the HTML of what will be multiple different customers. 