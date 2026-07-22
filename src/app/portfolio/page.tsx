"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Financial Data Sync API",
    sector: "Finance App",
    problem: "The client was wasting hours every week copying numbers by hand, which led to mistakes and delayed reports.",
    solution: "We built a custom software bridge (API) that automatically connects their accounts and updates their numbers instantly.",
    result: "Manual mistakes dropped to zero, and the team saved over 40 hours of work every month."
  },
  {
    id: "02",
    title: "Secure Client Banking Portal",
    sector: "Security & Web",
    problem: "The client's old website was too slow, and their customers were worried about whether their data was safe.",
    solution: "We rebuilt the entire website from scratch using modern, fast code and added bank-level security to protect user passwords.",
    result: "The website now loads instantly, and customers trust the platform with their information."
  }
];

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen selection:bg-brand-orange/30">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <p className="text-brand-orange font-mono text-sm mb-4">Recent Projects</p>
        <h1 className="text-5xl md:text-6xl font-bold text-brand-white">Our Work.</h1>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-gray/50 pt-12"
          >
            <div className="md:col-span-4">
              <span className="text-brand-orange font-mono text-xl block mb-2">{project.id} //</span>
              <h2 className="text-3xl font-bold text-brand-white mb-2">{project.title}</h2>
              <p className="text-brand-white/50 font-mono text-sm uppercase">{project.sector}</p>
            </div>
            
            <div className="md:col-span-8 space-y-6 text-brand-white/80">
              <div>
                <strong className="text-brand-white block mb-1">The Problem:</strong>
                <p>{project.problem}</p>
              </div>
              <div>
                <strong className="text-brand-white block mb-1">What We Built:</strong>
                <p>{project.solution}</p>
              </div>
              <div>
                <strong className="text-brand-orange block mb-1">The Result:</strong>
                <p className="text-brand-white">{project.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}