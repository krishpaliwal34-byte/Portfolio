import React from "react";
import LoadingScreen from "../components/ui/LoadingScreen";
import MouseGradient from "../components/ui/MouseGradient";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import ExperienceEducation from "../components/sections/ExperienceEducation";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";



export default function Home() {
  return (
    <>
      {/* Pre-loader Animation */}
      <LoadingScreen />

      {/* Mouse Follow Ambient Glows */}
      <MouseGradient />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Page Layout Container */}
      <main className="flex-grow flex flex-col relative z-20">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Experience & Education Timeline */}
        <ExperienceEducation />

        {/* 6. Services Section */}
        <Services />

        {/* 7. Testimonials Carousel */}
        <Testimonials />

        {/* 8. Contact Form & Socials */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
