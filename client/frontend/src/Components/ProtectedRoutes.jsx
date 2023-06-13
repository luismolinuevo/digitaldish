import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function PrivateRouteRequiresAuth({ children }) {
  const [isAuthed, setIsAuthed] = useState(null);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/auth/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { success } = response.data;
        setIsAuthed(success);
      } catch (error) {
        console.log(error);
        setIsAuthed(false);
      }
    }
    checkLoginStatus();
  }, []);

  if (isAuthed === null) {
    return null; // Render nothing while authentication status is being checked
  }

  return isAuthed ? children : <Navigate to="/login" />;
}

export default PrivateRouteRequiresAuth;
