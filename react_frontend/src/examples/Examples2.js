// Using maps

import React from "react"

const MapTest = (props) => {
    if (props.people.length === 0) 
        return ( <p>The list is empty</p> )

    return (
        <div> {
            props.people.map((person) => {
                return (
                    <p key={ person.id }>
                        Name: { person.name }<br />
                        Email: { person.email }
                    </p>
                )
            })
        } </div>
    )
}


export const MapExample = () => {
    let peopleArray = [
        { id: 1, name: "Pekka", email: "pekka@email.com" },
        { id: 2, name: "Maija", email: "maija@email.com" },
        { id: 3, name: "Saana", email: "saana@email.com" },
    ]

    let emptyArray = []

    return (
        <div>
            <h3>Empty array:</h3>
            <MapTest people={ emptyArray } />
            <h3>Array with { peopleArray.length } items:</h3>
            <MapTest people={ peopleArray } />
        </div>
    )
}