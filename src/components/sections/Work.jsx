import { Section, Reveal } from '../ui/Section';
import { projects } from '../../data/projects';

const Work = () => (
  <Section
    id="trabajos"
    number="02 — Trabajos"
    title="Trabajos seleccionados"
    intro="Webs en producción. Cada tarjeta abre el sitio real."
  >
    <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Reveal delay={(i % 2) * 0.15}>
            <a href={p.url} target="_blank" rel="noreferrer" className="group block">
              <div className="aspect-[16/10] overflow-hidden border border-mq-line bg-mq-surface">
                <img
                  src={p.image}
                  alt={`Captura de la web de ${p.title}`}
                  width="1200"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top opacity-90 transition duration-[1.2s] ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                />
              </div>
              <p className="eyebrow mt-6">{p.category}</p>
              <h3 className="mt-3 text-2xl font-light tracking-wide text-mq-ivory">{p.title}</h3>
              <p className="mt-3 text-mq-muted leading-relaxed">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 min-h-11 font-grotesk text-sm tracking-[0.12em] text-mq-ivory border-b border-mq-line group-hover:border-mq-gold transition-colors">
                {p.url.replace('https://', '')}
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(se abre en otra pestaña)</span>
              </span>
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);

export default Work;
