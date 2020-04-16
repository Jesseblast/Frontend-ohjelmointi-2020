import React from "react"
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import { TextField, Input, InputLabel, Button } from "@material-ui/core"

import AttachmentIcon from '@material-ui/icons/Attachment';


export const DateExample = () => {


    return ( 
        <div>
            
        </div>
    )
}


export const FormExample = () => {

    const changePicture = () => {

    }

    return (
        <div>
            <InputLabel htmlFor="pic">
                Picture
                <Button component="span" color="primary" startIcon={ <AttachmentIcon />} />
            </InputLabel>
            <Input accept="image/*" name="picture" id="pic" type="file" 
                style={{ display: "none" }} onChange={ changePicture } />

            <Input accept="image/*" name="picture2" id="pic2" type="file" />

            <TextField label="nimi1" name="name2" required fullWidth/>
            <TextField label="nimi2" name="name2" variant="filled" fullWidth/>
            <TextField label="nimi3" name="name3" variant="outlined" fullWidth/>
            <TextField label="Selitä" name="selitys" multiline rows="3" fullWidth/>
        </div>
    )
}


export const TableExample = () => {
    return (
        <div>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nimi</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pekka</TableCell>
                            <TableCell>pekka@email.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Matti</TableCell>
                            <TableCell>matti@email.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}