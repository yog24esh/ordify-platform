import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deliveryApi } from "../api/deliveryApi";
import type { NearbyOrderResponseDto } from "../types/delivery";
import NearbyOrdersMap from "../components/NearbyOrdersMap";

const DEMO_ORDER: NearbyOrderResponseDto = {
  orderId: 10,
  storeId: 3,
  storeLatitude: 18.541827,
  storeLongitude: 73.791512,
  deliveryLatitude: 18.541827,
  deliveryLongitude: 73.791512,
};

export default function NearbyOrdersPage() {
  const [orders, setOrders] = useState<NearbyOrderResponseDto[]>([]);
  const navigate = useNavigate();
  const deliveryPartnerId = 1;

  useEffect(() => {
    deliveryApi
      .getNearbyOrders(deliveryPartnerId)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setOrders(res.data);
        } else {
          setOrders([DEMO_ORDER]);
        }
      })
      .catch(() => {
        // backend down → demo fallback
        setOrders([DEMO_ORDER]);
      });
  }, []);

  const acceptOrder = async (orderId: number) => {
    try {
      await deliveryApi.acceptOrder({
        orderId,
        deliveryPartnerId,
      });
    } catch (e) {
      console.warn("Accept order failed, continuing demo");
    }

    navigate(`/delivery/active/${orderId}`);
  };

  return (
    <div className="page">
      <h2>Nearby Orders</h2>

      <div className="card">
        <NearbyOrdersMap orders={orders} />
      </div>

      {orders.map(order => (
        <div key={order.orderId} className="card">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Store ID:</strong> {order.storeId}</p>

          <button
            className="btn btn-success"
            onClick={() => acceptOrder(order.orderId)}
          >
            Accept Order
          </button>
        </div>
      ))}
    </div>
  );
}
