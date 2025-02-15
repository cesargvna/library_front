import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; // ✅ Importa BrowserRouter correctamente
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Login from "./pages/Auth/Login";
import Private from "./components/Private";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
        <Routes>
          {/* Ruta de Login sin Layout */}
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<Private />} />
        </Routes>
    </ThemeProvider>
  );
};

export default App;