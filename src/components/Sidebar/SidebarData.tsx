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
} from "react-icons/fa";

export const sidebarItems = [
  {
    icon: <FaChartLine />,
    label: "Tablero",
    submenu: [
      { path: "/dashboard/main", label: "Panel Principal", icon: <FaHome /> },
      { path: "/dashboard/analytics", label: "Gestión de Tableros", icon: <FaClipboardList /> },
    ],
  },
  {
    icon: <FaBuilding />,
    label: "Empresa",
    submenu: [
      { path: "/company/data", label: "Datos de Empresa", icon: <FaBriefcase /> },
      { path: "/company/reports", label: "Reportes", icon: <FaClipboardCheck /> },
      { path: "/company/expenses", label: "Gastos", icon: <FaMoneyBillWave /> },
      { path: "/company/closing", label: "Cierre de Caja", icon: <FaDollarSign /> },
    ],
  },
  {
    icon: <FaUser />,
    label: "Usuarios y Roles",
    submenu: [
      { path: "/users", label: "Usuarios", icon: <FaUsers /> },
      { path: "/users/roles", label: "Roles y Permisos", icon: <FaTools /> },
      { path: "/users/activity", label: "Actividad de Usuarios", icon: <FaHistory /> },
    ],
  },
  {
    icon: <FaBox />,
    label: "Inventario y Productos",
    submenu: [
      { path: "/inventory", label: "Inventario", icon: <FaBox /> },
      { path: "/products", label: "Productos", icon: <FaShoppingCart /> },
      { path: "/catalog", label: "Catálogo", icon: <FaClipboardList /> },
      { path: "/history", label: "Historial de Producto", icon: <FaHistory /> },
      { path: "/alerts", label: "Alertas de Stock Bajo", icon: <FaShieldAlt /> },
    ],
  },
  {
    icon: <FaShoppingCart />,
    label: "Ventas y Post-Venta",
    submenu: [
      { path: "/sales", label: "Ventas", icon: <FaDollarSign /> },
      { path: "/quotes", label: "Cotizaciones", icon: <FaClipboardList /> },
      { path: "/clients", label: "Clientes", icon: <FaUsers /> },
      { path: "/returns", label: "Devoluciones", icon: <FaTruck /> },
      { path: "/loyalty", label: "Programas de Fidelización", icon: <FaGift /> },
    ],
  },
  {
    icon: <FaDollarSign />,
    label: "Compras y Proveedores",
    submenu: [
      { path: "/purchases", label: "Compras", icon: <FaShoppingCart /> },
      { path: "/suppliers", label: "Proveedores", icon: <FaTruck /> },
      { path: "/purchase-history", label: "Historial de Compras", icon: <FaHistory /> },
    ],
  },
  {
    icon: <FaCalendarAlt />,
    label: "Aplicaciones",
    submenu: [
      { path: "/calendar", label: "Calendario", icon: <FaCalendarAlt /> },
      { path: "/chat", label: "Chat", icon: <FaCommentDots /> },
      { path: "/email", label: "Email", icon: <FaEnvelope /> },
      { path: "/tasks", label: "Tareas", icon: <FaTasks /> },
    ],
  },
  {
    icon: <FaFileAlt />,
    label: "Gestión de Documentos",
    path: "/documents",
  },
  {
    icon: <FaCog />,
    label: "Configuración Avanzada",
    submenu: [
      { path: "/settings/general", label: "Configuración General", icon: <FaCog /> },
      { path: "/settings/api", label: "API Key", icon: <FaKey /> },
      { path: "/settings/logs", label: "Logs del Sistema", icon: <FaClipboardList /> },
      { path: "/settings/backups", label: "Copias de Seguridad", icon: <FaShieldAlt /> },
    ],
  },
];
