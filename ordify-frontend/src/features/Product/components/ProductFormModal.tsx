import { useEffect, useState } from "react";
import type { Product } from "../types/product";

type Props = {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: Product | null;
};

export default function ProductFormModal({
  show,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        description: initialData.description,
        category: initialData.category,
        price: initialData.price,
      });
    }
  }, [initialData]);

  if (!show) return null;

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialData ? "Update Product" : "Add Product"}
            </h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            {["name", "description", "category", "price"].map((field) => (
              <div className="mb-2" key={field}>
                <input
                  className="form-control"
                  placeholder={field}
                  type={field === "price" ? "number" : "text"}
                  value={(form as any)[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-success" onClick={() => onSubmit(form)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
