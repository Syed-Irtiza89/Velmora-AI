import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Owner, Luxe Salon & Spa',
    text: 'Velmora AI transformed our booking process completely. We went from missing 40% of inquiries to handling 100% automatically. Our revenue grew by 35% in just 2 months!',
    rating: 5,
    avatar: '👩‍💼',
    color: '#ec4899',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Real Estate Agent, Prime Properties',
    text: 'I was skeptical at first, but the lead qualification alone is worth every penny. The AI handles initial inquiries better than most salespeople I\'ve hired.',
    rating: 5,
    avatar: '👨‍💻',
    color: '#3b82f6',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Clinic Director, MedCare Plus',
    text: 'Patient satisfaction scores went from 82% to 97% since we deployed Velmora AI. The follow-up reminders alone reduced no-shows by 60%.',
    rating: 5,
    avatar: '👩‍⚕️',
    color: '#22c55e',
  },
  {
    name: 'Marco Rossi',
    role: 'Owner, Bella Italia Restaurant',
    text: 'We now handle 3x more reservations without hiring extra staff. The WhatsApp integration was a game-changer — our customers love the instant responses.',
    rating: 5,
    avatar: '👨‍🍳',
    color: '#f59e0b',
  },
  {
    name: 'Lisa Chen',
    role: 'Marketing Director, UrbanFit Gym',
    text: 'The analytics dashboard gives us incredible insights into what our customers actually want. Velmora AI pays for itself within the first week every month.',
    rating: 5,
    avatar: '👩‍💪',
    color: '#8b5cf6',
  },
  {
    name: 'James Okonkwo',
    role: 'Developer, TechBuild Agency',
    text: 'Setting up was genuinely 10 minutes. Their API is clean, their support is responsive, and the AI quality is better than anything else we tested at this price point.',
    rating: 5,
    avatar: '👨‍💼',
    color: '#06b6d4',
  },
];

const TestimonialCard: React.FC<{ t: any }> = ({ t }) => (
  <div className="glass-card p-8 w-[350px] sm:w-[400px] flex-shrink-0 mx-4 relative group hover:border-white/20 transition-all duration-300" style={{ background: 'rgba(30, 41, 59, 0.4)' }}>
    {/* Stars */}
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <Quote size={40} className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity" style={{ color: t.color }} />
    <p className="text-lg leading-relaxed mb-8 font-medium text-slate-200">
      "{t.text}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 shadow-lg"
        style={{ background: `${t.color}20`, border: `1px solid ${t.color}40`, boxShadow: `0 0 20px ${t.color}10` }}
      >
        {t.avatar}
      </div>
      <div>
        <p className="text-sm font-bold text-white tracking-tight">{t.name}</p>
        <p className="text-xs font-medium text-slate-400">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  // Duplicate list to ensure seamless transition
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden mesh-gradient py-24">
      <div className="ambient-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -right-20" />
      <div className="ambient-blob w-[400px] h-[400px] bg-purple-600/10 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border bg-yellow-500/10 border-yellow-500/20 text-yellow-500 mb-6 font-sans">
            ✦ Social Proof & Success
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Trusted by <span className="gradient-text">500+ Businesses</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Velmora AI is the secret weapon for local businesses looking to automate growth and dominate their local market.
          </p>
        </motion.div>
      </div>

      <div className="space-y-8 relative">
        {/* Row 1: Left to Right */}
        <div className="marquee-container">
          <div className="marquee-content" style={{ '--duration': '50s' } as any}>
            {row1.map((t, i) => (
              <TestimonialCard key={`${t.name}-r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-container">
          <div className="marquee-content marquee-reverse" style={{ '--duration': '60s' } as any}>
            {row2.map((t, i) => (
              <TestimonialCard key={`${t.name}-r2-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Overlay Gradients for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
