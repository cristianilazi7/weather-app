import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme/theme.ts";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { SnackbarProvider } from "notistack";

import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsThemeProvider theme={theme}>
          <MUIThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider
              maxSnack={3}
              autoHideDuration={3000}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <App />
            </SnackbarProvider>
          </MUIThemeProvider>
        </StyledComponentsThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
