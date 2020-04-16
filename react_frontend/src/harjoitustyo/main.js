import React from "react"
import { AppBar, Tab, Tabs } from "@material-ui/core"

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Lomake } from "./lomake"
import { Muistutukset } from "./muistutukset"
import { Asetukset } from "./asetukset"


export const Harjoitustyo = () => {
    return (
        <BrowserRouter>
            <div>
                <HarjoitustyoAppBar />
                <Switch>
                    <Route exact path="/" component={ Muistutukset } />
                    <Route path="/lisaa" component={ Lomake } />
                    <Route path="/asetukset" component={ Asetukset } />
                </Switch>
            </div>
        </BrowserRouter>
    )
}


const HarjoitustyoAppBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Tabs>
                    <Tab label="Näytä muistutukset" component={ Link } to="/" />
                    <Tab label="Lisää uusi muistutus" component={ Link } to="/lisaa" />
                    <Tab label="Asetukset" component={ Link } to="/asetukset" />
                </Tabs>
            </AppBar>
        </div>
    )
}