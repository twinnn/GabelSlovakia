import React from "react";
import { GabelLogo } from "../ui/GabelLogo";

export const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex items-center gap-4">
        <GabelLogo />
        <span className="text-xs text-white/30 font-bold">© 2024 Gabel Slovakia. Všetky práva vyhradené.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {["Ochrana osobných údajov", "Obchodné podmienky", "Prihlásenie distribútora"].map((link) => (
          <a key={link} href="#" className="text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-gabel-yellow transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
