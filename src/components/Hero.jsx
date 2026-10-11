import React from 'react';
import { ArrowUpRight, Database, Server, Cpu, Code, ShieldCheck, Layers, Terminal, Activity, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-40 md:pb-28 overflow-hidden w-full">
      
      {/* Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-accent/10 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-blue-bright/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* Section Header Line */}
        <div className="hud-line-connector mb-12">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold">
            PORTFOLIO 2026
          </span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest ml-auto">
            01 / 05
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Tag Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-bg-surface border border-border-subtle shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight font-display text-left">
              I build software that <span className="text-gradient-blue">solves real</span> business problems.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-text-muted font-normal max-w-4xl leading-relaxed text-left">
              Full-Stack Laravel Developer focused on building scalable web applications, ERP systems, APIs and data-driven business solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#work" className="btn-futuristic group">
                View My Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a href="#contact" className="btn-futuristic-outline">
                Let's Work Together
              </a>
            </div>

            {/* Primary Skill Metrics Bar */}
            <div className="pt-8 border-t border-border-subtle space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-text-dim uppercase tracking-wider">
                <span>PRIMARY ARCHITECTURAL STACK</span>
                <span className="text-blue-bright font-bold">CORE EMPHASIS</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-bg-surface border border-blue-accent/40 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-accent/10 text-blue-bright shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">Laravel</div>
                    <div className="text-[10px] text-muted font-mono">v10 / v11</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-blue-accent/40 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-accent/10 text-blue-bright shrink-0">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">PHP</div>
                    <div className="text-[10px] text-muted font-mono">v8.2+ OOP</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-blue-accent/40 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-accent/10 text-blue-bright shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">MySQL</div>
                    <div className="text-[10px] text-muted font-mono">Relational DB</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-blue-bright/40 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-bright/10 text-blue-light shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">ERP & React</div>
                    <div className="text-[10px] text-muted font-mono">APIs & UI</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Cyber Portrait Box */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[470px]">
              
              {/* Outer Border Box */}
              <div className="relative bg-bg-card rounded-[24px] border border-border-subtle p-4 sm:p-5 shadow-2xl overflow-hidden group">
                
                {/* Top Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-mono text-xs text-white font-bold tracking-wider">
                      HARPREET SINGH
                    </span>
                  </div>
                  <span className="cyber-badge text-[10px] py-0.5 px-2">
                    FULL-STACK DEV
                  </span>
                </div>

                {/* Portrait Image Frame — Medium balanced dimension */}
                <div className="relative w-full h-[360px] sm:h-[410px] rounded-[18px] overflow-hidden bg-bg-surface border border-border-subtle">
                  <img
                    src={`${import.meta.env.BASE_URL}harpreet_portrait.png`}
                    alt="Harpreet Singh — Full-Stack Laravel Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Telemetry Badges */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs font-mono">
                    <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium">
                      Laravel & ERP Architect
                    </span>
                    <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-bright/40 text-blue-light text-[11px] font-bold">
                      Real Software
                    </span>
                  </div>
                </div>

                {/* Telemetry Footer Grid */}
                <div className="mt-3.5 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-bg-surface border border-border-subtle flex items-center gap-3">
                    <Zap className="w-4 h-4 text-blue-bright shrink-0" />
                    <div>
                      <div className="text-white font-bold text-[11px]">ERP Modules</div>
                      <div className="text-[10px] text-text-muted">BOM, Inventory, Shifts</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-bg-surface border border-border-subtle flex items-center gap-3">
                    <Activity className="w-4 h-4 text-blue-light shrink-0" />
                    <div>
                      <div className="text-white font-bold text-[11px]">REST Services</div>
                      <div className="text-[10px] text-text-muted">APIs & DB Pipelines</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
