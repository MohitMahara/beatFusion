import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null,
    token: "",
  });

  axios.defaults.headers.common["Authorization"] = user?.token;

  useEffect(() => {
    const data = localStorage.getItem("beatFusion");

    if (data) {
      const parseData = JSON.parse(data);

      setUser({
        ...user,
        user: parseData.user,
        token: parseData.token,
      });
    }

    // eslint-disable-next-line
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
