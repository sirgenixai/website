import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080d19] border-y border-white/[0.02] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <div className="px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-sm font-medium mb-6 flex items-center gap-2">
            <Target className="w-4 h-4 text-brand-cyan" />
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white max-w-3xl leading-tight">
            AI First. <br/>
            <span className="text-slate-500">Proven Model.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col max-w-xl"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-medium text-white mb-3">AI First</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  We are a team driven by a single mission: to transform bold ideas into disruptive products that redefine industries. With deep engineering expertise and an AI-first approach, we turn concepts into scalable solutions—delivering innovation with speed, precision, and lasting impact. Our work bridges the gap between vision and reality, creating opportunities for growth in a rapidly evolving world.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-medium text-white mb-3">Proven Model</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Our founders bring decades of experience, having led multiple successful exits to Fortune 500 companies. Over many years, they have created and refined the AI-powered engineering excellence model—an approach that enables us to deliver transformative solutions, partner closely with innovators, and create products that are innovative, scalable, and designed for lasting impact.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand-cyan/10 text-brand-cyan font-medium rounded-full border border-brand-cyan/20 hover:bg-brand-cyan hover:text-slate-950 transition-all duration-300">
                Partner With Us
              </a>
            </div>
          </motion.div>

          {/* Graphic Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] bg-slate-900 border border-slate-800 overflow-hidden relative p-8 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-brand-cyan/5 to-transparent blur-[80px]"></div>
              
              <div className="relative z-10 w-full max-w-sm space-y-6">
                {/* Abstract Data Flow Visual */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-2 w-12 bg-indigo-500 rounded-full"></div>
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-full bg-slate-800/50 rounded-lg overflow-hidden flex">
                      <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="bg-brand-cyan h-full"
                      />
                    </div>
                    <div className="h-6 w-full bg-slate-800/50 rounded-lg overflow-hidden flex">
                      <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        className="bg-brand-blue h-full"
                      />
                    </div>
                    <div className="h-6 w-full bg-slate-800/50 rounded-lg overflow-hidden flex">
                      <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: '92%' }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                        className="bg-indigo-500 h-full"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center text-xs text-slate-400 font-medium">
                    <span>Engineering Excellence</span>
                    <span className="text-white">Active</span>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
