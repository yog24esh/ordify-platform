import { Route } from "react-router-dom";
import CreateOrderPage from "./pages/CreateOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

const orderRoutes = (
  <>
    <Route path="/orders/create" element={<CreateOrderPage />} />
    <Route path="/orders/:id" element={<OrderDetailsPage />} />
  </>
);

export default orderRoutes;
