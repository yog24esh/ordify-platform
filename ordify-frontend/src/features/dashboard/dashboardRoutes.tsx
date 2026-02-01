import { Navigate } from "react-router-dom";
import ProtectedRoute from "../../../src/app/ProtectedRoutes";

import CustomerDashboard from "./customer/CustomerDashboard";
import DeliveryDashboard from "./delivery/DeliveryDashboard";
import StoreAdminDashboard from "./storeAdmin/StoreAdminDashboard";
import DashboardPage from "../../features/admin/pages/DashboardPage";
// OR use DashboardPage from admin module if that's what you want



export const dashboardRoutes = [
  {
    path: "/dashboard",
    children: [
      // Auto redirect after login
      { index: true, element: <RoleBasedRedirect /> },

      {
        path: "customer",
        element: (
          <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "delivery",
        element: (
          <ProtectedRoute allowedRoles={["DELIVERY_PARTNER"]}>
            <DeliveryDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "store-admin",
        element: (
          <ProtectedRoute allowedRoles={["STORE_ADMIN"]}>
            <StoreAdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "super-admin",
        element: (
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

// eslint-disable-next-line react-refresh/only-export-components
function RoleBasedRedirect() {
  const role = localStorage.getItem("role");

  switch (role) {
    case "CUSTOMER":
      return <Navigate to="customer" replace />;
    case "DELIVERY_PARTNER":
      return <Navigate to="delivery" replace />;
    case "STORE_ADMIN":
      return <Navigate to="store-admin" replace />;
    case "SUPER_ADMIN":
      return <Navigate to="super-admin" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
}