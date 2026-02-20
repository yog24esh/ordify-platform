import { Link } from "react-router-dom";
import CustomerNavbar from "./components/CustomerNavbar";

export default function CustomerDashboard() {
  return (
    <>
      <CustomerNavbar />

      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-2">Dashboard</h3>
            <p className="text-muted">
              Browse stores, check inventory, and place orders.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <Link to="/darkstores" className="btn btn-primary">
                Browse Stores
              </Link>

              <Link to="/orders/create" className="btn btn-success">
                Create Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
