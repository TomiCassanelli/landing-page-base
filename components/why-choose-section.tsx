"use client"

import { CheckCircle2, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

type WhyChooseSectionProps = {
  title: string
  subtitle: string
  reasons: {
    title: string
    description: string
  }[]
}

export function WhyChooseSection({ title, subtitle, reasons }: WhyChooseSectionProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{subtitle}</p>
              <ul className="space-y-4">
                {reasons.map((item, index) => (
                  <li key={index} className="space-y-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-semibold text-foreground">{item.title}</span>
                    </div>
                    <p className="text-muted-foreground ml-9">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-background border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">Protección garantizada</p>
                  <p className="text-muted-foreground">Tu tranquilidad es nuestra prioridad</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
