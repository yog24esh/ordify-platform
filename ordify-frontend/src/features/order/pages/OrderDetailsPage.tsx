import { useParams, useNavigate } from "react-router-dom";
import { updateOrderStatus, cancelOrder } from "../api/orderApi";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const orderId = Number(id);

  const handleStatusUpdate = async () => {
    try {
      await updateOrderStatus(orderId, "DELIVERED");
      alert("Order status updated");
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const handleCancelOrder = async () => {
    try {
      await cancelOrder(orderId);
      alert("Order cancelled");
      navigate("/orders/create");
    } catch (error) {
      console.error("Failed to cancel order", error);
    }
  };

  if (!orderId) return <div>Invalid Order ID</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {orderId}</p>

      <button onClick={handleStatusUpdate}>
        Update Status
      </button>

      <button onClick={handleCancelOrder}>
        Cancel Order
      </button>
    </div>
  );
};

export default OrderDetailsPage;
