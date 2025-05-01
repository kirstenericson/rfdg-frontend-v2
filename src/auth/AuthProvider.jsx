import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("https://rfdgc.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Fetch user profile using the token
        const profileResponse = await fetch("https://rfdgc.onrender.com/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (profileResponse.ok) {
          const userInfo = await profileResponse.json();
          setToken(data.token);
          console.log(data.token);
          setUser({
            id: userInfo.id,
            username: userInfo.username,
            name: userInfo.name,
            admin: userInfo.admin,
            division: userInfo.division,
          });
          navigate("/events"); // Redirect to events after login
        } else {
          setError("Failed to fetch user profile.");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (division, email, firstName, lastName, password, passwordRetype, username) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("https://rfdgc.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ division, email, firstName, lastName, password, passwordRetype, username }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/login"); // Redirect to login after signup
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }


  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken"); // Clear the token from localStorage
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, register, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);