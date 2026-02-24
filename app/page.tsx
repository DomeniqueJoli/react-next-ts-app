"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, ArrowRight, BrainCircuit, HeartPulse, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

// Interactive Spotlight Card Component
function SpotlightCard({ feature, variants }: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = feature.icon;
  
  return (
    <motion.div 
      ref={divRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-left transition-shadow overflow-hidden group"
    >
      {/* The Glow Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: isFocused 
            ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.08), transparent 40%)` 
            : ""
        }}
      />
      
      <div className="relative z-10">
        <div className="bg-stone-50/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white">
          <Icon className={feature.color} size={28} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  // Elegant, Twinbru-inspired staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] // Super smooth deceleration
      }
    }
  };

  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center p-6 text-slate-800 text-center relative overflow-hidden">
      
      {/* --- TWINBRU-INSPIRED TEXTURED BACKGROUND ANIMATIONS --- */}
      
      {/* 1. Fine Noise Texture Overlay (gives it that premium fabric/paper feel) */}
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.08] mix-blend-color-burn">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* 2. Soft Ambient Lighting Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-emerald-300/80 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[15%] w-[60vw] h-[60vw] bg-rose-300/80 rounded-[40%] mix-blend-multiply filter blur-[120px] pointer-events-none"
      />

      {/* 3. Layered, Oversized Line-Art Flowers Blooming (Textured Organic Depth) */}
      <motion.div
        animate={{ scale: [0.95, 1.1, 0.95], rotate: [0, 45, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[30%] -left-[20%] text-emerald-900/[0.08] pointer-events-none"
      >
        <Flower2 className="w-[80vw] h-[80vw]" strokeWidth={0.5} />
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [45, 0, 45] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[10%] -right-[30%] text-rose-900/[0.06] pointer-events-none"
      >
        <Flower2 className="w-[100vw] h-[100vw]" strokeWidth={0.4} />
      </motion.div>

      <motion.div
        animate={{ scale: [1.1, 0.95, 1.1], rotate: [-20, 20, -20] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        className="absolute -bottom-[40%] left-[10%] text-stone-900/[0.08] pointer-events-none"
      >
        <Flower2 className="w-[90vw] h-[90vw]" strokeWidth={0.4} />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl"
      >
        {/* The "Brain Blooming" central icon */}
        <motion.div variants={itemVariants} className="relative flex items-center justify-center mb-10 w-32 h-32">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-emerald-400/50 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-dashed border-rose-400/60 rounded-full"
          />
          
          {/* Flower blooming (no spinning) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute text-rose-500 drop-shadow-xl"
          >
            <Flower2 size={88} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-rose-500 mb-6 drop-shadow-sm pb-2"
        >
          Reclaim Your Mind.
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Brainbloom is the ultimate antidote to Brainroot—the mental exhaustion caused by endless doomscrolling. Stop letting algorithms hack your dopamine. Get one mindful, actionable activity at a time and reconnect with the real world.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-20 z-10 w-full justify-center px-4">
          <Link href="/login" className="group w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
            >
              Start Your Journey 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.div>
          </Link>
          <Link href="/why-brainrot" className="group w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 backdrop-blur-md text-emerald-800 border border-emerald-200/60 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-sm flex items-center justify-center"
            >
              What is Brainroot?
            </motion.div>
          </Link>
        </motion.div>

        {/* Feature Highlight */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 max-w-5xl w-full z-10"
        >
          {[
            { icon: BrainCircuit, color: "text-emerald-500", title: "Beat the Algorithm", desc: "Replace infinite feeds with finite, rewarding tasks that restore your attention span." },
            { icon: HeartPulse, color: "text-rose-400", title: "Lower Anxiety", desc: "Step away from the screen and engage in activities proven to lower resting heart rates and stress." },
            { icon: Sparkles, color: "text-emerald-500", title: "Track Your Growth", desc: "Build a streak of mindful days. Look back on all the offline activities you've completed." }
          ].map((feature, i) => (
            <SpotlightCard key={i} feature={feature} variants={itemVariants} />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
