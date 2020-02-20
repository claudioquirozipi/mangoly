import React from "react";
import GlobalStyle from "./config/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </ThemeProvider>
  );
};

export default App;
