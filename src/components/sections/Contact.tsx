import React from "react";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { company, phoneHref, addressLine } from "../../data/company";

const iconBox = "w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0";
const label = "font-bold uppercase tracking-widest text-xs mb-1";
const link = "text-lg font-medium underline decoration-gabel-yellow decoration-2 underline-offset-4 hover:decoration-black transition-colors";

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
                <div className={iconBox}>
                  <Mail className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h3 className={label}>Napíšte nám</h3>
                  <a href={`mailto:${company.email}`} className={link}>{company.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className={iconBox}>
                  <Phone className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h3 className={label}>Zavolajte nám</h3>
                  <a href={phoneHref} className={link}>{company.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className={iconBox}>
                  <MapPin className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h3 className={label}>Oficiálny distribútor pre Slovensko a Česko</h3>
                  <p className="text-lg font-medium">{company.legalName}</p>
                  <p className="text-black/70">{addressLine}</p>
                  <p className="text-black/70">IČO: {company.ico}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gabel SK & CZ na Facebooku (otvorí sa v novej karte)"
                  className={`${iconBox} hover:bg-gabel-yellow group transition-colors`}
                >
                  <Facebook className="w-6 h-6 text-gabel-yellow group-hover:text-black" />
                </a>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gabel SK & CZ na Instagrame (otvorí sa v novej karte)"
                  className={`${iconBox} hover:bg-gabel-yellow group transition-colors`}
                >
                  <Instagram className="w-6 h-6 text-gabel-yellow group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
