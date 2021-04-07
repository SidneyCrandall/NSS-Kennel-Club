import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from "./customer/CustomerForm"
import Login from "./auth/Login";


export const ApplicationViews = () => {

    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals 
                All the Animal Routes*/}
            <Route exact path="/animals" render={props =>{
                if(isAuthenticated()) {
                   return <AnimalList {...props} /> 
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            
            {/*This is a new route to handle a URL with the following pattern: http://localhost:3000/animals/1 
            It will not handle the following URL because the `(\d+)` matches only numbers after the final slash in the URL http://localhost:3000/animals/jack*/}
            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>
            {/* End of Animal Routes */}


            {/*Render */}
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            {/*Render
                Start of Location Routes */}
            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
            {/* End of Location Routes */}

            {/*Render */}
            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/login" component={Login} />

        </>

    )
}

// "Exact" is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route