"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  "Hello",     // English
  "नमस्ते!",   // Hindi
  "হ্যালো",   // Bengali
  "ہیلو",      // Urdu
  "નમસ્તે",      // gujarati
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!",// Punjabi
  "Welcome"   
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (index === GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 350);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014]"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle glowing liquid elements in loading screen background */}
          <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute w-[200px] h-[200px] bg-cyan-600/5 rounded-full blur-[60px] animate-float-slow bottom-10 left-10" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Word swap container */}
            <div className="overflow-hidden h-20 flex items-center justify-center">
              <motion.span
                key={index}
                className="text-4xl md:text-6xl font-display font-bold text-gradient bg-clip-text"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {GREETINGS[index]}
              </motion.span>
            </div>
            
            {/* Loader indicator bar */}
            <div className="w-48 h-[2px] bg-slate-800/80 rounded-full overflow-hidden mt-6">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
