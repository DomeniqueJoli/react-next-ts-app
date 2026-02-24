"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center p-6 relative overflow-hidden text-slate-800">
      
      {/* --- TWINBRU-INSPIRED TEXTURED BACKGROUND ANIMATIONS --- */}
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.08] mix-blend-color-burn">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

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

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/60 shadow-2xl relative z-10 text-center"
      >
        <div className="flex justify-center mb-6 text-emerald-600">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <Flower2 size={48} className="text-rose-400 drop-shadow-sm" />
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-rose-500 mb-2">
          Welcome Back
        </h1>
        <p className="text-slate-500 mb-8 font-medium">Sign in to continue your mindful journey.</p>
        
        <form className="flex flex-col gap-4 text-left" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-400" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-400" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 group"
          >
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="mt-8 text-sm text-slate-500">
          Don't have an account? <Link href="#" className="text-emerald-600 font-bold hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </main>
  );
}
