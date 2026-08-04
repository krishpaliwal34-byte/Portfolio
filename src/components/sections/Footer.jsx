"use client";

import React from "react";
import { Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full border-t border-slate-900 bg-[#030014]/90 py-8 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-sm">
            <Code2 className="w-4 h-4" />
          </div>

          <span className="text-xs sm:text-sm font-display font-semibold text-slate-300 tracking-wide">
            Krish Paliwal
          </span>
        </div>

        <p className="text-[10px] sm:text-xs text-slate-500 font-light font-mono text-center sm:text-left">
          &copy; {new Date().getFullYear()} Krish Paliwal. All Rights Reserved.
          Crafted with Next.js & Framer Motion.
        </p>

        <button
          onClick={handleScrollTop}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer"
        >
          Back to Top
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}