"use client"

import { Clock, Shield, Users, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import Image from "next/image"

const iconMap = {
  clock: Clock,
  shield: Shield,
  users: Users,
}

type HeroSectionProps = {
  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
  }
  trustBadges: {
    icon: keyof typeof iconMap
    text: string
  }[]
  whatsapp: {
    phoneNumber: string
    defaultMessage: string
  }
}

export function HeroSection({ hero, trustBadges, whatsapp }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E3B] via-[#155635] to-[#0d3d25]" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="text-left flex flex-col justify-center space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Monitoreo activo 24/7</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Tu tranquilidad,
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                  nuestra prioridad
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Protegé tu hogar y tu negocio con tecnología de seguridad avanzada. Alarmas y cámaras monitoreadas 24hs.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <ul className="space-y-3">
                {[
                  "Cotización gratuita y sin compromiso",
                  "Instalación profesional incluida",
                  "Soporte técnico permanente",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(whatsapp.defaultMessage)
                    window.open(`https://wa.me/${whatsapp.phoneNumber}?text=${encodedMessage}`, "_blank")
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-whatsapp-green hover:bg-whatsapp-green-dark text-white font-semibold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
                >
                  <WhatsAppIcon size={22} />
                  {hero.ctaPrimary}
                </button>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Conocé más
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
                {trustBadges.map((badge, index) => {
                  const Icon = iconMap[badge.icon]
                  if (!Icon) return null
                  return (
                    <div key={index} className="flex items-center gap-2 text-white/70">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-scale" delay={300} className="hidden lg:flex">
            {/* Contenedor principal de la imagen con la card de 15 min posicionada en la esquina */}
            <div className="relative w-full flex flex-col">
              <div className="relative flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 shadow-2xl">
                <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 relative min-h-[400px]">
                  <Image
                    src="/happy-family-at-home-living-room-modern-security.png"
                    alt="Familia protegida en su hogar"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Card de 15 min apoyada en la esquina superior derecha de la imagen */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-2xl border border-gray-100 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#1B5E3B]" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#1B5E3B]">15 min</p>
                      <p className="text-gray-500 text-xs">Tiempo respuesta</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards de Sistema activo y 500+ Familias debajo de la imagen */}
              <div className="flex gap-4 mt-4">
                <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#1B5E3B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1B5E3B] font-bold text-sm">Sistema activo</p>
                      <p className="text-gray-600 text-xs truncate">Protección 24/7</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#1B5E3B]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1B5E3B]">500+</p>
                      <p className="text-gray-500 text-xs">Familias protegidas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
