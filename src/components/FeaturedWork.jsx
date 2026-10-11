import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, Server, Database, Code2, Shield, Eye, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'erp-system',
      num: '01',
      title: 'ERP Management System',
      category: 'Business Software / ERP',
      description: 'A comprehensive business management platform designed to manage interconnected workflows across production, inventory, HRM and other operational processes.',
      problem: 'Enterprise operational teams faced disconnected tracking across raw materials, manufacturing machines, and shift scheduling, resulting in inventory mismatches and manual data delays.',
      solution: 'Engineered a centralized Laravel & MySQL ERP platform with modular architecture, automated BOM tracking, role-based module access, and dynamic data dashboards.',
      highlights: [
        'Modular architecture',
        'Production management',
        'Inventory management',
        'BOM management',
        'Machine and component management',
        'HRM workflows',
        'Employee shift management',
        'Role-based module access',
        'Data-driven dashboards',
        'Database-driven business processes'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap', 'AG Grid'],
      contribution: 'Designed and developed backend workflows, database operations, business logic, APIs and interactive data-management interfaces.',
      mockupUrl: 'https://erp.enterprise.local/dashboard',
      modules: [
        'Core ERP Auth & Role-Based Access Control (RBAC)',
        'Bill of Materials (BOM) & Machine Master Engine',
        'Inventory & Production Workflow Pipeline',
        'HRM & Employee Shift Schedule Matrix'
      ]
    },
    {
      id: 'lifeflow',
      num: '02',
      title: 'LifeFlow — Blood Management Platform',
      category: 'Healthcare / Management Platform',
      description: 'A web-based platform designed to manage donor, patient and blood requisition workflows through a centralized application.',
      problem: 'Hospitals and blood banks struggled with manual phone coordination for emergency blood requisitions, donor availability verification, and disease record tracking.',
      solution: 'Developed a responsive React platform with RESTful APIs, JWT authentication, donor-patient matching workflows, and dynamic search filters.',
      highlights: [
        'Donor registration',
        'Patient registration',
        'Disease management',
        'Blood requisition workflow',
        'Patient search',
        'Dynamic forms',
        'API-based communication',
        'Responsive interface'
      ],
      tech: ['React', 'Vite', 'REST API', 'Spring Boot', 'JWT'],
      contribution: 'Worked across frontend application flows, API integration, authentication and dynamic form-based workflows.',
      mockupUrl: 'https://lifeflow.health.org/requisitions',
      modules: [
        'Donor & Patient Centralized Registry',
        'Disease Record & Eligibility Screening Engine',
        'Real-time Blood Requisition & Dispatch Pipeline',
        'JWT Token Authentication & Secured Form Submissions'
      ]
    },
    {
      id: 'production-inventory',
      num: '03',
      title: 'Production & Inventory Management',
      category: 'Business Automation',
      description: 'A data-driven system designed to simplify production and inventory workflows by connecting products, components, machines, materials and operational processes.',
      problem: 'Production lines suffered bottlenecks due to unverified material stock levels and lack of dynamic machine assignment tracking.',
      solution: 'Created a database-driven automation platform with dynamic AG Grid data tables, BOM validation constraints, and role-based operational permissions.',
      highlights: [
        'BOM management',
        'Component management',
        'Machine master',
        'Inventory data',
        'Production workflows',
        'Dynamic tables',
        'Data validation',
        'Role-based access'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'AG Grid'],
      contribution: 'Designed relational schema mapping, production pipeline logic, AG Grid dynamic data grid integrations, and material validation controllers.',
      mockupUrl: 'https://inventory.production.local/bom-master',
      modules: [
        'Bill of Materials (BOM) Component Breakdown',
        'Machine Master & Equipment Allocation',
        'Dynamic AG Grid Batch Processing',
        'Material Stock Validation & Threshold Alerts'
      ]
    },
    {
      id: 'hrm-shift',
      num: '04',
      title: 'HRM Shift Management',
      category: 'HRM / Workforce Management',
      description: 'A shift management workflow designed to simplify employee scheduling, date-based shift assignment and validation of overlapping or duplicate shifts.',
      problem: 'HR managers spent hours resolving overlapping shift conflicts and duplicate employee rosters across multiple facility departments.',
      solution: 'Architected an automated shift assignment engine with real-time overlap validation algorithms, date-range scheduling, and interactive roster grids.',
      highlights: [
        'Employee shift assignment',
        'Date-range scheduling',
        'Department-based shifts',
        'Duplicate prevention',
        'Overlapping shift validation',
        'Dynamic data grids',
        'Database-driven workflows'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'AG Grid'],
      contribution: 'Formulated validation algorithms for overlapping date-range shifts, shift assignment APIs, database constraints, and dynamic schedule grid interface.',
      mockupUrl: 'https://hrm.workspace.local/shifts',
      modules: [
        'Date-Range Overlapping Shift Validator',
        'Department-Based Roster Matrix',
        'Duplicate Assignment Prevention Filter',
        'Database Shift Log Audit Trail'
      ]
    }
  ];

  return (
    <section id="work" className="py-28 md:py-36 relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            SELECTED WORK
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            05 / 05
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Selected <span className="text-gradient-blue">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            A selection of systems and applications I've worked on, focused on solving real operational and business problems.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="futuristic-card p-8 md:p-12 border-border-subtle hover:border-blue-bright/50 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Side: Information & Problem / Solution */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category & Index */}
                  <div className="flex items-center justify-between">
                    <span className="cyber-badge font-mono text-xs">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-blue-bright">
                      PROJECT {project.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display group-hover:text-blue-bright transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution Callout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-bg-surface border border-red-500/20 space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block">
                        01. THE PROBLEM
                      </span>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-bg-surface border border-emerald-500/20 space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                        02. THE SOLUTION
                      </span>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="cyber-badge text-xs py-1 px-3">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Contribution Highlight */}
                  <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle text-xs text-text-muted leading-relaxed">
                    <strong className="text-blue-bright font-mono block mb-1">MY CONTRIBUTION:</strong>
                    {project.contribution}
                  </div>

                  {/* Deep-Dive Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-futuristic py-3.5 px-7 text-xs group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      View System Details & Mockup
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* Right Side: Clean Futuristic Browser / Dashboard Placeholder */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-border-subtle bg-bg-surface p-1.5 shadow-2xl group-hover:border-blue-bright/40 transition-colors">
                    
                    {/* Mock Browser Header */}
                    <div className="bg-bg-card px-4 py-3 border-b border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="text-[10px] font-mono text-text-muted truncate max-w-[180px]">
                        {project.mockupUrl}
                      </span>
                      <span className="cyber-badge text-[9px] py-0.5 px-2">
                        LIVE SYSTEM
                      </span>
                    </div>

                    {/* Mock Dashboard Workspace */}
                    <div className="p-5 bg-bg-card/60 space-y-4 font-mono text-xs">
                      
                      {/* Dashboard Top Status */}
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-bg-surface border border-border-subtle">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-white font-bold text-[11px] truncate max-w-[180px]">{project.title}</span>
                        </div>
                        <span className="text-[10px] text-blue-bright font-bold">{project.tech[0]}</span>
                      </div>

                      {/* Mock Modules Breakdown */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] text-text-dim uppercase tracking-wider block">KEY SYSTEM MODULES:</span>
                        {project.highlights.slice(0, 4).map((hl, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-bg-surface/80 text-[11px] text-text-muted border border-border-subtle/50">
                            <span className="truncate pr-2">• {hl}</span>
                            <span className="text-emerald-400 text-[10px] font-bold">VERIFIED</span>
                          </div>
                        ))}
                      </div>

                      {/* Deep-dive hint button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-3 bg-bg-surface hover:bg-blue-accent/10 border border-border-subtle hover:border-blue-bright/40 text-blue-bright text-[11px] rounded-xl transition-all flex items-center justify-center gap-2 font-mono font-bold"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        Inspect Architecture & Data Schema
                      </button>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
