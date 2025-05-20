import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const { isAuthenticated } = useSelector(selectLoginData);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // console.log(hasLoggedIn);

  return <>{children}</>;
};

export default ProtectedRoute;
