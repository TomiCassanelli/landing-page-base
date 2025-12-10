"use client";

import { useState } from "react";

type NewsletterSectionProps = {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  validationMessages: {
    emailRequired: string;
    emailInvalid: string;
  };
  successMessage: string;
  disclaimer: string;
};

export function NewsletterSection({
  title,
  subtitle,
  placeholder,
  buttonText,
  validationMessages,
  successMessage,
  disclaimer,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage(validationMessages.emailRequired);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage(validationMessages.emailInvalid);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessage(successMessage);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? "Suscribiendo..." : buttonText}
              </button>
            </div>
            {message && (
              <p
                className={`text-sm ${
                  message.includes("Gracias")
                    ? "text-green-600"
                    : "text-destructive"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <p className="text-sm text-muted-foreground">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
