type PricingSectionProps = {
  title: string;
  subtitle: string;
  plans: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
    buttonText: string;
  }[];
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
  };
};

export function PricingSection({
  title,
  subtitle,
  plans,
  whatsapp,
}: PricingSectionProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl border ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${
                    whatsapp.phoneNumber
                  }?text=${encodeURIComponent(
                    `Hola! Me interesa el plan ${plan.name}. ${whatsapp.defaultMessage}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
