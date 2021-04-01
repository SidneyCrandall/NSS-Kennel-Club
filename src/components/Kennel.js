import React from "react";
import "./Kennel.css";
import "./animal/Animal.css"
import { AnimalCard } from "./animal/AnimalCard";
import { Customer } from "./customer/Customer";
import { EmployeeCard } from "./employee/Employee";
import { LocationCard } from "./location/Location";

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locales</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>
    </>
)