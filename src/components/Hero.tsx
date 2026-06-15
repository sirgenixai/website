import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      
      {/* Abstract Glowing Arc Background */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[150%] max-w-[1400px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/20 to-transparent blur-[120px] rounded-[100%]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-brand-blue/30 blur-[150px] rounded-[100%]" />
        {/* Crisp edge for arc */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-2/3 h-[200px] border-t-2 border-brand-cyan/40 blur-[4px] rounded-[100%]" />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-2/3 h-[200px] border-t border-white/20 rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md">
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">AI-First Hub</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="text-xs font-medium text-slate-300">Strategic Partnership</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Deliver, Partner, <br className="hidden md:block" />
            <span className="text-slate-400">Create.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            AI-powered delivery, partnership, product creation. We’re your strategic partners. With deep domain expertise, cutting-edge AI tools, and a proven track record, we help you scale smart and fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-medium rounded-full hover:scale-105 hover:bg-brand-cyan transition-all duration-300 gap-2 flex items-center justify-center">
              Our Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white font-medium rounded-full border border-slate-700 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group">
              About Us
              <ChevronRight className="w-4 h-4 text-brand-cyan" />
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
