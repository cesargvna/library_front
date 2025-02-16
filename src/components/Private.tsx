import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

const Private = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* ✅ Sidebar siempre visible */}
      <Sidebar> 
        {/* ✅ Aquí se renderizan las rutas sin afectar el Sidebar */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Outlet /> {/* Este cambia solo el contenido de la derecha */}
      </div>
      </Sidebar>

      
    </div>
  );
};

export default Private;