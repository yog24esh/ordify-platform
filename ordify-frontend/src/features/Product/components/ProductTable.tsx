import type { Product } from "../types/product";

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDisable: (productId: number) => void;
};

export default function ProductTable({
  products,
  onEdit,
  onDisable,
}: Props) {
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.productId}>
            <td>{p.productId}</td>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>₹{p.price}</td>
            <td>{p.isActive ? "Yes" : "No"}</td>
            <td>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => onEdit(p)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDisable(p.productId)}
              >
                Disable
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
