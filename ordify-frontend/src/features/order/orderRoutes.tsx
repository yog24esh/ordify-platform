// import { Route } from "react-router-dom";
import CreateOrderPage from "./pages/CreateOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

export const orderRoutes = [
  {
    path: "/orders/create",
    element: <CreateOrderPage />,
  },
  {
    path: "/orders/:id",
    element: <OrderDetailsPage />,
  },
];
  
    // <Route path="/orders/create" element={<CreateOrderPage />} />
    // <Route path="/orders/:id" element={<OrderDetailsPage />} />
  


// export default orderRoutes;
