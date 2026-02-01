import type { RouteObject } from "react-router-dom";
import DarkStoreListPage from "./pages/DarkStoreListPage";
import DarkStoreUpdatePage from "./pages/DarkStoreUpdatePageNew";
import InventoryPage from "../inventory/pages/InventoryPage";

export const darkstoreRoutes: RouteObject[] = [
  {
    path: "darkstores",
    element: <DarkStoreListPage />,
  },
  {
    path: "darkstores/:storeId/edit",
    element: <DarkStoreUpdatePage />,
  },
  {
    path: "darkstores/:storeId/inventory",
    element: <InventoryPage />,
  },
];
