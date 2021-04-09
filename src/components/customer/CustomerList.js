import React, { useState, useEffect } from 'react';
import { Customer } from './Customer';
import { deleteCustomer, getAllCustomers } from '../../modules/CustomerManager';
import { useHistory } from 'react-router';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const history = useHistory();

    const getCustomers = () => {
        return getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
            });
    };

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
            .then(() => getCustomers()
                .then(setCustomers))
    };

    useEffect(() => {
        getCustomers()
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/customers/create") }}>
                    Add New Customer
                </button>
            </section>

            <div className="container-cards">
                {customers.map(customer =>
                    <Customer key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}
            </div>
        </>
    );
};