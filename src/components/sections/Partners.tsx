import React from "react";

export const Partners = () => {
  const partners = ["ZSL", "SNWA", "ITALY", "FIS", "VŠC DUKLA"];

  return (
    <section id="partners" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-[10px] font-bold uppercase tracking-wide-label text-white/30 mb-16">Trusted by the Elite</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-headline font-black tracking-tighter">{partner}</span>
              <div className="h-0.5 w-4 bg-gabel-yellow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
