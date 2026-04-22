import { AuthCardLayout, LoginForm } from "../features/auth/components";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
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
  const isAuthenticated = Boolean(token || storedToken);
  const isAdmin = Boolean(user?.admin || storedUser?.admin);

  if (isAdmin || isAuthenticated) {
    return <Navigate to="/events" replace />;
  }

  return (
    <AuthCardLayout title="Sign in">
      <LoginForm />
    </AuthCardLayout>
  );
}