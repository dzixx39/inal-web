import Link from "next/link";
import {
  ToggleLeft,
  Cpu,
  Cable,
  Radar,
  ShieldCheck,
  Archive,
  SlidersHorizontal,
  ShieldAlert,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

const FEATURED_CATEGORIES = [
  { name: "Kontakteri (sklopke)", icon: ToggleLeft },
  { name: "Releji", icon: Cpu },
  { name: "Hilzne i stopice", icon: Cable },
  { name: "Induktivni senzori", icon: Radar },
  { name: "Automatski osigurači (B, C, D)", icon: ShieldCheck },
  { name: "Razvodni ormari i kutije (plastični i metalni)", icon: Archive },
  { name: "Frekventni regulatori", icon: SlidersHorizontal },
  { name: "Motorne zaštitne sklopke i termičke zaštite", icon: ShieldAlert },
];

export default function CategoryGrid() {
  const counts = {};
  for (const p of PRODUCTS) counts[p.category] = (counts[p.category] || 0) + 1;

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-7 sm:mb-8 gap-3 flex-wrap">
          <div>
            <div className="font-mono-data text-accent-dim text-xs tracking-[2px] uppercase mb-2">
              Kupujte po kategoriji
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] font-bold tracking-tight">
              Šta vam treba danas?
            </h2>
          </div>
          <Link href="/shop" className="text-accent-dim font-semibold text-sm whitespace-nowrap">
            Sve kategorije →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/shop?kategorija=${encodeURIComponent(cat.name)}`}
              className="group relative overflow-hidden rounded-xl border border-[#E4E8EA] bg-[#F9FAFC] p-5 sm:p-6 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-[#E4E8EA] text-accent-dim flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                <cat.icon size={20} />
              </div>
              <div>
                <div className="font-semibold text-[13.5px] sm:text-[14.5px] leading-snug mb-1 line-clamp-2">
                  {cat.name}
                </div>
                <div className="text-[12px] text-[#8C9BA6]">
                  {counts[cat.name] || 0} artikala
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
