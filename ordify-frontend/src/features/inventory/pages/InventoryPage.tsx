import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchInventoryByStore } from "../api/inventory.api";
import { fetchProducts } from "../../Product/api/product.api";
import type { Inventory } from "../types/inventory";
import type { Product } from "../../Product/types/product";
import InventoryCard from "../components/InventoryCard";
import InventoryHeader from "../components/InventoryHeader";
import AddInventoryModal from "../components/AddInventoryModal";

export default function InventoryPage() {
  const { storeId } = useParams<{ storeId: string }>();

  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!storeId) return;

    setLoading(true);
    Promise.all([
      fetchInventoryByStore(Number(storeId)),
      fetchProducts(),
    ])
      .then(([inventoryRes, productRes]) => {
        setInventory(inventoryRes.data);
        setProducts(productRes.data);
      })
      .finally(() => setLoading(false));
  }, [storeId]);

  /** productId -> product lookup */
  const productMap = useMemo(() => {
    return products.reduce<Record<number, Product>>((acc, p) => {
      acc[p.productId] = p;
      return acc;
    }, {});
  }, [products]);

  if (loading) {
    return <p className="mt-4">Loading inventory...</p>;
  }

  return (
    <div className="container mt-4">
      <InventoryHeader
        storeName={`Dark Store #${storeId}`}
        onAdd={() => setShowModal(true)}
      />

      {inventory.length === 0 ? (
        <div className="text-center text-muted mt-5">
          <p>No inventory added yet</p>
          <p>Add products to start selling 🚀</p>
        </div>
      ) : (
        <div className="row g-3">
          {inventory.map((item) => {
            const product = productMap[item.productId];

            if (!product) return null; // safety guard

            return (
              <div key={item.inventoryId} className="col-md-3">
                <InventoryCard
                  item={item}
                  product={product}
                />
              </div>
            );
          })}
        </div>
      )}

      <AddInventoryModal
        storeId={Number(storeId)}
        show={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => {
          fetchInventoryByStore(Number(storeId)).then((res) =>
            setInventory(res.data)
          );
        }}
      />
    </div>
  );
}
