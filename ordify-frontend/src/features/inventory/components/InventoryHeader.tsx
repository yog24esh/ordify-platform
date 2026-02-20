type Props = {
  storeName: string;
};

export default function InventoryHeader({ storeName }: Props) {
  return (
    <div className="inventory-header">
      <h3 className="inventory-title">Inventory</h3>
      <p className="inventory-subtitle">{storeName}</p>
    </div>
  );
}
