import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../../../context/AuthContext";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
