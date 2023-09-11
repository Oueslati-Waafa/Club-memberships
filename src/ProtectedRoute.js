import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("admin")) || null;
    async function getUser() {
      try {
        const response = await axios.get(
          `https://hanfpioniere.onrender.com/admin/getAdmin/${savedUser?.username}`
        );
        const user = response.data;
        setIsAuthenticated(user !== []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (savedUser) {
      getUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}
