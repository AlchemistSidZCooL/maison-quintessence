import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LogoLockup } from '../ui/Logo';

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#proceso', label: 'Cómo trabajo' },
  { href: '#arquitecto', label: 'El arquitecto' },
  { href: '#contacto', label: 'Contacto' },
];

/**
 * Barra fija. En móvil, botón de 44 px que abre un menú a pantalla completa
 * (se cierra con Escape, al elegir un enlace o al volver a pulsar el botón).
 */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-mq-bg/90 backdrop-blur-md border-b border-mq-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Principal" className="max-w-6xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="min-h-11 flex items-center" onClick={() => setOpen(false)}>
          <LogoLockup />
        </a>

        <ul className="hidden lg:flex items-center gap-9 font-grotesk text-[0.8rem] tracking-[0.12em] text-mq-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="min-h-11 inline-flex items-center hover:text-mq-ivory focus-visible:text-mq-ivory transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-mq-ivory"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block w-6 h-3" aria-hidden="true">
            <span className={`absolute left-0 w-6 h-px bg-current transition-transform duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 w-6 h-px bg-current transition-transform duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>
    </header>

    {/* Fuera del <header>: su backdrop-filter haría que el menú fixed se posicionara dentro de la barra */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 z-40 bg-mq-bg"
          >
            <ul className="flex flex-col px-5 md:px-10 pt-6">
              {LINKS.map((l) => (
                <li key={l.href} className="border-b border-mq-line">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center min-h-14 text-2xl font-extralight tracking-wide text-mq-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
