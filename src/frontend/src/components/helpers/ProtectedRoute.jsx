import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isUserAuthenticated } = useAuth();

  return isUserAuthenticated() ? children : <Navigate to="/home" />;
};
