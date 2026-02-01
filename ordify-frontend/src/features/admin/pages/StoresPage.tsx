import { useEffect, useState } from "react";
import {
  getAllStores,
  enableStore,
  disableStore,
  assignStoreAdmin,
} from "../api/adminApi";

/**
 * StoresPage
 *
 * Admin page to manage dark stores.
 */
interface Store {
  storeId: number;
  storeName: string;
  latitude: number;
  longitude: number;
  deliveryRadiusKm: number;
  isActive: boolean;
  createdAt: string;
}

const StoresPage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
  const [adminUserId, setAdminUserId] = useState<number | "">("");

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const response = await getAllStores();
      setStores(response.data);
    } catch {
      setError("Failed to load stores");
    } finally {
      setLoading(false);
    }
  };

  const toggleStoreStatus = async (store: Store) => {
    try {
      if (store.isActive) {
        await disableStore(store.storeId);
      } else {
        await enableStore(store.storeId);
      }
      fetchStores();
    } catch {
      alert("Failed to update store status");
    }
  };

  const openAssignAdminModal = (storeId: number) => {
    setSelectedStoreId(storeId);
    setAdminUserId("");
  };

  const handleAssignAdmin = async () => {
    if (!selectedStoreId || !adminUserId) {
      alert("Please enter admin user ID");
      return;
    }

    try {
      await assignStoreAdmin(selectedStoreId, Number(adminUserId));
      alert("Store admin assigned successfully");
      setSelectedStoreId(null);
    } catch {
      alert("Failed to assign store admin");
    }
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dark Stores</h2>

      {stores.length === 0 ? (
        <div className="alert alert-info">No stores found</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Radius (km)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store.storeId}>
                  <td>{store.storeId}</td>
                  <td>{store.storeName}</td>
                  <td>
                    {store.latitude}, {store.longitude}
                  </td>
                  <td>{store.deliveryRadiusKm}</td>
                  <td>
                    <span
                      className={`badge ${
                        store.isActive ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {store.isActive ? "ACTIVE" : "DISABLED"}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm me-2 ${
                        store.isActive ? "btn-danger" : "btn-success"
                      }`}
                      onClick={() => toggleStoreStatus(store)}
                    >
                      {store.isActive ? "Disable" : "Enable"}
                    </button>

                    <button
                      className="btn btn-sm btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#assignAdminModal"
                      onClick={() => openAssignAdminModal(store.storeId)}
                    >
                      Assign Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Assign Admin Modal */}
      <div
        className="modal fade"
        id="assignAdminModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Store Admin</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Admin User ID</label>
                <input
                  type="number"
                  className="form-control"
                  value={adminUserId}
                  onChange={(e) => setAdminUserId(e.target.valueAsNumber)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleAssignAdmin}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
