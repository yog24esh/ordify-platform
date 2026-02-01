import { Link, useNavigate } from "react-router-dom";

/**
 * Admin Header
 *
 * Top navigation bar for Admin module.
 */
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("SESSION_ID");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/admin/dashboard">
        Ordify Admin
      </Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/stores">
              Stores
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/orders">
              Orders
            </Link>
          </li>
        </ul>

        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
