import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MetricsSection } from "@/components/metrics-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { landingContent } from "./content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: landingContent.branding.logoText,
  description: landingContent.seo.description,
  keywords: landingContent.seo.keywords,
  openGraph: {
    title: landingContent.branding.logoText,
    description: landingContent.seo.description,
    type: "website",
  },
}

export default function LandingPage() {
  const { branding, whatsapp, hero, trustBadges, benefits, featuresTitle, featuresSubtitle, metrics, metricsTitle, metricsSubtitle, whyChoose, whyChooseTitle, whyChooseSubtitle, howItWorks, howItWorksTitle, howItWorksSubtitle, testimonials, faqs, faqTitle, faqSubtitle, contactFormTitle, contactFormSubtitle, contactFormLabels, contactFormPlaceholders, contactFormValidation, contactFormSubmit, contactFormSuccess, contactFormWhatsapp, contactFormInfo, pricingTitle, pricingSubtitle, pricingPlans, aboutTitle, aboutSubtitle, aboutContent, aboutStats, newsletterTitle, newsletterSubtitle, newsletterPlaceholder, newsletterButtonText, newsletterValidation, newsletterSuccess, newsletterDisclaimer, teamTitle, teamSubtitle, teamMembers, finalCTA, ctaFooterText, footerLinks, footerBranding, footerCopyright, footerLegal, popup } =
    landingContent

  return (
    <div className="min-h-screen bg-background">
      <Header branding={branding} whatsapp={whatsapp} />
      <main>
        <HeroSection hero={hero} trustBadges={trustBadges} whatsapp={whatsapp} />
        <FeaturesSection title={featuresTitle} subtitle={featuresSubtitle} benefits={benefits} />
        <MetricsSection title={metricsTitle} subtitle={metricsSubtitle} metrics={metrics} />
        <WhyChooseSection title={whyChooseTitle} subtitle={whyChooseSubtitle} reasons={whyChoose} />
        <HowItWorksSection title={howItWorksTitle} subtitle={howItWorksSubtitle} steps={howItWorks} />
        <AboutSection title={aboutTitle} subtitle={aboutSubtitle} content={aboutContent} stats={aboutStats} />
        <TeamSection title={teamTitle} subtitle={teamSubtitle} members={teamMembers} />
        <TestimonialsSection testimonials={testimonials} />
        <PricingSection title={pricingTitle} subtitle={pricingSubtitle} plans={pricingPlans} whatsapp={whatsapp} />
        <FAQSection
          title={faqTitle}
          subtitle={faqSubtitle}
          faqs={faqs}
        />
        <ContactFormSection title={contactFormTitle} subtitle={contactFormSubtitle} formLabels={contactFormLabels} formPlaceholders={contactFormPlaceholders} validationMessages={contactFormValidation} submitButton={contactFormSubmit} successMessage={contactFormSuccess} whatsappSection={contactFormWhatsapp} contactInfo={contactFormInfo} whatsapp={whatsapp} />
        <NewsletterSection title={newsletterTitle} subtitle={newsletterSubtitle} placeholder={newsletterPlaceholder} buttonText={newsletterButtonText} validationMessages={newsletterValidation} successMessage={newsletterSuccess} disclaimer={newsletterDisclaimer} />
        <CTASection finalCTA={finalCTA} footerText={ctaFooterText} whatsapp={whatsapp} />
      </main>
      <Footer branding={footerBranding} whatsapp={whatsapp} links={footerLinks} copyright={footerCopyright} legalLinks={footerLegal} />
      <FloatingWhatsApp whatsapp={whatsapp} popup={popup} />
    </div>
  )
}
