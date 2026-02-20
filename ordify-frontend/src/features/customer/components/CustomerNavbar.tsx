import { Link, useNavigate } from "react-router-dom";

export default function CustomerNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all auth/session stuff
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("SESSION_ID");

    // optional: clear cart too
    localStorage.removeItem("CUSTOMER_CART");

    // As requested: send to dashboard (RoleBasedRedirect will send to login)
    navigate("/dashboard", { replace: true });
  };

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
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="customerNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/customer">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/darkstores">
              Stores
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/orders/create">
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
