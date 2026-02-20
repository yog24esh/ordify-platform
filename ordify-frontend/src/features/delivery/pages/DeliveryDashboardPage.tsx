import { useNavigate } from "react-router-dom";
import { deliveryApi } from "../api/deliveryApi";

export default function DeliveryDashboardPage() {
  const navigate = useNavigate();
  const deliveryPartnerId = 1; // demo partner

  const goOnline = async () => {
    try {
      await deliveryApi.goOnline(deliveryPartnerId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.warn("Backend not reachable, continuing demo");
    }

    // Always navigate for demo stability
    navigate("/delivery/nearby-orders");
  };

  return (
    <div className="page">
      <h2>Delivery Dashboard</h2>

      <div className="card">
        <p>Delivery Partner ID: <strong>{deliveryPartnerId}</strong></p>

        <button className="btn btn-primary" onClick={goOnline}>
          Go Online
        </button>
      </div>
    </div>
  );
}
