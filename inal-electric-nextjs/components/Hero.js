"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [angle, setAngle] = useState(-40);
  const dir = useRef(1);

  useEffect(() => {
    const id = setInterval(() => {
      setAngle((a) => {
        let next = a + dir.current * 1.4;
        if (next > 40 || next < -40) dir.current *= -1;
        return next;
      });
    }, 45);
    return () => clearInterval(id);
  }, []);

  const value = (((angle + 40) / 80) * 16).toFixed(1);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.06]" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#EEF1FB] to-transparent pointer-events-none" />
      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center">
        <div>
          <div className="font-mono-data text-accent-dim text-[11.5px] sm:text-[12.5px] tracking-[2px] uppercase flex items-center gap-2 mb-4">
            <span className="w-[22px] h-px bg-accent-dim inline-block" />
            Mjerenje · Regulacija · Automatizacija
          </div>
          <h1 className="font-display text-text-dark text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.15] mb-5 tracking-tight">
            Precizna oprema za{" "}
            <span className="text-accent-dim relative">
              postrojenja
              <svg className="absolute left-0 -bottom-1 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,4 Q50,0 100,4" stroke="#5E75BE" strokeWidth="3" fill="none" />
              </svg>
            </span>{" "}
            koja ne smiju stati.
          </h1>
          <p className="text-[#5C6B76] text-[15px] sm:text-base leading-relaxed max-w-[480px] mb-8">
            Prodaja industrijskih dijelova, mjerno-regulacione opreme i
            kompletna instalacija i upravljanje postrojenjima — od
            projektovanja do puštanja u rad.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/shop"
              className="bg-accent text-white px-5 py-3.5 rounded-md font-semibold text-[14.5px] flex items-center gap-2 shadow-sm shadow-accent/20"
            >
              Pogledaj Shop <ArrowRight size={16} />
            </Link>
            <Link
              href="/kontakt"
              className="bg-white text-text-dark border border-[#D8DEE1] px-5 py-3.5 rounded-md font-semibold text-[14.5px]"
            >
              Zatraži konsultacije
            </Link>
          </div>
          <div className="flex flex-wrap gap-7 sm:gap-9 mt-10 sm:mt-11 pt-6 sm:pt-7 border-t border-[#E4E8EA]">
            <div>
              <div className="font-display text-text-dark text-xl sm:text-2xl font-bold">1.200+</div>
              <div className="text-[#5C6B76] text-xs mt-0.5">Instaliranih uređaja</div>
            </div>
            <div>
              <div className="font-display text-text-dark text-xl sm:text-2xl font-bold">180+</div>
              <div className="text-[#5C6B76] text-xs mt-0.5">Realizovanih projekata</div>
            </div>
            <div>
              <div className="font-display text-text-dark text-xl sm:text-2xl font-bold">24/7</div>
              <div className="text-[#5C6B76] text-xs mt-0.5">Tehnička podrška</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white border border-[#E4E8EA] rounded-2xl p-6 sm:p-7 w-full max-w-[320px] sm:max-w-[340px] shadow-[0_20px_50px_-15px_rgba(56,64,128,0.18)]">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[#8C9BA6] font-mono-data text-[11px] tracking-wide">
                PRESSURE · BAR
              </span>
              <span className="flex items-center gap-1.5 text-[#3FA85C] font-mono-data text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FA85C] inline-block" />
                LIVE
              </span>
            </div>
            <svg viewBox="0 0 200 130" width="100%">
              <path
                d="M20,110 A80,80 0 0,1 180,110"
                fill="none"
                stroke="#E8ECF5"
                strokeWidth="10"
              />
              <path
                d="M20,110 A80,80 0 0,1 180,110"
                fill="none"
                stroke="#5E75BE"
                strokeWidth="10"
                strokeDasharray="251"
                strokeDashoffset={251 - 251 * ((angle + 90) / 180)}
                strokeLinecap="round"
              />
              <g transform={`rotate(${angle} 100 110)`}>
                <line
                  x1="100"
                  y1="110"
                  x2="100"
                  y2="42"
                  stroke="#384080"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <circle cx="100" cy="110" r="7" fill="#384080" />
            </svg>
            <div className="flex justify-between mt-2">
              <span className="font-mono-data text-[#8C9BA6] text-[11px]">0</span>
              <span className="font-mono-data text-text-dark text-xl font-semibold">
                {value}
              </span>
              <span className="font-mono-data text-[#8C9BA6] text-[11px]">16</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
