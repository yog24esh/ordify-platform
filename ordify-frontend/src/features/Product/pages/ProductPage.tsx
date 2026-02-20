import { useEffect, useState } from "react";
import "../product.css";

import {
  fetchProducts,
  createProduct,
  updateProduct,
  disableProduct,
} from "../api/product.api";

import type { Product } from "../types/product";
import ProductTable from "../components/ProductTable";
import ProductFormModal from "../components/ProductFormModal";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const loadProducts = () => {
    fetchProducts().then((res) => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (data: any) => {
    if (editingProduct) {
      await updateProduct(editingProduct.productId, data);
    } else {
      await createProduct(data);
    }
    setShowModal(false);
    setEditingProduct(null);
    loadProducts();
  };

  return (
  <div className="container mt-4 product-page">
    <h3>Products</h3>

    <button
      className="btn btn-success mb-3"
      onClick={() => setShowModal(true)}
    >
      + Add Product
    </button>

    <ProductTable
      products={products}
      onEdit={(p) => {
        setEditingProduct(p);
        setShowModal(true);
      }}
      onDisable={async (id) => {
        await disableProduct(id);
        loadProducts();
      }}
    />

    <ProductFormModal
      show={showModal}
      onClose={() => {
        setShowModal(false);
        setEditingProduct(null);
      }}
      onSubmit={handleSubmit}
      initialData={editingProduct}
    />
    </div>
  );
}
