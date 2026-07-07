import Link from "next/link";
import { Gauge, Wrench, Cpu, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

const SERVICES = [
  {
    icon: Wrench,
    title: "Prodaja industrijskih dijelova",
    desc: "Originalni i kompatibilni dijelovi za sve tipove postrojenja, sa brzom isporukom.",
  },
  {
    icon: Cpu,
    title: "Upravljanje postrojenjima",
    desc: "Nadzor, optimizacija i daljinsko upravljanje industrijskim procesima.",
  },
  {
    icon: Gauge,
    title: "Mjerno-regulaciona oprema",
    desc: "Senzori, pretvarači i regulatori za precizno mjerenje i kontrolu procesa.",
  },
  {
    icon: ShieldCheck,
    title: "Instalacija i servis",
    desc: "Stručna montaža, puštanje u rad i redovno održavanje opreme.",
  },
];

export default function HomePage() {
  const seenCats = new Set();
  const featured = [];
  for (const p of PRODUCTS) {
    if (p.image && !seenCats.has(p.category)) {
      seenCats.add(p.category);
      featured.push(p);
    }
    if (featured.length === 6) break;
  }

  return (
    <main>
      <Hero />

      {/* SERVICES */}
      <section className="py-14 sm:py-20 bg-light">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="mb-8 sm:mb-9">
            <div className="font-mono-data text-accent-dim text-xs tracking-[2px] uppercase mb-2">
              Šta radimo
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight">
              Usluge i djelatnosti
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E8EA] border border-[#E4E8EA] rounded-xl overflow-hidden">
            {SERVICES.map((s, i) => (
              <div className="bg-white p-6 sm:p-7" key={i}>
                <div className="text-accent mb-4">
                  <s.icon size={26} />
                </div>
                <div className="font-display font-semibold text-[15.5px] mb-2">{s.title}</div>
                <div className="text-[#5C6B76] text-[13.5px] leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-14 sm:py-20 bg-light">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap justify-between items-end gap-3 mb-8 sm:mb-9">
            <div>
              <div className="font-mono-data text-accent-dim text-xs tracking-[2px] uppercase mb-2">
                Shop
              </div>
              <h2 className="font-display text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight">
                Izdvojeni proizvodi
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-accent-dim font-semibold text-sm flex items-center gap-1 whitespace-nowrap"
            >
              Kompletan shop <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 sm:pb-20 bg-light pt-2">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="brand-gradient rounded-2xl p-7 sm:p-10 md:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h3 className="font-display text-white text-xl sm:text-2xl md:text-[26px] mb-2">
                Trebate opremu koje nema u katalogu?
              </h3>
              <p className="text-white/75 text-[13.5px] sm:text-[14.5px] max-w-[420px]">
                Pošaljite nam specifikaciju vašeg postrojenja — pripremamo
                ponudu u roku od 24h.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="bg-white text-accent-dim px-5 py-3.5 rounded-md font-semibold text-[14.5px] flex items-center gap-2 whitespace-nowrap"
            >
              <FileText size={16} /> Pošalji upit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
