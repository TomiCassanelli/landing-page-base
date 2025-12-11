"use client"

import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

type FooterProps = {
  branding: {
    logoText: string
    description: string
  }
  whatsapp: {
    phoneNumber: string
    defaultMessage: string
  }
  links: {
    title: string
    items: {
      label: string
      href: string
    }[]
  }[]
  copyright: {
    text: string
    year: string
  }
  legalLinks: {
    privacy: string
    terms: string
  }
}

export function Footer({ branding, links, copyright, legalLinks }: FooterProps) {
  return (
    <footer className="bg-[#1B5E3B] text-white">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/logo!white.png"
                alt={branding.logoText}
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />
              <p className="text-white/80 text-sm">{branding.description}</p>
            </div>

            {/* Links */}
            {links.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {copyright.year} {branding.logoText}. {copyright.text}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              {legalLinks.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {legalLinks.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
