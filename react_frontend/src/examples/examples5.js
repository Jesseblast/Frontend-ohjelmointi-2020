

import React from "react"
import { Typography, Card, CardHeader,
     CardContent, CardActions, Button, Grid, Tab } from "@material-ui/core"

import CreateIcon from "@material-ui/icons/Create"
import HomeIcon from "@material-ui/icons/Home"

export const Examples5 = () => {

    const henkiloTaulukko = [
        { id: 1, nimi: "Matti", email: "matti@email.com" },
        { id: 2, nimi: "Saana", email: "saana@email.com" },
        { id: 3, nimi: "Tuomo", email: "tuomo@email.com "},
    ]

    const handleClick = (e) => {

    }

    return (
        <div>
            <Tab label="Etusivulle" icon={ <HomeIcon />} onClick={ (e) => handleClick(e) } />

            { /* Dynamic grid container */ }
            <Grid container spacing={ 4 }>
                {
                    henkiloTaulukko.map(henkilo => {
                        return (
                            <Grid item key={henkilo.id}>
                                <Card style={{minWidth: 250, minHeight: 200 }}>
                                    <CardContent>
                                        <Typography variant="h6">{ henkilo.nimi }</Typography>
                                        <Typography>{ henkilo.email }</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })
                } 
            </Grid>



            { /* Grid container */ }
            <Grid container spacing={ 4 }>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Nimi1</Typography>
                            <Typography>Tietoja henkilöstä Nimi1</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Nimi2</Typography>
                            <Typography>Tietoo henkilöstä Nimi2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


            { /* Card */ }
            <Card>
                <CardHeader title="Pekka" />
                <CardContent>
                    <Typography>Pekalla on ...</Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="primary" startIcon={ <HomeIcon /> }>Kotipainike</Button>
                    <Button color="primary" variant="contained" startIcon={ <CreateIcon /> }>CreateIcon</Button>
                </CardActions>
            </Card>

            <Typography align="center" variant="h5">
                Maija@joku.fi
                Pekka@muu.fi
            </Typography>
        </div>
    )
}