import React, { useState } from "react";
import { Link } from "react-router";
import { sidebarItems } from "./SidebarData";
import { SidebarContainer, NavList, NavItem, SidebarContent, Main, SubMenu, NavItemWithSubmenu } from "./Sidebar.style";
import Header from "../Header/Header";
import { Logo } from "../../pages/Auth/Login.styles";

const Sidebar: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <SidebarContainer>
      <SidebarContent>
        <NavList>
          <Logo>M</Logo>
          {sidebarItems.map((item, index) => (
            <NavItemWithSubmenu key={index}>
              <NavItem className={activeIndex === index ? "active" : ""}>
                <Link to={item.path || "#"}>
                  <span className="icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </Link>
              </NavItem>
              {item.submenu && (
                <SubMenu>
                  {item.submenu.map((subItem, subIndex) => (
                    <NavItem key={subIndex} className="submenu-item">
                      <Link to={subItem.path || "#"}>
                        <span className="icon">{subItem.icon}</span>
                        <span className="nav-text">{subItem.label}</span>
                      </Link>
                    </NavItem>
                  ))}
                </SubMenu>
              )}
            </NavItemWithSubmenu>
          ))}
        </NavList>
      </SidebarContent>
      <Header />
      <Main>{children}</Main>
    </SidebarContainer>
  );
};

export default Sidebar;
