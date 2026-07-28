"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web & Mobile Apps",
    description: "We design and build beautiful, easy-to-use applications tailored exactly to what your customers need.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Backend & Databases",
    description: "We connect your tools and set up secure databases so your business runs smoothly behind the scenes.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Software Rescues",
    description: "Is your current app slow or broken? We step in, find the bugs, and rewrite the code to make it fast and reliable.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Secure Hosting & Setup",
    description: "We put your website on fast, secure servers so it never goes offline, no matter how many customers visit.",
    colSpan: "md:col-span-2",
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-4">
          What We Do
        </h2>
        <p className="text-brand-white/80 text-lg max-w-2xl">
          We don't just write code; we build reliable digital solutions that save you time and help your business make more money.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative p-8 rounded-xl bg-brand-white/5 border border-brand-white/10 hover:border-brand-blue/50 transition-all ${service.colSpan} overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="relative z-10 text-xl md:text-2xl font-bold text-brand-white mb-3">
              {service.title}
            </h3>
            <p className="relative z-10 text-brand-white/70 leading-relaxed">
              {service.description}
            </p>
            
            <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange group-hover:text-brand-yellow transition-colors">
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}