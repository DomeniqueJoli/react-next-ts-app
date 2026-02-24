import { Flower2, BrainCircuit, BatteryWarning, HeartPulse } from "lucide-react";

export default function WhyBrainrot() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/60 mt-8 mb-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <BatteryWarning size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-rose-500 mb-4">
            What is Brainroot?
          </h1>
          <p className="text-lg text-slate-500 max-w-xl">
            Brainroot is the digital decay of your attention span caused by chronic <strong>doomscrolling</strong>. It's that foggy, depleted feeling from endlessly scrolling through negative or mindless feeds that fundamentally alters how your brain processes information and regulates mood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-stone-50 border border-stone-100 p-6 rounded-2xl">
            <BrainCircuit className="text-emerald-500 mb-4" size={28} />
            <h3 className="text-xl font-bold text-slate-700 mb-2">Dopamine Exhaustion</h3>
            <p className="text-slate-600 leading-relaxed">
              Short-form content provides rapid, unnatural spikes of dopamine. Over time, your baseline drops, making normal, slower activities feel boring and unrewarding.
            </p>
          </div>
          
          <div className="bg-stone-50 border border-stone-100 p-6 rounded-2xl">
            <HeartPulse className="text-rose-400 mb-4" size={28} />
            <h3 className="text-xl font-bold text-slate-700 mb-2">Increased Anxiety</h3>
            <p className="text-slate-600 leading-relaxed">
              Algorithms naturally favor outrage and negative news to keep you engaged. Consuming this constantly puts your nervous system in a perpetual state of "fight or flight."
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-center">
          <Flower2 className="text-emerald-600 mx-auto mb-3" size={28} />
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">The Brainbloom Solution</h3>
          <p className="text-emerald-700/80">
            We built this space to give you one single, mindful activity at a time. No infinite feeds. No algorithms. Just a gentle nudge back to the real world.
          </p>
        </div>
      </div>
    </main>
  );
}
