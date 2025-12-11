"use client"

import { AnimatedSection } from "@/components/animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

type MetricsSectionProps = {
  title: string
  subtitle: string
  metrics: {
    value: string
    label: string
    description: string
  }[]
}

function AnimatedValue({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(value)

  // Extraer número del valor (ej: "500+" -> 500)
  const numericMatch = value.match(/(\d+)/)
  const numericValue = numericMatch ? Number.parseInt(numericMatch[1]) : null
  const prefix = value.match(/^[^\d]*/)?.[0] || ""
  const suffix = value.match(/[^\d]*$/)?.[0] || ""

  useEffect(() => {
    if (!isVisible || numericValue === null) {
      setDisplayValue(value)
      return
    }

    const start = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeOut * numericValue)

      setDisplayValue(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, numericValue, value, prefix, suffix])

  return <>{displayValue}</>
}

export function MetricsSection({ title, subtitle, metrics }: MetricsSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <section className="py-20 px-4 bg-accent/50">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
          </div>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedSection key={index} animation="fade-scale" delay={index * 150}>
              <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  <AnimatedValue value={metric.value} isVisible={isVisible} />
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
