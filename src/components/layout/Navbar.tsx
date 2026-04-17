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

  const navItems = [
    { label: "Katalógy", href: "#catalogues" },
    { label: "Technológie", href: "#technology" },
    { label: "Gabel pre mládež", href: "#gabel-for-youth" },
    { label: "Partneri", href: "#partners" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-panel py-4 border-b border-white/10" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <GabelLogo />

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-gabel-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
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
              key={item.href}
              href={item.href}
              className="text-lg font-bold uppercase text-white hover:text-gabel-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
