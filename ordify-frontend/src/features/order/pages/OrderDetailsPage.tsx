import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getOrderById,
  updateOrderStatus,
  cancelOrder,
} from "../api/orderApi";
import type { OrderResponse, OrderStatus } from "../types/order.types";
import OrderStatusActions from "../components/OrderStatusActions";
import "../styles/order.css";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<OrderResponse | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      setOrder(await getOrderById(+id));
    };

    void load();
  }, [id]);

  if (!order) {
    return (
      <div className="order-container">
        <p>Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="order-feature">
      <div className="order-container">
        <h2>Order #{order.orderId}</h2>

        <div className="order-summary">
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Total Amount:</strong> {order.totalAmount}
          </p>
          <p>
            <strong>Store ID:</strong> {order.storeId}
          </p>
        </div>

        <h3>Items</h3>
        <ul className="item-list">
          {order.items.map((i, idx) => (
            <li key={idx}>
              <strong>Product:</strong> {i.productId} &nbsp;|&nbsp;
              <strong>Qty:</strong> {i.quantity} &nbsp;|&nbsp;
              <strong>Price:</strong> {i.price}
            </li>
          ))}
        </ul>

        <div className="status-actions">
          <OrderStatusActions
            status={order.status}
            onChangeStatus={async (s: OrderStatus) => {
              const updated = await updateOrderStatus(order.orderId, s);
              setOrder(updated);
            }}
            onCancel={async () => {
              await cancelOrder(order.orderId);
              const refreshed = await getOrderById(order.orderId);
              setOrder(refreshed);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
