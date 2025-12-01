import type {
  Project,
  Service,
  ProcessStep,
  Package,
  Testimonial,
  FAQ,
} from "./types";

// Reemplazar con tu número de WhatsApp
export const WHATSAPP_URL =
  "https://wa.me/+541122692061?text=Hola%2C%20quiero%20consultar%20sobre%20un%20proyecto";

export const projects: Project[] = [
  {
    id: "origami",
    name: "Origami Importados – E-commerce de tecnología",
    shortDescription:
      "Tienda online para venta de celulares, notebooks y accesorios, con gestión de stock y checkout integrado.",
    type: "ecommerce",
    status: "production",
    status2: "demo",
    features: [
      "Catálogo filtrable por marca y modelo",
      "Variantes de producto (color, RAM, almacenamiento)",
      "Checkout con Mercado Pago y reserva de stock",
    ],
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    demoUrl: "https://origami-web-phi.vercel.app",
    priority: 1,
  },
  {
    id: "drcell",
    name: "DrCell – Gestión de ventas y stock para servicio técnico",
    shortDescription:
      "Sistema interno para administrar stock, variantes de productos, ventas y analíticas de rendimiento.",
    type: "internal",
    status: "new",
    status2: "production",
    features: [
      "Productos con variantes y stock reservado",
      "Checkout con Mercado Pago y auditoría de ventas",
      "Dashboard con KPIs e inventario",
    ],
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    demoUrl: "https://sist-proveedor-demo.vercel.app",
    priority: 2,
  },

  {
    id: "cartelito",
    name: "Cartelito – SaaS para locales de comida",
    shortDescription:
      "Plataforma para que restaurantes tengan carta online, gestión de pedidos y pantalla de cocina.",
    type: "saas",
    status: "demo",
    status2: "production",
    features: [
      "Catálogo responsive tipo vitrina",
      "Gestión de pedidos por estado",
      "Panel para ver ventas y productos activos",
    ],
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    demoUrl: "https://burger-proyecto-plan-a.vercel.app",
    priority: 3,
  },
  {
    id: "inmobiliaria",
    name: "Sistema Inmobiliario – Gestión de Propiedades y Visitas",
    shortDescription:
      "Plataforma web completa para la gestión de propiedades inmobiliarias, agenda de visitas, leads y usuarios, con panel administrativo y funcionalidades avanzadas de búsqueda, auditoría y notificaciones automáticas.",
    type: "inmo",
    status: "demo",
    features: [
      "Gestión completa de propiedades, visitas y leads con filtros avanzados, agenda semanal interactiva y flujo conectado entre consultas, visitas y seguimiento comercial.",
      "Panel administrativo seguro con autenticación JWT, roles (Admin, Agente, Cargador), auditoría detallada de operaciones y monitoreo de rendimiento y errores.",
      "Automatización de procesos clave: notificaciones por mail con ICS, recordatorios de visitas, manejo de multimedia y paginación optimizada sobre PostgreSQL.",
    ],
    stack: [
      "ASP.NET Core",
      "React + Next.js",
      "Typescript",
      "Framer Motion",
      "PostgreSQL",
      "Docker",
    ],
    demoUrl: "https://inmobiliaria-full-stack-demo.vercel.app",
  },
];
export const services: Service[] = [
  {
    id: "ecommerce",
    title: "Tiendas online completas",
    description:
      "E-commerce listos para vender desde el primer día, con catálogo, carrito, checkout y pasarela de pago integrada.",
    bullets: [
      "Catálogo con filtros y variantes",
      "Integración con Mercado Pago",
      "Panel de gestión de productos y pedidos",
    ],
    icon: "store",
  },
  {
    id: "gestion",
    title: "Plataformas de gestión",
    description:
      "Sistemas para controlar stock, ventas, clientes y procesos internos de tu negocio.",
    bullets: [
      "Control de inventario en tiempo real",
      "Gestión de ventas y facturación",
      "Roles y permisos de usuario",
    ],
    icon: "chart",
  },
  {
    id: "dashboards",
    title: "Dashboards y analíticas",
    description:
      "Visualiza los datos de tu negocio con paneles claros y métricas accionables.",
    bullets: [
      "KPIs personalizados",
      "Reportes de ventas y rendimiento",
      "Exportación de datos",
    ],
    icon: "dashboard",
  },
  {
    id: "integraciones",
    title: "Integraciones y automatización",
    description:
      "Conecto tus sistemas existentes y automatizo procesos repetitivos.",
    bullets: [
      "APIs y webhooks personalizados",
      "Sincronización de datos",
      "Automatización de flujos de trabajo",
    ],
    icon: "cog",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Relevamiento",
    description:
      "Entiendo tu negocio, tus procesos actuales y qué problema querés resolver.",
  },
  {
    id: 2,
    title: "Propuesta técnica",
    description:
      "Te presento una solución clara con alcance, tecnologías y tiempos estimados.",
  },
  {
    id: 3,
    title: "Desarrollo iterativo",
    description:
      "Construyo por etapas con entregas frecuentes para que veas el avance real.",
  },
  {
    id: 4,
    title: "Lanzamiento y soporte",
    description:
      "Deploy a producción con documentación y soporte post-lanzamiento.",
  },
];

export const packages: Package[] = [
  {
    id: "tienda",
    title: "Tienda lista para vender",
    target: "Para negocios que quieren vender online rápido",
    includes: [
      "E-commerce con catálogo y checkout",
      "Panel de administración",
      "Integración con pasarela de pago",
      "Hosting y dominio configurado",
    ],
    cta: "Quiero mi tienda",
  },
  {
    id: "medida",
    title: "Sistema a medida",
    target: "Para negocios con procesos específicos que digitalizar",
    includes: [
      "Análisis de requerimientos",
      "Desarrollo full stack personalizado",
      "Base de datos diseñada a medida",
      "Capacitación de uso",
    ],
    cta: "Quiero cotizar",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento y mejoras",
    target: "Para sistemas existentes que necesitan evolucionar",
    includes: [
      "Corrección de bugs",
      "Nuevas funcionalidades",
      "Optimización de rendimiento",
      "Actualizaciones de seguridad",
    ],
    cta: "Quiero soporte",
  },
];

export const technologies = [
  "ASP.NET Core",
  "C#",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Vercel",
  "Hostinger",
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "En dos meses teníamos la tienda funcionando y vendiendo. El sistema de stock nos ahorró dolores de cabeza enormes.",
    author: "Martín",
    role: "Dueño",
    business: "Tienda de tecnología",
  },
  {
    id: "2",
    quote:
      "Pasamos de anotar pedidos en papel a tener todo digitalizado. Los mozos usan la tablet y la cocina ve los pedidos al instante.",
    author: "Carolina",
    role: "Gerente",
    business: "Restaurante familiar",
  },
  {
    id: "3",
    quote:
      "El dashboard me muestra exactamente qué productos se venden más y cuáles tengo que reponer. Datos que antes no tenía.",
    author: "Lucas",
    role: "Propietario",
    business: "Servicio técnico de celulares",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "¿Cuánto tiempo lleva desarrollar una tienda online?",
    answer:
      "Depende del alcance, pero una tienda estándar con catálogo, carrito y checkout suele estar lista en 4-6 semanas. Sistemas más complejos con integraciones específicas pueden llevar 2-3 meses.",
  },
  {
    id: "2",
    question: "¿Cómo es el proceso de pago?",
    answer:
      "Generalmente trabajo con un anticipo del 40% para comenzar, 30% en una entrega intermedia funcional, y 30% contra entrega final. Para mantenimiento, trabajo con abonos mensuales.",
  },
  {
    id: "3",
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Ofrezco soporte post-lanzamiento incluido (generalmente 30 días) para ajustes y correcciones. Después podés contratar un plan de mantenimiento mensual o solicitar mejoras puntuales.",
  },
  {
    id: "4",
    question: "¿Puedo ver avances durante el desarrollo?",
    answer:
      "Sí, trabajo de forma iterativa con entregas cada 1-2 semanas. Tenés acceso a un entorno de pruebas donde podés ver el avance real y dar feedback continuo.",
  },
  {
    id: "5",
    question: "¿Qué tecnologías usás y por qué?",
    answer:
      "ASP.NET Core para backend (robusto, escalable, excelente rendimiento), React para frontend (interfaces modernas y rápidas), y PostgreSQL para base de datos (confiable y potente). Es un stack probado en producción.",
  },
];
