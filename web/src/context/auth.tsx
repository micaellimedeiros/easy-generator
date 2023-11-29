import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = (newToken: string) => {
    localStorage.setItem("@EasyGenerator:is_logged", "true");

    setToken(newToken);
    setIsLoggedIn(true);

    navigate("/");
  };

  const logout = async () => {
    const headers = { Authorization: `${token}` };

    try {
      await api.post("/auth/logout", {}, { headers });

      localStorage.removeItem("@EasyGenerator:is_logged");
      localStorage.removeItem("@EasyGenerator:token");

      setIsLoggedIn(false);

      navigate("/login");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("@EasyGenerator:is_logged");

    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }

    const storedToken = localStorage.getItem("@EasyGenerator:token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("@EasyGenerator:token", token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
