import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  if (!allowedRoles.includes(role!)) {
    return <Navigate to="/login" />;
  }

  return children;
}

// import { Navigate } from "react-router-dom";

// /**
//  * ProtectedRoute
//  *
//  * Checks if user has a valid session before allowing access to protected routes.
//  * Redirects to /login if no session is found.
//  */
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const sessionId = localStorage.getItem("SESSION_ID");

//   if (!sessionId) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;
