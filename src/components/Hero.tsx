"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-gray/20 via-brand-dark to-brand-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-white mb-6"
          >
            We Build Software <br className="hidden md:block"/> That Grows Your Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-white/70 text-lg md:text-xl max-w-xl mb-10"
          >
            From custom web apps to seamless backend systems, we turn your complex challenges into fast, reliable digital tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-brand-orange text-brand-white px-8 py-4 rounded-md font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(255,94,0,0.4)] transition-all"
            >
              Book a Discovery Call
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-xl overflow-hidden border border-brand-gray/50 shadow-2xl hidden lg:block"
        >
          <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay z-10 pointer-events-none"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="High-end technical engineering workspace"
            className="w-full h-[550px] object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
          
          <div className="absolute bottom-4 left-4 z-20 flex gap-2">
            <span className="bg-brand-dark/90 backdrop-blur text-brand-orange font-mono text-xs px-3 py-1.5 rounded border border-brand-gray/50">
              JLPVC Workspace
            </span>
            <span className="bg-brand-dark/90 backdrop-blur text-brand-white/70 font-mono text-xs px-3 py-1.5 rounded border border-brand-gray/50">
              Engineering Team
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}