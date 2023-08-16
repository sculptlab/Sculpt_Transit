"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f3f49",
      contrastText: "#fff",
    },
    secondary: {
      contrastText: "#1f3f49",
      main: "#eff5f5",
      dark: "#cfe2e2",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
