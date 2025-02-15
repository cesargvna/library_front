import { FaHome, FaUser, FaShoppingCart, FaBox, FaDollarSign, FaClipboardList, FaUsers, FaCog } from "react-icons/fa";

export const sidebarItems = [
  { path: "/", icon: <FaHome />, label: "Datos Generales" },
  {
    icon: <FaUser />,
    label: "Usuarios",
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
