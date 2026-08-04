"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  glowColor = "default",
  ...props
}) {
  const glowClass =
    glowColor === "purple"
      ? "glow-border-purple"
      : glowColor === "cyan"
      ? "glow-border-cyan"
      : "hover:border-slate-700/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]";

  return (
    <motion.div
      className={`glassmorphism-card rounded-2xl p-6 transition-all duration-300 ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
