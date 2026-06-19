import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

/**
 * Sección del Portafolio en la página Home.
 * 
 * Consume los datos centralizados de `src/data/projects.js`
 * y cada tarjeta es un Link a la página de detalle del caso.
 */
const TrinityShowcase = () => {
  return (
    <section id="trinity" className="w-full py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl font-light tracking-widest text-white uppercase mb-4">El Portafolio</h2>
        <div className="h-[1px] w-12 bg-mq-gold mx-auto md:mx-0 mb-6" />
        <p className="text-slate-400 max-w-2xl font-light">Tres pilares de excelencia que demuestran la fusión de arte, ingeniería y datos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" key={project.id}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)] relative overflow-hidden h-full cursor-pointer"
            >
              {/* Marca de agua del número */}
              <div className="absolute -top-6 -right-6 text-8xl font-black text-white/5 pointer-events-none transition-all duration-500 group-hover:text-mq-gold/10">
                {project.id}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-mono text-mq-gold tracking-widest uppercase mb-2 block">{project.subtitle}</span>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono tracking-wider text-slate-500 uppercase border border-slate-700/50 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Indicador visual de "Ver caso" */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 group-hover:text-mq-gold transition-colors tracking-widest uppercase">
                  <span>Visitar Proyecto</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrinityShowcase;
