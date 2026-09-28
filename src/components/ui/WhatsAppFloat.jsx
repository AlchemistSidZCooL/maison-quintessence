import { WHATSAPP_URL } from '../../lib/contact';
import { trackContact } from '../../lib/analytics';

/** Botón flotante discreto: contorno dorado sobre negro, sin brillo. */
const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    aria-label="Escribir por WhatsApp"
    onClick={() => trackContact('whatsapp', 'flotante')}
    className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full border border-mq-gold/60 bg-mq-bg/90 backdrop-blur text-mq-gold flex items-center justify-center hover:bg-mq-gold hover:text-mq-bg transition-colors duration-500"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.94.95-3.48-.22-.36a9.41 9.41 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.49A11.3 11.3 0 0 0 12.05.67C5.78.67.68 5.77.67 12.04c0 2 .52 3.96 1.52 5.68L.57 23.33l5.74-1.5a11.3 11.3 0 0 0 5.43 1.38h.01c6.27 0 11.37-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.05" />
    </svg>
  </a>
);

export default WhatsAppFloat;
