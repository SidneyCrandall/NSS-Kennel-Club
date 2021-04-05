import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeCard } from "./employee/Employee"
import { LocationList } from "./location/LocationList"
import { Customer } from "./customer/Customer"


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

            {/*Render */}
            <Route path="/customers">
                <Customer />
            </Route>

            {/*Render */}
            <Route path="/locations">
                <LocationList />
            </Route>

            {/*Render */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>

        </>

    )
}

// "Exact" is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route