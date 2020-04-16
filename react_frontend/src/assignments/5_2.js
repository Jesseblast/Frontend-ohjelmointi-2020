// Assignment 5.2

import React from "react"
import { TextField, Typography, Slider, Switch, Button } from "@material-ui/core"

export const Assignment5_2 = () => {

    const marks = [
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ]
    return (
        <div>
            <TextField label="Nimi" name="name" fullWidth />
            <Typography variant="body1">Arvosana</Typography>
            <Slider min={0} max={5} marks={marks} />
            <Typography variant="body1">
                Suosittelen
                <Switch color="primary" />
            </Typography>
            <Button style={{margin: "4px"}} variant="outlined" color="primary">Lisää</Button>
            <Button style={{margin: "4px"}} variant="outlined" color="secondary">Peruuta</Button>
        </div>
    )
}