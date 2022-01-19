import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#424a7d',
        },
        secondary: {
          main: 'hsl(34.9,98.6%,72.9%)',
        },
        background: {
          default: '#0F1624',
          paper: '#272a41',
        },
      },
      typography: {
        fontFamily: 'Space Grotesk, sans-serif',
      },
})

export default theme;