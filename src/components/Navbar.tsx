import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div className={`transition-all duration-500 rounded-full border ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl py-3 px-6' : 'bg-slate-950/40 backdrop-blur-md border-slate-800/50 py-3 px-6'}`}>
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Sirgenix Logo" className="h-7 w-auto object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight text-white leading-none">
                Sirgenix<span className="text-brand-cyan">.ai</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a href="#contact" className="group flex items-center gap-2 px-5 py-2 text-sm font-medium bg-brand-cyan text-slate-950 rounded-full hover:bg-brand-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-slate-300 bg-slate-900/50 rounded-full border border-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 10 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl mt-2 shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-display font-medium text-slate-300 hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-800">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 bg-brand-cyan text-slate-950 font-medium rounded-full hover:bg-brand-cyan/90 transition-all">
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
