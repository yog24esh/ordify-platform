import { createBrowserRouter } from "react-router-dom";
import DeliveryDashboardPage from "../features/delivery/pages/DeliveryDashboardPage";
import NearbyOrdersPage from "../features/delivery/pages/NearbyOrdersPage";
import ActiveDeliveryPage from "../features/delivery/pages/ActiveDeliveryPage";

import AdminLayout from "./layout/AdminLayout";
import DashboardPage from "../features/admin/pages/DashboardPage";
import StoresPage from "../features/admin/pages/StoresPage";
import UsersPage from "../features/admin/pages/UsersPage";
import OrdersPage from "../features/admin/pages/OrdersPage";

import ProtectedRoute from "./ProtectedRoutes";

import { authRoutes } from "../features/user/authRoutes";
import { dashboardRoutes } from "../features/dashboard/dashboardRoutes";


export const router = createBrowserRouter([

  ...authRoutes,

  ...dashboardRoutes,
  {
    path: "/",
    element: (
      <div style={{ padding: 20 }}>
        <h1>Ordify – Delivery Demo</h1>
        <p>Go to /delivery/dashboard</p>
      </div>
    ),
  },
  {
    path: "/delivery",
    children: [
      {
        path: "dashboard",
        element: <DeliveryDashboardPage />,
      },
      {
        path: "nearby-orders",
        element: <NearbyOrdersPage />,
      },
      {
        path: "active/:orderId",
        element: <ActiveDeliveryPage />,
      },
    ],
  },
   // ✅ Admin Routes (nested exactly the same way)
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "stores", element: <StoresPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "orders", element: <OrdersPage /> },
    ],
  },
]);
