"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Flower2, Home, HelpCircle, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/why-brainrot", label: "What is Brainroot?", icon: HelpCircle },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 sm:px-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl bg-gradient-to-r from-stone-50/90 via-rose-50/90 to-emerald-50/90 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full p-2 flex items-center justify-between pointer-events-auto transition-all"
      >
        <Link href="/" className="group flex items-center gap-2 text-emerald-700 font-bold text-lg tracking-tight px-4 outline-none">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Flower2 size={24} className="text-rose-400 drop-shadow-sm" />
          </motion.div>
          <span className="hidden sm:block">Brainbloom</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-2 pr-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link key={link.href} href={link.href} className="relative outline-none">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive ? "text-emerald-800" : "text-slate-600 hover:text-emerald-700 hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/80 rounded-full border border-white shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.div
                      initial={false}
                      animate={{ 
                        scale: isActive ? 1.1 : 1, 
                        rotate: isActive ? [0, -10, 10, 0] : 0 
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Icon size={18} className={isActive ? "text-emerald-600" : "opacity-70"} />
                    </motion.div>
                    <span className="hidden md:block">{link.label}</span>
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
