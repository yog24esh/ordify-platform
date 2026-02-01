// src/api/userApi.ts
import http from "../../../services/http"; // <-- your axios instance with baseURL

// Get token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  console.log("get auth",token)
  return { Authorization: `Bearer ${token}` };
};


export const userApi = {
  // 1️⃣ Get all users
  getAll: () => http.get("/users", { headers: getAuthHeader() }),
  

  // 2️⃣ Get a single user by ID
  getById: (id: number | string) =>
    http.get(`/users/${id}`, { headers: getAuthHeader() }),

  // 3️⃣ Get users by role
  getByRole: (role: string) =>
    http.get(`/users/by-role`, {
      headers: getAuthHeader(),
      params: { role },
    }),

  // 4️⃣ Update user
  update: (id: number | string, data: any) =>
    http.put(`/users/${id}`, data, { headers: getAuthHeader() }),

  // 5️⃣ Delete user
  delete: (id: number | string) =>
    http.delete(`/users/${id}`, { headers: getAuthHeader() }),

  // 6️⃣ Activate / Deactivate user
  updateStatus: (id: number | string, active: boolean) =>
    http.patch(`/users/${id}/status`, null, {
      headers: getAuthHeader(),
      params: { active },
    }),

  // 7️⃣ Get current logged-in user info (useful for role after login)
  getMe: () => http.get("/users/me", { headers: getAuthHeader() }),
};
