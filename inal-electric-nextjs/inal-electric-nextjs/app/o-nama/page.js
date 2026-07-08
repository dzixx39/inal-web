import { Target, Users, Award } from "lucide-react";

export default function ONamaPage() {
  return (
    <main className="bg-light">
      <div className="bg-bg-darker py-14">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="font-mono-data text-accent text-xs tracking-[2px] uppercase mb-2">
            O firmi
          </div>
          <h1 className="font-display text-text-light text-[32px] font-bold max-w-2xl">
            Više od dvije decenije uz industrijska postrojenja u regionu
          </h1>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-14 mb-16">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Naša priča</h2>
            <p className="text-[#5C6B76] text-[15px] leading-relaxed mb-4">
              [Ovdje ide stvarna priča vaše firme — kada je osnovana, koji problem
              rješavate za klijente i šta vas izdvaja od konkurencije. Pošaljite
              nam tekst ili ga možemo zajedno napraviti.]
            </p>
            <p className="text-[#5C6B76] text-[15px] leading-relaxed">
              Placeholder tekst: firma se razvila od malog tima servisera do
              pouzdanog partnera proizvodnim pogonima, energetici i prehrambenoj
              industriji u regionu, sa fokusom na preciznost i pouzdanost opreme.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-6">
              <div className="font-display text-3xl font-bold mb-1">20+</div>
              <div className="text-[13px] text-[#5C6B76]">godina iskustva</div>
            </div>
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-6">
              <div className="font-display text-3xl font-bold mb-1">180+</div>
              <div className="text-[13px] text-[#5C6B76]">realizovanih projekata</div>
            </div>
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-6">
              <div className="font-display text-3xl font-bold mb-1">40+</div>
              <div className="text-[13px] text-[#5C6B76]">stalnih klijenata</div>
            </div>
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-6">
              <div className="font-display text-3xl font-bold mb-1">24/7</div>
              <div className="text-[13px] text-[#5C6B76]">tehnička podrška</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-bg-dark rounded-xl p-7 text-text-light">
            <Target size={24} className="text-accent mb-4" />
            <div className="font-display font-semibold mb-2">Naša misija</div>
            <p className="text-text-dim text-[13.5px] leading-relaxed">
              Osigurati da postrojenja naših klijenata rade precizno, sigurno i
              bez zastoja.
            </p>
          </div>
          <div className="bg-bg-dark rounded-xl p-7 text-text-light">
            <Users size={24} className="text-accent mb-4" />
            <div className="font-display font-semibold mb-2">Naš tim</div>
            <p className="text-text-dim text-[13.5px] leading-relaxed">
              Inženjeri i serviseri sa dugogodišnjim iskustvom u industrijskoj
              automatizaciji.
            </p>
          </div>
          <div className="bg-bg-dark rounded-xl p-7 text-text-light">
            <Award size={24} className="text-accent mb-4" />
            <div className="font-display font-semibold mb-2">Kvalitet</div>
            <p className="text-text-dim text-[13.5px] leading-relaxed">
              Radimo isključivo sa provjerenim proizvođačima i certificiranom
              opremom.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
