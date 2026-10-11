import React from 'react';
import { Layout, Building2, Server, Globe2, Database, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export default function WhatIBuild() {
  const capabilities = [
    {
      num: '01',
      title: 'Web Applications',
      desc: 'Modern, scalable web applications designed around real business requirements.',
      icon: Layout,
      tags: ['Custom Workflows', 'Dashboard Interfaces', 'Web Portals'],
      details: 'Built with focused architecture to handle multi-user workflows, role permissions, and dynamic data rendering.'
    },
    {
      num: '02',
      title: 'ERP & Business Systems',
      desc: 'Production, inventory, HRM and business management systems that simplify complex workflows.',
      icon: Building2,
      tags: ['BOM Management', 'Shift Rosters', 'Inventory Masters'],
      details: 'Deep expertise in interconnecting manufacturing, employee schedules, raw material components, and operational reporting.'
    },
    {
      num: '03',
      title: 'Backend Development',
      desc: 'Robust Laravel and PHP backends with clean architecture, validation, authentication and business logic.',
      icon: Server,
      tags: ['Laravel 10/11', 'PHP 8+', 'Clean Architecture'],
      details: 'Structuring maintainable codebases with Eloquent ORM, custom Middleware, Form Requests, and Service Repositories.'
    },
    {
      num: '04',
      title: 'REST APIs',
      desc: 'Reliable APIs for web applications, mobile applications and third-party integrations.',
      icon: Globe2,
      tags: ['JWT / Sanctum Auth', 'JSON Payloads', 'API Resources'],
      details: 'Secure endpoints built with standardized HTTP status codes, robust data validation, rate limiting, and clean pagination.'
    },
    {
      num: '05',
      title: 'Database Solutions',
      desc: 'Structured MySQL database design, relationships, queries and data-driven systems.',
      icon: Database,
      tags: ['MySQL Optimization', 'Indexing & Joins', 'Schema Design'],
      details: 'Normalizing complex relational tables, writing efficient raw & ORM queries, transactions, and foreign key constraints.'
    },
    {
      num: '06',
      title: 'Full-Stack Development',
      desc: 'Connecting powerful backend systems with clean and responsive frontend experiences.',
      icon: Layers,
      tags: ['React', 'JavaScript', 'AG Grid / Dynamic Tables'],
      details: 'Bridging backend API pipelines with reactive UI components, async data fetching (AJAX), and responsive CSS interfaces.'
    }
  ];

  return (
    <section id="capabilities" className="py-24 relative w-full">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            CAPABILITIES & SERVICES
          </span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest ml-auto">
            03 / 05
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display text-left">
            What I <span className="text-gradient-blue">Build</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted text-left">
            Specialized engineering capabilities focused on operational software, backend business logic, and end-to-end web applications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="futuristic-card p-6 md:p-8 flex flex-col justify-between group hover:border-blue-bright/60"
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-6 border-b border-border-subtle pb-4">
                    <span className="font-mono text-sm font-bold text-blue-bright tracking-wider">
                      CAPABILITY {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-center text-blue-bright group-hover:bg-blue-accent group-hover:text-white transition-all shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white font-display mb-3 group-hover:text-blue-bright transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Detail paragraph */}
                  <p className="text-xs text-text-dim leading-relaxed border-t border-border-subtle pt-3 mb-6">
                    {item.details}
                  </p>
                </div>

                {/* Tech tags footer */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="cyber-badge text-[10px] py-1 px-2.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
