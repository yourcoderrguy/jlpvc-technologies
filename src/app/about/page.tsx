"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen selection:bg-brand-blue/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-brand-orange font-mono text-sm mb-4">About JLPVC</p>
        <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-12">
          We build the tech <br/> that runs your business.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-12 text-brand-white/80 text-lg leading-relaxed"
      >
        <section>
          <h2 className="text-2xl font-bold text-brand-white mb-4">Our Goal</h2>
          <p>
            Our goal is simple: we build secure and fast software that helps your business run smoother, faster, and without tech headaches. We want to give you the digital tools you need to compete and grow.
          </p>
        </section>

        <div className="h-px w-full bg-brand-white/10" />

        <section>
          <h2 className="text-2xl font-bold text-brand-white mb-4">Why Choose Us?</h2>
          <p>
            We are a dedicated team of engineers. We don't use cheap templates or cut corners. Every line of code we write is custom-built specifically for your business. When you work with us, you get a reliable partner who cares about your long-term success.
          </p>
        </section>
      </motion.div>
    </main>
  );
}