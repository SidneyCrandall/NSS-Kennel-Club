import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './Employee'
import { getAllEmployees } from '../../modules/EmployeeManager'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
    });
};

    const handleDeleteEmployee = id => {
        delete(id)
            .then(() => getAllEmployees()
                .then(setEmployees))
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="conatiner-cards">
            {employees.map(employee => 
            <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    )
};