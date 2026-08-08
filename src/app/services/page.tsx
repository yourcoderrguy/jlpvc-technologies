"use client";
import { motion } from "framer-motion";
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen selection:bg-brand-blue/30 relative overflow-hidden">
      {/* Ambient Lighting Orb */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-brand-orange font-mono text-sm mb-4"
        >
          Our Services
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl md:text-6xl font-bold text-brand-white"
        >
          How We Help.
        </motion.h1>
      </div>
      
      <div className="relative z-10">
        <ServicesGrid />
      </div>
    </main>
  );
}