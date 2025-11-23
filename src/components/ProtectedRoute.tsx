import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const sessionToken = localStorage.getItem("turnstile_session");

  // If no session token → redirect to verification
  if (!sessionToken) {
    const redirectTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/verify?redirect=${redirectTo}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
