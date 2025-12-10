export const landingContent = {
  analytics: {
    facebookPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "",
  },
  seo: {
    title: "Tu Solución Ideal | Atención por WhatsApp",
    description:
      "Obtén la mejor solución para tus necesidades. Atención personalizada, precios competitivos y respuesta inmediata por WhatsApp.",
    keywords: [
      "whatsapp",
      "atención al cliente",
      "servicio",
      "consulta",
      "asesoría",
    ],
  },
  branding: {
    logoText: "Your Brand",
    logoImage: "vaquero.png", // Poner nombre del archivo con extension de la carpeta public, (ej: 'logo.png') o URL externa.
  },
  whatsapp: {
    phoneNumber: "1234567890",
    defaultMessage: "Hola! Me interesa conocer más sobre sus servicios",
    buttonText: "Contactar",
  },
  hero: {
    headline: "La solución que estabas buscando",
    subheadline:
      "Obtén información personalizada y resuelve todas tus dudas al instante. Contáctanos por WhatsApp.",
    ctaPrimary: "Consultar por WhatsApp",
  },
  trustBadges: [
    { icon: "clock" as const, text: "Respuesta inmediata" },
    { icon: "shield" as const, text: "Atención confiable" },
    { icon: "users" as const, text: "Miles de clientes satisfechos" },
  ],
  benefits: [
    {
      icon: "zap" as const,
      title: "Atención personalizada",
      description:
        "Recibe asesoría especializada adaptada a tus necesidades específicas",
    },
    {
      icon: "clock" as const,
      title: "Disponibilidad 24/7",
      description:
        "Estamos aquí cuando nos necesites, cualquier día a cualquier hora",
    },
    {
      icon: "trending-up" as const,
      title: "La mejor relación calidad-precio",
      description:
        "Obtén el máximo valor por tu inversión con nuestras soluciones",
    },
    {
      icon: "message-circle" as const,
      title: "Respuestas rápidas",
      description:
        "No esperes días por una respuesta. Te atendemos al instante",
    },
    {
      icon: "check-circle" as const,
      title: "Proceso simple y ágil",
      description:
        "Sin trámites complicados. Hazlo fácil y rápido por WhatsApp",
    },
    {
      icon: "heart" as const,
      title: "Garantía de satisfacción",
      description:
        "Tu tranquilidad es nuestra prioridad. Estamos comprometidos contigo",
    },
  ],
  featuresTitle: "¿Por qué elegirnos?",
  featuresSubtitle: "Todo lo que necesitas para tomar la mejor decisión",
  metrics: [
    {
      value: "5,000+",
      label: "Clientes felices",
      description: "Confían en nosotros",
    },
    { value: "15 min", label: "Tiempo de respuesta", description: "Promedio" },
    {
      value: "4.9★",
      label: "Calificación",
      description: "De nuestros clientes",
    },
    {
      value: "98%",
      label: "Satisfacción",
      description: "Recomiendan nuestro servicio",
    },
  ],
  metricsTitle: "Resultados probados",
  metricsSubtitle: "Ve el impacto en el crecimiento de tu negocio",
  whyChoose: [
    {
      title: "Experiencia y profesionalismo",
      description:
        "Años de trayectoria respaldando la calidad de nuestro servicio",
    },
    {
      title: "Precios competitivos",
      description: "Las mejores tarifas del mercado sin comprometer la calidad",
    },
    {
      title: "Sin letra chica",
      description: "Transparencia total. Lo que ves es lo que obtienes",
    },
    {
      title: "Soluciones a medida",
      description: "Adaptamos nuestro servicio a tus necesidades específicas",
    },
    {
      title: "Atención humana real",
      description: "Habla con personas reales que entienden lo que necesitas",
    },
    {
      title: "Compromiso garantizado",
      description: "Tu satisfacción es nuestra máxima prioridad",
    },
  ],
  whyChooseTitle: "Nuestro compromiso contigo",
  whyChooseSubtitle:
    "Nos diferenciamos por ofrecer la mejor experiencia desde el primer contacto hasta después de tu compra.",
  howItWorks: [
    {
      step: "1" as const,
      title: "Contáctanos por WhatsApp",
      description:
        "Haz clic en el botón y cuéntanos qué necesitas. Es rápido y fácil.",
    },
    {
      step: "2" as const,
      title: "Recibe asesoría personalizada",
      description:
        "Nuestro equipo te brindará toda la información que necesitas para decidir.",
    },
    {
      step: "3" as const,
      title: "Obtén tu solución",
      description: "Procesa tu pedido o contratación de forma simple y segura.",
    },
  ],
  howItWorksTitle: "Cómo funciona",
  howItWorksSubtitle:
    "Tres pasos simples para comenzar a hacer crecer tu negocio",
  finalCTA: {
    headline: "¿Listo para dar el siguiente paso?",
    subheadline:
      "Únete a miles de clientes satisfechos que ya confiaron en nosotros",
    buttonText: "Consultar ahora por WhatsApp",
  },
  ctaFooterText: "Configuración rápida • Sin compromiso • Comienza hoy",
  testimonials: [
    {
      name: "María González",
      role: "Emprendedora",
      content:
        "Increíble servicio. Me ayudaron a resolver mi problema en menos de 24 horas. ¡Altamente recomendado!",
    },
    {
      name: "Carlos Rodríguez",
      role: "Empresario",
      content:
        "La atención personalizada es excepcional. Se nota que realmente se preocupan por sus clientes.",
    },
    {
      name: "Ana López",
      role: "Profesional independiente",
      content:
        "Desde el primer contacto por WhatsApp supe que había encontrado la solución perfecta para mi negocio.",
    },
  ],
  faqs: [
    {
      question: "¿Cómo funciona el proceso?",
      answer:
        "Es muy simple. Contáctanos por WhatsApp, cuéntanos tus necesidades, y nuestro equipo te brinda asesoría personalizada para encontrar la mejor solución.",
    },
    {
      question: "¿Cuánto tiempo toma implementar?",
      answer:
        "Dependiendo de la complejidad, podemos tenerte funcionando en cuestión de horas o días. La mayoría de nuestros clientes están operativos en menos de 24 horas.",
    },
    {
      question: "¿Hay algún costo oculto?",
      answer:
        "No, somos completamente transparentes. El precio que ves es el precio final, sin costos adicionales ni letras chiquitas.",
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer:
        "Sí, ofrecemos soporte técnico completo. Estamos disponibles por WhatsApp para resolver cualquier duda o problema que puedas tener.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Claro que sí. No hay contratos forzados ni penalizaciones. Puedes cancelar cuando lo necesites.",
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqSubtitle: "Resolvemos tus dudas más comunes",
  contactFormTitle: "Contáctanos",
  contactFormSubtitle:
    "Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.",
  contactFormLabels: {
    fullName: "Nombre y Apellido",
    email: "Email",
    phone: "Número de teléfono",
    city: "Ciudad",
    country: "País",
  },
  contactFormPlaceholders: {
    fullName: "Juan Pérez",
    email: "tu@email.com",
    phone: "+54 9 11 1234 5678",
    city: "Buenos Aires",
    country: "Argentina",
  },
  contactFormValidation: {
    fullNameRequired: "El nombre y apellido son requeridos",
    emailRequired: "El email es requerido",
    emailInvalid: "Email inválido",
    phoneRequired: "El teléfono es requerido",
    cityRequired: "La ciudad es requerida",
    countryRequired: "El país es requerido",
  },
  contactFormSubmit: {
    text: "Contactar por WhatsApp",
    submittingText: "Abriendo WhatsApp...",
  },
  contactFormSuccess: "¡Mensaje enviado! Te contactaremos pronto.",
  contactFormWhatsapp: {
    title: "¿Prefieres WhatsApp?",
    description:
      "Para respuestas más rápidas, contáctanos directamente por WhatsApp. Estamos disponibles para chatear en tiempo real.",
    buttonText: "Chatear por WhatsApp",
  },
  contactFormInfo: {
    email: "Email: info@tuempresa.com",
    whatsapp: "WhatsApp: Disponible 24/7",
    schedule: "Horario: Lunes a Domingo",
  },
  pricingTitle: "Planes y precios",
  pricingSubtitle:
    "Elige el plan que mejor se adapte a tus necesidades. Todos incluyen soporte completo.",
  pricingPlans: [
    {
      name: "Básico",
      price: "$29",
      period: "por mes",
      description: "Perfecto para comenzar",
      features: [
        "Hasta 100 consultas mensuales",
        "Soporte por WhatsApp",
        "Dashboard básico",
        "Reportes mensuales",
      ],
      buttonText: "Comenzar gratis",
    },
    {
      name: "Profesional",
      price: "$79",
      period: "por mes",
      description: "Para negocios en crecimiento",
      features: [
        "Consultas ilimitadas",
        "Soporte prioritario 24/7",
        "Dashboard avanzado",
        "Reportes en tiempo real",
        "API access",
        "Integraciones",
      ],
      popular: true,
      buttonText: "Comenzar prueba",
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "por mes",
      description: "Para grandes organizaciones",
      features: [
        "Todo lo del plan Profesional",
        "Cuenta dedicada",
        "SLA garantizado",
        "Consultoría personalizada",
        "Integraciones enterprise",
        "Soporte telefónico",
      ],
      buttonText: "Contactar ventas",
    },
  ],
  aboutTitle: "Sobre nosotros",
  aboutSubtitle:
    "Somos un equipo apasionado por ayudar a las empresas a crecer mediante soluciones innovadoras.",
  aboutContent: `Desde nuestros inicios, nos hemos dedicado a proporcionar servicios de calidad excepcional. Nuestra misión es simplificar procesos complejos y ofrecer resultados que realmente importan.\n\nCon años de experiencia en el sector, entendemos los desafíos únicos que enfrentan las empresas modernas. Por eso, hemos desarrollado soluciones que no solo resuelven problemas inmediatos, sino que también preparan a nuestros clientes para el futuro.`,
  aboutStats: [
    { value: "5+", label: "Años de experiencia" },
    { value: "1000+", label: "Clientes satisfechos" },
    { value: "99%", label: "Satisfacción" },
    { value: "24/7", label: "Soporte disponible" },
  ],
  newsletterTitle: "Mantente informado",
  newsletterSubtitle:
    "Suscríbete a nuestro newsletter y recibe las últimas actualizaciones, consejos y ofertas exclusivas.",
  newsletterPlaceholder: "Ingresa tu email",
  newsletterButtonText: "Suscribirme",
  newsletterValidation: {
    emailRequired: "Por favor ingresa tu email",
    emailInvalid: "Por favor ingresa un email válido",
  },
  newsletterSuccess: "¡Gracias por suscribirte! Te mantendremos informado.",
  newsletterDisclaimer:
    "Sin spam, solo contenido valioso. Puedes darte de baja en cualquier momento.",
  teamTitle: "Nuestro equipo",
  teamSubtitle:
    "Conoce al equipo detrás de nuestro éxito. Profesionales dedicados a tu satisfacción.",
  teamMembers: [
    {
      name: "María González",
      role: "CEO & Fundadora",
      bio: "Con más de 10 años de experiencia en tecnología y emprendimiento, lidera la visión estratégica de la compañía.",
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      bio: "Experto en desarrollo de software y arquitectura de sistemas, asegura que nuestras soluciones sean robustas y escalables.",
    },
    {
      name: "Ana López",
      role: "Directora de Operaciones",
      bio: "Especialista en optimización de procesos y atención al cliente, garantiza una experiencia excepcional para todos.",
    },
  ],
  footerLinks: [
    {
      title: "Servicio",
      items: [
        { label: "Cómo funciona", href: "#how-it-works" },
        { label: "Precios", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Empresa",
      items: [
        { label: "Sobre nosotros", href: "#about" },
        { label: "Contacto", href: "#contact" },
        { label: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Política de privacidad", href: "#privacy" },
        { label: "Términos de servicio", href: "#terms" },
        { label: "Cookies", href: "#cookies" },
      ],
    },
  ],
  footerBranding: {
    logoText: "Your Brand",
    description: "Tu solución ideal para atención personalizada por WhatsApp.",
  },
  footerCopyright: {
    text: "Todos los derechos reservados.",
    year: "2025",
  },
  footerLegal: {
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
  },
  popup: {
    delay: 3000,
    message: "¿Necesitas ayuda?",
    description:
      "Estamos aquí para asesorarte. Haz clic para chatear con nosotros.",
    buttonText: "Iniciar conversación",
  },
};
