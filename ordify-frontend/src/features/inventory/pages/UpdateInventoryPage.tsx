import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateInventoryPage() {
  const { inventoryId, storeId } = useParams<{
    inventoryId: string;
    storeId: string;
  }>();

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventory/${inventoryId}`)
      .then((res) => setQuantity(res.data.quantity));
  }, [inventoryId]);

  const handleUpdate = async () => {
    const isAvailable = quantity > 0;

    await axios.put(
      `http://localhost:8080/api/inventory/${inventoryId}`,
      {
        quantity,
        isAvailable,
      }
    );

    navigate(`/darkstores/${storeId}/inventory`);
  };

  return (
    <div className="inventory-bg">
      <h2 className="inventory-page-title">Update Inventory</h2>

      <div className="inventory-card">
        <div className="inventory-form">
          
          <div className="form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              value={quantity}
              min={0}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="form-group inventory-availability">
            <label className="form-label">Availability</label>
            <span className={`availability-badge ${quantity > 0 ? "yes" : "no"}`}>
              {quantity > 0 ? "Yes" : "No"}
            </span>
          </div>

          <button
            className="btn btn-primary inventory-submit"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
