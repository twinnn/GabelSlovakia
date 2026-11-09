import React from "react";
import { GabelLogo } from "../ui/GabelLogo";
import { company, addressLine } from "../../data/company";

export const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
      <GabelLogo />
      <div className="text-xs text-white/60 space-y-1 md:text-right">
        <p className="font-bold">
          © {new Date().getFullYear()} {company.legalName} – oficiálny distribútor Gabel pre Slovensko a Česko
        </p>
        <p>{addressLine} · IČO: {company.ico}</p>
        <p>{company.register}</p>
      </div>
    </div>
  </footer>
);
