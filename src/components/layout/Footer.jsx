import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer id="contact" className="w-full glass-panel py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo className="w-8 h-8 text-slate-400" monogramOnly={true} />
          <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Maison Quintessence © 2026</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono tracking-widest uppercase text-slate-400">
          <a href="https://www.danisid.com" target="_blank" rel="noreferrer" className="hover:text-mq-gold transition-colors">Daniel Sid</a>
          <a href="#" className="hover:text-mq-silver transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
