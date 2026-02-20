import type { Inventory } from "../types/inventory";
import { useNavigate } from "react-router-dom";

type Props = {
  items: Inventory[];
};

export default function InventoryTable({ items }: Props) {
  const navigate = useNavigate();

  return (
    <div className="inventory-table-wrapper">
      <table className="table inventory-table">
        <thead>
          <tr>
            <th>Inventory ID</th>
            <th>Store ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.inventoryId}>
              <td>{item.inventoryId}</td>
              <td>{item.storeId}</td>
              <td>{item.productId}</td>
              <td>{item.quantity}</td>
              <td>
                <span
                  className={`inventory-badge ${
                    item.isAvailable ? "active" : "inactive"
                  }`}
                >
                  {item.isAvailable ? "Yes" : "No"}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() =>
                    navigate(
                      `/darkstores/${item.storeId}/inventory/${item.inventoryId}/update`
                    )
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
