import InventoryPage from "./pages/InventoryPage";
import UpdateInventoryPage from "./pages/UpdateInventoryPage";

export const inventoryRoutes = [
  {
    path: "/darkstores/:storeId/inventory",
    element: <InventoryPage />,
  },
    {
    // ✅ THIS MUST MATCH navigate()
    path: "/darkstores/:storeId/inventory/:inventoryId/update",
    element: <UpdateInventoryPage />,
  },
];

//export default inventoryRoutes;
