import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { GabelLogo } from "../ui/GabelLogo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Segments", "Technology", "Gabel for Youth", "Partners", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-panel py-4 border-b border-white/10" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <GabelLogo />
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-gabel-yellow transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#segments"
            className="bg-gabel-yellow text-black px-6 py-2 rounded-sm font-headline font-black text-xs uppercase tracking-widest hover:brightness-125 hover:scale-105 transition-all shadow-[0_0_15px_rgba(227,232,41,0.4)] flex items-center justify-center"
          >
            Catalogue
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-bold uppercase text-white hover:text-gabel-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#segments"
            className="bg-gabel-yellow text-black w-full py-4 rounded-sm font-headline font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(227,232,41,0.3)] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Catalogue
          </a>
        </motion.div>
      )}
    </nav>
  );
};
