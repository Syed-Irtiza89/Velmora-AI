import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Target, Smartphone, Bell, BarChart3, Shield } from 'lucide-react';
import type { Variants } from 'framer-motion';

const features = [
  {
    icon: MessageCircle,
    title: 'AI Chat Automation',
    desc: 'Engage every visitor instantly with an AI that understands context and delivers personalized responses around the clock.',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Target,
    title: 'Lead Generation System',
    desc: 'Automatically capture and qualify leads, then route them to the right team — no forms, no friction.',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Integration',
    desc: 'Connect with customers on the platform they love most. Seamlessly integrate with WhatsApp Business.',
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.2)',
  },
  {
    icon: Bell,
    title: 'Smart Follow-Ups',
    desc: 'Automatically follow up with leads at the perfect moment using AI-driven timing and messaging.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Gain deep insights into your chatbot\'s performance, conversion rates, and customer satisfaction scores.',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption and compliance ensure your customer data is always protected and private.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.2)',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="ambient-blob w-72 h-72 bg-blue-600/10 top-20 right-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border bg-blue-50 border-blue-200 text-blue-600"
          >
            ⚡ Everything You Need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Powerful Features,{' '}
            <span className="gradient-text">Zero Complexity</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Everything your business needs to automate customer conversations, generate leads, and scale — all in one place.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover bg glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glow}, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}
                >
                  <Icon size={22} style={{ color: feature.color }} />
                </div>

                <h3 className="text-base font-semibold mb-2 relative z-10" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                  {feature.desc}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${feature.color}15` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
