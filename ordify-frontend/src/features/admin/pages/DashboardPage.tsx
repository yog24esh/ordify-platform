import { useEffect, useState } from "react";
import { getDashboard } from "../api/adminApi";

/**
 * DashboardPage
 *
 * Displays system-wide statistics for Super Admin.
 */
interface DashboardStats {
  totalUsers: number;
  totalStores: number;
  activeStores: number;
  totalOrders: number;
  totalRevenue: number;
  activeDeliveryPartners: number;
}

const DashboardPage = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboard();
      setStats(response.data);
    } catch (err) {
      setError("Failed to load dashboard stats "+ (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row g-4">
        <StatCard title="Total Users" value={stats.totalUsers} color="primary" />
        <StatCard title="Total Stores" value={stats.totalStores} color="success" />
        <StatCard title="Active Stores" value={stats.activeStores} color="info" />
        <StatCard title="Total Orders" value={stats.totalOrders} color="warning" />
        <StatCard title="Total Revenue" value={`₹${stats.totalRevenue}`} color="dark" />
        <StatCard
          title="Active Delivery Partners"
          value={stats.activeDeliveryPartners}
          color="secondary"
        />
      </div>
    </div>
  );
};

/**
 * Reusable Bootstrap stat card
 */
interface StatCardProps {
  title: string;
  value: number | string;
  color: string;
}

const StatCard = ({ title, value, color }: StatCardProps) => {
  return (
    <div className="col-md-4">
      <div className={`card border-${color} shadow-sm`}>
        <div className={`card-body text-${color}`}>
          <h6 className="card-title text-muted">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
