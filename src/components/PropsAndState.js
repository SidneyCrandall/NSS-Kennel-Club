import React, { useState } from "react"
// useState() is what React team calls a hook. It is used to store data about the component. 

// In this exported function, an argument is given to the function this time. 
export const PropsAndState = ({ yourName }) => {
    let [ countClicks, setCountClicks] = useState(0)

//"My component has its own state to maintain. Therefore, I will use the State hook to store it."
//Every time State is updated, the component will re-render.
    const handleClick = () => {
        // good practice:
        //makes a copy of state, modify it, and the setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }
    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
        </>
    )
}

//Prop = properites we can pass to children.
//Only state can be passed down 

// useState is a function that returns a variabe to hold a vaule, and a function to update the value.