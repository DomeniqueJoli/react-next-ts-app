"use client";

import { useState, useEffect } from "react";
import { User, Award, Flame, Star, Bookmark, CheckCircle2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface Activity {
  activity: string;
  type: string;
  key: string;
}

export default function Profile() {
  const [savedActivities, setSavedActivities] = useState<Activity[]>([]);
  const [completedActivities, setCompletedActivities] = useState<Activity[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSavedActivities(JSON.parse(localStorage.getItem('brainbloom_saved') || '[]'));
    setCompletedActivities(JSON.parse(localStorage.getItem('brainbloom_completed') || '[]'));
  }, []);

  const removeSaved = (key: string) => {
    const updated = savedActivities.filter(a => a.key !== key);
    setSavedActivities(updated);
    localStorage.setItem('brainbloom_saved', JSON.stringify(updated));
  };

  const removeCompleted = (key: string) => {
    const updated = completedActivities.filter(a => a.key !== key);
    setCompletedActivities(updated);
    localStorage.setItem('brainbloom_completed', JSON.stringify(updated));
  };

  if (!mounted) return null;

  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center p-6 text-slate-800">
      <div className="max-w-5xl w-full flex flex-col gap-8 mt-4">
        
        {/* Top Stats Profile Card */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/60 flex flex-col md:flex-row items-center gap-8">
          <div className="relative shrink-0">
            <div className="w-28 h-28 bg-gradient-to-tr from-emerald-400 to-rose-300 rounded-full p-1 shadow-lg">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-emerald-600">
                <User size={48} />
              </div>
            </div>
            <div className="absolute bottom-1 right-0 bg-white p-1.5 rounded-full shadow-md border border-stone-100 text-rose-500">
              <Star size={20} className="fill-current" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-extrabold text-slate-800 mb-1">Your Profile</h1>
            <p className="text-slate-500 font-medium mb-4 md:mb-0">Mindful Explorer</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="flex-1 md:w-32 bg-stone-50 rounded-2xl p-4 border border-stone-100 flex flex-col items-center transition-transform hover:scale-105">
              <Award className="text-emerald-500 mb-1" size={24} />
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Activities</p>
              <p className="text-3xl font-bold text-slate-700">{completedActivities.length}</p>
            </div>
            
            <div className="flex-1 md:w-32 bg-stone-50 rounded-2xl p-4 border border-stone-100 flex flex-col items-center transition-transform hover:scale-105">
              <Flame className="text-rose-400 mb-1" size={24} />
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Day Streak</p>
              <p className="text-3xl font-bold text-slate-700">{completedActivities.length > 0 ? '1' : '0'}</p>
            </div>
          </div>
        </div>

        {/* Lists Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Saved For Later */}
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-100 text-rose-500 rounded-xl">
                <Bookmark size={24} className="fill-rose-200" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Saved for Later</h2>
            </div>
            
            <div className="flex flex-col gap-3">
              {savedActivities.length === 0 ? (
                <div className="text-center py-8 bg-white/40 rounded-2xl border border-dashed border-rose-200">
                  <p className="text-rose-400 font-medium">No saved activities yet.</p>
                  <p className="text-sm text-slate-500 mt-1">Go bloom some ideas!</p>
                </div>
              ) : (
                savedActivities.map((act) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={act.key} className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2 py-1 rounded-md mb-2 inline-block">
                        {act.type}
                      </span>
                      <p className="font-semibold text-slate-700">{act.activity}</p>
                    </div>
                    <button onClick={() => removeSaved(act.key)} className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors shrink-0" title="Remove">
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Completed Activities */}
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Completed</h2>
            </div>
            
            <div className="flex flex-col gap-3">
              {completedActivities.length === 0 ? (
                <div className="text-center py-8 bg-white/40 rounded-2xl border border-dashed border-emerald-200">
                  <p className="text-emerald-500 font-medium">Nothing completed yet.</p>
                  <p className="text-sm text-slate-500 mt-1">Start your mindful journey today!</p>
                </div>
              ) : (
                completedActivities.map((act) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={`comp-${act.key}`} className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md mb-2 inline-block">
                        {act.type}
                      </span>
                      <p className="font-semibold text-slate-700">{act.activity}</p>
                    </div>
                    <button onClick={() => removeCompleted(act.key)} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors shrink-0" title="Remove">
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
