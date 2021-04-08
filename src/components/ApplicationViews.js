import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
//import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { AnimalDetail } from "./animal/AnimalDetail";


export const ApplicationViews = () => {

    //const [isAunthenticated, setIsAuthnticated] = useState(sessionStorage.getItem)

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
            
            {/*<Route path="/login">
	            <Login />
            </Route>

            <Route path="/register">
            	<Register />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
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

            {/*<Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
    </Route>*/}

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/Employees">
                <EmployeeList />
            </Route>

        </>

    )
}

// "Exact" is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route
//if(isAuthenticated()) {
   // <AnimalList />
  //} else {
     // <Redirect to="/login" />
  //}