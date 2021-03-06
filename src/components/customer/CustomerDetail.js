import React, { useState, useEffect } from 'react';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { customerId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
            deleteCustomer(customerId).then(() =>
            history.push('/customers')
            )
    }

    useEffect(() => {
        getCustomerById(customerId)
            .then(customer=> {
                setCustomer({
                    name: customer.name,
                    address: customer.address,
                    animal: customer.animal,
                    email: customer.email  
                });
                setIsLoading(false);
            });
    }, [customerId]);

    return (
        <section className="customer card">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">Address: {customer.address}</div>
            <div className="customer__email">Email: {customer.email}</div>
            <div className="customer__animal">Pets Name: {customer.animal?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete
            </button>
        </section>
    );
}