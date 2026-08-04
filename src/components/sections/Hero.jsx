"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, TerminalSquare, Cpu, Globe } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WORDS = [
  "NextJs Developer",
  "FullStack Engineer",
];

function TypingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const word = WORDS[currentWordIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => word.slice(0, prev.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1600); // pause at the end of typing
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      setTypingSpeed(120); // wait before typing next word
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400/80 pr-1 animate-pulse font-mono">
      {currentText}
    </span>
  );
}

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.offsetTop - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Floating abstract liquid elements in background */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[80px] animate-float-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[90px] animate-float-medium" />
      
      {/* Liquid morphic blob in top center */}
      <div className="absolute top-[10%] left-[45%] w-[180px] h-[180px] bg-blue-500/10 blur-[50px] animate-liquid pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-purple-300 tracking-wider mb-6 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Welcome to my digital space
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-white mb-4 leading-none">
              Hi, I'm{" "}
              <span className="text-gradient block mt-2 animate-text-shimmer bg-[linear-gradient(110deg,#c084fc,45%,#60a5fa,55%,#22d3ee)] bg-[length:200%_auto] bg-clip-text">
                Krish Paliwal
              </span>
            </h1>

            {/* Roles */}
           <h2 className="text-lg sm:text-2xl md:text-3xl font-display text-slate-300 font-medium mb-6 flex items-center gap-2 min-h-[40px] whitespace-nowrap">
           BCA Student & <TypingText />
            </h2>

            {/* Bio summary */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
              Specialized in crafting premium, high-performance web applications using 
              React, Next.js, and Node.js. Focused on clean code user interfaces.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              {/* Primary Button */}
              <button
                onClick={() => handleScrollTo("#projects")}
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="flex items-center gap-2 text-sm">
                  View My Work <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => handleScrollTo("#contact")}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700/60 bg-slate-900/30 text-slate-300 font-semibold text-sm hover:text-white hover:border-slate-400 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Let's Talk
              </button>
            </div>

            {/* Floating Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <GithubIcon className="w-4.5 h-4.5" />, url: "https://github.com/krishpaliwal34-byte", name: "GitHub" },
                { icon: <LinkedinIcon className="w-4.5 h-4.5" />, url: "https://www.linkedin.com/in/krishpaliwal167/", name: "LinkedIn" },
                { icon: <Mail className="w-4.5 h-4.5" />, url: "mailto:krishpaliwal34@gmail.com", name: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full glassmorphism text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Liquid morphic blob & mock terminal */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Liquid morphic outline blob behind the terminal */}
            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] bg-gradient-to-tr from-purple-600/30 via-indigo-600/25 to-cyan-500/30 blur-md animate-liquid z-0" />
            
            {/* Floating tech cards around the main terminal */}
            <motion.div
              className="absolute top-[-10px] right-[-20px] glassmorphism rounded-xl px-3 py-1.5 flex items-center gap-2 border border-cyan-500/20 text-xs text-slate-300 shadow-lg z-20 pointer-events-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>React 19</span>
            </motion.div>

            <motion.div
              className="absolute bottom-[20px] left-[-30px] glassmorphism rounded-xl px-3 py-1.5 flex items-center gap-2 border border-purple-500/20 text-xs text-slate-300 shadow-lg z-20 pointer-events-none"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>Next.js 16</span>
            </motion.div>

            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.08] pointer-events-none z-0" />

            {/* Mock IDE/Terminal Code Card */}
            <div className="relative w-full max-w-[400px] glassmorphism bg-[#040118]/70 border border-slate-700/40 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <Terminal className="w-3 h-3" /> krish_developer.jsx
                </div>
                <div className="w-10" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 text-left">
                <p className="text-slate-500">// Developer Information</p>
                <p>
                  <span className="text-purple-400">const</span> developer = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-cyan-400">"Krish Paliwal"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-cyan-400">"Full Stack Web Dev"</span>,
                </p>
                <p className="pl-4">
                  degree: <span className="text-purple-400">"BCA"</span>,
                </p>
                <p className="pl-4">
                  skills: [
                </p>
                <p className="pl-8 text-yellow-400">
                  "React", "Next", "Node", "Express", "MongoDB",
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  focus: <span className="text-emerald-400">"SaaS & Animations"</span>
                </p>
                <p>{"};"}</p>
                
                <div className="mt-4 border-t border-slate-900 pt-3 text-slate-500">
                  <p className="text-slate-400 font-bold">$ npm run dev</p>
                  <p className="text-cyan-400">▲ Next.js 16.2.9</p>
                  <p className="text-emerald-500">- Local: http://localhost:3000</p>
                  <p className="text-slate-500 animate-pulse">- Ready in 0.4s (active)</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Down indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 cursor-pointer hover:text-white transition-colors"
        onClick={() => handleScrollTo("#about")}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">Scroll</span>
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}
