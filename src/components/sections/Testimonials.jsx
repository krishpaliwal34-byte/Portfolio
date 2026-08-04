"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Card from "../ui/Card";


const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Founder & CTO",
    company: "DevScale India",
    content: "Krish was instrumental in building our MVP. His knowledge of Next.js and full-stack integration solved complex state-management problems that other developers struggled with. Highly recommended!",
    rating: 5
  },
  {
    name: "Sofia Rodriguez",
    role: "Senior UI/UX Designer",
    company: "SaaSify Studio",
    content: "Working with Krish was a breeze. He translated my complex Figma interactions into pixel-perfect Next.js and Framer Motion code. His eye for detail and transition micro-animations is world-class.",
    rating: 5
  },
  {
    name: "Rohan Sharma",
    role: "E-Commerce Director",
    company: "Global Logistics",
    content: "The seller panel Krish built for our B2B platform is fast, robust, and extremely intuitive. Our registration conversion rate increased by 35% in just two weeks. Outstanding full-stack delivery!",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (dotIndex) => {
    if (dotIndex > index) {
      setDirection(1);
    } else if (dotIndex < index) {
      setDirection(-1);
    }
    setIndex(dotIndex);
  };

const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
 exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[110px] pointer-events-none" />

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
            <MessageSquare className="w-3.5 h-3.5" /> Testimonials
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client Feedbacks & <br />
            <span className="text-gradient">Co-developer Endorsements</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Main Card Slider */}
          <div className="w-full max-w-2xl min-h-[300px] sm:min-h-[260px] flex items-center justify-center relative px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    handleNext();
                  } else if (info.offset.x > 50) {
                    handlePrev();
                  }
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <Card glowColor="purple" className="relative p-6 sm:p-10 text-left flex flex-col justify-between">
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute right-6 top-6 w-16 h-16 text-purple-500/10 pointer-events-none" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: current.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 italic">
                    "{current.content}"
                  </p>

                  {/* Author Bio */}
                  <div className="border-t border-slate-900/80 pt-5 flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 text-white font-display font-bold text-sm shadow-md">
                      {current.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {current.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light">
                        {current.role} &bull; <span className="text-slate-400 font-medium">{current.company}</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full max-w-2xl mt-8 px-4">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-9 h-9 rounded-full glassmorphism text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 shadow-md transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => handleDotClick(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === index ? "w-6 bg-cyan-400" : "w-2 bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-9 h-9 rounded-full glassmorphism text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 shadow-md transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
