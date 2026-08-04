"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Layout, Database, Settings, Server, Terminal } from "lucide-react";
import Card from "../ui/Card";


const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    glow: "cyan",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js 15/16", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 55 },
      { name: "HTML5 & CSS3", level: 95 }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-5 h-5 text-purple-400" />,
    glow: "purple",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 86 },
      { name: "MongoDB", level: 82 },
     
    ]
  },
  {
    title: "Version Control & Utilities",
    icon: <Settings className="w-5 h-5 text-yellow-400" />,
    glow: "default",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 85 },
      { name: "Deployment (Netlify/Render)", level: 80 }
    ]
  }
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4 text-left last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs sm:text-sm font-semibold text-slate-300">{name}</span>
        <span className="text-xs font-mono font-bold text-cyan-400">{level}%</span>
      </div>
    <div className="w-full h-2 bg-slate-900/60 rounded-full overflow-hidden">
       <motion.div
  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
  style={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-cyan-950/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-purple-400 tracking-wider mb-4 border border-purple-500/10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BrainCircuit className="w-3.5 h-3.5" /> Core Technologies
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expertise That Drives <br />
            <span className="text-gradient">Seamless Visual Experiences</span>
          </motion.h2>
        </div>

        {/* Skill Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              glowColor={category.glow}
              variants={cardVariants}
             className="flex flex-col h-full w-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-md">
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white text-left">
                  {category.title}
                </h3>
              </div>

              {/* Skills Bars List */}
              <div className="flex-grow flex flex-col gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Mini tech badge cloud footer */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "GitHub", "Netlify", "Render"].map((tech, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900/50 border border-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
