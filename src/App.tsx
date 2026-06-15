/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-brand-cyan/30">
      <Toaster theme="dark" position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        {/* <LogoStrip /> Hidden until we have customer logos */}
        <About />
        <div className="w-full h-px bg-slate-800/60"></div>
        <Services />
        <div className="w-full h-px bg-slate-800/60"></div>
        <CTA />
        <div className="w-full h-px bg-slate-800/60"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

