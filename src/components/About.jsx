import React from 'react';
import { User, Cpu, Database, Workflow, Sparkles, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-y border-border-subtle bg-bg-surface/30 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <User className="w-3.5 h-3.5" />
            ABOUT & PHILOSOPHY
          </span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest ml-auto">
            02 / 05
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Heading & Story */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="cyber-badge font-mono text-xs">
                PROBLEM SOLVER & SOFTWARE ENGINEER
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display leading-tight text-left">
                I turn complex ideas into <span className="text-gradient-blue">useful software.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-text-muted leading-relaxed font-normal text-left">
              <p>
                I’m a Full-Stack Developer specializing in <strong className="text-white font-semibold">Laravel and PHP</strong>, with a strong focus on building practical, scalable and maintainable web applications.
              </p>
              <p>
                My work revolves around understanding real business requirements and transforming them into reliable software — from ERP systems and management platforms to APIs, dashboards and data-driven applications.
              </p>
              <p>
                I care about clean architecture, efficient databases, intuitive interfaces and software that works reliably in real-world environments.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-bright font-mono">100%</div>
                <div className="text-xs text-muted font-mono mt-1">Real Software Focus</div>
              </div>
              
              <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-bright font-mono">ERP</div>
                <div className="text-xs text-muted font-mono mt-1">Modules & Workflows</div>
              </div>
              
              <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-light font-mono">MySQL</div>
                <div className="text-xs text-muted font-mono mt-1">Normalized Relational DB</div>
              </div>
            </div>

          </div>

          {/* Right Column: Short Version & Professional Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Short Version Card */}
            <div className="futuristic-card bg-gradient-to-br from-bg-card via-bg-surface to-bg-card p-6 md:p-8 border-blue-accent/40 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="cyber-badge font-mono">SHORT VERSION</span>
                <Sparkles className="w-5 h-5 text-blue-bright" />
              </div>

              <h3 className="text-xl font-extrabold text-white font-display mb-3">
                Developer. Problem solver. Builder.
              </h3>

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                I enjoy taking complex workflows and turning them into simple, efficient digital experiences.
              </p>

              <p className="text-sm text-text-muted leading-relaxed">
                My primary strength is backend development with <strong className="text-blue-light font-semibold">Laravel and PHP</strong>, while also working across databases, APIs, JavaScript and modern frontend technologies.
              </p>
            </div>

            {/* 3 Core Professional Pillars */}
            <div className="space-y-4 text-left">
              <div className="p-5 rounded-xl bg-bg-card border border-border-subtle flex items-start gap-4 hover:border-blue-bright/40 transition-colors">
                <div className="p-3 rounded-xl bg-blue-accent/10 text-blue-bright shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Backend Architecture</h4>
                  <p className="text-xs text-muted mt-1 leading-normal">
                    Structuring clean controllers, service layers, validation rules, and scalable business logic.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bg-card border border-border-subtle flex items-start gap-4 hover:border-blue-bright/40 transition-colors">
                <div className="p-3 rounded-xl bg-blue-accent/10 text-blue-bright shrink-0 mt-0.5">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Business Workflow Automation</h4>
                  <p className="text-xs text-muted mt-1 leading-normal">
                    Simplifying interconnected operations across inventory, BOM master, HRM shifts, and manufacturing.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bg-card border border-border-subtle flex items-start gap-4 hover:border-blue-bright/40 transition-colors">
                <div className="p-3 rounded-xl bg-blue-light/10 text-blue-light shrink-0 mt-0.5">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Database & Data Integrity</h4>
                  <p className="text-xs text-muted mt-1 leading-normal">
                    Designing normalized relational tables, indexed queries, and reliable API end-points.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
