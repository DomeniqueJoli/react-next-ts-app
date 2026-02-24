"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Flower2, Users, Loader2, CircleDollarSign, Activity as ActivityIcon, Link as LinkIcon, Bookmark, CheckCircle2 } from "lucide-react";

interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export default function Home() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isSaved, setIsSaved] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const fetchActivity = async () => {
    setIsLoading(true);
    setError(null);
    setIsSaved(false);
    setIsDone(false);
    try {
      const res = await fetch("https://bored.api.lewagon.com/api/activity");
      if (!res.ok) {
        if (res.status === 429) throw new Error("Too many requests. Take a deep breath and try again.");
        throw new Error("Failed to fetch activity");
      }
      const data = await res.json();
      setActivity(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (!activity) return;
    const saved = JSON.parse(localStorage.getItem('brainbloom_saved') || '[]');
    if (!saved.some((a: Activity) => a.key === activity.key)) {
      localStorage.setItem('brainbloom_saved', JSON.stringify([activity, ...saved]));
    }
    setIsSaved(true);
  };

  const handleDone = () => {
    if (!activity) return;
    const completed = JSON.parse(localStorage.getItem('brainbloom_completed') || '[]');
    if (!completed.some((a: Activity) => a.key === activity.key)) {
      localStorage.setItem('brainbloom_completed', JSON.stringify([activity, ...completed]));
    }
    setIsDone(true);
  };

  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center p-6 relative overflow-hidden text-slate-800">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20vw] -left-[20vw] w-[50vw] h-[50vw] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20vw] -right-[20vw] w-[60vw] h-[60vw] bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"
      />
      
      <div className="z-10 max-w-2xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 mt-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-emerald-600">
            <Flower2 size={40} className="animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-500 to-rose-400 mb-4 drop-shadow-sm">
            Brainbloom
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-md mx-auto">
            Escape Brainroot. Discover mindful activities to nourish your mind and soul.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={fetchActivity}
          disabled={isLoading}
          className="relative group overflow-hidden rounded-full bg-white px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-emerald-50 flex items-center gap-3"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-rose-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          {isLoading ? (
            <Loader2 className="animate-spin text-emerald-600" size={24} />
          ) : (
            <Sparkles className="text-emerald-600 group-hover:text-rose-500 transition-colors" size={24} />
          )}
          <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-rose-500">
            {isLoading ? "Blooming..." : "Generate Activity"}
          </span>
        </motion.button>

        <div className="mt-12 w-full min-h-[200px] flex justify-center items-start">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-red-50 text-red-600 p-6 rounded-3xl w-full border border-red-100 shadow-sm"
              >
                <p>{error}</p>
              </motion.div>
            )}

            {activity && !error && (
              <motion.div
                key={activity.key}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] w-full shadow-xl border border-white/60 relative overflow-hidden text-left"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-rose-300" />
                
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide uppercase border border-emerald-100">
                    {activity.type}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                  {activity.activity}
                </h2>
                
                {/* Extra Info Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mt-6 pt-6 border-t border-slate-100/60">
                  <div className="flex items-center gap-3 bg-stone-50/80 border border-stone-100 px-4 py-3 rounded-xl">
                    <Users size={20} className="text-emerald-500" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Participants</span>
                      <span className="font-semibold text-slate-700">{activity.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-stone-50/80 border border-stone-100 px-4 py-3 rounded-xl">
                    <CircleDollarSign size={20} className="text-rose-400" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Cost</span>
                      <span className="font-semibold text-slate-700">
                        {activity.price === 0 ? 'Free' : activity.price < 0.3 ? 'Low' : activity.price < 0.6 ? 'Medium' : 'High'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-stone-50/80 border border-stone-100 px-4 py-3 rounded-xl">
                    <ActivityIcon size={20} className="text-emerald-500" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Effort / Time</span>
                      <span className="font-semibold text-slate-700">
                        {activity.accessibility < 0.3 ? 'Effortless' : activity.accessibility < 0.7 ? 'Moderate' : 'Challenging'}
                      </span>
                    </div>
                  </div>

                  {activity.link ? (
                    <div className="flex items-center gap-3 bg-stone-50/80 border border-stone-100 px-4 py-3 rounded-xl">
                      <LinkIcon size={20} className="text-rose-400" />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Resource</span>
                        <a href={activity.link} target="_blank" rel="noreferrer" className="font-semibold text-emerald-600 truncate hover:underline">
                          View Link
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 bg-stone-50/80 border border-stone-100 px-4 py-3 rounded-xl opacity-60">
                      <LinkIcon size={20} className="text-slate-400" />
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Resource</span>
                        <span className="font-semibold text-slate-500">None</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions Section */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-slate-100/60">
                  <button 
                    onClick={handleSave} 
                    disabled={isSaved}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all ${isSaved ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50/50'}`}
                  >
                    <Bookmark size={20} className={isSaved ? 'fill-rose-200' : ''} />
                    {isSaved ? "Saved for later" : "Save for later"}
                  </button>
                  
                  <button 
                    onClick={handleDone} 
                    disabled={isDone}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all ${isDone ? 'bg-emerald-500 text-white shadow-md' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm hover:shadow-md'}`}
                  >
                    <CheckCircle2 size={20} />
                    {isDone ? "Completed!" : "Mark as Done"}
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
