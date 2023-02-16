import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/inter";

let theme = createTheme({
  typography: {
    h1: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    h2: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    h3: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    h4: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    h5: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    h6: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    body1: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
    body2: {
      color: "#1E1E1E",
      fontFamily: "Inter",
    },
  },
  palette: {
    mode: "light",
    primary: {
      light: "#856ac0",
      main: "#68559B",
      dark: "#514083",
    },
    secondary: {
      light: "#ea8f61",
      main: "#F28F59",
      dark: "#cc784f",
    },
    offWhite: {
      main: "#FFFFFF",
    },
    offBlack: {
      main: "#1E1E1E",
    },
    surface: {
      main: "#FFF6F1",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
