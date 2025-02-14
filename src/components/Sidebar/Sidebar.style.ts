import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary}; /* 🔥 Mantiene el color primario */
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;

  &:hover {
    width: 250px;
    align-items: flex-start;
    padding-left: 15px;
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
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease, padding-left 0.3s ease;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.2); /* 🔥 Suave cambio en hover */
  }

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: #ffffff; /* 🔥 Texto en blanco */
    width: 100%;
  }

  /* ÍCONOS SIEMPRE VISIBLES */
  .icon {
    font-size: 24px;
    min-width: 40px;
    text-align: center;
    color: #ffffff; /* 🔥 Íconos en blanco */
  }

  /* OCULTAR EL TEXTO CUANDO EL SIDEBAR ESTÁ COLAPSADO */
  .nav-text {
    display: none;
    color: #ffffff; /* 🔥 Texto en blanco cuando se expanda */
  }

  /* MOSTRAR EL TEXTO CUANDO EL SIDEBAR SE EXPANDE */
  ${SidebarContainer}:hover & {
    justify-content: flex-start;
  }

  ${SidebarContainer}:hover & .nav-text {
    display: inline;
  }
`;
