"use client";

import { createContext, useContext, useEffect, useState } from "react";
import productInterface from "../interface/productInterface";
import { useAuth } from "./authContext";

interface CartProps {
  cartItems: productInterface[];
  getItemId: () => number[];
  addCart: (product: productInterface) => void;
  removeCart: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number; // ✅ Correcto
  getItemCount: () => number; // ✅ Corregido de void a number
}

const CartContext = createContext<CartProps>({
  cartItems: [],
  getItemId: () => [],
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  getTotal: () => 0, // ✅ Valor por defecto consistente
  getItemCount: () => 0, // ✅ Valor por defecto consistente
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth();
  const [cartItems, setCartItems] = useState<productInterface[]>([]);

  console.log("🛒 CartProvider - cartItems:", cartItems.length);

  // Escuchar evento de logout
  useEffect(() => {
    const handleLogout = () => {
      console.log("🛒 CartProvider escuchó logout, limpiando cart");
      setCartItems([]);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("userLogout", handleLogout);
      return () => window.removeEventListener("userLogout", handleLogout);
    }
  }, []);

  // Limpiar cart cuando el usuario se desloguee
  useEffect(() => {
    if (!dataUser && cartItems.length > 0) {
      console.log("🧹 Usuario deslogueado, limpiando cart");
      clearCart();
    }
  }, [dataUser]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    }
  }, []);

  const getItemId = (): number[] => {
    return cartItems.map((item) => item.id);
  };

  const addCart = (product: productInterface) => {
    if (!dataUser) {
      console.warn("⚠️ Usuario no logueado, no se puede agregar al cart");
      return;
    }

    const productExist = cartItems?.some((item) => item.id === product.id);
    if (productExist) {
      console.warn("⚠️ Producto ya existe en el cart");
      return;
    }

    console.log("✅ Agregando producto al cart:", product.name);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeCart = (productId: number) => {
    console.log("🗑️ Removiendo producto del cart:", productId);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    console.log("🧹 Limpiando cart completo");
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("cart");
    }
  };

  const getTotal = (): number => {
    // ✅ Tipo explícito
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = (): number => {
    // ✅ Tipo explícito corregido
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemId,
        addCart,
        removeCart,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
