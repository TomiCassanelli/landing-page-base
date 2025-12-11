"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { Clock, Shield, Users } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

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
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--primary)_8%,transparent),transparent_50%)]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
              {hero.headline}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              {hero.subheadline}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-scale" delay={300}>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                size="lg"
                label={hero.ctaPrimary}
                phoneNumber={whatsapp.phoneNumber}
                defaultMessage={whatsapp.defaultMessage}
                variant="primary"
              />
            </div>
          </AnimatedSection>

          {/* Trust badges con animación staggered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon]
              if (!Icon) {
                return null
              }
              return (
                <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-left">{badge.text}</span>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
