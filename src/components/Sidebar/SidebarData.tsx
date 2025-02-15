import { FaHome, FaUser, FaShoppingCart, FaBox, FaDollarSign, FaClipboardList, FaUsers, FaCog } from "react-icons/fa";
import { Logo } from "../../pages/Auth/Login.styles";

export const sidebarItems = [
  { path: "/subsidiary", icon: <FaHome />, label: "Empresa" },
  { path: "/", icon: <FaHome />, label: "Dashboard" },
  {
    icon: <FaUser />,
    label: "Usuarios y Roles",
    path: "/users",
    
  },
  {
    icon: <FaBox />,
    label: "Inventario",
    path: "inventory",
  },
  { path: "/products", icon: <FaShoppingCart />, label: "Productos" },
  { path: "/sales", icon: <FaDollarSign />, label: "Ventas" },
  { path: "/quotes", icon: <FaClipboardList />, label: "Cotizaciones" },
  { path: "/clients", icon: <FaUsers />, label: "Clientes" },
  { path: "/settings", icon: <FaCog />, label: "Configuración" },
];
