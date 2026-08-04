"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, ExternalLink, ShoppingCart, ShieldAlert, Layers, UserCheck, CheckCircle } from "lucide-react";
import Card from "../ui/Card";

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

const PROJECTS_DATA = [
  {
    title: "Corvex Company Website",
    description:
      "A modern business website featuring responsive design, animations, service pages, and contact functionality.",
    tags: ["Next.js", "React.js", "CSS", "Framer Motion"],
    githubUrl: "https://github.com/krishpaliwal34-byte/Corvex-Solutions",
    demoUrl: "https://corvex-solutions.vercel.app/",
    isFeatured: true,
    features: [
      "Responsive Layout",
      "Animated UI",
      "SEO Friendly",
      "Contact Form",
    ],
  },

  {
    title: "ManuPlast (Internship Project)",
    description:
      "A responsive plastic manufacturing company website with product management, inquiry system, and modern UI.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    githubUrl: "https://github.com/krishpaliwal34-byte/Manuplast",
    demoUrl: "",
    features: [
      "Responsive Design",
      "Product Catalog",
      "Inquiry Form",
      "Modern UI",
    ],
  },

  {
    title: "PlasticMart (Internship Project)",
    description:
      "A full-stack B2B/B2C e-commerce platform with authentication, seller dashboard, admin panel, cart, wishlist, and order management.",
    tags: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/krishpaliwal34-byte/PlasticMart",
    demoUrl: "",
    features: [
      "JWT Authentication",
      "Seller Dashboard",
      "Admin Panel",
      "Cart & Wishlist",
    ],
  },

  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio showcasing my projects, skills, internship experience, resume, and contact information with a modern responsive design.",
    tags: ["Next.js", "React.js", "Framer Motion", "CSS"],
    githubUrl: "",
    demoUrl: "",
    features: [
      "Responsive Design",
      "Project Showcase",
      "Resume Download",
      "Contact Form",
    ],
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
       ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const featured = PROJECTS_DATA.find(p => p.isFeatured);
  const others = PROJECTS_DATA.filter(p => !p.isFeatured);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      {/* Background design elements */}
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            <Folder className="w-3.5 h-3.5" /> Featured Work
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SaaS-Quality Applications <br />
            <span className="text-gradient">Designed to Perform & Scale</span>
          </motion.h2>
        </div>

        {/* Projects Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10"
        >
          {/* 1. FEATURED PROJECT: PlasticMart */}
          {featured && (
            <motion.div variants={itemVariants} className="w-full">
              <Card glowColor="purple" className="relative p-6 sm:p-10 overflow-hidden group">
                
                {/* Background glow in card */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-600/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-600/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-cyan-600/10 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left: Metadata */}
                  <div className="lg:col-span-7 flex flex-col text-left">
                    <span className="text-xs font-bold font-mono tracking-widest text-purple-400 uppercase mb-2">
                      Featured Project
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                      {featured.description}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {featured.features?.map((feat, index) => {
                        // Pick icon based on feature name
                        let icon = <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />;
                        if (feat.includes("Dashboard")) icon = <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />;
                        if (feat.includes("Authentication")) icon = <UserCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />;
                        if (feat.includes("Cart")) icon = <ShoppingCart className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />;
                        if (feat.includes("Admin")) icon = <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />;

                        return (
                          <div key={index} className="flex items-start gap-2 text-xs text-slate-400">
                            {icon}
                            <span>{feat}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md bg-[#030014]/60 border border-slate-800 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={featured.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-slate-700/60 bg-slate-900/30 hover:bg-slate-900/60 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        Source Code <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Abstract Interactive Mockup Graphic */}
                  <div className="lg:col-span-5 flex justify-center relative">
                    <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-xl overflow-hidden glassmorphism bg-slate-950/70 border border-slate-800 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                      {/* Mockup Header bar */}
                      <div className="w-full px-4 py-2 bg-slate-950/80 border-b border-slate-900 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                        </div>
                       <div className="text-[9px] text-slate-500 font-mono">corvexsolutions.com</div>
                        <div className="w-6" />
                      </div>

                      {/* Mockup Body Content */}
                      <div className="flex-grow p-4 flex flex-col justify-between text-[9px] text-slate-400 font-mono">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                         <span className="text-cyan-400 font-bold">
  Corvex Solutions
</span>

<span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
  Live
</span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 my-2">
                          <div className="bg-[#120833] p-2 rounded border border-purple-500/10 flex flex-col justify-center">
                            <span className="text-[8px] text-slate-500"></span>
                            <span className="text-white font-bold">Web Dev</span>
                          </div>
                          <div className="bg-[#051833] p-2 rounded border border-cyan-500/10 flex flex-col justify-center">
                            <span className="text-[8px] text-slate-500"></span>
                            <span className="text-white font-bold">Digital Marketing</span>
                          </div>
                          <div className="bg-[#05332c] p-2 rounded border border-emerald-500/10 flex flex-col justify-center">
                            <span className="text-[8px] text-slate-500"></span>
                            <span className="text-white font-bold">Video Editing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>
          )}

          {/* 2. GRID OF OTHER PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card glowColor="default" className="flex flex-col justify-between h-full p-6 text-left relative group">
                  <div className="flex flex-col">
                    {/* Header folder icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-md">
                        <Folder className="w-5 h-5 text-cyan-400" />
                      </div>
                      
                      {/* Mini links */}
                      <div className="flex gap-2.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="GitHub Source"
                        >
                          <GithubIcon className="w-4.5 h-4.5" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack & features info */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800/50 text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
