import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-10 left-6 sm:left-10 z-50 flex items-center gap-4 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Button with Halo */}
      <div className="relative">
        <div className="halo-pulse absolute inset-0 rounded-full bg-emerald-500/20" />
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-emerald-500/40 relative z-10 overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7 sm:w-8 sm:h-8">
            <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.676 5.101 1.856 7.261L1 31l7.945-1.833C10.988 30.36 13.445 31 16 31c8.284 0 15-6.716 15-15C31 7.716 24.284 1 16 1zm0 27.5c-2.29 0-4.528-.616-6.47-1.782l-.463-.275-4.724 1.09 1.122-4.603-.304-.476C3.93 20.543 3.25 18.314 3.25 16c0-7.024 5.726-12.75 12.75-12.75S28.75 8.976 28.75 16 23.024 28.5 16 28.5zm6.97-9.47c-.382-.192-2.26-1.114-2.61-1.24-.35-.127-.605-.191-.858.192-.254.382-.982 1.24-1.205 1.494-.222.254-.443.286-.826.095-.382-.19-1.614-.594-3.074-1.896-1.137-1.013-1.904-2.265-2.128-2.647-.222-.382-.024-.589.167-.78.172-.172.382-.446.573-.668.191-.223.254-.382.382-.637.127-.254.063-.477-.032-.668-.095-.192-.858-2.067-1.175-2.83-.31-.74-.622-.64-.858-.65L11.18 9c-.222 0-.573.083-.87.414-.299.33-1.14 1.113-1.14 2.716s1.167 3.15 1.33 3.368c.16.218 2.3 3.508 5.575 4.921.779.337 1.388.538 1.862.69.782.25 1.494.214 2.057.13.628-.093 1.933-.79 2.205-1.554.27-.764.27-1.42.19-1.557-.083-.127-.318-.19-.7-.38z"/>
          </svg>
        </div>
      </div>

      {/* Persistent Label */}
      <div className="flex flex-col">
        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border border-emerald-500/10 mb-1 w-fit">
          Online
        </span>
        <span className="text-white text-sm font-bold tracking-tight drop-shadow-md">
          Chat with us
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
