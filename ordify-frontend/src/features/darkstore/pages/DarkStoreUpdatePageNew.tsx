import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchDarkStoreById,
  updateDarkStore,
} from "../api/darkstore.api";

export default function DarkStoreUpdatePage() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    storeName: "",
    latitude: 0,
    longitude: 0,
    deliveryRadiusKm: 0,
  });

  // ---------------- LOAD STORE ----------------
  useEffect(() => {
    if (!storeId) return;

    fetchDarkStoreById(Number(storeId))
      .then((res) => {
        const store = res.data;
        setForm({
          storeName: store.storeName,
          latitude: store.latitude,
          longitude: store.longitude,
          deliveryRadiusKm: store.deliveryRadiusKm,
        });
      })
      .catch(() => {
        setError("Failed to load dark store");
      })
      .finally(() => setLoading(false));
  }, [storeId]);

  // ---------------- SUBMIT ----------------
  const submit = async () => {
    if (!storeId) return;

    try {
      await updateDarkStore(Number(storeId), form);
      navigate("/darkstores");
    } catch {
      setError("Failed to update dark store");
    }
  };

  if (loading) return <p>Loading store...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h3>Edit Dark Store</h3>

      <div className="mb-2">
        <label className="form-label">Store Name</label>
        <input
          className="form-control"
          value={form.storeName}
          onChange={(e) =>
            setForm({ ...form, storeName: e.target.value })
          }
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Latitude</label>
        <input
          type="number"
          className="form-control"
          value={form.latitude}
          onChange={(e) =>
            setForm({ ...form, latitude: Number(e.target.value) })
          }
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Longitude</label>
        <input
          type="number"
          className="form-control"
          value={form.longitude}
          onChange={(e) =>
            setForm({ ...form, longitude: Number(e.target.value) })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Delivery Radius (km)</label>
        <input
          type="number"
          className="form-control"
          value={form.deliveryRadiusKm}
          onChange={(e) =>
            setForm({
              ...form,
              deliveryRadiusKm: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={submit}>
          Update
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/darkstores")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
