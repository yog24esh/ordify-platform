import { useNavigate } from "react-router-dom";

/**
 * ProfilePage
 *
 * Temporary customer profile page.
 * Uses localStorage for user data until AuthContext is implemented.
 */
const ProfilePage = () => {
  const navigate = useNavigate();

  // Temporary user source (replace later with AuthContext)
  const storedUser = localStorage.getItem("ordify_user");
  const user = storedUser
    ? JSON.parse(storedUser)
    : {
        name: "Guest User",
        email: "guest@ordify.com",
        phone: "—",
        role: "CUSTOMER",
      };

  const handleLogout = () => {
    localStorage.removeItem("ordify_user");
    localStorage.removeItem("ordify_session");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
      </header>

      {/* Profile Card */}
      <main className="px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-semibold">
              {user.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          {/* Account Info */}
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="text-gray-500">Role</span>
              <span>{user.role}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Phone</span>
              <span>{user.phone}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <button
              onClick={() => navigate("/orders")}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition"
            >
              My Orders
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
