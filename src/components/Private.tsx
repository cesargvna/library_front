import React from "react";
import { Route, Routes, Link, Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Users from "../pages/Users/Users";
import Roles from "../pages/Users/Roles";
import Activity from "../pages/Users/Activity";
import NotFoundPage from "../utilities/NotFoundPage";

const Private = () => {
  return (

    <Sidebar>
      
      <Routes>
        
        <Route path="/users" element={<Users />} />
        <Route path="/users/roles" element={<Roles />} />
        <Route path="/users/activity" element={<Activity />} />
      </Routes>
        
    </Sidebar>


  );
};

export default Private;
