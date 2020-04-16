import React from "react"
import { createMuiTheme } from "@material-ui/core"
import * as COLORS from "@material-ui/core/colors"

export const HarjoitustyoTheme = createMuiTheme({
    palette: {
        background: {default: "#FFFFFF"},
        primary: {main: COLORS.orange[500], contrastText: "#FFFFFF"},
        secondary: {main: COLORS.red[300]},
        text: {primary: COLORS.orange[900], secondary: COLORS.brown[50] },
    },
    
    typography: {
      fontFamily: ["Arial"]
    }
})