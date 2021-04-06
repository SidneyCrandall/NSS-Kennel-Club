import React, { useState, useEffect } from 'react';
// Import the component we need.
import { AnimalCard } from './AnimalCard'
import { deleteAnimal, getAllAnimals } from '../../modules/AnimalManager'

// useEffect hook accepts two parameters: function and array.
// The Function parameter is where you place code that interacts with an external resource. The array parameter is used to control when the function parameter is executed.

export const AnimalList = () => {
//The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        // After the data comes back from the API, we 
        // use the setAnimals function to update state 
        return getAllAnimals()
            .then(animalsFromAPI => {
                setAnimals(animalsFromAPI);
        });
    };

 // function to discharge animal and re render state
    const handleDeleteAnimal = id => {
        deleteAnimal(id)
        .then(() => getAnimals())
    };

 // goot the animals from the API on the componenet's first render
    useEffect(() => {
        getAnimals();
    }, []);

 //  Finally we use map() to "loop over" the animals array to show a list of animal cards.  
    return (
        <div className="conatiner-cards">
            {animals.map(animal => 
            <AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal}/>)}
        </div>
    );
};

// React components re-render repeatedly and often at surprising times. It would be a waste of time to re-render the API call each time. 
// Instead this saves data afer the first render and simply uses that data when we need it.
