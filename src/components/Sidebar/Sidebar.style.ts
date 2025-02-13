import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: width 0.3s ease;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;

  &:hover {
    width: 250px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.background};
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
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
  gap: 15px;
  padding: 12px;
  color: ${(props) => props.theme.colors.background};
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;
  justify-content: flex-start;
  padding-left: 20px;
  white-space: nowrap;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  svg {
    font-size: 22px;
    min-width: 30px;
  }

  /* Ocultar el texto cuando la barra está colapsada */
  span {
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, width 0.3s ease;
  }

  /* Mostrar el texto cuando la barra está expandida */
  ${SidebarContainer}:hover & span {
    opacity: 1;
    width: auto;
  }
`;