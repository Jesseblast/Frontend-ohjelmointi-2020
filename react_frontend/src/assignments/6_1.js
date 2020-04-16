// Assignments 6.1 and 6.2

import React, { useState } from "react"
import { AppBar, Tab, Tabs, Menu, MenuItem,
     MenuList, IconButton, Typography, Drawer,
     List, ListItem, ListItemText } from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"

import { Assignment4_2 } from "./4_2"
import { Assignment4_3 } from "./4_3"
import { Assignment5_1 } from "./5_1"
import { Assignment5_2 } from "./5_2"

/* Assignment 6.1 */
export const Assignment6_1 = () => {
    const [value, setValue] = useState(null);

    const handleChange = (event, val) => {
        setValue(val)
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={ value } onChange={ handleChange }>
                    <Tab label="Assignment 2" />
                    <Tab label="Assignment 3" />
                    <Tab label="Assignment 4" />
                    <Tab label="Assignment 5" />
                    <Tab label="Assignment 6" />
                    <Tab label="Assignment 7" />
                </Tabs>
            </AppBar>

            { value === 2 && <Assignment4_3 /> }
            { value === 3 && <Assignment5_2 /> }
            { value === 4 && <Assignment6_2 /> }
            { value === 5 && <Assignment5_1 /> }
        </div>
    )
}

/* Assignment 6.2 */
const Assignment6_2 = () => {

    return (
        <div>
            <Assignment6_2_Menu />
            <Assignment6_2_Drawer />
        </div>
    )
}


const Assignment6_2_Menu = () => {
    const [anchorMenu, setMenuOpen] = useState(null);
    const handleMenu = (event) => { setMenuOpen(event.currentTarget) }
    const handleClose = () => { setMenuOpen(null) }

    return (
        <div>
            <IconButton onClick={ handleMenu }><MenuIcon /></IconButton>
            <MenuList>
                <Menu
                    anchorEl={ anchorMenu }
                    open={ Boolean(anchorMenu) }
                    onClose={ handleClose }>
                        <MenuItem>
                            <Typography>Tietoja</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography>Omat tiedot</Typography>
                        </MenuItem>
                </Menu>
            </MenuList>
        </div>
    )
}

const Assignment6_2_Drawer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    return (
        <div>
            <IconButton onClick={ handleOpen }><MenuIcon /></IconButton>
            <Drawer anchor="left" open={ open } onClick={ handleClose }>
                <List>
                    <ListItem button>
                        <ListItemText>Tietoja</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>OmatTiedot</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}