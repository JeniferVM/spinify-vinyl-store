"use client";

import React, { createContext, useContext } from "react";
import { sessionInterface } from "../interface/sessionInterface";
import { useEffect, useState } from "react";
import { PATHROUTES } from "../helpers/navItems";
import { useRouter } from "next/navigation";

interface AuthProps {
  dataUser: sessionInterface | null;
  setDataUser: (dataUser: sessionInterface | null) => void;
  refreshUser: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProps>({
  dataUser: null,
  setDataUser: () => {},
  refreshUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

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
    router.push(PATHROUTES.HOME);
  };

  const refreshUser = async () => {
    if (!dataUser?.token) return;

    try {
      const res = await fetch("http://localhost:3000/users/profile", {
        headers: {
          Authorization: dataUser.token,
        },
      });

      if (res.ok) {
        const userData = await res.json();
        setDataUser({
          ...dataUser,
          user: userData,
        });
      }
    } catch (error) {
      console.error("Error refrescando usuario:", error);
    }
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ dataUser, setDataUser, logout, refreshUser }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
