import { Routes, Route  } from "react-router-dom";
import { authRoutes } from "../features/user/authRoutes";
import DashboardRoutes from "../features/dashboard/dashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {authRoutes}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
    </Routes> 
  );
}
