"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Campus Without Walls",
    category: "Educational Infrastructure",
    description: "An expansive, SEO-optimized educational platform designed to broaden access to rigorous academic courses through a highly engaging user interface.",
    image: "/1.png", 
    link: "https://campuswithoutwalls.org/",
  },
  {
    id: "02",
    title: "Ice Cold Studio Media Portal",
    category: "Creative Portfolio Showcase",
    description: "We architected a custom CMS and lightweight SaaS media management application featuring a secure Client Vault with role-based access control.",
    image: "/2.png", 
    link: "https://photoweb-chi.vercel.app/",
  },
  {
    id: "03",
    title: "EDH Platform",
    category: "Custom Web Architecture",
    description: "A robust, high-performance web application engineered from the ground up to eliminate operational bottlenecks and handle modern web scale.",
    image: "/3.png", 
    link: "https://www.entrepreneurshipdevthub.com/",
  },
];

export default function PortfolioScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-auto md:h-[300vh] bg-brand-dark">
      <div className="relative md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center overflow-visible md:overflow-hidden py-24 md:py-0">
        
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-brand-orange font-mono text-sm mb-4"
          >
            Proof of Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl font-bold text-brand-white"
          >
            Deployed Architecture.
          </motion.h2>
        </div>

        {/* Desktop Horizontal Scrolling Track */}
        <motion.div style={{ x }} className="hidden md:flex gap-8 px-6 pb-10 w-[300vw] lg:w-[200vw]">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-[800px] h-[500px] rounded-2xl overflow-hidden group bg-brand-white/5 border border-brand-white/10 flex-shrink-0 cursor-pointer"
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D2E] via-[#2A2D2E]/80 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-brand-yellow font-mono text-lg block mb-3">
                  {project.id} // {project.category}
                </span>
                <h3 className="text-3xl font-bold text-brand-white mb-4 flex items-center gap-3">
                  {project.title}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 text-brand-orange transition-opacity">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </h3>
                <p className="text-brand-white/80 max-w-xl text-lg">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Mobile Vertical Stack - Natural Scroll */}
        <div className="md:hidden flex flex-col gap-8 px-6 w-full pb-10">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-[400px] rounded-xl overflow-hidden bg-brand-white/5 border border-brand-white/10 flex-shrink-0 active:scale-95 transition-transform"
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D2E] via-[#2A2D2E]/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-brand-yellow font-mono text-sm block mb-2">
                  {project.id} // {project.category}
                </span>
                <h3 className="text-xl font-bold text-brand-white mb-2 flex items-center justify-between">
                  {project.title}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </h3>
                <p className="text-brand-white/80 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}