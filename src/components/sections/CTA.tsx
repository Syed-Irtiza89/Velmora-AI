import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card gradient-border p-12 sm:p-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)' }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
          <div className="ambient-blob w-64 h-64 bg-blue-600/20 -top-20 -right-20" />
          <div className="ambient-blob w-64 h-64 bg-purple-600/15 -bottom-20 -left-20" style={{ animationDelay: '4s' }} />

          <Sparkles size={40} className="mx-auto mb-6 text-cyan-400" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 relative z-10" style={{ color: 'var(--text-primary)' }}>
            Start Automating Your{' '}
            <span className="gradient-text">Business Today</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto relative z-10" style={{ color: 'var(--text-secondary)' }}>
            Join 500+ businesses that are already using Velmora AI to generate more leads, save time, and delight customers 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 glow-button hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 text-base"
            >
              Start Free – No Credit Card Needed
              <ArrowRight size={20} />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white/10 text-base"
              style={{ color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            >
              Book a Live Demo
            </a>
          </div>

          <p className="text-xs mt-6 relative z-10" style={{ color: 'var(--text-secondary)' }}>
            ✓ Free forever plan available &nbsp;·&nbsp; ✓ No setup fees &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
