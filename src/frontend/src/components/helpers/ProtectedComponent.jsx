import { useAuth } from "../AuthContext/AuthContext";

export const ProtectedComponent = ({ children }) => {
  const { isUserAuthenticated } = useAuth();

  if (isUserAuthenticated()) {
    return children;
  }
};
