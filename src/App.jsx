import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import PerfumeSurvey from "./pages/PerfumeSurvey";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["NanumSquareNeo", "Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/perfume-survey" element={<PerfumeSurvey></PerfumeSurvey>}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    @font-face: {
      font-family: 'NanumSquareNeo';  
      unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
    }
    @font-face: {
      font-family: "Montserrat";
      unicode-range: U+0030-0039,U+0041-005A,U+0061-007A
    }
    font-family: 'NanumSquareNeo', "Montserrat";
  }`;

export default App;
