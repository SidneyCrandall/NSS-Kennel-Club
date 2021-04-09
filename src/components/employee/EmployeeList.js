import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './Employee'
import { deleteEmployee, getAllEmployees } from '../../modules/EmployeeManager'
import { useHistory } from 'react-router-dom';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const history = useHistory();

    const getEmployees = () => {
        return getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    };

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
            .then(() => getAllEmployees()
                .then(setEmployees))
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/employees/create") }}>
                    Add Employee
                </button>
            </section>


            <div className="conatiner-cards">
                {employees.map(employee =>
                    <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}
            </div>
        </>
    )
};