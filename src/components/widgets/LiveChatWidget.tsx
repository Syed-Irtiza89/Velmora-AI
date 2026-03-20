import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, Minimize2 } from 'lucide-react';
import logo from '../../assets/logo.png';

interface Msg { id: number; text: string; isBot: boolean; }

const QUICK_REPLIES = ['Tell me about pricing', 'Book a demo', 'How does it work?', 'Contact support'];

const BOT_RESPONSES: Record<string, string> = {
  'Tell me about pricing': 'We have 3 plans: Basic (Free), Pro ($49/mo), and Premium ($99/mo). All paid plans include a 14-day free trial! 🎉',
  'Book a demo': 'I\'d love to arrange a demo! Please share your email and a team member will reach out within 1 hour. 🚀',
  'How does it work?': 'Simple 3 steps: 1️⃣ Connect your site or WhatsApp, 2️⃣ Train the AI with your business info, 3️⃣ Start getting leads automatically!',
  'Contact support': 'You can reach our support team at hello@velmoraai.com or via WhatsApp. We reply within 30 minutes! 💬',
};

const LiveChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, text: 'Hi there! 👋 I\'m Velmora AI. How can I help your business grow today?', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const resp = BOT_RESPONSES[text] ?? 'Thanks for your message! A specialist will be in touch shortly. Is there anything else I can help with? 😊';
      setTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: resp, isBot: true }]);
    }, 1200);
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="fixed bottom-24 right-5 z-50 w-80 sm:w-96 glass-card gradient-border overflow-hidden"
            style={{ background: 'rgba(10, 12, 28, 0.97)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3.5 border-b"
              style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src={logo} alt="Bot" className="w-7 h-7 object-contain" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Velmora AI</p>
                  <p className="text-xs text-emerald-400">Online · replies instantly</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <Minimize2 size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-64 overflow-y-auto">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Zap size={10} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.isBot ? 'bg-white/10 text-blue-100 rounded-tl-sm' : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <Zap size={10} className="text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 flex gap-1.5">
                    {[0,1,2].map(i => (
                      <motion.span key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map(qr => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="text-xs px-2.5 py-1 rounded-full border hover:bg-blue-500/20 transition-colors"
                  style={{ borderColor: 'rgba(59,130,246,0.4)', color: '#60a5fa' }}
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none border focus:border-blue-500 transition-colors"
                  style={{ borderColor: 'var(--border-color)' }}
                />
                <button type="submit" className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0">
                  <Send size={14} className="text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', boxShadow: '0 0 30px rgba(59,130,246,0.5)' }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Zap size={22} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
            1
          </span>
        )}
      </motion.button>
    </>
  );
};

export default LiveChatWidget;
