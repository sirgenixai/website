import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#080d19] border-y border-white/[0.02] relative z-10 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden"
      >
        {/* Background Gradients using our theme colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-cyan opacity-90 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-medium text-white mb-6 leading-tight max-w-2xl mx-auto">
            Lets Deliver, Lets Partner, Lets Create.
          </h2>
          
          <p className="text-white md:text-lg font-light mb-12 max-w-3xl mx-auto">
            We deliver innovation that drives real impact, powered by AI and engineered with precision. We partner to turn bold ideas into scalable products, working side by side to accelerate growth and redefine industries. We create solutions that shape the future—transforming vision into reality and setting new standards for what’s possible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
