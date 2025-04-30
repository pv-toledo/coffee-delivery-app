import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <GlobalStyle/>
    </ThemeProvider>
    
  )
}


