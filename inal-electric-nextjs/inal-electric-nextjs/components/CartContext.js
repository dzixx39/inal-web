"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Učitaj korpu iz localStorage nakon prvog renderovanja (izbjegava SSR mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("industra-cart");
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {
      // localStorage nedostupan (npr. privatni mod) - nastavi sa praznom korpom
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("industra-cart", JSON.stringify(cart));
    } catch (e) {
      // ignoriši ako storage nije dostupan
    }
  }, [cart, hydrated]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setDrawerOpen(true);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const changeQty = (id, delta) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + (i.price || 0) * i.qty, 0);
  const hasQuoteItems = cart.some((i) => i.quote);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQty,
        cartCount,
        cartTotal,
        hasQuoteItems,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart mora biti korišten unutar CartProvider-a");
  return ctx;
}
