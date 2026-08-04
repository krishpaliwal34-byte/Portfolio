"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement using spring physics
  const springConfig = { damping: 35, stiffness: 200, mass: 0.8 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

 useEffect(() => {
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 250);
    mouseY.set(e.clientY - 250);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {/* Interactive mouse follow glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-60 filter blur-[80px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(0, 0, 0, 0) 80%)",
        }}
      />
      
      {/* Ambient background glows for mobile & added depth */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-950/20 filter blur-[150px] pointer-events-none animate-pulse-slow" />
    </div>
  );
}
