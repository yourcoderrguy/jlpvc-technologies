"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Campus Without Walls",
    sector: "Educational Infrastructure",
    problem: "The client required an expansive digital platform to broaden access to rigorous academic courses without compromising on structure, speed, or user engagement.",
    solution: "We engineered a highly structured, SEO-optimized educational portal focusing on intuitive UI/UX design to handle complex academic routing and course delivery seamlessly.",
    result: "A scalable, high-performance learning environment that successfully connects students with real-world career pathways.",
    link: "https://campuswithoutwalls.org/",
  },
  {
    id: "02",
    title: "Benny Tech Hub",
    sector: "Creative Portfolio Showcase",
    problem: "The client needed a premium digital presence capable of elegantly displaying high-resolution photography projects without suffering from slow load times or poor search rankings.",
    solution: "We developed a highly responsive, custom architecture tailored specifically for media-heavy portfolios, implementing strict SEO optimization protocols.",
    result: "A lightning-fast, visually striking showcase that elevates the client's brand authority and significantly improves search engine visibility.",
    link: "https://your-link-here.com"
  },
  {
    id: "03",
    title: "EDH Platform",
    sector: "Custom Web Architecture",
    problem: "The client required a robust, modern web platform to upgrade their digital footprint, handle traffic effectively, and drive user engagement.",
    solution: "We architected a bespoke web solution from the ground up, prioritizing clean code, frictionless user navigation, and highly reliable infrastructure.",
    result: "A top-tier digital presence that operates with zero downtime, eliminating previous operational bottlenecks.",
    link: "https://www.entrepreneurshipdevthub.com/",
  }
];

export default function PortfolioPage() {
  return (
    <main className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen selection:bg-brand-blue/30">
      {/* Ambient Lighting Orb for Depth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 mb-16">
        <p className="text-brand-orange font-mono text-sm mb-4">Proof of Work</p>
        <h1 className="text-5xl md:text-6xl font-bold text-brand-white">Deployed Architecture.</h1>
      </motion.div>

      <div className="relative z-10 space-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-white/10 pt-12 p-6 rounded-2xl hover:bg-brand-white/5 transition-colors duration-500"
          >
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-brand-orange font-mono text-xl block mb-2">{project.id} //</span>
                <h2 className="text-3xl font-bold text-brand-white mb-2">{project.title}</h2>
                <p className="text-brand-white/50 font-mono text-sm uppercase">{project.sector}</p>
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-brand-yellow hover:text-brand-orange font-mono text-sm transition-colors"
              >
                VIEW LIVE DEPLOYMENT
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
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