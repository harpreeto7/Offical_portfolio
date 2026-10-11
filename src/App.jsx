import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import TechStack from './components/TechStack';
import FeaturedWork from './components/FeaturedWork';
import TechVideoShowcase from './components/TechVideoShowcase';
import Experience from './components/Experience';
import DevelopmentApproach from './components/DevelopmentApproach';
import Principles from './components/Principles';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'capabilities', 'stack', 'work', 'system-video', 'experience', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-color-text-main font-sans selection:bg-blue-accent selection:text-white relative">
      {/* Live Canvas Animated Node Matrix Background */}
      <ParticleBackground />

      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIBuild />
        <TechStack />
        <FeaturedWork />
        <TechVideoShowcase />
        <Experience />
        <DevelopmentApproach />
        <Principles />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
