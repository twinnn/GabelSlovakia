import React from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight mb-8">KONTAKTUJTE <br /><span className="text-gabel-yellow">NÁS</span></h2>
            <p className="text-xl text-black/60 mb-12 leading-relaxed">
              Máte záujem o vybavenie Gabel alebo partnerstvo? Náš tím je pripravený poskytnúť odborné poradenstvo ohľadom najlepšieho talianskeho vybavenia pre vaše potreby.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Napíšte nám</h4>
                  <p className="text-lg font-medium">info@go-noow.sk</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Oficiálny distribútor</h4>
                  <p className="text-lg font-medium">GO NOOW s.r.o.</p>
                  <p className="text-black/60">Slovensko a Česká republika</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-black/5 rounded-sm border border-black/5">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gabel-yellow" />
                Prečo si vybrať Gabel?
              </h4>
              <ul className="grid grid-cols-2 gap-4 text-sm text-black/70">
                <li>• 100 % vyrobené v Taliansku</li>
                <li>• Elitná pretekárska kvalita</li>
                <li>• Biomechanická presnosť</li>
                <li>• Udržateľná výroba</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-10 md:p-16 rounded-sm text-white shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Celé meno</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors" placeholder="Ján Novák" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">E-mailová adresa</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors" placeholder="jan@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Záujem o</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors appearance-none">
                  <option className="bg-black">Zimná kolekcia Snow</option>
                  <option className="bg-black">Trekking a outdoor</option>
                  <option className="bg-black">Nordic Walking</option>
                  <option className="bg-black">Partnerský dopyt</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Správa</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors resize-none" placeholder="Napíšte nám o vašich požiadavkách..."></textarea>
              </div>

              <button className="w-full bg-gabel-yellow text-black font-bold uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-white transition-all duration-300 shadow-lg shadow-gabel-yellow/10">
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
