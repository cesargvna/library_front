import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button label="Click Me" />
    </ThemeProvider>
  );
};

export default App;
