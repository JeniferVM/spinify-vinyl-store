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
  updateQuantity: (productId: number, newQuantity: number) => void;
}

const CartContext = createContext<CartProps>({
  cartItems: [],
  getItemsId: () => [],
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getItemCount: () => 0,
  updateQuantity: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth();
  const [cartItems, setCartItems] = useState<productInterface[]>([]);

  useEffect(() => {
    const handleLogout = () => {
      setCartItems([]);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("userLogout", handleLogout);
      return () => window.removeEventListener("userLogout", handleLogout);
    }
  }, []);

  useEffect(() => {
    if (!dataUser && cartItems.length > 0) {
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
        const parsedCart = JSON.parse(cartData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const migratedCart = parsedCart.map((item: any) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(migratedCart);
      }
    }
  }, []);

  const getItemsId = (): number[] => {
    return cartItems.map((item) => item.id);
  };

  const addCart = (product: productInterface) => {
    if (!dataUser) {
      return;
    }

    const productExist = cartItems?.some((item) => item.id === product.id);
    if (productExist) {
      return;
    }

    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("cart");
    }
  };

  const getTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
