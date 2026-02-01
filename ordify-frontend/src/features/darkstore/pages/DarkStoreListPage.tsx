import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDarkStores } from "../api/darkstore.api";
import type { DarkStore } from "../types/darkstore";
import DarkStoreTable from "../components/DarkStoreTable";

export default function DarkStoreListPage() {
  const [stores, setStores] = useState<DarkStore[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDarkStores()
      .then((res) => setStores(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading dark stores...</p>;

  return (
    <div className="container mt-4">
      <h3>Dark Stores</h3>

      <DarkStoreTable
        stores={stores}
        onEdit={(id) => navigate(`/darkstores/${id}/edit`)}
        onInventory={(id) => navigate(`/darkstores/${id}/inventory`)}
      />
    </div>
  );
}
