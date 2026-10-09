import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.ts";
import { forceLightColorScheme } from "./utils/forceLightColorScheme.ts";
import { Provider } from "react-redux";
import { makeStore } from "./store";

// Run before the first render so no dark attribute is ever painted.
forceLightColorScheme();

const store = makeStore();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
);
