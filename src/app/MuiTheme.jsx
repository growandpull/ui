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
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Rubik",
    htmlFontSize: 16,
    h3: {
      fontFamily: "SansSerifBldFLF",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecoration: "underline",
          color: theme.palette.text.contrastText,
        }),
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
