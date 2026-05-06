'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ShieldCheck, Zap, LineChart, Sparkles } from 'lucide-react';

const PRODUCTS = [
  { id: 'lockbox', title: 'CŪPR Lockbox Alpha', desc: 'Secure, climate-controlled prototype. Extremely limited production run for early backers.', type: 'Pre-Order' },
  { id: 'foundation', title: 'Foundation Pipe Series 1', desc: 'First edition medical-grade glass systems with serial numbers.', type: 'Purchase' },
  { id: 'module', title: 'Thermal Core Early Access', desc: 'Beta testing unit for our patent-pending thermal core innovations.', type: 'Contribute' },
];

const INITIATIVES = [
  { title: 'The Founders Club', desc: 'Direct access to our R&D roadmap, voting rights on future colorways, and invites to covert testing events.' },
  { title: 'Zero-Waste Packaging', desc: 'Partnering with sustainable material engineers to ensure our entire supply chain leaves no trace.' },
];

export default function JoinPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal shortly after entry
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      
      {/* Modal / Pop-up */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-neutral-900 border border-white/10 rounded-2xl max-w-md w-full relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" aria-hidden />
              </button>

              <div className="p-8 pb-10">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-2xl font-light tracking-tight mb-2 text-white">Join the Vanguard.</h3>
                <p className="text-sm text-neutral-400 font-light mb-8">
                  Create an account or join the CŪPR newsletter to get exclusive early access to specialty products, investment rounds, and highly classified R&D drops.
                </p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jack@example.com" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-mono text-xs uppercase tracking-widest py-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Request Access <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <p className="text-[10px] text-neutral-600 text-center mt-6">
                  By joining, you agree to our Terms of Service and early-backer agreements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Early Access Portal</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter">
            Build the Future <br className="hidden md:block"/>
            <span className="italic text-neutral-500">of CŪPR.</span>
          </h1>
          <p className="max-w-xl text-neutral-400 font-light text-lg leading-relaxed">
            This is where our most dedicated supporters gain access to specialty product runs, strategic initiatives, and exclusive investment opportunities.
          </p>
        </div>
      </section>

      {/* Specialty Products */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight">Specialty Products</h2>
            <p className="text-neutral-500 font-light mt-2 max-w-md">Limited stock runs and beta hardware designed for early adopters.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-neutral-950 border border-white/10 rounded-2xl flex flex-col hover:border-white/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono border border-white/20 rounded-full px-3 py-1 text-neutral-400 uppercase tracking-widest">
                  {product.type}
                </span>
                <ShieldCheck className="w-5 h-5 text-neutral-600" />
              </div>
              <h3 className="text-lg font-light text-white mb-2">{product.title}</h3>
              <p className="text-sm text-neutral-500 font-light flex-grow">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Initiatives & Investment */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Initiatives */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight flex items-center gap-3">
                <Zap className="w-6 h-6 text-neutral-400" /> Initiatives
              </h2>
              <p className="text-neutral-500 font-light mt-2">Active programs driving our ecosystem forward.</p>
            </div>
            
            <div className="space-y-6">
              {INITIATIVES.map((init, i) => (
                <div key={i} className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <h4 className="text-white font-medium mb-2">{init.title}</h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">{init.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investments */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight flex items-center gap-3">
                <LineChart className="w-6 h-6 text-neutral-400" /> Investment Opportunities
              </h2>
              <p className="text-neutral-500 font-light mt-2">Scale with us as we redefine the market.</p>
            </div>
            
            <div className="p-8 border border-white/10 rounded-2xl bg-neutral-950 flex flex-col items-start h-full">
              <span className="text-[10px] font-mono border border-white/20 rounded-full px-3 py-1 text-neutral-400 uppercase tracking-widest mb-6">
                Series Seed
              </span>
              <h3 className="text-2xl font-light text-white mb-4">Strategic Backer Allocation</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                We are opening up a strictly limited allocation of equity to strategic community members. Help fund our upcoming patent filings, scalable production lines, and digital expansion.
              </p>
              <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-white text-black text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-neutral-200 transition-colors">
                Apply to Invest
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}