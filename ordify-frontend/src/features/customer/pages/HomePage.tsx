import { useNavigate } from "react-router-dom";

/**
 * HomePage
 *
 * Customer landing page after login.
 * Allows user to start shopping by selecting nearby stores.
 */
const HomePage = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/stores");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <h1 className="text-2xl font-bold text-green-600">
          Ordify
        </h1>
        <p className="text-sm text-gray-500">
          Groceries delivered in minutes
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Get your daily essentials
        </h2>

        <p className="text-gray-600 mb-8 max-w-md">
          Order groceries, fruits, snacks and more from nearby dark stores
          and get them delivered at lightning speed.
        </p>

        <button
          onClick={handleStartShopping}
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
        >
          Start Shopping
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ordify. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
