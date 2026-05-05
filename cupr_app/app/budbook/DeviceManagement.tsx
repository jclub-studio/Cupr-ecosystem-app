'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bluetooth, Thermometer, Palette, Clock, RefreshCw, CheckCircle2 } from 'lucide-react';

// Circular Dial Component
function CircularDial({ 
  value, 
  min, 
  max, 
  onChange 
}: { 
  value: number; 
  min: number; 
  max: number; 
  onChange: (val: number) => void 
}) {
  const dialRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const calculateValueFromAngle = useCallback((clientX: number, clientY: number) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle in degrees (0 is top)
    let angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    angle += 90; // Shift 0 to top
    if (angle < 0) angle += 360;

    // Use a 270 degree track (-135 to 135 deg roughly, or just simple map)
    const startAngle = 45; // Bottom leftish
    const endAngle = 315; // Bottom rightish
    const totalAngle = endAngle - startAngle;

    let progress = 0;
    if (angle >= startAngle && angle <= endAngle) {
       progress = (angle - startAngle) / totalAngle;
    } else if (angle > endAngle && angle <= 360) {
       progress = 1;
    } else {
       progress = 0;
    }

    const newVal = min + progress * (max - min);
    onChange(Math.max(min, Math.min(max, Math.round(newVal))));
  }, [min, max, onChange]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    calculateValueFromAngle(e.clientX, e.clientY);
  };

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMove = (e: PointerEvent) => calculateValueFromAngle(e.clientX, e.clientY);
      const handleGlobalUp = () => setIsDragging(false);
      window.addEventListener('pointermove', handleGlobalMove);
      window.addEventListener('pointerup', handleGlobalUp);
      return () => {
        window.removeEventListener('pointermove', handleGlobalMove);
        window.removeEventListener('pointerup', handleGlobalUp);
      }
    }
  }, [isDragging, calculateValueFromAngle]);

  const progress = (value - min) / (max - min);
  const trackStroke = 10;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  // Make gap at bottom
  const arcLength = 0.75 * circumference; 
  const gap = circumference - arcLength;
  const dashoffset = circumference - (progress * arcLength);
  const angle = 135 + (progress * 270);

  return (
    <div 
      className="relative flex items-center justify-center w-48 h-48 mx-auto touch-none select-none cursor-grab active:cursor-grabbing"
      ref={dialRef}
      onPointerDown={handlePointerDown}
      style={{ touchAction: 'none' }}
    >
      <svg className="absolute inset-0 w-full h-full transform -rotate-[225deg]" viewBox="0 0 140 140">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" /> {/* orange-500 */}
            <stop offset="100%" stopColor="#ea580c" /> {/* orange-600 */}
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#171717" // neutral-900
          strokeWidth={trackStroke}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${gap}`}
        />
        {/* Value */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={trackStroke}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${gap}`}
          strokeDashoffset={dashoffset}
          className="transition-all duration-100 ease-out"
        />
      </svg>
      
      {/* Knob */}
      <motion.div 
        className="absolute w-full h-full pointer-events-none"
        animate={{ rotate: angle - 135 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.1 }}
      >
         <div className="absolute top-1 left-1/2 -ml-2.5 w-5 h-5 rounded-full bg-white shadow-lg border-2 border-orange-500" />
      </motion.div>

      {/* Center Value */}
      <div className="flex flex-col items-center justify-center relative z-10 pointer-events-none">
         <motion.div className="flex items-start">
           <NumberAnimate value={value} />
           <span className="text-xl text-neutral-400 mt-1">°F</span>
         </motion.div>
      </div>
    </div>
  );
}

// Helper to animate numbers smoothly
function NumberAnimate({ value }: { value: number }) {
  return <motion.span 
     key={value}
     initial={{ opacity: 0.8, y: 2 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.1 }}
     className="text-5xl font-light tracking-tight text-white tabular-nums"
  >
     {value}
  </motion.span>;
}

// Embedded Device Management component
export function DeviceManagement() {
  const [btState, setBtState] = useState<'disconnected' | 'searching' | 'connected'>('disconnected');
  const [temp, setTemp] = useState(485);
  const [activeLed, setActiveLed] = useState('bg-[#FF6321]');
  const [autoOff, setAutoOff] = useState('10m');
  const [fwState, setFwState] = useState<'idle' | 'checking' | 'updated'>('idle');

  // Simulated BT Pairing
  const handlePair = () => {
    if (btState === 'disconnected') {
      setBtState('searching');
      setTimeout(() => setBtState('connected'), 2000);
    } else {
      setBtState('disconnected');
    }
  };

  // Simulated Firmware Update
  const handleCheckUpdate = () => {
    if (fwState === 'idle') {
      setFwState('checking');
      setTimeout(() => setFwState('updated'), 2500);
    } else if (fwState === 'updated') {
       setFwState('idle');
    }
  };

  const ledColors = [
      { bg: 'bg-red-500', hex: '#ef4444' },
      { bg: 'bg-blue-500', hex: '#3b82f6' },
      { bg: 'bg-green-500', hex: '#22c55e' },
      { bg: 'bg-[#FF6321]', hex: '#FF6321' },
      { bg: 'bg-purple-500', hex: '#a855f7' }
  ];

  const activeHex = ledColors.find(c => c.bg === activeLed)?.hex || '#FF6321';

  return (
    <div className="w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Bluetooth Connection */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${btState === 'connected' ? 'bg-blue-500/20 text-blue-400' : 'bg-neutral-800 text-neutral-400'}`}>
                <Bluetooth className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Bluetooth Connection</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Wirelessly sync your CŪPR device to the app to unlock precise environmental controls and real-time session analytics.
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <motion.span 
                 animate={{
                    backgroundColor: btState === 'connected' ? '#22c55e' : btState === 'searching' ? '#eab308' : '#525252',
                    scale: btState === 'searching' ? [1, 1.2, 1] : 1
                 }}
                 transition={{ repeat: btState === 'searching' ? Infinity : 0, duration: 1 }}
                 className="w-2.5 h-2.5 rounded-full" 
              />
              <span className={`text-[11px] font-mono uppercase tracking-widest ${btState === 'connected' ? 'text-green-500' : btState === 'searching' ? 'text-yellow-500' : 'text-neutral-500'}`}>
                {btState === 'searching' ? 'Searching...' : btState === 'connected' ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            <button 
               onClick={handlePair}
               className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${btState === 'connected' ? 'bg-neutral-800 text-white hover:bg-neutral-700' : 'bg-white text-black hover:opacity-90'}`}
            >
              {btState === 'connected' ? 'Disconnect' : 'Pair Device'}
            </button>
          </div>
        </div>

        {/* E-nail Temperature */}
        <div className="col-span-1 md:col-span-2 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                     <Thermometer className="w-5 h-5" />
                   </div>
                   <h4 className="text-[22px] font-medium text-white">E-nail Temperature</h4>
                 </div>
                 <p className="text-neutral-400 font-light text-sm max-w-[280px] leading-relaxed">
                   Dial in the exact temperature for your concentrate. Lower temps output more flavor via terpene preservation, while higher temps provide thicker vapor.
                 </p>
               </div>
               
               <div className="flex-shrink-0 mr-4 mt-2">
                 <CircularDial value={temp} min={300} max={600} onChange={setTemp} />
               </div>
            </div>
          </div>
          
          <div className="pt-2">
             <div className="flex justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500 border-t border-white/10 pt-4">
               <span className={temp < 400 ? 'text-orange-400 transition-colors' : 'transition-colors'}>300°F (Flavor)</span>
               <span className={temp > 500 ? 'text-orange-400 transition-colors' : 'transition-colors'}>600°F (Clouds)</span>
             </div>
          </div>
        </div>

        {/* LED Aesthetics */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative overflow-hidden">
          <motion.div 
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
            animate={{ backgroundColor: activeHex }}
            transition={{ duration: 0.5 }}
          />
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">LED Aesthetics</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Customize the ambient underglow of your CŪPR hardware to match your room&apos;s mood or your current session vibe.
            </p>
          </div>
          <div className="pt-4 flex gap-3 relative z-10">
             {ledColors.map((color, i) => (
               <button 
                 key={i} 
                 onClick={() => setActiveLed(color.bg)}
                 className={`w-8 h-8 rounded-full ${color.bg} border-2 border-neutral-900 shadow-sm focus:outline-none transition-transform hover:scale-110 relative`}
               >
                 {activeLed === color.bg && (
                   <motion.div 
                     layoutId="activeRing"
                     className="absolute -inset-1.5 rounded-full border border-neutral-500" 
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                 )}
               </button>
             ))}
          </div>
        </div>

        {/* Power Management */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Auto-off Timing</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Preserve battery life and ensure safety by setting an automatic shut-off timer after periods of inactivity.
            </p>
          </div>
          <div className="pt-4 flex gap-2 relative bg-black p-1.5 rounded-xl border border-white/10">
             {['5m', '10m', '15m', '30m'].map((time) => (
               <button 
                 key={time} 
                 onClick={() => setAutoOff(time)}
                 className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors relative z-10 ${autoOff === time ? 'text-black' : 'text-neutral-400 hover:text-white'}`}
               >
                 {autoOff === time && (
                   <motion.div 
                     layoutId="activeTiming"
                     className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
                 {time}
               </button>
             ))}
          </div>
        </div>

        {/* System */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-[22px] font-medium text-white">Firmware Data</h4>
              </div>
              <span className={`text-[11px] font-mono px-2 py-1 rounded border transition-colors ${fwState === 'updated' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-white/10 text-white/80 border-white/20'}`}>
                {fwState === 'updated' ? 'v1.0.5' : 'v1.0.4'}
              </span>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Keep your unit updated with the latest heating algorithms and system optimizations for peak performance.
            </p>
          </div>
          <div className="pt-4">
            <button 
              onClick={handleCheckUpdate}
              disabled={fwState !== 'idle'}
              className={`w-full py-3 text-sm font-medium border rounded-lg transition-all flex items-center justify-center gap-2 
                 ${fwState === 'idle' ? 'bg-black text-white border-white/10 hover:bg-neutral-800' : ''}
                 ${fwState === 'checking' ? 'bg-neutral-900 text-neutral-400 border-white/5 cursor-not-allowed' : ''}
                 ${fwState === 'updated' ? 'bg-green-500/10 text-green-400 border-green-500/20 cursor-default' : ''}
              `}
            >
              <AnimatePresence mode="wait">
                 {fwState === 'idle' && (
                   <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                     <RefreshCw className="w-4 h-4" />
                     Check for Updates
                   </motion.div>
                 )}
                 {fwState === 'checking' && (
                   <motion.div key="checking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                     <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                       <RefreshCw className="w-4 h-4 text-orange-400" />
                     </motion.div>
                     Checking...
                   </motion.div>
                 )}
                 {fwState === 'updated' && (
                   <motion.div key="updated" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" />
                     Up to Date!
                   </motion.div>
                 )}
              </AnimatePresence>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
