import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; // ✅ Importa BrowserRouter correctamente
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Login from "./pages/Auth/Login";
import Private from "./components/Private";
import NotFoundPage from "./utilities/NotFoundPage";

import MainDashboard from "./pages/Dashboard/Main";
import Analytics from "./pages/Dashboard/Analytics";
import DataEmpresa from "./pages/Subsidiary/Data";
import ReportsEmpresa from "./pages/Subsidiary/Reports";
import ExpensesEmpresa from "./pages/Subsidiary/Expenses";
import ClosingEmpresa from "./pages/Subsidiary/Closing";
import Users from "./pages/Users/Users";
import Roles from "./pages/Users/Roles";
import Activity from "./pages/Users/Activity";
import Inventory from "./pages/Inventory/Inventory";
import Products from "./pages/Inventory/Products";
import Catalog from "./pages/Inventory/Catalog";
import Alerts from "./pages/Inventory/Alerts";
import Sales from "./pages/Sales/Sales";
import Quotes from "./pages/Sales/Quotes";
import Clients from "./pages/Sales/Clients";
import Returns from "./pages/Sales/Returns";
import GeneralSettings from "./pages/Settings/General";
import ApiKey from "./pages/Settings/ApiKey";
import Logs from "./pages/Settings/Logs";
import Backups from "./pages/Settings/Backups";
import Documents from "./pages/Documents/Documents"
import Sidebar from "./components/Sidebar/Sidebar";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
        <Routes>
          {/* Ruta de Login sin Layout */}
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<Private />} />
          <Route path="dashboard/main" element={<MainDashboard />} />
            <Route path="dashboard/analytics" element={<Analytics />} />

            <Route path="subsidiary/data" element={<DataEmpresa />} />
            <Route path="subsidiary/reports" element={<ReportsEmpresa />} />
            <Route path="subsidiary/expenses" element={<ExpensesEmpresa />} />
            <Route path="subsidiary/closing" element={<ClosingEmpresa />} />

            <Route path="users" element={<Users />} />
            <Route path="users/roles" element={<Roles />} />
            <Route path="users/activity" element={<Activity />} />

            <Route path="inventory" element={<Inventory />} />
            <Route path="products" element={<Products />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="alerts" element={<Alerts />} />

            <Route path="sales" element={<Sales />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="clients" element={<Clients />} />
            <Route path="returns" element={<Returns />} />

            <Route path="settings/general" element={<GeneralSettings />} />
            <Route path="settings/api" element={<ApiKey />} />
            <Route path="settings/logs" element={<Logs />} />
            <Route path="settings/backups" element={<Backups />} />

            <Route path="documents" element={<Documents />} />

            {/* Ruta de página no encontrada */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </ThemeProvider>
  );
};

export default App;