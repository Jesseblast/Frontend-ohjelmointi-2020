import React, { useState, useEffect } from "react"
import { GetItems } from "./data.js"
import { ListFormItems } from "./ListFormItems"
import { Typography } from "@material-ui/core"


export const Muistutukset = () => {

    return (
        <div>
            { FetchData() }
        </div>
    )
}

const FetchData = () => {
    const [database, setDatabase] = useState([]);

    const Fetch = async () => {
        try {
            fetch("http://localhost:8080/data/all")
                .then(response => response.json())
                .then(json => setDatabase(json));

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { Fetch() }, [] )

    if (database.length > 0) 
        return ( <ListFormItems items={ database } /> )

    return ( <Typography>Ei muistutuksia.</Typography> )
}