import React, { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider  } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./styles.css";
import MainRoutes from "./routes";

const queryClient = new QueryClient()

function App() {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRoutes />
      </ThemeProvider>
      <ReactQueryDevtools   />
    </QueryClientProvider>
  );
}

export default App;
