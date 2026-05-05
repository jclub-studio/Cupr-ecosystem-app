'use client';

import { 
  ShoppingCart, 
  MapPin, 
  Cpu, 
  Sparkles, 
  Package, 
  Truck, 
  Layers,
  Search,
  History,
  Zap,
  Info
} from 'lucide-react';

export function ShopTab() {
  return (
    <div className="w-full max-w-5xl space-y-12">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-3xl font-light tracking-tight text-white">BudBook Shop: Intelligent Procurement</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg">
           The modern consumer requires more than a static digital menu. BudBook Shop bridges the gap between hardware, software, and local retail. This is a dynamic, inventory-aware procurement engine engineered to seamlessly source the exact products your palate demands, precisely when you need them.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Live Menu Integration */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Live Menu Integration: Hyper-Local Sourcing</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-xl">
              Stop guessing what is in stock. Our procurement engine interfaces directly with top-tier dispensary inventories in real-time to guarantee availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 pt-4 border-t border-white/10">
             <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <Layers className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-white">Real-Time Accuracy</span>
               </div>
               <p className="text-xs text-neutral-500 leading-relaxed">View live stock levels, batch-specific testing data, and precise terpene profiles.</p>
             </div>
             <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-white">Geo-Optimized</span>
               </div>
               <p className="text-xs text-neutral-500 leading-relaxed">Locate the closest retail partners stocking your preferred strains or CŪPR components.</p>
             </div>
             <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <ShoppingCart className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-white">Unified Cart</span>
               </div>
               <p className="text-xs text-neutral-500 leading-relaxed">Consolidate hardware, accessories, and consumables into a single transaction flow.</p>
             </div>
          </div>
        </div>

        {/* Card 2: Algorithmic Curation */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <History className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Algorithmic Curation</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Your purchase history and session logs power a highly personalized recommendation engine.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative z-10 flex flex-col gap-3">
             <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Terpene Matching:</span> Receive alerts matching your established flavor and effect profiles.</p>
             </div>
             <div className="flex items-start gap-3">
                <Cpu className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Hardware Synergy:</span> Intelligent recommendations for extracts suited for your CŪPR devices.</p>
             </div>
             <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Connoisseur Drops:</span> Priority notifications for limited-batch releases from brand partners.</p>
             </div>

             <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex gap-3 mt-2">
                <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-xs text-orange-400/80 leading-relaxed italic">
                  <span className="font-medium text-orange-400">System Tip:</span> Link your BudBook Journal to the Shop engine to unlock hyper-accurate, effect-based product recommendations.
                </p>
             </div>
          </div>
        </div>

        {/* Card 3: Streamlined Logistics */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Package className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Streamlined Logistics</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              We have engineered the retail logistics to ensure a seamless product handoff.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
             <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Express Procurement</span>
                   <p className="text-xs text-neutral-500">Bypass the queue with dedicated express pickup routing.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Package className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Secure Transactions</span>
                   <p className="text-xs text-neutral-500">Fully compliant, integrated digital payment gateways.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Live Tracking</span>
                   <p className="text-xs text-neutral-500">Monitor your procurement status with real-time logistical updates.</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
