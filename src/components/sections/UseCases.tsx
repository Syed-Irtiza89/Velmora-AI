import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Scissors, HeartPulse, UtensilsCrossed } from 'lucide-react';

const useCases = [
  {
    id: 'realestate',
    icon: Building2,
    title: 'Real Estate',
    color: '#3b82f6',
    tagline: 'Turn every inquiry into a viewing',
    desc: 'Automatically respond to property inquiries 24/7, qualify buyer intent, schedule viewings, and nurture leads until they\'re ready to buy or rent.',
    stats: [
      { label: 'More Leads Qualified', value: '3x' },
      { label: 'Response Time', value: '<1s' },
      { label: 'Booking Rate Increase', value: '+65%' },
    ],
    features: ['24/7 property inquiry handling', 'Automated viewing bookings', 'Lead scoring & routing', 'WhatsApp property updates'],
  },
  {
    id: 'salons',
    icon: Scissors,
    title: 'Salons & Spas',
    color: '#ec4899',
    tagline: 'Fill your calendar automatically',
    desc: 'Let AI handle appointment bookings, send reminders, promote special offers, and re-engage customers who haven\'t visited recently.',
    stats: [
      { label: 'No-show Reduction', value: '72%' },
      { label: 'Bookings Automated', value: '90%' },
      { label: 'Revenue Increase', value: '+40%' },
    ],
    features: ['Automated appointment scheduling', 'Smart reminders & follow-ups', 'Promotional campaign messaging', 'Customer loyalty tracking'],
  },
  {
    id: 'clinics',
    icon: HeartPulse,
    title: 'Clinics & Healthcare',
    color: '#22c55e',
    tagline: 'Streamline patient communication',
    desc: 'Handle appointment requests, share health information, send medication reminders, and provide compassionate first-response support.',
    stats: [
      { label: 'Patient Satisfaction', value: '98%' },
      { label: 'Admin Hours Saved', value: '15/wk' },
      { label: 'Appointment Fills', value: '+55%' },
    ],
    features: ['HIPAA-compliant messaging', 'Appointment reminders', 'Pre-visit questionnaires', 'Post-visit follow-up care'],
  },
  {
    id: 'restaurants',
    icon: UtensilsCrossed,
    title: 'Restaurants',
    color: '#f59e0b',
    tagline: 'More tables, less phone calls',
    desc: 'Accept reservations, take orders, answer menu questions, and send personalized offers to bring customers back more often.',
    stats: [
      { label: 'Table Reservations', value: '+80%' },
      { label: 'Order Inquiry Response', value: 'Instant' },
      { label: 'Repeat Customers', value: '+45%' },
    ],
    features: ['Online reservation handling', 'Menu FAQ automation', 'Daily specials broadcasting', 'Feedback collection'],
  },
];

const UseCases: React.FC = () => {
  const [active, setActive] = useState('realestate');
  const current = useCases.find(u => u.id === active)!;
  const Icon = current.icon;

  return (
    <section id="use-cases" className="section-padding relative overflow-hidden">
      <div className="ambient-blob w-96 h-96 bg-cyan-500/10 top-10 left-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border bg-cyan-50 border-cyan-200 text-cyan-600"
          >
            🏢 Built For Your Industry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Works For Every{' '}
            <span className="gradient-text-blue">Business Type</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Velmora AI adapts to your industry, your brand voice, and your customers.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-white border border-slate-200 w-fit mx-auto rounded-[20px] shadow-sm relative z-20">
          {useCases.map(uc => {
            const TabIcon = uc.icon;
            const isActive = active === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => setActive(uc.id)}
                className="relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 flex items-center gap-2 group"
                style={{ color: isActive ? '#fff' : 'var(--text-secondary)' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg shadow-md bg-blue-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <TabIcon size={16} className={`relative z-10 ${isActive ? 'text-white' : 'group-hover:text-blue-600 transition-colors'}`} />
                <span className="relative z-10">{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
              className="bg-white rounded-3xl p-10 lg:p-14 border border-slate-200 shadow-xl grid lg:grid-cols-2 gap-16 items-center absolute inset-0 h-full overflow-hidden"
            >
              {/* Left Column */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ 
                    background: `linear-gradient(135deg, ${current.color}15, ${current.color}05)`, 
                    border: `1px solid ${current.color}30`,
                    boxShadow: `0 4px 15px ${current.color}10`
                  }}
                >
                  <Icon size={32} style={{ color: current.color }} />
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs font-black uppercase tracking-[0.2em] mb-4" 
                  style={{ color: current.color }}
                >
                  {current.tagline}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  {current.title} AI <span className="text-slate-400">Automation</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg leading-relaxed mb-8 font-medium" 
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {current.desc}
                </motion.p>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {current.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: current.color }} />
                      {f}
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* Right Column — Improved Stats for Light Theme */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 relative z-10">
                {current.stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-row lg:flex-row items-center gap-6 hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="text-4xl font-black tracking-tighter"
                      style={{ color: current.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="h-10 w-px bg-slate-200 hidden lg:block" />
                    <div className="text-sm font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
