import type { RouteObject } from "react-router-dom";
import DarkStoreListPage from "./pages/DarkStoreListPage";
import DarkStoreUpdatePage from "./pages/DarkStoreUpdatePageNew";

export const darkstoreRoutes: RouteObject[] = [
  {
    path: "darkstores",
    element: <DarkStoreListPage />,
  },
  {
    path: "darkstores/:storeId/edit",
    element: <DarkStoreUpdatePage />,
  },
];
