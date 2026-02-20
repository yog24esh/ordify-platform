import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CustomerNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear all auth/session related info
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("SESSION_ID");

    // Optional: clear cart
    localStorage.removeItem("CUSTOMER_CART");

    // Redirect to dashboard (RoleBasedRedirect will send to login)
    navigate("/dashboard", { replace: true });
  };

  const isActive = (path: string) =>
    location.pathname === path ? "active fw-semibold" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold" to="/dashboard/customer">
        Ordify
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#customerNavbar"
        aria-controls="customerNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="customerNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard/customer")}`}
              to="/dashboard/customer"
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/darkstores")}`}
              to="/darkstores"
            >
              Stores
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/orders/create")}`}
              to="/orders/create"
            >
              Create Order
            </Link>
          </li>
        </ul>

        <button className="btn btn-outline-warning" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
