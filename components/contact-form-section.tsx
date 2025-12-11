"use client";

import { useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { event as trackFacebookEvent } from "@/app/lib/fbpixel";

type ContactFormSectionProps = {
  title: string;
  subtitle: string;
  formLabels: {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
  };
  formPlaceholders: {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
  };
  validationMessages: {
    fullNameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    cityRequired: string;
    countryRequired: string;
  };
  submitButton: {
    text: string;
    submittingText: string;
  };
  successMessage: string;
  whatsappSection: {
    title: string;
    description: string;
    buttonText: string;
  };
  contactInfo: {
    email: string;
    whatsapp: string;
    schedule: string;
  };
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
  };
};

export function ContactFormSection({
  title,
  subtitle,
  formLabels,
  formPlaceholders,
  validationMessages,
  submitButton,
  successMessage,
  whatsappSection,
  contactInfo,
  whatsapp,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = validationMessages.fullNameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = validationMessages.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = validationMessages.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = validationMessages.phoneRequired;
    }

    if (!formData.city.trim()) {
      newErrors.city = validationMessages.cityRequired;
    }

    if (!formData.country.trim()) {
      newErrors.country = validationMessages.countryRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    trackFacebookEvent("Lead", {
      content_name: "ContactForm",
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      country: formData.country,
    });

    // Construct WhatsApp message
    const message = [
      "Hola! Me interesa conocer más sobre sus servicios.",
      "",
      "*Mis datos son:*",
      `*Nombre:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Teléfono:* ${formData.phone}`,
      `*Ciudad:* ${formData.city}`,
      `*País:* ${formData.country}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsapp.phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {formLabels.fullName} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder={formPlaceholders.fullName}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {formLabels.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder={formPlaceholders.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {formLabels.phone} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder={formPlaceholders.phone}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {formLabels.city} *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.city ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder={formPlaceholders.city}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {formLabels.country} *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.country ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder={formPlaceholders.country}
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.country}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? submitButton.submittingText : submitButton.text}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
