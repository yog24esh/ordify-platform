import { useEffect, useState } from "react";

type Props = {
  show: boolean;
  products: any[];
  onClose: () => void;
  onSubmit: (productId: number, quantity: number) => Promise<void>;
  initialData?: {
    productId: number;
    quantity: number;
  };
};

export default function AddInventoryModal({
  show,
  products,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const [productId, setProductId] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (initialData) {
      setProductId(initialData.productId);
      setQuantity(initialData.quantity);
    } else {
      setProductId("");
      setQuantity(0);
    }
  }, [initialData, show]);

  if (!show) return null;

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Manage Inventory</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Product</label>
              <select className="form-select" value={productId} disabled>
                {products.map((p) =>
                  p.id === productId ? (
                    <option key={p.id} value={p.id}>
                      {p.name ?? `Product #${p.id}`}
                    </option>
                  ) : null
                )}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                min={0}
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
              onClick={() => onSubmit(productId as number, quantity)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
