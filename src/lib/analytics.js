/**
 * Google Analytics 4 de Maison Quintessence.
 *
 * - El ID se lee de VITE_GA_ID (variable de entorno en Netlify). Sin ID no se carga nada.
 * - Solo se carga en el dominio de producción: las pruebas en local no cuentan.
 * - PENDIENTE: crear un ID propio para MQ (el G-MHT141WKZZ es de danisid.com).
 */
const GA_ID = import.meta.env.VITE_GA_ID;
const PRODUCTION_HOSTS = ['maison-quintessence.netlify.app'];

const isEnabled = () => Boolean(GA_ID) && PRODUCTION_HOSTS.includes(window.location.hostname);

export function initAnalytics() {
  if (!isEnabled()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Registra un evento de contacto (no hace nada fuera de producción). */
export function trackContact(method, location) {
  if (!isEnabled() || !window.gtag) return;
  window.gtag('event', 'contact', { method, location });
}
