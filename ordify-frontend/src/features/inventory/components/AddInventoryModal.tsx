import { useEffect, useState } from "react";
import type { Product } from "../../Product/types/product";
import { fetchProducts } from "../../Product/api/product.api";
import { addInventory } from "../api/inventory.api";

type Props = {
  storeId: number;
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddInventoryModal({
  storeId,
  show,
  onClose,
  onSuccess,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (show) {
      fetchProducts().then((res) => setProducts(res.data));
    }
  }, [show]);

  if (!show) return null;

  const handleSubmit = async () => {
    if (!productId || quantity <= 0) return;

    setLoading(true);
    try {
      await addInventory({
        storeId,
        productId: Number(productId),
        quantity,
      });
      onSuccess();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block" style={{ background: "#00000080" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Inventory</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Product</label>
              <select
                className="form-select"
                value={productId}
                onChange={(e) => setProductId(Number(e.target.value))}
              >
                <option value="">Select product</option>
                {products.map((p) => (
                  <option key={p.productId} value={p.productId}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Inventory"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
