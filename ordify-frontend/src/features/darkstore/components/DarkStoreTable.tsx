import type { DarkStore } from "../types/darkstore";

type Props = {
  stores: DarkStore[];
  onEdit: (storeId: number) => void;
  onInventory: (storeId: number) => void;
};

export default function DarkStoreTable({
  stores,
  onEdit,
  onInventory,
}: Props) {
  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Radius (km)</th>
          <th>Status</th>
          <th style={{ width: "200px" }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {stores.map((store) => (
          <tr key={store.storeId}>
            <td>{store.storeName}</td>
            <td>{store.deliveryRadiusKm}</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
            <td>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => onEdit(store.storeId)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => onInventory(store.storeId)}
              >
                View Inventory
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
