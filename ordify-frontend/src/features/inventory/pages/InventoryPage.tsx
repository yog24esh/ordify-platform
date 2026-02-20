import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchInventoryByStore } from "../api/inventory.api";
import type { Inventory } from "../types/inventory";

import InventoryHeader from "../components/InventoryHeader";
import InventoryTable from "../components/InventoryTable";

import "../inventory.css";

export default function InventoryPage() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();
  const numericStoreId = Number(storeId);

  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!numericStoreId) return;

    setLoading(true);
    fetchInventoryByStore(numericStoreId)
      .then((res) => setInventory(res.data))
      .finally(() => setLoading(false));
  }, [numericStoreId]);

  return (
    <div className="inventory-bg">
      <div className="inventory-card">
        <InventoryHeader storeName={`Store #${storeId}`} />

        {loading ? (
          <div className="inventory-loading">Loading inventory...</div>
        ) : inventory.length === 0 ? (
          <div className="inventory-empty">
            No inventory found for this store
          </div>
        ) : (
          <InventoryTable items={inventory} />
        )}

        <div className="inventory-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
