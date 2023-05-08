import { useContext, useState, createContext, useEffect } from "react";
import { parseJWTToken } from "../helpers/Helpers";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };

  /**
   *
   * @param {} token An object containing the the decoded payload part of the JWT token and the JWT token.
   */
  const userLogin = (token) => {
    setToken(JSON.parse(token));
    // console.log(token);
    localStorage.setItem("token", token);
  };

  const userLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  /**
   *
   * @returns true if user is authenticated or false if the user is not authenticated
   */
  const isUserAuthenticated = () => {
    let storedToken = localStorage.getItem("token");
    if (!storedToken) return false;

    /**
     * Check the time validity of the token
     */
    storedToken = JSON.parse(storedToken);
    if (Date.now() > storedToken.payload.exp * 1000) {
      userLogout();
      return false;
    }

    return true;
  };

  return (
    <AuthContext.Provider
      value={{ token, getToken, userLogin, userLogout, isUserAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of its provider");
  return context;
};
