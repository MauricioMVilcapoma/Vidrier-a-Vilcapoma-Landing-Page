'use client';

import { useEffect, useState } from 'react';
import {
  Check,
  ChevronDown,
  Clock,
  Image as ImageIcon,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const brand = {
  name: 'Vidriería - Aluminios & Marquería “Vilcapoma”',
  shortName: '“Vilcapoma”',
  phone: '+51 970 947 515',
  whatsapp:
    'https://wa.me/51970947515?text=Hola%20Vidrier%C3%ADa%20Vilcapoma%2C%20quisiera%20hacer%20una%20consulta',
  instagram: 'https://www.instagram.com/vidrieriavilcapoma/',
  facebook: 'https://www.facebook.com/vidrieriavilcapoma?locale=es_LA',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Vidrier%C3%ADa%20Marquer%C3%ADa%20Vilcapoma%20Jr.%20Juan%20Pablo%20Fernandini%20817%20Bre%C3%B1a%20Lima',
  email: 'vidrieriavilcapoma95@gmail.com',
  addressLine1: 'Jr. Juan Pablo Fernandini 817',
  addressLine2: 'Breña, Lima',
  reference:
    'Al costado de La Rambla Brasil, a la altura de la cuadra 8 de Av. Brasil.',
  hoursWeek: 'Lunes a sábado: 8:30 a. m. – 7:00 p. m.',
  hoursSunday: 'Domingo: Cerrado',
  slogan:
    'La excelencia en el detalle y la perfección en el acabado, para transformar tus recuerdos en un legado',
  copyright: '© 2026 Vidriería - Aluminios & Marquería “Vilcapoma”',
};

const navItems = [
  ['Servicios', '#servicios'],
  ['Trabajos', '#trabajos'],
  ['Nosotros', '#nosotros'],
  ['Opiniones', '#opiniones'],
  ['Preguntas', '#preguntas'],
  ['Contacto', '#contacto'],
];

const trustItems = [
  {
    title: 'Trabajo personalizado',
    copy: 'Cada pedido se adapta a las medidas, uso y estilo del cliente.',
    icon: Check,
    tone: 'blue',
  },
  {
    title: 'Asesoramiento',
    copy: 'Orientación directa para elegir vidrio, aluminio o moldura adecuada.',
    icon: MessageCircle,
    tone: 'navy',
  },
  {
    title: 'Calidad/precio',
    copy: 'Materiales de calidad y propuestas claras para cada necesidad.',
    icon: ShieldCheck,
    tone: 'red',
  },
  {
    title: 'Cumplimiento',
    copy: 'Seriedad en los trabajos acordados, desde tienda hasta instalación.',
    icon: Clock,
    tone: 'green',
  },
];

const services = [
  {
    title: 'Enmarcados y molduras',
    copy: 'Molduras para cuadros, fotos, diplomas, lienzos y piezas decorativas con acabado personalizado.',
    details: ['molduras para cuadros', 'enmarcados', 'asesoramiento'],
    image: '/assets/enmarcado-1-900.webp',
    small: '/assets/enmarcado-1-480.webp',
    width: 900,
    height: 1200,
    alt: 'Enmarcado contemporáneo personalizado realizado por Vilcapoma',
    badge: 'Especialidad',
  },
  {
    title: 'Vidrios y espejos',
    copy: 'Vidrio transparente, templado, laminado, bronce, catedral, incoloro y de colores. Espejos a medida.',
    details: ['vidrios', 'espejos', 'corte'],
    image: '/assets/espejo-900.webp',
    small: '/assets/espejo-480.webp',
    width: 900,
    height: 1200,
    alt: 'Espejo instalado a medida en interior de vivienda',
    badge: 'A medida',
  },
  {
    title: 'Mamparas y duchas',
    copy: 'Mamparas, duchas y separaciones de vidrio para hogares, comercios y oficinas.',
    details: ['mamparas', 'duchas', 'instalación'],
    image: '/assets/mampara-900.webp',
    small: '/assets/mampara-480.webp',
    width: 900,
    height: 673,
    alt: 'Mampara de vidrio instalada en un espacio interior',
    badge: 'Instalación',
  },
  {
    title: 'Ventanas y aluminio',
    copy: 'Ventanas, puertas corredizas y perfiles de aluminio según los requerimientos del proyecto.',
    details: ['ventanas', 'puertas corredizas', 'perfiles de aluminio'],
    image: '/assets/ventana-2-1200.webp',
    small: '/assets/ventana-2-480.webp',
    width: 1200,
    height: 901,
    alt: 'Ventanas de aluminio instaladas en edificio de Lima',
    badge: 'Aluminio',
  },
  {
    title: 'Instalación y trabajos a medida',
    copy: 'Para instalaciones, Vilcapoma toma directamente las medidas en el lugar antes de fabricar o cortar.',
    details: ['medición', 'fabricación', 'instalación'],
    image: '/assets/ventana-1-900.webp',
    small: '/assets/ventana-1-480.webp',
    width: 718,
    height: 960,
    alt: 'Ventana de aluminio preparada para trabajo a medida',
    badge: 'Medición',
  },
  {
    title: 'Reparación y mantenimiento',
    copy: 'Cambio de vidrio roto, reparaciones, mantenimiento de mamparas y cambio de accesorios de ventanas corredizas.',
    details: ['reparaciones', 'mantenimiento', 'delivery cuando aplica'],
    image: '/assets/local-960.webp',
    small: '/assets/local-480.webp',
    width: 557,
    height: 412,
    alt: 'Taller y tienda Vilcapoma en Breña',
    badge: 'Soporte',
  },
];

const gallery = [
  {
    title: 'Mampara de vidrio',
    category: 'vidrio',
    label: 'Mamparas y duchas',
    image: '/assets/mampara-900.webp',
    small: '/assets/mampara-480.webp',
    width: 900,
    height: 673,
    alt: 'Mampara de vidrio instalada por Vilcapoma',
  },
  {
    title: 'Ventanas de aluminio instaladas',
    category: 'aluminio',
    label: 'Ventanas y aluminio',
    image: '/assets/ventana-2-1200.webp',
    small: '/assets/ventana-2-480.webp',
    width: 1200,
    height: 901,
    alt: 'Ventanas de aluminio instaladas en edificio',
  },
  {
    title: 'Espejo a medida',
    category: 'vidrio',
    label: 'Vidrios y espejos',
    image: '/assets/espejo-900.webp',
    small: '/assets/espejo-480.webp',
    width: 900,
    height: 1200,
    alt: 'Espejo grande instalado a medida',
  },
  {
    title: 'Enmarcado decorativo',
    category: 'enmarcados',
    label: 'Enmarcados',
    image: '/assets/enmarcado-2-1200.webp',
    small: '/assets/enmarcado-2-480.webp',
    width: 1200,
    height: 901,
    alt: 'Enmarcado decorativo clásico realizado por Vilcapoma',
  },
  {
    title: 'Ventana lista para instalación',
    category: 'aluminio',
    label: 'Aluminio',
    image: '/assets/ventana-1-900.webp',
    small: '/assets/ventana-1-480.webp',
    width: 718,
    height: 960,
    alt: 'Ventana de aluminio preparada en taller',
  },
  {
    title: 'Enmarcado contemporáneo',
    category: 'enmarcados',
    label: 'Enmarcados',
    image: '/assets/enmarcado-1-900.webp',
    small: '/assets/enmarcado-1-480.webp',
    width: 900,
    height: 1200,
    alt: 'Enmarcado contemporáneo personalizado',
  },
];

const galleryFilters = [
  { label: 'Todos', value: 'todos' },
  { label: 'Enmarcados', value: 'enmarcados' },
  { label: 'Vidrio', value: 'vidrio' },
  { label: 'Aluminio', value: 'aluminio' },
];

const solutionItems = [
  'Trabajo personalizado',
  'Asesoramiento',
  'Materiales de calidad',
  'Cumplimiento',
  'Confianza',
  'Experiencia',
];

const process = [
  {
    step: '01',
    title: 'Cuéntanos qué necesitas',
    copy: 'Puedes escribir por WhatsApp, redes sociales o acercarte a la tienda.',
  },
  {
    step: '02',
    title: 'Revisamos el trabajo',
    copy: 'Evaluamos medidas, fotos o el espacio donde se hará la instalación.',
  },
  {
    step: '03',
    title: 'Tomamos medidas si aplica',
    copy: 'Para trabajos con instalación, Vilcapoma mide directamente en el lugar.',
  },
  {
    step: '04',
    title: 'Preparamos tu pedido',
    copy: 'Realizamos corte, fabricación, enmarcado o reparación según lo acordado.',
  },
  {
    step: '05',
    title: 'Entrega o instalación',
    copy: 'Coordinamos recojo, delivery cuando aplica o instalación en el espacio.',
  },
];

const reviews = [
  {
    author: 'Cesar Mantilla',
    date: '17 nov 2020',
    text: 'Geniales! de frente al grano y con un buen precio, muy honestos. 100% recomendados',
  },
  {
    author: 'Victoria Saravia',
    date: '8 jun 2021',
    text: 'Recomendado, buena atención, profesionales, no te discriminan si es un trabajo pequeño. muchas gracias!',
  },
  {
    author: 'cristhian roberto valdez lora (iron stark)',
    date: '5 oct 2021',
    text: 'Trabajo traido y buen acabado',
  },
  {
    author: 'Cesar augusto Muñoz peña',
    date: '3 may 2022',
    text: 'Excelente la atención estoy agradecido.',
  },
  {
    author: 'Christian Alejandro Ventura Bustamante',
    date: '21 jul 2023',
    text: 'Muy buen trabajo y atención de los maestros 👏🏻',
  },
  {
    author: 'BAGOAS AMADO',
    date: '19 may 2024',
    text: 'Excelente servicio. Gracias',
  },
];

const faqs = [
  [
    '¿Realizan visitas para tomar medidas?',
    'Sí. Para los trabajos que requieren instalación, nosotros mismos realizamos la toma de medidas en el lugar para garantizar un ajuste correcto.',
  ],
  [
    '¿Qué tipo de trabajos realizan?',
    'Realizamos enmarcados personalizados, corte e instalación de vidrios y espejos, mamparas, puertas y ventanas de aluminio, así como mantenimiento y reparaciones.',
  ],
  [
    '¿Enmarcan diplomas, cuadros y lienzos?',
    'Sí, realizamos enmarcados personalizados para cuadros, diplomas, fotos, títulos y lienzos, adaptándonos al estilo y medidas que necesites.',
  ],
  [
    '¿Qué tipos de vidrio trabajan?',
    'Trabajamos vidrio transparente, templado, laminado, bronce, catedral, incoloro y de colores, según los requerimientos de cada proyecto.',
  ],
  [
    '¿Hacen trabajos para empresas u oficinas?',
    'Sí, realizamos divisiones, mamparas y ventanas tanto para oficinas, comercios y locales como para viviendas particulares.',
  ],
  [
    '¿Cómo puedo solicitar una cotización?',
    'Puedes escribirnos por WhatsApp con las medidas aproximadas o fotos de referencia de lo que necesitas, o visitarnos directamente en nuestra tienda en Breña.',
  ],
  [
    '¿Hacen servicio de mantenimiento o reparación?',
    'Sí, atendemos cambio de vidrios rotos, mantenimiento de mamparas corredizas y cambio de accesorios de aluminio desgastados.',
  ],
  [
    '¿Qué zonas o distritos atienden?',
    'Atendemos en Breña y distintos distritos de Lima según el tipo de trabajo, incluyendo Pueblo Libre, Jesús María, Lince, San Miguel, Magdalena, San Isidro, San Borja, La Molina y Surco, entre otros.',
  ],
  [
    '¿Cuánto tiempo toma la fabricación de un trabajo?',
    'El tiempo depende de las características y volumen del trabajo solicitado. Al momento de evaluar tu proyecto te indicaremos el plazo estimado correspondiente.',
  ],
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: brand.name,
  description:
    'Vidriería, aluminios y marquería en Breña, Lima. Trabajos en vidrio, aluminio, espejos, mamparas, ventanas y enmarcados a medida.',
  image: '/assets/local-960.webp',
  telephone: '+51970947515',
  email: brand.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: brand.addressLine1,
    addressLocality: 'Breña',
    addressRegion: 'Lima',
    addressCountry: 'PE',
  },
  openingHours: 'Mo-Sa 08:30-19:00',
  sameAs: [brand.instagram, brand.facebook],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    bestRating: '5',
    reviewCount: '14',
  },
};

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M.06 24l1.68-6.16A11.86 11.86 0 0 1 .16 11.9C.16 5.34 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.89 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24Zm6.6-3.81a9.86 9.86 0 0 0 5.39 1.59 9.9 9.9 0 0 0 9.89-9.88A9.9 9.9 0 0 0 12.05 2 9.9 9.9 0 0 0 2.16 11.9c0 2.22.65 3.89 1.75 5.63l-1 3.65 3.75-.99Zm11.38-5.46c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42Z" />
    </svg>
  );
}

function FacebookIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V14h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="4.5" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.4" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ResponsiveImage({
  src,
  small,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
}: {
  src: string;
  small: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy';
}) {
  return (
    <img
      src={src}
      srcSet={`${small} 480w, ${src} ${width}w`}
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 33vw"
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-5 max-w-3xl text-center lg:mb-14'
          : 'mb-5 max-w-2xl lg:mb-8'
      }
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-1 text-xl font-extrabold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setHasScrolled(window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[1000]" data-site-header>
      <div className="hidden border-b border-white/10 bg-brand-navy px-6 py-2 text-xs text-slate-100 lg:block">
        <div className="section-shell flex items-center justify-between gap-6 px-0">
          <p className="flex min-w-0 items-center gap-2 font-medium">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-red-300" aria-hidden="true" />
            <span className="truncate">
              {brand.addressLine1}, {brand.addressLine2} · Ref: {brand.reference}
            </span>
          </p>
          <p className="flex shrink-0 items-center gap-2 text-slate-200">
            <Clock className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
            {brand.hoursWeek} · {brand.hoursSunday}
          </p>
        </div>
      </div>

      <header
        className={`border-b transition-all duration-300 ${
          hasScrolled
            ? 'border-slate-200/80 bg-white/[0.88] shadow-[0_10px_28px_-22px_rgba(15,23,42,0.8)] backdrop-blur-xl'
            : 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
        }`}
      >
        <div className="section-shell flex min-h-14 items-center justify-between gap-3 py-1.5 lg:min-h-16">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Ir al inicio"
          >
            <img
              src="/assets/logo-vvm.webp"
              alt="Logo de Vidriería - Aluminios & Marquería “Vilcapoma”"
              width={240}
              height={239}
              className="h-10 w-10 rounded bg-white object-contain shadow-sm lg:h-12 lg:w-12"
              loading="eager"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[11px] font-black uppercase tracking-tight text-brand-navy sm:text-xs">
                Vidriería · Aluminios · Marquería
              </span>
              <span className="block text-sm font-extrabold uppercase tracking-wide text-brand-red sm:text-lg">
                {brand.shortName}
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex"
            aria-label="Principal"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="border-b-2 border-transparent py-1 transition hover:border-brand-blue hover:text-brand-blue"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-whatsapp px-3.5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-whatsapp-dark hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <details className="group relative lg:hidden">
              <summary className="flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 marker:hidden">
                <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                <ChevronDown
                  className="hidden h-5 w-5 group-open:block"
                  aria-hidden="true"
                />
                <span className="sr-only">Abrir menú</span>
              </summary>
              <nav
                className="absolute right-0 top-11 w-[min(88vw,320px)] rounded-xl border border-slate-200 bg-white/95 p-3 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl"
                aria-label="Menú móvil"
              >
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-brand-navy"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-brand-surface py-5 sm:py-10 lg:py-20"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(to_right,#1A365D_1px,transparent_1px),linear-gradient(to_bottom,#1A365D_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="section-shell grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Taller y tienda en Breña
          </p>
          <h1 className="max-w-4xl text-2xl font-extrabold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-6xl">
            Vidrio, aluminio y enmarcados{' '}
            <span className="text-brand-navy underline decoration-brand-red decoration-2 underline-offset-4 lg:no-underline">
              a tu medida
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            30 años de experiencia brindando soluciones personalizadas con
            asesoramiento, materiales de calidad y acabados pensados para cada
            proyecto.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-whatsapp-dark hover:shadow-xl sm:px-7"
            >
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </a>
            <a
              href="#trabajos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Ver nuestros trabajos
              <ChevronDown className="h-4 w-4 text-slate-500" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3 lg:mt-8">
            <div>
              <strong className="block text-lg font-black text-brand-navy sm:text-xl">
                30 años de experiencia
              </strong>
              <span className="text-xs font-medium text-slate-600">
                Trayectoria en el rubro
              </span>
            </div>
            <div>
              <strong className="block text-lg font-black text-brand-red sm:text-xl">
                Trabajo a medida
              </strong>
              <span className="text-xs font-medium text-slate-600">
                Medición, corte e instalación
              </span>
            </div>
            <div>
              <strong className="block text-lg font-black text-brand-blue sm:text-xl">
                Asesoramiento
              </strong>
              <span className="text-xs font-medium text-slate-600">
                Atención directa y clara
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.16)] sm:p-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 lg:aspect-[0.88]">
              <ResponsiveImage
                src="/assets/enmarcado-1-900.webp"
                small="/assets/enmarcado-1-480.webp"
                alt="Enmarcado personalizado elaborado por Vidriería - Aluminios & Marquería Vilcapoma"
                width={900}
                height={1200}
                loading="eager"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/10 bg-slate-950/75 p-2.5 text-white backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:p-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Marquería personalizada
                </p>
                <p className="text-xs font-semibold sm:text-sm">
                  Acabados para tus recuerdos, cuadros y láminas
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const toneClasses = {
    blue: 'bg-blue-50 text-brand-blue',
    navy: 'bg-slate-100 text-brand-navy',
    red: 'bg-red-50 text-brand-red',
    green: 'bg-emerald-50 text-emerald-700',
  };

  return (
    <section
      className="border-b border-slate-200 bg-white py-5 shadow-sm lg:py-8"
      aria-label="Razones de confianza"
    >
      <div className="section-shell">
        <div className="mb-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:hidden">
          <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-navy font-bold text-white shadow-sm">
            <span className="text-lg leading-none">30</span>
            <span className="text-[8px] uppercase tracking-wider text-slate-300">
              Años
            </span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              30 años de experiencia
            </h2>
            <p className="text-xs text-slate-500">
              Atendiendo hogares, negocios y proyectos a medida.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200 lg:gap-0">
          {trustItems.map(({ title, copy, icon: Icon, tone }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-slate-50/80 p-3 lg:border-0 lg:bg-white lg:px-6"
            >
              <div
                className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg lg:h-12 lg:w-12 ${toneClasses[tone as keyof typeof toneClasses]}`}
              >
                <Icon className="h-4 w-4 lg:h-6 lg:w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 lg:text-sm">
                {title}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-slate-500 lg:text-xs">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      className="border-b border-slate-200 bg-brand-surface py-8 sm:py-14 lg:py-20"
    >
      <div className="section-shell">
        <SectionIntro
          eyebrow="Soluciones integrales"
          title="Nuestros servicios"
          copy="Vidriería, aluminio, marquería y trabajos en vidrio para hogares y negocios en Breña y Lima."
        />

        <div className="space-y-3.5 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card flex items-center gap-3.5 rounded-xl border border-slate-200 p-3.5 shadow-[0_4px_20px_-2px_rgba(26,54,93,0.08)] transition hover:-translate-y-0.5 hover:shadow-xl lg:block lg:overflow-hidden lg:bg-white lg:p-0"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 lg:h-56 lg:w-full lg:rounded-none lg:border-0">
                <ResponsiveImage
                  src={service.image}
                  small={service.small}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute right-3 top-3 hidden rounded bg-brand-navy px-2.5 py-1 text-[11px] font-bold text-white lg:inline-flex">
                  {service.badge}
                </span>
              </div>
              <div className="min-w-0 flex-1 lg:p-6">
                <h3 className="text-sm font-bold leading-tight text-slate-950 lg:text-xl">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-slate-600 lg:mt-2 lg:leading-relaxed">
                  {service.copy}
                </p>
                <div className="mt-4 hidden flex-wrap gap-2 border-t border-slate-100 pt-4 lg:flex">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FramingSpotlight() {
  return (
    <section
      id="enmarcados"
      className="border-b border-slate-200 bg-white py-8 sm:py-14 lg:py-20"
    >
      <div className="section-shell grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-0.5 w-6 bg-brand-red" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
              Especialistas en enmarcados
            </p>
          </div>
          <h2 className="text-xl font-extrabold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Estilo, medidas y acabados personalizados
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Trabajos adaptados a las medidas, estilo y acabado que necesita
            cada cliente. Cuidamos cada pieza para que tu recuerdo, diploma,
            cuadro o lámina luzca bien en tu espacio.
          </p>
          <div className="mt-5 space-y-3">
            {[
              ['Trabajo a medida', 'Respetamos las proporciones de tu pieza y del lugar donde se colocará.'],
              ['Asesoramiento en molduras', 'Te orientamos para elegir una moldura acorde a tu diseño y preferencia.'],
              ['Cuidado en cada detalle', 'Armado prolijo y presentación limpia para piezas personales o decorativas.'],
            ].map(([title, copy], index) => (
              <article
                key={title}
                className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                    index === 1 ? 'bg-brand-red' : 'bg-brand-blue'
                  }`}
                >
                  {index + 1}
                </span>
                <p className="text-xs leading-relaxed text-slate-500">
                  <strong className="block text-sm text-slate-800">{title}</strong>
                  {copy}
                </p>
              </article>
            ))}
          </div>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-xs font-bold text-white shadow-md transition hover:bg-whatsapp-dark"
          >
            Cotizar mi enmarcado por WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-6">
          {[
            {
              title: 'Enmarcado decorativo',
              copy: 'Acabado clásico personalizado',
              src: '/assets/enmarcado-2-1200.webp',
              small: '/assets/enmarcado-2-480.webp',
              width: 1200,
              height: 901,
              alt: 'Enmarcado decorativo clásico con moldura dorada',
            },
            {
              title: 'Enmarcado contemporáneo',
              copy: 'Marco claro para foto o lámina',
              src: '/assets/enmarcado-1-900.webp',
              small: '/assets/enmarcado-1-480.webp',
              width: 900,
              height: 1200,
              alt: 'Enmarcado contemporáneo personalizado con moldura clara',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-md sm:p-4"
            >
              <div className="group relative h-56 overflow-hidden rounded-xl bg-slate-100 sm:h-80 lg:h-96">
                <ResponsiveImage
                  src={item.src}
                  small={item.small}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-transparent p-3 text-white lg:p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Enmarcado personalizado
                  </p>
                  <h3 className="text-xs font-semibold sm:text-sm">{item.title}</h3>
                  <p className="hidden text-[11px] text-slate-300 sm:block">{item.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const visibleGallery =
    activeFilter === 'todos'
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  return (
    <section
      id="trabajos"
      className="border-b border-slate-200 bg-brand-surface py-8 sm:py-14 lg:py-20"
    >
      <div className="section-shell">
        <div className="mb-5 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Trabajos realizados"
            title="Fotografías reales de nuestros trabajos"
            copy="Una muestra de trabajos en vidrio, aluminio, espejos y enmarcados realizados por Vilcapoma."
            align="left"
          />
          <fieldset className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            <legend className="sr-only">Filtrar galería</legend>
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`min-h-10 shrink-0 rounded-full px-4 text-xs font-bold transition ${
                  activeFilter === filter.value
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-12 lg:gap-6">
          {visibleGallery.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-md ${
                index === 0 || index === 1 ? 'lg:col-span-6' : 'lg:col-span-4'
              }`}
            >
              <div className={index === 0 || index === 1 ? 'h-44 sm:h-64 lg:h-80' : 'h-44 sm:h-60 lg:h-64'}>
                <ResponsiveImage
                  src={item.image}
                  small={item.small}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-white lg:p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {item.label}
                </p>
                <h3 className="text-xs font-bold sm:text-sm lg:text-lg">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <ImageIcon className="h-4 w-4 text-brand-navy" aria-hidden="true" />
            ¿Tienes una foto de referencia de lo que necesitas?
          </p>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-brand-navy px-4 text-xs font-bold text-white transition hover:bg-brand-dark"
          >
            Envíanosla por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="soluciones" className="border-b border-slate-200 bg-white py-8 sm:py-14 lg:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <SectionIntro
            eyebrow="Soluciones hechas para ti"
            title="Soluciones hechas para ti"
            copy="Trabajamos en función de tu espacio, tus medidas y el uso que tendrá cada pieza."
            align="left"
          />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {solutionItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-700"
              >
                <Check className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl bg-brand-navy p-5 text-white shadow-[0_18px_40px_-16px_rgba(26,54,93,0.5)] lg:col-span-5 lg:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
            Atención personalizada
          </p>
          <h3 className="mt-2 text-xl font-extrabold leading-tight lg:text-2xl">
            Asesoría para vidrio, aluminio y enmarcados
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Puedes contarnos qué necesitas, enviar medidas aproximadas o una
            foto de referencia. Para instalación, Vilcapoma toma sus propias
            medidas en el lugar.
          </p>
          <div className="mt-5 space-y-2 text-xs text-slate-100">
            {['Vidrios y espejos', 'Mamparas y duchas', 'Ventanas corredizas', 'Enmarcados personalizados'].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-200" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-4 text-xs font-bold text-brand-navy transition hover:bg-slate-100"
          >
            Solicitar orientación por WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}

function WorkProcess() {
  return (
    <section id="proceso" className="border-b border-slate-200 bg-brand-surface py-8 sm:py-14 lg:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Cómo trabajamos"
          title="¿Cómo trabajamos?"
          copy="Un proceso claro para que cada trabajo tenga la atención que necesita."
        />
        <div className="relative space-y-4 pl-3 before:absolute before:bottom-3 before:left-6 before:top-2 before:w-0.5 before:bg-slate-200 lg:grid lg:grid-cols-5 lg:gap-4 lg:space-y-0 lg:pl-0 lg:before:hidden">
          {process.map((item) => (
            <article
              key={item.step}
              className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-xs font-black text-brand-navy">
                {item.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="border-b border-slate-200 bg-white py-8 sm:py-14 lg:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="relative">
              <ResponsiveImage
                src="/assets/local-960.webp"
                small="/assets/local-480.webp"
                alt="Fachada del taller y tienda Vidriería - Aluminios & Marquería Vilcapoma en Breña"
                width={557}
                height={412}
                className="h-56 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-lg bg-slate-950/75 p-3 text-white backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Taller y tienda en Breña
                </p>
                <p className="text-xs font-semibold">{brand.addressLine1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="section-eyebrow">Nuestra historia</p>
          <h2 className="mt-1 text-xl font-extrabold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            30 años de experiencia
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Somos una vidriería, taller de aluminios y marquería ubicada en
            Breña. Atendemos trabajos personalizados para hogares, negocios y
            clientes que buscan asesoramiento, cumplimiento y una buena relación
            calidad/precio.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Realizamos corte, fabricación, instalación, reparación y
            mantenimiento según el tipo de proyecto, siempre con materiales de
            calidad y trato directo.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-2xl font-black text-brand-navy">
                30 años de experiencia
              </strong>
              <span className="text-xs font-medium text-slate-500">en el rubro</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-2xl font-black text-brand-red">Breña</strong>
              <span className="text-xs font-medium text-slate-500">Lima, Perú</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slogan() {
  return (
    <section className="bg-brand-dark px-5 py-9 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <span className="mx-auto mb-4 block h-0.5 w-10 bg-brand-red" />
        <p className="text-lg font-semibold italic leading-relaxed sm:text-2xl">
          “{brand.slogan}”
        </p>
      </div>
    </section>
  );
}

function RatingStars({ rating = 5, label }: { rating?: number; label: string }) {
  const percentage = `${(rating / 5) * 100}%`;

  return (
    <span className="relative inline-block text-sm leading-none" aria-label={label}>
      <span className="text-slate-300">★★★★★</span>
      <span
        className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-amber-400"
        style={{ width: percentage }}
        aria-hidden="true"
      >
        ★★★★★
      </span>
    </span>
  );
}

function Reviews() {
  return (
    <section
      id="opiniones"
      className="border-b border-slate-200 bg-white py-8 sm:py-14 lg:py-20"
    >
      <div className="section-shell">
        <div className="mb-5 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Opiniones de Google"
            title="Lo que dicen nuestros clientes"
            copy="Reseñas reales compartidas en Google por clientes de Vilcapoma."
            align="left"
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 lg:min-w-72">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-950">4.4</span>
              <div>
                <RatingStars rating={4.4} label="Calificación 4.4 de 5" />
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  4.4 / 5 en Google · 14 opiniones
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="flex w-[290px] shrink-0 flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:w-auto"
            >
              <div>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                      {review.author.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold leading-tight text-slate-900">
                        {review.author}
                      </h3>
                      <p className="text-[10px] text-slate-400">
                        {review.date} · Reseña de Google
                      </p>
                    </div>
                  </div>
                  <RatingStars rating={5} label="Calificación 5 de 5" />
                </div>
                <p className="text-xs italic leading-relaxed text-slate-600">
                  “{review.text}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="preguntas" className="border-b border-slate-200 bg-brand-surface py-8 sm:py-14 lg:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Dudas frecuentes"
          title="Preguntas frecuentes"
          copy="Respuestas directas sobre nuestro modo de trabajo y atención."
        />
        <div className="mx-auto grid max-w-5xl gap-2.5 lg:grid-cols-2 lg:gap-4">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              className={`group rounded-xl border border-slate-200 bg-white shadow-sm ${
                index === faqs.length - 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-xl bg-white p-3.5 text-left marker:hidden hover:bg-slate-50">
                <span className="text-xs font-bold text-slate-900 sm:text-sm">
                  {question}
                </span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-slate-500 transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t border-slate-100 px-3.5 py-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-b border-slate-200 bg-white py-8 sm:py-14 lg:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <SectionIntro
            eyebrow="Contacto y ubicación"
            title="Ubicación y atención en Breña"
            copy="Estamos en una zona céntrica y de fácil acceso, al costado de La Rambla Brasil."
            align="left"
          />
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: 'Dirección',
                body: (
                  <>
                    {brand.addressLine1}
                    <br />
                    {brand.addressLine2}
                  </>
                ),
                sub: `Referencia: ${brand.reference}`,
                tone: 'bg-red-50 text-brand-red',
              },
              {
                icon: Clock,
                title: 'Horario de atención',
                body: brand.hoursWeek,
                sub: brand.hoursSunday,
                tone: 'bg-blue-50 text-brand-navy',
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                body: brand.phone,
                sub: brand.email,
                tone: 'bg-emerald-50 text-emerald-700',
              },
            ].map((item) => (
              <article key={item.title} className="flex items-start gap-3.5">
                <div
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs font-medium leading-relaxed text-slate-700">
                    {item.body}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                    {item.sub}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={brand.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-navy px-4 text-xs font-bold text-white transition hover:bg-brand-dark"
            >
              <Map className="h-4 w-4 text-red-300" aria-hidden="true" />
              Abrir en Google Maps
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <Mail className="h-4 w-4 text-brand-red" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-300 bg-[#e5e3df] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.18)] lg:h-96">
            <img
              src="/assets/mapa-vilcapoma-brena.webp"
              alt="Mapa de ubicación de Vidriería - Aluminios & Marquería Vilcapoma en Breña, cerca de La Rambla Brasil"
              width={1138}
              height={650}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy px-4 py-12 text-center text-white lg:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">
          Contáctanos
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Cuéntanos qué necesitas y te ayudamos a encontrar la solución
          adecuada en vidrio, aluminio o enmarcados.
        </p>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-7 py-3 text-base font-bold text-white shadow-xl transition hover:bg-whatsapp-dark hover:shadow-2xl"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Conversemos por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 px-5 pb-10 pt-10 text-xs text-slate-400 lg:pt-16">
      <div className="section-shell px-0">
        <div className="grid gap-8 border-b border-slate-800 pb-8 lg:grid-cols-12 lg:gap-10 lg:pb-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/assets/logo-vvm.webp"
                alt="Logo Vilcapoma"
                width={240}
                height={239}
                loading="lazy"
                className="h-12 w-12 rounded bg-white object-contain p-0.5"
              />
              <div>
                <p className="text-base font-bold text-white">{brand.shortName}</p>
                <p className="text-[10px] uppercase tracking-wider text-red-300">
                  Vidriería · Aluminios · Marquería
                </p>
              </div>
            </div>
            <p className="max-w-sm text-xs leading-relaxed">
              {brand.name}. Soluciones a medida en vidrio, aluminio y
              enmarcados en Breña, Lima.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Vidriería Vilcapoma"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:bg-slate-800"
              >
                <InstagramIcon />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Vidriería Vilcapoma"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:bg-slate-800"
              >
                <FacebookIcon />
              </a>
              <a
                href={`mailto:${brand.email}`}
                aria-label="Enviar correo a Vidriería Vilcapoma"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="mb-3 font-bold uppercase tracking-wider text-white">
              Navegación
            </p>
            <ul className="space-y-2">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-3 font-bold uppercase tracking-wider text-white">
              Servicios
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#servicios" className="transition hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-3 font-bold uppercase tracking-wider text-white">
              Atención y taller
            </p>
            <address className="space-y-3 not-italic text-slate-300">
              <p>
                <strong className="text-white">Dirección:</strong>
                <br />
                {brand.addressLine1}
                <br />
                {brand.addressLine2}
              </p>
              <p>
                <strong className="text-white">Horario:</strong>
                <br />
                {brand.hoursWeek}
                <br />
                {brand.hoursSunday}
              </p>
              <p>
                <strong className="text-white">WhatsApp:</strong>
                <br />
                <a href={brand.whatsapp} className="font-semibold text-emerald-300 hover:underline">
                  {brand.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-7 text-[11px] text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>{brand.copyright}</p>
          <p>Breña, Lima · Vidriería, aluminio y marquería</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-4 right-4 z-50">
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Vidriería Vilcapoma por WhatsApp"
        className="flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition hover:scale-105 hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <div aria-hidden="true" className="h-[var(--site-header-height)]" />
      <div className="overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <Services />
        <FramingSpotlight />
        <Gallery />
        <Solutions />
        <WorkProcess />
        <About />
        <Slogan />
        <Reviews />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
      </div>
      <FloatingWhatsApp />
    </main>
  );
}
