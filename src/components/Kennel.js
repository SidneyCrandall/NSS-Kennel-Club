import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";
//import "./animal/Animal.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)

// a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation and behavior of the application. 