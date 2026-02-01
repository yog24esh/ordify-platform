import { Outlet } from "react-router-dom";
import Header from "../../features/admin/components/Layout/Header";
import Footer from "../../features/admin/components/Layout/footer";

/**
 * AdminLayout
 *
 * Base layout for all Admin module pages.
 * Contains Header, Footer and main content area.
 */
const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AdminLayout;
