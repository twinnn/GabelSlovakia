import React from "react";

export const GabelLogo = () => (
  <div className="flex items-center gap-3">
    <img 
      src="/images/logos/gabel_yellowlong_small.jpg" 
      alt="Gabel Logo" 
      className="h-6 md:h-8 object-contain"
      referrerPolicy="no-referrer"
    />
    <div className="h-6 w-[1px] bg-white/20 hidden md:block" />
    <span className="font-headline font-bold text-lg md:text-xl tracking-tight hidden md:block">Slovakia</span>
  </div>
);
