import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import { Route, Routes } from "react-router";
import Login from "./pages/Auth/Login";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/prueba" element={<Sidebar />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
