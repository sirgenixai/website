import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/manpblkn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          toast.error(data.errors.map((err: any) => err.message).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              Contact Us
            </h2>
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
              We would love to hear from you. Feel free to contact us by email, or send us your details through the form and we will get back to you at the earliest.
            </p>

            <a href="mailto:contact@sirgenix.ai" className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-cyan hover:bg-slate-800 transition-all text-white font-medium">
              <Mail className="w-5 h-5 text-brand-cyan" />
              contact@sirgenix.ai
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 p-8 sm:p-12 rounded-[2rem] backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400">Name</label>
                  <input type="text" name="name" id="name" required disabled={isSubmitting} className="w-full bg-transparent border-0 border-b border-slate-700 pb-3 text-white focus:outline-none focus:ring-0 focus:border-brand-cyan transition-all rounded-none px-0 disabled:opacity-50" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400">Email</label>
                  <input type="email" name="email" id="email" required disabled={isSubmitting} className="w-full bg-transparent border-0 border-b border-slate-700 pb-3 text-white focus:outline-none focus:ring-0 focus:border-brand-cyan transition-all rounded-none px-0 disabled:opacity-50" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400">Subject</label>
                <input type="text" name="subject" id="subject" required disabled={isSubmitting} className="w-full bg-transparent border-0 border-b border-slate-700 pb-3 text-white focus:outline-none focus:ring-0 focus:border-brand-cyan transition-all rounded-none px-0 disabled:opacity-50" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-400">Message</label>
                <textarea name="message" id="message" rows={4} required disabled={isSubmitting} className="w-full bg-transparent border-0 border-b border-slate-700 pb-3 text-white focus:outline-none focus:ring-0 focus:border-brand-cyan transition-all resize-none rounded-none px-0 disabled:opacity-50" placeholder="Message"></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-3 w-full py-5 bg-white text-slate-950 font-medium rounded-full hover:bg-brand-cyan transition-all duration-300 border shadow-lg border-white disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
