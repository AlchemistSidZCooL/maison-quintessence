import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Hero = () => {
  return (
    <section id="philosophy" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glass-card px-8 py-16 md:p-20 rounded-3xl flex flex-col items-center text-center max-w-4xl w-full mx-auto shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-10"
        >
          <Logo className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
        </motion.div>

        <h1 className="text-2xl md:text-5xl font-light tracking-[0.25em] md:tracking-[0.3em] mb-6 text-white uppercase">
          Maison Quintessence
        </h1>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-mq-gold/50 to-transparent mb-8" />
        
        <p className="text-sm md:text-lg text-slate-400 font-light tracking-[0.2em] max-w-2xl mx-auto uppercase mb-12">
          Arquitectura Digital de Alto Estatus
        </p>

        <div className="flex gap-6 md:gap-12 text-xs md:text-sm font-mono text-slate-500 tracking-widest uppercase opacity-80">
          <span className="hover:text-mq-gold transition-colors cursor-default">Ingeniería</span>
          <span>·</span>
          <span className="hover:text-mq-gold transition-colors cursor-default">Diseño</span>
          <span>·</span>
          <span className="hover:text-mq-gold transition-colors cursor-default">Alquimia</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
