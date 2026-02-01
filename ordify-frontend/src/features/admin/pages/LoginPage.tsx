import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDemoSession } from "../../../services/session";

/**
 * LoginPage
 *
 * Simple login page for demo purposes.
 * Sets a demo session and redirects to admin dashboard.
 */
const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically set demo session and redirect
    setDemoSession();
    navigate("/admin/dashboard");
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h2>Logging in...</h2>
        <p>Redirecting to admin dashboard...</p>
      </div>
    </div>
  );
};

export default LoginPage;
