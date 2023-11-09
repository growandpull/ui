import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/rubik";
import "../assets/fonts/SansSerifBldFLF.otf";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#fff",
    },
    text: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
    primary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Rubik", "SansSerifBldFLF"],
  },
  components: {},
  spacing: 4,
  shape: {
    borderRadius: 0,
    containerBorderRadius: 0,
  },
});

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
