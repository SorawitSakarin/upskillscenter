import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // console.log("Check user in Private: ", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
