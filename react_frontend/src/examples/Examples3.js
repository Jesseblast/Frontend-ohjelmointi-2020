// Hooks and states
import React, { useState, useEffect } from "react"

const PrintPeople = (props) => {
    if (props.people.length === 0)
        return (<p>No people!</p>)

    return (
        <div> 
            {props.people.name}
        </div>
    )
}

export const StatesExample = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [person, setPerson] = useState({name: "", email: ""});
    
    const AddNewPerson = (e) => {
        e.preventDefault(); // Prevent default action (submit in this case)
        setPerson({name, email})
        setName("")
        setEmail("")
    }

    const ClearPerson = (e) => {
        setPerson({})
    }

    return (
        <div>
            <form>
                <input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) } /><br />
                <input type="text" name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } /><br />
                <input type="submit" value="Add" onClick={ (e) => AddNewPerson(e) } /><br />
                <input type="submit" value="Clear" onClick={ (e) => ClearPerson(e) } /><br />
            </form>

            <PrintPeople people={ person } />

        </div>
    )
}