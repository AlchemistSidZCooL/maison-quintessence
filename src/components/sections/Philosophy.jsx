import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full py-32 px-4 md:px-12 max-w-4xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-2xl md:text-4xl font-serif italic text-mq-gold mb-10 tracking-wide leading-relaxed">
          "El mar digital está lleno de ruido.<br className="hidden md:block" /> Nosotros construimos refugios de silencio."
        </h2>
        
        <div className="w-12 h-[1px] bg-slate-700 mb-12"></div>
        
        <div className="space-y-8 text-slate-400 font-light leading-loose text-sm md:text-base max-w-2xl mx-auto">
          <p>
            Como un reloj suizo o un poema bien escrito, la verdadera ingeniería debe ser invisible. 
            El cliente premium no busca especificaciones técnicas; busca certezas, elegancia y resultados inmediatos.
          </p>
          <p>
            En <span className="text-white font-normal tracking-wide">MAISON QUINTESSENCE</span> no construimos simples páginas web. Transmutamos problemas complejos de negocio 
            en ecosistemas de software de <strong className="text-mq-gold font-normal italic">Baja Entropía</strong>.
          </p>
          <p className="tracking-[0.2em] text-xs text-slate-500 pt-8 uppercase">
            Cero fricción · Alta Costura Digital · Código Implacable
          </p>
        </div>
        
        {/* Firma del Arquitecto */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center mb-6 shadow-xl">
            <span className="font-serif italic text-slate-500 text-lg">DS</span>
          </div>
          <span className="text-white tracking-[0.2em] text-xs uppercase mb-2">Daniel S. García</span>
          <span className="text-mq-gold/60 font-mono text-[9px] tracking-widest uppercase">Arquitecto Principal</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
