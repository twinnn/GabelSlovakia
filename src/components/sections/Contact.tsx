import React from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight mb-8">KONTAKTUJTE <br /><span className="text-gabel-yellow">NÁS</span></h2>

            
          </div>

          <div className="bg-white p-10 md:p-16 rounded-sm shadow-2xl">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Napíšte nám</h4>
                  <p className="text-lg font-medium">info@gabelpalice.sk</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Oficiálny distribútor</h4>
                  <p className="text-lg font-medium">AcEcom s.r.o.</p>
                  <p className="text-black/60">Slovensko a Česká republika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
