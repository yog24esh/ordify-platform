import { useEffect, useState } from "react";
import { getAllOrders } from "../api/adminApi";

/**
 * OrdersPage
 *
 * Displays system-wide order list for Super Admin.
 */
interface OrderSummary {
  orderId: number;
  userId: number;
  storeId: number;
  orderStatus: string;
  totalAmount: number;
  createdAt: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await getAllOrders();
      setOrders(response.data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Orders</h2>

      {orders.length === 0 ? (
        <div className="alert alert-info">No orders found</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Store ID</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.userId}</td>
                  <td>{order.storeId}</td>
                  <td>
                    <span className={`badge ${getStatusBadge(order.orderStatus)}`}>
                      {order.orderStatus}
                    </span>
                  </td>
                  <td>₹{order.totalAmount}</td>
                  <td>{formatDate(order.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/**
 * Returns Bootstrap badge class based on order status
 */
const getStatusBadge = (status: string) => {
  switch (status) {
    case "DELIVERED":
      return "bg-success";
    case "CANCELLED":
      return "bg-danger";
    case "OUT_FOR_DELIVERY":
      return "bg-warning text-dark";
    case "PLACED":
      return "bg-primary";
    default:
      return "bg-secondary";
  }
};

/**
 * Formats ISO date string to readable format
 */
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleString();
};

export default OrdersPage;
