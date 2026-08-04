"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Clock } from "lucide-react";
import Card from "../ui/Card";


const TIMELINE_DATA = [
  {
    type: "experience",
    title: "Full Stack Engineer Intern",
    subtitle: "VybTek IT Solution Udaipur",
    duration: "June 2026 - July 2026",
    glow: "cyan",
    description: [
      "Contributing to the development of responsive user dashboards using React and Next.js.",
      "Building and documenting API integrations with Node.js and Express.",
      "Collaborating in agile sprint planning, testing features in staging, and resolving responsive design issues."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "V.B.R.I (Vidhya Bhawan Rural Institude Udaipur)",
    duration: "2024 - Present",
    glow: "purple",
    description: [
      "Studying core Computer Science curriculum: Data Structures, Object-Oriented Programming (OOPs), Database Management Systems (DBMS), and Programming Languages(C,C++,Java)",
      "Applying academic logic directly to software engineering principles and complex algorithm solving.",
      "Participating in coding , leading tech clubs, and maintaining strong academic grading."
    ]
  },
];

export default function ExperienceEducation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
      id="timeline"
      className="relative py-24 overflow-hidden"
    >
      {/* Background abstract elements */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[350px] h-[350px] bg-cyan-950/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-purple-400 tracking-wider mb-4 border border-purple-500/10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock className="w-3.5 h-3.5" /> Timeline
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education & <span className="text-gradient">Experience Journey</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 ml-4 sm:ml-8 pl-8 sm:pl-12 py-4">
          
          {/* Vertical Timeline Tracker line overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            {TIMELINE_DATA.map((item, index) => {
              const Icon = item.type === "education" ? GraduationCap : Briefcase;
              const accentColor = item.glow === "purple" ? "text-purple-400" : "text-cyan-400";
              const dotGlowColor = item.glow === "purple" ? "shadow-[0_0_15px_rgba(168,85,247,0.8)]" : "shadow-[0_0_15px_rgba(6,182,212,0.8)]";
              const borderBgColor = item.glow === "purple" ? "bg-purple-500" : "bg-cyan-500";

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group text-left"
                >
                  {/* Timeline node icon */}
                  <div className={`absolute left-[-48px] sm:left-[-64px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-slate-800 bg-[#030014] z-10 transition-transform duration-300 group-hover:scale-110 shadow-md ${dotGlowColor}`}>
                    <Icon className={`w-4 h-4 ${accentColor}`} />
                  </div>

                  {/* Date badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/40 border border-slate-850 text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wide mb-3">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </div>

                  {/* Card containing description */}
                  <Card glowColor={item.glow} className="relative p-5 sm:p-6 overflow-hidden">
                    {/* Glowing blur in the background of the card */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10 pointer-events-none ${borderBgColor}`} />
                    
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className={`text-xs sm:text-sm font-semibold mb-4 ${accentColor}`}>
                      {item.subtitle}
                    </h4>

                    {/* Bullet descriptions */}
                    <ul className="flex flex-col gap-2.5">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${borderBgColor}`} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
