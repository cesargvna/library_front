import React from "react";
import { Route, Routes, Link, Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Users from "../pages/Users/Users";
import Roles from "../pages/Users/Roles";
import Activity from "../pages/Users/Activity";
import NotFoundPage from "../utilities/NotFoundPage";
import Main from "../pages/Dashboard/Main";
import Analytics from "../pages/Dashboard/Analytics";
import Data from "../pages/Subsidiary/Data";
import Closing from "../pages/Subsidiary/Closing";
import Expenses from "../pages/Subsidiary/Expenses";
import Reports from "../pages/Subsidiary/Reports";
import Inventory from "../pages/Inventory/Inventory";
import Products from "../pages/Inventory/Products";
import Catalog from "../pages/Inventory/Catalog";
import Alerts from "../pages/Inventory/Alerts";
import Sales from "../pages/Sales/Sales";
import Quotes from "../pages/Sales/Quotes";
import Clients from "../pages/Sales/Clients";
import Returns from "../pages/Sales/Returns";
import Loyalty from "../pages/Sales/Loyalty";
import Documents from "../pages/Documents/Documents";
import General from "../pages/Settings/General";
import ApiKeys from "../pages/Settings/ApiKey";
import Logs from "../pages/Settings/Logs";
import Backups from "../pages/Settings/Backups";

const Private = () => {
  return (

    <Sidebar>
      
      <Routes>
        <Route path="/dashboard/main" element={<Main />} />
        <Route path="/dashboard/analytics" element={<Analytics/>} />

        <Route path="/subsidiary/data" element={<Data/>} />
        <Route path="/subsidiary/closing" element={<Closing/>} />
        <Route path="/subsidiary/expenses" element={<Expenses/>} />
        <Route path="/subsidiary/Reports" element={<Reports/>} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/roles" element={<Roles />} />
        <Route path="/users/activity" element={<Activity />} />

        <Route path="/inventory/inventory" element={<Inventory />} />
        <Route path="/inventory/products" element={<Products />} />
        <Route path="/inventory/catalog" element={<Catalog />} />
        <Route path="/inventory/alerts" element={<Alerts />} />

        <Route path="/sales/sales" element={<Sales />} />
        <Route path="/sales/quotes" element={<Quotes />} />
        <Route path="/sales/clients" element={<Clients />} />
        <Route path="/sales/returns" element={<Returns />} />
        <Route path="/sales/loyalty" element={<Loyalty />} />

        <Route path="/documents/documents" element={<Documents />} />

        <Route path="/settings/general" element={<General />} />
        <Route path="/settings/api" element={<ApiKeys />} />
        <Route path="/settings/logs" element={<Logs />} />
        <Route path="/settings/backups" element={<Backups />} />

      </Routes>
        
    </Sidebar>


  );
};

export default Private;
