import { useNavigate } from "react-router-dom";
import type { DarkStore } from "../types/darkstore";

type Props = {
  stores: DarkStore[];
};

export default function DarkStoreTable({ stores }: Props) {
  const navigate = useNavigate();

  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Radius (km)</th>
          <th>Status</th>
          <th style={{ width: 220 }}>Actions</th>
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
                onClick={() => navigate(`/darkstores/${store.storeId}/edit`)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() =>
                  navigate(`/darkstores/${store.storeId}/inventory`)
                }
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