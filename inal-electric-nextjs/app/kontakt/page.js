"use client";

import { useState } from "react";
import { PhoneCall, Mail, MapPin, Send } from "lucide-react";
import { useCart } from "@/components/CartContext";

export default function KontaktPage() {
  const { cart, cartTotal } = useCart();
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: povezati sa API rutom / servisom za slanje emaila (npr. Resend, Nodemailer)
    setSent(true);
  }

  return (
    <main className="bg-light">
      <div className="bg-bg-darker py-14">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="font-mono-data text-accent text-xs tracking-[2px] uppercase mb-2">
            Kontakt
          </div>
          <h1 className="font-display text-text-light text-[32px] font-bold">
            Pošaljite upit ili zatražite ponudu
          </h1>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-16 grid md:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <h2 className="font-display text-xl font-bold mb-6">Kontakt podaci</h2>
          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-3 text-[14.5px]">
              <PhoneCall size={18} className="text-accent" /> +387 35 000 000
            </div>
            <div className="flex items-center gap-3 text-[14.5px]">
              <Mail size={18} className="text-accent" /> info@inal-electric.ba
            </div>
            <div className="flex items-center gap-3 text-[14.5px]">
              <MapPin size={18} className="text-accent" /> Tuzla, Bosna i Hercegovina
            </div>
          </div>

          {cart.length > 0 && (
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-5">
              <div className="font-semibold text-sm mb-3">Stavke iz korpe koje šaljete uz upit:</div>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-[13.5px] text-[#5C6B76]">
                    <span>{item.name} × {item.qty}</span>
                    <span>{item.quote ? "na upit" : `${item.price * item.qty} KM`}</span>
                  </div>
                ))}
              </div>
              {cartTotal > 0 && (
                <div className="flex justify-between text-sm font-semibold mt-3 pt-3 border-t border-[#EEF1F2]">
                  <span>Ukupno</span>
                  <span>{cartTotal} KM</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          {sent ? (
            <div className="bg-white border border-[#E4E8EA] rounded-xl p-8 text-center">
              <div className="font-display text-xl font-bold mb-2">Hvala na upitu!</div>
              <p className="text-[#5C6B76] text-sm">
                Naš tim će vam odgovoriti u roku od 24h na navedeni email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#E4E8EA] rounded-xl p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Ime i prezime</label>
                  <input required type="text" className="w-full border border-[#D8DEE1] rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Firma</label>
                  <input type="text" className="w-full border border-[#D8DEE1] rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Email</label>
                  <input required type="email" className="w-full border border-[#D8DEE1] rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Telefon</label>
                  <input type="tel" className="w-full border border-[#D8DEE1] rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-1.5">Poruka / specifikacija</label>
                <textarea required rows={5} className="w-full border border-[#D8DEE1] rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-accent resize-none" />
              </div>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3.5 rounded-md font-semibold text-sm flex items-center gap-2"
              >
                <Send size={16} /> Pošalji upit
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
