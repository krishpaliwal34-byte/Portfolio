"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
         const top = el.offsetTop;
        const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.offsetTop; - 85; 
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setActiveSection(href.substring(1));
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 md:px-8 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <nav
          className={`flex items-center justify-between w-full max-w-6xl px-6 py-2.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "glassmorphism bg-[#030014]/65 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 text-lg font-display font-bold text-white tracking-wider cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110">
              <Code2 className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display">
              Krish<span className="text-cyan-400"></span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs font-semibold tracking-wide transition-colors duration-300 py-2 px-3 rounded-full hover:text-white ${
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-slate-800/50 border border-slate-700/40 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold tracking-wide text-white rounded-full group bg-gradient-to-br from-purple-600 to-cyan-500 group-hover:from-purple-600 group-hover:to-cyan-500 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 bg-[#030014] rounded-full group-hover:bg-opacity-0">
                Contact Me
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-slate-300 hover:text-white focus:outline-none p-1 rounded-full hover:bg-slate-900/40 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-[76px] z-35 md:hidden glassmorphism bg-[#030014]/90 rounded-2xl border border-slate-800/80 flex flex-col justify-start py-6 px-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <ul className="flex flex-col gap-4 text-left">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block text-base font-semibold tracking-wide py-1.5 px-3 rounded-lg hover:bg-slate-900/40 ${
                      activeSection === item.href.substring(1)
                        ? "text-cyan-400 bg-slate-900/30 font-bold"
                        : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex w-full items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 cursor-pointer"
                >
                  <span className="w-full px-5 py-2.5 bg-[#030014] rounded-full text-center hover:bg-opacity-0 transition-all">
                    Contact Me
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
