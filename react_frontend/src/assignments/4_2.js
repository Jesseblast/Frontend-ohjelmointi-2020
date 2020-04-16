// Assignment 4.2

import React, { useState, useEffect } from "react"

export const Assignment4_2 = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    const url = "https://jsonplaceholder.typicode.com/users/5"

    const fetchUrl = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setName(json.name);
            setUsername(json.username);
            setCity(json.address.city);

        } catch (error) {
            setName("Error fetching data!");
        }
    }

    useEffect(() => { fetchUrl() }, [])

    return (
        <div style={{ padding: "4px", margin: "4px", borderStyle: "solid", borderBlockColor: "#999"}}>
            Nimi: { name }<br />
            Käyttäjä: { username }<br />
            Kaupunki: { city }
        </div>
    )
}