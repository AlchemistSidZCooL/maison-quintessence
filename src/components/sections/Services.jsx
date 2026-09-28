import { Section, Reveal } from '../ui/Section';

// Misma redacción que danisid.com
const SERVICES = [
  { n: '01', title: 'Digital Boutique', desc: 'Webs de marca a medida: rápidas, cuidadas al detalle y fáciles de encontrar.' },
  { n: '02', title: 'Experiencias interactivas', desc: 'Piezas generativas con movimiento y sonido para marcas, artistas y eventos.' },
  { n: '03', title: 'Presencia para artistas', desc: 'Portafolios y EPK para músicos y creadores, con contacto y reservas directas.' },
];

const Services = () => (
  <Section id="servicios" number="01 — Servicios" title="Lo que hago">
    <ul className="grid md:grid-cols-3 border-t border-mq-line md:border-t-0">
      {SERVICES.map((s, i) => (
        <li key={s.n} className="border-b md:border-b-0 md:border-l first:md:border-l-0 border-mq-line">
          <Reveal delay={i * 0.15} className="py-10 md:py-4 md:px-10 first:md:pl-0">
            <span className="font-mono text-xs text-mq-gold tracking-[0.2em]">{s.n}</span>
            <h3 className="mt-5 text-2xl font-light tracking-wide text-mq-ivory">{s.title}</h3>
            <p className="mt-4 text-mq-muted leading-relaxed">{s.desc}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);

export default Services;
