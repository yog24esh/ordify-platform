import type { RouteObject } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";

export const inventoryRoutes: RouteObject[] = [
  {
    path: "darkstores/:storeId/inventory",
    element: <InventoryPage />,
  },
];
