import Image from "next/image"

interface WhatsAppIconProps {
  size?: number
  className?: string
}

export function WhatsAppIcon({ size = 20, className = "" }: WhatsAppIconProps) {
  return <Image src="/whatsapp-icon-white.png" alt="WhatsApp" width={size} height={size} className={className} />
}
