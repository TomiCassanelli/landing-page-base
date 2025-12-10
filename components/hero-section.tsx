import { WhatsAppButton } from "@/components/whatsapp-button";
import { Clock, Shield, Users } from "lucide-react";

const iconMap = {
  clock: Clock,
  shield: Shield,
  users: Users,
};

type HeroSectionProps = {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
  };
  trustBadges: {
    icon: keyof typeof iconMap;
    text: string;
  }[];
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
  };
};

export function HeroSection({ hero, trustBadges, whatsapp }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--primary)_5%,transparent),transparent_50%)]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {hero.subheadline}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              size="lg"
              label={hero.ctaPrimary}
              phoneNumber={whatsapp.phoneNumber}
              defaultMessage={whatsapp.defaultMessage}
              variant="primary"
            />
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon];
              if (!Icon) {
                return null;
              }
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-left">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
