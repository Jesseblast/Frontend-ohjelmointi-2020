import React from "react"
import { Button } from "@material-ui/core"
import { ButtonStyle } from "./styles"

export const Asetukset = () => {
    return (
        <div>
            <a href={`http://localhost:8080/data/deleteall`}>
                <Button /* Delete-button */
                    style={ ButtonStyle } 
                    variant="outlined" 
                    color="secondary">
                        Poista kaikki muistutukset
                </Button>
            </a>
        </div>
    )
}