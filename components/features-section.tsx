"use client"

import { Zap, Clock, TrendingUp, MessageCircle, CheckCircle, Heart, Shield, Camera, Bell, Wrench } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const iconMap = {
  zap: Zap,
  clock: Clock,
  "trending-up": TrendingUp,
  "message-circle": MessageCircle,
  "check-circle": CheckCircle,
  heart: Heart,
  shield: Shield,
  camera: Camera,
  bell: Bell,
  tool: Wrench,
}

type FeaturesSectionProps = {
  title: string
  subtitle: string
  benefits: {
    icon: keyof typeof iconMap
    title: string
    description: string
  }[]
}

export function FeaturesSection({ title, subtitle, benefits }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            if (!Icon) {
              return null
            }
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
