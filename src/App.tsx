import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; // ✅ Importa BrowserRouter correctamente
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Layout from "./components/Layout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
        <Routes>
          {/* Ruta de Login sin Layout */}
          <Route path="/login" element={<Login />} />

          {/* Rutas dentro del Layout */}
          <Route path="/prueba" element={<Sidebar />}>
            <Route index element={<Home />} /> {/* Página principal */}
          </Route>
        </Routes>
    </ThemeProvider>
  );
};

export default App;