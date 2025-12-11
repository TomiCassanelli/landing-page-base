"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type HeaderProps = {
  branding: {
    logoText: string
    logoImage?: string
  }
  whatsapp: {
    phoneNumber: string
    defaultMessage: string
    buttonText: string
  }
}

export function Header({ branding, whatsapp }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsapp.defaultMessage)
    window.open(`https://wa.me/${whatsapp.phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-horizontal.png"
            alt={branding.logoText}
            width={220}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center rounded-full border border-primary/40 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
        >
          {whatsapp.buttonText}
        </button>
      </div>
    </header>
  )
}
