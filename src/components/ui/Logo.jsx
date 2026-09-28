/**
 * Monograma MQ (propuesta A, "Inscrito"): una M de alto contraste dentro de la Q.
 * Una sola tinta: hereda el color de `currentColor`.
 * Las otras propuestas están en Assets_Branding/logo/propuestas.html.
 */
export const LogoMark = ({ className = 'w-10 h-10', title = 'Maison Quintessence' }) => (
  <svg viewBox="20 20 90 90" fill="currentColor" className={className}
    role={title ? 'img' : undefined} aria-label={title || undefined} aria-hidden={title ? undefined : true}>
    <path d="M44.6 45h1.1v30h-1.1z M44.6 45h3.5l12.6 30h-3.4z M59.3 75h1.1L75.2 45h-1.4z M73.8 45h3v30h-3z M41.2 45h7v.7h-7z M41.2 74.3h7.6v.7h-7.6z M72.6 45h7v.7h-7z M71.3 74.3h9.5v.7h-9.5z" />
    <path fillRule="evenodd" d="M60 30a30 30 0 1 1 0 60a30 30 0 1 1 0-60z M60 30.9a28.2 29.1 0 1 0 0 58.2a28.2 29.1 0 1 0 0-58.2z" />
    <path d="M69.6 79.2C77 90 86 96.6 99 99.2v.6C84 99 74.2 93.2 67.4 80.4z" />
  </svg>
);

/** Versión horizontal: monograma + nombre. */
export const LogoLockup = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-3 ${className}`}>
    <LogoMark className="w-9 h-9 text-mq-gold" title="" />
    <span className="font-extralight tracking-[0.32em] text-[0.8rem] uppercase text-mq-ivory whitespace-nowrap">
      Maison Quintessence
    </span>
  </span>
);
