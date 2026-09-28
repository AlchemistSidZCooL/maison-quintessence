import { motion } from 'framer-motion';

/** Aparición lenta al entrar en pantalla (se desactiva con prefers-reduced-motion). */
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Sección con numeración, título fino y filete dorado. */
export const Section = ({ id, number, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-titulo`} className="px-5 md:px-10 py-24 md:py-36">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="eyebrow mb-5">{number}</p>
        <h2 id={`${id}-titulo`} className="text-3xl md:text-5xl font-extralight tracking-[0.04em] text-mq-ivory">
          {title}
        </h2>
        <div className="rule-gold w-24 mt-8" />
        {intro && <p className="mt-8 max-w-2xl text-mq-muted leading-relaxed md:text-lg">{intro}</p>}
      </Reveal>
      <div className="mt-14 md:mt-20">{children}</div>
    </div>
  </section>
);
