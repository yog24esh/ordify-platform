import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: string[];
}) {
  const sessionId = localStorage.getItem("SESSION_ID");
  const role = localStorage.getItem("role");

  if (!sessionId) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(role ?? "")) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
