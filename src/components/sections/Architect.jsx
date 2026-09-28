import { Section, Reveal } from '../ui/Section';
import { DANISID_URL } from '../../lib/contact';

const Architect = () => (
  <Section id="arquitecto" number="04 — El arquitecto" title="Detrás del estudio">
    <Reveal className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
      <div>
        <p className="text-2xl font-light text-mq-ivory">Daniel García</p>
        <p className="mt-2 font-mono text-xs tracking-[0.2em] text-mq-gold uppercase">DaniSid · Design Engineer</p>
      </div>
      <div className="space-y-6 text-mq-muted leading-relaxed md:text-lg">
        <p>
          Maison Quintessence es mi estudio de encargos. Cada proyecto lo diseño y lo programo yo, de principio a fin,
          desde Madrid.
        </p>
        <p>
          En danisid.com está mi trabajo personal: arte generativo con Canvas y Web Audio, proyectos propios y mi forma
          de entender el diseño y el código.
        </p>
        <a
          href={DANISID_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 min-h-11 font-grotesk text-sm tracking-[0.12em] text-mq-ivory border-b border-mq-line hover:border-mq-gold transition-colors"
        >
          Conocer a DaniSid en danisid.com <span aria-hidden="true">↗</span>
        </a>
      </div>
    </Reveal>
  </Section>
);

export default Architect;
