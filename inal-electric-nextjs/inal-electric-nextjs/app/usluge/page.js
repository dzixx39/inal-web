import { Wrench, Cpu, Gauge, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Wrench,
    title: "Prodaja industrijskih dijelova",
    desc: "Snabdijevamo proizvodne pogone, kotlovnice i procesna postrojenja originalnim i kompatibilnim rezervnim dijelovima, uz brzu isporuku i savjetovanje pri izboru.",
    points: ["Široka mreža dobavljača", "Brza isporuka i rezervacija na skladištu", "Tehnička podrška pri odabiru"],
  },
  {
    icon: Gauge,
    title: "Mjerno-regulaciona oprema",
    desc: "Isporučujemo i kalibrišemo senzore, pretvarače i regulatore za precizno mjerenje pritiska, temperature, protoka i nivoa u industrijskim procesima.",
    points: ["Kalibracija i ovjera instrumenata", "Integracija sa postojećim sistemima", "Oprema vodećih proizvođača"],
  },
  {
    icon: Cpu,
    title: "Upravljanje postrojenjima",
    desc: "Projektujemo i implementiramo sisteme za nadzor i daljinsko upravljanje industrijskim procesima, uključujući PLC i SCADA rješenja.",
    points: ["PLC i SCADA sistemi", "Vizualizacija procesa u realnom vremenu", "Alarmiranje i izvještavanje"],
  },
  {
    icon: ShieldCheck,
    title: "Instalacija i servis",
    desc: "Naš tim izvodi stručnu montažu, puštanje u rad i redovno preventivno održavanje opreme, uz brzu intervenciju u slučaju kvara.",
    points: ["Sertifikovani serviseri", "Preventivno održavanje", "Intervencije na terenu"],
  },
];

export default function UslugePage() {
  return (
    <main className="bg-light">
      <div className="bg-bg-darker py-14">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="font-mono-data text-accent text-xs tracking-[2px] uppercase mb-2">
            Šta radimo
          </div>
          <h1 className="font-display text-text-light text-[32px] font-bold max-w-xl">
            Usluge prilagođene zahtjevima vašeg postrojenja
          </h1>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-16 space-y-14">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-[80px_1fr] gap-6 pb-14 ${
              i !== SERVICES.length - 1 ? "border-b border-[#E4E8EA]" : ""
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-bg-dark text-accent flex items-center justify-center">
              <s.icon size={26} />
            </div>
            <div>
              <h2 className="font-display text-[22px] font-bold mb-3">{s.title}</h2>
              <p className="text-[#5C6B76] text-[15px] leading-relaxed mb-5 max-w-2xl">{s.desc}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2.5">
                {s.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-[13.5px] text-text-dark">
                    <CheckCircle2 size={15} className="text-accent" /> {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-bg-dark rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-text-light text-2xl mb-2">
              Trebate konsultacije za vaše postrojenje?
            </h3>
            <p className="text-text-dim text-[14.5px]">
              Zakažite besplatan tehnički pregled i prijedlog rješenja.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="bg-accent text-white px-5 py-3.5 rounded-md font-semibold text-[14.5px] whitespace-nowrap"
          >
            Zakaži termin
          </Link>
        </div>
      </div>
    </main>
  );
}
