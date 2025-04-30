import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
    
  )
}


