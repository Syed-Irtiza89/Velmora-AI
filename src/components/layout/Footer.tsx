import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={logo} alt="Velmora AI" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                Velmora <span className="text-blue-600">AI</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              Chatbots That Drive Local Growth. Helping businesses automate conversations and turn leads into customers.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-slate-100 hover:scale-110"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <Icon size={16} style={{ color: 'var(--text-secondary)' }} className="hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text-primary)' }}>Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'Pricing', 'How It Works', 'Use Cases', 'Demo', 'API Docs'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text-primary)' }}>Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text-primary)' }}>Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={15} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@velmoraai.com" className="text-sm hover:text-blue-600 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  hello@velmoraai.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+10000000000" className="text-sm hover:text-cyan-600 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  San Francisco, CA
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Stay in the loop</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white border text-xs px-3 py-2 rounded-lg outline-none focus:border-blue-500 transition-colors shadow-sm"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                />
                <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            © {year} Velmora AI. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(link => (
              <a key={link} href="#" className="text-xs transition-colors hover:text-blue-600" style={{ color: 'var(--text-secondary)' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
