import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayoutWrapper from "../Layout/DashboardLayoutWrapper";
const DashboardPage = lazy(() => import("../pages/Dashboard/DashboardPage"));
const LoginPage = lazy(() => import("../pages/Auth/Login/LoginPage"));
const LeadsPage = lazy(() => import("../pages/Admin/Crm/Leads/LeadsPage"));
const LeadsActivityPage = lazy(
  () => import("../pages/Admin/Crm/LeadsActivity/LeadsActivityPage"),
);
const CrmUniversityPage = lazy(
  () => import("../pages/Admin/Crm/University/UniversityPage"),
);
const CrmCollegePage = lazy(
  () => import("../pages/Admin/Crm/College/CollegePage"),
);
const CrmOtherInstitutionsPage = lazy(
  () => import("../pages/Admin/Crm/OtherInstitutions/OtherInstitutionsPage"),
);
const CrmSchoolPage = lazy(
  () => import("../pages/Admin/Crm/School/SchoolPage"),
);

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<DashboardLayoutWrapper />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/leads/:id" element={<LeadsActivityPage />} />
        <Route path="/institution">
          <Route index element={<Navigate to="university" replace />} />
          <Route path="university" element={<CrmUniversityPage />} />
          <Route path="college" element={<CrmCollegePage />} />
          <Route
            path="other-institutions"
            element={<CrmOtherInstitutionsPage />}
          />
          <Route path="school" element={<CrmSchoolPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default PageRoutes;
