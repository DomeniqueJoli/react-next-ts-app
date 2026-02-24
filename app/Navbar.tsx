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
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
      <nav className="bg-gradient-to-r from-stone-50/80 via-rose-50/80 to-emerald-50/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full p-1.5 flex items-center gap-1 md:gap-2 pointer-events-auto transition-all">
        <Link href="/" className="flex items-center gap-2 text-emerald-700 font-bold text-lg tracking-tight px-4 pr-5 border-r border-emerald-200/50">
          <Flower2 size={22} className="text-rose-400" />
          <span className="hidden sm:block">Brainbloom</span>
        </Link>
        <div className="flex items-center px-1 gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive ? "text-emerald-800" : "text-slate-600 hover:text-emerald-700 hover:bg-white/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/70 rounded-full border border-white/80 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} className={isActive ? "text-emerald-600" : "opacity-70"} />
                  <span className="hidden md:block">{link.label}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
