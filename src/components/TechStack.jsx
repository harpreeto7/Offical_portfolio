import React, { useState } from 'react';
import { Wrench, CheckCircle2, Server, Database, Code2, Cpu, Terminal, Layers } from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');

  const primaryStack = [
    {
      name: 'Laravel',
      category: 'backend',
      version: 'v10 / v11',
      icon: Server,
      desc: 'MVC Architecture, Eloquent ORM, Service Providers, Artisan CLI, Middleware, Form Requests, Queues, Blade.',
      highlights: ['Enterprise ERP Logic', 'Role-Based Access Control (RBAC)', 'Blade & REST API Resources'],
      snippet: `// Laravel Service Pattern
class ShiftValidationService {
    public function checkOverlaps(int $employeeId, string $startDate, string $endDate): bool {
        return Shift::where('employee_id', $employeeId)
            ->whereBetween('shift_date', [$startDate, $endDate])
            ->exists();
    }
}`
    },
    {
      name: 'PHP',
      category: 'backend',
      version: 'v8.2+ OOP',
      icon: Code2,
      desc: 'Object-Oriented Programming (OOP), Custom Functions, Strict Types, Interfaces, Exception Handling, PDO.',
      highlights: ['Clean Code Principles', 'SOLID Design Patterns', 'Backend Validation & Security'],
      snippet: `// PHP 8 Typed Class Architecture
readonly class BOMComponentMaster {
    public function __construct(
        public int $componentId,
        public string $partNumber,
        public float $stockQuantity
    ) {}
}`
    },
    {
      name: 'MySQL',
      category: 'database',
      version: 'v8.0 Relational',
      icon: Database,
      desc: 'Relational Schema Design, Foreign Keys, Indexing, Complex JOINS, Aggregates, Query Optimization.',
      highlights: ['Data Normalization', 'Transaction Locks', 'Data-driven Dashboards'],
      snippet: `-- Optimized Relational Joining
SELECT b.bom_code, c.part_name, i.stock_level
FROM bom_masters b
INNER JOIN components c ON b.component_id = c.id
LEFT JOIN inventory_items i ON c.id = i.component_id
WHERE b.is_active = 1;`
    }
  ];

  const secondaryStack = [
    { name: 'JavaScript', category: 'frontend', desc: 'ES6+ Async/Await, DOM manipulation, dynamic AG Grid interactions.' },
    { name: 'React', category: 'frontend', desc: 'Vite SPA setup, Hooks, Component state management, API integration.' },
    { name: 'REST APIs', category: 'backend', desc: 'Standardized JSON endpoints, JWT / Sanctum auth, HTTP status codes.' },
    { name: 'Bootstrap', category: 'frontend', desc: 'Responsive grid structures, ERP admin templates, UI components.' },
    { name: 'Tailwind CSS', category: 'frontend', desc: 'Utility styling, design tokens, responsive breakpoints.' },
    { name: 'Git', category: 'tools', desc: 'Version control, branch management, clean commit workflow.' },
  ];

  const additionalTools = ['HTML5', 'CSS3', 'AJAX', 'JSON', 'Vite', 'AG Grid', 'Postman', 'Composer'];

  return (
    <section id="stack" className="py-24 bg-bg-surface/30 border-y border-border-subtle relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5" />
            TECH STACK & ENGINE
          </span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest ml-auto">
            04 / 05
          </span>
        </div>

        {/* Headline & Filter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-4xl space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
              Tools I <span className="text-gradient-blue">Work With</span>
            </h2>
            <p className="text-base text-text-muted">
              Strong visual emphasis anchored around core backend mastery in Laravel, PHP, and MySQL.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-bg-card border border-border-subtle shrink-0">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'primary', label: 'Primary Core (Heavy)' },
              { id: 'backend', label: 'Backend & DB' },
              { id: 'frontend', label: 'Frontend & UI' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-accent text-white font-bold shadow-lg'
                    : 'text-text-muted hover:text-white hover:bg-bg-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRIMARY TECH STACK — HEAVY VISUAL EMPHASIS CARDS */}
        {(activeTab === 'all' || activeTab === 'primary' || activeTab === 'backend') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-blue-accent/30 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-bright animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-blue-bright font-bold">
                PRIMARY EXPERTISE & HEAVY EMPHASIS (LARAVEL / PHP / MYSQL)
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {primaryStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="futuristic-card bg-gradient-to-b from-bg-card via-bg-surface to-bg-card p-6 md:p-8 border-blue-accent/50 group hover:border-blue-bright"
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="cyber-badge font-mono text-[10px]">
                        PRIMARY CORE
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-blue-accent/10 border border-blue-accent/30 flex items-center justify-center text-blue-bright group-hover:scale-110 group-hover:bg-blue-accent group-hover:text-white transition-all shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-2xl font-extrabold text-white font-display group-hover:text-blue-bright transition-colors">
                        {tech.name}
                      </h4>
                      <span className="text-xs font-mono text-blue-bright font-bold">{tech.version}</span>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed mb-6">
                      {tech.desc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6 border-t border-border-subtle pt-4">
                      <span className="text-[10px] font-mono uppercase text-text-dim tracking-wider block mb-2">
                        ARCHITECTURAL FEATURES:
                      </span>
                      {tech.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-bright shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Code Terminal Box */}
                    <div className="code-terminal">
                      <div className="text-[10px] text-blue-light font-mono mb-2">// Sample {tech.name} Implementation</div>
                      <pre className="overflow-x-auto text-[11px] leading-tight text-slate-300">
                        <code>{tech.snippet}</code>
                      </pre>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECONDARY TECH STACK */}
        {(activeTab === 'all' || activeTab === 'backend' || activeTab === 'frontend') && (
          <div className="mb-12">
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted font-bold mb-6">
              SECONDARY & FRONTEND STACK
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {secondaryStack
                .filter((item) => activeTab === 'all' || item.category === activeTab)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-blue-bright/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-white font-display">
                          {tech.name}
                        </h4>
                        <span className="cyber-badge text-[9px] py-0.5 px-2">Secondary</span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ADDITIONAL TOOLS GRID */}
        {activeTab === 'all' && (
          <div className="pt-6 border-t border-border-subtle">
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-dim font-semibold mb-4">
              ADDITIONAL TOOLS, LIBRARIES & UTILITIES
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {additionalTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-xl bg-bg-card border border-border-subtle text-xs font-mono text-text-muted hover:text-blue-bright hover:border-blue-bright/40 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
