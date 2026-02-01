import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActiveDeliveryMap from "../components/ActiveDeliveryMap";
import { deliveryApi } from "../api/deliveryApi";
import type { DeliveryStatus } from "../types/delivery";

/**
 * Demo route: Pune (Store → Customer)
 * Store coordinate is correct, rest are smooth path points
 */
const ROUTE: [number, number][] = [
  [18.559000, 73.786800], // 🏪 Store

  [18.557900, 73.789200],
  [18.556400, 73.791800],
  [18.554900, 73.794300],
  [18.553200, 73.797100],
  [18.551300, 73.800000],
  [18.549100, 73.803200],
  [18.547200, 73.806000],
  [18.545300, 73.808800],

  [18.543500, 73.811600], // 🏠 Customer
];

const STEP_DURATION_MS = 1200;
const DELIVERY_PARTNER_ID = 1;

export default function ActiveDeliveryPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const [status, setStatus] = useState<DeliveryStatus>("ASSIGNED");
  const [step, setStep] = useState(0);

  const [riderLocation, setRiderLocation] = useState({
    latitude: ROUTE[0][0],
    longitude: ROUTE[0][1],
  });

  const [etaSeconds, setEtaSeconds] = useState<number | null>(null);

  /**
   * 🚴 Animate rider + update backend location
   */
  useEffect(() => {
    if (status !== "ON_THE_WAY") return;

    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= ROUTE.length - 1) {
          clearInterval(interval);
          return prev;
        }

        const next = prev + 1;
        const latitude = ROUTE[next][0];
        const longitude = ROUTE[next][1];

        // 1️⃣ Update UI
        setRiderLocation({ latitude, longitude });

        // 2️⃣ Persist location in backend
        try {
          deliveryApi.updateLocation({
            deliveryPartnerId: DELIVERY_PARTNER_ID,
            latitude,
            longitude,
          });
        } catch {
          console.warn("Location update failed (demo mode)");
        }

        return next;
      });
    }, STEP_DURATION_MS);

    return () => clearInterval(interval);
  }, [status]);

  /**
   * ⏱️ ETA countdown
   */
  useEffect(() => {
    if (status !== "ON_THE_WAY" || etaSeconds === null) return;

    const timer = setInterval(() => {
      setEtaSeconds(prev => (prev && prev > 0 ? prev - 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, [status, etaSeconds]);

  /**
   * 📦 Status update handler
   */
  const updateStatus = async (newStatus: DeliveryStatus) => {
    setStatus(newStatus);

    if (newStatus === "ON_THE_WAY") {
      const remainingSteps = ROUTE.length - step - 1;
      setEtaSeconds(
        Math.max(Math.floor((remainingSteps * STEP_DURATION_MS) / 1000), 0)
      );
    }

    if (newStatus === "DELIVERED") {
      setEtaSeconds(0);
    }

    try {
      await deliveryApi.updateStatus(Number(orderId), newStatus);
    } catch {
      console.warn("Backend unavailable — demo continues");
    }
  };

  if (!orderId) return <p>No active order</p>;

  return (
    <div className="page">
      <h2>Active Delivery</h2>

      <div className="card">
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Status:</strong> {status.replaceAll("_", " ")}</p>

        {status === "ON_THE_WAY" && etaSeconds !== null && (
          <p>
            <strong>ETA:</strong>{" "}
            {Math.floor(etaSeconds / 60)}:
            {String(etaSeconds % 60).padStart(2, "0")}
          </p>
        )}
      </div>

      <div className="card">
        <ActiveDeliveryMap riderLocation={riderLocation} />
      </div>

      {/* ACTION BUTTONS */}
      <div className="card">
        {status !== "DELIVERED" && (
          <>
            <button
              className="btn btn-warning"
              onClick={() => updateStatus("PICKED_UP")}
              disabled={status !== "ASSIGNED"}
            >
              Picked Up
            </button>

            <button
              className="btn btn-primary"
              onClick={() => updateStatus("ON_THE_WAY")}
              disabled={status !== "PICKED_UP"}
            >
              Start Delivery
            </button>

            <button
              className="btn btn-success"
              onClick={() => updateStatus("DELIVERED")}
              disabled={status !== "ON_THE_WAY"}
            >
              Delivered
            </button>
          </>
        )}

        {status === "DELIVERED" && (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/delivery/dashboard")}
          >
            Go to Dashboard
          </button>
        )}
      </div>
    </div>
  );
}
