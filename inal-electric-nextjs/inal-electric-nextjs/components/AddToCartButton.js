"use client";

import { ShoppingCart, FileText } from "lucide-react";
import { useCart } from "./CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-accent text-white px-6 py-3.5 rounded-md font-semibold text-sm flex items-center gap-2"
    >
      {product.quote ? (
        <>
          <FileText size={16} /> Zatraži ponudu
        </>
      ) : (
        <>
          <ShoppingCart size={16} /> Dodaj u korpu
        </>
      )}
    </button>
  );
}
