import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const TOP_CATEGORIES = ["Kontakteri (sklopke)", "Releji", "Induktivni senzori"];

export default function Footer() {
  return (
    <footer className="bg-bg-darker text-text-dim pt-14 pb-7 mt-5">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-9 border-b border-white/10">
          <div>
            <div className="bg-white inline-block rounded-md px-3 py-2 mb-4">
              <Image src="/logo.png" alt="INAL Electric" width={168} height={82} className="h-9 w-auto" />
            </div>
            <p className="text-[13px] leading-relaxed max-w-[240px]">
              Vaš partner za industrijske dijelove, mjerno-regulacionu opremu i
              upravljanje postrojenjima.
            </p>
          </div>
          <div>
            <div className="text-text-light font-semibold text-[13px] mb-3.5">Shop</div>
            {TOP_CATEGORIES.map((cat) => (
              <Link key={cat} href={`/shop?kategorija=${encodeURIComponent(cat)}`} className="block text-[13.5px] mb-2.5">
                {cat}
              </Link>
            ))}
            <Link href="/shop" className="block text-[13.5px] mb-2.5">Kompletan katalog →</Link>
          </div>
          <div>
            <div className="text-text-light font-semibold text-[13px] mb-3.5">Firma</div>
            <Link href="/o-nama" className="block text-[13.5px] mb-2.5">O nama</Link>
            <Link href="/usluge" className="block text-[13.5px] mb-2.5">Usluge</Link>
            <Link href="/kontakt" className="block text-[13.5px] mb-2.5">Kontakt</Link>
          </div>
          <div>
            <div className="text-text-light font-semibold text-[13px] mb-3.5">Kontakt</div>
            <div className="flex items-center gap-2 text-[13.5px] mb-2.5">
              <PhoneCall size={14} /> +387 35 000 000
            </div>
            <div className="flex items-center gap-2 text-[13.5px] mb-2.5">
              <Mail size={14} /> info@inal-electric.ba
            </div>
            <div className="flex items-center gap-2 text-[13.5px] mb-2.5">
              <MapPin size={14} /> Tuzla, BiH
            </div>
          </div>
        </div>
        <div className="pt-5 text-[12.5px] flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} INAL Electric. Sva prava zadržana.</span>
        </div>
      </div>
    </footer>
  );
}
