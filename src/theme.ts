import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // The product is light only, so the palette mode is pinned rather than left
  // to follow the browser's `prefers-color-scheme`.
  palette: { mode: "light" },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          colorScheme: "light",
        },
        "*": {
          fontFamily: "'Poppins', sans-serif !important",
        },
      },
    },
  },
});

export default theme;
