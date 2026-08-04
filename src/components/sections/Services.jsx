"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Server, Check, Shield } from "lucide-react";
import Card from "../ui/Card";

const FigmaIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const SERVICES_DATA = [
  {
    title: "Web Development",
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    description: "Structuring, building, and deploying fully responsive web solutions tailored for specific brand profiles. Optimized for fast execution and high visual fidelity.",
    features: ["Responsive layouts", "Cross-browser validation", "Speed optimizations"],
    glow: "cyan"
  },
  {
    title: "Frontend Development",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    description: "Crafting highly interactive, animated, client-side interfaces using React and Next.js. Utilizing Framer Motion to create smooth, natural physics-based animations.",
    features: ["Framer Motion animations", "Dynamic state management", "Liquid design patterns"],
    glow: "purple"
  },
  {
    title: "Full Stack Development",
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    description: "Implementing robust server configurations, API architectures, and data structures. Linking modern frontends with secure backend architectures.",
    features: ["Node.js & Express server design", "MongoDB database structures", "JWT session authentication"],
    glow: "cyan"
  },
  {
  title: "Backend Development",
  icon: <Server className="w-6 h-6 text-purple-400" />,
  description:
    "Building secure and scalable backend systems with REST APIs, authentication, database management, and efficient server-side logic for modern web applications.",
  features: [
    "REST API Development",
    "JWT Authentication",
    "MongoDB Database Management"
  ],
  glow: "purple"
}
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-purple-950/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-cyan-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-cyan-400 tracking-wider mb-4 border border-cyan-500/10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-3.5 h-3.5" /> What I Offer
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Services <br />
            <span className="text-gradient">To Bring Ideas To Life</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES_DATA.map((service, index) => {
            const glowClass = service.glow === "purple" ? "text-purple-400 bg-purple-500/10" : "text-cyan-400 bg-cyan-500/10";
            const checkColor = service.glow === "purple" ? "text-purple-400" : "text-cyan-400";
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
              >
                <Card
                  glowColor={service.glow}
                  className="flex flex-col justify-between h-full p-6 sm:p-8 text-left group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 shadow-md ${glowClass}`}>
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                        Service 0{index + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Features */}
                  <div className="border-t border-slate-900/60 pt-5 mt-auto">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className={`w-3.5 h-3.5 shrink-0 ${checkColor}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
