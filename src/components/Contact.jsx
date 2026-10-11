import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const emailAddress = "harpreet001233@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface/40 border-t border-border-subtle relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        
        {/* Section Header Line */}
        <div className="hud-line-connector mb-16">
          <div className="hud-node-dot"></div>
          <span className="font-mono text-xs text-blue-bright uppercase tracking-widest font-bold flex items-center gap-2">
            <Mail className="w-4 h-4" />
            GET IN TOUCH
          </span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest ml-auto">
            CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="cyber-badge font-mono text-xs">LET'S BUILD TOGETHER</span>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                Have a problem <span className="text-gradient-blue">worth solving?</span>
              </h2>
              
              <p className="text-lg text-text-muted leading-relaxed font-normal">
                Let's turn your idea, workflow or business problem into reliable software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#contact-form" className="btn-futuristic py-3.5 px-8">
                Let's Talk
                <Send className="w-4 h-4" />
              </a>

              <a href="#work" className="btn-futuristic-outline py-3.5 px-8">
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-bg-card border border-border-subtle space-y-4">
              <span className="text-xs font-mono uppercase text-text-dim tracking-wider block">
                DIRECT CONTACT EMAIL:
              </span>
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-bg-surface border border-border-subtle">
                <span className="font-mono text-sm sm:text-base text-white truncate font-medium">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-blue-accent/10 hover:bg-blue-accent hover:text-white border border-blue-accent/30 text-blue-bright text-xs font-mono transition-all shrink-0 flex items-center gap-2 font-bold"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              <p className="text-xs text-text-muted">
                Available for full-time backend roles, custom ERP software projects, and technical consultations.
              </p>
            </div>

          </div>

          {/* Right Column: Live Contact Form */}
          <div id="contact-form" className="lg:col-span-6">
            <div className="futuristic-card bg-bg-card border-border-subtle p-8 md:p-10 shadow-2xl">
              
              <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-bright" />
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message sent successfully! I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono mb-6">
                  Please fill in all required fields (Name, Email, Message).
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase mb-2">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-surface border border-border-subtle text-white placeholder-text-dim text-sm focus:outline-none focus:border-blue-bright transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase mb-2">Your Email *</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-surface border border-border-subtle text-white placeholder-text-dim text-sm focus:outline-none focus:border-blue-bright transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase mb-2">Project / Requirement Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. ERP System Development / Laravel Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-surface border border-border-subtle text-white placeholder-text-dim text-sm focus:outline-none focus:border-blue-bright transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase mb-2">Message & Details *</label>
                  <textarea
                    rows="4"
                    placeholder="Describe your business problem, project scope, or technical requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-surface border border-border-subtle text-white placeholder-text-dim text-sm focus:outline-none focus:border-blue-bright transition-colors font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-futuristic justify-center py-4 text-sm font-bold"
                >
                  {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
