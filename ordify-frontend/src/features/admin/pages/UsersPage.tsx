import { useEffect, useState } from "react";
import { disableUser, enableUser } from "../api/adminApi";
import axios from "axios";

/**
 * UsersPage
 *
 * Admin page to manage users.
 */
interface User {
  userId: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const sessionId = localStorage.getItem("SESSION_ID");
      const response = await axios.get("http://localhost:8080/admin/users", {
        headers: { "X-SESSION-ID": sessionId || "" },
      });
      setUsers(response.data);
    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const toggleUserStatus = async (user: User) => {
    try {
      if (user.isActive) {
        await disableUser(user.userId);
      } else {
        await enableUser(user.userId);
      }
      fetchUsers();
    } catch {
      alert("Failed to update user status");
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

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users</h2>

      {users.length === 0 ? (
        <div className="alert alert-info">No users found</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        user.isActive ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {user.isActive ? "ACTIVE" : "DISABLED"}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        user.isActive ? "btn-danger" : "btn-success"
                      }`}
                      onClick={() => toggleUserStatus(user)}
                      disabled={user.role === "SUPER_ADMIN"}
                    >
                      {user.isActive ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/**
 * Returns Bootstrap badge class for user role
 */
const getRoleBadge = (role: string) => {
  switch (role) {
    case "SUPER_ADMIN":
      return "bg-dark";
    case "STORE_ADMIN":
      return "bg-primary";
    case "DELIVERY_PARTNER":
      return "bg-warning text-dark";
    case "CUSTOMER":
      return "bg-info";
    default:
      return "bg-secondary";
  }
};

export default UsersPage;


// Add GET /admin/users in backend
