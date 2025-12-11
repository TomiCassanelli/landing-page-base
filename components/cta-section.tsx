"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"

type CTASectionProps = {
  finalCTA: {
    headline: string
    subheadline: string
    buttonText: string
  }
  footerText: string
  whatsapp: {
    phoneNumber: string
    defaultMessage: string
  }
}

export function CTASection({ finalCTA, footerText, whatsapp }: CTASectionProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection animation="fade-scale">
          <div className="bg-gradient-to-br from-primary/10 via-accent to-background rounded-2xl p-8 md:p-16 text-center space-y-6 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{finalCTA.headline}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{finalCTA.subheadline}</p>
            <div className="pt-4">
              <WhatsAppButton
                size="lg"
                label={finalCTA.buttonText}
                phoneNumber={whatsapp.phoneNumber}
                defaultMessage={whatsapp.defaultMessage}
              />
            </div>
            <p className="text-sm text-muted-foreground">{footerText}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
