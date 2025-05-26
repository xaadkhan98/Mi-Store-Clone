import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // Redirect to Login if user is not login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to Dashboard if user is login.
  return <>{children}</>;
};

export default ProtectedRoute;
