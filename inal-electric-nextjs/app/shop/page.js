"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PAGE_SIZE = 24;

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("kategorija") || "Sve";

  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCat !== "Sve") list = list.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCat, query]);

  const visibleProducts = filtered.slice(0, visible);

  function selectCategory(cat) {
    setActiveCat(cat);
    setVisible(PAGE_SIZE);
    setFiltersOpen(false);
  }

  return (
    <main className="bg-light min-h-screen">
      <div className="bg-white border-b border-[#E4E8EA] py-10 sm:py-14">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="font-mono-data text-accent-dim text-xs tracking-[2px] uppercase mb-2">
            Shop
          </div>
          <h1 className="font-display text-[26px] sm:text-[32px] font-bold mb-5">
            Kompletan katalog proizvoda
          </h1>
          <div className="relative max-w-[440px]">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9BA6]" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Pretraži po nazivu, šifri ili brendu..."
              className="w-full border border-[#D8DEE1] rounded-md pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-8 sm:py-10 grid md:grid-cols-[220px_1fr] gap-8">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setFiltersOpen(true)}
          className="md:hidden flex items-center gap-2 border border-[#D8DEE1] rounded-md px-4 py-2.5 text-sm font-medium w-fit"
        >
          <SlidersHorizontal size={15} /> Filteri {activeCat !== "Sve" && `· ${activeCat}`}
        </button>

        {/* Sidebar - desktop */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <div className="font-display font-semibold text-sm mb-3">Kategorije</div>
            <div className="flex flex-col gap-0.5 max-h-[70vh] overflow-y-auto pr-2">
              <CategoryButton label="Sve kategorije" active={activeCat === "Sve"} onClick={() => selectCategory("Sve")} />
              {CATEGORIES.map((cat) => (
                <CategoryButton key={cat} label={cat} active={activeCat === cat} onClick={() => selectCategory(cat)} />
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-[#10142A]/60" onClick={() => setFiltersOpen(false)} />
            <div className="relative bg-white w-[85%] max-w-[320px] h-full ml-auto flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4E8EA]">
                <span className="font-display font-semibold">Kategorije</span>
                <X size={20} className="cursor-pointer" onClick={() => setFiltersOpen(false)} />
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-3">
                <CategoryButton label="Sve kategorije" active={activeCat === "Sve"} onClick={() => selectCategory("Sve")} />
                {CATEGORIES.map((cat) => (
                  <CategoryButton key={cat} label={cat} active={activeCat === cat} onClick={() => selectCategory(cat)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div>
          <p className="text-[#5C6B76] text-sm mb-5">
            {filtered.length} {filtered.length === 1 ? "proizvod" : "proizvoda"}
            {activeCat !== "Sve" && (
              <>
                {" "}
                u kategoriji <span className="font-semibold text-text-dark">{activeCat}</span>
              </>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-10 text-center text-[#5C6B76] text-sm">
              Nema proizvoda koji odgovaraju pretrazi. Pokušajte drugi pojam ili kontaktirajte nas za specifičan artikal.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {visibleProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
              {visible < filtered.length && (
                <div className="flex justify-center mt-9">
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="bg-white border border-[#D8DEE1] px-6 py-3 rounded-md font-semibold text-sm"
                  >
                    Prikaži još proizvoda
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function CategoryButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left px-3 py-2 rounded-md text-[13.5px] transition-colors ${
        active ? "bg-accent text-white font-medium" : "text-[#5C6B76] hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}
