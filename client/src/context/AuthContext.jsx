import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const baseUrl =
  import.meta.env.VITE_BASE_URL_DEV || import.meta.env.VITE_BASE_URL_PROD;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (loginId, password) => {
    try {
      // Make a POST request to your login API endpoint with loginId and password
      const response = await axios.post(`${baseUrl}/api/user/login`, {
        loginId: loginId,
        password: password,
      });

      // If login is successful, set isAuthenticated to true
      if (response.status === 200) {
        localStorage.setItem("token",response.data.token)
        setIsAuthenticated(true);
        return response;
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      // Clear the authentication token from local storage
      localStorage.removeItem("token");
  
      const response = await axios.post(
        `${baseUrl}/api/user/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        setIsAuthenticated(false);
      }
  
      return response;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };
  
  
  const register = async (loginId, password) => {
    try {
      const response = await axios.post(`${baseUrl}/api/user/register`, {
        loginId: loginId,
        password: password,
      });

      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error("Creating user failed", error);
    }
  };
  const getUsers = async () => {
    try {
      const resonse = await axios.get(`${baseUrl}/api/user/get-users`);
      return resonse;
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, register, getUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
