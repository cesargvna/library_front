import React, { useState } from "react";
import { Link } from "react-router";
import { sidebarItems } from "./SidebarData";
import { SidebarContainer, NavList, NavItem, SidebarContent, Main, SubMenu, NavItemWithSubmenu } from "./Sidebar.style";
import Header from "../Header/Header";
import Logo from "../Logo";
//import { Logo } from "../../pages/Auth/Login.styles";

const Sidebar: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);  
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);  // Alternar entre abierto y cerrado el sidebar
  };

  const toggleSubMenu = (index: number) => {
    // Alterna entre abrir y cerrar el submenú
    setOpenSubMenu(openSubMenu === index ? null : index);
  };



  return (
    <SidebarContainer>
      
      <SidebarContent>
        <Link to="/dashboard/main">
        <Logo imageUrl="https://imgs.search.brave.com/tHfzQlT8kDY8QWTR8HzEwA-J8NE1IxKzTHDWsipTqIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9hc3NldHMv/ZmVhdHVyZXMvcHJv/ZmVzc2lvbmFsLWxv/Z28tdGVtcGxhdGVz/LTNlYjBlMDE2YThj/ZjA5YzFiOGM4MjQz/YTQ4ZmQ5ZmMyZDJk/YTBiODMzZjhjYTg1/YmI3N2JmOTliMjE1/NzFiYzguc3Zn" />
        </Link>

        <NavList>
          
          {sidebarItems?.map((item, index) => (
            <NavItemWithSubmenu key={index}>
              <NavItem className={activeIndex === index ? "active" : ""}  >
                  <span className="icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
              </NavItem>
              {item.submenu && (
                <SubMenu>
                  {item.submenu.map((subItem, subIndex) => (
                    <NavItem key={subIndex} className="submenu-item" onClick={() => setActiveIndex(index)}>
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
