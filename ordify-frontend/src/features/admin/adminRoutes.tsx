import AdminLayout from "../../app/layout/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import StoresPage from "./pages/StoresPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import ProtectedRoute from "../../shared/ProtectedRoute";

export const adminRoutes = [
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
];
