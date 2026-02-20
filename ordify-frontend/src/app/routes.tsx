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
import { Navigate } from "react-router-dom";
import { authRoutes } from "../features/user/authRoutes";
import { dashboardRoutes } from "../features/dashboard/dashboardRoutes";
import { orderRoutes } from "../features/order/orderRoutes";
import { darkstoreRoutes } from "../features/darkstore/darkstore.routes";
import { inventoryRoutes } from "../features/inventory/inventoryRoutes";
import { productRoutes } from "../features/Product/product.routes";
import { customerRoutes } from "../features/customer/customerRoutes";

export const router = createBrowserRouter([
  ...authRoutes,

  ...customerRoutes,

  ...orderRoutes,
  
  ...darkstoreRoutes,
  
  ...dashboardRoutes,

  ...inventoryRoutes,

  ...productRoutes,

 {
  path: "/",
  element: <Navigate to="/login" replace />,
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
