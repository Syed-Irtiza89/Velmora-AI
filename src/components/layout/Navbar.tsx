import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' as any }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-xl border-b'
            : 'py-5'
        }`}
        style={{
          background: scrolled
            ? theme === 'dark'
              ? 'rgba(10, 10, 15, 0.85)'
              : 'rgba(248, 250, 255, 0.85)'
            : 'transparent',
          borderColor: scrolled ? 'var(--border-color)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors blur-sm" />
              <img src={logo} alt="Velmora AI Logo" className="w-9 h-9 relative z-10 object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block" style={{ color: 'var(--text-primary)' }}>
              Velmora <span className="gradient-text-blue">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-blue-400"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#pricing"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            >
              Log in
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white glow-button hover:scale-105 transition-transform duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2" style={{ color: 'var(--text-secondary)' }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ color: 'var(--text-primary)' }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 right-0 z-40 pt-20 pb-6 px-4 backdrop-blur-xl border-b"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2 transition-colors hover:text-blue-400"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a href="#pricing" className="w-full text-center px-4 py-2.5 rounded-lg border text-sm font-medium" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                  Log in
                </a>
                <a href="#contact" className="w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
