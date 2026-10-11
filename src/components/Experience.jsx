import React from 'react';
import { Award, CheckCircle2, Server, Database, Code2, Layers, Cpu, Wrench } from 'lucide-react';

export default function Experience() {
  const coreFocusAreas = [
    { name: 'Laravel Development', desc: 'Custom controllers, middleware, authentication, form validation, service layers, and artisan commands.' },
    { name: 'PHP Backend Development', desc: 'Object-oriented programming, clean code principles, SOLID patterns, data structures, and algorithms.' },
    { name: 'MySQL Database Work', desc: 'Relational database schema design, indexing, foreign keys, complex JOIN queries, and data integrity.' },
    { name: 'ERP Development', desc: 'Production, inventory, BOM management, machine master, and employee shift workflow systems.' },
    { name: 'Business Workflow Automation', desc: 'Transforming manual operational spreadsheets into automated, data-driven web platforms.' },
    { name: 'REST API Development', desc: 'Robust API endpoints with JSON response contracts, status codes, JWT/Sanctum authentication, and rate limiting.' },
    { name: 'Frontend Integration', desc: 'Connecting Laravel & PHP backends with interactive JavaScript, React components, AJAX, and Bootstrap/Tailwind UI.' },
    { name: 'Dynamic Data Management', desc: 'Integrating high-performance data tables (AG Grid), live searching, sorting, pagination, and bulk data actions.' },
    { name: 'Debugging & Optimization', desc: 'Query profiling, memory leak resolution, error handling, performance tuning, and refactoring legacy logic.' },
    { name: 'Real-World Application Development', desc: 'Delivering practical software engineered to solve operational bottlenecks for real users and organizations.' }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-surface/30 border-y border-border-subtle relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            PRACTICAL EXPERIENCE & ENGINEERING FOCUS
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            EXPERIENCE
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Experience & <span className="text-gradient-blue">Engineering Practice</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
            Building software has taught me that good development is not only about writing code. It is about understanding the problem, designing the right solution and creating something that people can actually use.
          </p>
        </div>

        {/* Core Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {coreFocusAreas.map((item, idx) => (
            <div
              key={item.name}
              className="p-6 md:p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-blue-bright/30 transition-all flex items-start gap-4 group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-accent/10 text-blue-bright flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-1.5 group-hover:text-blue-bright transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Timeline / Work Experience */}
        <div className="p-8 md:p-12 rounded-3xl bg-bg-surface border border-border-subtle space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-6 gap-4">
            <div>
              <span className="cyber-badge font-mono text-xs mb-2">PRACTICAL DEVELOPMENT EXPERIENCE</span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">Full-Stack Laravel Developer</h3>
            </div>
            <span className="text-xs font-mono text-blue-bright px-4 py-1.5 bg-blue-accent/10 rounded-full border border-blue-accent/30 font-bold">
              Present
            </span>
          </div>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Specializing in backend system architecture, Laravel/PHP development, MySQL database optimization, and ERP software design. Focused on delivering production-grade web applications for business operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-bg-card border border-border-subtle text-xs">
              <span className="text-text-muted font-mono block text-[10px] uppercase mb-1">PRIMARY STACK</span>
              <span className="text-white font-semibold text-sm">Laravel • PHP • MySQL</span>
            </div>
            <div className="p-4 rounded-xl bg-bg-card border border-border-subtle text-xs">
              <span className="text-text-muted font-mono block text-[10px] uppercase mb-1">DOMAINS</span>
              <span className="text-white font-semibold text-sm">ERP, HRM & Web Apps</span>
            </div>
            <div className="p-4 rounded-xl bg-bg-card border border-border-subtle text-xs">
              <span className="text-text-muted font-mono block text-[10px] uppercase mb-1">ROLE FOCUS</span>
              <span className="text-white font-semibold text-sm">Backend & Full-Stack</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
