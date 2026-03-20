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
          ? 'rounded-tl-sm bg-slate-50 text-slate-700 border border-slate-100'
          : 'rounded-tr-sm bg-blue-600 text-white shadow-lg shadow-blue-500/20'
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
      className="bg-white rounded-3xl p-6 w-full max-w-sm mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="relative">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-xl">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 tracking-tight">Velmora AI Bot</p>
          <p className="text-[11px] text-emerald-500 font-medium">Active & Ready</p>
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
        className="flex items-center gap-2 mt-5 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100"
      >
        <span className="text-[11px] text-slate-400 flex-1">Type your response...</span>
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Ambient glowing orbs */}
      <div className="ambient-blob w-[500px] h-[500px] bg-blue-400/20 -top-20 -left-20" />
      <div className="ambient-blob w-[400px] h-[400px] bg-cyan-400/20 bottom-10 right-0" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase border bg-white/10 border-white/20 text-blue-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
              </span>
              Next-Gen AI Business Growth
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
            >
              Turn <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Conversations</span> Into <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Customers</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-blue-50"
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
                className="px-10 py-4.5 rounded-2xl font-bold text-blue-900 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Start Growing Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="px-10 py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 text-white"
              >
                <Play size={18} className="fill-white" />
                Live Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-5 justify-center lg:justify-start opacity-90"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1E3A8A] bg-gradient-to-br from-blue-100 to-white flex items-center justify-center text-xs font-bold text-blue-800">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="h-10 w-px bg-white/20 mx-1" />
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-100">
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
