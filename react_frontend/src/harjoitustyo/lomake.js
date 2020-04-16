import React, { useState } from "react"
import { Typography, TextField, Button } from "@material-ui/core"
import { FormStyle, ButtonStyle } from "./styles"
import axios from "axios";

import { AddItem } from "./data";


export const Lomake = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const Add = () => {
        const formData = {
            "name": name,
            "title": title,
            "content": content
        };

        axios.post("http://localhost:8080/data/add", formData)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Muistutuksen lisääminen onnistui");
                } else {
                    console.log("VIRHE! Muistutuksen lisääminen epäonnistui");
                }
            })
        
        Clear();
    }

    const Clear = () => {
        setName("");
        setTitle("");
        setContent("");
    }

    return (
        <div>
            <Typography variant="h4">Lisää uusi muistutus</Typography>
            <TextField style={FormStyle} label="Nimi" name="name" 
                value={ name } onChange={(e) => { setName(e.target.value) }} /><br />

            <TextField style={FormStyle} label="Otsikko" name="title" 
                value={ title } onChange={(e) => { setTitle(e.target.value) }} /><br />

            <TextField style={FormStyle} label="Leipäteksti" name="content" 
            multiline rows={ 5 } value={ content } onChange={(e) => { setContent(e.target.value) }} /><br />

            <Button style={ButtonStyle} onClick={ Add } variant="outlined" color="primary">Lisää</Button>
            <Button style={ButtonStyle} onClick={ Clear } variant="outlined" color="secondary">Peruuta</Button>
        </div>
    )
}