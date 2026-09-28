import { motion } from 'framer-motion';
import { LogoMark } from '../ui/Logo';
import { WHATSAPP_URL } from '../../lib/contact';
import { trackContact } from '../../lib/analytics';

const fade = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center px-5 md:px-10 pt-24 pb-16 overflow-hidden">
    {/* Halo dorado muy tenue */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] aspect-square rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07),transparent_65%)]"
    />

    <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
      <motion.div {...fade(0.1)}>
        <LogoMark className="w-24 h-24 md:w-32 md:h-32 text-mq-gold" title="" />
      </motion.div>

      <motion.p {...fade(0.4)} className="eyebrow mt-10">
        Estudio de diseño e ingeniería web · Madrid
      </motion.p>

      <motion.h1
        {...fade(0.6)}
        className="mt-6 text-[2rem] leading-tight sm:text-5xl md:text-6xl font-extralight tracking-[0.18em] md:tracking-[0.22em] uppercase text-mq-ivory"
      >
        Maison Quintessence
      </motion.h1>

      <motion.div {...fade(0.8)} className="rule-gold w-40 my-8" />

      <motion.p {...fade(0.9)} className="text-lg md:text-2xl font-light leading-relaxed text-mq-ivory/90 max-w-2xl">
        Webs y experiencias digitales hechas a medida, para marcas y artistas que cuidan los detalles.
      </motion.p>

      <motion.p {...fade(1.0)} className="mt-5 text-mq-muted md:text-lg">
        La tecnología no tiene por qué ser fría ni genérica.
      </motion.p>

      <motion.div {...fade(1.2)} className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContact('whatsapp', 'hero')}
          className="inline-flex items-center justify-center min-h-12 px-8 border border-mq-gold text-mq-gold font-grotesk text-sm tracking-[0.15em] uppercase hover:bg-mq-gold hover:text-mq-bg transition-colors duration-500"
        >
          Hablemos
        </a>
        <a
          href="#trabajos"
          className="inline-flex items-center justify-center min-h-12 px-8 border border-mq-line text-mq-ivory font-grotesk text-sm tracking-[0.15em] uppercase hover:border-mq-gold/60 transition-colors duration-500"
        >
          Ver trabajos
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
