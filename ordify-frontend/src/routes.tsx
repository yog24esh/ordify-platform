import { useRoutes, Navigate } from "react-router-dom";
import App from "./App";
import DemoPage from "./demo/DemoPage";
import CreateOrderPage from "./features/order/pages/CreateOrderPage";
import OrderDetailsPage from "./features/order/pages/OrderDetailsPage";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <App /> },
    { path: "/home", element: <App /> },
    { path: "/demo", element: <DemoPage /> },

    // order routes
    { path: "/orders/create", element: <CreateOrderPage /> },
    { path: "/orders/:id", element: <OrderDetailsPage /> },

    // fallback to root to prevent blank pages on unknown routes
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}