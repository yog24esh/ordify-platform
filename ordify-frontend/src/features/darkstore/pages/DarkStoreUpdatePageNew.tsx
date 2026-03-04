import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDarkStoreById, updateDarkStore } from "../api/darkstore.api";

export default function DarkStoreUpdatePage() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    storeName: "",
    latitude: 0,
    longitude: 0,
    deliveryRadiusKm: 0,
  });

  useEffect(() => {
    if (!storeId) return;

    fetchDarkStoreById(Number(storeId)).then((res) => {
      const s = res.data;
      setForm({
        storeName: s.storeName,
        latitude: s.latitude,
        longitude: s.longitude,
        deliveryRadiusKm: s.deliveryRadiusKm,
      });
    });
  }, [storeId]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateDarkStore(Number(storeId), form);
    navigate("/darkstores");
  };

  return (
    <div className="container mt-4">
      <h3>Edit Dark Store</h3>

      <form onSubmit={submit} className="mt-3" style={{ maxWidth: 500 }}>
        <div className="mb-3">
          <label className="form-label">Store Name</label>
          <input
            className="form-control"
            value={form.storeName}
            onChange={(e) =>
              setForm({ ...form, storeName: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
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

        <div className="mb-3">
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

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
