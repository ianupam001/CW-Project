import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        toast.success("Login successful!", { position: "top-right" });
        return response;
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      toast.error("Please enter both username and password.", {
        position: "top-right",
      })
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

      const response = await axios.post(`${baseUrl}/api/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
        toast.success("User Created!", { position: "top-right" });
        return response;
      }
    } catch (error) {
      toast.error("Failed!", { position: "top-right" });

      console.error("Creating user failed", error);
    }
  };
  // end point to save details
  const details = async (formData) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/api/user/details`,
        formData
      );
      if (response.status === 201) {
        toast.success("Details saved successfully!", { position: "top-right" });
        return response;
      }
      else {
        console.error("Failed to save user details");
      }
    } catch (error) {
      toast.error("Error saving details!", { position: "top-right" });
      console.error("Error saving details");
    }
  };
  // get users
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
      value={{ isAuthenticated, login, logout, register, details, getUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
