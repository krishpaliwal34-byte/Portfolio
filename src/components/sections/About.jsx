"use client";

import React, { useState } from "react";
import { motion, animate } from "framer-motion";
import { User, Code, GraduationCap, Laptop } from "lucide-react";
import Card from "../ui/Card";

function Counter({ from, to, duration = 1.8, suffix = "" }) {
  const [count, setCount] = useState(from);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        const controls = animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate: (value) => setCount(Math.round(value)),
        });
        return () => controls.stop();
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-cyan-400 tracking-wider mb-4 border border-cyan-500/10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <User className="w-3.5 h-3.5" /> About Me
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting Digital Solutions <br />
            <span className="text-gradient">
              With Passion & Precision
            </span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Block: Bio Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            variants={itemVariants}
          >
            <Card className="h-full flex flex-col justify-between" glowColor="purple">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Laptop className="w-5.5 h-5.5 text-purple-400" />
                  My Story
                </h3>

                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                  Hi, I'm <strong>Krish Paliwal</strong>, a Full Stack Web
                  Developer and a dedicated Bachelor of Computer Applications
                  (BCA) student. I bridge the gap between structured computing
                  education and cutting-edge software development. My journey is
                  driven by an insatiable curiosity for how internet
                  architectures work and a love for designing sleek, engaging
                  user interfaces.
                </p>

                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                  I specialize in the MERN stack (MongoDB, Express.js, React,
                  Node.js) and Next.js. I love building premium applications
                  with liquid animations, glassmorphic interfaces, and solid
                  backends. I treat coding not just as a technical task, but as
                  a medium of art to create experiences that delight users.
                </p>
              </div>

              {/* Specializations list */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-slate-800/60">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>

                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white">
                      BCA Student
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      Academic Foundation
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Code className="w-4.5 h-4.5" />
                  </div>

                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white">
                      Full Stack Dev
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      MERN & Next.js
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Block: Stats Counter Grid */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <Card
              glowColor="cyan"
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8"
            >
              <span className="text-4xl sm:text-5xl font-display font-black text-cyan-400 mb-2">
                <Counter from={0} to={5} suffix="+" />
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">
                Projects Finished
              </h4>
              <p className="text-xs text-slate-400 font-light">
                E-commerce, portfolios, dashboards
              </p>
            </Card>

            <Card
              glowColor="purple"
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8"
            >
              <span className="text-4xl sm:text-5xl font-display font-black text-purple-400 mb-2">
                <Counter from={0} to={10} suffix="+" />
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">
                Tech Stack
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Languages, libraries & tools
              </p>
            </Card>

            <Card
              glowColor="purple"
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8"
            >
              <span className="text-4xl sm:text-5xl font-display font-black text-purple-400 mb-2">
                <Counter from={0} to={2} suffix="+" />
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">
                Years Coding
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Continuous self & academic growth
              </p>
            </Card>

            <Card
              glowColor="cyan"
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8"
            >
              <span className="text-4xl sm:text-5xl font-display font-black text-cyan-400 mb-2">
                <Counter from={0} to={100} suffix="%" />
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">
                Dedication
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Writing clean, maintainable code
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}