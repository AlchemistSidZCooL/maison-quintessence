import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

/**
 * Página de detalle de un caso de estudio.
 * 
 * Recibe el slug desde la URL (ej: /caso/el-rincon) y busca
 * el proyecto correspondiente en la fuente de datos centralizada.
 * 
 * Si el slug no existe, redirige al Home.
 */
const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Scroll al inicio cuando se navega a esta página o cambia el slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Si no se encuentra el proyecto, redirigir a Home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb / Navegación contextual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link 
            to="/" 
            className="text-xs font-mono tracking-widest text-slate-500 uppercase hover:text-mq-gold transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Portafolio
          </Link>
        </motion.div>

        {/* Encabezado del caso */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="text-7xl md:text-9xl font-black text-white/5">{project.id}</span>
            <div>
              <span className="text-xs font-mono text-mq-gold tracking-widest uppercase block mb-2">
                {project.subtitle}
              </span>
              <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                {project.title}
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-slate-400 font-light italic max-w-3xl leading-relaxed">
            "{project.tagline}"
          </p>
        </motion.header>

        {/* Cuerpo principal */}
        {/* Imagen de Portada (Si existe) */}
        {project.coverImage && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full h-auto mb-20 rounded-xl overflow-hidden border border-slate-800/50 shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-mq-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10"></div>
            <img 
              src={project.coverImage} 
              alt={`Mockup de ${project.title}`} 
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Columna principal: Descripción extendida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-sm font-mono tracking-widest text-mq-gold uppercase mb-8">
              La Visión
            </h2>
            <div className="text-slate-300 font-light leading-relaxed text-base md:text-lg space-y-4">
              {project.longDescription.split('\n').filter(p => p.trim()).map((paragraph, i) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
            </div>
          </motion.div>

          {/* Columna lateral: Metadatos */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Año */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-3">Año</h3>
              <p className="text-white font-light text-lg">{project.year}</p>
            </div>

            {/* Stack tecnológico */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono tracking-wider text-slate-400 uppercase border border-slate-700/50 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlace en vivo */}
            {project.liveUrl && (
              <div>
                <h3 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-3">Ver en Vivo</h3>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-mq-gold hover:text-white transition-colors text-sm font-mono tracking-wider inline-flex items-center gap-2"
                >
                  {project.liveUrl.replace('https://', '')}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </motion.aside>
        </div>

        {/* Sección: Reto + Solución */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 pt-16 border-t border-white/5"
        >
          <div>
            <h3 className="text-sm font-mono tracking-widest text-mq-gold uppercase mb-6">El Reto</h3>
            <p className="text-slate-400 font-light leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-mono tracking-widest text-mq-gold uppercase mb-6">La Solución</h3>
            <p className="text-slate-400 font-light leading-relaxed">{project.solution}</p>
          </div>
        </motion.div>

        {/* Sección: Impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-16 border-t border-white/5"
        >
          <h3 className="text-sm font-mono tracking-widest text-mq-gold uppercase mb-10">Impacto Medible</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.impact.map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl text-center">
                <span className="text-4xl font-black text-white/5 block mb-4">0{i + 1}</span>
                <p className="text-slate-300 font-light text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navegación entre casos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-white/5 flex justify-between items-center"
        >
          {(() => {
            const currentIndex = projects.findIndex(p => p.slug === slug);
            const prev = projects[currentIndex - 1];
            const next = projects[currentIndex + 1];
            return (
              <>
                {prev ? (
                  <Link to={`/caso/${prev.slug}`} className="text-sm font-mono text-slate-500 hover:text-mq-gold transition-colors uppercase tracking-widest">
                    ← {prev.title}
                  </Link>
                ) : <div />}
                {next ? (
                  <Link to={`/caso/${next.slug}`} className="text-sm font-mono text-slate-500 hover:text-mq-gold transition-colors uppercase tracking-widest">
                    {next.title} →
                  </Link>
                ) : <div />}
              </>
            );
          })()}
        </motion.div>

      </div>
    </div>
  );
};

export default CaseStudyPage;
