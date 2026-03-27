import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Segments } from "./components/sections/Segments";
import { Technology } from "./components/sections/Technology";
import { YouthSection } from "./components/sections/YouthSection";
import { Partners } from "./components/sections/Partners";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gabel-yellow selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Segments />
        <Technology />
        <YouthSection />
        <Partners />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

