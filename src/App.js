import React from "react";
//import Perfume from "./Perfume.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Rotas from "./Rotas";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Rotas />
      </ThemeProvider>
    </>
  );
}

export default App;
