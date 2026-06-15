import { Shield, Fingerprint, Layers, Cpu, Box } from 'lucide-react';

export default function LogoStrip() {
  const logos = [
    { icon: Shield, name: "Trustcore" },
    { icon: Fingerprint, name: "Verisys" },
    { icon: Layers, name: "Stackflow" },
    { icon: Cpu, name: "Neuralize" },
    { icon: Box, name: "Blockforge" },
  ];

  return (
    <div className="w-full bg-slate-950 py-12 relative z-10 flex flex-col items-center justify-center">
      <p className="text-sm font-medium text-slate-500 mb-8 tracking-widest uppercase">
        Trusted by industry leaders worldwide
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 px-4">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300">
            <logo.icon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
