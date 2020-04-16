import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import * as COLORS from "@material-ui/core/colors";

const STYLE = makeStyles({
    text: { color: COLORS.green[100] },
    show: { color: COLORS.cyan[300] },
    delete: { color: COLORS.pink[100], backgroundColor: COLORS.red[400] },
    container: { borderRadius: 25, background: "linear-gradient(0deg, #D8ADA3 20%, #FF977F 80%)" },
    gridcontainer: { padding: ".5%" }
})

export const ListFormItems = (props) => {
    const style = STYLE();

    return (
        <div>
            <Card>
                {
                    props.items.map((item) => {
                        return (
                            <div>
                                <Grid container direction="column" className={style.gridcontainer}>
                                    <Card className={style.container}>
                                        <CardContent spacing={4}>
                                            <Typography><b>Otsikko:</b> { item.title }</Typography>
                                            <Typography><b>Nimi:</b> { item.name }</Typography>
                                            <Typography><b>Sisältö:</b> { item.content }</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    })
                }
            </Card>
        </div>
    )
}