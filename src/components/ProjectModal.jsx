import React, { useState } from 'react';
import { X, CheckCircle2, Server, Database, Code2, Layers, Cpu, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="modal-overlay animate-fadeIn">
      <div className="bg-card border border-border-subtle rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border-subtle p-6 flex items-center justify-between z-20">
          <div>
            <span className="tag-badge text-xs font-mono mb-1">{project.category}</span>
            <h2 className="text-2xl font-extrabold text-white font-display">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface border border-border-subtle text-muted hover:text-white hover:border-gold flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Tab Navigation */}
          <div className="flex gap-2 border-b border-border-subtle pb-3 overflow-x-auto">
            {['overview', 'architecture', 'dashboard_mockup', 'contribution'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-gold text-black font-bold'
                    : 'text-muted hover:text-white hover:bg-surface'
                }`}
              >
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & PROBLEM/SOLUTION */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
                    01. THE PROBLEM
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                    02. THE SOLUTION
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono text-gold uppercase tracking-wider mb-2">SYSTEM DESCRIPTION</h4>
                <p className="text-base text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Functionality & Highlights */}
              <div>
                <h4 className="text-xs font-mono text-gold uppercase tracking-wider mb-3">KEY FUNCTIONALITY & HIGHLIGHTS</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-surface border border-border-subtle text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & TECH */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-surface border border-border-subtle space-y-4">
                <h4 className="text-xs font-mono text-gold uppercase tracking-wider">TECHNOLOGY STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-badge bg-gold/10 text-gold border-gold/30 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-border-subtle space-y-3">
                <h4 className="text-xs font-mono text-gold uppercase tracking-wider">SYSTEM MODULES & ARCHITECTURE FLOW</h4>
                <div className="space-y-2">
                  {project.modules ? project.modules.map((mod, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card text-xs text-white">
                      <span className="w-6 h-6 rounded bg-gold/10 text-gold font-mono flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <span>{mod}</span>
                    </div>
                  )) : (
                    <p className="text-xs text-muted">Modular business logic, database relationships, and validated REST API pipelines.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DASHBOARD MOCKUP */}
          {activeTab === 'dashboard_mockup' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>INTERACTIVE DASHBOARD PLACEHOLDER</span>
                <span className="text-gold">HARPREET SINGH • SYSTEM UI</span>
              </div>
              
              {/* Browser Window Mockup Frame */}
              <div className="rounded-xl border border-border-subtle bg-surface overflow-hidden shadow-2xl">
                
                {/* Browser Top Bar */}
                <div className="bg-card px-4 py-3 border-b border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-muted">{project.mockupUrl || `https://app.${project.id}.local/dashboard`}</span>
                  </div>
                  <span className="text-[10px] font-mono text-gold/80 px-2 py-0.5 bg-gold/10 rounded">
                    PRODUCTION DEPLOYMENT
                  </span>
                </div>

                {/* Dashboard Inner Workspace Mockup */}
                <div className="p-6 bg-card/60 space-y-6">
                  
                  {/* Stat cards header */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                      <div className="text-[10px] font-mono text-muted uppercase">Total Records</div>
                      <div className="text-xl font-bold text-white font-mono mt-1">14,280+</div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                      <div className="text-[10px] font-mono text-muted uppercase">Active Workflows</div>
                      <div className="text-xl font-bold text-gold font-mono mt-1">Verified</div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                      <div className="text-[10px] font-mono text-muted uppercase">Role Auth</div>
                      <div className="text-xl font-bold text-emerald-400 font-mono mt-1">RBAC Active</div>
                    </div>
                  </div>

                  {/* AG Grid Data Table Mockup */}
                  <div className="border border-border-subtle rounded-lg bg-surface p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-border-subtle text-muted text-[11px]">
                      <span>MODULE ID</span>
                      <span>WORKFLOW STATUS</span>
                      <span>DATABASE SYNC</span>
                      <span>ACTION</span>
                    </div>

                    {project.highlights.slice(0, 4).map((hl, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-border-subtle/40 text-white">
                        <span className="text-gold">MOD-00{idx + 1}</span>
                        <span className="text-text-muted">{hl}</span>
                        <span className="text-emerald-400 text-[11px]">NORMALIZED</span>
                        <span className="text-xs px-2 py-0.5 bg-gold/10 text-gold rounded">VIEW DB</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 4: MY CONTRIBUTION */}
          {activeTab === 'contribution' && (
            <div className="p-6 rounded-xl bg-gold/5 border border-gold/20 space-y-4">
              <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                MY EXACT CONTRIBUTION & RESPONSIBILITIES
              </div>
              <p className="text-base text-white leading-relaxed font-medium">
                "{project.contribution}"
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-surface px-6 py-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-xs font-mono text-muted">SOFTWARE DEVELOPER PORTFOLIO • HARPREET SINGH</span>
          <button onClick={onClose} className="btn-secondary text-xs py-2 px-5">
            Close Deep-Dive
          </button>
        </div>

      </div>
    </div>
  );
}
