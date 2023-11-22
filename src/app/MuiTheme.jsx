import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/rubik";
import "../assets/fonts/SansSerifBldFLF.otf";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    primary: {
      main: "#fff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      light: "#0E0E0E",
      contrastText: "#fff",
    },
    divider: "#fff",
  },
  typography: {
    fontFamily: "Rubik",
    htmlFontSize: 16,
    h3: {
      fontFamily: "SansSerifBldFLF",
    },
    h6: {
      fontSize: 18,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "0.5px solid",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0E0E0E",
        },
      },
    },
  },
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
