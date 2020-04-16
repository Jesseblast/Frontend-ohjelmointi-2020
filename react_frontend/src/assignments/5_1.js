// Assignment 5.1

import React from "react"
import { Grid, Card, CardMedia, Typography, Button } from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import * as color from "@material-ui/core/colors";

const useStyles = makeStyles({
    text: { color: color.green[100] },
    show: { color: color.cyan[300] },
    delete: { color: color.pink[100], backgroundColor: color.red[400] },
    container: { borderRadius: 25, background: "linear-gradient(0deg, #00FF66 20%, #009966 60%)" },
})

export const Assignment5_1 = () => {
    const classes = useStyles();

    const data = [
        {
            id: 1, otsikko: 'Assi', paiva: '2020-02-29',
            picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/assi.jpg",
        },
        {
            id: 2, otsikko: 'Myynti', paiva: '2020-03-01',
            picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/myynti.jpg",
        },
        {
            id: 3, otsikko: 'Tiko', paiva: '2020-06-24',
            picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg",
        },
        {
            id: 4, otsikko: 'Bite', paiva: '2020-05-31',
            picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen1.jpg",
        },
        {
            id: 5, otsikko: 'Muu', paiva: '2020-02-29',
            picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen2.jpg"
        },
    ]

    return (
        <div>
            <Grid container spacing={ 4 }>
                { 
                    data.map(henkilo => {
                        return (
                            <Grid item key={henkilo.id}>
                                <Card style={{ minWidth: 250, minHeight: 400 }} className={classes.container}>
                                    <Button startIcon={ <AccountCircleIcon /> } className={classes.show}>Näytä</Button>
                                    <Button startIcon={ <DeleteIcon /> } className={classes.delete}>Poista</Button>
                                    <Typography variant="h6" className={classes.text }>{ henkilo.otsikko }</Typography>
                                    <Typography className={classes.text}>{ henkilo.paiva }</Typography>
                                    <CardMedia image={ henkilo.picture } style={{width: 250, height: 350}} />
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}