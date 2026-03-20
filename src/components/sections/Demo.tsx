import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, Zap, X, Send } from 'lucide-react';
import logo from '../../assets/logo.png';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const demoConversation: Message[] = [
  { id: 1, text: 'Hi there! 👋 I\'m the Velmora AI assistant. What can I help you with today?', isBot: true },
  { id: 2, text: 'I\'m looking for information about your pricing plans', isBot: false },
  { id: 3, text: 'Great question! We have 3 plans: Basic (free), Pro ($49/mo), and Premium ($99/mo). Which would suit your business best?', isBot: true },
  { id: 4, text: 'What\'s included in the Pro plan?', isBot: false },
  { id: 5, text: 'With Pro you get: unlimited AI conversations, WhatsApp integration, lead capture forms, smart follow-ups, and priority support. Want me to schedule a demo? 🚀', isBot: true },
  { id: 6, text: 'Yes! Book me a demo please', isBot: false },
  { id: 7, text: 'Perfect! I\'ve noted your interest. A Velmora specialist will reach out within 24 hours. Is there anything else I can help with? ✨', isBot: true },
];

const Demo: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (currentIndex >= demoConversation.length) return;

    const msg = demoConversation[currentIndex];
    if (msg.isBot) {
      setIsTyping(true);
      const t = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, msg]);
        setTimeout(() => setCurrentIndex(i => i + 1), 800);
      }, 1200);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
        setTimeout(() => setCurrentIndex(i => i + 1), 400);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [currentIndex]);

  const resetDemo = () => {
    setVisibleMessages([]);
    setCurrentIndex(0);
  };

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="ambient-blob w-80 h-80 bg-blue-600/15 top-10 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#60a5fa' }}
            >
              💬 Live Preview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              See It In{' '}
              <span className="gradient-text">Action</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Watch how Velmora AI handles real customer conversations — qualifying leads, answering questions, and booking appointments without any human intervention.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                ['Instant responses, any time of day', '#3b82f6'],
                ['Personalized messaging based on context', '#06b6d4'],
                ['Seamless handoff to your team when needed', '#8b5cf6'],
              ].map(([text, color]) => (
                <li key={String(text)} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}20`, border: `1px solid ${color}50` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: String(color) }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{String(text)}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href="#pricing"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 glow-button text-sm flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Try for Free <ArrowRight size={16} />
              </a>
              <button
                onClick={resetDemo}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/10"
                style={{ color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
              >
                Replay Demo
              </button>
            </div>
          </motion.div>

          {/* Right — animated chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass-card gradient-border overflow-hidden"
              style={{ background: 'rgba(10, 12, 28, 0.9)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 flex items-center justify-center">
                      <img src={logo} alt="Bot" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Velmora AI</p>
                    <p className="text-xs text-emerald-400">Always online</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3 min-h-[320px] max-h-[360px] overflow-y-auto">
                <AnimatePresence>
                  {visibleMessages.map(msg => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {msg.isBot && (
                        <div className="w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                          <img src={logo} alt="Bot" className="w-5 h-5 object-contain" />
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs font-medium leading-relaxed ${
                          msg.isBot
                            ? 'rounded-tl-sm bg-white/10 text-blue-100'
                            : 'rounded-tr-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src={logo} alt="Bot" className="w-5 h-5 object-contain" />
                      </div>
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5">
                        {[0, 1, 2].map(i => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-blue-400 block"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2, ease: "easeInOut" }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="px-5 py-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 outline-none"
                  />
                  <button className="w-7 h-7 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Send size={12} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
