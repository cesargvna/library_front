import React from "react";
import { Route, Routes, Link,Outlet  } from "react-router";
import { sidebarItems } from "./SidebarData";
import { SidebarContainer, NavList, NavItem } from "./Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        {sidebarItems.map((item, index) => (
          <NavItem key={index}>
            <Link to={item.path || "#"}>
              <span className="icon">{item.icon}</span> {/* 🔥 Íconos en blanco */}
              <span className="nav-text">{item.label}</span>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
