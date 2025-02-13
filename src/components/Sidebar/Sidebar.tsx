import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaChartBar, FaCog, FaBox, FaFileInvoice, FaClipboardList, FaUsers, FaDollarSign, FaRegChartBar, FaMoneyCheckAlt } from 'react-icons/fa';
import { SidebarContainer, Logo, NavList, NavItem } from './Sidebar.style';

const Sidebar = () => {
  const sidebarItems = [
    { icon: <FaHome />, label: 'Datos Generales' },
    { icon: <FaUser />, label: 'Usuarios' },
    { icon: <FaBox />, label: 'Inventario' },
    { icon: <FaShoppingCart />, label: 'Productos' },
    { icon: <FaDollarSign />, label: 'Ventas' },
    { icon: <FaClipboardList />, label: 'Cotizaciones' },
    { icon: <FaUsers />, label: 'Clientes' },
    { icon: <FaShoppingCart />, label: 'Compras' },
    { icon: <FaUser />, label: 'Proveedores' },
    { icon: <FaFileInvoice />, label: 'Devoluciones' },
    { icon: <FaBox />, label: 'Catálogo' },
    { icon: <FaDollarSign />, label: 'Gastos' },
    { icon: <FaRegChartBar />, label: 'Reportes' },
    { icon: <FaMoneyCheckAlt />, label: 'Cierre de Caja' },
    { icon: <FaCog />, label: 'Configuración' },
  ];

  return (
    <SidebarContainer>
      <NavList>
        {sidebarItems.map((item, index) => (
          <NavItem key={index}>
            {item.icon}
            <span>{item.label}</span>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;