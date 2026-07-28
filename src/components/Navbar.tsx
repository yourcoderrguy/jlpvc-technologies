"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Updated Logo reflecting FIRST CHOICE _260725_094032.pdf */}
        <Link href="/" className="flex flex-col relative z-50 group">
          <span className="text-2xl font-bold tracking-tight text-brand-blue group-hover:text-brand-orange transition-colors">
            JLPVC
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange group-hover:text-brand-blue transition-colors -mt-1">
            TECHNOLOGIES
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link 
                key={link.path} 
                href={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
                className={`relative px-4 py-2 transition-colors ${
                  isActive || hoveredPath === link.path ? "text-brand-white" : "text-brand-white/70"
                }`}
              >
                {link.name}
                {hoveredPath === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-brand-yellow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="bg-brand-blue text-brand-white px-6 py-2.5 rounded font-semibold hover:bg-brand-orange hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all">
            Book a Call
          </Link>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-white p-2 relative z-50 focus:outline-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark border-b border-brand-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.path ? "text-brand-orange" : "text-brand-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-brand-white/10">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-brand-blue text-brand-white px-5 py-3 rounded font-semibold w-full active:scale-95 transition-transform"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}