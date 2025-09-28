"use client";

import React, { createContext, useContext } from "react";
import { sessionInterface } from "../interface/sessionInterface";
import { useEffect, useState } from "react";

interface AuthProps {
  dataUser: sessionInterface | null;
  setDataUser: (dataUser: sessionInterface | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<sessionInterface | null>(null);
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataUser = localStorage.getItem("userSession");
      if (dataUser) {
        setDataUser(JSON.parse(dataUser));
      }
    }
  }, []);

  const logout = () => {
    setDataUser(null);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("userSession");
      localStorage.removeItem("cartItems");
    }
  };

  return (
    <div>
      <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
