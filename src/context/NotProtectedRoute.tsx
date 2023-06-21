import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./auth-context";

interface NotProtectedRouteProps {
  children: ReactNode;
}

const NotProtectedRoute: React.FC<NotProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return <>{children}</>;
};

export default NotProtectedRoute;
