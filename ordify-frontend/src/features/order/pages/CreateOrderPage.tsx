import { useState } from "react";
import { createOrder } from "../api/orderApi";
import { useNavigate } from "react-router-dom";

const CreateOrderPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateOrder = async () => {
    try {
      setLoading(true);
      const res = await createOrder({
        productId: 1,
        quantity: 2,
      });

      navigate(`/orders/${res.data.id}`);
    } catch (error) {
      console.error("Failed to create order", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Order</h1>
      <button onClick={handleCreateOrder} disabled={loading}>
        {loading ? "Creating..." : "Create Order"}
      </button>
    </div>
  );
};

export default CreateOrderPage;
