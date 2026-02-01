type Props = {
  storeName: string;
  onAdd: () => void;
};

export default function InventoryHeader({ storeName, onAdd }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 className="mb-1">{storeName}</h4>
        <small className="text-muted">
          Manage inventory for this dark store
        </small>
      </div>

      <button className="btn btn-success" onClick={onAdd}>
        + Add Inventory
      </button>
    </div>
  );
}
