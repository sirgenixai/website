import { motion } from 'motion/react';
import { Send, Rocket, Layers, BrainCircuit } from 'lucide-react';

export default function Services() {
  const features = [
    {
      title: 'Deliver',
      desc: 'AI-powered delivery is designed to optimize engineering for faster, smarter, and more cost-effective service. Backed by a team with proven experience in successfully implementing these solutions, it is engineered for strategic impact—helping businesses improve efficiency, reduce costs, and accelerate speed to market in a rapidly evolving environment.',
      icon: Send,
      size: 'col-span-1 md:col-span-3'
    },
    {
      title: 'Partner',
      desc: 'AI-powered partnership is designed for entrepreneurs with bold ideas and the drive to raise capital, who are on a quest to find their engineering team. From early prototypes to scalable products, we bring ideas to life with speed and precision.',
      icon: Layers,
      size: 'col-span-1 md:col-span-3'
    },
    {
      title: 'Create',
      desc: 'With AI-powered creation, we are building disruptive products that redefine industries and shape the future of technology and business. Backed by advanced AI capabilities and engineering excellence, we are turning bold ideas into scalable solutions.',
      icon: Rocket,
      size: 'col-span-1 md:col-span-3'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-sm font-medium mb-6 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" />
            Software Services Hub
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white max-w-3xl leading-tight">
            We’re An AI First <br className="hidden md:block"/>
            Software Services Hub.
          </h2>
        </div>

        {/* Bento Grid layout but stacked for this content to give it space */}
        <div className="flex flex-col gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start hover:bg-slate-800/80 hover:border-slate-700 transition-all`}
            >
              <div className="w-16 h-16 shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative">
                <item.icon className="w-8 h-8 text-indigo-400 relative z-10" />
                <div className="absolute inset-0 rounded-2xl bg-indigo-400 blur-md opacity-20 z-0"></div>
              </div>
              <div>
                <h4 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
