"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";

const TOP_SHOP_CATEGORIES = [
  "Kontakteri (sklopke)",
  "Releji",
  "Hilzne i stopice",
  "Induktivni senzori",
  "Automatski osigurači (B, C, D)",
  "Frekventni regulatori",
];

const NAV = [
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { cartCount, setDrawerOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E4E8EA]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="INAL Electric"
            width={168}
            height={82}
            className="h-11 sm:h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <div
            className="relative"
            onMouseEnter={() => setShopMenuOpen(true)}
            onMouseLeave={() => setShopMenuOpen(false)}
          >
            <Link
              href="/shop"
              className="text-text-dark hover:text-accent-dim text-sm font-semibold flex items-center gap-1"
            >
              Shop <ChevronDown size={14} />
            </Link>
            {shopMenuOpen && (
              <div className="absolute top-full left-0 pt-3 w-72">
                <div className="bg-white border border-[#E4E8EA] rounded-lg shadow-lg p-2">
                  {TOP_SHOP_CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      href={`/shop?kategorija=${encodeURIComponent(cat)}`}
                      className="block px-3 py-2 rounded-md text-[13.5px] text-[#5C6B76] hover:bg-light hover:text-text-dark"
                    >
                      {cat}
                    </Link>
                  ))}
                  <div className="border-t border-[#EEF1F2] mt-1.5 pt-1.5">
                    <Link
                      href="/shop"
                      className="block px-3 py-2 rounded-md text-[13.5px] font-semibold text-accent-dim hover:bg-light"
                    >
                      Sve kategorije →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#5C6B76] hover:text-text-dark text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative w-10 h-10 rounded-md bg-light border border-[#E4E8EA] text-text-dark flex items-center justify-center"
            aria-label="Otvori korpu"
          >
            <ShoppingCart size={17} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            href="/kontakt"
            className="hidden sm:inline-block bg-accent text-white px-4 py-2.5 rounded-md text-[13.5px] font-semibold"
          >
            Zatraži ponudu
          </Link>
          <button
            className="md:hidden text-text-dark"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Meni"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E8EA] px-5 py-4 flex flex-col gap-1 bg-white">
          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="text-text-dark text-sm font-semibold py-2"
          >
            Shop
          </Link>
          <div className="flex flex-col gap-0.5 pl-3 mb-2">
            {TOP_SHOP_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/shop?kategorija=${encodeURIComponent(cat)}`}
                onClick={() => setMobileOpen(false)}
                className="text-[#5C6B76] text-[13px] py-1.5"
              >
                {cat}
              </Link>
            ))}
          </div>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-dark text-sm font-medium py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
