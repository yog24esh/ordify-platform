import type { OrderItemRequest } from "../types/order.types";

interface Props {
  item: OrderItemRequest;
  onChange: (field: keyof OrderItemRequest, value: number) => void;
  onRemove?: () => void;
}

const OrderItemRow = ({ item, onChange, onRemove }: Props) => {
  return (
    <div className="item-row-wrapper">
      <div className="form-group">
        <label>Product ID</label>
        <input
          type="number"
          value={item.productId}
          onChange={e => onChange("productId", +e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          value={item.quantity}
          onChange={e => onChange("quantity", +e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          value={item.price ?? 0}
          onChange={e => onChange("price", +e.target.value)}
        />
      </div>

      {onRemove && (
        <button className="danger remove-btn" onClick={onRemove}>
          Remove
        </button>
      )}
    </div>
  );
};

export default OrderItemRow;
