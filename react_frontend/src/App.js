import React from 'react';
import { lightBlue, amber, brown } from "@material-ui/core/colors"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

import ExportDefaultExample, { ExportExample } from "./examples/Examples1"
import { MapExample } from "./examples/Examples2"
import { StatesExample } from "./examples/Examples3"
import { FetchExample } from "./examples/Examples4"
import { Assignment4_2 } from './assignments/4_2'
import { Assignment4_3 } from './assignments/4_3'
import { Examples5 } from "./examples/examples5"
import { Assignment5_1 } from "./assignments/5_1"
import { Assignment5_2 } from "./assignments/5_2"
import { TableExample, FormExample } from "./examples/examples6"
import { Assignment6_1 } from "./assignments/6_1"
import { Examples7 } from "./examples/examples7"

import { Harjoitustyo } from "./harjoitustyo/main"
import { HarjoitustyoTheme } from "./harjoitustyo/HarjoitustyoTheme"

const theme7_2 = createMuiTheme({
  palette: {
      background: {default: "#FFFFFF"},
      primary: {main: lightBlue[500], contrastText: "#FFFFFF"},
      secondary: {main: amber[300]},
      text: {primary: lightBlue[500], secondary: brown[50] },
  },
  typography: {
    fontFamily: ["Poppins"]
  }
})

const App = () => {

  if (true) {
    return (
      <div>
        <MuiThemeProvider theme={ HarjoitustyoTheme }>
          <Harjoitustyo />
        </MuiThemeProvider>
      </div>
    )
  }

  /* Assignment 7.2 (themes) */
  if (false) {
    return (
      <MuiThemeProvider theme={ theme7_2 }>
        <div>
          <Assignment6_1 />
        </div>
      </MuiThemeProvider>
    )
  }

  // Assignment 6.1
  if (false) {
    return (
      <Assignment6_1 />
    )
  }

  // Demot
  if (false) {
    return (
      <div>

        <Assignment5_2 />
        <Assignment5_1 />


        <FormExample />
        <TableExample />
        <Examples5 />

        <h1 style={{color: "#FF0000FF"}}>VANHAT:</h1>
        <ExportExample text="Using 'export const'" />
        <ExportDefaultExample text="Using 'export default'" />
        <MapExample />
        <StatesExample />
        <FetchExample />

        <Assignment4_2 />
        <Assignment4_3 />
      </div>
    )
  }
}

export default App;
