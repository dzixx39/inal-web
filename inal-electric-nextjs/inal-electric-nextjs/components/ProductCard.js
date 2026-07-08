"use client";

import Link from "next/link";
import { ShoppingCart, PackageSearch } from "lucide-react";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-[#E4E8EA] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="h-[140px] sm:h-[150px] bg-[#F4F6FB] relative flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-contain p-4"
            />
          ) : (
            <>
              <div className="absolute inset-0 blueprint-grid opacity-10" />
              <PackageSearch size={30} className="relative text-instrument" />
            </>
          )}
        </div>
      </Link>
      <div className="p-4 pb-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-mono-data text-[11px] text-[#8C9BA6]">{product.sku}</span>
          {product.brand && (
            <span className="text-[10.5px] text-steel font-medium">{product.brand}</span>
          )}
        </div>
        <div className="text-[11px] text-accent-dim font-semibold uppercase tracking-wide mb-1.5 line-clamp-1">
          {product.category}
        </div>
        <Link href={`/shop/${product.slug}`} className="flex-1">
          <div className="font-semibold text-[14.5px] mb-3.5 leading-snug line-clamp-2">
            {product.name}
          </div>
        </Link>
        <div className="flex items-center justify-between gap-2">
          {product.quote ? (
            <>
              <span className="text-[12.5px] text-[#5C6B76]">Cijena na upit</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-transparent border-[1.5px] border-accent text-accent-dim px-3 py-2 rounded-md text-xs font-semibold whitespace-nowrap"
              >
                Zatraži ponudu
              </button>
            </>
          ) : (
            <>
              <span className="font-display font-bold text-[17px]">{product.price} KM</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-text-dark text-white px-3.5 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5"
              >
                <ShoppingCart size={13} /> Dodaj
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
