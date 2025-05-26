import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated) {
    // Redirect to Dashboard if user is  login
    return <Navigate to="/dashboard" replace />;
  }
  // Redirect to Login if user is not login.
  return <>{children}</>;
};

export default PublicRoute;
