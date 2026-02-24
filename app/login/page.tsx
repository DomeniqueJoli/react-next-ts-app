import Link from "next/link";
import { Flower2 } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center p-6 text-slate-800">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-white/60 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
            <Flower2 size={36} className="text-emerald-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Welcome Back</h1>
        <p className="text-slate-500 mb-8">Sign in to sync your mindful streak.</p>
        
        <div className="flex flex-col gap-4">
          <button className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
            Continue with GitHub
          </button>
          <button className="w-full py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
            Continue with Google
          </button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-stone-50 text-slate-500">Or continue as guest</span>
            </div>
          </div>
          
          <Link href="/dashboard" className="w-full py-3 px-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-xl font-semibold transition-colors">
            Go to Dashboard (Demo)
          </Link>
        </div>
      </div>
    </main>
  );
}
