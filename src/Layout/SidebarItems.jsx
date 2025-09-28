import {
  FaChartLine,
  FaHandshake,
  FaListAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { LuBuilding, LuShield, LuUserCog, LuUsers } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

const SidebarItems = [
  {
    label: "SUPER ADMIN",
    parent: "SUPER-ADMIN",
    route: "/super-admin",
    child: [
      {
        name: "Dashboard",
        icon: <MdDashboard />,
        route: "/dashboard",
        permission: "VIEW-DASHBOARD",
      },
      {
        name: "Tenants",
        icon: <FaHandshake />,
        route: "/tenants",
        permission: "VIEW-TENANTS",
      },
      {
        name: "Finacials",
        icon: <FaChartLine />,
        route: "/financials",
        permission: "VIEW-FINANCIALS",
      },
    ],
  },

  {
    label: "AUTH",
    parent: "AUTH",
    route: "/auth",
    child: [
      {
        name: "Roles",
        icon: <LuShield />,
        route: "/roles",
        permission: "VIEW-ROLE",
      },
      {
        name: "Users",
        icon: <LuUserCog />,
        route: "/users",
        permission: "VIEW-USER",
      },
    ],
  },
  {
    label: "CRM",
    parent: "CRM",
    route: "/crm",
    child: [
      {
        name: "Catelog",
        icon: <FaListAlt />,
        route: "/catelog",
        permission: "UPDATE-CATELOG",
      },
      {
        name: "Insitution",
        icon: <LuBuilding />,
        route: "/institutions",
        permission: "VIEW-INSTITUTION",
      },
      {
        name: "Students",
        icon: <FaUserGraduate />,
        route: "/students",
        permission: "VIEW-STUDENTS",
      },
    ],
  },
];
export default SidebarItems;
