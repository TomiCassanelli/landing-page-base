type MetricsSectionProps = {
  title: string;
  subtitle: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
};

export function MetricsSection({
  title,
  subtitle,
  metrics,
}: MetricsSectionProps) {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
