import React from "react";
import "./Customer.css";
import { Link, useHistory } from "react-router-dom";

export const Customer = ({ customer, handleDeleteCustomer}) => {

    const history = useHistory()

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">{customer.name}</span></h3>
                <p>Address: {customer.address}</p>
                <p>Email: {customer.email}</p>
                <Link to={`/customers/${customer.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => history.push(`/customers/${customer.id}/edit`)}>Edit</button>
                <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove Customer</button>
            </div>
        </div>
    )
}

//An exported function that represents the HTML of what will be multiple different customers. 