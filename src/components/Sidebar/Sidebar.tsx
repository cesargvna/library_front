import React,{useState} from "react";
import { Link } from "react-router";
import { sidebarItems } from "./SidebarData";
import { SidebarContainer, NavList, NavItem, SidebarContent,Main } from "./Sidebar.style";
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
            <NavItem 
            key={index}  
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            >
              <Link to={item.path || "#"} >
                <span className="icon">{item.icon}</span> 
                <span className="nav-text">{item.label}</span>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </SidebarContent>
      <Header />
      <Main>{children}</Main>
    </SidebarContainer>
  );
};

export default Sidebar;
