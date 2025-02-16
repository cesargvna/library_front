import { FaHome, FaUser, FaShoppingCart, FaBox, FaDollarSign, FaClipboardList, FaUsers, FaCog, FaChartLine, FaFileAlt, FaShieldAlt, FaCalendarAlt, FaCommentDots, FaEnvelope, FaTasks, FaBuilding, FaKey, FaHistory } from "react-icons/fa";

export const sidebarItems = [
  {
    icon: <FaChartLine />,
    label: "Tablero",
    submenu: [
      { path: "/dashboard/main", label: "Panel Principal" },
      { path: "/dashboard/analytics", label: "Gestion de Tableros" },
    ],
  },
  {
    icon: <FaBuilding />,
    label: "Gestión de Empresa",
    submenu: [
      { path: "/company/data", label: "Datos de Empresa" },
      { path: "/company/reports", label: "Reportes" },
      { path: "/company/expenses", label: "Gastos" },
      { path: "/company/closing", label: "Cierre de Caja" },
    ],
  },
  {
    icon: <FaUser />,
    label: "Gestión de Usuarios y Roles",
    submenu: [
      { path: "/users", label: "Usuarios" },
      { path: "/users/roles", label: "Roles y Permisos" },
      { path: "/users/activity", label: "Actividad de Usuarios" },
    ],
  },
  {
    icon: <FaBox />,
    label: "Gestión de Inventario y Productos",
    submenu: [
      { path: "/inventory", label: "Inventario" },
      { path: "/products", label: "Productos" },
      { path: "/catalog", label: "Catálogo" },
      { path: "/history", label: "Historial de Producto" },
      { path: "/alerts", label: "Alertas de Stock Bajo" },
    ],
  },
  {
    icon: <FaShoppingCart />,
    label: "Gestión de Ventas y Post-Venta",
    submenu: [
      { path: "/sales", label: "Ventas" },
      { path: "/quotes", label: "Cotizaciones" },
      { path: "/clients", label: "Clientes" },
      { path: "/returns", label: "Devoluciones" },
      { path: "/loyalty", label: "Programas de Fidelización" },
    ],
  },
  {
    icon: <FaDollarSign />,
    label: "Gestión de Compras y Proveedores",
    submenu: [
      { path: "/purchases", label: "Compras" },
      { path: "/suppliers", label: "Proveedores" },
      { path: "/purchase-history", label: "Historial de Compras" },
    ],
  },
  {
    icon: <FaCalendarAlt />,
    label: "Aplicaciones y Herramientas",
    submenu: [
      { path: "/calendar", label: "Calendario" },
      { path: "/chat", label: "Chat" },
      { path: "/email", label: "Email" },
      { path: "/tasks", label: "Tareas" },
    ],
  },
  {
    icon: <FaFileAlt />,
    label: "Gestión de Documentos",
    path: "/documents",
  },
  {
    icon: <FaCog />,
    label: "Seguridad y Configuración Avanzada",
    submenu: [
      { path: "/settings/general", label: "Configuración General" },
      { path: "/settings/api", label: "API Key" },
      { path: "/settings/logs", label: "Logs del Sistema" },
      { path: "/settings/backups", label: "Copias de Seguridad" },
    ],
  },
];
