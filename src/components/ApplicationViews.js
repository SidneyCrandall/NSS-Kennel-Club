import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"

import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { AnimalDetail } from "./animal/AnimalDetail";

import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeEditForm } from "./employee/EmployeeEditForm"

import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { LocationEditForm } from "./location/LocationEditForm";

import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail";
import { CustomerForm } from "./customer/CustomerForm";
import { CustomerEditForm } from "./customer/CustomerEditForm";

import { Login } from "./auth/Login";
import { Register } from "./auth/Register";



export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>


            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
            </Route>


            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
                <CustomerEditForm />
            </Route>


            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route path="/locations/:locationsId(\d+)/edit">
                <LocationEditForm />
            </Route>


            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
            </Route>

        </>

    )
}

// "Exact" is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route
