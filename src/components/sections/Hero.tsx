import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageSquare, Zap } from 'lucide-react';
import Scene3D from '../3d/Scene3D';
import logo from '../../assets/logo.png';

const ChatBubble: React.FC<{ text: string; isBot?: boolean; delay?: number }> = ({ text, isBot = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
    viewport={{ once: true }}
    className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
  >
    {isBot && (
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
        <img src={logo} alt="Bot" className="w-7 h-7 object-contain" />
      </div>
    )}
    <div
      className={`max-w-[80%] px-4 py-3 rounded-2xl text-[13px] font-medium leading-relaxed ${
        isBot
          ? 'rounded-tl-sm bg-white/10 text-slate-100 backdrop-blur-md border border-white/5'
          : 'rounded-tr-sm bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
      }`}
    >
      {text}
    </div>
  </motion.div>
);

const ChatPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      className="glass-card gradient-border p-6 w-full max-w-sm mx-auto shadow-2xl"
      style={{ background: 'rgba(15, 23, 42, 0.6)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="relative">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-xl">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#1e1b4b]" />
        </div>
        <div>
          <p className="text-sm font-bold text-white tracking-tight">Velmora AI Bot</p>
          <p className="text-[11px] text-emerald-400 font-medium">Active & Ready</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-1">
        <ChatBubble isBot text="👋 Hi! How can I help your business grow today?" delay={1.2} />
        <ChatBubble text="I need more high-quality leads for my clinic." delay={2} />
        <ChatBubble isBot text="Understood. I can qualify patients and book consultations automatically 24/7. Want a quick setup? ✨" delay={2.8} />
      </div>

      {/* Input bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="flex items-center gap-2 mt-5 bg-white/5 rounded-2xl px-4 py-3 border border-white/5"
      >
        <span className="text-[11px] text-slate-400 flex-1">Type your response...</span>
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Ambient glowing orbs */}
      <div className="ambient-blob w-[500px] h-[500px] bg-blue-600/20 -top-20 -left-20" />
      <div className="ambient-blob w-[400px] h-[400px] bg-purple-600/20 bottom-10 right-0" style={{ animationDelay: '3s' }} />
      <div className="ambient-blob w-[300px] h-[300px] bg-indigo-500/15 top-1/2 left-1/3" style={{ animationDelay: '6s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase border bg-white/5 border-white/10 text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen AI Business Growth
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Turn <span className="gradient-text">Conversations</span> Into <span className="gradient-text">Customers</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Velmora AI empowers businesses to automate engagement, qualify leads, and scale faster with intelligent chatbots that never sleep.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="px-10 py-4.5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-500 glow-button hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Start Growing Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="px-10 py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                style={{ color: 'var(--text-primary)' }}
              >
                <Play size={18} className="fill-blue-400 text-blue-400" />
                Live Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-5 justify-center lg:justify-start opacity-80"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0F19] bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-xs font-bold text-slate-300">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="h-10 w-px bg-white/10 mx-1" />
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <span key={i} className="text-yellow-500">★</span>)}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Trusted by 500+ Innovators
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — 3D + chat preview */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative z-10"
            >
              {/* 3D Canvas Container */}
              <div className="w-full h-[400px] lg:h-[500px] relative">
                <Suspense fallback={null}>
                  <Scene3D />
                </Suspense>
              </div>

              {/* Chat preview positioned for depth */}
              <div className="absolute -bottom-10 -left-4 sm:left-0 w-full max-w-[320px] lg:max-w-[340px] px-4">
                <ChatPreview />
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
