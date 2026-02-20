import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "../../app/ProtectedRoutes";

// Pages
import CustomerDashboard from "../dashboard/customer/CustomerDashboard";
import DarkStoreListPage from "../darkstore/pages/DarkStoreListPage";
import InventoryPage from "../inventory/pages/InventoryPage";
import CreateOrderPage from "../order/pages/CreateOrderPage";
import OrderDetailsPage from "../order/pages/OrderDetailsPage";

export const customerRoutes: RouteObject[] = [
  // ✅ Customer base dashboard
  {
    path: "/dashboard/customer",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <CustomerDashboard />
      </ProtectedRoute>
    ),
  },

  // ✅ Browse Stores
  {
    path: "/darkstores",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <DarkStoreListPage />
      </ProtectedRoute>
    ),
  },

  // ✅ Store Inventory
  {
    path: "/darkstores/:storeId/inventory",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <InventoryPage />
      </ProtectedRoute>
    ),
  },

  // ✅ Order Create
  {
    path: "/orders/create",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <CreateOrderPage />
      </ProtectedRoute>
    ),
  },

  // ✅ Order Details
  {
    path: "/orders/:id",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <OrderDetailsPage />
      </ProtectedRoute>
    ),
  },
];
