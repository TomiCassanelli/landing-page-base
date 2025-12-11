"use client"

import { MousePointerClick, MessageCircle, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const iconMap = {
  "1": MousePointerClick,
  "2": MessageCircle,
  "3": CheckCircle,
}

type HowItWorksSectionProps = {
  title: string
  subtitle: string
  steps: {
    step: keyof typeof iconMap
    title: string
    description: string
  }[]
}

export function HowItWorksSection({ title, subtitle, steps }: HowItWorksSectionProps) {
  return (
    <section className="py-20 px-4 bg-accent/50">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = iconMap[step.step]
            if (!Icon) {
              return null
            }
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <div className="relative">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10 hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border hidden md:block" />
                    )}
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                        Paso {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
