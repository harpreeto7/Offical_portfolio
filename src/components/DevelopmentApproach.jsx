import React, { useState } from 'react';
import { Compass, Search, FileText, Cpu, Code2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function DevelopmentApproach() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Search,
      desc: 'Understand the business requirement, users and actual problem before writing code.',
      details: 'Conducting thorough requirement analysis, identifying operational bottlenecks, and ensuring technical goals align with business objectives.'
    },
    {
      num: '02',
      title: 'Plan',
      icon: FileText,
      desc: 'Break complex requirements into clear modules, workflows and technical tasks.',
      details: 'Defining system boundaries, breaking features into actionable sprints, establishing API contracts, and outlining database relationships.'
    },
    {
      num: '03',
      title: 'Architect',
      icon: Cpu,
      desc: 'Design database structures, relationships, APIs and application architecture.',
      details: 'Creating normalized MySQL schemas, foreign key mappings, clean Laravel service layers, and RESTful request validation rules.'
    },
    {
      num: '04',
      title: 'Build',
      icon: Code2,
      desc: 'Develop clean, maintainable backend and frontend functionality.',
      details: 'Writing modular PHP/Laravel code, custom Middleware, Blade/React interfaces, and integrating dynamic AG Grid data management.'
    },
    {
      num: '05',
      title: 'Validate',
      icon: ShieldCheck,
      desc: 'Test business rules, edge cases, data integrity and user workflows.',
      details: 'Testing edge-case shift overlaps, database foreign constraint locks, validation errors, and end-to-end user experience.'
    },
    {
      num: '06',
      title: 'Improve',
      icon: TrendingUp,
      desc: 'Optimize performance, usability and maintainability as the application evolves.',
      details: 'Refactoring queries, indexing slow tables, simplifying UI workflows, and preparing the codebase for scalable future features.'
    }
  ];

  return (
    <section id="approach" className="py-24 relative border-y border-border-subtle bg-bg-surface/30">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            ENGINEERING WORKFLOW
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            PROCESS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            How I <span className="text-gradient-blue">Build</span>
          </h2>
          <p className="text-base text-text-muted">
            A disciplined, 6-step engineering pipeline focused on clarity, data integrity, clean architecture, and real-world reliability.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`futuristic-card p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-blue-bright bg-bg-card shadow-2xl scale-[1.02]' : 'hover:border-blue-bright/40'
                }`}
              >
                {/* Header: Step number & Icon */}
                <div className="flex items-center justify-between mb-6 border-b border-border-subtle pb-4">
                  <span className="font-mono text-xs font-bold text-blue-bright tracking-wider">
                    STEP {step.num}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                    isSelected ? 'bg-blue-accent text-white border-blue-bright' : 'bg-bg-surface text-blue-bright border-border-subtle'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white font-display mb-3">
                  {step.title}
                </h3>

                <p className="text-sm font-medium text-white/90 leading-relaxed mb-3">
                  {step.desc}
                </p>

                <p className="text-xs text-text-muted leading-relaxed border-t border-border-subtle pt-3">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
