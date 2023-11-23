import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ firstName: "first name", lastName: "last name" });

    function updateFirstName(e) {
        setPerson({ ...person, firstName: e.target.value });
    }

    function updateLastName(e) {
        setPerson({ ...person, lastName: e.target.value });
    }

    return (
        <div>
            <h1>Name input</h1>
            <label htmlFor="firstName">First name: </label>
            <input type="text" id="firstName" onChange={updateFirstName} />
            <label htmlFor="lastName">Last name: </label>
            <input type="text" id="lastName" onChange={updateLastName} />
            <h2>Your name: {person.firstName + " " + person.lastName}</h2>
        </div>
    );
    
}

export default Person;