import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * CartPage
 *
 * Displays items added to cart.
 * Uses localStorage until backend/cart context is implemented.
 */
const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("ordify_cart");
    setCartItems(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    const updated = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );

    setCartItems(updated);
    localStorage.setItem("ordify_cart", JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("ordify_cart", JSON.stringify(updated));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <button
          onClick={() => navigate("/stores")}
          className="text-green-600 font-medium"
        >
          Start shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      <h1 className="text-xl font-semibold mb-4">My Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm ml-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>

        <button
          onClick={() => navigate("/orders/create")}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
