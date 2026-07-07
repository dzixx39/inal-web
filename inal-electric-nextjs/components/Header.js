"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { cartCount, setDrawerOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E4E8EA]">
      <div className="max-w-[1180px] mx-auto px-6 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="INAL Electric"
            width={168}
            height={82}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-7">
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

        <div className="flex items-center gap-4">
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
        <div className="md:hidden border-t border-[#E4E8EA] px-6 py-4 flex flex-col gap-4 bg-white">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-dark text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
