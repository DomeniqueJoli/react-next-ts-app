import Link from "next/link";
import { Flower2, ArrowRight, BrainCircuit, HeartPulse } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center p-6 text-slate-800 text-center relative overflow-hidden">
      <div className="flex items-center justify-center gap-3 mb-6 text-emerald-600">
        <Flower2 size={64} className="animate-pulse drop-shadow-md" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-500 to-rose-400 mb-6 drop-shadow-sm">
        Reclaim Your Mind.
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
        Brainbloom is the ultimate antidote to Brainroot—the mental exhaustion caused by endless doomscrolling. Stop letting algorithms hack your dopamine. Get one mindful, actionable activity at a time and reconnect with the real world.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
        <Link 
          href="/login" 
          className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          Start Your Journey <ArrowRight size={20} />
        </Link>
        <Link 
          href="/why-brainrot" 
          className="bg-white/80 backdrop-blur-md text-emerald-700 border border-emerald-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-sm flex items-center justify-center"
        >
          What is Brainroot?
        </Link>
      </div>

      {/* Feature Highlight */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full z-10">
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm text-left">
          <BrainCircuit className="text-emerald-500 mb-4" size={28} />
          <h3 className="text-xl font-bold text-slate-700 mb-2">Beat the Algorithm</h3>
          <p className="text-slate-600 text-sm">Replace infinite feeds with finite, rewarding tasks that restore your attention span.</p>
        </div>
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm text-left">
          <HeartPulse className="text-rose-400 mb-4" size={28} />
          <h3 className="text-xl font-bold text-slate-700 mb-2">Lower Anxiety</h3>
          <p className="text-slate-600 text-sm">Step away from the screen and engage in activities proven to lower resting heart rates and stress.</p>
        </div>
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm text-left">
          <Flower2 className="text-emerald-500 mb-4" size={28} />
          <h3 className="text-xl font-bold text-slate-700 mb-2">Track Your Growth</h3>
          <p className="text-slate-600 text-sm">Build a streak of mindful days. Look back on all the offline activities you've completed.</p>
        </div>
      </div>
    </main>
  );
}
