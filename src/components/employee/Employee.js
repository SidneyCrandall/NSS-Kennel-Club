import React from "react";
import "./Employee.css";

export const EmployeeCard = ({employee}) => { 
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-employeename">{employee.name}</span></h3>
                <p>Address: {employee.address}</p>
            </div>
        </div>
    )
}


//An exported function that represents the HTML of what will be multiple different employee. 