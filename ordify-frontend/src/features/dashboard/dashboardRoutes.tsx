import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../../app/ProtectedRoutes";

import CustomerDashboard from "./customer/CustomerDashboard";
import DeliveryDashboard from "./delivery/DeliveryDashboard";
import StoreAdminDashboard from "./storeAdmin/StoreAdminDashboard";
import SuperAdminDashboard from "./superAdmin/SuperAdminDashboard";

export default function DashboardRoutes() {
  return (
    <Routes>
      {/* Auto redirect after login */}
      <Route path="/" element={<RoleBasedRedirect />} />

      <Route
        path="customer"
        element={
          <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="delivery"
        element={
          <ProtectedRoute allowedRoles={["DELIVERY_PARTNER"]}>
            <DeliveryDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="store-admin"
        element={
          <ProtectedRoute allowedRoles={["STORE_ADMIN"]}>
            <StoreAdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="super-admin"
        element={
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

/* ROLE BASED REDIRECT */
function RoleBasedRedirect() {
  const role = localStorage.getItem("role");

  switch (role) {
    case "CUSTOMER":
      return <Navigate to="customer" />;
    case "DELIVERY_PARTNER":
      return <Navigate to="delivery" />;
    case "STORE_ADMIN":
      return <Navigate to="store-admin" />;
    case "SUPER_ADMIN":
      return <Navigate to="super-admin" />;
    default:
      return <Navigate to="/login" />;
  }
}
