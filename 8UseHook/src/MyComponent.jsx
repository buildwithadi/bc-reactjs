import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0); 
    const [isEmployed, setIsEmployeed] = useState(false);

    const updateName = () => {
        setName("Aditya Rawat");
    }

    const incrementAge = () => {
        setAge(age+1);  
    }

    const toggleEmployedStatus = () => {
        setIsEmployeed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p> 
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p> 
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p> 
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )

}

export default MyComponent