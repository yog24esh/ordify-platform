import { useState } from "react";
import type { OrderItemRequest, OrderRequest } from "../types/order.types";
import OrderItemRow from "./OrderItemRow";
import "../styles/order.css";

interface Props {
  onSubmit: (order: OrderRequest) => void;
}

/**
 * Mocked user delivery location.
 * TODO: Replace with real geolocation / address picker
 */
const MOCK_LOCATION = {
  latitude: 12.9716,   // Bangalore
  longitude: 77.5946,
};

const OrderForm = ({ onSubmit }: Props) => {
  const [userId, setUserId] = useState(1);
  const [storeId, setStoreId] = useState(1);

  const [items, setItems] = useState<OrderItemRequest[]>([
    { productId: 1, quantity: 1, price: 100 },
  ]);

  const updateItem = (
    index: number,
    field: keyof OrderItemRequest,
    value: number
  ) => {
    const copy = [...items];
    copy[index] = { ...copy[index], [field]: value };
    setItems(copy);
  };

  const addItem = () =>
    setItems([...items, { productId: 0, quantity: 1, price: 0 }]);

  const removeItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const total = items.reduce(
    (sum, i) => sum + i.quantity * (i.price ?? 0),
    0
  );

  const submit = () => {
    onSubmit({
      userId,
      storeId,
      deliveryLatitude: MOCK_LOCATION.latitude,
      deliveryLongitude: MOCK_LOCATION.longitude,
      items,
    });
  };

  return (
    <div className="order-feature">
      <div className="order-container">
        <h2>Create Order</h2>

        <div className="form-group">
          <label>User ID</label>
          <input
            type="number"
            value={userId}
            onChange={e => setUserId(+e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Store ID</label>
          <input
            type="number"
            value={storeId}
            onChange={e => setStoreId(+e.target.value)}
          />
        </div>

        {/* Delivery location is mocked for now */}
        <div className="order-summary">
          <strong>Delivery Location:</strong> Mocked (Bangalore)
        </div>

        <h3>Items</h3>
        {items.map((item, i) => (
          <OrderItemRow
            key={i}
            item={item}
            onChange={(field, value) => updateItem(i, field, value)}
            onRemove={() => removeItem(i)}
          />
        ))}

        <button className="secondary" onClick={addItem}>
          + Add Item
        </button>

        <div className="order-summary">
          <strong>Total: ₹{total}</strong>
        </div>

        <button className="primary" onClick={submit}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
