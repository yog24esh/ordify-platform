import type { Inventory } from "../types/inventory";
import type { Product } from "../../Product/types/product";

type Props = {
  item: Inventory;
  product?: Product;
};

export default function InventoryCard({ item, product }: Props) {
  return (
    <div className="card shadow-sm h-100 border-0">
      <div className="card-body">
        <h6 className="fw-bold mb-1">
          {product?.name ?? "Unknown Product"}
        </h6>

        <small className="text-muted">
          {product?.category}
        </small>

        <hr />

        <p className="mb-1">
          Qty: <strong>{item.quantity}</strong>
        </p>

        <span
          className={`badge ${
            item.isAvailable ? "bg-success" : "bg-danger"
          }`}
        >
          {item.isAvailable ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}
