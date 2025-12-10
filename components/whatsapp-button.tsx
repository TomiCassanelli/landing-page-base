"use client";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  label: string;
  phoneNumber: string;
  defaultMessage: string;
  size?: "default" | "sm" | "lg";
  className?: string;
  variant?: "whatsapp" | "primary";
}

const sizeClasses: Record<NonNullable<WhatsAppButtonProps["size"]>, string> = {
  default: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  whatsapp: "bg-whatsapp-green hover:bg-whatsapp-green-dark text-background",
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground",
};

export function WhatsAppButton({
  label,
  phoneNumber,
  defaultMessage,
  size = "default",
  className,
  variant = "whatsapp",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${className || ""}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </button>
  );
}
