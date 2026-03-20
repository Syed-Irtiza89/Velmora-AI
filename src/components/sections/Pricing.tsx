import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    icon: Zap,
    price: 0,
    period: 'Free forever',
    desc: 'Perfect for getting started',
    color: '#3b82f6',
    popular: false,
    features: [
      '1 AI chatbot',
      '500 conversations/month',
      'Basic lead capture',
      'Email support',
      'Standard analytics',
      'Website widget',
    ],
    disabled: ['WhatsApp integration', 'Smart follow-ups', 'Custom branding'],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    icon: Shield,
    price: 49,
    period: '/month',
    desc: 'Most popular for growing businesses',
    color: '#06b6d4',
    popular: true,
    features: [
      '3 AI chatbots',
      'Unlimited conversations',
      'Advanced lead qualification',
      'WhatsApp integration',
      'Smart follow-ups',
      'Priority support',
      'Full analytics dashboard',
      'Custom branding',
    ],
    disabled: [],
    cta: 'Start Pro',
  },
  {
    name: 'Premium',
    icon: Crown,
    price: 99,
    period: '/month',
    desc: 'For agencies and enterprises',
    color: '#8b5cf6',
    popular: false,
    features: [
      'Unlimited AI chatbots',
      'Unlimited conversations',
      'Multi-location support',
      'Advanced integrations (CRM)',
      'White-label solution',
      'Dedicated account manager',
      'Custom AI training',
      'SLA guarantee',
      'API access',
    ],
    disabled: [],
    cta: 'Go Premium',
  },
];

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="ambient-blob w-96 h-96 bg-cyan-500/10 top-0 left-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border bg-indigo-500/10 border-indigo-500/20 text-indigo-400 mb-6"
          >
            💎 Investment & Growth
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Plans That Grow <span className="gradient-text">With You</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
            Choose the perfect plan for your business. No hidden fees. Cancel anytime. 14-day free trial on all paid plans.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-2 rounded-2xl glass-card bg-white/5 border-white/5 relative">
            <button
              onClick={() => setAnnual(false)}
              className="relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10"
              style={{ color: !annual ? '#fff' : 'var(--text-secondary)' }}
            >
              {!annual && (
                <motion.div
                  layoutId="billingToggle"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 flex items-center gap-3"
              style={{ color: annual ? '#fff' : 'var(--text-secondary)' }}
            >
              {annual && (
                <motion.div
                  layoutId="billingToggle"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Annual</span>
              <span className="relative z-10 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-10">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = annual && plan.price > 0 ? Math.floor(plan.price * 0.8) : plan.price;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] as any }}
                className={`glass-card p-10 lg:p-14 relative group flex flex-col h-full bg-slate-900/40 backdrop-blur-3xl ${plan.popular ? 'border-indigo-500/30 scale-105 z-10 shadow-2xl shadow-indigo-500/10' : 'border-white/5'}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-xl z-20 whitespace-nowrap"
                    style={{ background: `linear-gradient(90deg, ${plan.color}, #8482f6)` }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon + name */}
                <div className="flex items-center gap-5 mb-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30`, boxShadow: `0 8px 30px ${plan.color}10` }}
                  >
                    <Icon size={28} style={{ color: plan.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>{plan.name}</h3>
                    <p className="text-[13px] font-medium leading-tight" style={{ color: 'var(--text-secondary)' }}>{plan.desc}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>
                      {plan.price === 0 ? 'Free' : `$${price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-lg font-bold opacity-40 uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>/mo</span>
                    )}
                  </div>
                  {annual && plan.price > 0 && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-bold text-emerald-400 mt-3 flex items-center gap-1.5"
                    >
                      <Zap size={14} className="fill-emerald-400" />
                      Save ${(plan.price - price) * 12}/yr
                    </motion.p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-5 rounded-2xl font-bold tracking-tight mb-10 transition-all duration-300 hover:scale-[1.02] shadow-xl ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">What's included:</p>
                <ul className="space-y-4 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white/5 border border-white/5 shrink-0">
                        <Check size={14} style={{ color: plan.color }} />
                      </div>
                      {f}
                    </li>
                  ))}
                  {plan.disabled.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm font-bold opacity-20">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                        <div className="w-2 h-0.5 bg-slate-500" />
                      </div>
                      <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
