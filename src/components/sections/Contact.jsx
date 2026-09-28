import { Section, Reveal } from '../ui/Section';
import { EMAIL, EMAIL_URL, WHATSAPP_URL } from '../../lib/contact';
import { trackContact } from '../../lib/analytics';

const Contact = () => (
  <Section
    id="contacto"
    number="05 — Contacto"
    title="Cuéntame tu proyecto"
    intro="Escríbeme por WhatsApp o por email con una idea de lo que necesitas. Te respondo personalmente."
  >
    <Reveal className="flex flex-col sm:flex-row gap-4">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackContact('whatsapp', 'contacto')}
        className="inline-flex items-center justify-center min-h-12 px-8 bg-mq-gold text-mq-bg font-grotesk text-sm tracking-[0.15em] uppercase hover:bg-mq-ivory transition-colors duration-500"
      >
        Escribir por WhatsApp
      </a>
      <a
        href={EMAIL_URL}
        onClick={() => trackContact('email', 'contacto')}
        className="inline-flex items-center justify-center min-h-12 px-8 border border-mq-line text-mq-ivory font-grotesk text-sm tracking-[0.08em] hover:border-mq-gold/60 transition-colors duration-500 break-all"
      >
        {EMAIL}
      </a>
    </Reveal>
  </Section>
);

export default Contact;
