"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

type FloatingWhatsAppProps = {
  whatsapp: {
    phoneNumber: string
    defaultMessage: string
  }
  popup: {
    delay: number
    message: string
    description: string
    buttonText: string
  }
}

export function FloatingWhatsApp({ whatsapp, popup }: FloatingWhatsAppProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [hasSeenPopup, setHasSeenPopup] = useState(false)

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      if (!hasSeenPopup) {
        setIsPopupOpen(true)
        setHasSeenPopup(true)
      }
    }, popup.delay)

    return () => {
      clearTimeout(popupTimer)
    }
  }, [hasSeenPopup, popup.delay])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsapp.defaultMessage)
    window.open(`https://wa.me/${whatsapp.phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const handlePopupClick = () => {
    setIsPopupOpen(false)
    handleClick()
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      {isPopupOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-popup">
          <div className="relative bg-background border border-border rounded-2xl shadow-2xl p-4 max-w-xs">
            <button
              onClick={closePopup}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-whatsapp-green rounded-full flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon size={24} />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground mb-1">{popup.message}</p>
                <p className="text-xs text-muted-foreground mb-3">{popup.description}</p>
                <button
                  onClick={handlePopupClick}
                  className="w-full bg-whatsapp-green hover:bg-whatsapp-green-dark text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={16} />
                  {popup.buttonText}
                </button>
              </div>
            </div>

            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-background border-r border-b border-border rotate-45"></div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          if (!isPopupOpen) {
            setIsPopupOpen(true)
          } else {
            handleClick()
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp-green hover:bg-whatsapp-green-dark rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon size={32} />

        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse"></span>
      </button>
    </>
  )
}
