import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
        box-sizing: border-box;
  }
  *, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  }
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;
