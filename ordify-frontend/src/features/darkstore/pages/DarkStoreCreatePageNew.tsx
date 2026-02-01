import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDarkStore } from "../api/darkstore.api";

export default function DarkStoreCreatePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    storeName: "",
    latitude: 0,
    longitude: 0,
    deliveryRadiusKm: 0,
  });

  const submit = async () => {
    await createDarkStore(form);
    navigate("/darkstores");
  };

  return (
    <div className="container mt-4">
      <h3>Create Dark Store</h3>

      <input
        className="form-control mb-2"
        placeholder="Store Name"
        onChange={(e) =>
          setForm({ ...form, storeName: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        type="number"
        placeholder="Latitude"
        onChange={(e) =>
          setForm({ ...form, latitude: Number(e.target.value) })
        }
      />

      <input
        className="form-control mb-2"
        type="number"
        placeholder="Longitude"
        onChange={(e) =>
          setForm({ ...form, longitude: Number(e.target.value) })
        }
      />

      <input
        className="form-control mb-3"
        type="number"
        placeholder="Delivery Radius (km)"
        onChange={(e) =>
          setForm({
            ...form,
            deliveryRadiusKm: Number(e.target.value),
          })
        }
      />

      <button className="btn btn-primary" onClick={submit}>
        Create
      </button>
    </div>
  );
}
