import { LogoLockup } from '../ui/Logo';
import { DANISID_URL } from '../../lib/contact';

const Footer = () => (
  <footer className="border-t border-mq-line px-5 md:px-10 py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:items-center justify-between">
      <LogoLockup />
      <div className="flex flex-col md:items-end gap-2 font-mono text-xs tracking-[0.15em] text-mq-muted">
        <span>© 2026 Maison Quintessence · Madrid</span>
        <a href={DANISID_URL} target="_blank" rel="noreferrer" className="min-h-11 inline-flex items-center hover:text-mq-ivory transition-colors">
          Diseño y desarrollo: DaniSid
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
