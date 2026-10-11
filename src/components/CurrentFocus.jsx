import React from 'react';
import { Compass, Sparkles, Cpu, Layers, Database, ArrowRight } from 'lucide-react';

export default function CurrentFocus() {
  const explorationTopics = [
    { title: 'Advanced Laravel Architecture', category: 'Backend' },
    { title: 'Scalable Backend Systems', category: 'Infrastructure' },
    { title: 'Modern React Development', category: 'Frontend' },
    { title: 'API Architecture', category: 'Integrations' },
    { title: 'Database Optimization', category: 'Performance' },
    { title: 'AI/ML Integration into Business Applications', category: 'Emerging Tech' },
    { title: 'RAG and Intelligent Data Systems', category: 'Data & AI' },
    { title: 'Automation of Business Workflows', category: 'ERP & Ops' }
  ];

  return (
    <section id="focus" className="py-20 relative">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* Section Card Frame */}
        <div className="portfolio-card bg-gradient-to-r from-bg-card via-bg-surface to-bg-card border-border-subtle p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-border-subtle pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-bright uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>FORWARD-LOOKING EXPLORATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Currently Exploring
              </h2>
            </div>
            
            <span className="text-xs font-mono text-text-muted bg-bg-surface px-4 py-2 rounded-full border border-border-subtle">
              Continuous Skill Evolution
            </span>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {explorationTopics.map((topic) => (
              <div
                key={topic.title}
                className="p-4 rounded-xl bg-bg-card border border-border-subtle/80 hover:border-blue-bright/30 transition-all flex flex-col justify-between group"
              >
                <span className="text-[10px] font-mono text-blue-bright uppercase mb-2">
                  {topic.category}
                </span>
                
                <div className="text-sm font-semibold text-white group-hover:text-blue-bright transition-colors flex items-center justify-between">
                  <span>{topic.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 text-blue-bright" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
