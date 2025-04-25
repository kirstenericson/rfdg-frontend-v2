import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  let { token } = useAuth();
  if (!token) {
    token = localStorage.getItem("authToken");
  } else {
    localStorage.setItem("authToken", token);
  }
  console.log(token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;