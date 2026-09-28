import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer id="contact" className="w-full glass-panel py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo_mq_luxury.png" alt="Maison Quintessence Luxury Logo" className="w-12 h-12 object-contain opacity-80" />
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Maison Quintessence © 2026</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono tracking-widest uppercase text-slate-400">
            <a href="#" className="hover:text-mq-silver transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-slate-600 uppercase mt-4 flex items-center gap-3">
            <span>Diseño y Desarrollo por DaniSid</span>
            <span>|</span>
            <a href="https://wa.me/34641868620" className="hover:text-mq-gold transition-colors" target="_blank" rel="noreferrer">WhatsApp</a>
            <span>|</span>
            <a href="mailto:garciadanielsid@gmail.com" className="hover:text-mq-gold transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
