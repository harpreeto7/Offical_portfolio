import React, { useState, useEffect } from 'react';
import { Terminal, Code2, ArrowUpRight, Menu, X, CheckCircle2 } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-blue-accent/20 border border-blue-accent/40 flex items-center justify-center text-blue-bright font-bold font-mono group-hover:scale-105 group-hover:bg-blue-accent group-hover:text-white transition-all">
            H
          </div>
          <div>
            <span className="font-display font-extrabold text-lg text-white tracking-tight group-hover:text-blue-bright transition-colors block leading-none">
              HARPREET SINGH
            </span>
            <span className="font-mono text-[10px] text-blue-light tracking-wider uppercase block mt-1">
              Full-Stack Laravel Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-bg-surface/90 backdrop-blur-md px-7 py-2.5 rounded-full border border-border-subtle">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-bright ${
                activeSection === link.href.substring(1) ? 'text-blue-bright font-bold' : 'text-text-muted'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Availability badge */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/30 text-blue-light text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-bright animate-pulse"></span>
            Available for Projects
          </div>
          
          <a href="#contact" className="btn-futuristic text-xs py-2.5 px-6">
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-bg-surface border border-border-subtle text-white hover:text-blue-bright"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg-card/95 backdrop-blur-xl border-b border-border-subtle px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white hover:text-blue-bright py-2 border-b border-border-subtle/40 flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-futuristic justify-center text-sm py-3">
                Let's Work Together
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
