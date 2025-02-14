import React from "react";
import { Route, Routes, Link,Outlet  } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import styled from "styled-components";
import { SidebarContainer } from "./Sidebar/Sidebar.style";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 80px;
  transition: margin-left 0.3s ease;

  ${SidebarContainer}:hover & {
    margin-left: 250px;
  }
`;

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;


