import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaBox,
  FaDollarSign,
  FaClipboardList,
  FaUsers,
  FaCog,
  FaChartLine,
  FaFileAlt,
  FaShieldAlt,
  FaCalendarAlt,
  FaCommentDots,
  FaEnvelope,
  FaTasks,
  FaBuilding,
  FaKey,
  FaHistory,
  FaBriefcase,
  FaTools,
  FaMoneyBillWave,
  FaTruck,
  FaClipboardCheck,
  FaGift,
  FaAngleRight, // Agregamos la flecha
} from "react-icons/fa";

export const sidebarItems = [
  {
    icon: <FaChartLine />,
    label: "Tablero",
    submenu: [
      { path: "/dashboard/main", label: "Panel Principal", icon: <FaAngleRight /> },
      { path: "/dashboard/analytics", label: "Gestión de Tableros", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaBuilding />,
    label: "Empresa",
    submenu: [
      { path: "/subsidiary/data", label: "Datos de Empresa", icon: <FaAngleRight /> },
      { path: "/subsidiary/reports", label: "Reportes", icon: <FaAngleRight /> },
      { path: "/subsidiary/expenses", label: "Gastos", icon: <FaAngleRight /> },
      { path: "/subsidiary/closing", label: "Cierre de Caja", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaUser />,
    label: "Usuarios y Roles",
    submenu: [
      { path: "/users", label: "Usuarios", icon: <FaAngleRight /> },
      { path: "/users/roles", label: "Roles y Permisos", icon: <FaAngleRight /> },
      { path: "/users/activity", label: "Actividad de Usuarios", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaBox />,
    label: "Inventario y Productos",
    submenu: [
      { path: "/inventory/inventory", label: "Inventario", icon: <FaAngleRight /> },
      { path: "/inventory/products", label: "Productos", icon: <FaAngleRight /> },
      { path: "/inventory/catalog", label: "Catálogo", icon: <FaAngleRight /> },
      { path: "/inventory/alerts", label: "Alertas de Stock Bajo", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaShoppingCart />,
    label: "Ventas y Post-Venta",
    submenu: [
      { path: "/sales/sales", label: "Ventas", icon: <FaAngleRight /> },
      { path: "/sales/quotes", label: "Cotizaciones", icon: <FaAngleRight /> },
      { path: "/sales/clients", label: "Clientes", icon: <FaAngleRight /> },
      { path: "/sales/returns", label: "Devoluciones", icon: <FaAngleRight /> },
      { path: "/sales/loyalty", label: "Programas de Fidelización", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaDollarSign />,
    label: "Compras y Proveedores",
    submenu: [
      { path: "/sales/sales", label: "Compras", icon: <FaAngleRight /> },
      { path: "/suppliers", label: "Proveedores", icon: <FaAngleRight /> },
      { path: "/purchase-history", label: "Historial de Compras", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaCalendarAlt />,
    label: "Aplicaciones",
    submenu: [
      { path: "/calendar", label: "Calendario", icon: <FaAngleRight /> },
      { path: "/chat", label: "Chat", icon: <FaAngleRight /> },
      { path: "/email", label: "Email", icon: <FaAngleRight /> },
      { path: "/tasks", label: "Tareas", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaFileAlt />,
    label: "Gestión de Documentos",
    submenu: [
      { path: "/documents/documents", label: "Documentos", icon: <FaAngleRight /> },
      { path: "/documents/documents", label: "Documentos", icon: <FaAngleRight /> },
      { path: "/documents/documents", label: "Documentos", icon: <FaAngleRight /> },
      { path: "/documents/documents", label: "Documentos", icon: <FaAngleRight /> },
    ],
  },
  {
    icon: <FaCog />,
    label: "Configuración Avanzada",
    submenu: [
      { path: "/settings/general", label: "Configuración General", icon: <FaAngleRight /> },
      { path: "/settings/api", label: "API Key", icon: <FaAngleRight /> },
      { path: "/settings/logs", label: "Logs del Sistema", icon: <FaAngleRight /> },
      { path: "/settings/backups", label: "Copias de Seguridad", icon: <FaAngleRight /> },
    ],
  },
];
