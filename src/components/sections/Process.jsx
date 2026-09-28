import { Section, Reveal } from '../ui/Section';

const STEPS = [
  { title: 'Escuchar', desc: 'Una conversación para entender tu marca, tu público y lo que necesitas que haga la web.' },
  { title: 'Diseñar', desc: 'Propongo la estructura y el aspecto visual, y lo ajustamos juntos antes de programar.' },
  { title: 'Construir', desc: 'Lo desarrollo a mano, pensando primero en el móvil, la velocidad y el posicionamiento en buscadores.' },
  { title: 'Verificar', desc: 'Lo reviso en distintos dispositivos y navegadores, y tú lo pruebas antes de publicar.' },
  { title: 'Publicar', desc: 'Lo pongo en línea con tu dominio y te explico cómo mantenerlo.' },
];

const Process = () => (
  <Section id="proceso" number="03 — Proceso" title="Cómo trabajo">
    <ol className="grid gap-px bg-mq-line border border-mq-line sm:grid-cols-2 lg:grid-cols-5">
      {STEPS.map((s, i) => (
        <li key={s.title} className="bg-mq-bg">
          <Reveal delay={i * 0.1} className="p-8 h-full">
            <span className="font-mono text-xs text-mq-gold tracking-[0.2em]">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-5 text-xl font-light tracking-wide text-mq-ivory">{s.title}</h3>
            <p className="mt-3 text-sm text-mq-muted leading-relaxed">{s.desc}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Process;
