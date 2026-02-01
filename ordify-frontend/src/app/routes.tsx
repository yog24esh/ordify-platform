import { createBrowserRouter } from "react-router-dom";
import DeliveryDashboardPage from "../features/delivery/pages/DeliveryDashboardPage";
import NearbyOrdersPage from "../features/delivery/pages/NearbyOrdersPage";
import ActiveDeliveryPage from "../features/delivery/pages/ActiveDeliveryPage";

export const router = createBrowserRouter([
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
]);
