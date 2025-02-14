import { FaHome, FaUser, FaShoppingCart, FaBox, FaDollarSign, FaClipboardList, FaUsers, FaCog } from "react-icons/fa";

export const sidebarItems = [
  { path: "/", icon: <FaHome />, label: "Datos Generales" },
  {
    icon: <FaUser />,
    label: "Usuarios",
    subItems: [
      { path: "/users/list", label: "Lista de Usuarios" },
      { path: "/users/create", label: "Crear Usuario" },
    ],
  },
  {
    icon: <FaBox />,
    label: "Inventario",
    subItems: [
      { path: "/inventory/list", label: "Ver Inventario" },
      { path: "/inventory/add", label: "Agregar Producto" },
    ],
  },
  { path: "/products", icon: <FaShoppingCart />, label: "Productos" },
  { path: "/sales", icon: <FaDollarSign />, label: "Ventas" },
  { path: "/quotes", icon: <FaClipboardList />, label: "Cotizaciones" },
  { path: "/clients", icon: <FaUsers />, label: "Clientes" },
  { path: "/settings", icon: <FaCog />, label: "Configuración" },
];
