import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>
                {/*This is a new route to handle a URL with the following pattern: http://localhost:3000/animals/1 
                It will not handle the following URL because the `(\d+)` matches only numbers after the final slash in the URL http://localhost:3000/animals/jack*/}

            {/*Render */}
            <Route path="/customers">
                <CustomerList />
            </Route>

            {/*Render */}
            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            {/*Render */}
            <Route path="/employees">
                <EmployeeList />
            </Route>

        </>

    )
}

// "Exact" is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route