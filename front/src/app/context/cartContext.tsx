"use client";

import { createContext, useContext, useEffect, useState } from "react";
import productInterface from "../interface/productInterface";
import { useAuth } from "./authContext";

interface CartProps {
  cartItems: productInterface[];
  getItemsId: () => number[];
  addCart: (product: productInterface) => void;
  removeCart: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartProps>({
  cartItems: [],
  getItemsId: () => [],
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getItemCount: () => 0,
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth();
  const [cartItems, setCartItems] = useState<productInterface[]>([]);

  console.log("🛒 CartProvider - cartItems:", cartItems.length);

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

  useEffect(() => {
    if (!dataUser && cartItems.length > 0) {
      console.log("🧹 Usuario deslogueado, limpiando cart");
      clearCart();
    }
  }, [dataUser, cartItems.length]);

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

  const getItemsId = (): number[] => {
    return cartItems.map((item) => item.id);
  };

  const addCart = (product: productInterface) => {
    if (!dataUser) {
      console.warn("⚠️ Usuario no logueado, no se puede agregar al cart");
      return;
    }

    const productExist = cartItems?.some((item) => item.id === product.id);
    if (productExist) {
      return;
    }

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
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = (): number => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemsId,
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
