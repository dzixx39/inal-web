"use client";

import { X, Plus, Minus, PackageSearch } from "lucide-react";
import { useCart } from "./CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const {
    cart,
    drawerOpen,
    setDrawerOpen,
    removeFromCart,
    changeQty,
    cartCount,
    cartTotal,
    hasQuoteItems,
  } = useCart();

  if (!drawerOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#0D161F]/60 z-50"
        onClick={() => setDrawerOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-[51] flex flex-col shadow-2xl">
        <div className="px-6 py-5 border-b border-[#E4E8EA] flex items-center justify-between">
          <strong>Korpa / Upit ({cartCount})</strong>
          <X size={20} className="cursor-pointer" onClick={() => setDrawerOpen(false)} />
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {cart.length === 0 && (
            <p className="text-text-dim text-sm mt-6">Korpa je prazna.</p>
          )}
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3 py-4 border-b border-[#EEF1F2]">
              <div className="w-[52px] h-[52px] bg-[#F4F6FB] rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-1" />
                ) : (
                  <PackageSearch size={18} className="text-instrument" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-[13.5px] font-semibold line-clamp-2">{item.name}</div>
                <div className="text-xs text-text-dim">
                  {item.quote ? "Cijena na upit" : `${item.price} KM`}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="w-[22px] h-[22px] border border-[#D8DEE1] rounded flex items-center justify-center"
                    onClick={() => changeQty(item.id, -1)}
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm">{item.qty}</span>
                  <button
                    className="w-[22px] h-[22px] border border-[#D8DEE1] rounded flex items-center justify-center"
                    onClick={() => changeQty(item.id, 1)}
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <X
                size={15}
                className="cursor-pointer text-text-dim flex-shrink-0"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E4E8EA]">
            <div className="flex justify-between text-sm mb-3.5">
              <span>Ukupno (bez upita)</span>
              <strong>{cartTotal} KM</strong>
            </div>
            <Link
              href="/kontakt"
              onClick={() => setDrawerOpen(false)}
              className="w-full bg-accent text-white rounded-md py-3.5 font-semibold text-sm flex items-center justify-center"
            >
              {hasQuoteItems ? "Nastavi na plaćanje / upit" : "Nastavi na plaćanje"}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
