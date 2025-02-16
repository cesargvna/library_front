import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative; 
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  width: calc(100vw - 80px); 
  height: calc(100vh - 60px);
  position: absolute;
  right:0; 
  bottom: 0;
  overflow-y: auto;
  
`;

export const SidebarContent = styled.div`
  width: 80px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary}; 
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  &:hover {
    width: 250px;
    z-index: 1;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease, padding-left 0.3s ease;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${(props) => props.theme.colors.secondary}; 
  }

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: #ffffff; /* Texto en blanco */
    width: 100%;
    
  }
  .active{
    background: ${(props) => props.theme.colors.secondary};
  }

  .icon {
    font-size: 24px;
    min-width: 40px;
    text-align: center;
    color: #ffffff; /* Íconos en blanco */
  }

  /* OCULTAR EL TEXTO CUANDO EL SIDEBAR ESTÁ COLAPSADO */
  .nav-text {
    display: none;
    color: #ffffff; /* Texto en blanco cuando se expanda */
  }

  /* MOSTRAR EL TEXTO CUANDO EL SIDEBAR SE EXPANDE */
  ${SidebarContent}:hover & .nav-text {
    display: inline;
  }

  &.active {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const SubMenu = styled.div`
  background-color: #1a2a3a;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  max-height: 200px; /* Controla la altura del submenú */
  overflow-y: auto; /* Permite scroll solo si es necesario */
  overflow-x: hidden; /* Elimina el desplazamiento horizontal */
  display: none;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 5px 0;
  z-index: 100;
  transition: all 0.2s ease-in-out;

  .submenu-item {
    padding: 12px 18px;
    color: #ffffff;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .submenu-item:hover {
    background-color: #2b3b4b;
    transform: translateX(5px);
  }
`;

export const NavItemWithSubmenu = styled.div`
  position: relative;
  width: 100%;

  &:hover ${SubMenu} {
    display: flex;
  }
`;