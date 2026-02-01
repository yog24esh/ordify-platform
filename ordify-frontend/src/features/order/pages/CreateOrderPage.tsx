import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/orderApi";
import OrderForm from "../components/OrderForm";

const CreateOrderPage = () => {
  const navigate = useNavigate();

  return (
    <OrderForm
      onSubmit={async order => {
        const created = await createOrder(order);
        navigate(`/orders/${created.orderId}`);
      }}
    />
  );
};

export default CreateOrderPage;
