import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/rubik";
import "@fontsource/heebo";
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
    h1: {
      fontFamily: "SansSerifBldFLF",
    },
    h2: {
      fontFamily: "SansSerifBldFLF",
    },
    h3: {
      fontFamily: "SansSerifBldFLF",
    },
    h4: {
      fontFamily: "SansSerifBldFLF",
    },
    h5: {
      fontFamily: "SansSerifBldFLF",
    },
    h6: {
      fontFamily: "SansSerifBldFLF",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.75rem",
    },
    overline: {
      fontSize: "2rem",
      fontFamily: "Heebo",
      fontWeight: "bold",
      lineHeight: "normal",
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
