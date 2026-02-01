import type { OrderStatus } from "../types/order.types";

interface Props {
  status: OrderStatus;
  onChangeStatus: (status: OrderStatus) => void;
  onCancel: () => void;
}

const transitions: Record<OrderStatus, OrderStatus[]> = {
  CREATED: ["ACCEPTED"],
  ACCEPTED: ["PACKED"],
  PACKED: ["OUT_FOR_DELIVERY"],
  OUT_FOR_DELIVERY: ["DELIVERED"],
  DELIVERED: [],
  CANCELLED: [],
};

const OrderStatusActions = ({ status, onChangeStatus, onCancel }: Props) => {
  return (
    <div>
      {transitions[status].map(s => (
        <button key={s} onClick={() => onChangeStatus(s)}>
          Mark as {s}
        </button>
      ))}

      {(status === "CREATED" || status === "ACCEPTED") && (
        <button onClick={onCancel}>Cancel Order</button>
      )}
    </div>
  );
};

export default OrderStatusActions;
