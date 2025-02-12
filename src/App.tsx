import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Button from "./components/Button";
import Avatar from './components/Avatar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button label="Click Me" />
      <Avatar name="Cesar Galindo" src="" />
    </ThemeProvider>
  );
};

export default App;
