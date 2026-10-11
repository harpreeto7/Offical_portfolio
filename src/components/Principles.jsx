import React from 'react';
import { HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      num: '01',
      title: 'Code should solve a problem.',
      desc: 'Technology is useful only when it creates a practical outcome.'
    },
    {
      num: '02',
      title: 'Simplicity matters.',
      desc: 'Complex systems should be made easier to understand and use.'
    },
    {
      num: '03',
      title: 'Good architecture scales.',
      desc: 'Applications should be structured so that new requirements can be added without breaking existing functionality.'
    },
    {
      num: '04',
      title: 'Data matters.',
      desc: 'Reliable applications depend on well-designed databases and consistent business logic.'
    },
    {
      num: '05',
      title: 'Keep improving.',
      desc: 'Every project is an opportunity to learn something new and build something better.'
    }
  ];

  return (
    <section id="principles" className="py-24 bg-bg-surface/30 border-y border-border-subtle relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            DEVELOPMENT PHILOSOPHY
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            PRINCIPLES
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            What I <span className="text-gradient-blue">Believe</span>
          </h2>
          <p className="text-base text-text-muted">
            The core principles that guide my software architecture, database design, and daily engineering decisions.
          </p>
        </div>

        {/* Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((p) => (
            <div
              key={p.num}
              className="futuristic-card bg-bg-card border-border-subtle p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-mono font-bold text-blue-bright block mb-4">
                  PRINCIPLE {p.num}
                </span>

                <h3 className="text-xl font-extrabold text-white font-display mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle mt-6 flex items-center gap-2 text-xs text-blue-bright font-mono">
                <CheckCircle2 className="w-4 h-4 text-blue-bright shrink-0" />
                <span>Engineered for Real Impact</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
