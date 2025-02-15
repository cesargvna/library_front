import React from "react";
import { Route, Routes, Link, Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Users from "../pages/Users/Users";
import NotFoundPage from "../utilities/NotFoundPage";

const Private = () => {
  return (

    <Sidebar>
      <NotFoundPage>
        <Route path="/users" element={<Users />} />
      </NotFoundPage>
    </Sidebar>


  );
};

export default Private;


