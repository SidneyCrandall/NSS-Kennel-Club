import React, { useState, useEffect } from 'react';
import { Customer } from './Customer';
import { getAllCustomers } from '../../modules/CustomerManager';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        return getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
        });
    };

    const handleDeleteCustomer = id => {
        delete(id)
            .then(() => getAllCustomers()
                .then(setCustomers));
    };

    useEffect(() => {
        getCustomers()
    }, []);

    return (
        <div className="container-cards">
            {customers.map(customer => 
            <Customer key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}
        </div>
    );
};