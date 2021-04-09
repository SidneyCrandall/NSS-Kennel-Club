import React, { useState, useEffect } from 'react';
import { getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';
import { useParams, useHistory } from "react-router-dom";
import './EmployeeDetail.css';

export const EmployeeDetail = () => {

    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
        history.push("/employees")
        );
    };
    
    useEffect(() => {
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    email: employee.email,
                    location: employee.location,
                    animal: employee.animal
                });
                setIsLoading(false);
            });
    }, [employeeId]);


    return (
        <section className="employee card">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__email">{employee.email}</div>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <div className="employee__animal">Cared for: {employee.animal?.name}</div>
           <button type="button" disabled={isLoading} onClick={handleDelete}>Delete</button> 
        </section>
    )
}
