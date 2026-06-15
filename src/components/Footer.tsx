export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 border-x-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4 group inline-flex">
              <img src="/logo.png" alt="Sirgenix Logo" className="h-7 w-auto object-contain" />
              <span className="font-display font-medium text-2xl tracking-tight text-white leading-none">
                Sirgenix<span className="text-slate-500">.ai</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm font-medium mt-4">
              contact@sirgenix.ai
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-white font-medium text-sm">Platform</span>
              <a href="#home" className="text-slate-500 text-sm hover:text-brand-cyan transition-colors">Home</a>
              <a href="#about" className="text-slate-500 text-sm hover:text-brand-cyan transition-colors">About Us</a>
              <a href="#services" className="text-slate-500 text-sm hover:text-brand-cyan transition-colors">Services</a>
              <a href="#contact" className="text-slate-500 text-sm hover:text-brand-cyan transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Massive Logo Wordmark */}
        <div className="w-full flex justify-center py-10 opacity-10 pointer-events-none">
          <h2 className="text-[14vw] font-display font-bold text-white tracking-tighter leading-none select-none">
            Sirgenix.ai
          </h2>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Sirgenix Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>

      </div>
    </footer>
  );
}
