import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Cpu, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect Your Business',
    desc: 'Instantly plug in your website, WhatsApp, or Facebook Page. No coding required — just copy, paste, and go live.',
    checks: ['One-click integrations', 'No technical skills needed', 'Works with any website'],
    color: '#3b82f6',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Train Your AI Chatbot',
    desc: 'Upload your FAQs, product catalog, or business info. Velmora AI learns your brand voice in minutes.',
    checks: ['Smart knowledge upload', 'Tone & personality settings', 'Multilingual support'],
    color: '#06b6d4',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Getting Leads',
    desc: 'Watch your AI capture, qualify, and follow up with leads automatically — while you focus on what matters.',
    checks: ['Real-time lead alerts', 'Automated follow-ups', 'Full analytics reporting'],
    color: '#8b5cf6',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="ambient-blob w-80 h-80 bg-purple-600/10 bottom-20 left-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border bg-purple-50 border-purple-200 text-purple-600"
          >
            🚀 Simple 3-Step Setup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Up and Running in{' '}
            <span className="gradient-text">10 Minutes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No technical skills required. Set up your AI chatbot and start capturing leads today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0 opacity-20" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #8b5cf6, transparent)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] as any }}
                  className="glass-card p-10 relative group hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                >
                  {/* Step number - Large Background Number */}
                  <div
                    className="text-8xl font-black absolute -top-4 -right-2 select-none pointer-events-none text-slate-100 opacity-60 group-hover:scale-110 group-hover:text-slate-200 transition-all duration-700 z-0"
                    style={{ lineHeight: 1 }}
                  >
                    {step.number}
                  </div>

                  {/* Icon with glow */}
                  <div
                    className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                      border: `1px solid ${step.color}30`,
                      boxShadow: `0 8px 20px ${step.color}15`,
                    }}
                  >
                    <Icon size={30} style={{ color: step.color }} />
                    <div className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-40" style={{ backgroundColor: step.color }} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-8 font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {step.desc}
                  </p>

                  <ul className="space-y-3">
                    {step.checks.map(check => (
                      <li key={check} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-slate-50 border border-slate-200">
                          <CheckCircle size={14} style={{ color: step.color, flexShrink: 0 }} />
                        </div>
                        {check}
                      </li>
                    ))}
                  </ul>

                  {/* top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                  />
                  
                  {/* corner glow */}
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 blur-[60px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: step.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
