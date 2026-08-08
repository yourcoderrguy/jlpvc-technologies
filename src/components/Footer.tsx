import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-brand-white/10 bg-[#2A2D2E]/50 backdrop-blur-md py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col items-start">
          <Link href="/" className="bg-brand-white rounded-md p-1 inline-block mb-4 hover:scale-105 transition-transform">
            <Image 
              src="/jlpvc.jpg" 
              alt="JLPVC Technologies Logo" 
              width={100} 
              height={32} 
              style={{ width: "auto", height: "32px" }}
            />
          </Link>
          <p className="text-brand-white/70 text-sm max-w-xs">
            We build reliable digital solutions that save you time and help your business grow.
          </p>
        </div>

        <div className="flex flex-col text-sm text-brand-white/70 space-y-2 md:text-right">
          <p className="font-semibold text-brand-white">Reach Out Directly</p>
          <a href="mailto:jlpvctech@gmail.com" className="hover:text-brand-orange transition-colors">
            jlpvctech@gmail.com
          </a>
          <a href="tel:+2349166177467" className="hover:text-brand-orange transition-colors">
            +234 916 617 7467
          </a>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-brand-white/70 text-sm">
          <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
        </div>
        
      </div>
    </footer>
  );
}