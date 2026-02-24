import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "Brainbloom",
  description: "Escape Brainroot. Discover mindful activities to nourish your mind and soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-800 min-h-screen flex flex-col`}
      >
        {/* Bulletproof Fixed Background Layer */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-stone-50 via-rose-50 to-emerald-50" />
        
        <Navbar />
        <div className="pt-28 pb-12 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
