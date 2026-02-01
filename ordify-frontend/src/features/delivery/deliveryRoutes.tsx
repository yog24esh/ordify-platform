import DeliveryDashboardPage from "./pages/DeliveryDashboardPage";
import NearbyOrdersPage from "./pages/NearbyOrdersPage";
import ActiveDeliveryPage from "./pages/ActiveDeliveryPage";

export const deliveryRoutes = [
  { path: "dashboard", element: <DeliveryDashboardPage /> },
  { path: "nearby-orders", element: <NearbyOrdersPage /> },
  { path: "active/:orderId", element: <ActiveDeliveryPage /> },
];
