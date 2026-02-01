import { useEffect, useState } from "react";
import http from "../../../services/http";

export default function SuperAdminDashboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    http.get("/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>Super Admin Dashboard</h1>

      <h3>All Users</h3>
      <ul>
        {users.map((u) => (
          <li key={u.userId}>
            {u.name} - {u.role?.roleName}
          </li>
        ))}
      </ul>
    </div>
  );
}
