"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import confetti from "canvas-confetti";
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

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#3b82f6", "#06b6d4"],
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1600);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glassmorphism text-xs font-semibold text-cyan-400 tracking-wider mb-4 border border-cyan-500/10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-display font-black text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Collaborate On <br />
            <span className="text-gradient">
              Your Next Major Venture
            </span>
          </motion.h2>
        </div>

        <div className="flex justify-center items-center">
  <motion.div
    className="w-full max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card
              glowColor="purple"
              className="flex flex-col justify-centar h-full p-6 sm:p-8 text-left contactcard"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Contact Information
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                  Have a job opportunity, a project proposal, or simply want to
                  say hello? and I will get back to you within 24
                  hours.
                </p>

                <div className="flex flex-col gap-5 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/15 shadow-sm shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        Email
                      </span>

                      <a
                        href="mailto:krishpaliwal34@gmail.com"
                        className="text-slate-200 hover:text-cyan-400 text-xs sm:text-sm transition-colors font-medium"
                      >
                        krishpaliwal34@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/15 shadow-sm shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        Location
                      </span>

                      <span className="text-slate-200 text-xs sm:text-sm font-medium">
                         Udaipur, Rajasthan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-900/60 pt-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Connect With Me
                </h4>

                <div className="flex items-center gap-3">
                  {[
                    {
                      icon: <GithubIcon className="w-4.5 h-4.5" />,
                      url: "https://github.com/krishpaliwal34-byte",
                      name: "GitHub",
                    },
                    {
                      icon: <LinkedinIcon className="w-4.5 h-4.5" />,
                      url: "https://www.linkedin.com/in/krishpaliwal167/",
                      name: "LinkedIn",
                    },
                    {
                       icon: <FaInstagram className="w-4.5 h-4.5" />,
                       url: "https://www.instagram.com/krixxhh_17/",
                       name: "Instagram",
                    },
                    {
                       icon: <FaWhatsapp className="w-4.5 h-4.5" />,
                       url: "https://wa.me/+916367858991",
                      name: "WhatsApp",
    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl glassmorphism text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/20 shadow-md transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}