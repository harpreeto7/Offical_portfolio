import React from 'react';
import { ArrowUp, Terminal, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-card border-t border-border-subtle pt-16 pb-12">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-accent/10 border border-blue-accent/30 flex items-center justify-center text-blue-bright font-bold font-mono">
                H
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight block">
                  HARPREET SINGH
                </span>
                <span className="font-mono text-xs text-blue-bright uppercase tracking-wider block">
                  Full-Stack Laravel Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-text-muted max-w-md font-medium">
              Building practical software for real-world problems.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase text-text-dim tracking-wider block">
              QUICK NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-sm font-medium">
              <a href="#work" className="text-text-muted hover:text-blue-bright transition-colors">Work</a>
              <a href="#about" className="text-text-muted hover:text-blue-bright transition-colors">About</a>
              <a href="#stack" className="text-text-muted hover:text-blue-bright transition-colors">Skills</a>
              <a href="#experience" className="text-text-muted hover:text-blue-bright transition-colors">Experience</a>
              <a href="#contact" className="text-text-muted hover:text-blue-bright transition-colors">Contact</a>
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-2 flex items-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-bg-surface border border-border-subtle text-text-muted hover:text-blue-bright hover:border-blue-bright flex items-center justify-center transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} Harpreet Singh. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Laravel • PHP • MySQL • React</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
