# White-Label WhatsApp Landing Page Template

A fully customizable, high-converting landing page designed to sell ANY product or service through WhatsApp. Perfect for paid traffic campaigns (Meta Ads, Google Ads, TikTok Ads) across any industry - alarms, internet services, real estate, automotive, health, courses, and more.

## Features

- 🎨 **100% White-Label** - No branding, completely generic and customizable
- 📱 **Mobile-First Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Loading** - Performance optimized for paid ad campaigns
- 🎯 **Conversion Focused** - Every element drives WhatsApp conversations
- 🔧 **Single Data Object** - All copy lives in one place
- 🌐 **Universal** - Works for any product or service in any industry
- 💚 **WhatsApp Integration** - Floating button + multiple CTAs

## Industries Supported

This template works for selling ANY product or service:
- Security & Alarm Systems
- Internet/WiFi/Telecom Services
- SIM Card Portability
- Automotive Sales (cars, motorcycles, parts)
- Real Estate (properties, rentals)
- Healthcare Services (clinics, consultations)
- Online Courses & Education
- Home Services (plumbing, electrical, cleaning)
- Insurance Products
- Financial Services
- Beauty & Wellness
- And literally any other business...

## Quick Start

### 1. Configure Everything in One File

Open `app/page.tsx` and customize the `landingContent` object near the top:

\`\`\`typescript
const landingContent = {
  // 🏢 Your Company Branding
  branding: {
    logoText: "Your Brand", // Company name
  },

  // 📱 WhatsApp Setup (REQUIRED)
  whatsapp: {
    phoneNumber: "1234567890", // Format: country code + number (no + or spaces)
    defaultMessage: "Hi! I'm interested in learning more",
  },

  // 🎯 Hero Section (Customize for your product/service)
  hero: {
    headline: "La solución que estabas buscando",
    subheadline: "Obtén información personalizada y resuelve todas tus dudas al instante.",
    ctaPrimary: "Consultar por WhatsApp",
  },

  // ✅ Trust Badges
  trustBadges: [
    { icon: "clock", text: "Instant response" },
    { icon: "shield", text: "Secure & reliable" },
    { icon: "users", text: "Thousands served" },
  ],

  // 💎 Benefits (6 cards)
  benefits: [
    { icon: "zap", title: "Instant customer attention", description: "..." },
    // ... customize all 6 benefits
  ],

  // 📊 Metrics/Stats (4 blocks)
  metrics: [
    { value: "3x", label: "More leads", description: "..." },
    // ... customize all 4 metrics
  ],

  // 🌟 Why Choose Us (6 reasons)
  whyChoose: [
    { title: "Fast and simple communication", description: "..." },
    // ... customize all 6 reasons
  ],

  // 📋 How It Works (3 steps)
  howItWorks: [
    { step: "1", title: "Customer clicks your ad", description: "..." },
    { step: "2", title: "They contact via WhatsApp", description: "..." },
    { step: "3", title: "You close the sale", description: "..." },
  ],

  // 🎬 Final CTA
  finalCTA: {
    headline: "Start getting more customers today",
    subheadline: "Join hundreds of businesses already growing with WhatsApp",
    buttonText: "Message us on WhatsApp",
  },

  // 💬 Floating popup
  popup: {
    delay: 3000,
    message: "Need help?",
    description: "We can guide you by WhatsApp.",
    buttonText: "Start chat",
  },
} as const
\`\`\`

### 2. Customize Colors (Optional)

Edit `app/globals.css` to match your brand:

\`\`\`css
:root {
  --whatsapp-green: oklch(0.65 0.16 155); /* Keep green for WhatsApp */
  --background: oklch(0.08 0 0); /* Dark background */
  --foreground: oklch(0.99 0 0); /* White text */
  /* Add custom brand colors if needed */
}
\`\`\`

### 3. Add Your Logo (Optional)

Option A: Use text logo (default)
- Already configured in `landingContent.branding.logoText`

Option B: Use image logo
1. Add logo to `public/logo.png`
2. Update the markup inside `components/header.tsx` to render the image instead of text

### 4. Deploy

Deploy to Vercel or any hosting platform:

\`\`\`bash
npm install
npm run build
npm start
\`\`\`

## Page Structure

1. **Header** - Logo + Contact button (sticky)
2. **Hero Section** - Headline, subheadline, primary CTA, 3 trust badges
3. **Benefits Section** - 6 value proposition cards with icons
4. **Metrics Section** - 4 social proof statistics
5. **Why Choose Section** - 6 detailed reasons with descriptions
6. **How It Works** - 3-step process explanation
7. **Final CTA Section** - Strong closing with WhatsApp button
8. **Floating WhatsApp Button** - Appears when user scrolls down

## Customization Guide

### Removing Sections

Edit `app/page.tsx` to show/hide sections:

\`\`\`tsx
export default function LandingPage() {
  const { branding, whatsapp, hero, trustBadges, benefits, metrics, whyChoose, howItWorks, finalCTA, popup } =
    landingContent

  return (
    <div className="min-h-screen bg-background">
      <Header branding={branding} whatsapp={whatsapp} />
      <main>
        <HeroSection hero={hero} trustBadges={trustBadges} whatsapp={whatsapp} />
        <FeaturesSection benefits={benefits} />
        {/* <MetricsSection metrics={metrics} /> */} {/* Hide by commenting out */}
        <WhyChooseSection reasons={whyChoose} />
        <HowItWorksSection steps={howItWorks} />
        <CTASection finalCTA={finalCTA} whatsapp={whatsapp} />
      </main>
      <FloatingWhatsApp whatsapp={whatsapp} popup={popup} />
    </div>
  )
}
\`\`\`

### Changing Icons

Available icons in benefits section:
- `zap`, `clock`, `trending-up`, `message-circle`, `check-circle`, `heart`

Update `landingContent.benefits` in `app/page.tsx`:

\`\`\`typescript
benefits: [
  { icon: "zap", title: "Your title", description: "..." },
]
\`\`\`

### WhatsApp Number Format

Always use: country code + phone number (no + or spaces)

Examples:
- USA: `15551234567`
- UK: `447911123456`
- Spain: `34612345678`
- Argentina: `5491112345678`

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom React components
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Performance**: Optimized for Core Web Vitals

## File Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout + metadata
│   └── globals.css       # Global styles + design tokens
├── components/
│   ├── header.tsx        # Header with logo + CTA
│   ├── hero-section.tsx  # Hero with headline + trust badges
│   ├── features-section.tsx  # Benefits grid
│   ├── metrics-section.tsx   # Stats/social proof
│   ├── why-choose-section.tsx  # Detailed reasons
│   ├── how-it-works-section.tsx  # 3-step process
│   ├── cta-section.tsx   # Final call-to-action
│   ├── whatsapp-button.tsx  # Reusable WhatsApp button
│   └── floating-whatsapp.tsx  # Floating sticky button
\`\`\`

## Troubleshooting

**WhatsApp not opening?**
- Check phone number format (no + or spaces)
- Test on mobile device
- Verify WhatsApp is installed

**Page looks different on mobile?**
- Clear cache and hard refresh
- Test in mobile browser or device emulator
- Check responsive breakpoints in DevTools

**Want to change fonts?**
- Default: Geist Sans (clean, modern)
- Edit `app/layout.tsx` to change font imports
- Update `app/globals.css` font variables

## SEO Optimization

1. Edit `seoContent` in `app/layout.tsx`
2. Update meta title and description for your industry
3. Add relevant keywords
4. Test with Google's Rich Results Test
5. Verify mobile-friendliness

## Customization Examples by Industry

### Example 1: Alarm Systems
\`\`\`typescript
landingContent.hero = {
  headline: "Protege lo que más importa",
  subheadline: "Sistemas de alarmas monitoreadas 24/7. Cotización gratuita por WhatsApp.",
}
\`\`\`

### Example 2: Internet Services
\`\`\`typescript
landingContent.hero = {
  headline: "Internet de alta velocidad para tu hogar",
  subheadline: "Planes desde $29/mes. Consulta cobertura en tu zona ahora.",
}
\`\`\`

### Example 3: Real Estate
\`\`\`typescript
landingContent.hero = {
  headline: "Encuentra la propiedad de tus sueños",
  subheadline: "Casas, departamentos y locales comerciales. Agenda tu visita por WhatsApp.",
}
\`\`\`

### Example 4: Automotive
\`\`\`typescript
landingContent.hero = {
  headline: "El auto que buscas al mejor precio",
  subheadline: "Financiamiento disponible. Consulta stock y ofertas especiales.",
}
\`\`\`

### Example 5: Health Services
\`\`\`typescript
landingContent.hero = {
  headline: "Cuida tu salud con los mejores especialistas",
  subheadline: "Agenda tu consulta en minutos. Atención inmediata por WhatsApp.",
}
\`\`\`

## Content Strategy Tips

### Writing Product-Focused Headlines
✅ **DO**: "Internet de 300MB por solo $39/mes"  
❌ **DON'T**: "Get more leads with our platform"

✅ **DO**: "Alarmas monitoreadas desde $15/mes"  
❌ **DON'T**: "Scale your business with AI"

### Trust Elements for Product Sales
- Price transparency: "Desde $X/mes" or "Consulta tu cotización"
- Availability: "Cobertura en tu zona" or "Stock disponible"
- Guarantees: "Garantía de 30 días" or "Devolución gratis"
- Social proof: "5,000+ clientes satisfechos"
- Speed: "Instalación en 24hs" or "Respuesta inmediata"

## License

This is a white-label template. Use for unlimited clients and projects.

## Support

Customize freely for your needs.

---

**Ready to convert more customers? Start by editing the `landingContent` object in `app/content.ts`** 🚀
