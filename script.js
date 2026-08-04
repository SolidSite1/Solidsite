const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const backToTop = document.querySelector('.back-to-top');
const header = document.querySelector('.header');
const packageField = document.getElementById('package-field');
const contactSection = document.getElementById('contact');
const choosePackageButtons = document.querySelectorAll('.choose-package');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const langToggle = document.getElementById('lang-toggle');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
    documentLang: 'en',
    title: 'Solid Site | Web Development',
    metaDescription: 'Solid Site builds modern, bilingual websites that turn visitors into customers. Trusted. Modern. Multilingual.',
    text: [
      { selector: '.nav a[href="#services"]', value: 'Services' },
      { selector: '.nav a[href="#packages"]', value: 'Packages' },
      { selector: '.nav a[href="#testimonials"]', value: 'Specialties' },
      { selector: '.nav a[href="#contact"]:not(.nav-cta)', value: 'Contact' },
      { selector: '.nav-cta', value: 'Get a Quote' },
      { selector: '.hero h1', value: 'Building websites that make your business <span class="highlight">stand out</span>', html: true },
      { selector: '.hero > p', value: 'Trusted. Modern. Multilingual. We design and build sites that make your brand impossible to ignore.' },
      { selector: '.hero-actions .cta', value: 'Start Your Project' },
      { selector: '.hero-actions .cta-ghost', value: 'View Packages →' },
      { selector: '.stats .stat:nth-child(1) p', value: 'Focused Client Attention' },
      { selector: '.stats .stat:nth-child(2) p', value: 'Client Satisfaction' },
      { selector: '.stats .stat:nth-child(3) p', value: 'Languages Spoken' },
      { selector: '.stats .stat:nth-child(4) p', value: 'Average Response Time' },
      { selector: '#about h2', value: 'About Solid Site' },
      { selector: '#about .about-text p', value: 'We craft websites for any type of business — from startups to established enterprises. We speak English and Spanish, ensuring clear communication and seamless collaboration from the first sketch to the final launch.' },
      { selector: '#about .about-highlights li:nth-child(1)', value: '<span class="icon">🌎</span> Bilingual support (EN / ES)', html: true },
      { selector: '#about .about-highlights li:nth-child(2)', value: '<span class="icon">⚡</span> Fast turnaround times', html: true },
      { selector: '#about .about-highlights li:nth-child(3)', value: '<span class="icon">🎨</span> Custom, on-brand design', html: true },
      { selector: '#about .about-highlights li:nth-child(4)', value: '<span class="icon">🔧</span> Ongoing support & maintenance', html: true },
      { selector: '#services h2', value: 'What We Do' },
      { selector: '#services .section-sub', value: 'Everything you need to launch and grow your online presence.' },
      { selector: '#services .card:nth-child(1) h3', value: 'Web Design' },
      { selector: '#services .card:nth-child(1) p', value: 'Beautiful, responsive designs tailored to your brand and your customers.' },
      { selector: '#services .card:nth-child(2) h3', value: 'Development' },
      { selector: '#services .card:nth-child(2) p', value: 'Fast, reliable, and scalable builds using modern web technology.' },
      { selector: '#services .card:nth-child(3) h3', value: 'SEO & Growth' },
      { selector: '#services .card:nth-child(3) p', value: 'Optimized structure and content so customers can actually find you.' },
      { selector: '#services .card:nth-child(4) h3', value: 'Bilingual Support' },
      { selector: '#services .card:nth-child(4) p', value: 'Get the help you need for your website in either English or Spanish.' },
      { selector: '#why-choose h2', value: 'Why Choose Solid Site' },
      { selector: '#why-choose .process-step:nth-child(2) h3', value: 'Discovery' },
      { selector: '#why-choose .process-step:nth-child(2) p', value: 'We learn your goals, audience, and brand direction.' },
      { selector: '#why-choose .process-step:nth-child(3) h3', value: 'Design' },
      { selector: '#why-choose .process-step:nth-child(3) p', value: 'Layouts and visuals are crafted around your exact needs.' },
      { selector: '#why-choose .process-step:nth-child(4) h3', value: 'Build' },
      { selector: '#why-choose .process-step:nth-child(4) p', value: 'We code everything custom, no templates and no shortcuts.' },
      { selector: '#why-choose .process-step:nth-child(5) h3', value: 'Refine' },
      { selector: '#why-choose .process-step:nth-child(5) p', value: 'We review details together and polish until it feels right.' },
      { selector: '#why-choose .why-choose-content p', value: 'Every website we build is 100% custom. No drag-and-drop builders, no recycled templates. We take time to discuss each client\'s goals, needs, and preferences, then design and develop a site tailored specifically to their business requirements.' },
      { selector: '#packages h2', value: 'Website Packages' },
      { selector: '#packages .section-sub', value: 'Simple pricing, no surprises. Pick the tier that fits your business.' },
      { selector: '#packages .price-card:nth-child(1) h3', value: 'Starter' },
      { selector: '#packages .price-card:nth-child(1) .tagline', value: 'Affordable intro websites — clean, functional, and fast.' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(1)', value: '1 Landing page' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(2)', value: 'Mobile responsive' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(3)', value: 'Basic SEO setup' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(4)', value: '1 round of revisions' },
      { selector: '#packages .price-card:nth-child(1) .choose-package', value: 'Choose Starter' },
      { selector: '#packages .price-card:nth-child(2) .ribbon', value: 'Most Popular' },
      { selector: '#packages .price-card:nth-child(2) h3', value: 'Professional' },
      { selector: '#packages .price-card:nth-child(2) .tagline', value: 'Custom-built sites with tailored design and integrations.' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(1)', value: 'Up to 3 pages' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(2)', value: 'Custom design & animations' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(3)', value: 'Professional custom domain name' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(4)', value: '2 rounds of revisions' },
      { selector: '#packages .price-card:nth-child(2) .choose-package', value: 'Choose Professional' },
      { selector: '#packages .price-card:nth-child(3) h3', value: 'Elite' },
      { selector: '#packages .price-card:nth-child(3) .tagline', value: 'High-end, fully animated, premium experiences.' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(1)', value: 'Up to 5 pages' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(2)', value: 'E-commerce ready' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(3)', value: 'Priority support' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(4)', value: '4 rounds of revisions' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(5)', value: 'Media Assistance' },
      { selector: '#packages .price-card:nth-child(3) .choose-package', value: 'Choose Elite' },
      { selector: '.pricing-disclaimer', value: '*Final pricing may vary based on the service you choose and any add-ons you would like to include.*' },
      { selector: '#testimonials h2', value: 'Project Specialties' },
      { selector: '#testimonials .specialty-card:nth-child(1) h3', value: 'Restaurant Website with Mobile Ordering' },
      { selector: '#testimonials .specialty-card:nth-child(1) p', value: 'Create a fast, easy-to-use restaurant site that showcases your menu, highlights specials, and makes mobile ordering simple for customers on the go.' },
      { selector: '#testimonials .specialty-card:nth-child(2) h3', value: 'General Contractor' },
      { selector: '#testimonials .specialty-card:nth-child(2) p', value: 'Build trust with a professional contractor website that presents your services clearly, shows past work, and makes it easy for homeowners to request quotes.' },
      { selector: '#testimonials .specialty-card:nth-child(3) h3', value: 'Event Booking' },
      { selector: '#testimonials .specialty-card:nth-child(3) p', value: 'Perfect for businesses like barbers or caterers, these sites focus on smooth booking, clear service details, and a polished look that helps convert visitors into appointments.' },
      { selector: '#hours h2', value: 'Hours' },
      { selector: '#hours .section-sub', value: 'We keep communication quick and reliable.' },
      { selector: '#hours .hours-row:nth-child(1) span', value: 'Monday - Friday' },
      { selector: '#hours .hours-row:nth-child(2) span', value: 'Saturday' },
      { selector: '#hours .hours-row:nth-child(3) span', value: 'Sunday' },
      { selector: '#hours .hours-row:nth-child(3) strong', value: 'By Appointment' },
      { selector: '#hours .hours-note', value: 'Need a different time? Send a message and we\'ll coordinate around your schedule.' },
      { selector: '#areas-serve h2', value: 'Areas We Serve' },
      { selector: '#areas-serve .section-sub', value: 'Based in Manor, TX and proudly serving surrounding cities.' },
      { selector: '#areas-serve .areas-card h3', value: 'Primary Service Areas' },
      { selector: '#areas-serve .areas-card p', value: 'Manor, TX and nearby communities including Austin, Pflugerville, Elgin, Hutto and Round Rock.' },
      { selector: '#contact h2', value: "Let's Build Something Solid" },
      { selector: '#contact .contact-inner > p:nth-of-type(1)', value: "Tell us about your project and we'll get back to you within 24 hours." },
      { selector: '#contact .contact-inner > p:nth-of-type(2)', value: 'Note: You will not be charged until an invoice is sent and paid.' },
      { selector: '#contact .contact-form .cta', value: 'Send Message' },
      { selector: '.footer-brand p', value: 'Web Development for Every Business.<br />Trusted. Modern. Bilingual.', html: true },
      { selector: '.footer-links a[href="#services"]', value: 'Services' },
      { selector: '.footer-links a[href="#packages"]', value: 'Packages' },
      { selector: '.footer-links a[href="#testimonials"]', value: 'Specialties' },
      { selector: '.footer-links a[href="#contact"]', value: 'Contact' },
      { selector: '.footer-copy', value: '© 2026 Solid Site. All rights reserved.' }
    ],
    placeholders: [
      { selector: 'input[name="name"]', value: 'Your Name' },
      { selector: 'input[name="email"]', value: 'Your Email' },
      { selector: 'textarea[name="message"]', value: 'Tell us about your project...' }
    ],
    attrs: [
      { selector: '.process-timeline', attr: 'aria-label', value: 'Custom website process timeline' },
      { selector: '.nav-toggle', attr: 'aria-label', value: 'Toggle menu' },
      { selector: '.back-to-top', attr: 'aria-label', value: 'Back to top' },
      { selector: '.area-map', attr: 'title', value: 'Map of Manor, Texas' }
    ],
    options: [
      { selector: '#package-field option[value=""]', value: 'Package (Optional)' },
      { selector: '#package-field option[value="Starter"]', value: 'Starter' },
      { selector: '#package-field option[value="Professional"]', value: 'Professional' },
      { selector: '#package-field option[value="Elite"]', value: 'Elite' }
    ],
    toggleLabel: 'Ver en Español',
    formMessage: "Thanks! We'll be in touch within 24 hours."
  },
  es: {
    documentLang: 'es',
    title: 'Solid Site | Desarrollo Web',
    metaDescription: 'Solid Site crea sitios web modernos y bilingües que convierten visitantes en clientes. Confiable. Moderno. Bilingüe.',
    text: [
      { selector: '.nav a[href="#services"]', value: 'Servicios' },
      { selector: '.nav a[href="#packages"]', value: 'Paquetes' },
      { selector: '.nav a[href="#testimonials"]', value: 'Especialidades' },
      { selector: '.nav a[href="#contact"]:not(.nav-cta)', value: 'Contacto' },
      { selector: '.nav-cta', value: 'Solicitar cotización' },
      { selector: '.hero h1', value: 'Creamos sitios web que hacen que tu negocio <span class="highlight">destaque</span>', html: true },
      { selector: '.hero > p', value: 'Confiable. Moderno. Bilingüe. Diseñamos y desarrollamos sitios que hacen que tu marca sea imposible de ignorar.' },
      { selector: '.hero-actions .cta', value: 'Inicia tu proyecto' },
      { selector: '.hero-actions .cta-ghost', value: 'Ver paquetes →' },
      { selector: '.stats .stat:nth-child(1) p', value: 'Atención personalizada' },
      { selector: '.stats .stat:nth-child(2) p', value: 'Satisfacción del cliente' },
      { selector: '.stats .stat:nth-child(3) p', value: 'Idiomas hablados' },
      { selector: '.stats .stat:nth-child(4) p', value: 'Tiempo promedio de respuesta' },
      { selector: '#about h2', value: 'Sobre Solid Site' },
      { selector: '#about .about-text p', value: 'Creamos sitios web para todo tipo de negocio, desde startups hasta empresas establecidas. Hablamos inglés y español para asegurar una comunicación clara y una colaboración fluida desde el primer boceto hasta el lanzamiento final.' },
      { selector: '#about .about-highlights li:nth-child(1)', value: '<span class="icon">🌎</span> Soporte bilingüe (EN / ES)', html: true },
      { selector: '#about .about-highlights li:nth-child(2)', value: '<span class="icon">⚡</span> Tiempos de entrega rápidos', html: true },
      { selector: '#about .about-highlights li:nth-child(3)', value: '<span class="icon">🎨</span> Diseño personalizado para tu marca', html: true },
      { selector: '#about .about-highlights li:nth-child(4)', value: '<span class="icon">🔧</span> Soporte y mantenimiento continuo', html: true },
      { selector: '#services h2', value: 'Lo que hacemos' },
      { selector: '#services .section-sub', value: 'Todo lo que necesitas para lanzar y hacer crecer tu presencia en línea.' },
      { selector: '#services .card:nth-child(1) h3', value: 'Diseño web' },
      { selector: '#services .card:nth-child(1) p', value: 'Diseños atractivos y responsivos adaptados a tu marca y a tus clientes.' },
      { selector: '#services .card:nth-child(2) h3', value: 'Desarrollo' },
      { selector: '#services .card:nth-child(2) p', value: 'Sitios rápidos, confiables y escalables con tecnología web moderna.' },
      { selector: '#services .card:nth-child(3) h3', value: 'SEO y crecimiento' },
      { selector: '#services .card:nth-child(3) p', value: 'Estructura y contenido optimizados para que los clientes realmente te encuentren.' },
      { selector: '#services .card:nth-child(4) h3', value: 'Soporte bilingüe' },
      { selector: '#services .card:nth-child(4) p', value: 'Obtén la ayuda que necesitas para tu sitio web en inglés o español.' },
      { selector: '#why-choose h2', value: 'Por qué elegir Solid Site' },
      { selector: '#why-choose .process-step:nth-child(2) h3', value: 'Descubrimiento' },
      { selector: '#why-choose .process-step:nth-child(2) p', value: 'Conocemos tus metas, tu audiencia y la dirección de tu marca.' },
      { selector: '#why-choose .process-step:nth-child(3) h3', value: 'Diseño' },
      { selector: '#why-choose .process-step:nth-child(3) p', value: 'Creamos la estructura visual y el diseño según tus necesidades exactas.' },
      { selector: '#why-choose .process-step:nth-child(4) h3', value: 'Desarrollo' },
      { selector: '#why-choose .process-step:nth-child(4) p', value: 'Codificamos todo de forma personalizada, sin plantillas ni atajos.' },
      { selector: '#why-choose .process-step:nth-child(5) h3', value: 'Ajustes' },
      { selector: '#why-choose .process-step:nth-child(5) p', value: 'Revisamos los detalles contigo y pulimos el sitio hasta que quede perfecto.' },
      { selector: '#why-choose .why-choose-content p', value: 'Cada sitio web que desarrollamos es 100% personalizado. No usamos constructores de arrastrar y soltar ni plantillas recicladas. Nos tomamos el tiempo para hablar sobre las metas, necesidades y preferencias de cada cliente, y luego diseñamos y desarrollamos un sitio adaptado específicamente a su negocio.' },
      { selector: '#packages h2', value: 'Paquetes de sitios web' },
      { selector: '#packages .section-sub', value: 'Precios simples y sin sorpresas. Elige el nivel que mejor se adapte a tu negocio.' },
      { selector: '#packages .price-card:nth-child(1) h3', value: 'Inicial' },
      { selector: '#packages .price-card:nth-child(1) .tagline', value: 'Sitios introductorios accesibles: limpios, funcionales y rápidos.' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(1)', value: '1 página de aterrizaje' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(2)', value: 'Diseño adaptable a móviles' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(3)', value: 'Configuración básica de SEO' },
      { selector: '#packages .price-card:nth-child(1) .features li:nth-child(4)', value: '1 ronda de revisiones' },
      { selector: '#packages .price-card:nth-child(1) .choose-package', value: 'Elegir Inicial' },
      { selector: '#packages .price-card:nth-child(2) .ribbon', value: 'Más popular' },
      { selector: '#packages .price-card:nth-child(2) h3', value: 'Profesional' },
      { selector: '#packages .price-card:nth-child(2) .tagline', value: 'Sitios personalizados con diseño a medida e integraciones específicas.' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(1)', value: 'Hasta 3 páginas' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(2)', value: 'Diseño personalizado y animaciones' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(3)', value: 'Dominio profesional personalizado' },
      { selector: '#packages .price-card:nth-child(2) .features li:nth-child(4)', value: '2 rondas de revisiones' },
      { selector: '#packages .price-card:nth-child(2) .choose-package', value: 'Elegir Profesional' },
      { selector: '#packages .price-card:nth-child(3) h3', value: 'Elite' },
      { selector: '#packages .price-card:nth-child(3) .tagline', value: 'Experiencias premium, totalmente animadas y de alto nivel.' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(1)', value: 'Hasta 5 páginas' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(2)', value: 'Listo para comercio electrónico' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(3)', value: 'Soporte prioritario' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(4)', value: '4 rondas de revisiones' },
      { selector: '#packages .price-card:nth-child(3) .features li:nth-child(5)', value: 'Asistencia con contenido multimedia' },
      { selector: '#packages .price-card:nth-child(3) .choose-package', value: 'Elegir Elite' },
      { selector: '.pricing-disclaimer', value: '*El precio final puede variar según el servicio que elijas y cualquier extra que desees agregar.*' },
      { selector: '#testimonials h2', value: 'Especialidades de proyectos' },
      { selector: '#testimonials .specialty-card:nth-child(1) h3', value: 'Sitio web para restaurante con pedidos móviles' },
      { selector: '#testimonials .specialty-card:nth-child(1) p', value: 'Crea un sitio de restaurante rápido y fácil de usar que muestre tu menú, destaque promociones y haga que ordenar desde el móvil sea sencillo para clientes en movimiento.' },
      { selector: '#testimonials .specialty-card:nth-child(2) h3', value: 'Contratista general' },
      { selector: '#testimonials .specialty-card:nth-child(2) p', value: 'Genera confianza con un sitio profesional que presente tus servicios con claridad, muestre trabajos previos y facilite a los propietarios solicitar cotizaciones.' },
      { selector: '#testimonials .specialty-card:nth-child(3) h3', value: 'Reservas para eventos' },
      { selector: '#testimonials .specialty-card:nth-child(3) p', value: 'Ideal para negocios como barberías o catering, estos sitios priorizan reservas sencillas, detalles claros de servicio y una imagen profesional que ayuda a convertir visitantes en citas.' },
      { selector: '#hours h2', value: 'Horario' },
      { selector: '#hours .section-sub', value: 'Mantenemos una comunicación rápida y confiable.' },
      { selector: '#hours .hours-row:nth-child(1) span', value: 'Lunes - Viernes' },
      { selector: '#hours .hours-row:nth-child(2) span', value: 'Sábado' },
      { selector: '#hours .hours-row:nth-child(3) span', value: 'Domingo' },
      { selector: '#hours .hours-row:nth-child(3) strong', value: 'Con cita' },
      { selector: '#hours .hours-note', value: '¿Necesitas otro horario? Envíanos un mensaje y coordinamos contigo.' },
      { selector: '#areas-serve h2', value: 'Áreas que atendemos' },
      { selector: '#areas-serve .section-sub', value: 'Ubicados en Manor, TX y con servicio en ciudades cercanas.' },
      { selector: '#areas-serve .areas-card h3', value: 'Área principal de servicio' },
      { selector: '#areas-serve .areas-card p', value: 'Manor, TX y comunidades cercanas como Austin, Pflugerville, Elgin, Hutto y Round Rock.' },
      { selector: '#contact h2', value: 'Construyamos algo sólido' },
      { selector: '#contact .contact-inner > p:nth-of-type(1)', value: 'Cuéntanos sobre tu proyecto y te responderemos dentro de 24 horas.' },
      { selector: '#contact .contact-inner > p:nth-of-type(2)', value: 'Nota: No se te cobrará hasta que se envíe y se pague la factura.' },
      { selector: '#contact .contact-form .cta', value: 'Enviar mensaje' },
      { selector: '.footer-brand p', value: 'Desarrollo web para todo tipo de negocio.<br />Confiable. Moderno. Bilingüe.', html: true },
      { selector: '.footer-links a[href="#services"]', value: 'Servicios' },
      { selector: '.footer-links a[href="#packages"]', value: 'Paquetes' },
      { selector: '.footer-links a[href="#testimonials"]', value: 'Especialidades' },
      { selector: '.footer-links a[href="#contact"]', value: 'Contacto' },
      { selector: '.footer-copy', value: '© 2026 Solid Site. Todos los derechos reservados.' }
    ],
    placeholders: [
      { selector: 'input[name="name"]', value: 'Tu nombre' },
      { selector: 'input[name="email"]', value: 'Tu correo electrónico' },
      { selector: 'textarea[name="message"]', value: 'Cuéntanos sobre tu proyecto...' }
    ],
    attrs: [
      { selector: '.process-timeline', attr: 'aria-label', value: 'Línea de tiempo del proceso de sitio web personalizado' },
      { selector: '.nav-toggle', attr: 'aria-label', value: 'Abrir menú' },
      { selector: '.back-to-top', attr: 'aria-label', value: 'Volver arriba' },
      { selector: '.area-map', attr: 'title', value: 'Mapa de Manor, Texas' }
    ],
    options: [
      { selector: '#package-field option[value=""]', value: 'Paquete (Opcional)' },
      { selector: '#package-field option[value="Starter"]', value: 'Inicial' },
      { selector: '#package-field option[value="Professional"]', value: 'Profesional' },
      { selector: '#package-field option[value="Elite"]', value: 'Elite' }
    ],
    toggleLabel: 'View in English',
    formMessage: '¡Gracias! Nos pondremos en contacto contigo dentro de 24 horas.'
  }
};

let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

function applyLanguage(language) {
  const locale = translations[language] || translations.en;

  currentLanguage = language;
  document.documentElement.lang = locale.documentLang;
  document.title = locale.title;

  if (metaDescription) {
    metaDescription.setAttribute('content', locale.metaDescription);
  }

  locale.text.forEach(entry => {
    const element = document.querySelector(entry.selector);
    if (!element) return;

    if (entry.html) {
      element.innerHTML = entry.value;
      return;
    }

    element.textContent = entry.value;
  });

  locale.placeholders.forEach(entry => {
    const element = document.querySelector(entry.selector);
    if (element) {
      element.setAttribute('placeholder', entry.value);
    }
  });

  locale.attrs.forEach(entry => {
    const element = document.querySelector(entry.selector);
    if (element) {
      element.setAttribute(entry.attr, entry.value);
    }
  });

  locale.options.forEach(entry => {
    const element = document.querySelector(entry.selector);
    if (element) {
      element.textContent = entry.value;
    }
  });

  if (langToggle) {
    langToggle.textContent = locale.toggleLabel;
  }

  localStorage.setItem('siteLanguage', language);
}

// Smooth scroll for section navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', event => {
    const targetEl = document.querySelector(link.getAttribute('href'));
    if (!targetEl) return;
    event.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth' });
    nav?.classList.remove('open');
  });
});

langToggle?.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'es' : 'en');
});

// Dedicated back-to-top behavior
backToTop?.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile nav toggle
navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

// Header shadow + back-to-top visibility on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 20;
  header?.classList.toggle('scrolled', scrolled);
  backToTop?.classList.toggle('visible', window.scrollY > 400);
});

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach(el => revealObserver.observe(el));

// Animated counting stats
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1500;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }

      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
statNumbers.forEach(el => statObserver.observe(el));

// Package selection: autofill form field and jump to contact
choosePackageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedPackage = button.dataset.package;
    if (packageField && selectedPackage) {
      packageField.value = selectedPackage;
    }
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission to Formspree
contactForm?.addEventListener('submit', async event => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const sendingMessage = currentLanguage === 'es' ? 'Enviando mensaje...' : 'Sending message...';
  const errorMessage = currentLanguage === 'es'
    ? 'No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.'
    : 'Could not send your message. Please try again in a few minutes.';

  if (submitButton) {
    submitButton.disabled = true;
  }

  formStatus.textContent = sendingMessage;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    formStatus.textContent = translations[currentLanguage].formMessage;
    contactForm.reset();
  } catch (error) {
    formStatus.textContent = errorMessage;
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
});

applyLanguage(currentLanguage);
