import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { token, user } = useAuth();
  const storedToken = localStorage.getItem("authToken");
  const storedUser = (() => {
    try {
      const rawUser = localStorage.getItem("authUser");
      return rawUser ? JSON.parse(rawUser) : null;
    } catch (_error) {
      return null;
    }
  })();
  const activeToken = token || storedToken;
  const isAdmin = Boolean(user?.admin || storedUser?.admin);

  if (token) {
    localStorage.setItem("authToken", token);
  }

  if (!activeToken && !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;