import { useEffect, useState } from "react";
import { fetchDarkStores } from "../api/darkstore.api";
import type { DarkStore } from "../types/darkstore";
import DarkStoreTable from "../components/DarkStoreTable";
import "../darkstore.css";

export default function DarkStoreListPage() {
  const [stores, setStores] = useState<DarkStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDarkStores()
      .then((res) => setStores(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="darkstore-bg">
        <div className="darkstore-card">
          <p>Loading dark stores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="darkstore-bg">
      <div className="darkstore-card">
        <h3 className="darkstore-title">Dark Stores</h3>
        <p className="darkstore-subtitle">
          Manage your dark stores and inventories
        </p>

        <DarkStoreTable stores={stores} />
      </div>
    </div>
  );
}
