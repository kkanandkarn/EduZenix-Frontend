import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayoutWrapper from "../Layout/DashboardLayoutWrapper";
// import Layout from "../Layout/Layout";
const DashboardPage = lazy(() => import("../pages/Dashboard/DashboardPage"));
const LoginPage = lazy(() => import("../pages/Auth/Login/LoginPage"));
const LeadsPage = lazy(() => import("../pages/Admin/Crm/Leads/LeadsPage"));
const LeadsActivityPage = lazy(
  () => import("../pages/Admin/Crm/LeadsActivity/LeadsActivityPage"),
);
const CrmUniversityPage = lazy(
  () => import("../pages/Admin/Crm/University/UniversityPage"),
);

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<DashboardLayoutWrapper />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/leads/:id" element={<LeadsActivityPage />} />
        <Route path="/institution/university" element={<CrmUniversityPage />} />
      </Route>
    </Routes>
  );
};
export default PageRoutes;
