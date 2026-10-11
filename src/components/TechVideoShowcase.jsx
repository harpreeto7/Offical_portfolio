import React, { useState, useEffect } from 'react';
import { Play, Pause, Activity, Server, Cpu, Database, ShieldCheck, Terminal, Layers, RefreshCw, CheckCircle2, Zap } from 'lucide-react';

export default function TechVideoShowcase() {
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'video'
  const [logs, setLogs] = useState([]);
  const [queryCount, setQueryCount] = useState(14280);
  const [activeNode, setActiveNode] = useState(0);

  // Live real-time log stream simulator
  useEffect(() => {
    const logPool = [
      '[2026-09-04 13:39:10] laravel.INFO: SELECT * FROM `shifts` WHERE `employee_id` = 42 AND `shift_date` BETWEEN "2026-09-01" AND "2026-09-15"; [12ms]',
      '[2026-09-04 13:39:12] laravel.INFO: ShiftValidationService::checkOverlaps() -> VALIDATION_PASSED [0.4ms]',
      '[2026-09-04 13:39:14] laravel.INFO: BOMMasterController::calculateMaterialDemand() -> BOM_CALCULATED [8ms]',
      '[2026-09-04 13:39:16] laravel.INFO: HTTP GET /api/v1/erp/inventory/status 200 OK [14ms]',
      '[2026-09-04 13:39:18] laravel.INFO: AG Grid batch update committed to MySQL database. [6ms]',
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-4), logPool[logIndex % logPool.length]]);
      setQueryCount((c) => c + Math.floor(Math.random() * 5) + 1);
      setActiveNode((n) => (n + 1) % 4);
      logIndex++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="system-video" className="py-28 md:py-36 bg-bg-surface/40 border-y border-border-subtle relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* HUD Line Connector */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Activity className="w-3.5 h-3.5" />
            LIVE RUNNING SOFTWARE & DATA PIPELINE SIMULATOR
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            LIVE DEMO
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-4xl space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
              Live Running <span className="text-gradient-blue">Systems & Pipelines</span>
            </h2>
            <p className="text-base sm:text-lg text-text-muted">
              Watch real-time backend code execution, database query logs, and ERP material component flow operating live.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex gap-2 p-1.5 rounded-xl bg-bg-card border border-border-subtle shrink-0">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'simulator'
                  ? 'bg-blue-accent text-white shadow-lg'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Live Interactive Simulator
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'video'
                  ? 'bg-blue-accent text-white shadow-lg'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Video Streams
            </button>
          </div>
        </div>

        {/* TAB 1: LIVE INTERACTIVE CODE & ERP SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Live Running Code & Log Terminal */}
            <div className="lg:col-span-7 futuristic-card bg-bg-card p-6 md:p-8 space-y-6 flex flex-col justify-between border-border-subtle">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-5 h-5 text-blue-bright" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      LIVE LARAVEL & MYSQL BACKEND LOG STREAM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-mono text-[11px] text-emerald-400 font-bold">LOGGING LIVE</span>
                  </div>
                </div>

                {/* Animated Terminal Screen */}
                <div className="code-terminal min-h-[220px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs text-blue-light font-mono">// Active Query Stream // Database Pool: OK</div>
                    {logs.map((log, i) => (
                      <div key={i} className="text-[11px] font-mono text-emerald-400/90 animate-fadeIn leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-border-subtle/60 flex items-center justify-between text-[10px] font-mono text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <RefreshCw className="w-3 h-3 text-blue-bright animate-spin" />
                      Auto-syncing MySQL Transactions...
                    </span>
                    <span className="text-blue-light font-bold">
                      {queryCount.toLocaleString()} Queries Served
                    </span>
                  </div>
                </div>
              </div>

              {/* Code Snippet Highlight */}
              <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle text-xs space-y-2">
                <div className="flex items-center justify-between text-text-dim font-mono text-[10px]">
                  <span>PHP 8.2 SERVICE LAYER EXECUTION</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <p className="text-xs text-text-muted font-mono">
                  <span className="text-blue-light">return</span> <span className="text-white">Shift::where</span>('<span className="text-emerald-300">employee_id</span>', <span className="text-white">$employeeId</span>)-&gt;<span className="text-white">exists</span>();
                </p>
              </div>

            </div>

            {/* Right Box: Live Running ERP Data Pipeline Flow Diagram */}
            <div className="lg:col-span-5 futuristic-card bg-bg-card p-6 md:p-8 space-y-6 flex flex-col justify-between border-border-subtle">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-blue-bright" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      ERP MATERIAL & SHIFT PIPELINE
                    </span>
                  </div>
                  <span className="cyber-badge text-[10px]">ACTIVE FLOW</span>
                </div>

                <p className="text-xs text-text-muted">
                  Real-time visualization of interconnected data movement between BOM master tables, inventory components, and shift rosters.
                </p>

                {/* Animated Pipeline Nodes */}
                <div className="space-y-3 pt-2 font-mono text-xs">
                  {[
                    { step: '01', name: 'Raw Material Inventory Master', status: 'Stock Verified', nodeIdx: 0 },
                    { step: '02', name: 'Bill of Materials (BOM) Calculation', status: 'Requirements Mapped', nodeIdx: 1 },
                    { step: '03', name: 'Machine Master & Component Allocation', status: 'Processing Queue', nodeIdx: 2 },
                    { step: '04', name: 'Employee Shift Overlap Validator', status: 'Roster Validated', nodeIdx: 3 },
                  ].map((item) => {
                    const isNodeActive = activeNode === item.nodeIdx;
                    return (
                      <div
                        key={item.step}
                        className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                          isNodeActive
                            ? 'bg-blue-accent/10 border-blue-bright text-white shadow-lg'
                            : 'bg-bg-surface border-border-subtle text-text-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg text-[10px] flex items-center justify-center font-bold ${
                            isNodeActive ? 'bg-blue-bright text-white' : 'bg-bg-card text-text-dim'
                          }`}>
                            {item.step}
                          </span>
                          <span className="font-bold text-xs">{item.name}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {isNodeActive && <span className="w-2 h-2 rounded-full bg-blue-bright animate-ping"></span>}
                          <span className={`text-[10px] ${isNodeActive ? 'text-blue-light font-bold' : 'text-text-dim'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-3.5 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-text-muted">SYSTEM STATUS</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  All Pipelines Operational
                </span>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: RELIABLE TECH VIDEO STREAMS */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Video 1 */}
            <div className="futuristic-card bg-bg-card p-6 md:p-8 space-y-6 border-border-subtle">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="cyber-badge font-mono text-xs">BACKEND & CODE</span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  STREAMING NOW
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-black border border-border-subtle aspect-video shadow-2xl">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/g6BtbIiJ_EI?autoplay=1&mute=1&loop=1&playlist=g6BtbIiJ_EI&controls=0&modestbranding=1"
                  title="Software Architecture Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-display">
                  Laravel & System Engineering Pipeline
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Real-time visualization of clean software architecture, database query optimization, and REST API controllers.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="futuristic-card bg-bg-card p-6 md:p-8 space-y-6 border-border-subtle">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="cyber-badge font-mono text-xs">ERP & DATA STREAM</span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  STREAMING NOW
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-black border border-border-subtle aspect-video shadow-2xl">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/1Ls8AIsY748?autoplay=1&mute=1&loop=1&playlist=1Ls8AIsY748&controls=0&modestbranding=1"
                  title="ERP Systems Data Flow"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-display">
                  Enterprise Data Infrastructure & Systems
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Visualizing multi-tenant ERP operations, BOM components tracking, and employee shift roster matrix.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Telemetry Status Bar */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-bg-card border border-border-subtle space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-4 gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-bright" />
              <h3 className="text-base font-bold text-white font-mono uppercase">
                REAL-TIME TELEMETRY STATUS
              </h3>
            </div>
            <span className="cyber-badge font-mono text-xs">
              HEALTH CHECK: 100% OPTIMAL
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle">
              <span className="text-text-dim block text-[10px] uppercase mb-1">API LATENCY</span>
              <span className="text-emerald-400 font-bold text-sm">14ms AVG</span>
            </div>

            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle">
              <span className="text-text-dim block text-[10px] uppercase mb-1">DATABASE ENGINE</span>
              <span className="text-blue-light font-bold text-sm">MySQL 8.0 READY</span>
            </div>

            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle">
              <span className="text-text-dim block text-[10px] uppercase mb-1">FRAMEWORK STACK</span>
              <span className="text-white font-bold text-sm">Laravel 11.x</span>
            </div>

            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle">
              <span className="text-text-dim block text-[10px] uppercase mb-1">SECURITY AUTH</span>
              <span className="text-emerald-400 font-bold text-sm">JWT / SANCTUM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
