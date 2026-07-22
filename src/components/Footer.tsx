import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-gray/50 bg-brand-dark py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-brand-white font-bold text-xl mb-2">JLPVC</p>
          <p className="text-brand-white/50 text-sm font-mono">SYSTEMS ONLINE. ALL PROTOCOLS ACTIVE.</p>
        </div>
        <div className="flex space-x-6 text-brand-white/70 text-sm">
          <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}