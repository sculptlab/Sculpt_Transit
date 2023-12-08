"use client";
import { createTheme } from "@mui/material/styles";

let teal = "#00ADB5";
let black = "#222831";
let grey = "#EEEEEE";
let dark_grey = "#393E46";
let white = "#FFFFFF";

const theme = createTheme({
  palette: {
    primary: {
      main: teal,
      contrastText: dark_grey,
      light: white,
    },
    secondary: {
      contrastText: white,
      main: dark_grey,
      dark: black,
    },
  },
  shape: {
    borderRadius: 10,
    
  },
});

export default theme;
